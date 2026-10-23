#!/usr/bin/env python3
"""
Convertidor de PDF a Imágenes Optimizadas para Flipbook
======================================================
Convierte páginas de un documento PDF a imágenes JPG de alta calidad
y genera el manifiesto de páginas para el visor web offline.
"""

import os
import sys
import json
import time
import argparse
from pathlib import Path

try:
    import pymupdf  # PyMuPDF
except ImportError:
    print("[ERROR] PyMuPDF no está instalado. Ejecuta: pip install pymupdf")
    sys.exit(1)


def find_pdf_files(search_dirs):
    """Busca archivos PDF en las carpetas especificadas."""
    pdf_files = []
    for d in search_dirs:
        dir_path = Path(d)
        if dir_path.exists() and dir_path.is_dir():
            for p in dir_path.glob("*.pdf"):
                if not p.name.startswith("._"):
                    pdf_files.append(p)
    return sorted(pdf_files)


def prompt_user_selection(pdf_files):
    """Muestra un menú interactivo para seleccionar el PDF y opciones de conversión."""
    print("=" * 65)
    print("      CONVERTIDOR DE PDF A FLIPBOOK REVISTA OFFLINE")
    print("=" * 65)
    print("\nArchivos PDF detectados:")
    for idx, pdf in enumerate(pdf_files, 1):
        size_mb = pdf.stat().st_size / (1024 * 1024)
        print(f"  [{idx}] {pdf.name} ({size_mb:.1f} MB)")

    print()
    # Default al primer archivo que contenga MS 3 o al primero de la lista
    default_idx = 1
    for i, p in enumerate(pdf_files, 1):
        if "MS 3" in p.name or "MS3" in p.name:
            default_idx = i
            break

    choice = input(f"Selecciona el número de archivo [1-{len(pdf_files)}] (default {default_idx}): ").strip()
    if not choice:
        selected_pdf = pdf_files[default_idx - 1]
    else:
        try:
            val = int(choice)
            if 1 <= val <= len(pdf_files):
                selected_pdf = pdf_files[val - 1]
            else:
                selected_pdf = pdf_files[default_idx - 1]
        except ValueError:
            selected_pdf = pdf_files[default_idx - 1]

    doc = pymupdf.open(str(selected_pdf))
    total_doc_pages = len(doc)
    doc.close()

    print(f"\nPDF seleccionado: {selected_pdf.name} ({total_doc_pages} páginas)")
    print("\n¿Cuántas páginas deseas convertir?")
    print(f"  - Presiona Enter o escribe 'todas' para convertir las {total_doc_pages} páginas.")
    print("  - O escribe un rango, por ejemplo '1-30' para una prueba rápida.")
    page_range_input = input("Rango de páginas (default: todas): ").strip().lower()

    start_page = 1
    end_page = total_doc_pages

    if page_range_input and page_range_input != "todas" and page_range_input != "all":
        try:
            if "-" in page_range_input:
                parts = page_range_input.split("-")
                start_page = max(1, int(parts[0].strip()))
                end_page = min(total_doc_pages, int(parts[1].strip()))
            else:
                end_page = min(total_doc_pages, int(page_range_input))
        except Exception:
            print("[INFO] Rango no reconocido, se convertirán todas las páginas.")
            start_page = 1
            end_page = total_doc_pages

    return selected_pdf, start_page, end_page


def convert_pdf_to_images(pdf_path, output_dir, start_page=1, end_page=None, dpi=180, quality=90):
    """
    Convierte las páginas especificadas del PDF a imágenes JPG optimizadas
    y crea los manifiestos JSON y JS para el visor.
    """
    pdf_path = Path(pdf_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n[INFO] Abriendo: {pdf_path.name}")
    doc = pymupdf.open(str(pdf_path))
    total_pages = len(doc)

    if end_page is None or end_page > total_pages:
        end_page = total_pages
    start_page = max(1, start_page)

    pages_to_convert = list(range(start_page - 1, end_page))
    count = len(pages_to_convert)

    print(f"[INFO] Convirtiendo páginas {start_page} a {end_page} ({count} páginas) a {dpi} DPI...")

    page_files = []
    base_width = 0
    base_height = 0

    t_start = time.time()

    for idx, p_num in enumerate(pages_to_convert, 1):
        page = doc[p_num]
        
        # Renderizado a imagen con el DPI seleccionado
        pix = page.get_pixmap(dpi=dpi)
        
        if idx == 1:
            base_width = pix.width
            base_height = pix.height

        file_name = f"page_{idx:03d}.jpg"
        file_path = output_dir / file_name

        # Guardar en formato JPG
        pix.save(str(file_path))
        page_files.append(f"pages/{file_name}")

        # Barra de progreso limpia en consola
        elapsed = time.time() - t_start
        rate = idx / elapsed if elapsed > 0 else 1
        eta = (count - idx) / rate if rate > 0 else 0
        pct = (idx / count) * 100
        
        sys.stdout.write(f"\r  Progreso: [{idx}/{count}] ({pct:5.1f}%) | ETA: {eta:4.0f}s | Guardado: {file_name}")
        sys.stdout.flush()

    doc.close()
    print("\n[OK] Extracción de imágenes completada exitosamente.")

    # Generar manifiesto
    manifest = {
        "title": pdf_path.stem,
        "totalPages": len(page_files),
        "startPageOriginal": start_page,
        "endPageOriginal": end_page,
        "baseWidth": base_width,
        "baseHeight": base_height,
        "aspectRatio": round(base_width / base_height, 4) if base_height > 0 else 0.77,
        "pages": page_files
    }

    # Guardar manifest.json
    json_path = output_dir / "pages.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    # Guardar manifest.js para funcionamiento 100% offline directo (sin problemas de CORS en file://)
    js_path = output_dir / "pages-manifest.js"
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("// Manifiesto generado automáticamente para visor Flipbook\n")
        f.write("window.BOOK_MANIFEST = ")
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    print(f"[OK] Manifiesto guardado en: {json_path} y {js_path}")
    print(f"[INFO] Dimensiones base: {base_width} x {base_height} px (Ratio: {manifest['aspectRatio']})")
    print(f"[INFO] Tiempo total: {time.time() - t_start:.2f} segundos.")
    print("=" * 65)
    print("¡Listo! Ahora puedes abrir 'index.html' directamente en tu navegador.")
    print("=" * 65)


def main():
    parser = argparse.ArgumentParser(description="Convertir PDF a imágenes para Flipbook")
    parser.add_argument("--pdf", type=str, help="Ruta al archivo PDF")
    parser.add_argument("--output-dir", type=str, default=None, help="Carpeta de salida (default: pages/)")
    parser.add_argument("--dpi", type=int, default=180, help="Resolución en DPI (default: 180)")
    parser.add_argument("--quality", type=int, default=90, help="Calidad JPEG (default: 90)")
    parser.add_argument("--start", type=int, default=1, help="Página de inicio (1-based)")
    parser.add_argument("--end", type=int, default=None, help="Página final (1-based)")
    parser.add_argument("--all", action="store_true", help="Convertir todas las páginas sin preguntar")
    parser.add_argument("--limit", type=int, default=None, help="Convertir solo las primeras N páginas")

    args = parser.parse_args()

    project_root = Path(__file__).parent.resolve()
    search_dirs = [
        project_root / "Libros PDF",
        project_root / "Libro PDF",
        project_root
    ]
    output_dir = Path(args.output_dir) if args.output_dir else (project_root / "pages")

    if args.pdf:
        selected_pdf = Path(args.pdf)
        if not selected_pdf.exists():
            print(f"[ERROR] No se encontró el archivo: {selected_pdf}")
            sys.exit(1)
        doc = pymupdf.open(str(selected_pdf))
        tot = len(doc)
        doc.close()
        start_p = args.start
        end_p = args.limit if args.limit else (args.end if args.end else tot)
    else:
        pdf_files = find_pdf_files(search_dirs)
        if not pdf_files:
            print("[ERROR] No se encontraron archivos PDF en 'Libros PDF/' ni en la raíz.")
            sys.exit(1)

        if args.all:
            selected_pdf = pdf_files[0]
            for p in pdf_files:
                if "MS 3" in p.name:
                    selected_pdf = p
                    break
            doc = pymupdf.open(str(selected_pdf))
            start_p = 1
            end_p = len(doc)
            doc.close()
        else:
            selected_pdf, start_p, end_p = prompt_user_selection(pdf_files)

    convert_pdf_to_images(
        pdf_path=selected_pdf,
        output_dir=output_dir,
        start_page=start_p,
        end_page=end_p,
        dpi=args.dpi,
        quality=args.quality
    )


if __name__ == "__main__":
    main()
