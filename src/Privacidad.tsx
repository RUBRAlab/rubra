import { Link } from 'react-router-dom'
import { usePageMeta } from './hooks/usePageMeta'
import { useLanguage } from './i18n/LanguageContext'
import { LanguageToggle } from './i18n/LanguageToggle'
import { Isotipo, Wordmark } from './components/Brand'
import { SiteFooter } from './components/SiteFooter'
import { EMAIL } from './config'

// Describe lo que el sitio hace de verdad: el formulario de api/contacto.ts (que manda
// mails por Resend y no guarda nada en base), los eventos de Vercel Analytics y los saltos
// a WhatsApp y Google Calendar. Si cambia alguna de esas tres cosas, cambiar esto tambien.
const ACTUALIZADO = '2026-09-25'

const COPY = {
  es: {
    metaTitle: 'Política de privacidad | RUBRA lab',
    metaDescription:
      'Qué datos recolecta rubra.ar, para qué se usan, con quién se comparten y cómo pedir que se eliminen.',
    volver: 'Volver al inicio',
    titulo: 'Política de privacidad',
    actualizado: 'Última actualización: 25 de septiembre de 2026',
    secciones: [
      {
        h: 'Quién es responsable de tus datos',
        p: [
          'RUBRA lab es el nombre comercial de Ruperto Bravo, monotributista inscripto en Argentina. Los datos que dejes en este sitio los recibe y administra él, y el contacto para cualquier tema de privacidad es <a>.',
        ],
      },
      {
        h: 'Qué datos recolectamos',
        p: [
          'Si completás el formulario de contacto: tu nombre, tu email y la descripción de lo que necesitás. El teléfono y la empresa son opcionales, y el formulario funciona sin ellos.',
          'Si navegás el sitio sin escribirnos: datos de uso agregados a través de Vercel Analytics, como qué páginas se visitan y qué botones se tocan. Vercel Analytics no usa cookies ni construye un perfil tuyo entre sitios.',
          'No pedimos ni guardamos datos de tarjetas, documentos ni información sensible. Este sitio no vende nada ni procesa pagos.',
        ],
      },
      {
        h: 'Para qué los usamos',
        p: [
          'Para responderte. Lo que escribís en el formulario llega por mail a RUBRA lab y te enviamos una confirmación automática a tu casilla. Nada más.',
          'Los datos de uso agregados los miramos para entender qué contenido sirve y qué no. No se cruzan con lo que dejaste en el formulario.',
          'No usamos tus datos para publicidad ni los incorporamos a ninguna lista de difusión sin que lo pidas.',
        ],
      },
      {
        h: 'Dónde se guardan',
        p: [
          'Las consultas del formulario <strong>no se guardan en ninguna base de datos</strong>: viajan como mail y viven en la casilla de RUBRA lab, como cualquier correo que nos escribas.',
          'El sitio está alojado en Vercel y los mails se envían con Resend. Ambos son proveedores con servidores fuera de Argentina, así que tus datos se transfieren al exterior al usarlos.',
        ],
      },
      {
        h: 'Con quién se comparten',
        p: [
          'Con nadie, más allá de los proveedores necesarios para que el sitio funcione: Vercel (alojamiento y analítica) y Resend (envío de mails). No vendemos ni cedemos datos a terceros.',
          'Si hacés clic en los botones de WhatsApp o en el link para agendar una reunión, salís de este sitio hacia WhatsApp y Google Calendar, que tienen sus propias políticas de privacidad y quedan fuera de nuestro control.',
        ],
      },
      {
        h: 'Cuánto tiempo los conservamos',
        p: [
          'Las consultas quedan en la casilla de correo mientras sean útiles para la relación comercial. Si nos pedís que las borremos, las borramos.',
          'Los datos de uso agregados de Vercel Analytics se conservan según la política de ese servicio y no son atribuibles a una persona.',
        ],
      },
      {
        h: 'Tus derechos',
        p: [
          'Podés pedir acceso a los datos que tengamos tuyos, su corrección o su eliminación escribiendo a <a>. Respondemos dentro de los plazos que fija la Ley 25.326 de Protección de los Datos Personales de Argentina.',
          'La Agencia de Acceso a la Información Pública es el órgano de control de esa ley y atiende denuncias de quien considere vulnerados sus derechos.',
        ],
      },
      {
        h: 'Cambios',
        p: [
          'Si cambiamos esta política, actualizamos la fecha de arriba. Los cambios rigen desde su publicación en esta página.',
        ],
      },
    ],
  },
  en: {
    metaTitle: 'Privacy policy | RUBRA lab',
    metaDescription:
      'What data rubra.ar collects, what it is used for, who it is shared with, and how to request its deletion.',
    volver: 'Back to home',
    titulo: 'Privacy policy',
    actualizado: 'Last updated: September 25, 2026',
    secciones: [
      {
        h: 'Who is responsible for your data',
        p: [
          'RUBRA lab is the trade name of Ruperto Bravo, a registered sole trader (monotributista) in Argentina. Any data you leave on this site is received and managed by him, and the contact for any privacy matter is <a>.',
        ],
      },
      {
        h: 'What we collect',
        p: [
          'If you fill in the contact form: your name, your email and a description of what you need. Phone and company are optional, and the form works without them.',
          'If you only browse: aggregate usage data through Vercel Analytics, such as which pages are visited and which buttons are clicked. Vercel Analytics uses no cookies and builds no cross-site profile of you.',
          'We do not ask for or store card details, identity documents or sensitive information. This site sells nothing and processes no payments.',
        ],
      },
      {
        h: 'What we use it for',
        p: [
          'To reply to you. What you write in the form is emailed to RUBRA lab, and we send an automatic confirmation to your inbox. Nothing else.',
          'We look at aggregate usage data to understand which content works. It is not linked to what you submitted in the form.',
          'We do not use your data for advertising, and we do not add you to any mailing list unless you ask us to.',
        ],
      },
      {
        h: 'Where it is stored',
        p: [
          'Form submissions are <strong>not stored in any database</strong>: they travel as email and live in the RUBRA lab inbox, like any message you send us.',
          'The site is hosted on Vercel and emails are sent with Resend. Both are providers with servers outside Argentina, so your data is transferred abroad when they are used.',
        ],
      },
      {
        h: 'Who we share it with',
        p: [
          'No one, beyond the providers needed for the site to work: Vercel (hosting and analytics) and Resend (email delivery). We do not sell or hand over data to third parties.',
          'If you click the WhatsApp buttons or the scheduling link, you leave this site for WhatsApp and Google Calendar, which have their own privacy policies and are outside our control.',
        ],
      },
      {
        h: 'How long we keep it',
        p: [
          'Enquiries stay in the inbox for as long as they are useful to the business relationship. If you ask us to delete them, we delete them.',
          'Aggregate usage data from Vercel Analytics is retained under that service’s policy and is not attributable to an individual.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'You can request access to the data we hold about you, its correction or its deletion by writing to <a>. We respond within the terms set by Argentina’s Personal Data Protection Act (Ley 25.326).',
          'The Agencia de Acceso a la Información Pública is the supervisory authority for that law and handles complaints from anyone who believes their rights have been infringed.',
        ],
      },
      {
        h: 'Changes',
        p: [
          'If we change this policy we update the date above. Changes take effect once published on this page.',
        ],
      },
    ],
  },
} as const

// El copy trae <a> como marcador del mail y <strong> para enfasis: se resuelven aca para no
// meter dangerouslySetInnerHTML ni repetir la direccion en cada idioma.
function parrafo(texto: string, clave: number) {
  const partes = texto.split(/(<a>|<strong>[\s\S]*?<\/strong>)/g).filter(Boolean)
  return (
    <p key={clave} className="text-stone-600 leading-relaxed mb-4">
      {partes.map((parte, i) => {
        if (parte === '<a>') {
          return (
            <a key={i} href={`mailto:${EMAIL}`} className="text-stone-900 underline underline-offset-4">
              {EMAIL}
            </a>
          )
        }
        const fuerte = parte.match(/^<strong>([\s\S]*?)<\/strong>$/)
        if (fuerte) return <strong key={i} className="text-stone-900 font-medium">{fuerte[1]}</strong>
        return <span key={i}>{parte}</span>
      })}
    </p>
  )
}

export default function Privacidad() {
  const { language } = useLanguage()
  const c = COPY[language]

  usePageMeta({ title: c.metaTitle, description: c.metaDescription, path: '/privacidad' })

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" aria-label="RUBRA lab">
            <Isotipo className="w-7 h-7 text-stone-900" />
            <Wordmark dark size="sm" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageToggle className="border-stone-300 text-stone-700 hover:bg-stone-100" />
            <Link
              to="/"
              className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
            >
              {c.volver}
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 md:px-12 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight mb-3">
          {c.titulo}
        </h1>
        <p className="text-sm text-stone-500 mb-12">
          <time dateTime={ACTUALIZADO}>{c.actualizado}</time>
        </p>

        {c.secciones.map((s) => (
          <section key={s.h} className="mb-10">
            <h2 className="text-xl font-medium text-stone-900 mb-4">{s.h}</h2>
            {s.p.map(parrafo)}
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  )
}
