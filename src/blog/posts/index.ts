// Para agregar un artículo nuevo: crear el archivo en esta carpeta e importarlo acá
import { post as senalesAutomatizar } from './senales-de-que-tu-empresa-necesita-automatizar'
import { post as comoAutomatizar } from './como-automatizar-procesos-sin-volverse-loco'
import { post as gestionCambio } from './gestion-del-cambio-por-que-la-tecnologia-sola-no-alcanza'
import { post as cuellosBotella } from './cuellos-de-botella-el-enemigo-silencioso'
import { post as casoPintureria } from './caso-pintureria-cinco-sucursales'

// El orden acá define el orden en el blog (primero = más reciente)
export const posts = [
  casoPintureria,
  cuellosBotella,
  gestionCambio,
  comoAutomatizar,
  senalesAutomatizar,
]
