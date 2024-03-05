
export interface Answer {
    id: number
    answer: string
  }
  
  export interface Question {
    id: number
    question: string
    answers?: Answer[]
    seleccion: number | null
  }

  export const QuizData: Question[] = [
    {
        id: 1,
        question: "¿Cuál es el propósito principal de los menús en un sitio web?",
        answers: [
          { id: 1, answer: "Mostrar una lista de opciones de navegación para acceder a diferentes partes del sitio." }
        ],
        seleccion: null
      },
      {
        id: 2,
        question: "¿Cuál es la función principal de los breadcrumbs en un sitio web?",
        answers: [
          { id: 1, answer: "Indicar el progreso del usuario en una tarea específica." }
        ],
        seleccion: null 
      },
      {
        id: 3,
        question: "¿Qué aspecto de la estructura de un sitio web se refiere a la organización y relación entre las diversas páginas?",
        answers: [
          { id: 1, answer: "Jerarquía de sitios web" }
        ],
        seleccion: null 
      },
      {
        id: 4,
        question: "¿Qué representa la jerarquía de sitios web?",
        answers: [
          { id: 1, answer: "La disposición de las páginas y la relación entre ellas en un sitio web" }
        ],
        seleccion: null 
      },
      {
        id: 5,
        question: "¿Qué elemento de un sitio web controla la presentación visual y la interacción con el usuario?",
        answers: [
          { id: 1, answer: "Componentes" }
        ],
        seleccion: null 
      },
      {
        id: 6,
        question: "¿Cuál es la función principal de los props en un framework como Vue.js o React?",
        answers: [
          { id: 1, answer: "Transmitir datos de un componente padre a un componente hijo" }
        ],
        seleccion: null 
      },
      {
        id: 7,
        question: "¿Qué concepto en Vue.js se utiliza para definir áreas flexibles en un componente donde se puede insertar contenido adicional?",
        answers: [
          { id: 1, answer: "Slots" }
        ],
        seleccion: null 
      },
      {
        id: 8,
        question: "¿Qué término se refiere a la capacidad de un componente para cambiar su estado en answer a acciones del usuario o cambios en los datos?",
        answers: [
          { id: 1, answer: "Reactividad" }
        ],
        seleccion: null 
      },
      {
        id: 9,
        question: "¿Cuál es la diferencia principal entre Composition API y Options API en Vue.js?",
        answers: [
          { id: 1, answer: "La Composition API proporciona una forma más flexible y escalable de definir la lógica del componente en comparación con la Options API." }
        ],
        seleccion: null 
      },
      {
        id: 10,
        question: "¿Cuál de las siguientes opciones describe mejor la función de los menús en un sitio web?",
        answers: [
          { id: 1, answer: "Mostrar una lista de opciones de navegación para que los usuarios accedan a diferentes partes del sitio." }
        ],
        seleccion: null 
      },
    ]