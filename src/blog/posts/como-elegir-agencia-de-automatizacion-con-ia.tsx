import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Para elegir una agencia de automatización con IA, lo primero no es comparar agencias: es
      saber qué tipo de proveedor necesita tu problema. Un freelancer, una agencia chica, una
      software factory, una consultora grande y una plataforma por suscripción resuelven cosas
      distintas, a costos distintos y con riesgos distintos. Después, dentro del tipo correcto,
      se decide con cinco preguntas que cualquier proveedor serio responde sin vueltas.
    </p>
    <p>
      Esta guía está escrita por una agencia, así que tomala con ese filtro. Por eso mismo
      incluye los casos en los que una agencia como la nuestra no es la opción correcta.
    </p>

    <h2>¿Qué tipos de proveedores de automatización existen?</h2>
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Sirve para</th>
            <th>Riesgo principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Plataforma por suscripción</strong></td>
            <td>Un problema estándar: un chatbot, turnos, respuestas automáticas</td>
            <td>Si tu proceso no encaja en lo que ofrece, no hay cómo adaptarla. Y pagás todos los meses, para siempre</td>
          </tr>
          <tr>
            <td><strong>Freelancer</strong></td>
            <td>Una automatización puntual y acotada, con presupuesto chico</td>
            <td>Depende de una sola persona y de su disponibilidad. Conviene que el código y los accesos queden a tu nombre</td>
          </tr>
          <tr>
            <td><strong>Agencia chica o estudio</strong></td>
            <td>Un sistema a medida para una pyme: gestión, ventas, cobranzas, integraciones</td>
            <td>Capacidad limitada: no puede tomar un proyecto enorme ni diez a la vez</td>
          </tr>
          <tr>
            <td><strong>Software factory</strong></td>
            <td>Proyectos medianos y largos, con equipo dedicado de varias personas</td>
            <td>Suele cobrar por hora o por equipo mensual. El costo final depende de cuánto se estire</td>
          </tr>
          <tr>
            <td><strong>Consultora grande</strong></td>
            <td>Empresas grandes, sistemas corporativos, cumplimiento normativo</td>
            <td>Estructura y precios pensados para corporaciones. Para una pyme es desproporcionado</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      La mayoría de las malas experiencias no vienen de haber elegido un mal proveedor, sino de
      haber elegido el tipo equivocado: una pyme contratando una estructura corporativa, o una
      empresa con un proceso muy particular tratando de meterlo a la fuerza en una plataforma.
    </p>

    <h2>¿Qué preguntas hay que hacerle a una agencia antes de contratarla?</h2>
    <ol>
      <li>
        <strong>¿Me podés mostrar algo que hayas hecho y que esté funcionando hoy?</strong> No
        una maqueta ni una demo: un sistema en producción, usado por gente real. Es la pregunta
        que más filtra.
      </li>
      <li>
        <strong>¿Cuánto va a costar en total, y qué pasa si se demora?</strong> Si la respuesta
        es una tarifa por hora y una estimación, el riesgo de la demora es tuyo. Si es un precio
        cerrado sobre un alcance escrito, es del proveedor.
      </li>
      <li>
        <strong>¿De quién es el código y dónde queda alojado?</strong> Tiene que ser tuyo, en
        cuentas a tu nombre. Si el sistema vive en la plataforma del proveedor y no te lo podés
        llevar, no compraste un sistema: lo estás alquilando.
      </li>
      <li>
        <strong>¿Cuánto voy a pagar por mes después de la entrega?</strong> Hosting, soporte,
        licencias, el costo de uso de los modelos de IA. Un proyecto barato con un costo mensual
        alto puede salir más caro en un año que uno caro sin costos fijos.
      </li>
      <li>
        <strong>¿Quién revisa lo que genera la IA?</strong> Hoy casi todos usan IA para escribir
        código, y está bien. La pregunta es quién responde por la arquitectura, la seguridad y
        las pruebas. "La IA lo hace todo" no es una buena respuesta.
      </li>
    </ol>

    <h2>¿Qué señales de alerta conviene mirar?</h2>
    <ul>
      <li>
        <strong>Promesas sin proceso.</strong> "Automatizamos todo tu negocio con IA" sin haber
        preguntado cómo trabajás. Una automatización útil empieza por entender un proceso
        puntual, no por la herramienta.
      </li>
      <li>
        <strong>Todo se resuelve con un chatbot.</strong> Muchas veces el problema real es una
        planilla que se carga a mano o dos sistemas que no se hablan, y un chatbot no lo toca.
      </li>
      <li>
        <strong>Propuesta sin lista de exclusiones.</strong> Si no dice qué no incluye, la
        discusión llega a mitad del proyecto.
      </li>
      <li>
        <strong>No hay casos verificables.</strong> Logos sin explicación, testimonios sin
        nombre, o casos que no se pueden visitar.
      </li>
      <li>
        <strong>Una sola entrega, al final.</strong> Si durante semanas no vas a ver nada
        funcionando, cualquier malentendido se descubre cuando ya es caro corregirlo.
      </li>
    </ul>

    <h2>¿Agencia local o del exterior?</h2>
    <p>
      Para una pyme de Latinoamérica, lo que más pesa no es el país sino el contexto. Una
      automatización casi siempre toca facturación, medios de pago, bancos o logística, y esas
      piezas son locales: los medios de pago de cada país, los sistemas de gestión que usa cada
      rubro, la forma en que se factura. Un proveedor que ya integró esas piezas avanza más
      rápido que uno que las ve por primera vez, sea de donde sea. El trabajo remoto funciona
      bien: lo que importa es compartir idioma, huso horario y conocimiento del terreno.
    </p>

    <h2>¿Cuándo conviene una agencia como RUBRA lab, y cuándo no?</h2>
    <p>
      RUBRA lab es una agencia chica de Argentina. Construimos tiendas online, sistemas de
      gestión, portales B2B y automatización con IA para pymes de Latinoamérica, a precio
      cerrado desde USD 1.000 y con entregas en dos a seis semanas. La IA acelera la escritura
      de código; la arquitectura, la seguridad y las pruebas las hace Ruperto Bravo, el
      fundador, directamente. El código queda 100% a nombre del cliente.
    </p>
    <p>
      <strong>Conviene</strong> cuando tenés un problema concreto que se puede describir: un
      proceso que hoy se hace a mano, una venta mayorista que se maneja por WhatsApp, cuotas
      que se concilian en una planilla. Podés ver ejemplos reales en{' '}
      <a href="/casos">nuestros casos</a>.
    </p>
    <p>
      <strong>No conviene</strong> si necesitás una plataforma para miles de usuarios desde el
      primer día, un equipo de diez personas trabajando en paralelo, o certificaciones
      corporativas. Ahí corresponde una software factory o una consultora. Tampoco conviene si
      tu necesidad ya la resuelve bien una plataforma por suscripción: es más barato y más
      rápido usarla que construir algo a medida.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      To choose an AI automation agency, the first step isn't comparing agencies: it's knowing
      what type of provider your problem needs. A freelancer, a small agency, a software
      factory, a large consultancy and a subscription platform solve different things, at
      different costs and with different risks. Then, within the right type, you decide with
      five questions any serious provider answers without hedging.
    </p>
    <p>
      This guide is written by an agency, so read it with that filter. That's exactly why it
      includes the cases where an agency like ours is not the right choice.
    </p>

    <h2>What types of automation providers are there?</h2>
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Good for</th>
            <th>Main risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Subscription platform</strong></td>
            <td>A standard problem: a chatbot, appointments, automatic replies</td>
            <td>If your process doesn't fit what it offers, you can't adapt it. And you pay every month, forever</td>
          </tr>
          <tr>
            <td><strong>Freelancer</strong></td>
            <td>A specific, contained automation on a small budget</td>
            <td>It depends on one person and their availability. Make sure the code and the accounts are in your name</td>
          </tr>
          <tr>
            <td><strong>Small agency or studio</strong></td>
            <td>A custom system for a small or medium business: management, sales, collections, integrations</td>
            <td>Limited capacity: it can't take on a huge project or ten at once</td>
          </tr>
          <tr>
            <td><strong>Software factory</strong></td>
            <td>Medium and long projects, with a dedicated team of several people</td>
            <td>Usually bills hourly or per monthly team. The final cost depends on how long it runs</td>
          </tr>
          <tr>
            <td><strong>Large consultancy</strong></td>
            <td>Large companies, corporate systems, regulatory compliance</td>
            <td>Structure and prices designed for corporations. Out of proportion for a small business</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Most bad experiences don't come from choosing a bad provider, but from choosing the wrong
      type: a small business hiring a corporate structure, or a company with a very particular
      process trying to force it into a platform.
    </p>

    <h2>What questions should you ask an agency before hiring it?</h2>
    <ol>
      <li>
        <strong>Can you show me something you built that is running today?</strong> Not a
        mockup or a demo: a system in production, used by real people. This is the question
        that filters the most.
      </li>
      <li>
        <strong>What will it cost in total, and what happens if it runs late?</strong> If the
        answer is an hourly rate and an estimate, the risk of delay is yours. If it's a fixed
        price on a written scope, it's the provider's.
      </li>
      <li>
        <strong>Who owns the code and where is it hosted?</strong> It has to be yours, in
        accounts under your name. If the system lives on the provider's platform and you can't
        take it with you, you didn't buy a system: you're renting one.
      </li>
      <li>
        <strong>What will I pay per month after delivery?</strong> Hosting, support, licenses,
        the usage cost of the AI models. A cheap project with a high monthly cost can end up
        more expensive in a year than a pricey one with no fixed costs.
      </li>
      <li>
        <strong>Who reviews what the AI generates?</strong> Almost everyone uses AI to write
        code today, and that's fine. The question is who answers for the architecture, the
        security and the testing. "The AI does everything" is not a good answer.
      </li>
    </ol>

    <h2>What red flags should you look for?</h2>
    <ul>
      <li>
        <strong>Promises without a process.</strong> "We automate your whole business with AI"
        without having asked how you work. A useful automation starts by understanding one
        specific process, not with the tool.
      </li>
      <li>
        <strong>Everything gets solved with a chatbot.</strong> Often the real problem is a
        spreadsheet filled in by hand or two systems that don't talk to each other, and a
        chatbot doesn't touch that.
      </li>
      <li>
        <strong>A proposal with no exclusions list.</strong> If it doesn't say what's not
        included, the argument arrives mid-project.
      </li>
      <li>
        <strong>No verifiable cases.</strong> Logos with no explanation, unnamed testimonials,
        or cases you can't visit.
      </li>
      <li>
        <strong>A single delivery, at the end.</strong> If you won't see anything working for
        weeks, any misunderstanding surfaces when it's already expensive to fix.
      </li>
    </ul>

    <h2>Local agency or one from abroad?</h2>
    <p>
      For a small business in Latin America, what matters most isn't the country but the
      context. An automation almost always touches invoicing, payment methods, banks or
      logistics, and those pieces are local: each country's payment methods, the management
      systems each industry uses, the way invoicing works. A provider that has already
      integrated those pieces moves faster than one seeing them for the first time, wherever
      they're from. Remote work is fine: what matters is sharing language, time zone and
      knowledge of the terrain.
    </p>

    <h2>When is an agency like RUBRA lab a good fit, and when isn't it?</h2>
    <p>
      RUBRA lab is a small agency from Argentina. We build online stores, management systems,
      B2B portals and AI automation for small and medium businesses across Latin America, at a
      fixed price starting at USD 1,000 and with delivery in two to six weeks. AI speeds up
      writing code; architecture, security and testing are done directly by Ruperto Bravo, the
      founder. The client owns 100% of the code.
    </p>
    <p>
      <strong>It's a good fit</strong> when you have a concrete problem that can be described:
      a process done by hand today, wholesale sales handled over WhatsApp, dues reconciled in a
      spreadsheet. You can see real examples in <a href="/casos">our case studies</a>.
    </p>
    <p>
      <strong>It's not a good fit</strong> if you need a platform for thousands of users from
      day one, a team of ten people working in parallel, or corporate certifications. That
      calls for a software factory or a consultancy. It's also not a fit if a subscription
      platform already solves your need well: using it is cheaper and faster than building
      something custom.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'como-elegir-agencia-de-automatizacion-con-ia',
  title: 'Cómo elegir una agencia de automatización con IA',
  title_en: 'How to choose an AI automation agency',
  description: 'Los cinco tipos de proveedores de automatización, para qué sirve cada uno, las cinco preguntas que hay que hacer antes de contratar y las señales de alerta. Incluye cuándo una agencia chica no es la opción correcta.',
  description_en: 'The five types of automation providers, what each is good for, the five questions to ask before hiring and the red flags. Includes when a small agency is not the right choice.',
  date: '2026-09-20',
  category: 'Automatización',
  category_en: 'Automation',
  readTime: 6,
  content: Content,
  content_en: ContentEn,
}
