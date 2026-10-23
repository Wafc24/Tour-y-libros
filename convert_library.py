#!/usr/bin/env python3
"""
Convertidor Integral de Biblioteca de Libros Flipbook
=====================================================
Convierte los libros PDF:
- Grado 3°: Misión Saber 3° (enlaza desde pages/)
- Grado 9°: Misión Saber 9°
- Grado 11°: Misión Saber 11° - Tomo 1
- Grado 11°: Misión Saber 11° - Tomo 2

Genera imágenes JPG de 150 DPI y los manifiestos JSON / JS correspondientes.
"""

import os
import sys
import json
import time
from pathlib import Path
import pymupdf

BOOKS_CONFIG = [
    {
        "id": "ms3",
        "title": "Misión Saber 3°",
        "subtitle": "Básica Primaria",
        "grade": "3°",
        "badge": "3° Primaria",
        "folder": "books/ms3",
        "pdf": "Libros PDF/MS 3  - 9 - 10 -26.pdf",
        "source_pages_dir": "pages", # Si ya existe, se hardlinkea
    },
    {
        "id": "ms9",
        "title": "Misión Saber 9°",
        "subtitle": "Básica Secundaria",
        "grade": "9°",
        "badge": "9° Secundaria",
        "folder": "books/ms9",
        "pdf": "Libros PDF/MS9 - 11-10-26(2).pdf",
    },
    {
        "id": "ms11_t1",
        "title": "Misión Saber 11° - Tomo 1",
        "subtitle": "Educación Media - Tomo 1",
        "grade": "11°",
        "badge": "11° Tomo 1",
        "folder": "books/ms11_tomo1",
        "pdf": "Libros PDF/MS 11- Tomo 1 - 9-10-26.pdf",
    },
    {
        "id": "ms11_t2",
        "title": "Misión Saber 11° - Tomo 2",
        "subtitle": "Educación Media - Tomo 2",
        "grade": "11°",
        "badge": "11° Tomo 2",
        "folder": "books/ms11_tomo2",
        "pdf": "Libros PDF/MS 11- Tomo 2 - 9-10-26.pdf",
    },
]


def process_book(cfg, root_dir, dpi=150, quality=90):
    book_id = cfg["id"]
    folder = root_dir / cfg["folder"]
    folder.mkdir(parents=True, exist_ok=True)
    
    # Verificar si ya existen páginas en source_pages_dir para hardlink
    if "source_pages_dir" in cfg:
        src_dir = root_dir / cfg["source_pages_dir"]
        if src_dir.exists():
            existing = sorted([f for f in src_dir.glob("page_*.jpg")])
            if len(existing) > 0:
                print(f"\n[INFO] {cfg['title']}: Enlazando {len(existing)} páginas existentes desde {cfg['source_pages_dir']}...")
                page_files = []
                for f in existing:
                    target = folder / f.name
                    if not target.exists():
                        try:
                            os.link(f, target)
                        except Exception:
                            import shutil
                            shutil.copy2(f, target)
                    page_files.append(f"{cfg['folder']}/{f.name}")
                
                # Escribir manifiesto local
                base_w, base_h = 1241, 1536
                manifest = {
                    "id": book_id,
                    "title": cfg["title"],
                    "subtitle": cfg["subtitle"],
                    "grade": cfg["grade"],
                    "badge": cfg["badge"],
                    "totalPages": len(page_files),
                    "baseWidth": base_w,
                    "baseHeight": base_h,
                    "aspectRatio": round(base_w / base_h, 4),
                    "pages": page_files,
                }
                with open(folder / "pages-manifest.js", "w", encoding="utf-8") as fjs:
                    fjs.write(f"window.BOOK_MANIFEST_{book_id.upper()} = ")
                    json.dump(manifest, fjs, indent=2, ensure_ascii=False)
                    fjs.write(";\n")
                with open(folder / "pages.json", "w", encoding="utf-8") as fjson:
                    json.dump(manifest, fjson, indent=2, ensure_ascii=False)
                return manifest

    pdf_file = root_dir / cfg["pdf"]
    if not pdf_file.exists():
        print(f"[ERROR] Archivo PDF no encontrado: {pdf_file}")
        return None

    print(f"\n" + "=" * 60)
    print(f" Procesando: {cfg['title']} ({cfg['badge']})")
    print(f" PDF: {pdf_file.name}")
    print(f" Destino: {cfg['folder']}")
    print("=" * 60)

    doc = pymupdf.open(str(pdf_file))
    total_pages = len(doc)
    print(f"[INFO] Total páginas a renderizar: {total_pages} a {dpi} DPI...")

    page_files = []
    base_w, base_h = 0, 0
    t0 = time.time()

    for idx in range(total_pages):
        page_num = idx + 1
        page_filename = f"page_{page_num:03d}.jpg"
        target_path = folder / page_filename
        page_rel = f"{cfg['folder']}/{page_filename}"
        page_files.append(page_rel)

        # Si ya existe con tamaño razonable (>10KB), saltar
        if target_path.exists() and target_path.stat().st_size > 10000:
            if idx == 0:
                pix = doc[0].get_pixmap(dpi=dpi)
                base_w, base_h = pix.width, pix.height
            continue

        page = doc[idx]
        pix = page.get_pixmap(dpi=dpi)
        if base_w == 0:
            base_w, base_h = pix.width, pix.height
        pix.save(str(target_path))

        if page_num % 10 == 0 or page_num == total_pages:
            elapsed = time.time() - t0
            rate = page_num / elapsed if elapsed > 0 else 1
            eta = (total_pages - page_num) / rate if rate > 0 else 0
            pct = (page_num / total_pages) * 100
            sys.stdout.write(f"\r  Progreso: [{page_num}/{total_pages}] ({pct:5.1f}%) | ETA: {eta:4.0f}s | {page_filename}")
            sys.stdout.flush()

    doc.close()
    elapsed_total = time.time() - t0
    print(f"\n[OK] Completado {cfg['title']} en {elapsed_total:.1f}s.")

    if base_w == 0:
        base_w, base_h = 1241, 1536

    manifest = {
        "id": book_id,
        "title": cfg["title"],
        "subtitle": cfg["subtitle"],
        "grade": cfg["grade"],
        "badge": cfg["badge"],
        "totalPages": len(page_files),
        "baseWidth": base_w,
        "baseHeight": base_h,
        "aspectRatio": round(base_w / base_h, 4),
        "pages": page_files,
    }

    with open(folder / "pages-manifest.js", "w", encoding="utf-8") as fjs:
        fjs.write(f"window.BOOK_MANIFEST_{book_id.upper()} = ")
        json.dump(manifest, fjs, indent=2, ensure_ascii=False)
        fjs.write(";\n")

    with open(folder / "pages.json", "w", encoding="utf-8") as fjson:
        json.dump(manifest, fjson, indent=2, ensure_ascii=False)

    return manifest


def main():
    root = Path(__file__).parent.resolve()
    print("=" * 65)
    print("     GENERADOR DE BIBLIOTECA COMPLETA DE FLIPBOOKS")
    print("=" * 65)

    all_manifests = []
    for cfg in BOOKS_CONFIG:
        manifest = process_book(cfg, root)
        if manifest:
            all_manifests.append(manifest)

    # Crear catálogo general unificado
    catalog_path_js = root / "books" / "library-manifest.js"
    catalog_path_json = root / "books" / "library.json"

    catalog_data = {
        "books": all_manifests
    }

    with open(catalog_path_js, "w", encoding="utf-8") as f:
        f.write("// Catálogo Maestro de Libros para Visor Flipbook Offline\n")
        f.write("window.BOOKS_LIBRARY = ")
        json.dump(all_manifests, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    with open(catalog_path_json, "w", encoding="utf-8") as f:
        json.dump(catalog_data, f, indent=2, ensure_ascii=False)

    print("\n" + "=" * 65)
    print(f"[EXITO] Catálogo general generado en: {catalog_path_js}")
    print(f"Total libros registrados: {len(all_manifests)}")
    for b in all_manifests:
        print(f"  • [{b['id']}] {b['title']} - {b['totalPages']} páginas")
    print("=" * 65)


if __name__ == "__main__":
    main()
