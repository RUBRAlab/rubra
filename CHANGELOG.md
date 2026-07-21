# Changelog

Registro de cambios relevantes del sitio. Formato libre, un bloque por sesión de trabajo.

## 2026-07-21 — Benchmark de competencia + rediseño del hero

Disparado por un análisis de [cambalache.studio](https://cambalache.studio) (agencia
de productos digitales, mismo target y rango de precio que RUBRA). Deriva en dos rondas
de cambios: primero contenido/conversión, después identidad visual.

### Ronda 1 — Contenido y conversión

- Precio orientativo público ("desde USD 1.000") en el hero y en el paso 1 de Método.
- Tiempos estimados por etapa en la sección Método (3-5 días / 2-6 semanas / entrega +
  soporte continuo).
- Sección FAQ nueva en la home (acordeón, `id="faq"`, agregada al nav): costo, plazos,
  uso de IA, qué pasa post-lanzamiento, propiedad del código, alcance geográfico.
- Fix: tagline viejo "El futuro no es técnico, es humano" seguía en el copyright del
  footer, residuo del reposicionamiento anterior a agencia de desarrollo.

### Auditoría UX/UI propia

- `scroll-padding-top` + `scroll-behavior: smooth` — el nav fijo tapaba el título de
  la sección al navegar por anchor.
- CTA de agendar unificado a "Agendar reunión" (antes 3 variantes distintas para el
  mismo link de calendario).
- Foto del hero (retrato ejecutivo) convertida de PNG a WebP: 2.27 MB → 116 KB.
- El canvas de partículas de fondo (`AbstractBackground`) se pausa cuando la pestaña
  no está visible y se desactiva con `prefers-reduced-motion`.

### Ronda 2 — Rediseño visual

Motivado por la sensación de que Cambalache "se veía más profesional" pese a los fixes
de contenido. Diagnóstico: no era copy ni performance, era peso visual e identidad.

- **Fondo cemento `#35362f`** (tinte oliva, no gris neutro) extendido a todo el sitio
  como superficie oscura alternada con las secciones claras: hero, Método, Servicios,
  Contacto y footer. La banda verde (`green-900`) después del hero es la única
  excepción deliberada — es el momento de acento de marca, no un oscuro más.
- **Verde de acento sube a `green-400`** sobre fondo oscuro (`green-700/800` de marca
  desaparece sobre cemento) y se reserva a 3 puntos de jerarquía: itálica del título,
  CTA principal y precio/stats.
- **Isotipo nuevo** (`Isotipo` en `App.tsx`): cuatro bloques con el de arriba a la
  derecha separado y en verde — la tesis del sitio ("no falta más software, falta el
  que le falta") hecha marca. Va en nav y footer.
- **Fila de stats** bajo el hero reemplazando la línea de precio en gris: proyectos en
  producción, semanas de construcción, precio desde. El "12" sale de la cantidad de
  logos en `CLIENTS`; si cambia esa lista, actualizar `HERO_STATS`.
- **Foto del hero reemplazada**: del retrato ejecutivo a una foto generada con IA
  (prompt armado a medida) mostrando a Ruperto de espaldas, código en pantalla, pared
  de hormigón y luz natural — coherente con el fondo cemento y con lo que vende el
  sitio. Mismo nombre de archivo (`ruperto.webp`), no requirió tocar el import.
- **Testimonios reales** ("En sus palabras", entre Casos y Servicios): 4 frases
  textuales de clientes (Peregrina, Julia H, Deportivo Pradere, Desquiciado Wines),
  provistas por Ruperto. Constante `TESTIMONIOS` — contenido no editable sin nueva
  cita textual del cliente.
- Contraste verificado y corregido en cada paso (placeholder de inputs, párrafos de
  Servicios, footer) — todo por encima de WCAG AA, la mayoría AAA.

### Notas de proceso

- El deploy automático GitHub → Vercel dejó de dispararse a mitad de sesión; los
  últimos commits se publicaron con `vercel deploy --prod --scope rubralab` directo.
  Revisar la integración si vuelve a pasar.
- Detalle completo y decisiones de diseño en la memoria del proyecto
  (`project_rubra_ar_sitio.md` y `project_competencia_cambalache.md`).
