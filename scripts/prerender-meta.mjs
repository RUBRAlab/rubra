// Prerender de build: por cada ruta genera un index.html con su <title>, metas,
// schema y el HTML real de la página dentro de #root. Los crawlers de IA (GPTBot,
// ClaudeBot, PerplexityBot) no ejecutan JS: sin esto reciben la página vacía.
import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const SITE = 'https://www.rubra.ar'
const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render, postRoutes, indexRoutes, home, faq, localizePath } = await import(
  pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href
)

// Cada ruta sale dos veces: en español en la raíz y en inglés bajo /en, enlazadas
// entre sí con hreflang para que Google muestre la versión que corresponde.
const LANGS = ['es', 'en']
const OG_LOCALE = { es: 'es_AR', en: 'en_US' }
const OG_IMAGE_ALT = {
  es: 'RUBRA lab — software y automatización con IA para empresas',
  en: 'RUBRA lab, custom software and AI automation for businesses',
}
const urlOf = (routePath, lang) => `${SITE}${localizePath(routePath, lang)}`

const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

// El bloque FAQPage solo describe la home: si viaja en cada ruta prerenderizada,
// Google ve un FAQ declarado en páginas que no lo tienen.
const stripFaqSchema = (html) =>
  html.replace(/[ \t]*<!-- faq-schema:start[\s\S]*?faq-schema:end -->\n?/, '')

const injectApp = (html, routePath) => {
  const app = render(routePath)
  if (app.length < 500) throw new Error(`prerender: ${routePath} rindió HTML vacío`)
  return html.replace('<div id="root"></div>', () => `<div id="root">${app}</div>`)
}

const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.pregunta,
    acceptedAnswer: { '@type': 'Answer', text: i.respuesta },
  })),
})

const articleSchema = (route, lang) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: route[lang].headline,
  description: route[lang].description,
  datePublished: route.date,
  dateModified: route.date,
  inLanguage: lang === 'es' ? 'es-AR' : 'en',
  articleSection: route.isCaso ? (lang === 'es' ? 'Casos de éxito' : 'Case studies') : 'Blog',
  mainEntityOfPage: urlOf(route.path, lang),
  image: `${SITE}/og-image-v3.png`,
  author: { '@type': 'Person', name: 'Ruperto Bravo', url: SITE },
  publisher: {
    '@type': 'Organization',
    name: 'RUBRA lab',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/logo/isotipo.png` },
  },
})

const breadcrumbSchema = (route, lang) => {
  const section = route.isCaso ? '/casos' : '/blog'
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'RUBRA lab', item: urlOf('/', lang) },
      {
        '@type': 'ListItem',
        position: 2,
        name: route.isCaso ? (lang === 'es' ? 'Casos' : 'Case studies') : 'Blog',
        item: urlOf(section, lang),
      },
      { '@type': 'ListItem', position: 3, name: route[lang].headline, item: urlOf(route.path, lang) },
    ],
  }
}

const hreflang = (routePath) =>
  [
    `<link rel="alternate" hreflang="es" href="${urlOf(routePath, 'es')}" />`,
    `<link rel="alternate" hreflang="en" href="${urlOf(routePath, 'en')}" />`,
    `<link rel="alternate" hreflang="x-default" href="${urlOf(routePath, 'es')}" />`,
  ]
    .map((l) => `    ${l}`)
    .join('\n')

/**
 * `routePath` va en español ('/casos/x'); la versión en inglés se escribe en su
 * ruta traducida ('/en/cases/x'). El FAQ del template es el de la home en español:
 * solo queda ahí, el resto de las páginas lo pierde y la home en inglés lleva el suyo.
 */
const writeRoute = (routePath, lang, { title, description }, extraHead = []) => {
  const localized = localizePath(routePath, lang)
  const url = urlOf(routePath, lang)
  const keepFaq = routePath === '/' && lang === 'es'
  const attr = (re, value) => (html) => html.replace(re, (_, a, b) => `${a}${value}${b}`)

  let html = keepFaq ? template : stripFaqSchema(template)
  html = html.replace(/<title>.*?<\/title>/, () => `<title>${escText(title)}</title>`)
  for (const apply of [
    attr(/(<html lang=")[^"]*(")/, lang),
    attr(/(<meta name="description" content=")[^"]*(")/, escAttr(description)),
    attr(/(<link rel="canonical" href=")[^"]*(")/, url),
    attr(/(<meta property="og:url" content=")[^"]*(")/, url),
    attr(/(<meta property="og:title" content=")[^"]*(")/, escAttr(title)),
    attr(/(<meta property="og:description" content=")[^"]*(")/, escAttr(description)),
    attr(/(<meta property="og:image:alt" content=")[^"]*(")/, escAttr(OG_IMAGE_ALT[lang])),
    attr(/(<meta property="og:locale" content=")[^"]*(")/, OG_LOCALE[lang]),
    attr(/(<meta name="twitter:title" content=")[^"]*(")/, escAttr(title)),
    attr(/(<meta name="twitter:description" content=")[^"]*(")/, escAttr(description)),
  ]) html = apply(html)

  const other = lang === 'es' ? 'en' : 'es'
  const head = [
    `    <meta property="og:locale:alternate" content="${OG_LOCALE[other]}" />`,
    hreflang(routePath),
    ...extraHead.map((h) => `    ${h}`),
  ].join('\n')
  html = html.replace('</head>', () => `${head}\n  </head>`)
  html = injectApp(html, localized)

  const outDir = path.join(dist, ...localized.split('/').filter(Boolean))
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  console.log(`prerender: ${localized} (${(html.length / 1024).toFixed(0)} KB)`)
}

// 404.html: Vercel lo sirve con status 404 real para cualquier ruta que no exista en
// dist ni en los rewrites. Es la misma app, así que React renderiza <NotFound />.
// Se arma desde el template vacío (está en memoria: escribir dist/index.html no lo pisa).
const notFound = stripFaqSchema(template)
  .replace(/<title>.*?<\/title>/, '<title>Página no encontrada | RUBRA lab</title>')
  .replace(/<meta name="robots"[^>]*>/, '')
  .replace('</head>', '<meta name="robots" content="noindex">\n</head>')
fs.writeFileSync(path.join(dist, '404.html'), notFound)
console.log('prerender: 404 -> 404.html')

for (const lang of LANGS) {
  writeRoute('/', lang, home[lang], lang === 'en' ? [jsonLd(faqSchema(faq.en))] : [])
  for (const route of indexRoutes) writeRoute(route.path, lang, route[lang])
  for (const route of postRoutes) {
    writeRoute(route.path, lang, route[lang], [
      jsonLd(articleSchema(route, lang)),
      jsonLd(breadcrumbSchema(route, lang)),
    ])
  }
}

// Sitemap generado desde las rutas reales, para que un post nuevo no quede afuera.
// Cada URL declara su par en el otro idioma (xhtml:link), como pide Google.
const today = new Date().toISOString().slice(0, 10)
const pages = [
  { path: '/', lastmod: today, changefreq: 'monthly', priority: '1.0' },
  ...indexRoutes.map((r) => ({ path: r.path, lastmod: today, changefreq: 'weekly', priority: '0.9' })),
  ...postRoutes.map((r) => ({ path: r.path, lastmod: r.date, changefreq: 'monthly', priority: '0.7' })),
]
const entries = pages.flatMap((p) => LANGS.map((lang) => ({ ...p, lang })))
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (e) => `  <url>
    <loc>${urlOf(e.path, e.lang)}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${urlOf(e.path, 'es')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${urlOf(e.path, 'en')}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlOf(e.path, 'es')}" />
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`prerender: sitemap.xml (${entries.length} URLs)`)
