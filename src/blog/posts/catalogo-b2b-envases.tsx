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

export const post: BlogPost = {
  slug: 'catalogo-b2b-envases',
  title: 'Un catálogo técnico que responde antes de que pregunten',
  description:
    'Cómo una empresa de envases de vidrio publicó su catálogo completo con fichas técnicas y planos descargables, para que las consultas lleguen ya armadas.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 4,
  content: Content,
}
