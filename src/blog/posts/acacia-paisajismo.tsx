import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      <strong>Acacia Paisajismo</strong> es el estudio de Agustina D'Innocenzo en el Gran
      Mendoza. Diseña jardines, ejecuta obra llave en mano, hace mantenimiento y vende
      panes de césped.
    </p>
    <p>
      Un negocio así vive de sus fotos. Un jardín terminado convence más que cualquier
      texto. Pero las fotos estaban en Instagram, mezcladas con el resto del feed y
      perdiéndose a medida que pasaba el tiempo.
    </p>

    <h2>Cuando el negocio no es uno solo</h2>
    <p>
      Acacia no vende una sola cosa. Diseña proyectos, ejecuta obras, mantiene jardines,
      vende productos y dicta cursos. Cada una de esas líneas le habla a alguien distinto:
      quien quiere rehacer su patio no es quien busca un curso online.
    </p>
    <p>
      Meter todo eso en una sola página es el error clásico. El visitante entra buscando
      una cosa y tiene que atravesar cuatro que no le interesan.
    </p>

    <h2>Qué construimos</h2>
    <ul>
      <li>
        <strong>Una página por línea de negocio</strong>: proyectos, tienda, cursos y contacto,
        cada una con su propio camino, y una home que orienta hacia la correcta.
      </li>
      <li>
        <strong>El portfolio de obras</strong> con las fotos reales de los jardines terminados,
        que es el argumento de venta más fuerte que tiene el estudio.
      </li>
      <li>
        <strong>Una tienda</strong> para los productos que se venden solos: césped, plantas,
        macetas.
      </li>
      <li>
        <strong>Los cursos</strong> con su propio espacio, para el público que no busca
        contratar sino aprender.
      </li>
      <li>
        <strong>Contacto con preguntas frecuentes</strong>, que responde antes de que la
        clienta tenga que contestar lo mismo por décima vez.
      </li>
    </ul>

    <h2>El detalle que importó</h2>
    <p>
      Agustina tenía ilustraciones en acuarela propias. En vez de usar íconos genéricos,
      se integraron al diseño como fondo de las secciones.
    </p>
    <p>
      Es un detalle chico y es exactamente el punto: un estudio de paisajismo vende gusto
      y criterio estético. Si su web se ve como cualquier plantilla, está contradiciendo
      lo que vende.
    </p>

    <h2>El resultado</h2>
    <p>
      Acacia tiene hoy su obra publicada, ordenada por línea de negocio, y un lugar propio
      que no depende del algoritmo de ninguna red social.
    </p>
    <p>
      ¿Tu trabajo se vende mostrándolo y solo lo tenés en Instagram?{' '}
      <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'acacia-paisajismo',
  title: 'Un estudio de paisajismo que dejó de depender de Instagram',
  description:
    'Acacia Paisajismo diseña y ejecuta jardines en Gran Mendoza. Le construimos el sitio donde su portfolio, su tienda y sus cursos tienen cada uno su lugar.',
  date: '2026-07-21',
  category: 'Casos',
  readTime: 3,
  content: Content,
}
