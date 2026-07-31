import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      "Todavía no nos justifica automatizar" es una frase que se escucha mucho en empresas. Y casi
      siempre está mal calculada. No porque automatizar sea gratis, sino porque no automatizar
      tampoco lo es. Solo que ese costo no aparece en ningún balance.
    </p>
    <p>
      Nadie anota en una planilla las horas que un empleado pasó copiando datos de un sistema a otro,
      ni el pedido que se perdió porque nadie lo cargó a tiempo, ni el cliente que se fue a la
      competencia después de esperar tres días una respuesta que debería haber tardado minutos.
      Ese costo existe. Solo que es invisible.
    </p>

    <h2>El costo que sí se ve: la hora de trabajo</h2>
    <p>
      Es el más fácil de calcular y por eso el único que suele entrar en la cuenta. Una persona que
      dedica dos horas por día a pasar información de un Excel a un sistema, o de un sistema a otro,
      es una persona que cuesta un sueldo completo por un trabajo que una automatización resuelve en
      segundos.
    </p>
    <p>
      Multiplicado por meses, por años, por varias personas haciendo tareas parecidas, ese número
      deja de ser chico. El problema es que como está repartido entre muchas tareas pequeñas, nunca
      se ve como una sola cifra grande. Se ve como "así es como trabajamos".
    </p>

    <h2>El costo que no se ve: lo que no se hizo</h2>
    <p>
      Este es el que más pesa y el que menos se mide. Cada hora que alguien pasa haciendo una tarea
      manual repetitiva es una hora que no pasó vendiendo, atendiendo mejor a un cliente, o pensando
      en cómo hacer crecer el negocio.
    </p>
    <p>
      No es solo el costo de la tarea. Es el costo de oportunidad de todo lo que esa persona podría
      haber hecho en su lugar. Y ese costo no aparece en ningún reporte, pero se siente en los
      resultados del año.
    </p>

    <h2>El costo del error</h2>
    <p>
      Los procesos manuales fallan. No por descuido de nadie: es estadística. Copiar un número a
      mano, cargar un pedido, actualizar un stock, todo eso tiene un margen de error humano que crece
      con el volumen.
    </p>
    <ul>
      <li>Un precio mal cargado que genera un reclamo o una pérdida.</li>
      <li>Un stock que no coincide entre el local y el sistema.</li>
      <li>Una factura que se manda dos veces, o que no se manda nunca.</li>
      <li>Un dato de cliente que se pierde entre un chat, un mail y una planilla.</li>
    </ul>
    <p>
      Cada uno de estos errores tiene un costo directo (el tiempo de corregirlo) y uno indirecto
      (la confianza que se pierde con el cliente que lo sufrió).
    </p>

    <h2>El costo de no poder crecer</h2>
    <p>
      Acá está el que de verdad debería preocupar. Una operación que funciona a mano puede sostener
      un volumen chico. El problema aparece cuando el negocio crece: los mismos procesos que
      alcanzaban para diez pedidos por día colapsan con cien.
    </p>
    <p>
      Y ahí pasa algo contraintuitivo: crecer, en vez de ser una buena noticia, se convierte en un
      problema. Se necesita contratar más gente para hacer lo mismo a mano, en lugar de que el sistema
      absorba el volumen. El techo de la empresa termina siendo la capacidad de su proceso manual,
      no la demanda del mercado.
    </p>

    <h2>Cómo pensar el cálculo real</h2>
    <p>
      Antes de decidir si automatizar "se justifica", conviene sumar estos cuatro números, aunque
      sea de forma aproximada:
    </p>
    <ol>
      <li>Horas por semana dedicadas a la tarea manual, multiplicadas por su costo.</li>
      <li>Lo que esas horas podrían generar si se usaran en otra cosa.</li>
      <li>El costo estimado de los errores que ese proceso genera por mes.</li>
      <li>El límite de crecimiento que ese proceso manual le pone al negocio.</li>
    </ol>
    <p>
      Comparado contra eso, el costo de automatizar —que es finito, conocido y de una sola vez—
      suele ser mucho menor de lo que parecía al principio.
    </p>

    <h2>No automatizar también es una decisión</h2>
    <p>
      La idea de "todavía no nos justifica" asume que no hacer nada no tiene costo. Pero no hacer
      nada es, en sí misma, una decisión: la de seguir pagando ese costo oculto, mes tras mes, sin
      que aparezca nunca como una línea en ningún reporte.
    </p>
    <p>
      No se trata de automatizar todo de golpe. Se trata de saber cuánto está costando realmente lo
      que no se automatiza, para poder decidir con el número completo sobre la mesa.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'costos-ocultos-de-no-automatizar',
  title: 'Los costos ocultos de no automatizar tu empresa',
  description: 'Automatizar tiene un costo visible y conocido. No automatizar también tiene un costo, pero está repartido y escondido. Cómo calcular lo que realmente te está costando seguir trabajando a mano.',
  date: '2026-07-30',
  category: 'Operaciones',
  readTime: 5,
  content: Content,
}
