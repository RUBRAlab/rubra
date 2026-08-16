import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Hay un momento en la vida de toda empresa en que el crecimiento empieza a jugar en contra. Lo que antes
      funcionaba (el Excel compartido, el grupo de WhatsApp, el archivo en el escritorio) de repente se convierte
      en el mayor freno para seguir escalando. El problema no es la gente. Es el sistema.
    </p>
    <p>
      Estas son tres señales concretas de que ese momento llegó.
    </p>

    <h2>1. El dueño o gerente es el cuello de botella</h2>
    <p>
      Si cada decisión, por pequeña que sea, tiene que pasar por vos antes de ejecutarse, el problema no es de
      delegación: es de diseño. Un proceso bien automatizado no necesita que nadie lo destrabe. Funciona solo, con
      reglas claras, y solo escala lo que realmente requiere criterio humano.
    </p>
    <p>
      La señal más clara: cuando te vas de vacaciones y el equipo no sabe qué hacer, o te llaman para resolver
      cosas que deberían estar resueltas sin vos.
    </p>

    <h2>2. La información vive en la cabeza de las personas, no en el sistema</h2>
    <p>
      ¿Cuántos clientes tienen una deuda de más de 60 días? ¿Qué productos están por debajo del stock mínimo?
      ¿Cuántas consultas recibieron esta semana y cuántas se respondieron en menos de dos horas?
    </p>
    <p>
      Si la respuesta a cualquiera de estas preguntas es "hay que preguntarle a Fulano" o "hay que revisar el
      Excel de Mengana", la información no está en el sistema: está atrapada en personas. Y las personas se
      enferman, se van, se olvidan.
    </p>
    <p>
      Un sistema bien diseñado convierte el conocimiento individual en capital organizacional. Algo que no depende
      de quién esté en la empresa.
    </p>

    <h2>3. Los errores se repiten y nadie sabe por qué</h2>
    <p>
      El mismo pedido que se duplica. El mismo cliente que reclama lo mismo. El mismo error de facturación que
      aparece una y otra vez. Cada vez que pasa, el equipo lo resuelve, y al mes siguiente vuelve a pasar.
    </p>
    <p>
      Los errores recurrentes son síntomas de procesos manuales sin control. No es que la gente trabaje mal:
      es que el sistema no tiene los puntos de validación necesarios para que el error no ocurra en primer lugar.
      Automatizar no es reemplazar personas: es quitarles la responsabilidad de hacer las cosas que una máquina
      puede hacer mejor, más rápido y sin equivocarse.
    </p>

    <h2>Reconocerlo es la mitad. La otra mitad es construirlo</h2>
    <p>
      Ninguna de estas tres señales se arregla con fuerza de voluntad ni con una planilla mejor hecha.
      Se arreglan cuando existe el sistema que hoy no está: el que valida antes de que el error ocurra,
      el que guarda la información donde todos la ven, el que hace solo lo que hoy espera a una persona.
    </p>
    <p>
      Eso es lo que construimos. Empezamos mirando tu operación, identificamos qué tiene más impacto
      resolver primero, y lo desarrollamos con alcance y precio cerrado. Sin proyectos eternos y sin
      herramientas que nadie termina usando.
    </p>
    <p>
      Podés ver <a href="/casos">algunos de los sistemas que ya construimos</a>, o{' '}
      <a href="mailto:hola@rubra.ar">escribirnos</a> y lo charlamos.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      There's a moment in every company's life when growth starts working against it. What used to work (the
      shared spreadsheet, the WhatsApp group, the file on the desktop) suddenly becomes the biggest obstacle to
      scaling further. The problem isn't the people. It's the system.
    </p>
    <p>
      Here are three concrete signs that moment has arrived.
    </p>

    <h2>1. The owner or manager is the bottleneck</h2>
    <p>
      If every decision, no matter how small, has to go through you before it happens, the problem isn't
      delegation: it's design. A well-automated process doesn't need anyone to unblock it. It runs on its own,
      with clear rules, and only escalates what genuinely requires human judgment.
    </p>
    <p>
      The clearest sign: when you go on vacation and the team doesn't know what to do, or they call you to solve
      things that should already be resolved without you.
    </p>

    <h2>2. Information lives in people's heads, not in the system</h2>
    <p>
      How many customers have a debt older than 60 days? Which products are below minimum stock? How many
      inquiries did you get this week, and how many were answered in under two hours?
    </p>
    <p>
      If the answer to any of these questions is "you'd have to ask so-and-so" or "you'd have to check
      so-and-so's spreadsheet," the information isn't in the system: it's trapped in people. And people get
      sick, leave, and forget.
    </p>
    <p>
      A well-designed system turns individual knowledge into organizational capital. Something that doesn't
      depend on who happens to be working there.
    </p>

    <h2>3. Mistakes keep repeating and no one knows why</h2>
    <p>
      The same order gets duplicated. The same customer files the same complaint. The same billing error shows
      up again and again. Every time it happens, the team fixes it, and the next month it happens again.
    </p>
    <p>
      Recurring errors are symptoms of manual processes without controls. It's not that people are working
      poorly: it's that the system lacks the validation points needed to stop the error from happening in the
      first place. Automating isn't about replacing people: it's about taking off their plate the things a
      machine can do better, faster, and without mistakes.
    </p>

    <h2>Recognizing it is half the battle. The other half is building it</h2>
    <p>
      None of these three signs gets fixed with willpower or a better spreadsheet. They get fixed when the
      system that's missing today finally exists: the one that validates before the error happens, the one
      that stores information where everyone can see it, the one that does on its own what today waits on a
      person.
    </p>
    <p>
      That's what we build. We start by looking at your operation, identify what has the biggest impact to
      solve first, and develop it with a defined scope and fixed price. No endless projects, no tools that end
      up unused.
    </p>
    <p>
      You can check out <a href="/casos">some of the systems we've already built</a>, or{' '}
      <a href="mailto:hola@rubra.ar">write to us</a> and let's talk.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'senales-de-que-tu-empresa-necesita-automatizar',
  title: '3 señales de que tu empresa necesita automatizar sus procesos',
  title_en: '3 signs your company needs to automate its processes',
  description: 'Hay un momento en que el crecimiento empieza a jugar en contra. Estos son los tres síntomas más claros de que los procesos manuales están frenando tu empresa.',
  description_en: "There's a moment when growth starts working against you. These are the three clearest signs that manual processes are holding your company back.",
  date: '2026-06-06',
  category: 'Procesos',
  category_en: 'Processes',
  readTime: 4,
  content: Content,
  content_en: ContentEn,
}
