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

export const post: BlogPost = {
  slug: 'caso-club-deportivo-cuotas',
  title: 'Un club de 86 años que dejó de conciliar cuotas a mano',
  description:
    'Cómo el Club Deportivo Social Juan A. Pradere pasó de cruzar transferencias bancarias con nombres en una planilla, a un sistema de socios con pagos online, roles y avisos automáticos.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 4,
  content: Content,
}
