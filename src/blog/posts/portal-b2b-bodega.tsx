import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      <a href="https://desquiciado.com">Desquiciado Wines</a> es una bodega de Mendoza que le
      vende a vinotecas y distribuidores de todo el país. No vende al consumidor final: vende
      por caja, con precios distintos según el cliente, y despacha por transporte.
    </p>
    <p>
      Todo eso se manejaba por WhatsApp y teléfono. El vendedor recibía el pedido, lo anotaba,
      lo pasaba a la bodega, la bodega coordinaba el despacho, y el cliente llamaba dos días
      después para saber dónde estaba su envío.
    </p>

    <h2>Por qué el B2B es distinto</h2>
    <p>
      Una tienda online común no sirve para esto. El comprador mayorista no explora un catálogo
      buscando inspiración: sabe exactamente qué quiere, cuánto compra habitualmente y a qué
      precio. Su precio, que no es el mismo que el del cliente de al lado.
    </p>
    <p>
      Un portal B2B tiene que resolver eso: listas de precios por cliente, compra por caja,
      y un camino corto entre "quiero reponer" y "pedido confirmado".
    </p>

    <h2>Qué construimos</h2>
    <ul>
      <li>
        <strong>Un portal privado por cliente</strong>: cada vinoteca entra y ve su propia lista
        de precios, no un catálogo genérico.
      </li>
      <li>
        <strong>Pedidos en minutos</strong>: arma el pedido, lo confirma, y queda registrado
        con su remito. Sin llamadas, sin esperar que alguien conteste.
      </li>
      <li>
        <strong>Integración con el operador logístico</strong>: el sistema le pasa el despacho
        al transporte y sigue el estado del envío automáticamente, actualizándolo cada media hora.
      </li>
      <li>
        <strong>El cliente se entera solo</strong>: cuando el pedido cambia de estado (en preparación,
        despachado, en tránsito, entregado) le llega un email. Se terminaron los llamados
        preguntando "¿dónde está mi pedido?".
      </li>
      <li>
        <strong>Comisiones de vendedores</strong>, calculadas por el sistema y visibles en su panel.
      </li>
      <li>
        <strong>Remitos en PDF</strong> generados automáticamente, listos para descargar.
      </li>
    </ul>

    <h2>Lo que se automatizó de verdad</h2>
    <p>
      La parte visible es el portal. La parte que cambia el día a día es la de atrás: el
      seguimiento del envío se sincroniza solo con el transporte, y cada cambio de estado
      dispara el aviso al cliente sin que nadie escriba un mensaje.
    </p>
    <p>
      Ese es el trabajo que desaparece: no el de tomar el pedido, sino el de contestar
      veinte veces por día la misma pregunta.
    </p>

    <h2>Dónde está hoy</h2>
    <p>
      El portal está construido y probado de punta a punta, con la integración logística
      lista. Desquiciado entra en operación con sus clientes en las próximas semanas.
    </p>
    <p>
      Lo que cambia cuando arranque no es solo la toma de pedidos: es que un canal de venta
      mayorista completo pase a funcionar sin depender de que alguien esté disponible para
      contestar.
    </p>
    <p>
      ¿Vendés a comercios y seguís tomando pedidos a mano?{' '}
      <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      <a href="https://desquiciado.com">Desquiciado Wines</a> is a winery in Mendoza that sells
      to wine shops and distributors across the country. It doesn't sell to end consumers: it
      sells by the case, with different prices per customer, and ships via freight carriers.
    </p>
    <p>
      All of that was handled through WhatsApp and phone calls. The salesperson took the order,
      wrote it down, passed it on to the winery, the winery coordinated the shipment, and the
      customer called two days later to find out where their delivery was.
    </p>

    <h2>Why B2B is different</h2>
    <p>
      A regular online store doesn't work for this. A wholesale buyer isn't browsing a catalog
      for inspiration: they know exactly what they want, how much they usually buy, and at what
      price. Their price, which isn't the same as the customer's next door.
    </p>
    <p>
      A B2B portal has to solve that: per-customer price lists, purchase by the case, and a short
      path between "I need to restock" and "order confirmed."
    </p>

    <h2>What we built</h2>
    <ul>
      <li>
        <strong>A private portal per customer</strong>: each wine shop logs in and sees its own
        price list, not a generic catalog.
      </li>
      <li>
        <strong>Orders in minutes</strong>: build the order, confirm it, and it's recorded with
        its delivery note. No calls, no waiting for someone to pick up.
      </li>
      <li>
        <strong>Integration with the logistics carrier</strong>: the system hands off the
        shipment to the carrier and automatically tracks the delivery status, updating it every
        half hour.
      </li>
      <li>
        <strong>The customer finds out on their own</strong>: whenever the order changes status
        (in preparation, shipped, in transit, delivered) they get an email. No more calls asking
        "where's my order?"
      </li>
      <li>
        <strong>Sales rep commissions</strong>, calculated by the system and visible on their
        dashboard.
      </li>
      <li>
        <strong>PDF delivery notes</strong> generated automatically, ready to download.
      </li>
    </ul>

    <h2>What actually got automated</h2>
    <p>
      The visible part is the portal. The part that changes day-to-day work is behind the
      scenes: shipment tracking syncs automatically with the carrier, and every status change
      triggers the customer notification without anyone writing a message.
    </p>
    <p>
      That's the work that disappears: not taking the order, but answering the same question
      twenty times a day.
    </p>

    <h2>Where it stands today</h2>
    <p>
      The portal is built and tested end to end, with the logistics integration in place.
      Desquiciado goes live with its customers in the coming weeks.
    </p>
    <p>
      What changes when it launches isn't just order-taking: a whole wholesale sales channel
      starts running without depending on someone being available to answer.
    </p>
    <p>
      Do you sell to businesses and still take orders by hand?{' '}
      <a href="mailto:hola@rubra.ar">Get in touch</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'portal-b2b-bodega',
  title: 'Un portal B2B para que una bodega deje de vender por WhatsApp',
  description:
    'Cómo construimos para Desquiciado Wines un portal de venta mayorista con listas de precios por cliente, pedidos en minutos y seguimiento logístico automático.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 4,
  content: Content,
  title_en: 'A B2B portal so a winery can stop selling over WhatsApp',
  description_en:
    'How we built a wholesale sales portal for Desquiciado Wines with per-customer price lists, orders in minutes, and automatic shipment tracking.',
  category_en: 'Case study',
  content_en: ContentEn,
}
