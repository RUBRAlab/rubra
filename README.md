# RUBRA — Sitio web (www.rubra.ar)

Landing + blog de **RUBRA**, agencia de automatización IA para PyMEs. Contacto: hola@rubra.ar.

El CRM interno es un proyecto aparte (repo `RUBRAlab/rubra-crm`, dominio **crm.rubra.ar**); este
sitio lo enlaza con el botón **"Acceso equipo"** en el pie de página.

## Stack

- **Vite 6** + **React 19** + **TypeScript** (SPA, sin SSR)
- **react-router-dom v7** — rutas: `/` (landing), `/blog`, `/blog/:slug`
- **Tailwind CSS v4** (`@tailwindcss/vite`) + `@tailwindcss/typography`
- **motion** (animaciones) + **lucide-react** (íconos)
- `@google/genai` (Gemini)
- Deploy: **Vercel** (push a `main`)

## Estructura

```
index.html                 # entry HTML
src/
  main.tsx                 # bootstrap + router
  App.tsx                  # landing completa (nav desktop + menú mobile, secciones, form, footer)
  blog/
    Blog.tsx               # índice del blog
    Post.tsx               # detalle de un post
    posts/                 # cada post es un .tsx que exporta un FC (ver index.ts y types.ts)
  hooks/usePageMeta.ts     # setea <title>/meta por página
scripts/prerender-meta.mjs # prerenderiza meta/HTML por ruta del blog en el build
public/                    # assets estáticos
```

## Correr en local

**Requisitos:** Node.js

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Crear `.env.local` con la clave de Gemini:
   ```
   GEMINI_API_KEY=...
   ```
3. Levantar el dev server (puerto 3000):
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` — Vite dev server.
- `npm run lint` — `tsc --noEmit` (chequeo de tipos).
- `npm run build` — `vite build` + `node scripts/prerender-meta.mjs` (lo que usa Vercel).
- `npm run preview` — sirve el build de producción localmente.

Antes de deployar: correr `npm run lint && npm run build`.

## Notas

- El formulario de contacto **no tiene backend**: arma un `mailto:hola@rubra.ar` desde el `onSubmit`.
- La navegación tiene una versión **desktop** y un **menú hamburguesa mobile** separados dentro de
  `App.tsx`. Si agregás o quitás un link, hacelo en **ambos** (es fácil olvidarse del mobile).
- Commits en español, descriptivos.
