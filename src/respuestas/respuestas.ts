// respuestas.ts

export interface Respuesta {
  id: number;
  respuesta: string;
}

export interface Pregunta {
  id: number;
  pregunta: string;
  respuestas?: Respuesta[]; // Marcar como opcional
  selectedRespuestaId: number | null;
}

export const preguntas: Pregunta[] = [
  {
    id: 1,
    pregunta: "¿Cuál es el propósito principal de los menús en un sitio web?",
    respuestas: [
      { id: 1, respuesta: "Mostrar una lista de opciones de navegación para acceder a diferentes partes del sitio." }
    ],
    selectedRespuestaId: null
  },
  {
    id: 2,
    pregunta: "¿Cuál es la función principal de los breadcrumbs en un sitio web?",
    respuestas: [
      { id: 1, respuesta: "Indicar el progreso del usuario en una tarea específica." }
    ],
    selectedRespuestaId: null 
  },
  {
    id: 3,
    pregunta: "¿Qué aspecto de la estructura de un sitio web se refiere a la organización y relación entre las diversas páginas?",
    respuestas: [
      { id: 1, respuesta: "Jerarquía de sitios web" }
    ],
    selectedRespuestaId: null 
  },
  {
    id: 4,
    pregunta: "¿Qué representa la jerarquía de sitios web?",
    respuestas: [
      { id: 1, respuesta: "La disposición de las páginas y la relación entre ellas en un sitio web" }
    ],
    selectedRespuestaId: null 
  },
  {
    id: 5,
    pregunta: "¿Qué elemento de un sitio web controla la presentación visual y la interacción con el usuario?",
    respuestas: [
      { id: 1, respuesta: "Componentes" }
    ],
    selectedRespuestaId: null 
  },
  {
    id: 6,
    pregunta: "¿Cuál es la función principal de los props en un framework como Vue.js o React?",
    respuestas: [
      { id: 1, respuesta: "Transmitir datos de un componente padre a un componente hijo" }
    ],
    selectedRespuestaId: null 
  },
  {
    id: 7,
    pregunta: "¿Qué concepto en Vue.js se utiliza para definir áreas flexibles en un componente donde se puede insertar contenido adicional?",
    respuestas: [
      { id: 1, respuesta: "Slots" }
    ],
    selectedRespuestaId: null 
  },
  {
    id: 8,
    pregunta: "¿Qué término se refiere a la capacidad de un componente para cambiar su estado en respuesta a acciones del usuario o cambios en los datos?",
    respuestas: [
      { id: 1, respuesta: "Reactividad" }
    ],
    selectedRespuestaId: null 
  },
  {
    id: 9,
    pregunta: "¿Cuál es la diferencia principal entre Composition API y Options API en Vue.js?",
    respuestas: [
      { id: 1, respuesta: "La Composition API proporciona una forma más flexible y escalable de definir la lógica del componente en comparación con la Options API." }
    ],
    selectedRespuestaId: null 
  },
  {
    id: 10,
    pregunta: "¿Cuál de las siguientes opciones describe mejor la función de los menús en un sitio web?",
    respuestas: [
      { id: 1, respuesta: "Mostrar una lista de opciones de navegación para que los usuarios accedan a diferentes partes del sitio." }
    ],
    selectedRespuestaId: null 
  },
];
