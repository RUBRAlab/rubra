import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { track } from '@vercel/analytics'
import { conversion } from '../lib/gads'
import {
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Check,
  X,
  MessagesSquare,
  FileSpreadsheet,
  PackageSearch,
  Users,
  LayoutDashboard,
  Store,
  Bot,
  Network,
} from 'lucide-react'
import { Reveal, Kicker, HeroMockup, Horizonte, TestimonioCard } from '../App'
import { CasoVisual } from '../components/CasoPreview'
import { SiteFooter } from '../components/SiteFooter'
import { Isotipo, Wordmark } from '../components/Brand'
import { usePageMeta } from '../hooks/usePageMeta'
import { translations } from '../i18n/translations'
import { CALENDAR_URL, buildWhatsappLink } from '../config'
import heroImage from '../assets/images/ruperto.webp'
import logoConcil from '../assets/images/clients/concil.webp'
import logoDeportivoPradere from '../assets/images/clients/deportivo-pradere.webp'
import logoPalomarMarin from '../assets/images/clients/palomar-marin.webp'
import logoDesquiciado from '../assets/images/clients/desquiciado.webp'
import logoAcacia from '../assets/images/clients/acacia.webp'
import logoPeregrina from '../assets/images/clients/peregrina.webp'

/**
 * Landing para dueños hispanos de pymes en EE.UU. (Miami y Houston), el primer
 * mercado exterior aprobado el 2026-10-13 (rubra-marketing/brands/rubra/mercado-exterior.md).
 * Español neutro con tuteo: el comprador es mexicano, centroamericano o caribeño, no
 * rioplatense. Una sola oferta (sistema en 4 semanas) y precios en USD de EE.UU.
 * Los casos y testimonios son los argentinos con nombre autorizado: RUBRA todavía no
 * tiene clientes en EE.UU. y no se inventan.
 */

export const META = {
  title: 'Sistemas a medida para negocios hispanos en EE.UU. | RUBRA lab',
  description:
    'Tu operación en un sistema, en 4 semanas y a precio cerrado en dólares. Pedidos, clientes, cobranzas y stock, hecho a la medida de tu negocio y en español.',
}

const WHATSAPP_MESSAGE = 'Hola, vi la página de RUBRA lab para Estados Unidos y quiero consultar por un sistema para mi negocio.'

const TRUST_LOGOS = [logoDeportivoPradere, logoPalomarMarin, logoDesquiciado, logoAcacia, logoConcil, logoPeregrina]

const STATS = [
  { valor: '+29', etiqueta: 'Proyectos este año' },
  { valor: '4 semanas', etiqueta: 'De construcción' },
  { valor: 'USD 2.000', etiqueta: 'Desde', destacado: true },
] as const

const DOLORES = [
  { icon: MessagesSquare, title: 'Pedidos por WhatsApp', body: 'Llegan por mensaje, alguien los copia a mano y cada tanto uno se pierde.' },
  { icon: FileSpreadsheet, title: 'Cobranzas en una planilla', body: 'Una sola persona sabe quién debe qué. Si falta, nadie cobra.' },
  { icon: PackageSearch, title: 'Stock que no cuadra', body: 'Lo que dice el sistema no es lo que hay en el depósito, y te enteras tarde.' },
  { icon: Users, title: 'Equipo coordinado a mensajes', body: 'Cuadrillas, choferes o vendedores organizados en grupos que nadie puede seguir.' },
]

const COMPARACION = {
  estandar: [
    'Pagas por usuario, todos los meses, y sube con tu equipo',
    'Tu equipo se adapta al programa',
    'Pensado en inglés, para un negocio promedio',
    'Lo que no hace, lo sigues haciendo en planillas al costado',
  ],
  rubra: [
    'Precio cerrado una vez, en dólares',
    'El sistema se adapta a cómo trabajas',
    'En español, para tu equipo y tus clientes',
    'El código es 100 % tuyo, sin licencias',
  ],
}

const SERVICIOS = [
  {
    icon: LayoutDashboard,
    title: 'Sistema de gestión',
    precio: 'desde USD 6.000',
    body: 'Pedidos, clientes, cobranzas, stock y cuadrillas en un solo lugar, hecho a la medida de tu operación.',
    destacado: true,
  },
  {
    icon: Bot,
    title: 'Automatización con IA',
    precio: 'desde USD 2.000',
    body: 'Una tarea repetitiva hecha por un agente: cargar pedidos, responder consultas, cruzar datos, avisar. Es la mejor forma de empezar.',
  },
  {
    icon: Network,
    title: 'Portal B2B mayorista',
    precio: 'desde USD 8.000',
    body: 'Tus clientes mayoristas hacen pedidos solos, con su lista de precios, sin pasar por WhatsApp.',
  },
  {
    icon: Store,
    title: 'Tienda online a medida',
    precio: 'desde USD 6.000',
    body: 'Catálogo, pedidos y pagos conectados con tu stock real, administrada por tu equipo.',
  },
]

const CASOS = translations.es.casos.items.filter((c) =>
  ['club-deportivo-cuotas', 'portal-b2b-bodega', 'pintureria-cinco-sucursales', 'concil-producto-propio'].includes(c.slug),
)

const PASOS = [
  {
    tag: '3 a 5 días hábiles',
    title: 'Alcance y precio',
    body: 'Definimos qué se construye, en cuánto tiempo y a qué precio. Lo recibes por escrito, en español y en inglés, junto con el contrato.',
  },
  {
    tag: '4 semanas',
    title: 'Construcción',
    body: 'Por fases que puedes ver y probar a medida que avanzan, no una sola entrega sorpresa al final.',
  },
  {
    tag: 'Entrega y soporte',
    title: 'En producción',
    body: 'Te entregamos el sistema funcionando y en manos de tu equipo, con 30 días de garantía. Seguimos disponibles para lo que sigue.',
  },
]

const FAQ = [
  {
    pregunta: '¿Cuánto cuesta?',
    respuesta: 'Un sistema de gestión arranca en USD 6.000 y una automatización en USD 2.000. El precio exacto queda cerrado en una propuesta antes de empezar y no cambia a mitad de camino.',
  },
  {
    pregunta: '¿Cómo te pago?',
    respuesta: 'En dólares, por transferencia a una cuenta en Estados Unidos, en tres pagos: 40 % al firmar, 40 % a mitad del proyecto y 20 % con el sistema funcionando. Con la primera factura recibes el formulario W-8BEN, así que no tienes que retener nada.',
  },
  {
    pregunta: '¿Desde dónde trabajan?',
    respuesta: 'Desde Argentina, en remoto. Con Florida y Texas hay entre 1 y 3 horas de diferencia según la época del año, así que trabajamos en tu mismo horario.',
  },
  {
    pregunta: '¿En qué idioma es todo?',
    respuesta: 'Las reuniones son en español. El contrato y la documentación los recibes en español y en inglés, por si tu contador o tu socio los necesitan.',
  },
  {
    pregunta: '¿Y si un software estándar me sirve?',
    respuesta: 'Úsalo. Si en el diagnóstico vemos que un programa estándar resuelve lo que necesitas, te lo decimos. Construimos a medida cuando lo estándar te tiene haciendo planillas al costado.',
  },
  {
    pregunta: '¿El código es mío?',
    respuesta: 'Sí, 100 %. No dependes de nuestra plataforma ni pagas licencias por uso: el proyecto queda a tu nombre.',
  },
  {
    pregunta: '¿Qué pasa después de la entrega?',
    respuesta: 'Tienes 30 días de garantía. Después, si quieres, el hosting cuesta USD 50 al mes y el soporte con mejoras USD 250 al mes, con 4 horas de cambios incluidas. Las dos cosas son opcionales.',
  },
]

const primaryBtn =
  'inline-flex items-center justify-center gap-2 bg-ink text-white px-7 py-4 rounded-full font-medium hover:bg-ink-2 transition-colors group'
const ghostBtn =
  'inline-flex items-center justify-center gap-2 bg-white text-ink px-7 py-4 rounded-full font-medium border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors'

const AgendarLink = ({ origin, className, children }: { origin: string; className: string; children: ReactNode }) => (
  <a
    href={CALENDAR_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => track('schedule_click', { origin: `us_${origin}` })}
    className={className}
  >
    {children}
  </a>
)

const WhatsappLink = ({ origin, className, children }: { origin: string; className: string; children: ReactNode }) => (
  <a
    href={buildWhatsappLink(WHATSAPP_MESSAGE)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => track('whatsapp_click', { origin: `us_${origin}` })}
    className={className}
  >
    {children}
  </a>
)

export default function Us() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const testimonios = translations.es.testimonios
  const filaA = [...testimonios.items, ...testimonios.items]
  const filaB = [...filaA.slice(2), ...filaA.slice(0, 2)]

  usePageMeta({ ...META, path: '/us' })

  return (
    <div className="min-h-screen bg-canvas overflow-x-clip selection:bg-ink selection:text-white relative">
      <nav className="fixed w-full z-50 bg-canvas/80 backdrop-blur-md border-b border-stone-200/80 px-6 md:px-12 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/us" className="flex items-center gap-2.5" aria-label="RUBRA lab">
            <Isotipo className="w-7 h-7 md:w-8 md:h-8 shrink-0 text-ink" />
            <Wordmark dark size="sm" />
          </Link>
          <div className="flex items-center gap-7">
            <div className="hidden md:flex items-center gap-7">
              {[
                ['#precios', 'Precios'],
                ['#casos', 'Casos'],
                ['#como-trabajamos', 'Cómo trabajamos'],
                ['#faq', 'Preguntas'],
              ].map(([href, label]) => (
                <a key={href} href={href} className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">
                  {label}
                </a>
              ))}
            </div>
            <AgendarLink
              origin="nav"
              className="px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-ink text-white hover:bg-ink-2 transition-colors flex items-center gap-2 group shadow-lg shadow-black/10 whitespace-nowrap"
            >
              Agendar reunión
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </AgendarLink>
          </div>
        </div>
      </nav>

      <main className="relative z-10 block">
        {/* Hero: visible sin animar (si el JS tarda, no queda vacío) */}
        <section className="relative pt-36 pb-10 md:pt-44 md:pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-600/20 bg-green-500/10 px-3.5 py-1.5 text-[0.7rem] md:text-xs font-semibold uppercase tracking-widest text-green-700 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Para negocios hispanos
              <span className="hidden sm:inline"> · Estados Unidos</span>
            </span>
            <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-ink mb-7">
              Tu operación en un sistema.<br />
              <span className="text-green-600">En 4 semanas.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Pedidos, clientes, cobranzas y stock, hecho a la medida de cómo trabaja tu negocio. Precio cerrado en
              dólares antes de empezar, todo en español y el código es 100 % tuyo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <AgendarLink origin="hero" className={`${primaryBtn} shadow-xl shadow-black/15`}>
                Agendar reunión
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </AgendarLink>
              <WhatsappLink origin="hero" className={ghostBtn}>
                <MessageCircle className="w-5 h-5" />
                Escribir por WhatsApp
              </WhatsappLink>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="flex -space-x-2.5">
                {TRUST_LOGOS.map((logo) => (
                  <span key={logo} className="w-10 h-10 rounded-full bg-white border-2 border-canvas shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={logo} alt="" className="h-5 max-w-[30px] object-contain grayscale" />
                  </span>
                ))}
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-stone-500">Sistemas en producción para empresas de Latinoamérica</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 md:hidden">
              {STATS.map((stat) => (
                <div key={stat.etiqueta} className="flex flex-col items-center text-center">
                  <p className={`font-display text-xl font-semibold tracking-tight tabular-nums whitespace-nowrap ${'destacado' in stat ? 'text-green-600' : 'text-ink'}`}>
                    {stat.valor}
                  </p>
                  <p className="text-[0.6rem] font-medium uppercase tracking-widest text-stone-500 mt-1">{stat.etiqueta}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroMockup stats={STATS} />
        </section>

        {/* El dolor */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-12 md:mb-16 max-w-3xl">
              <Kicker>El problema</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-ink leading-[1.02]">
                ¿Tu negocio todavía vive en WhatsApp y planillas?
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {DOLORES.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.06} className="h-full">
                  <div className="h-full bg-white rounded-[2rem] border border-stone-200 p-7">
                    <div className="w-11 h-11 rounded-2xl bg-ink text-green-400 flex items-center justify-center mb-6">
                      <d.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink mb-2">{d.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{d.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Estándar vs a medida: la competencia real es el software por suscripción */}
        <section className="py-16 md:py-24 px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
              <Kicker>Antes de contratarnos</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-ink leading-[1.02]">
                Si un software estándar te sirve, úsalo.
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mt-6">
                Si te tiene haciendo planillas al costado, ahí entramos nosotros.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <Reveal className="h-full">
                <div className="h-full bg-white rounded-[2rem] border border-stone-200 p-8 md:p-10">
                  <p className="text-[0.7rem] font-semibold tracking-widest uppercase text-stone-500 mb-6">Software estándar por suscripción</p>
                  <ul className="flex flex-col gap-4">
                    {COMPARACION.estandar.map((item) => (
                      <li key={item} className="flex gap-3 text-stone-600 leading-relaxed">
                        <X className="w-5 h-5 shrink-0 mt-0.5 text-stone-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08} className="h-full">
                <div className="h-full bg-ink rounded-[2rem] p-8 md:p-10 shadow-[0_0_80px_-30px_rgba(34,197,94,0.6)]">
                  <p className="text-[0.7rem] font-semibold tracking-widest uppercase text-green-400 mb-6">Tu sistema con RUBRA lab</p>
                  <ul className="flex flex-col gap-4">
                    {COMPARACION.rubra.map((item) => (
                      <li key={item} className="flex gap-3 text-white leading-relaxed">
                        <Check className="w-5 h-5 shrink-0 mt-0.5 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="py-16 md:py-24 px-6 md:px-12 relative z-10" id="precios">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-12 md:mb-16 max-w-3xl">
              <Kicker>Qué construimos y cuánto cuesta</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-ink leading-[1.02]">
                Precio cerrado.<br />En dólares.
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mt-6">
                El alcance y el precio quedan por escrito antes de empezar. Ese número no cambia a mitad de camino.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 0.08} className="h-full">
                  <div className={`h-full rounded-[2rem] p-7 md:p-9 flex flex-col border ${s.destacado ? 'bg-white border-green-600/30 shadow-xl shadow-green-900/[0.06]' : 'bg-white border-stone-200'}`}>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-11 h-11 rounded-2xl bg-ink text-green-400 flex items-center justify-center shrink-0">
                        <s.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      {s.destacado && (
                        <span className="text-[0.65rem] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-green-500/10 text-green-700">
                          El más pedido
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-1">{s.title}</h3>
                    <p className="font-display text-lg font-semibold text-green-600 mb-4 tabular-nums">{s.precio}</p>
                    <p className="text-stone-600 leading-relaxed">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-6">
              <p className="text-sm text-stone-500 text-center">
                Después de la entrega, opcional: hosting USD 50 al mes y soporte con mejoras USD 250 al mes (incluye 4 horas de cambios).
              </p>
            </Reveal>
          </div>
        </section>

        {/* Casos: los argentinos con nombre autorizado */}
        <section className="py-16 md:py-24 px-6 md:px-12 relative z-10" id="casos">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-12 md:mb-16 max-w-3xl">
              <Kicker>Lo que ya construimos</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-ink leading-[1.02]">
                Casos reales,<br />en producción.
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mt-6">
                Empresas de Argentina, con nombre y sitio que puedes visitar.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {CASOS.map((caso, i) => (
                <Reveal key={caso.slug} delay={(i % 2) * 0.08}>
                  <Link
                    to={`/casos/${caso.slug}`}
                    className="group flex flex-col h-full bg-white rounded-[2rem] p-6 md:p-8 border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <CasoVisual slug={caso.slug} alt={caso.titulo} />
                    <p className="text-[0.7rem] font-semibold tracking-widest text-green-600 uppercase mb-3">{caso.rubro}</p>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-3 leading-tight">{caso.titulo}</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">{caso.resumen}</p>
                    <span className="inline-flex items-center gap-2 text-ink font-medium mt-auto">
                      Ver el caso
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Zona oscura ——— */}
        <Horizonte />

        <section className="bg-ink py-16 md:py-24 px-6 md:px-12 relative z-10" id="como-trabajamos">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-14 md:mb-20 text-center max-w-3xl mx-auto">
              <Kicker tono="oscuro">Cómo trabajamos</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-white leading-[1.02]">
                Alcance claro. Precio cerrado.<br /><span className="text-green-400">Sin sorpresas.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {PASOS.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.12} className="h-full">
                  <div className={`relative h-full rounded-[2rem] p-8 md:p-9 pt-12 md:pt-14 border flex flex-col bg-ink-2 ${i === 2 ? 'border-green-400/40 shadow-[0_0_80px_-20px_rgba(34,197,94,0.5)]' : 'border-white/[0.06]'}`}>
                    <span className="absolute -top-5 left-8 md:left-9 w-10 h-10 rounded-full bg-green-400 text-green-950 font-display font-semibold flex items-center justify-center shadow-lg shadow-green-500/30">
                      {i + 1}
                    </span>
                    <span className="self-start text-[0.65rem] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.06] text-green-400 mb-6">
                      {step.tag}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">{step.title}</h3>
                    <p className="text-stone-400 leading-relaxed">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 md:py-24 relative z-10 overflow-hidden">
          <Reveal className="px-6 md:px-12 mb-12 md:mb-14 text-center max-w-2xl mx-auto">
            <Kicker tono="oscuro">Lo que dicen</Kicker>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-white leading-[1.02]">
              En sus <span className="text-green-400">palabras.</span>
            </h2>
          </Reveal>
          <div className="marquee-mask flex flex-col gap-4 md:gap-5">
            <div className="marquee">
              <div className="flex gap-4 md:gap-5 w-max" data-marquee="directa">
                {[0, 1].map((copia) =>
                  filaA.map((item, i) => (
                    <div key={`${copia}-${i}`} aria-hidden={copia === 1}>
                      <TestimonioCard testimonio={item} verCaso="Ver el caso" />
                    </div>
                  )),
                )}
              </div>
            </div>
            <div className="marquee">
              <div className="flex gap-4 md:gap-5 w-max" data-marquee="reversa">
                {[0, 1].map((copia) =>
                  filaB.map((item, i) => (
                    <div key={`${copia}-${i}`} aria-hidden>
                      <TestimonioCard testimonio={item} verCaso="Ver el caso" />
                    </div>
                  )),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 md:py-24 px-6 md:px-12 relative z-10" id="faq">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Kicker tono="oscuro">Preguntas frecuentes</Kicker>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-white leading-[1.02]">
                Lo que todos<br /><span className="text-green-400">preguntan.</span>
              </h2>
            </Reveal>
            <div className="lg:col-span-7 flex flex-col gap-3">
              {FAQ.map((faq, i) => {
                const isOpen = openFaq === i
                const panelId = `us-faq-panel-${i}`
                return (
                  <Reveal key={faq.pregunta} delay={i * 0.05}>
                    <div className={`border rounded-2xl bg-ink-2 overflow-hidden transition-colors ${isOpen ? 'border-white/20' : 'border-white/[0.06]'}`}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center gap-4 px-6 py-5 text-left"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className="font-display text-sm font-semibold text-green-400 tabular-nums w-7 shrink-0">0{i + 1}</span>
                        <span className="flex-1 text-base md:text-lg font-display font-medium tracking-tight text-white">{faq.pregunta}</span>
                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-green-400 border-green-400 text-green-950 rotate-180' : 'border-white/15 text-white'}`}>
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </button>
                      <div id={panelId} className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                        <div className="overflow-hidden">
                          <p className="pl-[4.25rem] pr-6 pb-5 text-stone-400 leading-relaxed">{faq.respuesta}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Cierre: diagnóstico gratuito con quien construye */}
        <section className="bg-ink px-6 md:px-12 pb-20 md:pb-28 pt-6 relative z-10" id="contacto">
          <Reveal className="max-w-5xl mx-auto">
            <div className="bg-ink-2 border border-white/[0.06] rounded-[2.5rem] px-6 py-14 md:px-14 md:py-20 relative overflow-hidden">
              <div className="glow absolute -bottom-1/3 -right-1/4 w-[60%] h-[90%] opacity-50 pointer-events-none" aria-hidden="true" />
              <div className="relative flex flex-col md:flex-row gap-10 md:gap-14 items-start md:items-center">
                <img
                  src={heroImage}
                  alt="Ruperto Bravo, fundador de RUBRA lab"
                  loading="lazy"
                  decoding="async"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-3xl object-cover shrink-0"
                />
                <div className="min-w-0">
                  <Kicker tono="oscuro">Diagnóstico gratuito · 30 minutos</Kicker>
                  <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-white mb-5 leading-[1.05]">
                    Cuéntanos cómo trabaja tu negocio hoy.
                  </h2>
                  <p className="text-lg text-stone-400 leading-relaxed mb-8">
                    Hablas directo con quien construye tu sistema, sin vendedores en el medio. Sales de la reunión sabiendo
                    si te conviene algo a medida o un software estándar.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <AgendarLink
                      origin="cierre"
                      className="inline-flex items-center gap-2 bg-green-400 text-green-950 px-7 py-4 rounded-full font-semibold hover:bg-green-300 transition-colors group"
                    >
                      Agendar reunión
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </AgendarLink>
                    <WhatsappLink
                      origin="cierre"
                      className="inline-flex items-center gap-2 border border-white/15 text-white px-7 py-4 rounded-full font-medium hover:bg-white/[0.06] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </WhatsappLink>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
