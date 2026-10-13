import { Link } from 'react-router-dom'
import { casos } from '../blog/posts'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { PageNav } from '../components/PageNav'
import { SiteFooter, FloatingWhatsApp } from '../components/SiteFooter'
import { CasoVisual } from '../components/CasoPreview'

export const COPY = {
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
  const { language, lp } = useLanguage()
  const c = COPY[language]

  usePageMeta({
    title: c.metaTitle,
    description: c.metaDescription,
    path: '/casos',
  })

  return (
    <div className="min-h-screen bg-canvas">
      <PageNav />

      {/* Contenido */}
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-4">{c.kicker}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-[-0.04em] leading-[1.02] text-ink mb-6">
            {c.titleParts[0]}<br />{c.titleParts[1]}
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mb-14 md:mb-16">
            {c.intro}
          </p>

          {/* Mismas tarjetas que la sección Casos de la landing */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {casos.map((caso) => (
              <Link
                key={caso.slug}
                to={lp(`/casos/${caso.slug}`)}
                className="group flex flex-col h-full bg-white rounded-[2rem] p-6 md:p-8 border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-0.5 transition-all duration-300"
              >
                <CasoVisual slug={caso.slug} alt={language === 'en' ? caso.title_en : caso.title} />
                <p className="text-[0.7rem] font-semibold tracking-widest text-green-600 uppercase mb-3">
                  {c.readTime(caso.readTime)}
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-3 leading-tight">
                  {language === 'en' ? caso.title_en : caso.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6 flex-1">{language === 'en' ? caso.description_en : caso.description}</p>
                <span className="inline-flex items-center gap-2 text-ink font-medium pt-4 border-t border-stone-200">
                  {c.verCaso}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          {/* Cierre en tarjeta negra, como la tesis y el contacto de la landing */}
          <div className="mt-16 md:mt-20 bg-ink rounded-[2.5rem] px-8 py-12 md:px-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <p className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-white max-w-xl leading-tight">
              {c.ctaQuestion}
            </p>
            <a
              href={lp('/#contacto')}
              className="inline-flex items-center justify-center gap-2 bg-green-400 text-green-950 px-7 py-4 rounded-full font-semibold hover:bg-green-300 transition-colors shrink-0"
            >
              {c.ctaLink} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
