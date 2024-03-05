<template>
  <div>
    <div v-for="pregunta in preguntas" :key="pregunta.id">
      <h3>{{ pregunta.pregunta }}</h3>
      <label :for="'preguntaSelect_' + pregunta.id">Selecciona una respuesta:</label>
      <select :id="'preguntaSelect_' + pregunta.id" v-model="pregunta.selectedRespuestaId">
        <option v-for="respuesta in pregunta.respuestas || []" :key="respuesta.id" :value="respuesta.id">
          {{ respuesta.respuesta }}
        </option>
      </select>
      <div v-if="pregunta.selectedRespuestaId !== null">
        <p>{{ getPreguntaSeleccionada(pregunta).respuesta }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { preguntas, Pregunta } from '@/respuestas/respuestas';

// Define las preguntas como un ref
const preguntasRef = ref<Pregunta[]>(preguntas);

// Agregar una propiedad `selectedRespuestaId` a cada pregunta
preguntasRef.value.forEach(pregunta => {
  pregunta.selectedRespuestaId = ref<number | null>(null);
});

// Función para obtener la respuesta seleccionada
const getPreguntaSeleccionada = (pregunta: Pregunta) => {
  return pregunta.respuestas ? pregunta.respuestas.find(respuesta => respuesta.id === pregunta.selectedRespuestaId) || {} : {};
};
</script>
