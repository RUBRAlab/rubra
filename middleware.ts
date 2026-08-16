// Detecta el país del visitante por geo-IP (header que agrega el edge de Vercel)
// y le fija por default el idioma del sitio: español en países hispanohablantes,
// inglés en el resto. Es solo un default inicial — si el visitante ya eligió un
// idioma con el botón ES/EN, esa elección (guardada en localStorage) manda siempre.

export const config = {
  matcher: '/((?!api/|assets/|.*\\.[\\w]+$).*)',
}

const PAISES_HISPANOHABLANTES = new Set([
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GQ',
  'GT', 'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'PR', 'ES', 'UY', 'VE',
])

const COOKIE_NAME = 'rubra-lang-geo'

export default async function middleware(request: Request) {
  const cookies = request.headers.get('cookie') ?? ''
  const yaTieneCookie = new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=`).test(cookies)

  const response = await fetch(request)

  if (yaTieneCookie) return response

  const pais = request.headers.get('x-vercel-ip-country') ?? ''
  const lang = pais && !PAISES_HISPANOHABLANTES.has(pais) ? 'en' : 'es'

  const nueva = new Response(response.body, response)
  nueva.headers.append('Set-Cookie', `${COOKIE_NAME}=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`)
  return nueva
}
