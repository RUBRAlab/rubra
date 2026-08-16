import { Link } from 'react-router-dom'
import { articulos } from './posts'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageToggle } from '../i18n/LanguageToggle'

// Formatea "2026-06-06" → "6 de junio de 2026" / "June 6, 2026"
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
    metaTitle: 'Blog | RUBRA lab: automatización y procesos para empresas',
    metaDescription: 'Artículos sobre automatización de procesos, cuellos de botella y gestión del cambio para empresas de Latinoamérica.',
    cta: 'Hablemos',
    kicker: 'Blog',
    heading: 'Ideas para negocios que quieren dejar de hacer las cosas a mano.',
    readTime: (min: number) => `${min} min de lectura`,
    readArticle: 'Leer artículo',
  },
  en: {
    metaTitle: 'Blog | RUBRA lab: automation and processes for businesses',
    metaDescription: 'Articles on process automation, bottlenecks and change management for Latin American companies.',
    cta: "Let's talk",
    kicker: 'Blog',
    heading: 'Ideas for businesses that want to stop doing things by hand.',
    readTime: (min: number) => `${min} min read`,
    readArticle: 'Read article',
  },
} as const

export default function Blog() {
  const { language } = useLanguage()
  const c = COPY[language]

  usePageMeta({
    title: c.metaTitle,
    description: c.metaDescription,
    path: '/blog',
  })

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
            <Link to="/#contacto" className="bg-green-800 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2 group">
              {c.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-4">{c.kicker}</p>
          <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-stone-900 mb-16">
            {c.heading}
          </h1>

          <div className="flex flex-col gap-12">
            {articulos.map((post) => (
              <article key={post.slug} className="border-t border-stone-200 pt-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-widest text-green-700 uppercase">{language === 'en' ? post.category_en : post.category}</span>
                  <span className="text-stone-300">·</span>
                  <span className="text-sm text-stone-400">{c.readTime(post.readTime)}</span>
                  <span className="text-stone-300">·</span>
                  <span className="text-sm text-stone-400">{formatDate(post.date, language)}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-stone-900 mb-3 leading-tight">
                  {language === 'en' ? post.title_en : post.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">{language === 'en' ? post.description_en : post.description}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-green-800 font-medium hover:gap-3 transition-all"
                >
                  {c.readArticle} <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
