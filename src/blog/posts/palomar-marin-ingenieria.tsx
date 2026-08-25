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

const ContentEn = () => (
  <article>
    <p>
      <a href="https://www.palomarmarin.com.ar">Palomar Marín</a> is an engineering
      firm based in Mendoza, Argentina. They handle technical documentation,
      construction, and site management for homes, buildings, and institutions.
    </p>
    <p>
      Their work speaks for itself: finished buildings, standing, in use. But when
      someone searched for them online, there was nothing to show. A firm that builds
      buildings can't afford to have nowhere to point people.
    </p>

    <h2>What a professional firm needs</h2>
    <p>
      Not an ecommerce site, not a system. Something simpler and harder: convey
      credibility in the first ten seconds, show real completed work, and make
      contact frictionless.
    </p>
    <p>
      A client evaluating an engineering firm is deciding whether to entrust it with
      a project that will take years and a lot of money. The website won't close
      that decision on its own, but it can certainly ruin it.
    </p>

    <h2>What we built</h2>
    <ul>
      <li>
        <strong>A portfolio of completed projects</strong> as the heart of the site.
        Not a decorative gallery - the main argument.
      </li>
      <li>
        <strong>Services explained clearly</strong>: full project management,
        technical documentation, and site direction, in language a client
        understands, not procurement jargon.
      </li>
      <li>
        <strong>Testimonials from past clients</strong>, the only kind of proof a
        prospective client actually weighs.
      </li>
      <li>
        <strong>A contact form wired to an automation</strong>: inquiries land in the
        firm's inbox instantly, with no intermediaries or ignored folders.
      </li>
      <li>
        <strong>Direct WhatsApp contact</strong>, since that's where people actually
        reach out.
      </li>
    </ul>

    <h2>The technical decision</h2>
    <p>
      This project didn't need a database, an admin panel, or user accounts. We built
      it as a static site: instant load times, zero maintenance, zero infrastructure
      cost, and practically nothing that can break.
    </p>
    <p>
      Choosing the right tool is part of the job too. Bolting a heavy system onto
      something that doesn't need one just charges the client for complexity that
      doesn't serve them.
    </p>

    <h2>The result</h2>
    <p>
      The firm now has its site live at{' '}
      <a href="https://www.palomarmarin.com.ar">palomarmarin.com.ar</a>, with its work
      on display and inquiries landing straight in its inbox.
    </p>
    <p>
      Do you run a firm or a practice with nowhere to show your work?{' '}
      <a href="mailto:hola@rubra.ar">Get in touch</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'palomar-marin-ingenieria',
  title: 'Un estudio de ingeniería que ahora tiene dónde mostrar su obra',
  title_en: 'An engineering firm that finally has somewhere to show its work',
  description:
    'Palomar Marín construye viviendas, edificios e instituciones en Mendoza. Le construimos el sitio donde su portfolio, sus servicios y sus consultas viven en un solo lugar.',
  description_en:
    'Palomar Marín builds homes, buildings, and institutions in Mendoza. We built them the site where their portfolio, services, and inquiries all live in one place.',
  date: '2026-07-21',
  category: 'Casos',
  category_en: 'Case study',
  readTime: 3,
  content: Content,
  content_en: ContentEn,
}
