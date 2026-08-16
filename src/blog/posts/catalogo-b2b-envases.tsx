import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Una empresa que fabrica y comercializa envases de vidrio para bodegas y marcas
      de bebidas. No vende una botella: vende un formato, un peso, una capacidad y un
      color que tienen que coincidir con lo que la marca imagina para su producto.
    </p>
    <p>
      Su catálogo tiene decenas de modelos. Cada consulta empezaba con un ida y vuelta
      por mail: qué botella, qué medidas, si hay plano técnico, cuánto sale. El
      conocimiento del catálogo vivía en la cabeza del equipo comercial.
    </p>

    <h2>El problema de vender productos técnicos</h2>
    <p>
      Cuando lo que vendés tiene ficha técnica, el cliente no compra por foto. Necesita
      el dato exacto: capacidad, altura, diámetro, tipo de boca, peso. Y necesita el plano
      para pasárselo a su diseñador o a su línea de envasado.
    </p>
    <p>
      Sin eso publicado, cada consulta ocupa a una persona. Con eso publicado, el cliente
      avanza solo hasta el momento en que realmente hace falta hablar: la cotización.
    </p>

    <h2>Qué construimos</h2>
    <ul>
      <li>
        <strong>El catálogo completo online</strong>, con más de sesenta modelos cargados,
        sus fotos reales y su ficha técnica.
      </li>
      <li>
        <strong>Filtros por categoría y material</strong>, para llegar al modelo correcto
        sin recorrer todo el catálogo.
      </li>
      <li>
        <strong>Plano técnico descargable</strong> en cada producto. El dato que el cliente
        necesitaba pedir por mail, ahora se lo lleva solo.
      </li>
      <li>
        <strong>Cotización por selección múltiple</strong>: el cliente marca varias botellas
        mientras navega y pide precio por todas juntas. La consulta llega al equipo ya
        armada, con los modelos identificados.
      </li>
      <li>
        <strong>Un gestor de contenido propio</strong> para que la empresa y su agencia de
        fotos carguen productos e imágenes sin depender de nosotros.
      </li>
    </ul>

    <h2>La decisión de diseño</h2>
    <p>
      El envase de vidrio es un producto estético: la marca lo elige, en parte, porque le
      gusta cómo se ve. El sitio se construyó claro, aireado y minimalista, para que las
      fotos de producto tuvieran todo el protagonismo.
    </p>
    <p>
      Es lo contrario de un catálogo industrial cargado de tablas. Acá el producto es lo
      que se mira, y el dato técnico está a un click de distancia cuando hace falta.
    </p>

    <h2>El resultado</h2>
    <p>
      El catálogo está en producción y las consultas llegan identificadas, con los modelos
      ya elegidos. El equipo comercial dejó de explicar el catálogo para pasar a hacer
      lo que importa: cotizar.
    </p>
    <p>
      ¿Vendés productos con ficha técnica y seguís contestando lo mismo por mail?{' '}
      <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      A company that manufactures and sells glass containers for wineries and beverage
      brands. It doesn't sell a bottle: it sells a format, a weight, a capacity, and a
      color that have to match what the brand envisions for its product.
    </p>
    <p>
      Its catalog has dozens of models. Every inquiry started with an email back-and-forth:
      which bottle, what dimensions, is there a technical drawing, how much does it cost.
      The catalog knowledge lived in the sales team's heads.
    </p>

    <h2>The problem with selling technical products</h2>
    <p>
      When what you sell has a spec sheet, the customer doesn't buy from a photo. They
      need the exact data: capacity, height, diameter, neck type, weight. And they need
      the technical drawing to hand off to their designer or their bottling line.
    </p>
    <p>
      Without that published, every inquiry ties up a person. With it published, the
      customer moves forward on their own until the moment a conversation is actually
      needed: the quote.
    </p>

    <h2>What we built</h2>
    <ul>
      <li>
        <strong>The full catalog online</strong>, with more than sixty models loaded,
        their real photos, and their spec sheet.
      </li>
      <li>
        <strong>Filters by category and material</strong>, to get to the right model
        without browsing the entire catalog.
      </li>
      <li>
        <strong>Downloadable technical drawing</strong> on every product. The data the
        customer used to request by email, now they get it themselves.
      </li>
      <li>
        <strong>Multi-select quote requests</strong>: the customer selects several bottles
        while browsing and requests a price for all of them together. The inquiry reaches
        the team already organized, with the models identified.
      </li>
      <li>
        <strong>An in-house content manager</strong> so the company and its photo agency
        can upload products and images without depending on us.
      </li>
    </ul>

    <h2>The design decision</h2>
    <p>
      Glass packaging is an aesthetic product: the brand chooses it, in part, because they
      like how it looks. The site was built clean, airy, and minimalist, so the product
      photos would take full center stage.
    </p>
    <p>
      It's the opposite of an industrial catalog packed with tables. Here the product is
      what you look at, and the technical data is a click away when you need it.
    </p>

    <h2>The result</h2>
    <p>
      The catalog is live in production and inquiries arrive already identified, with the
      models already chosen. The sales team stopped explaining the catalog and started
      doing what matters: quoting.
    </p>
    <p>
      Do you sell products with spec sheets and still answer the same questions by email?{' '}
      <a href="mailto:hola@rubra.ar">Get in touch</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'catalogo-b2b-envases',
  title: 'Un catálogo técnico que responde antes de que pregunten',
  description:
    'Cómo una empresa de envases de vidrio publicó su catálogo completo con fichas técnicas y planos descargables, para que las consultas lleguen ya armadas.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 4,
  content: Content,
  title_en: 'A technical catalog that answers before they ask',
  description_en:
    'How a glass packaging company published its full catalog with spec sheets and downloadable drawings, so inquiries arrive already organized.',
  category_en: 'Case study',
  content_en: ContentEn,
}
