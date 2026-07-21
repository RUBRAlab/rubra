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

export const post: BlogPost = {
  slug: 'concil-producto-propio',
  title: 'CONCIL: cómo construimos nuestro propio producto',
  description:
    'La conciliación bancaria le consume horas todos los meses a cualquier estudio contable. Construimos un producto para eliminarla — y en el camino aprendimos cosas que hoy aplicamos en cada proyecto.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 4,
  content: Content,
}
