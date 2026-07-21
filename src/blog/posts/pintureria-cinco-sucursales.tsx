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
      Ese último punto es el que casi siempre falta. Muchas pymes tienen una web que no pueden
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
    </ul>

    <h2>Cómo se trabajó</h2>
    <p>
      Con el método de siempre: alcance cerrado, precio cerrado, y el proyecto dividido en fases.
      La Fase 1 —todo lo de arriba— se construyó, se puso en producción y se entregó funcionando.
      La Fase 2, con pagos online y envíos, ya está diseñada y se activa cuando el negocio
      la necesite.
    </p>
    <p>
      Trabajar por fases no es un detalle comercial. Es lo que permite que una pyme incorpore
      tecnología sin apostar todo de entrada: cada fase entrega algo que funciona y se paga solo
      la siguiente si tiene sentido.
    </p>

    <h2>El resultado</h2>
    <p>
      Hoy la tienda está en producción y el equipo administra su catálogo
      —productos, precios, imágenes— de forma completamente autónoma.
    </p>
    <p>
      De vender solo por mostrador y WhatsApp, a tener el catálogo abierto las 24 horas
      con pedidos que llegan solos. Sin cambiar la forma de trabajar del equipo: la
      herramienta se adaptó al negocio, no al revés.
    </p>
    <p>
      ¿Tu negocio necesita algo así? <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'pintureria-cinco-sucursales',
  title: 'De vender por mostrador a una tienda online con 5 sucursales',
  description:
    'Cómo una pinturería de La Rioja pasó de atender solo por mostrador y WhatsApp a tener su catálogo online, pedidos automáticos y un panel para administrar todo sin depender de nadie técnico.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 4,
  content: Content,
}
