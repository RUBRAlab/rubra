import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Hay un momento en la vida de toda empresa en que el crecimiento empieza a jugar en contra. Lo que antes
      funcionaba — el Excel compartido, el grupo de WhatsApp, el archivo en el escritorio — de repente se convierte
      en el mayor freno para seguir escalando. El problema no es la gente. Es el sistema.
    </p>
    <p>
      Estas son tres señales concretas de que ese momento llegó.
    </p>

    <h2>1. El dueño o gerente es el cuello de botella</h2>
    <p>
      Si cada decisión — por pequeña que sea — tiene que pasar por vos antes de ejecutarse, el problema no es de
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
      Excel de Mengana", la información no está en el sistema — está atrapada en personas. Y las personas se
      enferman, se van, se olvidan.
    </p>
    <p>
      Un sistema bien diseñado convierte el conocimiento individual en capital organizacional. Algo que no depende
      de quién esté en la empresa.
    </p>

    <h2>3. Los errores se repiten y nadie sabe por qué</h2>
    <p>
      El mismo pedido que se duplica. El mismo cliente que reclama lo mismo. El mismo error de facturación que
      aparece una y otra vez. Cada vez que pasa, el equipo lo resuelve — y al mes siguiente vuelve a pasar.
    </p>
    <p>
      Los errores recurrentes son síntomas de procesos manuales sin control. No es que la gente trabaje mal:
      es que el sistema no tiene los puntos de validación necesarios para que el error no ocurra en primer lugar.
      Automatizar no es reemplazar personas — es quitarles la responsabilidad de hacer las cosas que una máquina
      puede hacer mejor, más rápido y sin equivocarse.
    </p>

    <h2>El diagnóstico es el primer paso</h2>
    <p>
      Reconocer estas señales no significa que haya que transformar todo de golpe. Significa que hay algo concreto
      que mejorar. En RUBRA trabajamos con un diagnóstico inicial de 30 minutos donde mapeamos los principales
      cuellos de botella de tu operación y definimos qué tiene más impacto resolver primero.
    </p>
    <p>
      Sin vender tecnología por la tecnología. Sin implementar herramientas que nadie va a usar. Con foco en lo
      que realmente mueve la aguja de tu negocio.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'senales-de-que-tu-empresa-necesita-automatizar',
  title: '3 señales de que tu empresa necesita automatizar sus procesos',
  description: 'Hay un momento en que el crecimiento empieza a jugar en contra. Estos son los tres síntomas más claros de que los procesos manuales están frenando tu empresa.',
  date: '2026-06-06',
  category: 'Procesos',
  readTime: 4,
  content: Content,
}
