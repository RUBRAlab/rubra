export const translations = {
  es: {
    nav: {
      blog: 'Blog',
      links: [
        { label: 'Casos', href: '#casos' },
        { label: 'Método', href: '#metodo' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contacto', href: '#contacto' },
      ],
      cta: 'Hablemos',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      scheduleMeeting: 'Agendar reunión',
      langToggle: 'EN',
      langToggleLabel: 'Switch to English',
    },
    meta: {
      title: 'RUBRA lab',
      description: 'Construimos tiendas online, sistemas de gestión y automatización con IA para empresas de Latinoamérica. Alcance y precio cerrado, en producción. Mirá nuestros casos.',
    },
    heroStats: [
      { valor: '12', etiqueta: 'Proyectos en producción' },
      { valor: '2–6', etiqueta: 'Semanas de construcción' },
      { valor: 'USD 1.000', etiqueta: 'Desde', destacado: true },
    ],
    hero: {
      titleParts: ['Nos encargamos de la ', 'tecnología', ' para que vos puedas enfocarte en tu ', 'negocio.'],
      subtitle: 'Creamos las soluciones que necesitás para vender más, organizar mejor tu empresa y automatizar tareas. Hablamos claro, cumplimos lo acordado y entregamos soluciones listas para usar.',
      ctaSchedule: 'Agendar reunión',
      ctaContact: 'Hacer consulta',
    },
    band: {
      partA: 'La mayoría de las empresas no necesita ',
      partAEm: 'más software',
      partB: '.',
      partC: 'Necesita ',
      partCEm: 'el que le falta',
      partD: ', funcionando de verdad y sin depender de nadie para usarlo.',
    },
    clients: {
      heading: 'Confían en nosotros',
    },
    metodo: {
      kicker: 'Cómo trabajamos',
      titleParts: ['Alcance claro.', 'Precio transparente.', 'Sin sorpresas.'],
      steps: [
        {
          tag: '3 a 5 días hábiles',
          title: 'Alcance y precio',
          body: 'Antes de escribir una línea de código, definimos exactamente qué se construye, en cuánto tiempo y a qué precio, desde USD 1.000. Ese número no cambia a mitad de camino.',
        },
        {
          tag: '2 a 6 semanas según alcance',
          title: 'Construcción',
          body: 'Trabajamos por fases entregables, no por una sola entrega al final. Vas viendo el avance real, no una presentación de lo que vamos a hacer.',
        },
        {
          tag: 'Entrega + soporte continuo',
          title: 'En producción',
          body: 'Entregamos lo que se construyó, funcionando de verdad y en manos de tu equipo. Seguimos disponibles para la siguiente fase cuando la necesites.',
        },
      ],
    },
    casos: {
      kicker: 'Lo que construimos',
      titleParts: ['Casos reales,', 'en producción.'],
      verCaso: 'Ver el caso',
      verTodos: 'Ver todos los casos',
      items: [
        {
          slug: 'pintureria-cinco-sucursales',
          rubro: 'Retail · 5 sucursales',
          titulo: 'De vender por mostrador a una tienda online',
          resumen: 'Una pinturería de La Rioja con su catálogo abierto las 24 horas y un panel donde su equipo carga productos y precios sin depender de nadie.',
        },
        {
          slug: 'club-deportivo-cuotas',
          rubro: 'Institución · 86 años',
          titulo: 'Un club que dejó de conciliar cuotas a mano',
          resumen: 'Padrón de socios, pagos online, roles por comisión y avisos por WhatsApp para el Club Deportivo Social Juan A. Pradere.',
        },
        {
          slug: 'portal-b2b-bodega',
          rubro: 'Bodega · Venta mayorista',
          titulo: 'Un portal B2B para dejar de vender por WhatsApp',
          resumen: 'Listas de precios por cliente, pedidos en minutos y seguimiento logístico automático para Desquiciado Wines.',
        },
        {
          slug: 'concil-producto-propio',
          rubro: 'Producto propio · SaaS',
          titulo: 'CONCIL: construimos nuestro propio producto',
          resumen: 'Conciliación bancaria para estudios contables, con suscripciones recurrentes y multi-cuenta. En producción en concil.ar.',
        },
      ],
    },
    testimonios: {
      kicker: 'Lo que dicen',
      titleA: 'En sus ',
      titleEm: 'palabras.',
      items: [
        { cliente: 'Peregrina', frase: 'Agilizamos procesos que nos llevaban horas de trabajo. La diferencia se notó desde el primer día.' },
        { cliente: 'Julia H', frase: 'La capacidad de escucha me impresionó, Rubra supo entender rápidamente lo que necesitaba.' },
        { cliente: 'Deportivo Pradere', frase: 'Más que un proveedor de software, encontramos un socio tecnológico que entiende nuestro negocio.' },
        { cliente: 'Desquiciado Wines', frase: 'Rápidos, profesionales y con una capacidad enorme para simplificar procesos complejos.' },
      ],
    },
    servicios: {
      kicker: 'Qué construimos',
      titleLine1: 'Software a medida.',
      titleLine2: 'Y automatización que trabaja sola.',
      items: [
        { title: 'Tiendas online', body: 'Ecommerce y portales de venta mayorista con catálogo, pedidos y pagos. Tu equipo carga productos y precios sin llamar a nadie.' },
        { title: 'Sistemas de gestión', body: 'Clientes, cobranzas, stock, pedidos. El sistema que tu operación necesita, hecho a la medida de cómo trabajás, no al revés.' },
        { title: 'Automatización con IA', body: 'Las tareas repetitivas que hoy hace una persona, hechas por un agente: cargar datos, responder consultas, cruzar información, avisar.' },
      ],
    },
    faq: {
      kicker: 'Preguntas frecuentes',
      titleA: 'Lo que todos',
      titleEm: 'preguntan.',
      items: [
        {
          pregunta: '¿Cuánto cuesta un proyecto?',
          respuesta: 'Desde USD 1.000. El alcance y el precio quedan cerrados en la propuesta antes de escribir una línea de código, así que ese número no cambia a mitad de camino.',
        },
        {
          pregunta: '¿Cuánto tardan en entregar?',
          respuesta: 'Depende del alcance: trabajamos por fases entregables, no con una sola entrega al final. El cronograma queda definido junto con el precio en la propuesta.',
        },
        {
          pregunta: '¿Cómo usan IA en el desarrollo?',
          respuesta: 'La IA acelera la escritura de código, pero las decisiones de arquitectura, la seguridad y el QA los hace Ruperto directamente. Lo que se entrega está revisado, no es lo primero que generó un modelo.',
        },
        {
          pregunta: '¿Qué pasa después del lanzamiento?',
          respuesta: 'Seguimos disponibles para la siguiente fase. El hosting ronda USD 25/mes y hay soporte opcional desde USD 75/mes si preferís no encargarte vos de mantenerlo.',
        },
        {
          pregunta: '¿Soy dueño del código?',
          respuesta: 'Sí, 100%. No hay dependencia de nuestra plataforma ni licencias por uso: el repositorio y el proyecto quedan a tu nombre.',
        },
        {
          pregunta: '¿Trabajan con empresas fuera de Argentina?',
          respuesta: 'Sí. Trabajamos de forma remota con empresas y founders de toda Latinoamérica.',
        },
      ],
    },
    contact: {
      kicker: 'El siguiente paso',
      intro: 'Contanos qué necesitás construir o qué proceso te está consumiendo el día. El primer paso es un diagnóstico, sin costo y sin compromiso.',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Ej. Juan Pérez',
      companyLabel: 'Empresa / Industria',
      companyPlaceholder: 'Ej. Logística Global',
      processLabel: '¿Qué proceso deseás profesionalizar?',
      processPlaceholder: 'Describí brevemente tu mayor cuello de botella...',
      submit: 'Enviar consulta',
      liveSession: 'Sesión en vivo',
      diagnosisTitle: 'Diagnóstico gratuito',
      diagnosisBody: 'Una sesión de 30 minutos para mapear los cuellos de botella de tu operación y diseñar un plan de acción concreto.',
      scheduleMeeting: 'Agendar reunión →',
      mailSubject: (name: string) => `Consulta de ${name}`,
      mailBody: (name: string, company: string, process: string) => `Nombre: ${name}\nEmpresa: ${company}\n\n${process}`,
    },
    footer: {
      tagline: (year: number) => `© ${year} RUBRA Lab · Software y automatización con IA para empresas.`,
      teamAccess: 'Acceso equipo',
    },
  },
  en: {
    nav: {
      blog: 'Blog',
      links: [
        { label: 'Case studies', href: '#casos' },
        { label: 'Method', href: '#metodo' },
        { label: 'Services', href: '#servicios' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contacto' },
      ],
      cta: "Let's talk",
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      scheduleMeeting: 'Book a meeting',
      langToggle: 'ES',
      langToggleLabel: 'Cambiar a español',
    },
    meta: {
      title: 'RUBRA lab',
      description: 'We build online stores, management systems and AI automation for Latin American companies. Fixed scope and price, live in production. Check out our case studies.',
    },
    heroStats: [
      { valor: '12', etiqueta: 'Projects in production' },
      { valor: '2–6', etiqueta: 'Weeks to build' },
      { valor: 'USD 1,000', etiqueta: 'Starting at', destacado: true },
    ],
    hero: {
      titleParts: ['We handle the ', 'technology', ' so you can focus on your ', 'business.'],
      subtitle: 'We build the solutions you need to sell more, run your company better and automate tasks. We talk straight, deliver what we agree on, and ship solutions ready to use.',
      ctaSchedule: 'Book a meeting',
      ctaContact: 'Get in touch',
    },
    band: {
      partA: 'Most companies don’t need ',
      partAEm: 'more software',
      partB: '.',
      partC: 'They need ',
      partCEm: 'the piece that’s missing',
      partD: ', actually working, without depending on anyone to use it.',
    },
    clients: {
      heading: 'Trusted by',
    },
    metodo: {
      kicker: 'How we work',
      titleParts: ['Clear scope.', 'Transparent price.', 'No surprises.'],
      steps: [
        {
          tag: '3 to 5 business days',
          title: 'Scope and price',
          body: 'Before writing a line of code, we define exactly what gets built, in how long, and at what price, starting at USD 1,000. That number doesn’t change halfway through.',
        },
        {
          tag: '2 to 6 weeks depending on scope',
          title: 'Build',
          body: 'We work in deliverable phases, not one single delivery at the end. You see real progress, not a presentation of what we’re going to do.',
        },
        {
          tag: 'Delivery + ongoing support',
          title: 'In production',
          body: 'We hand off what was built, actually working and in your team’s hands. We stay available for the next phase whenever you need it.',
        },
      ],
    },
    casos: {
      kicker: 'What we build',
      titleParts: ['Real case studies,', 'in production.'],
      verCaso: 'View case study',
      verTodos: 'View all case studies',
      items: [
        {
          slug: 'pintureria-cinco-sucursales',
          rubro: 'Retail · 5 stores',
          titulo: 'From counter sales to an online store',
          resumen: 'A paint store in La Rioja with its catalog open 24/7 and a panel where its team manages products and prices without depending on anyone.',
        },
        {
          slug: 'club-deportivo-cuotas',
          rubro: 'Institution · 86 years',
          titulo: 'A club that stopped reconciling dues by hand',
          resumen: 'Member registry, online payments, board-role permissions and WhatsApp notifications for Club Deportivo Social Juan A. Pradere.',
        },
        {
          slug: 'portal-b2b-bodega',
          rubro: 'Winery · Wholesale',
          titulo: 'A B2B portal to stop selling over WhatsApp',
          resumen: 'Customer-specific price lists, orders placed in minutes and automatic logistics tracking for Desquiciado Wines.',
        },
        {
          slug: 'concil-producto-propio',
          rubro: 'Our own product · SaaS',
          titulo: 'CONCIL: we built our own product',
          resumen: 'Bank reconciliation for accounting firms, with recurring subscriptions and multi-account support. Live in production at concil.ar.',
        },
      ],
    },
    testimonios: {
      kicker: 'What they say',
      titleA: 'In their ',
      titleEm: 'own words.',
      items: [
        { cliente: 'Peregrina', frase: 'We sped up processes that used to take us hours. The difference showed from day one.' },
        { cliente: 'Julia H', frase: 'What impressed me was how well they listened — Rubra quickly understood what I needed.' },
        { cliente: 'Deportivo Pradere', frase: 'More than a software vendor, we found a technology partner that understands our business.' },
        { cliente: 'Desquiciado Wines', frase: 'Fast, professional, with a huge capacity to simplify complex processes.' },
      ],
    },
    servicios: {
      kicker: 'What we build',
      titleLine1: 'Custom software.',
      titleLine2: 'And automation that runs itself.',
      items: [
        { title: 'Online stores', body: 'Ecommerce and wholesale portals with catalog, orders and payments. Your team manages products and prices without calling anyone.' },
        { title: 'Management systems', body: 'Customers, billing, stock, orders. The system your operation needs, built around how you work, not the other way around.' },
        { title: 'AI automation', body: 'The repetitive tasks a person does today, done by an agent: loading data, answering queries, cross-checking information, sending alerts.' },
      ],
    },
    faq: {
      kicker: 'Frequently asked questions',
      titleA: 'What everyone',
      titleEm: 'asks.',
      items: [
        {
          pregunta: 'How much does a project cost?',
          respuesta: 'Starting at USD 1,000. Scope and price are locked in the proposal before we write a single line of code, so that number doesn’t change halfway through.',
        },
        {
          pregunta: 'How long does delivery take?',
          respuesta: 'It depends on the scope: we work in deliverable phases, not a single delivery at the end. The timeline is defined together with the price in the proposal.',
        },
        {
          pregunta: 'How do you use AI in development?',
          respuesta: 'AI speeds up writing code, but architecture decisions, security and QA are handled directly by Ruperto. What gets delivered has been reviewed — it’s not the first thing a model generated.',
        },
        {
          pregunta: 'What happens after launch?',
          respuesta: 'We stay available for the next phase. Hosting runs about USD 25/month, with optional support starting at USD 75/month if you’d rather not maintain it yourself.',
        },
        {
          pregunta: 'Do I own the code?',
          respuesta: 'Yes, 100%. There’s no dependency on our platform and no usage licenses: the repository and the project are in your name.',
        },
        {
          pregunta: 'Do you work with companies outside Argentina?',
          respuesta: 'Yes. We work remotely with companies and founders across all of Latin America.',
        },
      ],
    },
    contact: {
      kicker: 'Next step',
      intro: 'Tell us what you need to build or which process is eating up your day. The first step is a free, no-commitment diagnosis.',
      nameLabel: 'Full name',
      namePlaceholder: 'E.g. John Smith',
      companyLabel: 'Company / Industry',
      companyPlaceholder: 'E.g. Global Logistics',
      processLabel: 'What process would you like to professionalize?',
      processPlaceholder: 'Briefly describe your biggest bottleneck...',
      submit: 'Send inquiry',
      liveSession: 'Live session',
      diagnosisTitle: 'Free diagnosis',
      diagnosisBody: 'A 30-minute session to map out your operation’s bottlenecks and design a concrete action plan.',
      scheduleMeeting: 'Book a meeting →',
      mailSubject: (name: string) => `Inquiry from ${name}`,
      mailBody: (name: string, company: string, process: string) => `Name: ${name}\nCompany: ${company}\n\n${process}`,
    },
    footer: {
      tagline: (year: number) => `© ${year} RUBRA Lab · Software and AI automation for businesses.`,
      teamAccess: 'Team access',
    },
  },
} as const;

export type Translations = typeof translations['es'];
