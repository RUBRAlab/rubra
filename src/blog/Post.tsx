import { Link, useParams, Navigate, useLocation } from 'react-router-dom'
import { posts, basePath } from './posts'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { PageNav } from '../components/PageNav'
import { SiteFooter, FloatingWhatsApp } from '../components/SiteFooter'

const formatDate = (dateStr: string, language: 'es' | 'en') => {
  const [year, month, day] = dateStr.split('-').map(Number)
  if (language === 'en') {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    return `${months[month - 1]} ${day}, ${year}`
  }
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  return `${day} de ${months[month - 1]} de ${year}`
}

const COPY = {
  es: {
    notFoundTitle: 'Artículo no encontrado | RUBRA lab',
    notFoundDescription: 'Construimos el software que tu negocio necesita: tiendas online, sistemas de gestión, portales B2B y automatización.',
    back: (base: string) => (base === '/casos' ? 'Casos' : 'Blog'),
    readTime: (min: number) => `${min} min de lectura`,
    resonated: '¿Te resonó este artículo?',
    ctaTitle: 'Agendá un diagnóstico gratuito de 30 minutos.',
    ctaButton: 'Reservar sesión →',
  },
  en: {
    notFoundTitle: 'Article not found | RUBRA lab',
    notFoundDescription: 'We build the software your business needs: online stores, management systems, B2B portals and automation.',
    back: (base: string) => (base === '/casos' ? 'Case studies' : 'Blog'),
    readTime: (min: number) => `${min} min read`,
    resonated: 'Did this article resonate with you?',
    ctaTitle: 'Book a free 30-minute diagnosis.',
    ctaButton: 'Book a session →',
  },
} as const

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const { language } = useLanguage()
  const c = COPY[language]
  const post = posts.find(p => p.slug === slug)
  const base = post ? basePath(post.category) : '/blog'
  // Un caso vive en /casos y un artículo en /blog: si se entra por la ruta
  // equivocada, redirigimos a la canónica en vez de duplicar contenido.
  const rutaCorrecta = location.pathname.startsWith(base)

  const title = post ? (language === 'en' ? post.title_en : post.title) : null
  const description = post ? (language === 'en' ? post.description_en : post.description) : null
  const category = post ? (language === 'en' ? post.category_en : post.category) : null

  usePageMeta({
    title: post ? `${title} | RUBRA` : c.notFoundTitle,
    description: post ? description! : c.notFoundDescription,
    path: post ? `${base}/${post.slug}` : '/blog',
  })

  if (!post) return <Navigate to="/blog" replace />
  if (!rutaCorrecta) return <Navigate to={`${base}/${post.slug}`} replace />

  const Content = language === 'en' ? post.content_en : post.content

  return (
    <div className="min-h-screen bg-canvas">
      <PageNav
        accion={
          <Link to={base} className="px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-white text-ink border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors flex items-center gap-2 whitespace-nowrap">
            <ArrowLeft className="w-4 h-4" /> {c.back(base)}
          </Link>
        }
      />

      {/* Artículo */}
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">

          {/* Metadata */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-widest text-green-700 uppercase">{category}</span>
            <span className="text-stone-300">·</span>
            <span className="text-sm text-stone-400">{c.readTime(post.readTime)}</span>
            <span className="text-stone-300">·</span>
            <span className="text-sm text-stone-400">{formatDate(post.date, language)}</span>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-[-0.04em] text-ink leading-[1.05] mb-6">
            {title}
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed mb-12 border-b border-stone-200 pb-12">
            {description}
          </p>

          {/* Cuerpo del artículo */}
          <div className="
            prose prose-stone max-w-none
            prose-headings:font-display prose-headings:font-semibold prose-headings:text-stone-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-stone-600 prose-p:leading-relaxed prose-p:mb-5
            prose-strong:text-stone-900 prose-strong:font-medium
            prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline
          ">
            <Content />
          </div>

          {/* CTA al final */}
          <div className="mt-16 bg-ink rounded-[2.5rem] px-8 py-12 md:px-12 md:py-14">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-3">{c.resonated}</p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-white mb-6 leading-tight">
              {c.ctaTitle}
            </h3>
            <a
              href="https://calendar.app.google/EkGn6twofhVFeFQu6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-400 text-green-950 px-7 py-4 rounded-full font-semibold hover:bg-green-300 transition-colors"
            >
              {c.ctaButton}
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
