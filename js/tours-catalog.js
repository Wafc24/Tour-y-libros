/**
 * Catálogo Maestro de Tours Guiados Pedagógicos
 * ============================================
 * Contiene los datasets pedagógicos de:
 * 1. Misión Saber 3° - Matemáticas (Fases 1 a 4)
 * 2. Misión Saber 11° - Física (Pasos 1 a 4)
 */

window.TOURS_CATALOG = [
  {
    id: "matematicas3",
    title: "Misión Saber 3° • Matemáticas",
    shortTitle: "3° Matemáticas",
    subtitle: "Educación Básica Primaria • Enfoque por Fases",
    gradeBadge: "3° PRIMARIA",
    subjectBadge: "MATEMÁTICAS",
    icon: "📐",
    coverImg: "books/ms3/page_001.jpg",
    previewImg: "books/ms3/page_180.jpg",
    theme: "theme-matematicas",
    bookId: "ms3",
    bookStartPage: 180,
    stepsUnitName: "Fase",
    stepsUnitPlural: "Fases",
    description: "Recorrido pedagógico paso a paso por las 4 fases de la Unidad de Matemáticas (Págs. 180 a 198), con contextualización, modelado metacognitivo, conceptualización y prueba de campo.",
    steps: [
      {
        id: "fase1",
        stepNum: 1,
        title: "Fase 1: Centro de Comando",
        badge: "Fase 1 • Centro de Comando (Págs. 180 - 181)",
        purpose: "Contextualizar el aprendizaje, motivar al estudiante y activar sus presaberes antes de abordar los conceptos formales de matemáticas.",
        pages: [
          { pageNumber: 180, label: "Pág. 180 (Puntos 1 al 5)", imageSrc: "books/ms3/page_180.jpg" },
          { pageNumber: 181, label: "Pág. 181 (Puntos 6 al 8)", imageSrc: "books/ms3/page_181.jpg" }
        ],
        avatar: { name: "Comandante Leo", role: "Líder de Misión", src: "avatar_nino.png" },
        items: [
          {
            num: 1,
            pageNumber: 180,
            top: 24,
            left: 36,
            shortLabel: "1. Título de Misión",
            title: "1. El Título de Misión (Activando el sistema de navegación)",
            explanation: "Rompe con el esquema tradicional de 'Unidad 1'. Convierte la clase de matemáticas en una misión espacial donde el estudiante es el protagonista (comandante).",
            pedagogy: "Estimula la motivación intrínseca y da un sentido narrativo al aprendizaje."
          },
          {
            num: 2,
            pageNumber: 180,
            top: 40,
            left: 32,
            shortLabel: "2. ¿Cuál es el desafío?",
            title: "2. ¿Cuál es nuestro desafío?",
            explanation: "Presenta el problema a resolver. Conecta las matemáticas con situaciones concretas (organizar información, reconocer patrones, analizar señales) en lugar de presentar números aislados.",
            pedagogy: "Plantea un aprendizaje basado en problemas y retos contextualizados."
          },
          {
            num: 3,
            pageNumber: 180,
            top: 46,
            left: 32,
            shortLabel: "3. Reto de la Misión",
            title: "3. Reto de la Misión",
            explanation: "Es el objetivo de aprendizaje planteado como una meta alcanzable (crear un mapa del planeta usando datos y patrones). Le da sentido a todo lo que se hará en la unidad.",
            pedagogy: "Define metas claras y alcanzables que orientan la auto-evaluación."
          },
          {
            num: 4,
            pageNumber: 180,
            top: 56,
            left: 32,
            shortLabel: "4. Cápsula ECO",
            title: "4. Cápsula ECO",
            explanation: "Espacio vital para la educación socioemocional. En matemáticas, la frustración es común. Aquí se enseña a identificar emociones y valorar las ideas de los compañeros al resolver problemas.",
            pedagogy: "Desarrolla habilidades socioemocionales indispensables para la resiliencia en ciencias."
          },
          {
            num: 5,
            pageNumber: 180,
            top: 72,
            left: 34,
            shortLabel: "5. Conexión Space-Gec",
            title: "5. Conexión Space-Gec (Plataforma Digital)",
            explanation: "Integración inmediata del ecosistema digital. El estudiante es invitado a ampliar la narrativa espacial mediante un video interactivo, uniendo el libro físico con la plataforma.",
            pedagogy: "Articula el aula física con el entorno digital y el ecosistema híbrido."
          },
          {
            num: 6,
            pageNumber: 181,
            top: 22,
            left: 50,
            shortLabel: "6. Actividad Diagnóstico",
            title: "6. Actividad Diagnóstico (Despegamos... ¿Qué sabemos?)",
            explanation: "No es un examen punitivo. Es un 'calentamiento' cognitivo (ej. comparar y ordenar números en meteoritos) para que el docente identifique cómo llegan los estudiantes.",
            pedagogy: "Evaluación diagnóstica formativa sin calificación punitiva."
          },
          {
            num: 7,
            pageNumber: 181,
            top: 54,
            left: 50,
            shortLabel: "7. Diccionario de Misión",
            title: "7. Diccionario de la Misión",
            explanation: "Estandarización del lenguaje matemático. Conceptos clave (número, patrón, secuencia) definidos de forma sencilla para que todos hablen el mismo idioma durante la misión.",
            pedagogy: "Nivelación del vocabulario disciplinar para evitar confusiones semánticas."
          },
          {
            num: 8,
            pageNumber: 181,
            top: 82,
            left: 50,
            shortLabel: "8. Navegando Misión",
            title: "8. Navegando por la Misión",
            explanation: "Un mapa de ruta. Le explica al estudiante (y al docente) qué pasará en cada una de las 4 fases de la unidad, promoviendo la autonomía y la organización.",
            pedagogy: "Fomenta la autorregulación metacognitiva y la claridad de ruta de aprendizaje."
          }
        ]
      },
      {
        id: "fase2",
        stepNum: 2,
        title: "Fase 2: Simulador de Vuelo",
        badge: "Fase 2 • Simulador de Vuelo (Pág. 182)",
        purpose: "Enseñar explícitamente el razonamiento metacognitivo para resolver problemas tipo prueba estandarizada (ICFES Saber).",
        pages: [
          { pageNumber: 182, label: "Pág. 182 (Puntos 1 y 2)", imageSrc: "books/ms3/page_182.jpg" }
        ],
        avatar: { name: "Científica Maya", role: "Especialista Metacognitiva", src: "avatar_nina.png" },
        items: [
          {
            num: 1,
            pageNumber: 182,
            top: 28,
            left: 50,
            shortLabel: "1. Pilota tu conocimiento",
            title: "1. Pilota tu conocimiento (Las 4 Reglas de Oro)",
            explanation: "Enseña el 'cómo pensar':\n• Lupa (Identifica): Comprender qué pide el problema.\n• Brújula (Rastrea): Buscar los datos útiles (números, patrones).\n• Cerebro (Activa): Elegir la operación o estrategia matemática adecuada.\n• Aterrizaje (Responde): Comprobar la respuesta y argumentar por qué es correcta.",
            pedagogy: "Modelado metacognitivo explícito paso a paso."
          },
          {
            num: 2,
            pageNumber: 182,
            top: 64,
            left: 50,
            shortLabel: "2. Punto de Control Modelado",
            title: "2. Punto de Control Modelado",
            explanation: "No se le pide al estudiante que resuelva solo todavía. El libro le muestra un ítem real (una secuencia numérica) y desglosa frente a él cómo se aplican los 4 pasos anteriores para llegar a la respuesta correcta de forma estructurada.",
            pedagogy: "Andamiaje pedagógico guiado para evitar la frustración en pruebas tipo Saber."
          }
        ]
      },
      {
        id: "fase3",
        stepNum: 3,
        title: "Fase 3: Exploración",
        badge: "Fase 3 • Exploración de la Misión (Págs. 183 y 195)",
        purpose: "Desarrollo del componente disciplinar mediante la conceptualización, la práctica (taller) y la evaluación formativa.",
        pages: [
          { pageNumber: 183, label: "Pág. 183 (Puntos 1 al 6)", imageSrc: "books/ms3/page_183.jpg" },
          { pageNumber: 195, label: "Pág. 195 (Punto 7: Control Reforzado)", imageSrc: "books/ms3/page_195.jpg" }
        ],
        avatar: { name: "Comandante Leo", role: "Explorador de Campo", src: "avatar_nino.png" },
        items: [
          {
            num: 1,
            pageNumber: 183,
            top: 15,
            left: 24,
            shortLabel: "1. Numérico - Variacional",
            title: "1. Numérico - Variacional",
            explanation: "Identificación clara del componente evaluado por el ICFES que se está trabajando.",
            pedagogy: "Transparencia curricular frente al estándar del Ministerio de Educación."
          },
          {
            num: 2,
            pageNumber: 183,
            top: 32,
            left: 36,
            shortLabel: "2. Observando el Planeta",
            title: "2. Observando el Planeta (Conceptualización)",
            explanation: "La teoría matemática no es árida; se presenta integrada a la narrativa de la misión (ej. el extraterrestre que compara cantidades de cristales de energía).",
            pedagogy: "Gamificación y narrativa espacial para una asimilación conceptual amigable."
          },
          {
            num: 3,
            pageNumber: 183,
            top: 56,
            left: 28,
            shortLabel: "3. Punto de Control",
            title: "3. Punto de Control",
            explanation: "Una pregunta tipo Saber intercalada en el aprendizaje. Exige que el estudiante aplique lo aprendido de inmediato y justifique su respuesta, fomentando la argumentación matemática.",
            pedagogy: "Evaluación formativa continua para consolidar de inmediato cada noción."
          },
          {
            num: 4,
            pageNumber: 183,
            top: 53,
            left: 72,
            shortLabel: "4. Manos a la obra",
            title: "4. Manos a la obra",
            explanation: "La sección práctica de la clase. Ejercicios donde el estudiante actúa como 'detective' o constructor, aplicando la suma, la multiplicación o la comparación de números con objetos tangibles.",
            pedagogy: "Aprendizaje activo con material manipulativo y retos de aplicación."
          },
          {
            num: 5,
            pageNumber: 183,
            top: 86,
            left: 72,
            shortLabel: "5. Laboratorio en Casa",
            title: "5. Laboratorio en Casa",
            explanation: "Extiende el aprendizaje fuera del aula, involucrando a la familia con materiales cotidianos (recipientes y semillas) para afianzar conceptos como la adición.",
            pedagogy: "Corresponsabilidad familiar y anclaje de las matemáticas a la vida cotidiana."
          },
          {
            num: 6,
            pageNumber: 183,
            top: 88,
            left: 32,
            shortLabel: "6. Datos de la Misión",
            title: "6. Datos de la Misión",
            explanation: "Datos curiosos que conectan la matemática abstracta con el mundo real o el contexto espacial (ej. cómo los astronautas gestionan recursos sumando cantidades).",
            pedagogy: "Cultura general STEM para despertar la vocación científica."
          },
          {
            num: 7,
            pageNumber: 195,
            top: 13,
            left: 48,
            shortLabel: "7. Punto de Control Reforzado",
            title: "7. Punto de Control Reforzado (Pág. 195)",
            explanation: "Batería de 7 preguntas tipo Saber (opción múltiple) al final de la fase 3. Evalúan los aprendizajes acumulados, marcando explícitamente qué competencia miden.",
            pedagogy: "Medición diagnóstica de cierre de fase previa al simulacro formal."
          }
        ]
      },
      {
        id: "fase4",
        stepNum: 4,
        title: "Fase 4: Informando Avances",
        badge: "Fase 4 • Informando Avances (Págs. 196 y 198)",
        purpose: "Consolidación final, evaluación sumativa (simulacro) y cierre del ciclo de aprendizaje.",
        pages: [
          { pageNumber: 196, label: "Pág. 196 (Puntos 1 y 2)", imageSrc: "books/ms3/page_196.jpg" },
          { pageNumber: 198, label: "Pág. 198 (Puntos 3 y 4)", imageSrc: "books/ms3/page_198.jpg" }
        ],
        avatar: { name: "Científica Maya", role: "Directora de Evaluación", src: "avatar_nina.png" },
        items: [
          {
            num: 1,
            pageNumber: 196,
            top: 18,
            left: 28,
            shortLabel: "1. Proyecto final",
            title: "1. Proyecto final",
            explanation: "Se menciona la socialización en la plataforma digital. Es el espacio para que el trabajo individual se convierta en una construcción colectiva.",
            pedagogy: "Evaluación por proyectos y socialización colectiva de saberes."
          },
          {
            num: 2,
            pageNumber: 196,
            top: 48,
            left: 50,
            shortLabel: "2. Prueba de Campo",
            title: "2. Prueba de Campo (10 preguntas)",
            explanation: "Un mini-simulacro riguroso diseñado bajo la Estructura Basada en Evidencias (EBE) del ICFES. El estudiante se enfrenta a un cuadernillo real donde debe rellenar óvalos, manejando tiempos y contextos matemáticos.",
            pedagogy: "Entrenamiento real bajo condiciones de prueba Saber estandarizada."
          },
          {
            num: 3,
            pageNumber: 198,
            top: 36,
            left: 48,
            shortLabel: "3. Conexión SpaceGec",
            title: "3. Conexión SpaceGec (Profundización)",
            explanation: "El libro físico llega a su límite, pero el aprendizaje continúa. Se remite al estudiante a la plataforma para resolver 15 preguntas adicionales, generando analítica de datos para el docente.",
            pedagogy: "Analítica de aprendizaje y profundización personalizada en plataforma."
          },
          {
            num: 4,
            pageNumber: 198,
            top: 76,
            left: 48,
            shortLabel: "4. Finalización Misión",
            title: "4. Finalización de la Misión",
            explanation: "Un cierre narrativo que celebra el esfuerzo del estudiante y lo deja en suspenso y motivado para el próximo desafío (la siguiente misión/unidad).",
            pedagogy: "Cierre emocional positivo y motivación para el siguiente ciclo escolar."
          }
        ]
      }
    ]
  },
  {
    id: "fisica11",
    title: "Misión Saber 11° • Física",
    shortTitle: "11° Física",
    subtitle: "Educación Media • Enfoque por Pasos ICFES Saber 11",
    gradeBadge: "11° MEDIA",
    subjectBadge: "FÍSICA",
    icon: "⚛",
    coverImg: "books/ms11_tomo1/page_207.jpg",
    previewImg: "books/ms11_tomo1/page_208.jpg",
    theme: "theme-fisica",
    bookId: "ms11_t1",
    bookStartPage: 208,
    stepsUnitName: "Paso",
    stepsUnitPlural: "Pasos",
    description: "Recorrido pedagógico paso a paso por los 4 pasos del Módulo de Física (Mecánica Clásica, Págs. 208 a 218), con abordaje de variables, modelado metacognitivo Saber 11, bitácora de leyes newtonianas y prueba sumativa EBE.",
    steps: [
      {
        id: "paso1",
        stepNum: 1,
        title: "Paso 1: Abordaje",
        badge: "Paso 1 • Abordaje de la Misión (Pág. 208)",
        purpose: "Contextualizar el reto científico, delimitar el fenómeno físico a estudiar (Mecánica Clásica) y afianzar el lenguaje riguroso de variables antes de entrar al análisis matemático formal.",
        pages: [
          { pageNumber: 208, label: "Pág. 208 • Abordaje, Glosario y Compendio", imageSrc: "books/ms11_tomo1/page_208.jpg" }
        ],
        avatar: { name: "Investigador Cuántico", role: "Cátedra Saber 11", src: "avatar_nino.png" },
        items: [
          {
            num: 1,
            pageNumber: 208,
            top: 13.0,
            left: 32.0,
            shortLabel: "1. Título de Misión",
            title: "1. Título de la Misión: Mecánica Clásica",
            explanation: "Delimita el campo de la Mecánica Clásica conectando la física newtoniana con situaciones reales de la tecnología, la cinemática y la dinámica, superando la visión abstracta y memorística de la materia.",
            pedagogy: "Permite al docente situar el marco epistémico: la física de 11° no evalúa memorizar fórmulas, sino comprender los principios que gobiernan el movimiento y la conservación de la energía en el universo."
          },
          {
            num: 2,
            pageNumber: 208,
            top: 20.0,
            left: 32.0,
            shortLabel: "2. Objetivo Formativo",
            title: "2. Objetivo Formativo de la Misión",
            explanation: "Declara de manera explícita el estándar del ICFES a desarrollar: reconocer preguntas investigables, plantear procedimientos experimentales adecuados e interpretar datos y gráficas derivadas de experimentos sencillos.",
            pedagogy: "Alinea la expectativa de aprendizaje entre el docente y el estudiante. El estudiante comprende desde el primer minuto bajo qué criterios de competencia será evaluado en la prueba Saber 11."
          },
          {
            num: 3,
            pageNumber: 208,
            top: 32.0,
            left: 34.0,
            shortLabel: "3. Glosario para Misión",
            title: "3. Glosario para la Misión (Indagación)",
            explanation: "Estandarización de conceptos clave: define formalmente la 'Indagación Científica', el diseño experimental y la recolección de evidencia para homogeneizar el vocabulario técnico.",
            pedagogy: "Elimina la ambigüedad conceptual. El estudiante de 11° debe dominar la distinción entre observación empírica y modelo científico explicativo."
          },
          {
            num: 4,
            pageNumber: 208,
            top: 55.0,
            left: 32.0,
            shortLabel: "4. Compendio Misión",
            title: "4. Compendio de la Misión (Mecánica y MRUA)",
            explanation: "La mecánica clásica estudia cómo se mueven los cuerpos y las fuerzas que influyen en ese movimiento. El MRUA describe desplazamientos en línea recta con aceleración constante. En caída libre la magnitud de la aceleración es g; en un plano inclinado sin rozamiento es a = g · sen(θ). Comprender estos movimientos requiere observar, formular hipótesis y analizar datos para explicar cómo y por qué cambia la velocidad.",
            pedagogy: "Orienta el aprendizaje hacia la comprensión de conceptos y modelos científicos, superando el enfoque tradicional de mecanización de fórmulas matemáticas."
          },
          {
            num: 5,
            pageNumber: 208,
            top: 76.0,
            left: 24.0,
            shortLabel: "5. Conexión SpaceGec",
            title: "5. Conexión SpaceGec (Diagnóstico en Línea)",
            explanation: "Integración con el ecosistema digital: remite al estudiante a ingresar a la plataforma virtual para completar su prueba de diagnóstico inicial desde casa.",
            pedagogy: "Permite al docente obtener analítica de datos en tiempo real sobre los presaberes de los estudiantes antes de iniciar las clases presenciales."
          }
        ]
      },
      {
        id: "paso2",
        stepNum: 2,
        title: "Paso 2: Entrenamiento",
        badge: "Paso 2 • Zona de Entrenamiento ICFES (Págs. 209 - 211)",
        purpose: "Entrenar el razonamiento metacognitivo frente a preguntas tipo Saber 11, enseñando al estudiante a rastrear pistas en el texto, anticipar patrones y analizar la anatomía de la clave frente a los distractores.",
        pages: [
          { pageNumber: 209, label: "Pág. 209 • Pregunta Modelo", imageSrc: "books/ms11_tomo1/page_209.jpg" },
          { pageNumber: 210, label: "Pág. 210 • Reto de Competencias", imageSrc: "books/ms11_tomo1/page_210.jpg" },
          { pageNumber: 211, label: "Pág. 211 • Anatomía de la Clave", imageSrc: "books/ms11_tomo1/page_211.jpg" }
        ],
        avatar: { name: "Analista Saber", role: "Tutor de Metacognición", src: "avatar_nina.png" },
        items: [
          {
            num: 1,
            pageNumber: 209,
            top: 15.0,
            left: 24.0,
            shortLabel: "1. Ficha Técnica Saber",
            title: "1. Ficha Técnica Saber (Componente y Evidencia)",
            explanation: "Muestra explícitamente: Componente Físico (Mecánica Clásica), Competencia (Indagación) y la Evidencia evaluada (Interpreta y analiza datos representados en texto, gráficas, diagramas o tablas).",
            pedagogy: "Desmitifica la prueba estandarizada. El estudiante aprende a 'leer como el evaluador', comprendiendo la estructura de la matriz de competencias del ICFES."
          },
          {
            num: 2,
            pageNumber: 209,
            top: 26.0,
            left: 28.0,
            shortLabel: "2. Pregunta Modelada",
            title: "2. Pregunta Modelo (Laboratorio y Datos Experimentales)",
            explanation: "Situación problema real: tres estudiantes investigan en el laboratorio cómo influye el ángulo de inclinación en la aceleración de un bloque (15°, 30°, 45°) midiendo tiempos de recorrido de 1 m (2.9 s, 1.8 s, 1.4 s). Un estudiante afirma: 'La aceleración aumenta al aumentar el ángulo del plano'. ¿Cuál es el procedimiento más adecuado para comprobarlo?",
            pedagogy: "Modela la lectura comprensiva de situaciones experimentales tipo ICFES donde se debe evaluar la coherencia metodológica de una comprobación empírica."
          },
          {
            num: 3,
            pageNumber: 209,
            top: 22.0,
            left: 74.0,
            shortLabel: "3. Avatar Guía",
            title: "3. Avatar Guía (Orientación Metacognitiva)",
            explanation: "Instrucción del avatar: 'Antes de elegir la opción definitiva, verifiquemos si tu hipótesis es correcta. Avanza a las siguientes actividades, donde encontrarás la información esencial para sustentar tu respuesta con evidencia'.",
            pedagogy: "Promueve la pausa reflexiva y la autorregulación: enseña a no responder impulsivamente y a buscar evidencia antes de tomar una decisión."
          },
          {
            num: 4,
            pageNumber: 209,
            top: 48.0,
            left: 70.0,
            shortLabel: "4. Apuntes de Misión",
            title: "4. Apuntes para la Misión (Pistas y Recursos Clave)",
            explanation: "Caja de herramientas de lectura rápida: rastreo de pistas (si piden predecir o comprobar es indagación), errores comunes (cambiar más de una variable a la vez) y recursos clave (fórmulas a = 2d / t² y a = g · sen(θ)).",
            pedagogy: "Herramienta de andamiaje cognitivo que ayuda al estudiante a filtrar distractores procedimentales."
          },
          {
            num: 5,
            pageNumber: 210,
            top: 16.0,
            left: 26.0,
            shortLabel: "5. Actividad 1",
            title: "5. Actividad 1: Reto de Competencias",
            explanation: "Ejercicio guiado para aprender a reconocer las preguntas de indagación, identificando cuáles piden comprobar hipótesis o proponer procedimientos versus aquellas de cálculo directo.",
            pedagogy: "Entrena al estudiante para identificar la intención evaluativa de cada ítem de la prueba Saber 11."
          },
          {
            num: 6,
            pageNumber: 210,
            top: 60.0,
            left: 26.0,
            shortLabel: "6. Actividad 2",
            title: "6. Actividad 2: Predice el Patrón",
            explanation: "A partir de una tabla de datos experimentales (20°: 2.6 s, 40°: 1.9 s, 50°: 1.6 s), el estudiante predice si para 60° el tiempo será mayor o menor a 1.6 s y diseña cómo comprobarlo experimentalmente.",
            pedagogy: "Desarrolla la competencia de predicción y extrapolación de regularidades científicas a partir de evidencia experimental."
          },
          {
            num: 7,
            pageNumber: 211,
            top: 14.0,
            left: 30.0,
            shortLabel: "7. Avatar Pág. 211",
            title: "7. Avatar de la Página 211 (Del Análisis a la Decisión)",
            explanation: "Mensaje motivador del avatar: 'Estás a punto de completar la Zona de entrenamiento y ya tienes lo necesario para descubrir la solución. Ahora analizarás la anatomía de la respuesta para comprender por qué una opción es correcta y cómo evitar los distractores'.",
            pedagogy: "Refuerza la autoeficacia y prepara la transición hacia el análisis metacognitivo de opciones."
          },
          {
            num: 8,
            pageNumber: 211,
            top: 25.0,
            left: 28.0,
            shortLabel: "8. Anatomía Respuesta",
            title: "8. Anatomía de la Respuesta (5 Pasos Metacognitivos)",
            explanation: "Desglose sistemático de los 5 pasos: Paso 1 (Reconoce el fenómeno o modelo), Paso 2 (Ubica la relación causa-efecto), Paso 3 (Conecta conceptos conocidos), Paso 4 (Evalúa críticamente opciones) y Paso 5 (Verifica la lógica completa).",
            pedagogy: "Estructura el proceso de pensamiento que un estudiante de alto puntaje aplica de forma sistemática frente a cualquier ítem complejo."
          },
          {
            num: 9,
            pageNumber: 211,
            top: 40.0,
            left: 28.0,
            shortLabel: "9. Análisis de Clave",
            title: "9. Análisis de la Clave Correcta y Distractores",
            explanation: "La opción A es la clave correcta: calcular la aceleración usando los datos de tiempo existentes con a = 2d / t² confirma la hipótesis sin añadir variables. Se descartan B (la masa es irrelevante), C (la velocidad inicial es cero) y D (cambiar el material altera el rozamiento, invalidando el experimento).",
            pedagogy: "Enseña la técnica del descarte fundamentado: comprender por qué cada distractor es una trampa conceptual típica del examen de Estado."
          },
          {
            num: 10,
            pageNumber: 211,
            top: 66.0,
            left: 30.0,
            shortLabel: "10. Análisis a Decisión",
            title: "10. Del Análisis a la Decisión (Decidir con Evidencias)",
            explanation: "Cierre metodológico: este tipo de preguntas no busca repetir fórmulas de memoria, sino analizar la información para descubrir relaciones entre datos y conceptos, y decidir con base en evidencias.",
            pedagogy: "Sintetiza la competencia de indagación: la ciencia es un proceso de toma de decisiones argumentadas a partir de pruebas empíricas."
          }
        ]
      },
      {
        id: "paso3",
        stepNum: 3,
        title: "Paso 3: Bitácora",
        badge: "Paso 3 • Bitácora Conceptual y Aula (Págs. 212 - 214)",
        purpose: "Desarrollar el componente disciplinar formal: estructurar los modelos teóricos de la mecánica (cinemática, dinámica y vectores) articulados a la resolución paso a paso y la experimentación en aula.",
        pages: [
          { pageNumber: 212, label: "Pág. 212 • Cinemática y Dinámica", imageSrc: "books/ms11_tomo1/page_212.jpg" },
          { pageNumber: 213, label: "Pág. 213 • Caída Libre y Gravedad", imageSrc: "books/ms11_tomo1/page_213.jpg" },
          { pageNumber: 214, label: "Pág. 214 • Actividad en el Aula", imageSrc: "books/ms11_tomo1/page_214.jpg" }
        ],
        avatar: { name: "Investigador Cuántico", role: "Cátedra Saber 11", src: "avatar_nino.png" },
        items: [
          {
            num: 1,
            pageNumber: 212,
            top: 18.0,
            left: 25.0,
            shortLabel: "1. Bitácora Misión",
            title: "1. Paso 3: Bitácora de la Misión (Mecánica Clásica)",
            explanation: "Introducción conceptual al estudio de por qué y cómo se mueven los cuerpos: desde la descripción geométrica del movimiento hasta las causas (fuerzas y masa).",
            pedagogy: "Establece la narrativa disciplinar: la bitácora es el cuaderno de campo del científico donde se registran leyes universales que rigen desde satélites hasta vehículos."
          },
          {
            num: 2,
            pageNumber: 212,
            top: 52.0,
            left: 25.0,
            shortLabel: "2. Pilar 1: MRU / MRUA",
            title: "2. Pilar 1: Movimiento Rectilíneo Uniforme y Acelerado",
            explanation: "Sistematización de ecuaciones de movimiento: velocidad constante vs. aceleración constante, junto con la interpretación de pendientes en gráficas de posición y velocidad.",
            pedagogy: "Prepara para la lectura de gráficas: la pendiente de posición-tiempo es la velocidad, y la pendiente de velocidad-tiempo es la aceleración."
          },
          {
            num: 3,
            pageNumber: 213,
            top: 18.0,
            left: 25.0,
            shortLabel: "3. Pilar 2: Gravedad",
            title: "3. Pilar 2: Caída Libre y Aceleración Gravitatoria",
            explanation: "Análisis del caso particular donde la aceleración es debida exclusivamente a la atracción gravitatoria terrestre (g ≈ 9.8 m/s²), independiente de la masa del objeto.",
            pedagogy: "Corrige una idea previa errónea muy arraigada: los cuerpos pesados NO caen más rápido en el vacío; la aceleración gravitatoria es universal para todos."
          },
          {
            num: 4,
            pageNumber: 213,
            top: 18.0,
            left: 68.0,
            shortLabel: "4. Cálculos Paso a Paso",
            title: "4. Cálculos Paso a Paso: Análisis Cuantitativo",
            explanation: "Ejemplo modelado de cálculo de velocidad de impacto y tiempo de vuelo (v = v₀ + gt, y = 20 - 4.9(1.0)² = 15.1 m), demostrando cómo sustituir valores con unidades físicas consistentes en el SI.",
            pedagogy: "Enseña orden algorítmico y control de unidades dimensionales, evitando errores aritméticos por conversión de unidades en la prueba."
          },
          {
            num: 5,
            pageNumber: 214,
            top: 18.0,
            left: 35.0,
            shortLabel: "5. Pilar 3: Vectores",
            title: "5. Pilar 3: Fuerzas en Plano Inclinado y Vectores",
            explanation: "Descomposición trigonométrica del vector peso en componentes paralela (mg · sen(θ)) y perpendicular (mg · cos(θ)), junto con la fuerza normal y fricción.",
            pedagogy: "Permite al estudiante dominar el análisis vectorial: entender qué fuerza causa realmente la aceleración hacia abajo en una rampa."
          },
          {
            num: 6,
            pageNumber: 214,
            top: 48.0,
            left: 28.0,
            shortLabel: "6. Actividad en Aula",
            title: "6. Actividad en el Aula (Laboratorio y Diagramas)",
            explanation: "Diagrama vectorial incompleto para que el estudiante trace vectores faltantes, calcule aceleraciones y discuta en equipo con sus compañeros.",
            pedagogy: "Fomenta el aprendizaje cooperativo y la argumentación científica en el aula antes de enfrentarse a la prueba individual sumativa."
          }
        ]
      },
      {
        id: "paso4",
        stepNum: 4,
        title: "Paso 4: Prueba Saber",
        badge: "Paso 4 • Batería de Preguntas Saber 11 (Págs. 215 y 218)",
        purpose: "Evaluar de forma sumativa y formativa el dominio de competencias mediante una batería de 10 preguntas tipo ICFES Saber 11 bajo el diseño EBE (Estructura Basada en Evidencias).",
        pages: [
          { pageNumber: 215, label: "Pág. 215 • Prueba de Campo (Ítems 1 al 3)", imageSrc: "books/ms11_tomo1/page_215.jpg" },
          { pageNumber: 218, label: "Pág. 218 • Ítem 10 y Cierre de Misión", imageSrc: "books/ms11_tomo1/page_218.jpg" }
        ],
        avatar: { name: "Analista Saber", role: "Tutor de Metacognición", src: "avatar_nina.png" },
        items: [
          {
            num: 1,
            pageNumber: 215,
            top: 18.0,
            left: 30.0,
            shortLabel: "1. Prueba de Campo",
            title: "1. Prueba de Campo (10 Preguntas Tipo Saber - Entrenamiento ICFES)",
            explanation: "Batería de evaluación sumativa de 10 preguntas tipo Saber 11 bajo la Estructura Basada en Evidencias (EBE). El estudiante se enfrenta al formato real con tiempos controlados, lectura de contextos experimentales y relleno de óvalos.",
            pedagogy: "Simula las condiciones reales del examen ICFES, entrenando la gestión del tiempo y la resistencia cognitiva."
          },
          {
            num: 2,
            pageNumber: 218,
            top: 16.0,
            left: 26.0,
            shortLabel: "2. Ítem 10",
            title: "2. Ítem 10: Situación Problema del Automóvil",
            explanation: "Pregunta de indagación y modelado: un automóvil acelera desde el reposo, mantiene velocidad constante durante un tramo y finalmente frena uniformemente hasta detenerse. Los estudiantes deben seleccionar la gráfica de velocidad (v) frente a tiempo (t) correspondiente.",
            pedagogy: "Evalúa la traducción de lenguaje verbal descriptivo a lenguaje gráfico representacional."
          },
          {
            num: 3,
            pageNumber: 218,
            top: 32.0,
            left: 26.0,
            shortLabel: "3. Opciones Ítem 10",
            title: "3. Opciones de Respuestas del Ítem 10 (Lectura de Pendientes)",
            explanation: "Análisis de las 4 opciones de gráficos v vs. t: la gráfica correcta debe mostrar pendiente positiva al inicio (aceleración uniforme), pendiente horizontal cero en el centro (velocidad constante) y pendiente negativa final (frenado uniforme).",
            pedagogy: "Afianza el significado físico de la derivada/pendiente en cinemática: la pendiente de la gráfica v vs. t representa físicamente la aceleración."
          },
          {
            num: 4,
            pageNumber: 218,
            top: 65.0,
            left: 30.0,
            shortLabel: "4. SpaceGec Virtual",
            title: "4. Conexión SpaceGec (15 Preguntas Virtuales de Profundización)",
            explanation: "Continúa tu entrenamiento: el libro físico termina aquí, pero el ecosistema digital continúa. Se invita al estudiante a ingresar a la plataforma virtual y responder 15 preguntas del reto en línea.",
            pedagogy: "Permite una evaluación formativa extendida con retroalimentación automática y generación de analítica de aprendizaje para el docente."
          },
          {
            num: 5,
            pageNumber: 218,
            top: 76.0,
            left: 42.0,
            shortLabel: "5. Cierre de Misión",
            title: "5. Cierre de la Misión y Consolidación de Competencias",
            explanation: "Mensaje final: 'Final de la Misión … Cargando datos. Esta Misión abordó la mecánica clásica desde tres competencias: explicación de fenómenos, uso del conocimiento e indagación... La siguiente misión profundizará en procesos energéticos (Termodinámica)'.",
            pedagogy: "Cierra el ciclo pedagógico reforzando el sentido de autoeficacia y preparando la articulación con el siguiente componente disciplinar."
          }
        ]
      }
    ]
  }
];
