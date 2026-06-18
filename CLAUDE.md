# RUBRA — Sitio web (www.rubra.ar)

Landing + blog de RUBRA (agencia de automatización IA para PyMEs). Contacto: hola@rubra.ar.
El CRM interno es un proyecto aparte (`../rubra-crm`, dominio crm.rubra.ar); este sitio lo
enlaza con el botón **"Acceso equipo"** en el footer.

## Stack (NO es Next.js ni Supabase)

- **Vite 6** + **React 19** + **TypeScript** (SPA, no SSR)
- **react-router-dom v7** (rutas: `/` landing, `/blog`, `/blog/:slug`)
- **Tailwind CSS v4** (vía `@tailwindcss/vite`) + `@tailwindcss/typography`
- **motion** (animaciones) + **lucide-react** (íconos)
- `@google/genai` (Gemini) — usa `GEMINI_API_KEY` en `.env.local`
- Deploy: **Vercel** (repo `RUBRAlab/rubra`)

## Estructura

- `src/App.tsx` — landing completa en un solo archivo (nav, secciones, formulario, footer).
- `src/blog/` — `Blog.tsx` (índice), `Post.tsx` (detalle), `posts/` (cada post es un `.tsx` que
  exporta un `FC`; ver `posts/index.ts` y `types.ts`).
- `src/hooks/usePageMeta.ts` — setea `<title>`/meta por página.
- `scripts/prerender-meta.mjs` — corre en el build para prerenderizar meta/HTML por ruta del blog.
- `index.html`, `public/`, `metadata.json`.

## Convenciones

- El formulario de contacto NO tiene backend: arma un `mailto:hola@rubra.ar` desde el `onSubmit`.
- La navegación tiene una versión desktop y un menú hamburguesa mobile separados dentro de
  `App.tsx`: si agregás/quitás un link, **hacelo en ambos** (es fácil olvidarse del mobile).
- Commits en español, descriptivos.
- `npm run lint` = `tsc --noEmit`. `npm run build` = `vite build && node scripts/prerender-meta.mjs`
  (Vercel usa `build`). Verificar ambos antes de deployar.

## Presupuesto base cliente (referencia comercial)

- Hosting: USD 25/mes
- Soporte: USD 75/mes (opcional)
