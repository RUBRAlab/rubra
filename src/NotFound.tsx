import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from './hooks/usePageMeta'
import { useLanguage } from './i18n/LanguageContext'
import { PageNav } from './components/PageNav'
import { SiteFooter, FloatingWhatsApp } from './components/SiteFooter'

const COPY = {
  es: {
    title: 'Página no encontrada | RUBRA lab',
    heading: 'Esta página no existe.',
    body: 'El link puede estar mal escrito o la página se movió. Lo que buscás probablemente está en el inicio, en los casos o en el blog.',
    home: 'Ir al inicio',
    casos: 'Ver casos',
  },
  en: {
    title: 'Page not found | RUBRA lab',
    heading: 'This page does not exist.',
    body: 'The link may be misspelled or the page was moved. What you are looking for is probably on the home page, the case studies or the blog.',
    home: 'Go to home',
    casos: 'See case studies',
  },
} as const

export default function NotFound() {
  const { language, lp } = useLanguage()
  const c = COPY[language]
  usePageMeta({ title: c.title, description: c.body, path: '/' })

  return (
    <div className="min-h-screen bg-canvas">
      <PageNav />
      <main className="pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-green-700 uppercase mb-4">404</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6">{c.heading}</h1>
          <p className="text-lg text-stone-600 mb-10">{c.body}</p>
          <div className="flex flex-wrap gap-4">
            <Link to={lp('/')} className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
              <ArrowLeft className="w-4 h-4" /> {c.home}
            </Link>
            <Link to={lp('/casos')} className="inline-flex items-center px-5 py-3 rounded-full text-sm font-medium border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors">
              {c.casos}
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
