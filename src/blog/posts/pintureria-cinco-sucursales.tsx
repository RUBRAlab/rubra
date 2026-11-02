import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Una pinturería con cinco sucursales en La Rioja. Un negocio que funciona, con clientes
      que vuelven y un equipo que conoce el rubro.
    </p>
    <p>
      Pero toda la venta pasaba por el mostrador o por WhatsApp. El catálogo vivía en la cabeza
      de los vendedores. Y un cliente que quería saber si había un producto, de qué marca y a qué
      precio, tenía que llamar o ir hasta el local.
    </p>

    <h2>El punto de partida</h2>
    <p>
      El objetivo no era "tener una página". Era que el negocio pudiera mostrar su catálogo
      completo, recibir pedidos online y administrar todo sin depender de nadie técnico.
    </p>
    <p>
      Ese último punto es el que casi siempre falta. Muchas empresas tienen una web que no pueden
      tocar: para cambiar un precio hay que llamar al que la hizo. Eso no es una herramienta,
      es una dependencia.
    </p>

    <h2>Qué construimos</h2>
    <ul>
      <li>
        <strong>Una tienda online completa</strong>, con el catálogo organizado por categorías,
        variantes por color y tamaño, y búsqueda.
      </li>
      <li>
        <strong>Un panel de administración propio</strong>: el equipo carga
        productos, cambia precios y sube imágenes desde un editor visual, sin tocar código
        y sin llamar a nadie.
      </li>
      <li>
        <strong>Pedidos online sin fricción</strong>: el cliente arma su pedido y lo confirma
        sin necesidad de crearse una cuenta. El negocio lo recibe con un correo automático
        y lo gestiona desde su panel de órdenes.
      </li>
      <li>
        <strong>Las cinco sucursales integradas</strong>, con sus direcciones y contacto,
        para que el cliente elija dónde retirar.
      </li>
      <li>
        <strong>Cobro online</strong>: el cliente paga al confirmar el pedido. El stock queda
        reservado mientras el pago se procesa, y se libera solo si no se completa.
      </li>
      <li>
        <strong>Costo de envío calculado solo</strong>: el sitio cotiza el flete con el peso y
        las medidas reales de cada producto contra el domicilio del cliente. Nadie lo calcula
        a mano.
      </li>
    </ul>

    <h2>Cómo se trabajó</h2>
    <p>
      Con el método de siempre: alcance cerrado, precio cerrado, y el proyecto dividido en fases.
      La Fase 1 se construyó y se entregó funcionando. La Fase 2, con cobro online y
      cotización de envíos, se sumó después sobre esa base.
    </p>
    <p>
      Trabajar por fases no es un detalle comercial. Es lo que permite que una empresa incorpore
      tecnología sin apostar todo de entrada: cada fase entrega algo que funciona y se paga solo
      la siguiente si tiene sentido.
    </p>

    <h2>Cómo terminó</h2>
    <p>
      Las dos fases se entregaron completas. Después, el cliente decidió seguir con otro
      proveedor y la tienda no llegó a operar con ventas reales. Por eso este caso muestra
      qué construimos, no resultados de venta.
    </p>
    <p>
      ¿Tu negocio necesita algo así? <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      A paint store with five branches in La Rioja, Argentina. A business that works, with
      customers who keep coming back and a team that knows the trade inside out.
    </p>
    <p>
      But every sale went through the counter or WhatsApp. The catalog lived in the salespeople's
      heads. And a customer who wanted to know if a product was in stock, which brand, and at what
      price, had to call or go all the way to the store.
    </p>

    <h2>Starting point</h2>
    <p>
      The goal wasn't "having a website." It was for the business to be able to show its full
      catalog, take orders online, and manage all of it without depending on anyone technical.
    </p>
    <p>
      That last part is what's almost always missing. Many businesses have a website they can't
      touch: changing a price means calling whoever built it. That's not a tool, it's a dependency.
    </p>

    <h2>What we built</h2>
    <ul>
      <li>
        <strong>A complete online store</strong>, with the catalog organized by category,
        variants by color and size, and search.
      </li>
      <li>
        <strong>An admin panel of their own</strong>: the team adds products, changes prices,
        and uploads images through a visual editor, without touching code and without calling
        anyone.
      </li>
      <li>
        <strong>Frictionless online orders</strong>: the customer builds their order and confirms
        it without creating an account. The business receives it via an automatic email and
        manages it from its orders panel.
      </li>
      <li>
        <strong>All five branches integrated</strong>, with their addresses and contact info,
        so the customer can choose where to pick up.
      </li>
      <li>
        <strong>Online payments</strong>: the customer pays when confirming the order. Stock is
        held while the payment clears, and released only if it never does.
      </li>
      <li>
        <strong>Shipping costs calculated automatically</strong>: the site quotes freight using
        each product's real weight and dimensions against the customer's address. Nobody works
        it out by hand.
      </li>
    </ul>

    <h2>How we worked</h2>
    <p>
      With our usual method: fixed scope, fixed price, and the project split into phases.
      Phase 1 was built and delivered working. Phase 2, with online payments and shipping
      quotes, was added later on top of it.
    </p>
    <p>
      Working in phases isn't a commercial detail. It's what lets a business bring in
      technology without betting everything up front: each phase delivers something that
      works, and the next one only gets paid for if it makes sense.
    </p>

    <h2>How it ended</h2>
    <p>
      Both phases were delivered in full. The client later chose to continue with another
      provider, and the store never operated with real sales. So this case shows what we
      built, not sales results.
    </p>
    <p>
      Does your business need something like this?{' '}
      <a href="mailto:hola@rubra.ar">Get in touch</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'pintureria-cinco-sucursales',
  title: 'La tienda online que construimos para una pinturería con 5 sucursales',
  description:
    'Qué construimos para una pinturería de La Rioja: tienda online, cobro con tarjeta, cotización de envíos y un catálogo administrable por su equipo. Se entregó completa, pero no llegó a operar con ventas reales.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 5,
  content: Content,
  title_en: 'The online store we built for a paint retailer with 5 branches',
  description_en:
    'What we built for a paint retailer in La Rioja: an online store, card payments, shipping quotes, and a catalog its team can manage. It was delivered in full but never operated with real sales.',
  category_en: 'Case study',
  content_en: ContentEn,
}
