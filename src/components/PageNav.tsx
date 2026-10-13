import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Isotipo, Wordmark } from './Brand'
import { LanguageToggle } from '../i18n/LanguageToggle'
import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'

/**
 * Nav de las páginas internas (blog, casos, privacidad, 404), alineado al de la
 * landing: mismos links de sección (apuntando a la home), mismo toggle y el CTA
 * negro. `accion` reemplaza al CTA cuando la página tiene otra salida natural
 * (volver al blog, volver al inicio).
 */
export function PageNav({ accion }: { accion?: ReactNode }) {
  const { language, lp } = useLanguage()
  const t = translations[language]

  return (
    <nav className="fixed w-full z-50 bg-canvas/80 backdrop-blur-md border-b border-stone-200/80 px-6 md:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to={lp('/')} className="flex items-center gap-2.5" aria-label="RUBRA lab">
          <Isotipo className="w-7 h-7 md:w-8 md:h-8 shrink-0 text-ink" />
          <Wordmark dark size="sm" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-7">
          <div className="hidden md:flex items-center gap-7">
            {t.nav.links.map((item) => (
              <a key={item.href} href={lp(`/${item.href}`)} className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">
                {item.label}
              </a>
            ))}
            <Link to={lp('/blog')} className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">
              {t.nav.blog}
            </Link>
          </div>
          <LanguageToggle className="border-stone-200 text-stone-700 hover:bg-white" />
          {accion ?? (
            <a
              href={lp('/#contacto')}
              className="px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-ink text-white hover:bg-ink-2 transition-colors flex items-center gap-2 group shadow-lg shadow-black/10 whitespace-nowrap"
            >
              {t.nav.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}
