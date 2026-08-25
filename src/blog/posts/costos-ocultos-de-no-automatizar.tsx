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
      Comparado contra eso, el costo de automatizar -que es finito, conocido y de una sola vez-
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

const ContentEn = () => (
  <article>
    <p>
      "It's not worth automating yet" is a phrase you hear a lot in companies. And it's almost
      always miscalculated. Not because automation is free, but because not automating isn't
      free either. That cost just doesn't show up on any balance sheet.
    </p>
    <p>
      Nobody writes down the hours an employee spent copying data from one system to another,
      or the order that got lost because nobody entered it in time, or the customer who left
      for a competitor after waiting three days for a reply that should have taken minutes.
      That cost is real. It's just invisible.
    </p>

    <h2>The cost you can see: work hours</h2>
    <p>
      This is the easiest one to calculate, and that's why it's usually the only one that
      makes it into the math. Someone who spends two hours a day moving data from a
      spreadsheet into a system, or from one system to another, is someone who costs a full
      salary for work that automation solves in seconds.
    </p>
    <p>
      Multiplied across months, years, and several people doing similar tasks, that number
      stops being small. The problem is that because it's spread across many small tasks, it
      never shows up as one big figure. It just looks like "that's how we work here."
    </p>

    <h2>The cost you can't see: what didn't get done</h2>
    <p>
      This one weighs the most and gets measured the least. Every hour someone spends on a
      repetitive manual task is an hour they didn't spend selling, taking better care of a
      customer, or thinking about how to grow the business.
    </p>
    <p>
      It's not just the cost of the task. It's the opportunity cost of everything that person
      could have done instead. And that cost never shows up in any report, but it's felt in
      the year's results.
    </p>

    <h2>The cost of error</h2>
    <p>
      Manual processes fail. Not because anyone is careless - it's statistics. Copying a
      number by hand, entering an order, updating stock: all of that carries a margin of
      human error that grows with volume.
    </p>
    <ul>
      <li>A price entered wrong that leads to a complaint or a loss.</li>
      <li>Stock that doesn't match between the store and the system.</li>
      <li>An invoice sent twice, or never sent at all.</li>
      <li>A customer's data lost somewhere between a chat, an email, and a spreadsheet.</li>
    </ul>
    <p>
      Each of these errors has a direct cost (the time it takes to fix it) and an indirect one
      (the trust lost with the customer who experienced it).
    </p>

    <h2>The cost of not being able to grow</h2>
    <p>
      This is the one that should really worry you. An operation that runs by hand can sustain
      a small volume. The problem shows up when the business grows: the same processes that
      handled ten orders a day collapse under a hundred.
    </p>
    <p>
      And that's when something counterintuitive happens: growth, instead of being good news,
      becomes a problem. You need to hire more people to do the same manual work, instead of
      having a system absorb the volume. The company's ceiling ends up being the capacity of
      its manual process, not market demand.
    </p>

    <h2>How to think about the real calculation</h2>
    <p>
      Before deciding whether automating "is worth it," it's worth adding up these four
      numbers, even roughly:
    </p>
    <ol>
      <li>Hours per week spent on the manual task, multiplied by their cost.</li>
      <li>What those hours could generate if used elsewhere.</li>
      <li>The estimated monthly cost of the errors that process generates.</li>
      <li>The growth ceiling that manual process puts on the business.</li>
    </ol>
    <p>
      Compared to that, the cost of automating - which is finite, known, and one-time - tends
      to be much lower than it seemed at first.
    </p>

    <h2>Not automating is also a decision</h2>
    <p>
      The idea that "it's not worth it yet" assumes that doing nothing has no cost. But doing
      nothing is, in itself, a decision: the decision to keep paying that hidden cost, month
      after month, without it ever showing up as a line in any report.
    </p>
    <p>
      It's not about automating everything at once. It's about knowing what not automating is
      really costing you, so you can decide with the full number on the table.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'costos-ocultos-de-no-automatizar',
  title: 'Los costos ocultos de no automatizar tu empresa',
  title_en: 'The hidden costs of not automating your business',
  description: 'Automatizar tiene un costo visible y conocido. No automatizar también tiene un costo, pero está repartido y escondido. Cómo calcular lo que realmente te está costando seguir trabajando a mano.',
  description_en: 'Automating has a visible, known cost. Not automating has a cost too, but it is spread out and hidden. How to calculate what working by hand is really costing you.',
  date: '2026-07-30',
  category: 'Operaciones',
  category_en: 'Operations',
  readTime: 5,
  content: Content,
  content_en: ContentEn,
}
