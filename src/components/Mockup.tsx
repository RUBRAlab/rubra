import type { ReactNode } from 'react'

/**
 * Marco de navegador. Una captura suelta se lee como una imagen decorativa;
 * con la barra y el dominio se lee como un producto que existe y está online.
 *
 * `tono` sigue el fondo de la sección: 'claro' para las secciones stone,
 * 'oscuro' para las que van sobre #35362f.
 */
export const Ventana = ({
  children,
  dominio,
  tono = 'claro',
  className = '',
}: {
  children: ReactNode
  dominio?: string
  tono?: 'claro' | 'oscuro'
  className?: string
}) => {
  const oscuro = tono === 'oscuro'
  return (
    <div
      className={`rounded-2xl overflow-hidden border ${
        oscuro ? 'bg-[#2b2c26] border-stone-100/12' : 'bg-stone-200/70 border-stone-200'
      } ${className}`}
    >
      <div
        className={`flex items-center gap-1.5 px-3 h-7 border-b ${
          oscuro ? 'bg-stone-100/[0.07] border-stone-100/10' : 'bg-stone-100 border-stone-200'
        }`}
      >
        <span className={`w-2 h-2 rounded-full ${oscuro ? 'bg-stone-100/25' : 'bg-stone-300'}`} />
        <span className={`w-2 h-2 rounded-full ${oscuro ? 'bg-stone-100/25' : 'bg-stone-300'}`} />
        <span className={`w-2 h-2 rounded-full ${oscuro ? 'bg-stone-100/25' : 'bg-stone-300'}`} />
        {dominio && (
          <span
            className={`ml-2 truncate rounded-full px-2.5 py-0.5 text-[0.62rem] font-medium tracking-wide ${
              oscuro ? 'bg-stone-100/[0.06] text-stone-400' : 'bg-white text-stone-400'
            }`}
          >
            {dominio}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

/** Marco de teléfono para pantallas de apps móviles. */
export const Telefono = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div
    className={`rounded-[1.75rem] overflow-hidden bg-[#2b2c26] border-[5px] border-stone-100/15 ${className}`}
  >
    {children}
  </div>
)
