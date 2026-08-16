import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      <strong>Acacia Paisajismo</strong> es el estudio de Agustina D'Innocenzo en el Gran
      Mendoza. Diseña jardines, ejecuta obra llave en mano, hace mantenimiento y vende
      panes de césped.
    </p>
    <p>
      Un negocio así vive de sus fotos. Un jardín terminado convence más que cualquier
      texto. Pero las fotos estaban en Instagram, mezcladas con el resto del feed y
      perdiéndose a medida que pasaba el tiempo.
    </p>

    <h2>Cuando el negocio no es uno solo</h2>
    <p>
      Acacia no vende una sola cosa. Diseña proyectos, ejecuta obras, mantiene jardines,
      vende productos y dicta cursos. Cada una de esas líneas le habla a alguien distinto:
      quien quiere rehacer su patio no es quien busca un curso online.
    </p>
    <p>
      Meter todo eso en una sola página es el error clásico. El visitante entra buscando
      una cosa y tiene que atravesar cuatro que no le interesan.
    </p>

    <h2>Qué construimos</h2>
    <ul>
      <li>
        <strong>Una página por línea de negocio</strong>: proyectos, tienda, cursos y contacto,
        cada una con su propio camino, y una home que orienta hacia la correcta.
      </li>
      <li>
        <strong>El portfolio de obras</strong> con las fotos reales de los jardines terminados,
        que es el argumento de venta más fuerte que tiene el estudio.
      </li>
      <li>
        <strong>Una tienda</strong> para los productos que se venden solos: césped, plantas,
        macetas.
      </li>
      <li>
        <strong>Los cursos</strong> con su propio espacio, para el público que no busca
        contratar sino aprender.
      </li>
      <li>
        <strong>Contacto con preguntas frecuentes</strong>, que responde antes de que la
        clienta tenga que contestar lo mismo por décima vez.
      </li>
    </ul>

    <h2>El detalle que importó</h2>
    <p>
      Agustina tenía ilustraciones en acuarela propias. En vez de usar íconos genéricos,
      se integraron al diseño como fondo de las secciones.
    </p>
    <p>
      Es un detalle chico y es exactamente el punto: un estudio de paisajismo vende gusto
      y criterio estético. Si su web se ve como cualquier plantilla, está contradiciendo
      lo que vende.
    </p>

    <h2>El resultado</h2>
    <p>
      Acacia tiene hoy su obra publicada, ordenada por línea de negocio, y un lugar propio
      que no depende del algoritmo de ninguna red social.
    </p>
    <p>
      ¿Tu trabajo se vende mostrándolo y solo lo tenés en Instagram?{' '}
      <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      <strong>Acacia Paisajismo</strong> is Agustina D'Innocenzo's landscaping studio in
      Greater Mendoza. She designs gardens, executes turnkey projects, provides
      maintenance, and sells sod.
    </p>
    <p>
      A business like this lives off its photos. A finished garden convinces more than
      any text ever could. But the photos were on Instagram, mixed in with the rest of
      the feed and getting lost as time went by.
    </p>

    <h2>When the business isn't just one thing</h2>
    <p>
      Acacia doesn't sell just one thing. It designs projects, executes builds,
      maintains gardens, sells products, and teaches courses. Each of those lines
      speaks to a different person: whoever wants to redo their backyard isn't the
      same person looking for an online course.
    </p>
    <p>
      Cramming all of that into a single page is the classic mistake. The visitor
      comes in looking for one thing and has to wade through three others that don't
      interest them.
    </p>

    <h2>What we built</h2>
    <ul>
      <li>
        <strong>One page per business line</strong>: projects, shop, courses, and
        contact, each with its own path, and a homepage that steers visitors toward
        the right one.
      </li>
      <li>
        <strong>The project portfolio</strong> with real photos of finished gardens,
        the studio's strongest sales argument.
      </li>
      <li>
        <strong>A shop</strong> for the products that sell themselves: sod, plants,
        pots.
      </li>
      <li>
        <strong>The courses</strong> with their own dedicated space, for the audience
        that isn't looking to hire but to learn.
      </li>
      <li>
        <strong>A contact page with FAQs</strong>, answering questions before the
        client has to ask the same one for the tenth time.
      </li>
    </ul>

    <h2>The detail that mattered</h2>
    <p>
      Agustina had her own watercolor illustrations. Instead of using generic icons,
      we worked them into the design as section backgrounds.
    </p>
    <p>
      It's a small detail, and that's exactly the point: a landscaping studio sells
      taste and aesthetic judgment. If its website looks like any other template, it's
      contradicting what it sells.
    </p>

    <h2>The result</h2>
    <p>
      Acacia now has its work published, organized by business line, in a space of
      its own that doesn't depend on any social network's algorithm.
    </p>
    <p>
      Does your work sell by being shown, and is it only on Instagram?{' '}
      <a href="mailto:hola@rubra.ar">Get in touch</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'acacia-paisajismo',
  title: 'Un estudio de paisajismo que dejó de depender de Instagram',
  description:
    'Acacia Paisajismo diseña y ejecuta jardines en Gran Mendoza. Le construimos el sitio donde su portfolio, su tienda y sus cursos tienen cada uno su lugar.',
  title_en: 'A landscaping studio that stopped depending on Instagram',
  description_en:
    'Acacia Paisajismo designs and builds gardens in Greater Mendoza. We built the site where its portfolio, shop, and courses each have their own place.',
  date: '2026-07-21',
  category: 'Casos',
  category_en: 'Case study',
  readTime: 3,
  content: Content,
  content_en: ContentEn,
}
