// Genera una copia de dist/index.html por cada ruta con su propio
// <title>, meta description, canonical y OG/Twitter tags ya en el HTML
// que recibe Googlebot (sin depender de que se ejecute el JS).
import fs from 'fs'
import path from 'path'

const SITE = 'https://www.rubra.ar'
const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const routes = [
  {
    path: '/blog',
    title: 'Blog | RUBRA lab: automatización y procesos para pymes',
    description: 'Artículos sobre automatización de procesos, cuellos de botella y gestión del cambio para pymes de Latinoamérica.',
  },
  {
    path: '/casos',
    title: 'Casos | RUBRA lab: software para pymes de Latinoamérica',
    description: 'Tiendas online, sistemas de gestión y portales B2B que construimos para pymes e instituciones. Casos reales, en producción.',
  },
  {
    path: '/casos/acacia-paisajismo',
    title: 'Un estudio de paisajismo que dejó de depender de Instagram | RUBRA',
    description: 'Acacia Paisajismo diseña y ejecuta jardines en Gran Mendoza. Le construimos el sitio donde su portfolio, su tienda y sus cursos tienen cada uno su lugar.',
  },
  {
    path: '/casos/palomar-marin-ingenieria',
    title: 'Un estudio de ingeniería que ahora tiene dónde mostrar su obra | RUBRA',
    description: 'Palomar Marín construye viviendas, edificios e instituciones en Mendoza. Le construimos el sitio donde su portfolio, sus servicios y sus consultas viven en un solo lugar.',
  },
  {
    path: '/casos/catalogo-b2b-envases',
    title: 'Un catálogo técnico que responde antes de que pregunten | RUBRA',
    description: 'Cómo una empresa de envases de vidrio publicó su catálogo completo con fichas técnicas y planos descargables, para que las consultas lleguen ya armadas.',
  },
  {
    path: '/casos/concil-producto-propio',
    title: 'CONCIL: cómo construimos nuestro propio producto | RUBRA',
    description: 'La conciliación bancaria le consume horas todos los meses a cualquier estudio contable. Construimos un producto para eliminarla, y en el camino aprendimos cosas que hoy aplicamos en cada proyecto.',
  },
  {
    path: '/casos/portal-b2b-bodega',
    title: 'Un portal B2B para que una bodega deje de vender por WhatsApp | RUBRA',
    description: 'Cómo construimos para Desquiciado Wines un portal de venta mayorista con listas de precios por cliente, pedidos en minutos y seguimiento logístico automático.',
  },
  {
    path: '/casos/club-deportivo-cuotas',
    title: 'Un club de 86 años que dejó de conciliar cuotas a mano | RUBRA',
    description: 'Cómo el Club Deportivo Social Juan A. Pradere pasó de cruzar transferencias bancarias con nombres en una planilla, a un sistema de socios con pagos online, roles y avisos automáticos.',
  },
  {
    path: '/casos/pintureria-cinco-sucursales',
    title: 'De vender por mostrador a una tienda online con 5 sucursales | RUBRA',
    description: 'Cómo una pinturería de La Rioja pasó de atender solo por mostrador y WhatsApp a tener su catálogo online, pedidos automáticos y un panel para administrar todo sin depender de nadie técnico.',
  },
  {
    path: '/blog/costos-ocultos-de-no-automatizar',
    title: 'Los costos ocultos de no automatizar tu pyme | RUBRA',
    description: 'Automatizar tiene un costo visible y conocido. No automatizar también tiene un costo, pero está repartido y escondido. Cómo calcular lo que realmente te está costando seguir trabajando a mano.',
  },
  {
    path: '/blog/cuellos-de-botella-el-enemigo-silencioso',
    title: 'Cuellos de botella: el enemigo silencioso que frena el crecimiento | RUBRA',
    description: 'Muchas empresas creen que necesitan más clientes para crecer. El problema casi siempre está adentro. Cómo identificar el punto que está frenando todo y qué hacer para eliminarlo.',
  },
  {
    path: '/blog/gestion-del-cambio-por-que-la-tecnologia-sola-no-alcanza',
    title: 'Por qué un sistema nuevo fracasa (y no es por la tecnología) | RUBRA',
    description: 'Construir el sistema es la parte fácil. Lo difícil es que el equipo lo adopte. Qué separa un proyecto que se usa todos los días de uno que termina abandonado.',
  },
  {
    path: '/blog/como-automatizar-procesos-sin-volverse-loco',
    title: 'Cómo automatizar procesos en tu empresa sin volverse loco | RUBRA',
    description: 'Automatizar no es un proyecto enorme ni requiere robots. Es eliminar las tareas repetitivas que consumen el tiempo y la energía de tu equipo, y hay un único lugar correcto por donde empezar.',
  },
  {
    path: '/blog/senales-de-que-tu-empresa-necesita-automatizar',
    title: '3 señales de que tu empresa necesita automatizar sus procesos | RUBRA',
    description: 'Hay un momento en que el crecimiento empieza a jugar en contra. Estos son los tres síntomas más claros de que los procesos manuales están frenando tu empresa.',
  },
]

for (const route of routes) {
  const url = `${SITE}${route.path}`
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${route.description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${route.title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${route.description}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${route.title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${route.description}$2`)

  const outDir = path.join(dist, ...route.path.split('/').filter(Boolean))
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  console.log(`prerender-meta: ${route.path} -> ${path.relative(dist, outDir)}/index.html`)
}
