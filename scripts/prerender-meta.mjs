// Prerender de build: por cada ruta genera un index.html con su <title>, metas,
// schema y el HTML real de la página dentro de #root. Los crawlers de IA (GPTBot,
// ClaudeBot, PerplexityBot) no ejecutan JS: sin esto reciben la página vacía.
import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const SITE = 'https://www.rubra.ar'
const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render, postRoutes } = await import(
  pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href
)

const indexRoutes = [
  {
    path: '/blog',
    title: 'Blog | RUBRA lab: automatización y procesos para empresas',
    description: 'Artículos sobre automatización de procesos, cuellos de botella y gestión del cambio para empresas de Latinoamérica.',
  },
  {
    path: '/casos',
    title: 'Casos | RUBRA lab: software para empresas de Latinoamérica',
    description: 'Tiendas online, sistemas de gestión y portales B2B que construimos para empresas e instituciones. Casos reales, en producción.',
  },
  {
    path: '/privacidad',
    title: 'Política de privacidad | RUBRA lab',
    description: 'Qué datos recolecta rubra.ar, para qué se usan, con quién se comparten y cómo pedir que se eliminen.',
  },
]

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

const articleSchema = (route) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: route.headline,
  description: route.description,
  datePublished: route.date,
  dateModified: route.date,
  inLanguage: 'es-AR',
  articleSection: route.isCaso ? 'Casos de éxito' : 'Blog',
  mainEntityOfPage: `${SITE}${route.path}`,
  image: `${SITE}/og-image-v2.png`,
  author: { '@type': 'Person', name: 'Ruperto Bravo', url: SITE },
  publisher: {
    '@type': 'Organization',
    name: 'RUBRA lab',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/logo/isotipo.png` },
  },
})

const breadcrumbSchema = (route) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'RUBRA lab', item: `${SITE}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: route.isCaso ? 'Casos' : 'Blog',
      item: `${SITE}${route.isCaso ? '/casos' : '/blog'}`,
    },
    { '@type': 'ListItem', position: 3, name: route.headline, item: `${SITE}${route.path}` },
  ],
})

const writeRoute = (route, extraHead = '') => {
  const url = `${SITE}${route.path}`
  const title = escText(route.title)
  const description = escAttr(route.description)
  const attr = (re, value) => (html) => html.replace(re, (_, a, b) => `${a}${value}${b}`)
  let html = stripFaqSchema(template).replace(/<title>.*?<\/title>/, () => `<title>${title}</title>`)
  for (const apply of [
    attr(/(<meta name="description" content=")[^"]*(")/, description),
    attr(/(<link rel="canonical" href=")[^"]*(")/, url),
    attr(/(<meta property="og:url" content=")[^"]*(")/, url),
    attr(/(<meta property="og:title" content=")[^"]*(")/, escAttr(route.title)),
    attr(/(<meta property="og:description" content=")[^"]*(")/, description),
    attr(/(<meta name="twitter:title" content=")[^"]*(")/, escAttr(route.title)),
    attr(/(<meta name="twitter:description" content=")[^"]*(")/, description),
  ]) html = apply(html)
  if (extraHead) html = html.replace('</head>', () => `${extraHead}\n  </head>`)
  html = injectApp(html, route.path)

  const outDir = path.join(dist, ...route.path.split('/').filter(Boolean))
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  console.log(`prerender: ${route.path} (${(html.length / 1024).toFixed(0)} KB)`)
}

for (const route of indexRoutes) writeRoute(route)
for (const route of postRoutes) {
  writeRoute(route, `    ${jsonLd(articleSchema(route))}\n    ${jsonLd(breadcrumbSchema(route))}`)
}

// 404.html: Vercel lo sirve con status 404 real para cualquier ruta que no exista en
// dist ni en los rewrites. Es la misma app, así que React renderiza <NotFound />.
// Se arma desde el template vacío, antes de inyectarle la home a index.html.
const notFound = stripFaqSchema(template)
  .replace(/<title>.*?<\/title>/, '<title>Página no encontrada | RUBRA lab</title>')
  .replace(/<meta name="robots"[^>]*>/, '')
  .replace('</head>', '<meta name="robots" content="noindex">\n</head>')
fs.writeFileSync(path.join(dist, '404.html'), notFound)
console.log('prerender: 404 -> 404.html')

// La home va última: index.html es también el template del resto.
const home = injectApp(template, '/')
fs.writeFileSync(path.join(dist, 'index.html'), home)
console.log(`prerender: / (${(home.length / 1024).toFixed(0)} KB)`)

// Sitemap generado desde las rutas reales, para que un post nuevo no quede afuera.
const today = new Date().toISOString().slice(0, 10)
const entries = [
  { loc: '/', lastmod: today, changefreq: 'monthly', priority: '1.0' },
  ...indexRoutes.map((r) => ({ loc: r.path, lastmod: today, changefreq: 'weekly', priority: '0.9' })),
  ...postRoutes.map((r) => ({ loc: r.path, lastmod: r.date, changefreq: 'monthly', priority: '0.7' })),
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${SITE}${e.loc}</loc>
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
