import { Ventana } from './Mockup'
import shotPintureria from '../assets/images/casos/pintureria.webp'
import shotConcil from '../assets/images/casos/concil.webp'
import shotPalomar from '../assets/images/casos/palomar.webp'
import shotPradere from '../assets/images/casos/pradere.webp'
import shotDesquiciado from '../assets/images/casos/desquiciado.webp'

/**
 * Capturas reales de los productos entregados. Las de sistemas internos se toman
 * con sesión y se publican con los datos personales difuminados: en el padrón del
 * club eso es nombre, DNI y teléfono de los 193 socios, y en el portal B2B los
 * precios por canal de la bodega. El caso de la constructora está anonimizado y no
 * tiene URL pública, así que va con el diagrama esquemático.
 */
const SHOT_BY_SLUG: Record<string, string> = {
  'pintureria-cinco-sucursales': shotPintureria,
  'concil-producto-propio': shotConcil,
  'palomar-marin-ingenieria': shotPalomar,
  'club-deportivo-cuotas': shotPradere,
  'portal-b2b-bodega': shotDesquiciado,
}

export const shotForSlug = (slug: string): string | undefined => SHOT_BY_SLUG[slug]

/**
 * Previsualización esquemática de cada caso. No es una captura: es un diagrama
 * de qué se entregó, para que la card no sea un bloque de texto plano.
 * Se usa solo donde no hay captura real posible.
 */
export const CasoPreview = ({ variant }: { variant: string }) => {
  const stone = '#d6d3d1';
  const stoneSoft = '#e7e5e4';
  const green = '#15803d';

  const content = () => {
    switch (variant) {
      case 'tienda':
        return (
          <>
            {[0, 1, 2].map((c) =>
              [0, 1].map((r) => (
                <g key={`${c}-${r}`}>
                  <rect x={24 + c * 96} y={56 + r * 62} width="80" height="40" rx="5" fill={c === 1 && r === 0 ? green : stoneSoft} opacity={c === 1 && r === 0 ? 0.16 : 1} />
                  <rect x={24 + c * 96} y={102 + r * 62} width="46" height="6" rx="3" fill={stone} />
                </g>
              ))
            )}
            <rect x="24" y="34" width="60" height="8" rx="4" fill={green} opacity="0.5" />
          </>
        );
      case 'padron':
        return (
          <>
            {[0, 1, 2, 3].map((r) => (
              <g key={r}>
                <circle cx="38" cy={50 + r * 30} r="9" fill={stoneSoft} />
                <rect x="56" y={45 + r * 30} width={92 - r * 12} height="7" rx="3.5" fill={stone} />
                <rect x="56" y={56 + r * 30} width={58 - r * 8} height="5" rx="2.5" fill={stoneSoft} />
                <rect x="232" y={44 + r * 30} width="44" height="14" rx="7" fill={green} opacity={r < 3 ? 0.16 : 0.06} />
                <rect x="247" y={49 + r * 30} width="14" height="4" rx="2" fill={green} opacity={r < 3 ? 0.7 : 0.25} />
              </g>
            ))}
          </>
        );
      case 'b2b':
        return (
          <>
            <rect x="24" y="36" width="272" height="16" rx="4" fill={stoneSoft} />
            <rect x="34" y="42" width="52" height="5" rx="2.5" fill={stone} />
            <rect x="238" y="42" width="34" height="5" rx="2.5" fill={stone} />
            {[0, 1, 2, 3].map((r) => (
              <g key={r}>
                <rect x="34" y={68 + r * 26} width={124 - r * 16} height="7" rx="3.5" fill={stone} />
                <rect x={230 + r * 6} y={68 + r * 26} width={42 - r * 6} height="7" rx="3.5" fill={green} opacity="0.55" />
                <rect x="24" y={84 + r * 26} width="272" height="1" fill={stoneSoft} />
              </g>
            ))}
          </>
        );
      case 'sitio':
        // Sitio institucional / portfolio: hero grande + grilla de obra.
        return (
          <>
            <rect x="24" y="32" width="272" height="52" rx="6" fill={stoneSoft} />
            <rect x="38" y="48" width="96" height="9" rx="4.5" fill={green} opacity="0.45" />
            <rect x="38" y="64" width="150" height="6" rx="3" fill={stone} />
            {[0, 1, 2].map((c) => (
              <g key={c}>
                <rect x={24 + c * 96} y="96" width="80" height="32" rx="5" fill={stoneSoft} />
                <rect x={24 + c * 96} y="134" width={54 - c * 10} height="6" rx="3" fill={stone} />
              </g>
            ))}
          </>
        );
      default:
        return (
          <>
            {[0, 1, 2, 3, 4].map((b) => (
              <rect
                key={b}
                x={32 + b * 30}
                y={110 - [28, 46, 34, 62, 50][b]}
                width="18"
                height={[28, 46, 34, 62, 50][b]}
                rx="3"
                fill={b === 3 ? green : stoneSoft}
                opacity={b === 3 ? 0.55 : 1}
              />
            ))}
            <rect x="24" y="118" width="164" height="1" fill={stone} />
            {[0, 1, 2].map((r) => (
              <g key={r}>
                <rect x="206" y={44 + r * 26} width="60" height="7" rx="3.5" fill={stone} />
                <circle cx="284" cy={47 + r * 26} r="8" fill={green} opacity="0.16" />
                <path d={`M280 ${47 + r * 26} l3 3 l6 -7`} stroke={green} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
              </g>
            ))}
            <rect x="24" y="34" width="70" height="8" rx="4" fill={green} opacity="0.5" />
          </>
        );
    }
  };

  return (
    <svg viewBox="0 0 320 150" className="w-full h-full" role="img" aria-hidden="true">
      <rect x="0.5" y="0.5" width="319" height="149" rx="11" fill="#fafaf9" stroke={stoneSoft} />
      <path d="M0 11.5 A11 11 0 0 1 11.5 0.5 H308.5 A11 11 0 0 1 319.5 11.5 V20 H0.5 Z" fill={stoneSoft} />
      <circle cx="16" cy="11" r="3" fill="#c9c6c3" />
      <circle cx="27" cy="11" r="3" fill="#c9c6c3" />
      <circle cx="38" cy="11" r="3" fill="#c9c6c3" />
      {content()}
    </svg>
  );
};

/** Qué diagrama le toca a cada caso publicado. */
const VARIANT_BY_SLUG: Record<string, string> = {
  'pintureria-cinco-sucursales': 'tienda',
  'marca-cosmetica-natural-mendoza': 'tienda',
  'club-deportivo-cuotas': 'padron',
  'portal-b2b-bodega': 'b2b',
  'catalogo-b2b-envases': 'b2b',
  'concil-producto-propio': 'saas',
  'constructora-control-de-caja-por-obra': 'saas',
  'acacia-paisajismo': 'sitio',
  'palomar-marin-ingenieria': 'sitio',
}

export const variantForSlug = (slug: string) => VARIANT_BY_SLUG[slug] ?? 'saas'

/**
 * Visual de la card de un caso: captura real si la hay, diagrama si no.
 * El contenedor fija el ratio para que todas las cards de la grilla midan
 * igual, sin importar cuál de las dos se muestre.
 */
/**
 * Dominio que se muestra en la barra del marco. Solo para los que tienen sitio
 * público: los sistemas internos van sin URL y el diagrama va sin marco.
 */
const DOMINIO_BY_SLUG: Record<string, string> = {
  'pintureria-cinco-sucursales': 'pintureriaslaespanola.com.ar',
  'concil-producto-propio': 'concil.ar',
  'palomar-marin-ingenieria': 'palomarmarin.com.ar',
  'club-deportivo-cuotas': 'deportivopradere.com.ar/admin',
  'portal-b2b-bodega': 'portal.desquiciado.com',
}

export const CasoVisual = ({ slug, alt }: { slug: string; alt: string }) => {
  const shot = shotForSlug(slug)

  // El diagrama esquemático no lleva marco: no es una pantalla, es un esquema.
  if (!shot) {
    return (
      <div className="rounded-2xl overflow-hidden mb-7 bg-stone-100/60 border border-stone-200/80 aspect-[320/150]">
        <CasoPreview variant={variantForSlug(slug)} />
      </div>
    )
  }

  return (
    <Ventana dominio={DOMINIO_BY_SLUG[slug]} className="mb-7 shadow-sm">
      <img
        src={shot}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full aspect-[320/150] object-cover object-top"
      />
    </Ventana>
  )
}
