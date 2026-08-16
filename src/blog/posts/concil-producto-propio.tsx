import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      No todos nuestros proyectos son para clientes. CONCIL es un producto propio: un servicio
      de conciliación bancaria para estudios contables argentinos.
    </p>
    <p>
      Lo construimos porque el problema nos parecía absurdo. Todos los meses, miles de contadores
      abren un PDF de extracto bancario y cargan los movimientos a mano en una planilla. Un
      extracto de cien movimientos son horas de trabajo que no aportan nada: es tipeo.
    </p>

    <h2>Qué hace</h2>
    <p>
      El contador sube el PDF del extracto. El sistema extrae los movimientos y devuelve un
      Excel armado, con el detalle fila por fila, los saldos validados y los totales por concepto.
    </p>
    <p>
      De horas a segundos, sin cambiar nada de cómo trabaja el estudio: sigue siendo un Excel,
      que es la herramienta que el contador ya domina.
    </p>

    <h2>Por qué lo contamos acá</h2>
    <p>
      Porque construir producto propio es distinto a construir para un cliente, y nos obligó a
      resolver cosas que después usamos en todos lados:
    </p>
    <ul>
      <li>
        <strong>Suscripciones recurrentes</strong> con cobro automático mensual, altas, bajas
        y cambios de plan.
      </li>
      <li>
        <strong>Multi-cuenta</strong>: cada estudio tiene su espacio aislado, sus usuarios y
        sus datos separados del resto.
      </li>
      <li>
        <strong>Procesamiento por lote</strong>: subir hasta doce extractos juntos y recibirlos
        todos procesados.
      </li>
      <li>
        <strong>Precio bloqueado para siempre</strong> para los primeros suscriptores. Quien
        entró temprano mantiene su precio aunque la lista suba. Es una decisión de producto,
        y el sistema la respeta sin excepción.
      </li>
    </ul>

    <h2>La lección que nos llevamos</h2>
    <p>
      Un producto propio no tiene cliente que te diga qué hacer. Todas las decisiones son tuyas,
      incluidas las malas. Eso enseña algo que después se aplica a cada proyecto de cliente:
      la diferencia entre lo que se pide y lo que hace falta.
    </p>
    <p>
      Un estudio contable no pidió "una herramienta de extracción de datos". Pidió dejar de
      perder tardes cargando números. La solución correcta es la que se mide en tiempo
      recuperado, no en cantidad de funciones.
    </p>

    <h2>Está funcionando</h2>
    <p>
      CONCIL está en producción, con suscripciones activas y estudios usándolo todos los meses.
      Se puede probar gratis en <a href="https://concil.ar">concil.ar</a>.
    </p>
    <p>
      ¿Tenés una idea de producto y no sabés por dónde empezar?{' '}
      <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      Not all of our projects are for clients. CONCIL is a product of our own: a bank
      reconciliation service for Argentine accounting firms.
    </p>
    <p>
      We built it because the problem struck us as absurd. Every month, thousands of accountants
      open a bank statement PDF and type the transactions into a spreadsheet by hand. A statement
      with a hundred transactions means hours of work that add no value: it's just typing.
    </p>

    <h2>What it does</h2>
    <p>
      The accountant uploads the statement PDF. The system extracts the transactions and returns
      a ready-made Excel file, with the row-by-row detail, validated balances, and totals by
      category.
    </p>
    <p>
      From hours to seconds, without changing how the firm works: it's still an Excel file, the
      tool the accountant already knows.
    </p>

    <h2>Why we're sharing this</h2>
    <p>
      Because building your own product is different from building for a client, and it forced
      us to solve things we now reuse everywhere:
    </p>
    <ul>
      <li>
        <strong>Recurring subscriptions</strong> with automatic monthly billing, sign-ups,
        cancellations, and plan changes.
      </li>
      <li>
        <strong>Multi-tenancy</strong>: each firm has its own isolated space, with its users and
        data kept separate from everyone else's.
      </li>
      <li>
        <strong>Batch processing</strong>: upload up to twelve statements at once and get them
        all processed together.
      </li>
      <li>
        <strong>Price locked in forever</strong> for early subscribers. Whoever joined early
        keeps their price even as the list price goes up. It's a product decision, and the
        system enforces it without exception.
      </li>
    </ul>

    <h2>The lesson we took away</h2>
    <p>
      A product of your own has no client telling you what to do. Every decision is yours,
      including the bad ones. That teaches something that later applies to every client project:
      the difference between what's requested and what's actually needed.
    </p>
    <p>
      An accounting firm didn't ask for "a data extraction tool." It asked to stop losing
      afternoons typing numbers. The right solution is the one measured in time recovered, not
      in number of features.
    </p>

    <h2>It's live</h2>
    <p>
      CONCIL is in production, with active subscriptions and firms using it every month. You can
      try it for free at <a href="https://concil.ar">concil.ar</a>.
    </p>
    <p>
      Have a product idea and don't know where to start?{' '}
      <a href="mailto:hola@rubra.ar">Get in touch</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'concil-producto-propio',
  title: 'CONCIL: cómo construimos nuestro propio producto',
  description:
    'La conciliación bancaria le consume horas todos los meses a cualquier estudio contable. Construimos un producto para eliminarla, y en el camino aprendimos cosas que hoy aplicamos en cada proyecto.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 4,
  content: Content,
  title_en: 'CONCIL: how we built our own product',
  description_en:
    'Bank reconciliation eats hours every month at every accounting firm. We built a product to eliminate it, and along the way learned things we now apply to every project.',
  category_en: 'Case study',
  content_en: ContentEn,
}
