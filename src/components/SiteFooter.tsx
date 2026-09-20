import { Link } from 'react-router-dom'
import { track } from '@vercel/analytics'
import { ArrowRight, Mail, MapPin, MessageCircle, Linkedin, Instagram } from 'lucide-react'
import { Isotipo, Wordmark } from './Brand'
import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import { CALENDAR_URL, EMAIL, INSTAGRAM_URL, LINKEDIN_URL, buildWhatsappLink } from '../config'

/**
 * Footer único para toda la web. Antes la home tenía solo logo + copyright y
 * las páginas internas no tenían footer: nadie encontraba cómo contactar sin
 * volver arriba.
 */
export function SiteFooter() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-[#35362f] text-stone-400 pt-16 pb-10 px-6 md:px-12 border-t border-stone-100/10 relative z-10 block">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-12 pb-12 border-b border-stone-100/10">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-4" aria-label="RUBRA lab">
              <Isotipo className="w-7 h-7 text-stone-200" />
              <Wordmark />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6">{t.footer.pitch}</p>
            <p className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 shrink-0 text-green-400" />
              {t.footer.location}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-5">{t.footer.navHeading}</p>
            <ul className="flex flex-col gap-3">
              {t.footer.links.map((link) => (
                <li key={link.href}>
                  {/* Los anchors de la home van como <a>: react-router no hace
                      scroll al hash por sí solo, y el footer vive en todas las páginas. */}
                  {link.href.includes('#') ? (
                    <a href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-5">{t.footer.contactHeading}</p>
            <ul className="flex flex-col gap-3 mb-8">
              <li>
                <a href={`mailto:${EMAIL}`} className="text-sm hover:text-white transition-colors inline-flex items-center gap-2.5">
                  <Mail className="w-4 h-4 shrink-0 text-green-400" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsappLink(t.whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('whatsapp_click', { origin: 'footer' })}
                  className="text-sm hover:text-white transition-colors inline-flex items-center gap-2.5"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-green-400" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('schedule_click', { origin: 'footer' })}
                  className="text-sm hover:text-white transition-colors inline-flex items-center gap-2.5"
                >
                  <ArrowRight className="w-4 h-4 shrink-0 text-green-400" />
                  {t.footer.scheduleMeeting}
                </a>
              </li>
            </ul>

            <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-4">{t.footer.followHeading}</p>
            <div className="flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-stone-100/20 flex items-center justify-center hover:border-green-400/50 hover:text-green-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-stone-100/20 flex items-center justify-center hover:border-green-400/50 hover:text-green-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="pt-8 text-sm text-stone-500">{t.footer.tagline(new Date().getFullYear())}</p>
      </div>
    </footer>
  )
}

/** Botón flotante de WhatsApp, con los textos ya resueltos por idioma. */
export function FloatingWhatsApp() {
  const { language } = useLanguage()
  const t = translations[language]
  return <WhatsAppFloatingButton label={t.whatsapp.label} message={t.whatsapp.message} />
}

export function WhatsAppFloatingButton({ label, message }: { label: string; message: string }) {
  return (
    <a
      href={buildWhatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('whatsapp_click', { origin: 'floating' })}
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3.5 rounded-full shadow-lg shadow-black/20 hover:brightness-105 transition-all"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-semibold">{label}</span>
    </a>
  )
}
