// Datos de contacto y enlaces externos de RUBRA lab, en un solo lugar para que
// nav, hero, formulario, footer y páginas internas no se desincronicen.

// Número real de WhatsApp Business de RUBRA lab (whatsapp_setup, rubra-crm).
// Se usa como wa.me: funciona con cualquier número, no depende de si está
// operando por la app normal o por Cloud API en un momento dado.
export const WHATSAPP_NUMBER = '5491178171726'
export const CALENDAR_URL = 'https://calendar.app.google/EkGn6twofhVFeFQu6'
export const EMAIL = 'hola@rubra.ar'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/rurba-latam'
export const INSTAGRAM_URL = 'https://www.instagram.com/rubra.latam'

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
