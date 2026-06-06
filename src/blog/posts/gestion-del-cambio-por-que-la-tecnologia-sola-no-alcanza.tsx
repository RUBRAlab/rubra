import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Hay un patrón que se repite. Una empresa invierte en una herramienta nueva — un CRM, un sistema de
      gestión, un software de automatización. Los primeros meses todo parece bien. Y después, lentamente,
      el equipo vuelve al Excel.
    </p>
    <p>
      No porque la herramienta fuera mala.
    </p>
    <p>
      Sino porque nadie trabajó en lo que realmente hace que un cambio funcione.
    </p>

    <h2>El problema no es la tecnología</h2>
    <p>
      Implementar un sistema es la parte fácil. Lo difícil es lograr que las personas cambien su forma de
      trabajar. Y eso no ocurre solo porque el software esté instalado y el equipo haya visto una demo de
      treinta minutos.
    </p>
    <p>
      La gestión del cambio es exactamente eso: el trabajo de acompañar a las personas <em>mientras</em> se
      transforma la organización. No antes, no después. Durante.
    </p>

    <h2>Por qué aparece la resistencia (y por qué es normal)</h2>
    <p>
      Cuando una empresa modifica cómo se hacen las cosas, las personas se hacen preguntas que muchas veces
      no se dicen en voz alta:
    </p>
    <ul>
      <li>¿Esto me va a complicar el trabajo?</li>
      <li>¿Me van a pedir que haga cosas para las que no me capacitaron?</li>
      <li>¿Hay algo que no me están contando?</li>
      <li>¿Para qué cambiar algo que funciona?</li>
    </ul>
    <p>
      Estas dudas no son falta de voluntad. Son reacciones humanas completamente lógicas frente a lo
      desconocido. El error es ignorarlas o pretender que no existen.
    </p>

    <h2>Lo que más reduce la resistencia</h2>
    <p>
      No es la capacitación. No es el manual de uso. Es la respuesta a una sola pregunta: <em>¿para qué
      me sirve esto a mí?</em>
    </p>
    <p>
      Cuando las personas entienden cómo el cambio les facilita <em>su</em> trabajo —no el trabajo de la
      empresa en abstracto, sino el de ellas en concreto—, la adopción cambia completamente.
    </p>
    <p>
      "Ya no vas a tener que cargar esto a mano" es mucho más poderoso que "la empresa va a ser más eficiente."
    </p>

    <h2>El error de diseñar sin preguntar</h2>
    <p>
      Otro patrón frecuente: el área de dirección define el nuevo proceso, lo implementa y después descubre
      que nadie lo usa como se esperaba.
    </p>
    <p>
      Porque quienes diseñaron el proceso no son quienes lo ejecutan todos los días.
    </p>
    <p>
      Involucrar a los usuarios finales desde el principio no es solo un gesto de buena voluntad. Es
      pragmatismo puro. Ellos conocen detalles operativos que ningún consultor externo va a descubrir en
      un relevamiento de dos horas. Y cuando participan del diseño, defienden el resultado como propio.
    </p>

    <h2>Capacitar no es mostrar una demo</h2>
    <p>
      Una capacitación real es cuando la persona puede usar la herramienta sola, con sus datos reales, en
      sus situaciones concretas. Y cuando tiene a alguien a quien recurrir cuando algo no funciona como
      esperaba.
    </p>
    <p>
      Eso requiere tiempo, acompañamiento y paciencia. No una tarde de presentaciones en PowerPoint.
    </p>

    <h2>El cambio no es un evento. Es un proceso.</h2>
    <p>
      La transformación no ocurre el día que se lanza el nuevo sistema. Ocurre semanas después, cuando el
      equipo empieza a confiar en él. Meses después, cuando ya no se imagina trabajar de otra manera.
    </p>
    <p>
      Las empresas que lo hacen bien no son las que tienen mejor tecnología. Son las que acompañan mejor
      a sus personas durante el camino.
    </p>
    <p>
      Y eso no lo hace ningún software. Lo hacen las personas que lideran el proceso.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'gestion-del-cambio-por-que-la-tecnologia-sola-no-alcanza',
  title: 'Gestión del cambio: por qué la tecnología sola no alcanza',
  description: 'Implementar un sistema es la parte fácil. Lo difícil es lograr que las personas cambien su forma de trabajar. Acá está la diferencia entre un proyecto que funciona y uno que termina en el Excel de siempre.',
  date: '2026-06-06',
  category: 'Transformación',
  readTime: 5,
  content: Content,
}
