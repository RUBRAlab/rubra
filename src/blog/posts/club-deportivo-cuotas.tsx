import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      El <a href="https://www.deportivopradere.com.ar">Club Deportivo Social Juan A. Pradere</a>
      tiene 86 años de historia. Cientos de socios, cuotas sociales, actividades deportivas,
      y una comisión directiva que hace todo a pulmón.
    </p>
    <p>
      El problema no era la falta de sistemas. Era uno muy concreto: la tesorera recibía
      transferencias bancarias todos los meses y no tenía forma de saber a qué socio
      correspondía cada depósito.
    </p>

    <h2>El problema real de las instituciones</h2>
    <p>
      Un club no es una empresa. No tiene un área de sistemas ni presupuesto para software.
      Tiene voluntarios que dedican su tiempo libre y resuelven con lo que hay: una planilla,
      un cuaderno, el home banking abierto en otra pestaña.
    </p>
    <p>
      Eso funciona hasta que deja de funcionar. Cuando el club crece, la carga administrativa
      crece más rápido que la capacidad de las personas que la sostienen. Y el costo no se paga
      en dinero: se paga en horas de gente que preferiría estar organizando el club, no
      cruzando depósitos con nombres.
    </p>

    <h2>Qué construimos</h2>
    <ul>
      <li>
        <strong>Un padrón de socios centralizado</strong>, con su estado de cuota al día,
        su historial y las actividades deportivas en las que está inscripto.
      </li>
      <li>
        <strong>Pagos online</strong>: el socio paga su cuota desde el celular y el sistema
        la registra solo. Se terminó el trabajo de adivinar a quién pertenece cada transferencia.
      </li>
      <li>
        <strong>Registro manual también</strong>, porque en un club se sigue cobrando en efectivo
        en la sede. El sistema se adaptó a cómo trabaja el club, no al revés.
      </li>
      <li>
        <strong>Roles con permisos distintos</strong>: la comisión directiva administra todo,
        los tesoreros de cada sub-comisión ven la información completa pero no pueden modificarla,
        y cada socio accede a su propio portal.
      </li>
      <li>
        <strong>Avisos por WhatsApp</strong>, que es donde la gente del club realmente lee.
      </li>
      <li>
        <strong>Una app instalable en el celular</strong>, sin pasar por las tiendas de
        aplicaciones ni pedirle a nadie que descargue nada complicado.
      </li>
    </ul>

    <h2>La decisión que más importó</h2>
    <p>
      El sistema se diseñó alrededor de una restricción: los usuarios no son técnicos y muchos
      no tienen email. El acceso se resolvió con documento y un PIN, que es lo que la gente del
      club puede recordar sin ayuda.
    </p>
    <p>
      Esa clase de decisión no aparece en ningún requerimiento. Aparece cuando uno se sienta a
      entender cómo funciona la institución antes de escribir la primera línea de código.
    </p>

    <h2>El resultado</h2>
    <p>
      El sistema está en producción con pagos online activos. La conciliación de cuotas, que era
      una tarea manual de horas, es ahora automática.
    </p>
    <p>
      Un club de 86 años no necesita transformarse en una empresa de tecnología. Necesita que
      la parte administrativa deje de consumir el tiempo de las personas que lo sostienen.
    </p>
    <p>
      ¿Tu institución necesita algo así? <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      The <a href="https://www.deportivopradere.com.ar">Club Deportivo Social Juan A. Pradere</a>
      has 86 years of history. Hundreds of members, membership dues, sports activities,
      and a board that runs everything on volunteer effort.
    </p>
    <p>
      The problem wasn't a lack of systems. It was one very specific issue: the treasurer
      received bank transfers every month with no way of knowing which member each
      deposit belonged to.
    </p>

    <h2>The real problem institutions face</h2>
    <p>
      A club isn't a company. It has no IT department and no software budget.
      It has volunteers who give up their free time and make do with what they have:
      a spreadsheet, a notebook, online banking open in another tab.
    </p>
    <p>
      That works until it doesn't. As the club grows, the administrative workload
      grows faster than the capacity of the people carrying it. And the cost isn't paid
      in money: it's paid in hours from people who would rather be running the club
      than matching deposits to names.
    </p>

    <h2>What we built</h2>
    <ul>
      <li>
        <strong>A centralized member registry</strong>, with each member's dues status
        up to date, their history, and the sports activities they're enrolled in.
      </li>
      <li>
        <strong>Online payments</strong>: members pay their dues from their phone and the
        system logs it automatically. No more guessing whose transfer is whose.
      </li>
      <li>
        <strong>Manual entry as well</strong>, because the club still takes cash payments
        at the front desk. The system adapted to how the club works, not the other way around.
      </li>
      <li>
        <strong>Roles with different permissions</strong>: the board manages everything,
        each sub-committee's treasurer sees full information but can't modify it,
        and each member gets access to their own portal.
      </li>
      <li>
        <strong>WhatsApp notifications</strong>, because that's where club members actually read messages.
      </li>
      <li>
        <strong>An installable phone app</strong>, without going through app stores or
        asking anyone to download anything complicated.
      </li>
    </ul>

    <h2>The decision that mattered most</h2>
    <p>
      The system was designed around one constraint: the users aren't technical and many
      don't have email. Access was solved with an ID number and a PIN - something
      club members can remember without help.
    </p>
    <p>
      That kind of decision doesn't show up in any requirements document. It shows up
      when you sit down to understand how the institution actually works before
      writing a single line of code.
    </p>

    <h2>The result</h2>
    <p>
      The system is in production with online payments active. Reconciling dues, which
      used to be hours of manual work, is now automatic.
    </p>
    <p>
      An 86-year-old club doesn't need to turn into a tech company. It needs the
      administrative side to stop eating up the time of the people who keep it running.
    </p>
    <p>
      Does your institution need something like this? <a href="mailto:hola@rubra.ar">Get in touch</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'club-deportivo-cuotas',
  title: 'Un club de 86 años que dejó de conciliar cuotas a mano',
  description:
    'Cómo el Club Deportivo Social Juan A. Pradere pasó de cruzar transferencias bancarias con nombres en una planilla, a un sistema de socios con pagos online, roles y avisos automáticos.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 4,
  content: Content,
  title_en: 'An 86-year-old club that stopped reconciling dues by hand',
  description_en:
    'How Club Deportivo Social Juan A. Pradere went from matching bank transfers to names on a spreadsheet, to a membership system with online payments, roles, and automatic notifications.',
  category_en: 'Case study',
  content_en: ContentEn,
}
