# 🎨 Guía de Estilo y Tokens de Color: Misión Saber 3° (Matemáticas)

Este documento y sus archivos asociados constituyen el **Sistema Oficial de Tokens de Color** extraído de la portada de **Matemáticas - Misión Saber 3°** (cabina espacial, iluminación cálida de molduras y cubos lúdicos tridimensionales).

---

## 📂 Archivos del Sistema de Color en el Proyecto

| Archivo | Propósito / Tipo de Uso |
| :--- | :--- |
| [**`css/theme-tokens.css`**](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/css/theme-tokens.css) | Variables CSS nativas (`:root`), clases de botones `.btn-cube-*` y paneles glassmorphism para importar directamente en cualquier archivo HTML o CSS. |
| [**`tokens/colors.json`**](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/tokens/colors.json) | Tokens en formato JSON estándar (W3C Design Tokens) para Tailwind CSS, JavaScript, React o Figma. |
| [**`paleta_demo.html`**](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/paleta_demo.html) | Muestrario interactivo en vivo con copiado al portapapeles y previsualización de componentes reales. |
| [**`assets/referencia_paleta.jpg`**](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/assets/referencia_paleta.jpg) | Imagen original de referencia preservada en el repositorio. |

---

## 🌈 Tabla Maestra de Colores y Semántica

### 1. Fondos y Ambiente Espacial
| Color | Muestra | Nombre Token | Hex | Uso Recomendado |
| :--- | :---: | :--- | :--- | :--- |
| **Vacío Profundo** | `⬛` | `--bg-space-dark` | `#180806` | Fondo principal `<body>`, sombras extremas |
| **Suelo Cabina** | `🟫` | `--bg-cockpit-deep` | `#2A0E08` | Contenedores base, tarjetas inferiores |
| **Superficie Glass** | `🟧` | `--bg-cockpit-surface`| `rgba(42, 14, 8, 0.78)` | Modales y barras flotantes con desenfoque |
| **Luz Ambiental** | `🟧` | `--ambient-orange` | `#EF6026` | Acentos cálidos, bordes activos y biseles |
| **Resplandor Central**| `🟨` | `--ambient-tangerine`| `#FF8A3D` | Resplandores (*glows*) y focos de atención |

---

### 2. Botones y Acciones (Inspirados en los Cubos Flotantes)
| Componente | Muestra | Token Base | Hex | Efecto Glow | Función Semántica |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **Cubo Rojo (+ / -)** | 🟥 | `--btn-cube-red` | `#F01F24` | `rgba(240, 31, 36, 0.45)` | **CTA Primario**, desafíos, retos y acciones críticas |
| **Cubo Azul (×)** | 🟦 | `--btn-cube-blue` | `#2D68B8` | `rgba(45, 104, 184, 0.45)` | **Navegación**, ciencia, módulos y enlaces secundarios |
| **Cubo Verde (5)** | 🟩 | `--btn-cube-green`| `#5DC147` | `rgba(93, 193, 71, 0.45)` | **Éxito**, validación de respuestas, avance de fase |
| **Cubo Ámbar (3 / 2)**| 🟨 | `--btn-cube-amber`| `#F59E0B` | `rgba(245, 158, 11, 0.45)` | **Saberes previos**, advertencias o pistas pedagógicas |

---

### 3. Acentos Tecnológicos y Hologramas
| Elemento | Muestra | Token | Hex | Uso Recomendado |
| :--- | :---: | :--- | :--- | :--- |
| **Escuadra Neón** | 🟪 | `--accent-magenta` | `#CB69A4` | Herramientas geométricas, badges creativos |
| **Pedestal Holograma**| 🟦 | `--accent-cyan` | `#38BDF8` | Gráficos, hologramas, conexiones digitales |
| **Símbolos Dorados** | 🟨 | `--accent-gold` | `#FDE047` | Medallas, estrellas, indicadores de puntuación |

---

### 4. Textos y Contraste
| Nivel | Token | Hex | Descripción |
| :--- | :--- | :--- | :--- |
| **Texto Blanco Neón** | `--text-white` | `#FFFFFF` | Números sobre cubos y titulares de alto impacto |
| **Texto Cálido Claro** | `--text-warm-light` | `#FED7AA` | Párrafos de lectura y descripciones pedagógicas |
| **Texto Atenuado** | `--text-warm-muted` | `#BA7E6D` | Leyendas, pies de página y breadcrumbs |

---

## 🛠️ ¿Cómo usar estos colores en cualquier nueva pantalla del proyecto?

### En HTML / CSS:
Basta con enlazar la hoja de tokens en la cabecera:
```html
<link rel="stylesheet" href="css/theme-tokens.css">
```

Y usar las variables o clases listas:
```html
<!-- Botón con estética del Cubo Rojo -->
<button class="btn-space btn-cube-red">Comenzar Misión</button>

<!-- Botón con estética del Cubo Azul -->
<button class="btn-space btn-cube-blue">Ver Simulación</button>

<!-- Botón con estética del Cubo Verde -->
<button class="btn-space btn-cube-green">Comprobar Respuesta</button>

<!-- Tarjeta de cabina espacial -->
<div class="glass-cockpit-panel" style="padding: 24px;">
  <h2 style="color: var(--text-white);">Panel de Mando</h2>
  <p style="color: var(--text-warm-light);">Parámetros de vuelo listos.</p>
</div>
```

---

## 🚀 ¿Cómo guardar esto para futuros proyectos o compañeros de equipo?
1. **En proyectos web Vanilla**: Copiar la carpeta `tokens/` y el archivo `css/theme-tokens.css`.
2. **En Tailwind CSS**: En `tailwind.config.js`, extender los colores importando directamente `tokens/colors.json`:
   ```javascript
   const tokens = require('./tokens/colors.json');
   module.exports = {
     theme: {
       extend: {
         colors: {
           spaceDark: tokens.colors.background.spaceDark.value,
           cubeRed: tokens.colors.cubes.red.base.value,
           cubeBlue: tokens.colors.cubes.blue.base.value,
           cubeGreen: tokens.colors.cubes.green.base.value,
           cubeAmber: tokens.colors.cubes.amber.base.value,
         }
       }
     }
   }
   ```
