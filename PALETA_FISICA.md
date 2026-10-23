# Paleta de Colores y Tokens de Diseño - Física 11° (Misión Saber)

Sistema de diseño extraído directamente de la portada de **FÍSICA - $E=mc^2$ - MISIÓN SABER 11°**, caracterizado por una estética de **reactor nuclear cuántico**, anillos orbitales de plasma dorado, blindaje grafito y telemetría digital holográfica cian.

---

## 🎨 Especificación de Tokens de Color

### 1. Fondos y Superficies (Reactor y Cabina Sci-Fi)
| Token CSS | Color HEX | Uso / Rol de UI |
| :--- | :---: | :--- |
| `--bg-reactor-deep` | `#0A0B07` | Fondo general (`body`), espacio profundo de máxima inmersión. |
| `--bg-cockpit-carbon` | `#161810` | Superficies base de tarjetas, paneles y contenedores principales. |
| `--bg-cockpit-elevated` | `#22261A` | Tarjetas elevadas, estados *hover* y badges interactivos. |
| `--bg-panel-border` | `rgba(226, 191, 62, 0.22)` | Bordes sutiles con bisel dorado metálico. |

### 2. Energía Cuántica y Acentos (Núcleo y Rayos)
| Token CSS | Color HEX | Uso / Rol de UI |
| :--- | :---: | :--- |
| `--energy-gold-bright` | `#FEF05B` | Hotspots interactivos pulsantes, rayo $E=mc^2$ y foco activo. |
| `--energy-gold-primary` | `#E5B20D` | Botones principales (CTA), números circulares y titulares destacados. |
| `--energy-amber-plasma` | `#D97706` | Pistas metacognitivas, alertas y anillos de plasma secundario. |
| `--energy-core-white` | `#FCFDF4` | Centro del núcleo atómico, fórmulas y máximo contraste. |

### 3. Telemetría Holográfica (HUD)
| Token CSS | Color HEX | Uso / Rol de UI |
| :--- | :---: | :--- |
| `--hud-cyan-electric` | `#4FB2D2` | Instrumentos, recuadros de telemetría y variables experimentales. |
| `--hud-cyan-glow` | `rgba(79, 178, 210, 0.35)` | Resplandor holográfico en componentes de indagación científica. |
| `--hud-cyan-dark` | `#155E75` | Bordes de tarjetas de evidencia y glosario técnico. |

### 4. Jerarquía Tipográfica y Lectura
| Token CSS | Color HEX | Uso / Rol de UI |
| :--- | :---: | :--- |
| `--text-pure-white` | `#FFFFFF` | Titulares de módulo, números de paso y etiquetas de alta prioridad. |
| `--text-gold-light` | `#FEF9C3` | Texto de lectura pedagógica, párrafos descriptivos y explicaciones. |
| `--text-dim-gold` | `#A1A17A` | Metadatos, competencias ICFES y notas al pie. |

---

## 💻 Cómo Importar y Usar en Futuros Trabajos

En cualquier archivo HTML o componente del proyecto:

```html
<!-- Importar la paleta de Física -->
<link rel="stylesheet" href="css/theme-fisica.css">
```

En tu CSS:
```css
.boton-cuantico {
  background: var(--energy-gold-primary);
  color: var(--bg-reactor-deep);
  box-shadow: var(--glow-gold-sm);
  border: 1px solid var(--energy-gold-bright);
}

.tarjeta-telemetria {
  background: var(--bg-cockpit-carbon);
  border: 1px solid var(--hud-cyan-electric);
  box-shadow: 0 0 15px var(--hud-cyan-glow);
}
```
