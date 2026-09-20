/**
 * Isotipo: cuatro bloques, el de arriba a la derecha separado y en verde.
 * Es la tesis del sitio hecha marca: no falta "más software", falta la pieza que no está.
 */
export const Isotipo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <rect x="1" y="18" width="13" height="13" rx="2.5" fill="currentColor" />
    <rect x="17" y="18" width="13" height="13" rx="2.5" fill="currentColor" />
    <rect x="1" y="2" width="13" height="13" rx="2.5" fill="currentColor" />
    <rect x="19" y="0" width="13" height="13" rx="2.5" className="text-green-500" fill="currentColor" />
  </svg>
)

/**
 * La marca se escribe siempre igual: "RUBRA lab", bold + light.
 * Centralizado acá para que nav, footer y páginas internas no diverjan.
 */
export const Wordmark = ({ dark = false, size = 'md' }: { dark?: boolean; size?: 'sm' | 'md' }) => {
  // En 'sm' arranca más chico: en el nav de las páginas internas, a 375px,
  // el logo + idioma + CTA no entran en una línea.
  const sizeClass = size === 'sm' ? 'text-xl sm:text-2xl' : 'text-3xl md:text-4xl'
  return (
    <span className="flex items-baseline">
      <span className={`font-display font-bold tracking-tight leading-none ${sizeClass} ${dark ? 'text-stone-900' : 'text-white'}`}>
        RUBRA
      </span>
      <span className={`font-display font-light leading-none ml-1.5 ${sizeClass} ${dark ? 'text-green-600' : 'text-green-400'}`}>
        lab
      </span>
    </span>
  )
}
