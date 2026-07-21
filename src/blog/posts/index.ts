// Para agregar un artículo nuevo: crear el archivo en esta carpeta e importarlo acá
import { post as senalesAutomatizar } from './senales-de-que-tu-empresa-necesita-automatizar'
import { post as comoAutomatizar } from './como-automatizar-procesos-sin-volverse-loco'
import { post as gestionCambio } from './gestion-del-cambio-por-que-la-tecnologia-sola-no-alcanza'
import { post as cuellosBotella } from './cuellos-de-botella-el-enemigo-silencioso'
import { post as casoPintureria } from './caso-pintureria-cinco-sucursales'
import { post as casoClub } from './caso-club-deportivo-cuotas'
import { post as casoBodega } from './caso-portal-b2b-bodega'
import { post as casoConcil } from './caso-concil-producto-propio'

// El orden acá define el orden en el blog (primero = más reciente)
export const posts = [
  casoConcil,
  casoBodega,
  casoClub,
  casoPintureria,
  cuellosBotella,
  gestionCambio,
  comoAutomatizar,
  senalesAutomatizar,
]
