import { Link, useParams, Navigate, useLocation } from 'react-router-dom'
import { posts, basePath } from './posts'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageToggle } from '../i18n/LanguageToggle'

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
    notFoundTitle: 'RUBRA | Transformación organizacional para empresas',
    notFoundDescription: 'Acompañamos a líderes, equipos y organizaciones a transformarse de forma simple, humana y consciente.',
    back: (base: string) => (base === '/casos' ? 'Casos' : 'Blog'),
    readTime: (min: number) => `${min} min de lectura`,
    resonated: '¿Te resonó este artículo?',
    ctaTitle: 'Agendá un diagnóstico gratuito de 30 minutos.',
    ctaButton: 'Reservar sesión →',
  },
  en: {
    notFoundTitle: 'RUBRA | Organizational transformation for businesses',
    notFoundDescription: 'We help leaders, teams and organizations transform in a simple, human and mindful way.',
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
    <div className="min-h-screen bg-stone-50">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-baseline">
            <span className="font-display text-3xl font-bold tracking-tight text-stone-900">RUBRA</span>
            <span className="font-display text-3xl font-light text-green-600 ml-1.5">lab</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle className="border-stone-300 text-stone-700 hover:bg-stone-100" />
            <Link to={base} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> {c.back(base)}
            </Link>
          </div>
        </div>
      </nav>

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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-stone-900 leading-tight mb-6">
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
          <div className="mt-16 pt-10 border-t border-stone-200">
            <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-3">{c.resonated}</p>
            <h3 className="text-2xl font-display font-semibold text-stone-900 mb-4">
              {c.ctaTitle}
            </h3>
            <a
              href="https://calendar.app.google/EkGn6twofhVFeFQu6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-800 text-stone-50 px-8 py-4 rounded font-medium hover:bg-green-700 transition-colors"
            >
              {c.ctaButton}
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
