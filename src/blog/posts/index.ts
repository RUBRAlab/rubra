// Para agregar un artículo nuevo: crear el archivo en esta carpeta e importarlo acá
import { post as senalesAutomatizar } from './senales-de-que-tu-empresa-necesita-automatizar'
import { post as comoAutomatizar } from './como-automatizar-procesos-sin-volverse-loco'
import { post as gestionCambio } from './gestion-del-cambio-por-que-la-tecnologia-sola-no-alcanza'
import { post as cuellosBotella } from './cuellos-de-botella-el-enemigo-silencioso'
import { post as casoPintureria } from './pintureria-cinco-sucursales'
import { post as casoClub } from './club-deportivo-cuotas'
import { post as casoBodega } from './portal-b2b-bodega'
import { post as casoConcil } from './concil-producto-propio'
import { post as casoEnvases } from './catalogo-b2b-envases'
import { post as casoPalomar } from './palomar-marin-ingenieria'
import { post as casoAcacia } from './acacia-paisajismo'

// El orden acá define el orden en el blog (primero = más reciente)
export const posts = [
  casoAcacia,
  casoPalomar,
  casoEnvases,
  casoConcil,
  casoBodega,
  casoClub,
  casoPintureria,
  cuellosBotella,
  gestionCambio,
  comoAutomatizar,
  senalesAutomatizar,
]

// Los casos viven en /casos, los artículos en /blog. La categoría los separa.
export const casos = posts.filter(p => p.category === 'Casos')
export const articulos = posts.filter(p => p.category !== 'Casos')

/** Ruta canónica de un post según su tipo. */
export const basePath = (category: string) => (category === 'Casos' ? '/casos' : '/blog')
