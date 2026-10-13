import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes.tsx'
import { posts, basePath } from './blog/posts'
import { translations } from './i18n/translations'
import { localizePath } from './i18n/paths'
import { COPY as blogCopy } from './blog/Blog.tsx'
import { COPY as casosCopy } from './casos/Casos.tsx'
import { COPY as privacidadCopy } from './Privacidad.tsx'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
}

export { localizePath }

// Los textos de cada ruta salen de los mismos componentes que los muestran, así
// el prerender no repite (ni desincroniza) títulos y descripciones.
const meta = (c: { es: { metaTitle: string; metaDescription: string }; en: { metaTitle: string; metaDescription: string } }) => ({
  es: { title: c.es.metaTitle, description: c.es.metaDescription },
  en: { title: c.en.metaTitle, description: c.en.metaDescription },
})

export const home = {
  es: translations.es.meta,
  en: translations.en.meta,
}

export const faq = {
  es: translations.es.faq.items,
  en: translations.en.faq.items,
}

export const indexRoutes = [
  { path: '/blog', ...meta(blogCopy) },
  { path: '/casos', ...meta(casosCopy) },
  { path: '/privacidad', ...meta(privacidadCopy) },
]

export const postRoutes = posts.map((p) => ({
  path: `${basePath(p.category)}/${p.slug}`,
  date: p.date,
  isCaso: p.category === 'Casos',
  es: { title: `${p.title} | RUBRA`, headline: p.title, description: p.description },
  en: { title: `${p.title_en} | RUBRA`, headline: p.title_en, description: p.description_en },
}))
