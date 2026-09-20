import { Link } from 'react-router-dom'

import genialCatalogo from '../assets/images/pantallas/genial-catalogo.webp'
import genialCotizacion from '../assets/images/pantallas/genial-cotizacion.webp'
import genialBodegas from '../assets/images/pantallas/genial-bodegas.webp'
import genialProducto from '../assets/images/pantallas/genial-producto.webp'
import genialHome from '../assets/images/pantallas/genial-home.webp'
import flowDashboard from '../assets/images/pantallas/flowpyme-dashboard.webp'
import flowMovimientos from '../assets/images/pantallas/flowpyme-movimientos.webp'
import flowImportacion from '../assets/images/pantallas/flowpyme-importacion.webp'
import flowCuentas from '../assets/images/pantallas/flowpyme-cuentas.webp'
import crmDashboard from '../assets/images/pantallas/crm-dashboard.webp'
import crmClientes from '../assets/images/pantallas/crm-clientes.webp'
import crmMensajes from '../assets/images/pantallas/crm-mensajes.webp'
import desqDashboard from '../assets/images/pantallas/desq-dashboard.webp'
import desqCatalogo from '../assets/images/pantallas/desq-catalogo.webp'
import desqPedido from '../assets/images/pantallas/desq-pedido.webp'
import desqSeguimiento from '../assets/images/pantallas/desq-seguimiento.webp'
import clubarLanding from '../assets/images/pantallas/clubar-landing.webp'

import shotPintureria from '../assets/images/casos/pintureria.webp'
import shotConcil from '../assets/images/casos/concil.webp'
import shotPalomar from '../assets/images/casos/palomar.webp'

type Pantalla = { src: string; alt: string; tipo: 'desktop' | 'phone' }

/**
 * Pantallas reales de proyectos entregados, con los datos comerciales tapados:
 * del CRM propio se difuminan montos y contactos (es la facturación de RUBRA y
 * los datos de sus clientes), y del portal B2B de la bodega los precios por
 * canal, el CUIT y la línea de crédito — el mismo criterio que ya se aplicó a
 * la captura del caso `portal-b2b-bodega`.
 */
const FILA_A: Pantalla[] = [
  { src: genialCatalogo, alt: 'Catálogo de insumos con filtros — GENIAL Wine', tipo: 'desktop' },
  { src: flowDashboard, alt: 'Dashboard de flujo de fondos — Flowpyme', tipo: 'desktop' },
  { src: desqDashboard, alt: 'App de pedidos B2B — Desquiciado', tipo: 'phone' },
  { src: shotPintureria, alt: 'Tienda online de una pinturería con cinco sucursales', tipo: 'desktop' },
  { src: genialCotizacion, alt: 'Armado de cotización — GENIAL Wine', tipo: 'desktop' },
  { src: clubarLanding, alt: 'Landing de ClubAr', tipo: 'phone' },
  { src: crmDashboard, alt: 'Dashboard de cobranza — CRM propio de RUBRA', tipo: 'desktop' },
  { src: flowMovimientos, alt: 'Conciliación de movimientos — Flowpyme', tipo: 'desktop' },
  { src: desqCatalogo, alt: 'Catálogo por canal — Desquiciado', tipo: 'phone' },
]

const FILA_B: Pantalla[] = [
  { src: shotConcil, alt: 'Concil, producto propio de conciliación', tipo: 'desktop' },
  { src: genialBodegas, alt: 'Sección Bodegas — GENIAL Wine', tipo: 'desktop' },
  { src: desqPedido, alt: 'Armado de pedido — Desquiciado', tipo: 'phone' },
  { src: flowImportacion, alt: 'Revisión de importaciones bancarias — Flowpyme', tipo: 'desktop' },
  { src: shotPalomar, alt: 'Sitio institucional de Palomar Marín Ingeniería', tipo: 'desktop' },
  { src: crmClientes, alt: 'Padrón de clientes — CRM propio de RUBRA', tipo: 'desktop' },
  { src: desqSeguimiento, alt: 'Seguimiento de envíos — Desquiciado', tipo: 'phone' },
  { src: genialProducto, alt: 'Ficha de producto — GENIAL Wine', tipo: 'desktop' },
  { src: flowCuentas, alt: 'Administración de cuentas — Flowpyme', tipo: 'desktop' },
  { src: crmMensajes, alt: 'Bandeja de mensajes — CRM propio de RUBRA', tipo: 'desktop' },
  { src: genialHome, alt: 'Home de GENIAL Wine', tipo: 'desktop' },
]

/** Marco de navegador: sin esto la captura se lee como una imagen cualquiera. */
const Ventana = ({ p }: { p: Pantalla }) => (
  <figure className="shrink-0 w-[300px] md:w-[420px] rounded-xl overflow-hidden bg-[#2b2c26] border border-stone-100/12 shadow-2xl shadow-black/40">
    <div className="flex items-center gap-1.5 px-3 h-7 bg-stone-100/[0.07] border-b border-stone-100/10">
      <span className="w-2 h-2 rounded-full bg-stone-100/25" />
      <span className="w-2 h-2 rounded-full bg-stone-100/25" />
      <span className="w-2 h-2 rounded-full bg-stone-100/25" />
    </div>
    <img
      src={p.src}
      alt={p.alt}
      loading="lazy"
      decoding="async"
      width={1200}
      height={750}
      className="w-full aspect-[16/10] object-cover object-top"
    />
  </figure>
)

/** Marco de teléfono para las pantallas de apps móviles. */
const Telefono = ({ p }: { p: Pantalla }) => (
  <figure className="shrink-0 w-[132px] md:w-[172px] rounded-[1.75rem] overflow-hidden bg-[#2b2c26] border-[5px] border-stone-100/15 shadow-2xl shadow-black/40">
    <img
      src={p.src}
      alt={p.alt}
      loading="lazy"
      decoding="async"
      width={540}
      height={1170}
      className="w-full aspect-[9/19.5] object-cover object-top"
    />
  </figure>
)

const Fila = ({ pantallas, reversa }: { pantallas: Pantalla[]; reversa?: boolean }) => (
  <div className="flex gap-5 md:gap-7 w-max items-center" data-marquee={reversa ? 'reversa' : 'directa'}>
    {/* duplicado: el segundo set entra por la derecha justo cuando el primero sale */}
    {[0, 1].map((copia) =>
      pantallas.map((p, i) => (
        <div key={`${copia}-${i}`} aria-hidden={copia === 1}>
          {p.tipo === 'phone' ? <Telefono p={p} /> : <Ventana p={p} />}
        </div>
      ))
    )}
  </div>
)

/**
 * Franja de capturas bajo el hero. El "+29 proyectos" de los stats no se ve:
 * esto lo hace visible sin pedirle al visitante que entre a cada caso.
 */
export const PantallasStrip = ({
  kicker,
  titulo,
  cta,
}: {
  kicker: string
  titulo: string
  cta: string
}) => (
  <section className="bg-[#35362f] pb-16 md:pb-24 pt-4 overflow-hidden relative z-10" aria-label={titulo}>
    <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 md:mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-sm font-semibold tracking-widest text-green-400 uppercase mb-2">{kicker}</p>
        <h2 className="font-display text-xl md:text-2xl font-medium text-stone-300 max-w-xl leading-snug">{titulo}</h2>
      </div>
      <Link
        to="/casos"
        className="text-sm font-medium text-stone-300 hover:text-green-400 transition-colors underline underline-offset-4 decoration-stone-100/30"
      >
        {cta}
      </Link>
    </div>

    <div className="marquee-mask flex flex-col gap-5 md:gap-7">
      <div className="marquee">
        <Fila pantallas={FILA_A} />
      </div>
      <div className="marquee">
        <Fila pantallas={FILA_B} reversa />
      </div>
    </div>
  </section>
)
