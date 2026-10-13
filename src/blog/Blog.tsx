import { Link } from 'react-router-dom'
import { articulos } from './posts'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { PageNav } from '../components/PageNav'
import { SiteFooter, FloatingWhatsApp } from '../components/SiteFooter'

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

export const COPY = {
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
  const { language, lp } = useLanguage()
  const c = COPY[language]

  usePageMeta({
    title: c.metaTitle,
    description: c.metaDescription,
    path: '/blog',
  })

  return (
    <div className="min-h-screen bg-canvas">
      <PageNav />

      {/* Contenido */}
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-4">{c.kicker}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-[-0.04em] leading-[1.02] text-ink max-w-3xl mb-14 md:mb-16">
            {c.heading}
          </h1>

          {/* Tarjetas blancas, como las de casos en la landing */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {articulos.map((post) => (
              <Link
                key={post.slug}
                to={lp(`/blog/${post.slug}`)}
                className="group flex flex-col h-full bg-white rounded-[2rem] p-6 md:p-8 border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5">
                  <span className="text-[0.7rem] font-semibold tracking-widest text-green-600 uppercase">{language === 'en' ? post.category_en : post.category}</span>
                  <span className="text-stone-300" aria-hidden="true">·</span>
                  <span className="text-xs text-stone-500">{c.readTime(post.readTime)}</span>
                  <span className="text-stone-300" aria-hidden="true">·</span>
                  <span className="text-xs text-stone-500">{formatDate(post.date, language)}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-3 leading-tight">
                  {language === 'en' ? post.title_en : post.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6 flex-1">{language === 'en' ? post.description_en : post.description}</p>
                <span className="inline-flex items-center gap-2 text-ink font-medium pt-4 border-t border-stone-200">
                  {c.readArticle}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
