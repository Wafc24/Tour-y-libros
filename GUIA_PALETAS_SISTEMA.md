# 🎨 Sistema Maestro de Paletas de Color • Misión Saber

Guía técnica y pedagógica de los sistemas de color diseñados para la plataforma editorial interactiva **Misión Saber**. Este recurso unifica las identidades visuales de los libros y tours para su reutilización en futuros desarrollos.

---

## 🏛️ 1. Paleta Central del Ecosistema (Hub / Centro de Control)

El fondo y los paneles del Hub integran un resplandor ambiental tricolor que sintetiza los tres niveles educativos del proyecto:

| Nivel | Rol en el Hub | Color de Aura | Tokens Principales |
| :--- | :--- | :--- | :--- |
| **Primaria (3°)** | Resplandor Cósmico Izquierdo | `rgba(99, 102, 241, 0.22)` | Índigo Cósmico (`#6366F1`) & Cian Estelar (`#38BDF8`) |
| **Secundaria (9°)** | Resplandor Vital Inferior | `rgba(16, 185, 129, 0.16)` | Esmeralda Vivo (`#10B981`) & Turquesa (`#14B8A6`) |
| **Media Vocacional (11°)** | Resplandor Nuclear Derecho | `rgba(229, 178, 13, 0.20)` | Oro de Reactor (`#E5B20D`) & Ámbar Plasma (`#D97706`) |

---

## 📚 2. Identidades Visuales por Libro y Tarjeta

Cada libro cuenta con un tratamiento cromático individualizado en su tarjeta del Hub (`.resource-card`):

### 🔵 Grado 3° Primaria (`card-grade-ms3`)
- **Estética:** Exploración espacial SpaceGec, lúdica, inspiradora.
- **Borde de tarjeta:** `rgba(99, 102, 241, 0.35)` $\rightarrow$ Resplandor `#818cf8` en *hover*.
- **Badge:** Degradado Índigo-Cian (`#c7d2fe`).
- **Botón CTA:** `linear-gradient(135deg, #4f46e5, #6366f1)` con sombra lumínica.

### 🟢 Grado 9° Secundaria (`card-grade-ms9`)
- **Estética:** Formación científica, indagación bio-experimental.
- **Borde de tarjeta:** `rgba(16, 185, 129, 0.35)` $\rightarrow$ Resplandor `#34d399` en *hover*.
- **Badge:** Degradado Esmeralda-Turquesa (`#6ee7b7`).
- **Botón CTA:** `linear-gradient(135deg, #059669, #10b981)`.

### 🟡 Grado 11° Tomo 1 (`card-grade-ms11_t1`)
- **Estética:** Alta energía, física cuántica, preparación intensiva Saber 11°.
- **Borde de tarjeta:** `rgba(229, 178, 13, 0.38)` $\rightarrow$ Resplandor `#fef05b` en *hover*.
- **Badge:** Degradado Oro y Ámbar (`#fef05b`).
- **Botón CTA:** `linear-gradient(135deg, #fef05b, #e5b20d)` con texto oscuro de alto contraste (`#0a0b07`).

### 🔷 Grado 11° Tomo 2 (`card-grade-ms11_t2`)
- **Estética:** Instrumentación digital, telemetría y análisis de evidencias.
- **Borde de tarjeta:** `rgba(79, 178, 210, 0.38)` $\rightarrow$ Resplandor `#38bdf8` en *hover*.
- **Badge:** Degradado Cian y Azul Eléctrico (`#bae6fd`).
- **Botón CTA:** `linear-gradient(135deg, #0284c7, #4fb2d2)`.

---

## 🎓 3. Los Dos Tours Guiados y sus Paletas Especializadas

### 📐 Tour 1: Matemáticas 3° (`tour-theme-matematicas3`)
- **Metodología:** **4 Fases** (*Centro de Comando*, *Simulador de Vuelo*, *Exploración*, *Informando Avances*).
- **Fondo:** Espacio profundo con gradiente azul noche (`#18203c` a `#0a0d18`).
- **Pines Interactivos:** Esferas índigo (`#4F46E5`) con anillo cian estelar (`#38BDF8`) y pulso cósmico animado.
- **Paso / Fase Activa:** Degradado azul espacial con halo de neón cyan.
- **Cuadro de Propósito:** Borde de acento en `#6366F1`, badge cian `#38BDF8`.

### ⚡ Tour 2: Física 11° (`tour-theme-fisica11`)
- **Metodología:** **4 Pasos** (*Activación de Sistemas*, *Modelamiento Guiado*, *Taller y Conceptualización*, *Consolidación Sumativa*).
- **Fondo:** Sala del reactor nuclear en grafito profundo (`#1D2112` a `#0A0B07`).
- **Pines Interactivos:** Núcleo atómico dorado (`#E5B20D`) con borde oro brillante (`#FEF05B`), número negro y animación cuántica `atomicGoldPinPulse`.
- **Paso Activo:** Oro de reactor (`linear-gradient(135deg, #FEF05B, #E5B20D)`) con texto negro e iluminación de plasma.
- **Cuadro de Propósito:** Cockpit blindado con borde de 4px en `#E5B20D`, insignia en `#FEF05B` y texto de lectura cálido en `#FEF9C3`.
- **Citas Pedagógicas y Badges:** Acentos en **Cian HUD Telemetría** (`#4FB2D2`), reflejando las pantallas de telemetría del reactor.

---

## 📂 Archivos de Recursos Listos para Futuras Programaciones
1. **Tokens JSON:** [tokens/colors-ecosistema.json](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/tokens/colors-ecosistema.json) y [tokens/colors-fisica.json](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/tokens/colors-fisica.json).
2. **Hojas de Estilo CSS:** [css/theme-fisica.css](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/css/theme-fisica.css) y [css/styles.css](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/css/styles.css).
3. **Plataforma Web:** [index.html](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/index.html) y [abrir_visor.bat](file:///d:/WILMER_FERRER/PROYECTOS/Libro%20tipo%20revista/abrir_visor.bat).
