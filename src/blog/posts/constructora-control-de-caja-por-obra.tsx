import { BlogPost } from '../types'

const Content = () => (
  <article>
    <p>
      Una constructora de Mendoza maneja varias obras al mismo tiempo, cada una con su
      presupuesto, su gente comprando materiales y su plata moviéndose entre cuentas en
      pesos y en dólares. La caja de todo eso se llevaba en dos apps distintas que no se
      hablaban entre sí, más una planilla aparte para lo fiscal.
    </p>
    <p>
      Cada comprador anotaba lo que gastaba por su cuenta. El tesorero se enteraba tarde,
      o no se enteraba, de qué se había cargado contra qué obra. Y cuando el contador
      necesitaba el detalle de un mes para la presentación, había que cruzar dos fuentes
      a mano y esperar que coincidieran.
    </p>

    <h2>El problema no era la plata, era el proceso</h2>
    <p>
      Nadie estaba robando ni escondiendo nada. El problema era que no existía un único
      lugar donde un gasto quedara cargado, revisado y aprobado antes de darlo por firme.
      Cualquiera podía anotar cualquier cosa, y nadie tenía forma simple de saber si el
      presupuesto de una obra ya se había pasado o cuánto quedaba disponible.
    </p>

    <h2>Qué construimos</h2>
    <ul>
      <li>
        <strong>Un flujo de aprobación real</strong>: el comprador carga el movimiento con
        su comprobante (foto sacada desde la obra), el tesorero lo aprueba o lo rechaza con
        motivo. Nada queda en firme sin ese paso.
      </li>
      <li>
        <strong>Billeteras bimonetarias</strong>: cada cuenta maneja pesos y dólares a la
        vez, con el saldo calculado siempre en el momento — nunca un número guardado que se
        pueda desactualizar.
      </li>
      <li>
        <strong>Presupuesto por obra y por rubro</strong>, con lo comprometido y lo pagado
        separados: se ve de un vistazo si una obra se está yendo de presupuesto antes de
        que sea tarde.
      </li>
      <li>
        <strong>Una vista curada para el contador</strong>: exporta los comprobantes del
        período que necesita, ya armados, sin tener que pedirle nada a nadie.
      </li>
      <li>
        <strong>Todo pensado para cargarse desde el celular</strong>, porque el comprador
        que saca la foto del comprobante está parado en la obra, no en una oficina.
      </li>
    </ul>

    <h2>La decisión técnica</h2>
    <p>
      El sistema anterior tenía años de historia adentro — miles de movimientos que la
      constructora necesitaba conservar, no perder en una migración a cero. Se reusó ese
      modelo de datos como punto de partida y se migró el historial completo a la base
      nueva, así el equipo no pierde ni un movimiento viejo al cambiar de sistema.
    </p>

    <h2>Dónde está hoy</h2>
    <p>
      El sistema está en producción, con el historial migrado y el flujo de aprobación
      funcionando de punta a punta. El equipo está terminando de sumar a todos los
      compradores y al contador antes de dejar de usar las apps viejas en paralelo.
    </p>
    <p>
      ¿Manejás varias obras o sucursales y la plata se controla a mano, en planillas que
      no se hablan entre sí? <a href="mailto:hola@rubra.ar">Escribinos</a>.
    </p>
  </article>
)

const ContentEn = () => (
  <article>
    <p>
      A construction company in Mendoza, Argentina runs several job sites at once, each
      with its own budget, its own people buying materials, and its own money moving
      between accounts in pesos and dollars. All of that cash flow lived in two different
      apps that didn't talk to each other, plus a separate spreadsheet for tax records.
    </p>
    <p>
      Each buyer logged their own spending independently. The treasurer found out late -
      or never found out - what had been charged against which job. And when the
      accountant needed a month's detail for a filing, someone had to cross-check two
      sources by hand and hope they matched.
    </p>

    <h2>The problem wasn't the money, it was the process</h2>
    <p>
      Nobody was stealing or hiding anything. The problem was that there was no single
      place where an expense got logged, reviewed, and approved before being treated as
      final. Anyone could log anything, and nobody had a simple way to know if a job's
      budget had already been exceeded or how much was left.
    </p>

    <h2>What we built</h2>
    <ul>
      <li>
        <strong>A real approval workflow</strong>: the buyer logs the expense with a
        receipt (photo taken on site), the treasurer approves or rejects it with a
        reason. Nothing counts as final without that step.
      </li>
      <li>
        <strong>Dual-currency accounts</strong>: every account holds pesos and dollars at
        once, with the balance calculated on the fly - never a stored number that can
        drift out of date.
      </li>
      <li>
        <strong>Budget by job site and by category</strong>, with committed and paid
        amounts tracked separately: it's clear at a glance whether a job is running over
        budget before it's too late.
      </li>
      <li>
        <strong>A dedicated view for the accountant</strong>: exports the period's
        receipts, already formatted, without having to ask anyone for anything.
      </li>
      <li>
        <strong>Built mobile-first</strong>, because the buyer photographing a receipt is
        standing on a job site, not sitting at a desk.
      </li>
    </ul>

    <h2>The technical decision</h2>
    <p>
      The previous system held years of history - thousands of transactions the company
      needed to keep, not lose in a clean-slate migration. We reused that data model as a
      starting point and migrated the full history into the new database, so the team
      doesn't lose a single old transaction in the switch.
    </p>

    <h2>Where it stands today</h2>
    <p>
      The system is live in production, with the historical data migrated and the
      approval workflow running end to end. The team is finishing onboarding every buyer
      and the accountant before retiring the old apps for good.
    </p>
    <p>
      Do you run several job sites or branches with money tracked by hand, in
      spreadsheets that don't talk to each other?{' '}
      <a href="mailto:hola@rubra.ar">Get in touch</a>.
    </p>
  </article>
)

export const post: BlogPost = {
  slug: 'constructora-control-de-caja-por-obra',
  title: 'De anotar la caja de cada obra a mano a un control con aprobación en tiempo real',
  title_en: 'From tracking each job site\'s cash by hand to real-time approval control',
  description:
    'Una constructora manejaba la caja de sus obras en dos apps que no se hablaban. Le construimos un sistema con billeteras bimonetarias, presupuesto por obra y flujo de aprobación comprador→tesorero.',
  description_en:
    'A construction company tracked its job sites\' cash across two apps that didn\'t talk to each other. We built them a system with dual-currency accounts, per-job budgets, and a buyer-to-treasurer approval workflow.',
  date: '2026-09-18',
  category: 'Casos',
  category_en: 'Case study',
  readTime: 3,
  content: Content,
  content_en: ContentEn,
}
