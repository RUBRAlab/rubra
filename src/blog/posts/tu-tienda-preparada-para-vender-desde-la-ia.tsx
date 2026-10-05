import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Hasta ahora, comprar online tenía siempre el mismo recorrido: buscar en Google, entrar a una
      tienda, agregar al carrito y pagar. Google está cambiando ese recorrido. Con el Universal
      Commerce Protocol (UCP), una persona puede pedirle a Gemini o al modo IA del buscador "unas
      zapatillas de running por menos de cien dólares", elegir una opción y pagarla ahí mismo, sin
      entrar nunca a la web de la tienda.
    </p>
    <p>
      La pregunta para cualquier empresa que vende online en Latinoamérica no es si esto va a
      llegar, sino si su tienda va a estar lista cuando llegue.
    </p>

    <h2>Qué es UCP, en simple</h2>
    <p>
      Es un estándar abierto que define cómo un asistente de IA puede consultar el catálogo de una
      tienda, armar un carrito y cerrar la compra en nombre del usuario. La tienda sigue siendo el
      vendedor: recibe el pedido, cobra, despacha y se queda con los datos del cliente. La IA solo
      pone la vidriera y el botón de pagar.
    </p>
    <p>Por dentro funciona con piezas bastante conocidas:</p>
    <ul>
      <li>
        El catálogo sale de <strong>Google Merchant Center</strong>: productos, precios, stock,
        envíos y políticas de devolución.
      </li>
      <li>La tienda expone una API de checkout que la IA usa para crear y confirmar el pedido.</li>
      <li>El pago se hace con una billetera (hoy, Google Pay).</li>
      <li>La tienda le avisa a Google los cambios de estado del pedido: pagado, enviado, entregado.</li>
    </ul>

    <h2>¿Ya está disponible en Argentina?</h2>
    <p>
      No. A octubre de 2026, la compra dentro de la IA funciona solo para comercios de Estados
      Unidos, y Google anunció como próximos pasos Canadá, Australia y el Reino Unido. Latinoamérica
      figura en la hoja de ruta oficial del protocolo, junto con India y el sudeste asiático, pero
      sin fecha concreta. Las estimaciones más difundidas hablan de fines de 2026 o 2027.
    </p>
    <p>
      La demora tiene una razón: cada país necesita sus propios medios de pago. En Brasil, Pix; en
      Argentina, Mercado Pago y las tarjetas en cuotas; en México, OXXO y SPEI. Hasta que el
      protocolo no hable esos idiomas, no tiene sentido abrirlo en la región.
    </p>

    <h2>Entonces, ¿por qué hablar de esto ahora?</h2>
    <p>
      Porque lo que UCP le pide a una tienda no se resuelve en una semana, y la mayor parte sirve
      desde hoy aunque el protocolo no exista todavía en tu país. Las tiendas que lleguen con la
      base hecha van a aparecer primero cuando se habilite. Las que no, van a empezar de cero.
    </p>

    <h2>Qué conviene tener listo</h2>
    <ol>
      <li>
        <strong>Un catálogo de datos limpio.</strong> Cada producto con sus variantes reales
        (talle, color, presentación), precio actualizado, stock real y buenas fotos. Si hoy el
        catálogo vive en una planilla que nadie actualiza, ese es el primer cuello de botella.
      </li>
      <li>
        <strong>Merchant Center conectado y sincronizado.</strong> Que el feed de productos se
        actualice solo desde la tienda, no a mano. Esto ya hoy te permite aparecer gratis en Google
        Shopping.
      </li>
      <li>
        <strong>Políticas claras de envío y devolución.</strong> Son requisito obligatorio del
        protocolo, y además generan confianza en cualquier canal.
      </li>
      <li>
        <strong>Precio y stock resueltos en el servidor.</strong> Cuando un agente de IA compra en
        tu nombre, no podés confiar en el dato que viene de afuera. El sistema tiene que validar
        precio y disponibilidad antes de cobrar.
      </li>
      <li>
        <strong>Datos estructurados en la web.</strong> Las fichas de producto marcadas para que
        buscadores y asistentes de IA las entiendan sin adivinar.
      </li>
    </ol>

    <h2>Lo que no conviene hacer</h2>
    <p>
      Pagar hoy una "integración con UCP" para una tienda argentina. No hay dónde activarla todavía,
      y la especificación sigue cambiando. Lo que sí tiene sentido es construir o ajustar la tienda
      para que, el día que se habilite en la región, conectarla sea un paso corto y no un proyecto
      nuevo.
    </p>

    <h2>Cómo lo encaramos en RUBRA</h2>
    <p>
      Las tiendas que desarrollamos ya trabajan con precio y stock validados en el servidor y un
      catálogo ordenado por variantes. A eso le sumamos la sincronización con Merchant Center y los
      datos estructurados de producto, para que la tienda venda hoy por los canales de siempre y
      quede preparada para vender desde la IA cuando llegue a Latinoamérica.
    </p>
    <p>
      Si querés saber qué tan lejos está tu tienda de estar lista, escribinos y lo revisamos.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      Until now, buying online always followed the same path: search on Google, visit a store, add
      to cart and pay. Google is changing that path. With the Universal Commerce Protocol (UCP), a
      person can ask Gemini or Search's AI Mode for "running shoes under a hundred dollars", pick
      an option and pay right there, without ever visiting the store's website.
    </p>
    <p>
      The question for any business selling online in Latin America is not whether this will
      arrive, but whether their store will be ready when it does.
    </p>

    <h2>What UCP is, simply put</h2>
    <p>
      It is an open standard that defines how an AI assistant can browse a store's catalog, build a
      cart and complete the purchase on the user's behalf. The store remains the seller: it
      receives the order, charges, ships and keeps the customer data. The AI only provides the
      storefront and the pay button.
    </p>
    <p>Under the hood it runs on fairly familiar pieces:</p>
    <ul>
      <li>
        The catalog comes from <strong>Google Merchant Center</strong>: products, prices, stock,
        shipping and return policies.
      </li>
      <li>The store exposes a checkout API the AI uses to create and confirm the order.</li>
      <li>Payment goes through a wallet (today, Google Pay).</li>
      <li>The store reports order status changes to Google: paid, shipped, delivered.</li>
    </ul>

    <h2>Is it available in Argentina yet?</h2>
    <p>
      No. As of October 2026, buying inside the AI works only for US merchants, and Google has
      announced Canada, Australia and the UK as next steps. Latin America is on the protocol's
      official roadmap, alongside India and Southeast Asia, but with no concrete date. Most
      estimates point to late 2026 or 2027.
    </p>
    <p>
      There is a reason for the delay: each country needs its own payment methods. Pix in Brazil;
      Mercado Pago and installment card payments in Argentina; OXXO and SPEI in Mexico. Until the
      protocol speaks those languages, opening it in the region makes no sense.
    </p>

    <h2>So why talk about it now?</h2>
    <p>
      Because what UCP asks of a store cannot be solved in a week, and most of it pays off today
      even if the protocol doesn't exist in your country yet. Stores that arrive with the
      groundwork done will show up first when it launches. The rest will start from scratch.
    </p>

    <h2>What to have ready</h2>
    <ol>
      <li>
        <strong>A clean product catalog.</strong> Every product with its real variants (size,
        color, presentation), up-to-date price, real stock and good photos. If your catalog lives
        in a spreadsheet nobody updates, that is the first bottleneck.
      </li>
      <li>
        <strong>Merchant Center connected and in sync.</strong> The product feed should update
        automatically from the store, not by hand. Today this already gets you free listings on
        Google Shopping.
      </li>
      <li>
        <strong>Clear shipping and return policies.</strong> They are mandatory under the
        protocol, and they build trust on any channel.
      </li>
      <li>
        <strong>Price and stock resolved on the server.</strong> When an AI agent buys on someone's
        behalf, you cannot trust data coming from outside. The system has to validate price and
        availability before charging.
      </li>
      <li>
        <strong>Structured data on the website.</strong> Product pages marked up so search
        engines and AI assistants understand them without guessing.
      </li>
    </ol>

    <h2>What not to do</h2>
    <p>
      Pay for a "UCP integration" for an Argentine store today. There is nowhere to activate it
      yet, and the specification keeps changing. What does make sense is building or adjusting the
      store so that, when it launches in the region, connecting it is a short step rather than a
      new project.
    </p>

    <h2>How we approach it at RUBRA</h2>
    <p>
      The stores we build already validate price and stock on the server and organize the catalog
      by variants. On top of that we add Merchant Center sync and structured product data, so the
      store sells today through the usual channels and is ready to sell from AI when it reaches
      Latin America.
    </p>
    <p>
      If you want to know how far your store is from being ready, write to us and we'll review it.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'tu-tienda-preparada-para-vender-desde-la-ia',
  title: 'Comprar sin salir de la IA: qué es el protocolo de Google y cómo preparar tu tienda',
  title_en: 'Buying without leaving the AI: what Google\'s protocol is and how to prepare your store',
  description: 'Google ya permite comprar dentro de Gemini y del modo IA del buscador con el Universal Commerce Protocol. Todavía no llegó a Argentina ni a Latinoamérica: qué es, cuándo podría llegar y qué conviene tener listo desde hoy.',
  description_en: 'Google already lets people buy inside Gemini and Search\'s AI Mode with the Universal Commerce Protocol. It has not reached Argentina or Latin America yet: what it is, when it could arrive and what to have ready today.',
  date: '2026-10-05',
  category: 'Ecommerce',
  category_en: 'Ecommerce',
  readTime: 5,
  content: Content,
  content_en: ContentEn,
}
