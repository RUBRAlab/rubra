import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Un sistema a medida para una pyme en Argentina cuesta entre USD 1.000 y USD 8.000, según
      qué se construya. Un sitio institucional arranca en USD 1.000; una tienda online ronda los
      USD 2.500 a 5.000; un sistema de gestión, entre USD 3.000 y 7.000; un portal B2B
      mayorista, entre USD 3.500 y 8.000.
    </p>
    <p>
      Esos son nuestros precios, no un promedio del mercado. Los publicamos porque la pregunta
      "¿cuánto sale?" casi nunca tiene respuesta antes de una reunión, y eso le hace perder
      tiempo a todo el mundo. Abajo está el detalle por tipo de proyecto, qué mueve el precio
      dentro de cada rango y qué se sigue pagando después del lanzamiento.
    </p>

    <h2>¿Cuánto cuesta cada tipo de proyecto?</h2>
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Tipo de proyecto</th>
            <th>Rango</th>
            <th>Entrega</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sitio institucional</strong><br />Presencia, servicios, portfolio, formulario de contacto</td>
            <td>USD 1.000 a 2.500</td>
            <td>2 a 3 semanas</td>
          </tr>
          <tr>
            <td><strong>Automatización de un proceso</strong><br />Una tarea repetitiva que hoy hace una persona a mano</td>
            <td>USD 1.000 a 3.000</td>
            <td>1 a 3 semanas</td>
          </tr>
          <tr>
            <td><strong>Tienda online</strong><br />Catálogo autoadministrable, carrito, checkout y pagos</td>
            <td>USD 2.500 a 5.000</td>
            <td>3 a 5 semanas</td>
          </tr>
          <tr>
            <td><strong>Sistema de gestión a medida</strong><br />Clientes, cobranzas, stock, socios, pedidos</td>
            <td>USD 3.000 a 7.000</td>
            <td>4 a 6 semanas</td>
          </tr>
          <tr>
            <td><strong>Portal B2B mayorista</strong><br />Listas de precios por cliente, pedidos y logística</td>
            <td>USD 3.500 a 8.000</td>
            <td>4 a 6 semanas</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      El precio queda cerrado en la propuesta, antes de escribir una línea de código, y no cambia
      a mitad de camino. Si el proyecto tarda más de lo previsto, el costo lo absorbemos nosotros.
    </p>

    <h2>¿Qué hace que un proyecto esté en el piso o en el techo del rango?</h2>
    <p>
      Dentro de cada tipo, la diferencia entre el mínimo y el máximo casi siempre la explican
      estas cinco cosas:
    </p>
    <ul>
      <li>
        <strong>Integraciones con otros sistemas.</strong> Conectarse con un sistema de gestión
        que ya usás, con una API de logística o con el sistema de un proveedor. Cada integración
        agrega trabajo, y más todavía si el otro sistema no tiene documentación.
      </li>
      <li>
        <strong>Pagos.</strong> Cobrar online no es solo poner un botón: hay que validar precios
        y stock del lado del servidor, manejar los avisos del medio de pago y contemplar qué pasa
        si un pago llega dos veces o nunca llega.
      </li>
      <li>
        <strong>Usuarios con roles distintos.</strong> No es lo mismo un panel que usa una
        persona que un sistema donde el vendedor ve una cosa, el administrativo otra y el dueño
        otra. Cada rol suma pantallas y reglas.
      </li>
      <li>
        <strong>Migración de datos.</strong> Pasar años de historial desde planillas o desde un
        sistema viejo suele llevar más tiempo que construir la funcionalidad nueva, porque los
        datos reales casi nunca están prolijos.
      </li>
      <li>
        <strong>Cantidad de entidades.</strong> Un sistema con tres entidades (clientes, pedidos,
        productos) es mucho más simple que uno con doce. Es el factor que más se subestima.
      </li>
    </ul>

    <h2>¿Qué se paga después del lanzamiento?</h2>
    <p>
      Esta es la parte que la mayoría de los presupuestos no aclara, y donde un proyecto barato
      puede terminar siendo caro. En nuestro caso:
    </p>
    <ul>
      <li><strong>Hosting:</strong> alrededor de USD 25 por mes.</li>
      <li><strong>Soporte:</strong> opcional, desde USD 75 por mes, si preferís no encargarte vos del mantenimiento.</li>
      <li><strong>Licencias:</strong> ninguna. El código es 100% tuyo y queda en repositorios a tu nombre.</li>
      <li><strong>Fases siguientes:</strong> se cotizan aparte, también a precio cerrado.</li>
    </ul>
    <p>
      Conviene hacer la cuenta a un año. Un sistema de USD 2.000 con un costo mensual de USD 200
      sale USD 4.400 el primer año. Uno de USD 4.000 con hosting de USD 25 sale USD 4.300. El
      segundo parecía el doble de caro y terminó costando menos.
    </p>

    <h2>¿Por qué estos precios y no los de una software factory?</h2>
    <p>
      Porque la estructura es distinta. Una software factory cotiza un equipo: varias personas,
      reuniones de coordinación, gerencia de proyecto. Eso tiene sentido cuando el proyecto lo
      necesita, y entonces los números son otros. Acá trabaja una sola persona apoyada en
      herramientas de IA para escribir código, sin capas de coordinación que facturar.
    </p>
    <p>
      La contracara es honesta: no tomamos proyectos que necesiten diez personas en paralelo,
      una plataforma para miles de usuarios desde el día uno, o certificaciones corporativas.
      Para eso corresponde una software factory o una consultora, y el presupuesto es otro.
    </p>

    <h2>¿Cómo comparo dos presupuestos?</h2>
    <p>
      El número grande no alcanza para comparar. Antes de decidir, mirá que las dos propuestas
      respondan lo mismo:
    </p>
    <ol>
      <li>Qué se construye, funcionalidad por funcionalidad, y qué queda explícitamente afuera.</li>
      <li>Si el precio es cerrado o una estimación de horas, y quién paga si se demora.</li>
      <li>Qué costos mensuales siguen después de la entrega.</li>
      <li>De quién es el código y en qué cuentas queda alojado.</li>
      <li>Qué pasa con los cambios que aparecen a mitad de camino.</li>
    </ol>
    <p>
      Lo desarrollamos en{' '}
      <a href="/blog/precio-cerrado-vs-por-hora">precio cerrado vs. por hora</a>, que es la
      decisión que más impacta en lo que terminás pagando.
    </p>

    <h2>¿Y si mi proyecto no entra en ninguna de estas categorías?</h2>
    <p>
      Pasa seguido: muchos proyectos son una mezcla, por ejemplo una tienda online que además
      necesita un panel de gestión para el equipo. En esos casos el rango se arma sumando las
      partes, y sigue quedando cerrado en la propuesta. La forma más rápida de saberlo es
      contarnos qué necesitás: la propuesta con alcance, plazo y precio se define en 3 a 5 días
      hábiles y no tiene costo. Podés ver{' '}
      <a href="/casos">proyectos reales que ya están funcionando</a> para ubicar el tuyo.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      A custom system for a small or medium business in Argentina costs between USD 1,000 and
      USD 8,000, depending on what gets built. An institutional website starts at USD 1,000; an
      online store runs USD 2,500 to 5,000; a management system, USD 3,000 to 7,000; a wholesale
      B2B portal, USD 3,500 to 8,000.
    </p>
    <p>
      These are our prices, not a market average. We publish them because "how much does it
      cost?" rarely gets an answer before a meeting, and that wastes everyone's time. Below is
      the breakdown by project type, what moves the price within each range, and what you keep
      paying after launch.
    </p>

    <h2>What does each type of project cost?</h2>
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Project type</th>
            <th>Range</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Institutional website</strong><br />Presence, services, portfolio, contact form</td>
            <td>USD 1,000 to 2,500</td>
            <td>2 to 3 weeks</td>
          </tr>
          <tr>
            <td><strong>Process automation</strong><br />A repetitive task a person does by hand today</td>
            <td>USD 1,000 to 3,000</td>
            <td>1 to 3 weeks</td>
          </tr>
          <tr>
            <td><strong>Online store</strong><br />Self-managed catalog, cart, checkout and payments</td>
            <td>USD 2,500 to 5,000</td>
            <td>3 to 5 weeks</td>
          </tr>
          <tr>
            <td><strong>Custom management system</strong><br />Customers, collections, stock, members, orders</td>
            <td>USD 3,000 to 7,000</td>
            <td>4 to 6 weeks</td>
          </tr>
          <tr>
            <td><strong>Wholesale B2B portal</strong><br />Price lists per customer, orders and logistics</td>
            <td>USD 3,500 to 8,000</td>
            <td>4 to 6 weeks</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      The price is locked in the proposal, before we write a line of code, and doesn't change
      halfway through. If the project takes longer than planned, we absorb that cost.
    </p>

    <h2>What puts a project at the bottom or the top of its range?</h2>
    <p>
      Within each type, the gap between minimum and maximum is almost always explained by these
      five things:
    </p>
    <ul>
      <li>
        <strong>Integrations with other systems.</strong> Connecting to a management system you
        already use, a logistics API, or a supplier's system. Each integration adds work, even
        more so when the other system has no documentation.
      </li>
      <li>
        <strong>Payments.</strong> Charging online isn't just adding a button: prices and stock
        have to be validated server side, payment notifications handled, and you have to account
        for what happens when a payment arrives twice or never arrives.
      </li>
      <li>
        <strong>Users with different roles.</strong> A panel used by one person is not the same
        as a system where the salesperson sees one thing, the admin another and the owner
        another. Each role adds screens and rules.
      </li>
      <li>
        <strong>Data migration.</strong> Moving years of history from spreadsheets or an old
        system usually takes longer than building the new functionality, because real data is
        almost never tidy.
      </li>
      <li>
        <strong>Number of entities.</strong> A system with three entities (customers, orders,
        products) is far simpler than one with twelve. It's the factor most often underestimated.
      </li>
    </ul>

    <h2>What do you pay after launch?</h2>
    <p>
      This is the part most quotes leave out, and where a cheap project can end up expensive. In
      our case:
    </p>
    <ul>
      <li><strong>Hosting:</strong> around USD 25 per month.</li>
      <li><strong>Support:</strong> optional, starting at USD 75 per month, if you'd rather not handle maintenance yourself.</li>
      <li><strong>Licenses:</strong> none. The code is 100% yours, in repositories under your name.</li>
      <li><strong>Next phases:</strong> quoted separately, also at a fixed price.</li>
    </ul>
    <p>
      It's worth doing the math over a year. A USD 2,000 system with USD 200 in monthly costs
      comes to USD 4,400 in the first year. A USD 4,000 one with USD 25 hosting comes to USD
      4,300. The second looked twice as expensive and ended up costing less.
    </p>

    <h2>Why these prices and not a software factory's?</h2>
    <p>
      Because the structure is different. A software factory quotes a team: several people,
      coordination meetings, project management. That makes sense when the project needs it, and
      then the numbers are different. Here one person works, using AI tools to write code, with
      no coordination layers to bill for.
    </p>
    <p>
      The flip side is honest: we don't take on projects that need ten people in parallel, a
      platform for thousands of users from day one, or corporate certifications. That calls for a
      software factory or a consultancy, and the budget is different.
    </p>

    <h2>How do I compare two quotes?</h2>
    <p>
      The headline number isn't enough to compare. Before deciding, check that both proposals
      answer the same things:
    </p>
    <ol>
      <li>What gets built, feature by feature, and what is explicitly left out.</li>
      <li>Whether the price is fixed or an hourly estimate, and who pays if it runs late.</li>
      <li>What monthly costs continue after delivery.</li>
      <li>Who owns the code and which accounts it lives in.</li>
      <li>What happens with changes that come up halfway through.</li>
    </ol>
    <p>
      We go deeper in{' '}
      <a href="/blog/precio-cerrado-vs-por-hora">fixed price vs. hourly</a>, which is the
      decision with the biggest impact on what you end up paying.
    </p>

    <h2>What if my project doesn't fit any of these categories?</h2>
    <p>
      It happens often: many projects are a mix, for example an online store that also needs a
      management panel for the team. In those cases the range is built by adding up the parts,
      and it still gets locked in the proposal. The fastest way to find out is to tell us what
      you need: the proposal with scope, timeline and price takes 3 to 5 business days and costs
      nothing. You can look at{' '}
      <a href="/casos">real projects already running</a> to place yours.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'cuanto-cuesta-un-software-a-medida-en-argentina',
  title: 'Cuánto cuesta un software a medida en Argentina',
  title_en: 'What custom software costs in Argentina',
  description: 'Rangos de precio por tipo de proyecto: sitio institucional, automatización, tienda online, sistema de gestión y portal B2B. Qué mueve el precio dentro de cada rango y qué se paga después del lanzamiento.',
  description_en: 'Price ranges by project type: institutional website, automation, online store, management system and B2B portal. What moves the price within each range and what you pay after launch.',
  date: '2026-09-20',
  category: 'Proceso',
  category_en: 'Process',
  readTime: 6,
  content: Content,
  content_en: ContentEn,
}
