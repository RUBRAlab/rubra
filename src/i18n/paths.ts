// El idioma vive en la URL: español en la raíz, inglés bajo /en. Así cada idioma
// tiene su propia página indexable (Google y los crawlers de IA no ejecutan el toggle).
// Las rutas se escriben siempre en su forma en español y se traducen al renderizar.
export type Language = 'es' | 'en'

const ES_TO_EN: Record<string, string> = { casos: 'cases', privacidad: 'privacy' }
const EN_TO_ES: Record<string, string> = { cases: 'casos', privacy: 'privacidad' }

const mapFirstSegment = (pathname: string, map: Record<string, string>) => {
  const parts = pathname.split('/')
  if (parts[1] && map[parts[1]]) parts[1] = map[parts[1]]
  return parts.join('/')
}

const splitSuffix = (path: string) => {
  const i = path.search(/[?#]/)
  return i === -1 ? [path, ''] : [path.slice(0, i), path.slice(i)]
}

// Páginas que existen en un solo idioma: no tienen par en /en, así que ni el toggle
// ni la redirección por geo las tocan. /us es la landing en español neutro para
// dueños hispanos en EE.UU. (mercado aprobado el 2026-10-13).
const SPANISH_ONLY = new Set(['/us'])
export const isSpanishOnly = (pathname: string) => SPANISH_ONLY.has(pathname)

export const languageFromPath = (pathname: string): Language =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'

/** '/casos/x' → '/en/cases/x' en inglés. Acepta hash y query: '/#faq' → '/en#faq'. */
export function localizePath(path: string, language: Language): string {
  const [pathname, suffix] = splitSuffix(path)
  if (language === 'es') return path
  const en = mapFirstSegment(pathname, ES_TO_EN)
  return (en === '/' ? '/en' : `/en${en}`) + suffix
}

/** Forma en español de cualquier ruta del sitio: '/en/cases/x' → '/casos/x'. */
export function spanishPath(pathname: string): string {
  if (languageFromPath(pathname) === 'es') return pathname
  return mapFirstSegment(pathname.slice(3) || '/', EN_TO_ES)
}
