# Visor Web Multi-Libro en Modo Revista (Flipbook Offline)

Visor interactivo de libros y revistas digitales con emulación de física 3D de hojas en papel (doble página abierta), zoom dinámico con paneo de alta nitidez y navegación intuitiva. **Funciona 100% offline de manera local** en cualquier navegador moderno (Chrome, Edge, Firefox).

Permite alternar instantáneamente entre los libros de la colección sin necesidad de recargar la página.

---

## 📚 Biblioteca de Libros Incluida

Todos los libros están organizados en el mismo repositorio y accesibles desde el selector desplegable en la cabecera:

1. **Misión Saber 3°** (412 páginas) — Básica Primaria
2. **Misión Saber 9°** (450 páginas) — Básica Secundaria
3. **Misión Saber 11° - Tomo 1** (272 páginas) — Educación Media / Saber 11
4. **Misión Saber 11° - Tomo 2** (216 páginas) — Educación Media / Saber 11

*Total: 1.350 páginas digitalizadas y optimizadas a 150 DPI (1241 x 1536 px).*

---

## 📁 Estructura del Proyecto

```text
/
├── Libros PDF/             # Documentos PDF originales
│   ├── MS 3  - 9 - 10 -26.pdf
│   ├── MS9 - 11-10-26(2).pdf
│   ├── MS 11- Tomo 1 - 9-10-26.pdf
│   └── MS 11- Tomo 2 - 9-10-26.pdf
├── books/                  # Colección estructurada de libros
│   ├── library-manifest.js # Catálogo maestro offline de todos los libros
│   ├── library.json        # Metadatos unificados
│   ├── ms3/                # 412 páginas optimizadas de 3° grado
│   ├── ms9/                # 450 páginas optimizadas de 9° grado
│   ├── ms11_tomo1/         # 272 páginas optimizadas de 11° Tomo 1
│   └── ms11_tomo2/         # 216 páginas optimizadas de 11° Tomo 2
├── css/
│   ├── styles.css          # Estilos del visor, barra flotante y selector de biblioteca
│   └── theme-tokens.css    # Variables y tokens de diseño
├── js/
│   ├── libs/
│   │   └── page-flip.browser.js # Motor de simulación física de hojas
│   ├── zoom-handler.js     # Módulo de zoom interactivo y arrastre (Pan & Zoom)
│   └── app.js              # Controlador principal multi-libro y atajos
├── convert_library.py      # Script automatizado para regenerar la biblioteca completa
├── convert_pdf.py          # Script de extracción individual por libro
├── abrir_visor.bat         # Acceso directo para abrir el visor en Windows
├── index.html              # Interfaz web del visor multi-libro
└── README.md
```

---

## 🚀 Cómo Usar

### 1. Abrir el Visor
Haz doble clic en **`abrir_visor.bat`** o abre directamente **`index.html`** en tu navegador. ¡No requiere internet ni servidores locales!

### 2. Cambiar de Libro en Tiempo Real
- En la barra superior, haz clic en el botón **Biblioteca de Libros** (o presiona la tecla `B`).
- Se desplegará el panel con las portadas de los 4 libros disponibles.
- Haz clic en cualquier libro para abrirlo inmediatamente. El visor recordará tu último libro visitado en tu navegador.
- También puedes enlazar directamente a un libro específico usando hash en la URL:
  - `index.html#ms11_t1` (Abre Misión Saber 11° Tomo 1)
  - `index.html#ms11_t2` (Abre Misión Saber 11° Tomo 2)
  - `index.html#ms9` (Abre Misión Saber 9°)
  - `index.html#ms3` (Abre Misión Saber 3°)

### 3. Regenerar o Agregar Nuevos Libros
Si deseas reprocesar todos los libros con nuevos ajustes:

```bash
python convert_library.py
```

O para convertir un PDF individual:

```bash
python convert_pdf.py --pdf "Libros PDF/mi_libro.pdf" --output-dir "books/mi_libro"
```

---

## 🎮 Controles y Atajos de Teclado

| Acción | Control en Pantalla | Atajo de Teclado |
| :--- | :--- | :--- |
| **Abrir Biblioteca / Selector** | Botón de libro en cabecera | `B` |
| **Página siguiente** | Flecha derecha o botón `>` | `→` o `AvPág` |
| **Página anterior** | Flecha izquierda o botón `<` | `←` o `RePág` |
| **Primera / Última** | Botones `|<<` y `>>|` | `Inicio` / `Fin` |
| **Ir a página específica** | Campo numérico editable o barra deslizante | Escribir número y presionar `Enter` |
| **Zoom in / Zoom out** | Botones `+` / `-` en barra flotante | `+` / `-` o **Rueda del ratón** |
| **Restablecer zoom** | Botón Reset o indicador de `%` | `0` o `Esc` o **Doble clic** |
| **Arrastrar página (Pan)** | Arrastrar con el ratón cuando hay zoom | Mantener clic izquierdo presionado y mover |
| **Configurar Efectos de Sonido** | Botón de altavoz en cabecera | `S` |
| **Pantalla completa** | Botón de pantalla en cabecera | `F` |
| **Activar/Silenciar sonido** | Botón de altavoz en cabecera | Clic en el botón |
| **Ver ayuda** | Botón `?` en cabecera | `?` |

---

## ✨ Características Técnicas Destacadas

1. **Biblioteca Centralizada Unificada**: Los 4 libros conviven en el mismo repositorio con cambio dinámico de estado en caliente (`loadBook`).
2. **Física de Hoja Realista**: Efecto de doble página abierta estilo revista (*spread*) con sombra central de lomo graduada, curvatura tridimensional al pasar hoja y sonido sintetizado de papel con la Web Audio API nativa.
3. **Centrado Dinámico de Portada**: Desplazamiento automático al centro de la pantalla en portada y contraportada, y vista centrada de dos páginas en el interior.
4. **Zoom con Anclaje al Cursor**: Al hacer zoom con la rueda del ratón, el visor se enfoca de forma natural hacia el punto donde está ubicado el cursor sin perder nitidez de lectura.
5. **Bloqueo Inteligente de Hoja**: Mientras el zoom está activo y arrastras la página para leer detalles, el cambio accidental de hoja se bloquea automáticamente.
6. **100% Offline**: Todos los scripts, estilos y fuentes están empaquetados dentro del proyecto local sin dependencias externas.
