# RUBRA — Sitio web (www.rubra.ar)

Landing + blog de RUBRA (agencia de automatización IA para PyMEs). Contacto: hola@rubra.ar.
El CRM interno es un proyecto aparte (`../rubra-crm`, dominio crm.rubra.ar); este sitio no lo
enlaza (se entra directo por crm.rubra.ar).

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

- El formulario de contacto postea a `api/contacto.ts` (Vercel Function, Resend): manda el
  mail a `hola@rubra.ar` con `reply_to` del visitante y una autorespuesta al mismo. Reemplazó
  al `mailto:` viejo (2026-09-16): no generaba lead, no funcionaba en celulares sin cliente de
  mail, y no había forma de saber si alguien lo había intentado. Requiere `RESEND_API_KEY`
  (reusa las mismas env vars que `api/notificar.ts`: `NOTIFY_FROM`, `NOTIFY_TO`).
- Botón flotante de WhatsApp (`WhatsAppFloatingButton` en `App.tsx`) con el número real de
  RUBRA (`WHATSAPP_NUMBER`, ver `whatsapp_setup` en memoria de rubra-crm). Es un `wa.me`, no
  depende de si el número está operando por la app normal o por Cloud API.
- Eventos de `@vercel/analytics` (`track()`) en los 3 CTA de agendar reunión, el WhatsApp
  flotante y el envío del formulario — antes no había forma de saber si alguien intentaba
  convertir. Ver Web Analytics del proyecto en Vercel para leerlos.
- La navegación tiene una versión desktop y un menú hamburguesa mobile separados dentro de
  `App.tsx`: si agregás/quitás un link, **hacelo en ambos** (es fácil olvidarse del mobile).
- Commits en español, descriptivos.
- `npm run lint` = `tsc --noEmit`. `npm run build` = `vite build && node scripts/prerender-meta.mjs`
  (Vercel usa `build`). Verificar ambos antes de deployar.

## Presupuesto base cliente (referencia comercial)

- Hosting: USD 25/mes
- Soporte: USD 75/mes (opcional)

## Cerrar sesión

Al terminar de trabajar acá (código o marketing), correr el skill `cerrar-sesion`
para volcar el estado a `RUBRA-OS/CONTEXTO-OPERATIVO.md`. Si no se cierra así,
esta sesión guarda su propia memoria aislada y el contexto se fragmenta otra vez.
