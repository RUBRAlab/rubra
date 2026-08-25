import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      "Necesitamos software a medida" suena, para la mayoría de las pymes, a un proyecto de tres
      o cuatro meses. Reuniones de relevamiento, un documento de requerimientos, aprobaciones,
      un cronograma con hitos, y recién ahí, algún día, algo que se puede usar.
    </p>
    <p>
      No tiene por qué ser así. La mayoría de los sistemas que resuelven un problema real de
      una pyme -no una plataforma de escala, un sistema puntual- se pueden construir y entregar
      en dos a seis semanas. La diferencia no es magia ni un equipo más grande. Es qué se corta.
    </p>

    <h2>Lo que hace largo un proyecto no es el código</h2>
    <p>
      Escribir la lógica de un sistema -el CRUD, las validaciones, la integración con un medio
      de pago, el panel de administración- rara vez toma meses. Lo que estira los proyectos es
      todo lo que rodea al código: semanas de relevamiento antes de escribir la primera línea,
      un documento de alcance que se revisa varias veces antes de aprobarse, capas de aprobación
      donde cada cambio pasa por dos o tres personas antes de tocar el proyecto.
    </p>
    <p>
      Nada de eso construye el sistema. Solo lo demora. Y en una consultora con estructura, esas
      capas existen porque hay que coordinar a mucha gente. En un proyecto de una sola persona
      apoyada en IA, esas capas directamente no existen: no hay a quién coordinar.
    </p>

    <h2>Descubrimiento corto, no descubrimiento cero</h2>
    <p>
      Achicar el tiempo no significa saltear entender el problema. Significa no convertir esa
      etapa en un proyecto en sí misma. Una o dos conversaciones para entender qué se necesita
      de verdad -no lo que el cliente cree que necesita, sino el problema de fondo- alcanzan
      para arrancar. El resto del alcance se termina de definir mientras el sistema ya se está
      construyendo, no antes.
    </p>
    <p>
      Eso invierte el orden habitual: en vez de documentar todo antes de construir nada, se
      construye una primera versión funcional rápido y se ajusta sobre eso. Es más fácil
      corregir algo que ya se puede ver y usar que corregir un documento.
    </p>

    <h2>Iteración semanal, no entrega única al final</h2>
    <p>
      Un proyecto de tres meses suele tener una sola entrega: al final. Hasta ese momento, el
      cliente no vio nada funcionando, solo maquetas o documentos. Si algo se entendió mal, se
      descubre tarde, cuando ya es caro corregirlo.
    </p>
    <p>
      Un proyecto de dos a seis semanas funciona al revés: hay algo andando desde la primera
      semana, aunque sea una versión mínima. Cada avance se muestra apenas existe. Si algo no
      es lo que el cliente esperaba, se corrige en días, no en la revisión final de un proyecto
      de tres meses.
    </p>

    <h2>Lo que se corta y lo que no</h2>
    <p>
      Achicar los tiempos no es hacer las cosas más rápido y peor. Es sacar del medio lo que no
      agrega valor al resultado final:
    </p>
    <ul>
      <li>Documentación exhaustiva que nadie vuelve a leer una vez que el sistema funciona.</li>
      <li>Reuniones de seguimiento que existen para coordinar gente, no para avanzar el trabajo.</li>
      <li>Rondas de aprobación en cadena, donde cada instancia agrega días sin agregar decisión.</li>
      <li>Fases separadas de diseño, desarrollo y testing, en vez de hacerlo todo junto.</li>
    </ul>
    <p>
      Lo que no se corta es el criterio: entender bien el problema antes de resolverlo,
      cuidar los casos donde el dinero o el stock están en juego, y probar que funciona antes
      de darlo por terminado.
    </p>

    <h2>Para qué proyectos no aplica esto</h2>
    <p>
      Esto funciona para sistemas puntuales: un catálogo, una gestión de turnos, un checkout,
      un panel de reportes. No aplica igual a una plataforma que va a escalar a miles de
      usuarios desde el día uno, o a un proyecto que necesita integrarse con varios sistemas
      legados a la vez. Ahí sí hace falta más tiempo de diseño previo, porque los errores de
      arquitectura son mucho más caros de corregir después.
    </p>
    <p>
      La mayoría de las pymes, sin embargo, no están en ese caso. Necesitan resolver un
      problema concreto, no construir una plataforma. Y para eso, tres meses no son garantía
      de mejor resultado. Muchas veces son solo tiempo perdido en el medio.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      "We need custom software" sounds, to most small and medium businesses, like a three or
      four month project. Discovery meetings, a requirements document, approvals, a timeline
      with milestones, and only then, eventually, something usable.
    </p>
    <p>
      It doesn't have to be that way. Most systems that solve a real problem for a small
      business - not a platform built to scale, a specific system - can be built and delivered
      in two to six weeks. The difference isn't magic or a bigger team. It's what gets cut.
    </p>

    <h2>What makes a project long isn't the code</h2>
    <p>
      Writing the logic of a system - the CRUD, the validations, the payment integration, the
      admin panel - rarely takes months. What stretches projects out is everything around the
      code: weeks of discovery before writing the first line, a scope document reviewed
      several times before it's approved, layers of approval where every change passes through
      two or three people before touching the project.
    </p>
    <p>
      None of that builds the system. It only delays it. In a consultancy with structure, those
      layers exist because there's a lot of people to coordinate. In a one-person project backed
      by AI, those layers simply don't exist - there's no one to coordinate.
    </p>

    <h2>Short discovery, not zero discovery</h2>
    <p>
      Cutting the timeline down doesn't mean skipping the step of understanding the problem. It
      means not turning that step into a project of its own. One or two conversations to
      understand what's really needed - not what the client thinks they need, but the underlying
      problem - are enough to get started. The rest of the scope gets defined while the system
      is already being built, not before.
    </p>
    <p>
      That flips the usual order: instead of documenting everything before building anything, a
      working first version gets built fast, and gets adjusted from there. It's easier to fix
      something you can already see and use than to fix a document.
    </p>

    <h2>Weekly iteration, not a single delivery at the end</h2>
    <p>
      A three-month project usually has one delivery: at the end. Until that point, the client
      hasn't seen anything working, just mockups or documents. If something was misunderstood,
      it's discovered late, when it's already expensive to fix.
    </p>
    <p>
      A two-to-six-week project works the other way: something is up and running from the first
      week, even if it's a minimal version. Every step gets shown as soon as it exists. If
      something isn't what the client expected, it gets fixed in days, not at the final review
      of a three-month project.
    </p>

    <h2>What gets cut and what doesn't</h2>
    <p>
      Shortening the timeline doesn't mean doing things faster and worse. It means removing
      what doesn't add value to the final result:
    </p>
    <ul>
      <li>Exhaustive documentation nobody reads again once the system works.</li>
      <li>Status meetings that exist to coordinate people, not to move the work forward.</li>
      <li>Chains of approval, where every step adds days without adding a decision.</li>
      <li>Separate phases for design, development, and testing, instead of doing it together.</li>
    </ul>
    <p>
      What doesn't get cut is judgment: understanding the problem well before solving it,
      taking extra care wherever money or stock is at stake, and testing that it works before
      calling it done.
    </p>

    <h2>What this doesn't apply to</h2>
    <p>
      This works for specific systems: a catalog, a booking system, a checkout, a reporting
      dashboard. It doesn't apply the same way to a platform meant to scale to thousands of
      users from day one, or a project that needs to integrate with several legacy systems at
      once. There, more upfront design time is actually needed, because architecture mistakes
      are much more expensive to fix later.
    </p>
    <p>
      Most small businesses, though, aren't in that situation. They need to solve a concrete
      problem, not build a platform. And for that, three months is no guarantee of a better
      result. Often, it's just time lost in the middle.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'por-que-2-a-6-semanas-no-3-meses',
  title: 'Por qué 2 a 6 semanas y no 3 meses',
  title_en: 'Why 2 to 6 weeks, not 3 months',
  description: 'Software a medida no tiene por qué significar un proyecto de meses. Qué se corta -y qué no- para entregar un sistema funcionando en semanas, sin bajar la calidad.',
  description_en: 'Custom software doesn\'t have to mean a months-long project. What gets cut - and what doesn\'t - to deliver a working system in weeks, without cutting quality.',
  date: '2026-08-25',
  category: 'Proceso',
  category_en: 'Process',
  readTime: 5,
  content: Content,
  content_en: ContentEn,
}
