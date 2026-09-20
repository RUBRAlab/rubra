import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Hay dos formas de contratar software a medida: por hora, donde pagás el tiempo que se
      trabaja, o a precio cerrado, donde pagás un monto fijo por un alcance definido. Para una
      pyme que necesita resolver un problema concreto, el precio cerrado casi siempre conviene
      más, porque el riesgo de que el proyecto se estire lo asume quien lo construye y no quien
      lo paga. Por hora conviene cuando todavía no se sabe qué hay que construir.
    </p>
    <p>
      El resto de este artículo explica por qué, cuándo no aplica, y qué revisar en una
      propuesta antes de firmarla.
    </p>

    <h2>¿Qué diferencia hay entre precio cerrado y por hora?</h2>
    <p>
      La diferencia de fondo no es cómo se calcula el número. Es quién paga si el proyecto
      tarda más de lo previsto.
    </p>
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Precio cerrado</th>
            <th>Por hora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Qué se paga</strong></td>
            <td>Un resultado: el sistema funcionando</td>
            <td>Tiempo de trabajo</td>
          </tr>
          <tr>
            <td><strong>Costo final</strong></td>
            <td>Se conoce antes de empezar</td>
            <td>Se conoce al terminar</td>
          </tr>
          <tr>
            <td><strong>Si se demora</strong></td>
            <td>Lo absorbe el proveedor</td>
            <td>Lo paga el cliente</td>
          </tr>
          <tr>
            <td><strong>Cambios de alcance</strong></td>
            <td>Se cotizan aparte, como una fase nueva</td>
            <td>Se suman a la cuenta sin fricción</td>
          </tr>
          <tr>
            <td><strong>Requiere</strong></td>
            <td>Alcance definido por escrito</td>
            <td>Confianza y seguimiento constante</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>¿Por qué el precio por hora suele salir más caro de lo esperado?</h2>
    <p>
      Porque el incentivo está al revés. Quien cobra por hora no gana nada por terminar antes:
      cada semana extra es facturación. No hace falta mala fe para que eso pese. Alcanza con
      que nadie tenga un motivo fuerte para cortar una reunión, simplificar una funcionalidad
      o decir "esto no hace falta".
    </p>
    <p>
      El segundo problema es que una tarifa horaria no dice cuánto va a costar el proyecto. Una
      hora barata de alguien lento sale más cara que una hora cara de alguien rápido, y desde
      afuera es imposible saber cuál de los dos estás contratando. El presupuesto inicial "en
      horas estimadas" no compromete a nadie: es una estimación, y las estimaciones de software
      se quedan cortas mucho más seguido de lo que se pasan.
    </p>

    <h2>¿Qué riesgo tiene el precio cerrado?</h2>
    <p>
      Que el alcance esté mal definido. Si la propuesta dice "sistema de gestión de clientes"
      y nada más, cada parte va a entender algo distinto, y la discusión llega cuando el
      proyecto ya está avanzado. Un precio cerrado sobre un alcance vago es peor que un precio
      por hora, porque da una falsa sensación de certeza.
    </p>
    <p>
      El otro riesgo es el proveedor que cotiza bajo para ganar el proyecto y después recupera
      la diferencia cobrando como "adicional" cosas que eran obviamente parte del trabajo. Se
      detecta antes de firmar: si la propuesta no lista qué incluye y qué no, ese margen de
      interpretación existe y alguien lo va a usar.
    </p>

    <h2>¿Cuándo conviene contratar por hora?</h2>
    <ul>
      <li>
        <strong>Cuando todavía no sabés qué construir.</strong> Exploración, prototipos,
        investigación de si algo es viable. No se puede cerrar un precio sobre algo que nadie
        puede describir.
      </li>
      <li>
        <strong>Mantenimiento y cambios chicos sobre un sistema existente.</strong> Ajustes
        sueltos que no justifican armar una propuesta cada vez.
      </li>
      <li>
        <strong>Cuando sumás una persona a tu propio equipo técnico.</strong> Ahí estás
        contratando capacidad, no un resultado, y la dirección del trabajo es tuya.
      </li>
    </ul>
    <p>
      Fuera de esos casos, si el problema se puede describir, se puede cotizar cerrado.
    </p>

    <h2>¿Qué tiene que decir una propuesta a precio cerrado?</h2>
    <p>Antes de firmar, la propuesta debería responder estas seis preguntas por escrito:</p>
    <ol>
      <li><strong>Qué se construye</strong>, funcionalidad por funcionalidad, no en títulos generales.</li>
      <li><strong>Qué no se construye.</strong> La lista de exclusiones es tan importante como la de inclusiones.</li>
      <li><strong>En cuánto tiempo</strong>, con entregas parciales y no una sola fecha al final.</li>
      <li><strong>Cómo se paga</strong> y contra qué entregas.</li>
      <li><strong>Qué pasa con los cambios:</strong> cómo se cotiza algo que aparece a mitad de camino.</li>
      <li><strong>Qué costos siguen después:</strong> hosting, mantenimiento, licencias, y de quién es el código.</li>
    </ol>
    <p>
      Si alguna de las seis no está, preguntala. La respuesta dice mucho sobre cómo va a ser
      trabajar con ese proveedor.
    </p>

    <h2>¿Cómo trabajamos en RUBRA lab?</h2>
    <p>
      A precio cerrado. Antes de escribir una línea de código definimos qué se construye, en
      cuánto tiempo y a qué precio, y ese número no cambia a mitad de camino. Los proyectos
      arrancan desde USD 1.000 y la mayoría se entrega en dos a seis semanas, por fases: hay
      algo funcionando para ver y corregir desde el principio, no una única entrega al final.
    </p>
    <p>
      Lo que aparece fuera del alcance no se discute como un adicional a las apuradas: se
      cotiza como una fase nueva, con su propio precio cerrado. Después del lanzamiento, el
      hosting ronda los USD 25 por mes, el soporte es opcional desde USD 75 por mes, y el
      código es 100% del cliente, sin licencias ni dependencia de una plataforma nuestra.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      There are two ways to hire custom software development: hourly, where you pay for time
      worked, or fixed price, where you pay a set amount for a defined scope. For a small or
      medium business that needs a concrete problem solved, fixed price is almost always the
      better deal, because the risk of the project dragging on sits with whoever builds it, not
      with whoever pays for it. Hourly makes sense when nobody knows yet what needs to be built.
    </p>
    <p>
      The rest of this article explains why, when it doesn't apply, and what to check in a
      proposal before signing it.
    </p>

    <h2>What's the difference between fixed price and hourly?</h2>
    <p>
      The real difference isn't how the number is calculated. It's who pays if the project
      takes longer than planned.
    </p>
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Fixed price</th>
            <th>Hourly</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>What you pay for</strong></td>
            <td>A result: the working system</td>
            <td>Working time</td>
          </tr>
          <tr>
            <td><strong>Final cost</strong></td>
            <td>Known before starting</td>
            <td>Known when it's over</td>
          </tr>
          <tr>
            <td><strong>If it runs late</strong></td>
            <td>The provider absorbs it</td>
            <td>The client pays for it</td>
          </tr>
          <tr>
            <td><strong>Scope changes</strong></td>
            <td>Quoted separately, as a new phase</td>
            <td>Added to the bill with no friction</td>
          </tr>
          <tr>
            <td><strong>Requires</strong></td>
            <td>A scope defined in writing</td>
            <td>Trust and constant follow-up</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Why does hourly pricing usually end up costing more than expected?</h2>
    <p>
      Because the incentive points the wrong way. Someone billing by the hour gains nothing
      from finishing early: every extra week is revenue. It doesn't take bad faith for that to
      matter. It's enough that nobody has a strong reason to cut a meeting short, simplify a
      feature, or say "we don't need this."
    </p>
    <p>
      The second problem is that an hourly rate doesn't tell you what the project will cost. A
      cheap hour from someone slow costs more than an expensive hour from someone fast, and
      from the outside you can't tell which one you're hiring. The initial budget "in estimated
      hours" commits no one: it's an estimate, and software estimates fall short far more often
      than they overshoot.
    </p>

    <h2>What's the risk with fixed price?</h2>
    <p>
      A poorly defined scope. If the proposal says "customer management system" and nothing
      else, each side will understand something different, and the argument shows up when the
      project is already well underway. A fixed price on a vague scope is worse than hourly,
      because it gives a false sense of certainty.
    </p>
    <p>
      The other risk is the provider who quotes low to win the project and then makes up the
      difference by billing as "extras" things that were obviously part of the job. You can
      spot it before signing: if the proposal doesn't list what's included and what isn't, that
      room for interpretation exists and someone will use it.
    </p>

    <h2>When does hourly make sense?</h2>
    <ul>
      <li>
        <strong>When you don't know yet what to build.</strong> Exploration, prototypes,
        researching whether something is feasible. You can't fix a price on something nobody
        can describe.
      </li>
      <li>
        <strong>Maintenance and small changes to an existing system.</strong> One-off tweaks
        that don't justify writing a proposal every time.
      </li>
      <li>
        <strong>When you're adding a person to your own technical team.</strong> There you're
        hiring capacity, not a result, and you direct the work.
      </li>
    </ul>
    <p>
      Outside those cases, if the problem can be described, it can be quoted at a fixed price.
    </p>

    <h2>What should a fixed-price proposal say?</h2>
    <p>Before signing, the proposal should answer these six questions in writing:</p>
    <ol>
      <li><strong>What gets built</strong>, feature by feature, not in general headings.</li>
      <li><strong>What doesn't get built.</strong> The exclusions list matters as much as the inclusions.</li>
      <li><strong>In how long</strong>, with partial deliveries and not a single date at the end.</li>
      <li><strong>How it's paid</strong> and against which deliveries.</li>
      <li><strong>What happens with changes:</strong> how something that comes up halfway gets quoted.</li>
      <li><strong>What costs continue afterward:</strong> hosting, maintenance, licenses, and who owns the code.</li>
    </ol>
    <p>
      If any of the six is missing, ask. The answer says a lot about what working with that
      provider will be like.
    </p>

    <h2>How do we work at RUBRA lab?</h2>
    <p>
      Fixed price. Before writing a line of code we define what gets built, in how long, and at
      what price, and that number doesn't change halfway through. Projects start at USD 1,000
      and most are delivered in two to six weeks, in phases: there's something working to see
      and correct from the start, not a single delivery at the end.
    </p>
    <p>
      Whatever comes up outside the scope isn't argued over as a rushed extra: it's quoted as a
      new phase, with its own fixed price. After launch, hosting runs about USD 25 per month,
      support is optional starting at USD 75 per month, and the code is 100% the client's, with
      no licenses and no dependency on a platform of ours.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'precio-cerrado-vs-por-hora',
  title: 'Precio cerrado vs. por hora: cómo contratar software sin sorpresas',
  title_en: 'Fixed price vs. hourly: how to hire software development without surprises',
  description: 'Las dos formas de contratar software a medida, quién asume el riesgo en cada una, cuándo conviene cada modelo y las seis cosas que tiene que decir una propuesta antes de firmarla.',
  description_en: 'The two ways to hire custom software development, who carries the risk in each, when each model makes sense, and the six things a proposal must say before you sign it.',
  date: '2026-09-20',
  category: 'Proceso',
  category_en: 'Process',
  readTime: 5,
  content: Content,
  content_en: ContentEn,
}
