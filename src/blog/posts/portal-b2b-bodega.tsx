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
        <strong>El cliente se entera solo</strong>: cuando el pedido cambia de estado —en preparación,
        despachado, en tránsito, entregado— le llega un email. Se terminaron los llamados
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

export const post: BlogPost = {
  slug: 'portal-b2b-bodega',
  title: 'Un portal B2B para que una bodega deje de vender por WhatsApp',
  description:
    'Cómo construimos para Desquiciado Wines un portal de venta mayorista con listas de precios por cliente, pedidos en minutos y seguimiento logístico automático.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 4,
  content: Content,
}
