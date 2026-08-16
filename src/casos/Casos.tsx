import { Link } from 'react-router-dom'
import { casos } from '../blog/posts'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageToggle } from '../i18n/LanguageToggle'

const COPY = {
  es: {
    metaTitle: 'Casos | RUBRA lab: software para empresas de Latinoamérica',
    metaDescription: 'Tiendas online, sistemas de gestión y portales B2B que construimos para empresas e instituciones. Casos reales, en producción.',
    cta: 'Hablemos',
    kicker: 'Casos',
    titleParts: ['Lo que construimos,', 'en producción.'],
    intro: 'Cada uno de estos proyectos resolvió un problema concreto de un negocio real. No son maquetas ni pruebas de concepto: están funcionando.',
    readTime: (min: number) => `${min} min de lectura`,
    verCaso: 'Ver el caso',
    ctaQuestion: '¿Tenés un proyecto parecido en mente?',
    ctaLink: 'Contanos qué necesitás',
  },
  en: {
    metaTitle: 'Case studies | RUBRA lab: software for Latin American businesses',
    metaDescription: 'Online stores, management systems and B2B portals we built for companies and institutions. Real case studies, in production.',
    cta: "Let's talk",
    kicker: 'Case studies',
    titleParts: ['What we build,', 'in production.'],
    intro: 'Each of these projects solved a concrete problem for a real business. They’re not mockups or proofs of concept: they’re live.',
    readTime: (min: number) => `${min} min read`,
    verCaso: 'View case study',
    ctaQuestion: 'Have a similar project in mind?',
    ctaLink: 'Tell us what you need',
  },
} as const

export default function Casos() {
  const { language } = useLanguage()
  const c = COPY[language]

  usePageMeta({
    title: c.metaTitle,
    description: c.metaDescription,
    path: '/casos',
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
            <Link
              to="/#contacto"
              className="bg-green-800 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2 group"
            >
              {c.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-4">{c.kicker}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-stone-900 mb-6">
            {c.titleParts[0]}<br />{c.titleParts[1]}
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mb-16">
            {c.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {casos.map((caso) => (
              <Link
                key={caso.slug}
                to={`/casos/${caso.slug}`}
                className="group block bg-white rounded-[2rem] p-8 md:p-10 border border-stone-200 hover:border-green-600/40 hover:shadow-lg hover:shadow-green-900/5 transition-all"
              >
                <p className="text-xs font-semibold tracking-widest text-green-700 uppercase mb-4">
                  {c.readTime(caso.readTime)}
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-stone-900 mb-4 leading-tight">
                  {language === 'en' ? caso.title_en : caso.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">{language === 'en' ? caso.description_en : caso.description}</p>
                <span className="inline-flex items-center gap-2 text-green-700 font-medium">
                  {c.verCaso}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-20 border-t border-stone-200 pt-10">
            <p className="text-stone-600 leading-relaxed mb-4">
              {c.ctaQuestion}
            </p>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 text-green-800 font-medium hover:gap-3 transition-all"
            >
              {c.ctaLink} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
