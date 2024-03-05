<template>
    <div class="quiz-container">
        <h1 class="titulo">Acción de Mejora </h1>
        <h2 class="titulo">Fernando Martínez Mendiola</h2>
      <div v-for="question in QuizData" :key="question.id" class="question-container">
        <h3>{{ question.question }}</h3>
        <label :for="'selectId' + question.id"></label>
        <select :id="'selectId' + question.id" v-model="question.seleccion" class="select-box">
          <option v-for="answer in question.answers || []" :key="answer.id" :value="answer.id">
            {{ answer.answer }}
          </option>
        </select>
        <div v-if="question.seleccion !== null" class="answer-container">
          <p>{{ getAns(question).answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { QuizData,  Question} from '@/data/QuizData'
  
  const ans = ref<Question[]>(QuizData);
  
  ans.value.forEach(question => {
    question.seleccion = ref<number | null>(null);
  })

  const getAns = (question: Question) => {
    return question.answers ? question.answers.find(answer => answer.id === question.seleccion) || {} : {};
  }
  </script>
  
  
  <style scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}
.titulo{
    margin: 6px;
}

.question-container {
  margin-bottom: 20px;
}

.select-box {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
  width: 300px; 
  max-width: 100%; 
  overflow: hidden; 
}

.select-box:focus {
  outline: none;
  border-color: #007bff;
}

.option {
  max-width: 100%;
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis;
}

.answer-container {
  margin-top: 10px;
  font-style: italic;
  color: #888;
}
</style>