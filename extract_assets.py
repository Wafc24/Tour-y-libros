#!/usr/bin/env python3
"""
=============================================================================
EXTRACTOR AUTOMÁTICO DE RECURSOS PEDAGÓGICOS DESDE PDF
=============================================================================
Instalación del requerimiento:
    pip install pymupdf

Descripción:
    Procesa el archivo 'MS 3 _Ciencias_Naturales.pdf' para extraer:
    1. Las 4 páginas representativas de las fases del método pedagógico (JPG).
    2. Los recortes geométricos precisos de los avatares (Niño y Niña astronauta) (PNG).

Uso:
    python extract_assets.py
=============================================================================
"""

import os
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

try:
    import fitz  # PyMuPDF
except ImportError:
    try:
        import pymupdf as fitz
    except ImportError:
        print("\n[ERROR] La librería PyMuPDF no está instalada.")
        print("Por favor instálala ejecutando: pip install pymupdf\n")
        sys.exit(1)
    print("\n[ERROR] La librería PyMuPDF no está instalada.")
    print("Por favor instálala ejecutando: pip install pymupdf\n")
    sys.exit(1)


# =============================================================================
# 1. PARÁMETROS DE CONFIGURACIÓN Y CALIBRACIÓN
# =============================================================================

# Nombre del archivo PDF de entrada
PDF_FILENAME = "MS 3 _Ciencias_Naturales.pdf"

# Directorio de salida para los assets
OUTPUT_DIR = "assets"

# Factor de escala / resolución (zoom = 2.0 equivale a ~144-150 DPI nítido)
ZOOM_FACTOR = 2.0

# -----------------------------------------------------------------------------
# Índices de página para cada Fase Pedagógica (1-based, como en el lector PDF):
# NOTA PARA EL USUARIO: Si tu versión de PDF incluye portadas o páginas preliminares
# diferentes, puedes modificar estos 4 números directamente aquí.
# -----------------------------------------------------------------------------
PAGINAS_FASES = {
    "pagina_fase1.jpg": {
        "numero_pagina": 2,  # Página 2 (Fase 1: Centro de Comando / Reto de la Misión)
        "nombre_fase": "Fase 1 - Centro de Comando",
        "enfoque": "Activación de saberes previos, formulación de retos y preparación de herramientas."
    },
    "pagina_fase2.jpg": {
        "numero_pagina": 5,  # Página 5 (Fase 2: Simulador de Vuelo / Pensamiento Científico)
        "nombre_fase": "Fase 2 - Simulador de Vuelo",
        "enfoque": "Entrenamiento del pensamiento científico, formulación de hipótesis y toma de decisiones."
    },
    "pagina_fase3.jpg": {
        "numero_pagina": 6,  # Página 6 (Fase 3: Exploración de la Misión / Factores Bióticos y Abióticos)
        "nombre_fase": "Fase 3 - Exploración de la Misión",
        "enfoque": "Indagación activa, experimentación guiada y análisis de factores en ecosistemas."
    },
    "pagina_fase4.jpg": {
        "numero_pagina": 22, # Página 22 (Fase 4: Informando Avances / Evaluación Formativa)
        "nombre_fase": "Fase 4 - Informando Avances",
        "enfoque": "Socialización de descubrimientos, resolución de problemas y evaluación formativa."
    }
}

# -----------------------------------------------------------------------------
# Configuración geométrica de recorte para Avatares (fitz.Rect(x0, y0, x1, y1)):
# NOTA PARA EL USUARIO:
#   x0 = distancia desde el borde izquierdo (en puntos)
#   y0 = distancia desde el borde superior (en puntos)
#   x1 = distancia hasta el borde derecho (en puntos)
#   y1 = distancia hasta el borde inferior (en puntos)
# El tamaño estándar de página en este PDF es ~595 pt ancho x 737 pt alto.
# -----------------------------------------------------------------------------
AVATARES_CONFIG = {
    "avatar_nino.png": {
        "numero_pagina": 4,  # Página donde se ubica el avatar del niño astronauta
        # Coordenadas aproximadas en la parte inferior-central/izquierda de la página 4:
        "rect": (280, 610, 365, 688),
        "descripcion": "Avatar Niño Astronauta (Comandante de Misión)"
    },
    "avatar_nina.png": {
        "numero_pagina": 4,  # Página donde se ubica el avatar de la niña astronauta
        # Coordenadas aproximadas en la parte superior derecha de la página 4:
        "rect": (480, 35, 555, 120),
        "descripcion": "Avatar Niña Astronauta (Científica de Exploración)"
    }
}


# =============================================================================
# 2. LOCALIZACIÓN DEL ARCHIVO PDF
# =============================================================================

def locate_pdf(filename):
    """Busca el archivo PDF en el directorio actual y carpetas típicas."""
    candidates = [
        Path(filename),
        Path("Libros PDF") / filename,
        Path("Libro PDF") / filename,
        Path(__file__).parent / filename,
        Path(__file__).parent / "Libros PDF" / filename,
    ]
    for p in candidates:
        if p.exists() and p.is_file():
            return p.resolve()
    return None


# =============================================================================
# 3. PROCESAMIENTO Y EXTRACCIÓN
# =============================================================================

def main():
    print("=" * 70)
    print("   EXTRACTOR DE RECURSOS PEDAGÓGICOS DE CIENCIAS NATURALES (PyMuPDF)")
    print("=" * 70)

    pdf_path = locate_pdf(PDF_FILENAME)
    if not pdf_path:
        print(f"\n[ERROR] No se encontró el archivo '{PDF_FILENAME}'.")
        print("Asegúrate de colocarlo en la raíz del proyecto o en la carpeta 'Libros PDF/'.")
        sys.exit(1)

    print(f"\n[INFO] Archivo localizado: {pdf_path}")
    doc = fitz.open(str(pdf_path))
    total_pages = len(doc)
    print(f"[INFO] Total de páginas en documento: {total_pages}")

    # Crear directorios de salida: tanto en assets/ como en la raíz para máxima compatibilidad
    out_dir = Path(OUTPUT_DIR)
    out_dir.mkdir(parents=True, exist_ok=True)

    matrix = fitz.Matrix(ZOOM_FACTOR, ZOOM_FACTOR)

    # -------------------------------------------------------------------------
    # A. Extracción de Páginas de las Fases
    # -------------------------------------------------------------------------
    print("\n[PASO 1/2] Extrayendo páginas de las Fases 1, 2, 3 y 4 a alta resolución...")
    for filename, config in PAGINAS_FASES.items():
        page_num = config["numero_pagina"]
        fase_name = config["nombre_fase"]

        if page_num < 1 or page_num > total_pages:
            print(f"  [AVISO] Página {page_num} fuera de rango (1 - {total_pages}). Saltando...")
            continue

        page_index = page_num - 1  # fitz es 0-based
        page = doc[page_index]

        # Renderizar la página completa a alta resolución
        pix = page.get_pixmap(matrix=matrix, alpha=False)

        # Guardar tanto en assets/ como en ./
        dest_assets = out_dir / filename
        dest_root = Path(filename)

        pix.save(str(dest_assets))
        pix.save(str(dest_root))

        print(f"  [OK] {filename:<18} -> Pág. {page_num:2d} ({fase_name}) [{pix.width}x{pix.height} px]")

    # -------------------------------------------------------------------------
    # B. Recorte Geométrico de Avatares
    # -------------------------------------------------------------------------
    print("\n[PASO 2/2] Recortando avatares de personajes con coordenadas geométricas...")
    for filename, config in AVATARES_CONFIG.items():
        page_num = config["numero_pagina"]
        x0, y0, x1, y1 = config["rect"]
        desc = config["descripcion"]

        if page_num < 1 or page_num > total_pages:
            print(f"  [AVISO] Página de avatar {page_num} fuera de rango. Saltando...")
            continue

        page_index = page_num - 1
        page = doc[page_index]

        # Definir el rectángulo de recorte
        clip_rect = fitz.Rect(x0, y0, x1, y1)

        # Renderizado del recorte con canal alfa para transparencia
        pix = page.get_pixmap(matrix=matrix, clip=clip_rect, alpha=True)

        dest_assets = out_dir / filename
        dest_root = Path(filename)

        pix.save(str(dest_assets))
        pix.save(str(dest_root))

        print(f"  [OK] {filename:<18} -> Pág. {page_num:2d} clip=({x0}, {y0}, {x1}, {y1}) [{pix.width}x{pix.height} px] - {desc}")

    doc.close()

    print("\n" + "=" * 70)
    print("¡Extracción completada con éxito!")
    print(f"Archivos listos en '{OUTPUT_DIR}/' y en el directorio raíz.")
    print("Ahora puedes abrir 'presentacion.html' en tu navegador.")
    print("=" * 70)


if __name__ == "__main__":
    main()
