import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      <a href="https://www.palomarmarin.com.ar">Palomar Marín</a> es un estudio de
      ingeniería de Mendoza. Hace documentación técnica, construcción y dirección de obra
      para viviendas, edificios e instituciones.
    </p>
    <p>
      Su trabajo se ve: obras terminadas, en pie, funcionando. Pero cuando alguien los
      googleaba, no había nada que mostrar. Un estudio que construye edificios no puede
      no tener dónde señalar.
    </p>

    <h2>Lo que necesita un estudio profesional</h2>
    <p>
      No un ecommerce ni un sistema. Necesita algo más simple y más difícil: transmitir
      solvencia en los primeros diez segundos, mostrar obra real, y que el contacto llegue
      sin fricción.
    </p>
    <p>
      El cliente de un estudio de ingeniería está evaluando confiarle una obra de años y
      mucho dinero. La web no cierra esa decisión, pero puede arruinarla.
    </p>

    <h2>Qué construimos</h2>
    <ul>
      <li>
        <strong>Un portfolio de obras</strong> como corazón del sitio. No una galería
        decorativa: el argumento principal.
      </li>
      <li>
        <strong>Los servicios explicados</strong>: gestión integral, documentación técnica y
        dirección de obra, en lenguaje de cliente, no de pliego.
      </li>
      <li>
        <strong>Testimonios de quienes ya construyeron con ellos</strong>, que es la única
        prueba que un cliente nuevo realmente pesa.
      </li>
      <li>
        <strong>Formulario conectado a una automatización</strong>: la consulta llega al mail
        del estudio en el momento, sin intermediarios ni bandejas que nadie revisa.
      </li>
      <li>
        <strong>Contacto directo por WhatsApp</strong>, que es por donde la gente escribe
        de verdad.
      </li>
    </ul>

    <h2>La decisión técnica</h2>
    <p>
      Este proyecto no necesitaba base de datos, ni panel, ni usuarios. Se construyó como
      un sitio estático: carga instantánea, cero mantenimiento, cero costo de infraestructura
      y prácticamente nada que se pueda romper.
    </p>
    <p>
      Elegir bien la herramienta también es parte del trabajo. Meterle un sistema pesado a
      algo que no lo necesita es cobrarle al cliente una complejidad que no le sirve.
    </p>

    <h2>El resultado</h2>
    <p>
      El estudio tiene hoy su sitio en <a href="https://www.palomarmarin.com.ar">palomarmarin.com.ar</a>,
      con su obra visible y las consultas llegando directo a su casilla.
    </p>
    <p>
      ¿Tenés un estudio o una profesión y no tenés dónde mostrar tu trabajo?{' '}
      <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'palomar-marin-ingenieria',
  title: 'Un estudio de ingeniería que ahora tiene dónde mostrar su obra',
  description:
    'Palomar Marín construye viviendas, edificios e instituciones en Mendoza. Le construimos el sitio donde su portfolio, sus servicios y sus consultas viven en un solo lugar.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 3,
  content: Content,
}
