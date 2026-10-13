// Conversiones de Google Ads (cuenta RUBRA - CONCIL, etiqueta AW-18485710204).
// La etiqueta base se carga en index.html; acá solo se dispara el evento junto
// al track() de Vercel. Si gtag no cargó (bloqueador, SSR), no pasa nada.
const ADS_ID = 'AW-18485710204'

const LABELS = {
  whatsapp: 'Eq7QCO3i2JsdEPya1u5E',
  agendar: 'DXWlCPDi2JsdEPya1u5E',
  formulario: 'uBaaCOG62psdEPya1u5E',
} as const

export type Conversion = keyof typeof LABELS

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function conversion(name: Conversion) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', 'conversion', { send_to: `${ADS_ID}/${LABELS[name]}` })
}
