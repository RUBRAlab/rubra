/**
 * Landing de RUBRA lab. Todo en un archivo a propósito: nav, hero, secciones,
 * formulario y footer se leen de corrido y no hay que saltar entre archivos.
 *
 * La página tiene dos mitades: la de arriba sobre lienzo claro (hero, clientes,
 * pantallas, servicios, casos) y, después del horizonte, una zona oscura de
 * punta a punta (tesis, método, testimonios, FAQ, contacto, footer).
 */
import { useEffect, useRef, useState, type Key, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { track } from '@vercel/analytics';
import heroImage from './assets/images/ruperto.webp';
import logoBlueSky from './assets/images/clients/bluesky.webp';
import logoConcil from './assets/images/clients/concil.webp';
import logoDeportivoPradere from './assets/images/clients/deportivo-pradere.webp';
import logoHayZonda from './assets/images/clients/hayzonda.webp';
import logoJuliaH from './assets/images/clients/juliah.webp';
import logoLaEspanola from './assets/images/clients/la-espanola.webp';
import logoMG from './assets/images/clients/mg-estrategia.webp';
import logoPalomarMarin from './assets/images/clients/palomar-marin.webp';
import logoPeregrina from './assets/images/clients/peregrina.webp';
import logoPulsoWines from './assets/images/clients/pulso-wines.webp';
import logoDesquiciado from './assets/images/clients/desquiciado.webp';
import logoAcacia from './assets/images/clients/acacia.webp';
import { PantallasStrip } from './components/PantallasStrip';
import { Telefono, Ventana } from './components/Mockup';
import svcTienda from './assets/images/pantallas/genial-catalogo.webp';
import svcGestion from './assets/images/pantallas/flowpyme-dashboard.webp';
import svcAutomatizacion from './assets/images/pantallas/flowpyme-importacion.webp';
import phonePedido from './assets/images/pantallas/desq-pedido.webp';
import phoneCatalogo from './assets/images/pantallas/desq-catalogo.webp';
import phoneClubar from './assets/images/pantallas/clubar-landing.webp';
import { usePageMeta } from './hooks/usePageMeta';
import { useLanguage } from './i18n/LanguageContext';
import { translations } from './i18n/translations';
import { Isotipo, Wordmark } from './components/Brand';
import { CasoVisual } from './components/CasoPreview';
import { SiteFooter, WhatsAppFloatingButton } from './components/SiteFooter';
import { CALENDAR_URL, buildWhatsappLink } from './config';
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Store,
  LayoutDashboard,
  Bot,
  Sparkles,
  Clock,
  BadgeDollarSign,
} from 'lucide-react';

const CLIENTS = [
  { name: 'Blue Sky', logo: logoBlueSky, url: 'https://www.blueskysa.com.ar', caso: null },
  { name: 'Concil', logo: logoConcil, url: 'https://www.concil.ar', caso: 'concil-producto-propio' },
  { name: 'Deportivo Pradere', logo: logoDeportivoPradere, url: 'https://www.deportivopradere.com.ar', caso: 'club-deportivo-cuotas' },
  { name: 'Hay Zonda', logo: logoHayZonda, url: 'https://www.hayzonda.ar', caso: null },
  { name: 'Julia H', logo: logoJuliaH, url: 'https://www.juliah.com.ar', caso: null },
  { name: 'Pinturerías La Española', logo: logoLaEspanola, url: 'https://www.pintureriaslaespanola.com.ar', caso: 'pintureria-cinco-sucursales' },
  { name: 'MG Estrategia Pyme', logo: logoMG, url: 'https://www.mgestrategiapyme.com.ar', caso: null },
  { name: 'Palomar Marín', logo: logoPalomarMarin, url: 'https://www.palomarmarin.com.ar', caso: 'palomar-marin-ingenieria' },
  { name: 'Peregrina', logo: logoPeregrina, url: 'https://www.peregrina.com.ar', caso: null },
  { name: 'Pulso Wines', logo: logoPulsoWines, url: 'https://www.pulsowines.com.ar', caso: null },
  { name: 'Desquiciado', logo: logoDesquiciado, url: 'https://desquiciado.com', caso: 'portal-b2b-bodega' },
  { name: 'Acacia Paisajismo', logo: logoAcacia, url: null, caso: 'acacia-paisajismo' },
];

const LOGO_BY_NAME: Record<string, string> = Object.fromEntries(
  CLIENTS.map((c) => [c.name, c.logo])
);

const SERVICE_ICONS = [Store, LayoutDashboard, Bot];

// Mismo orden que SERVICE_ICONS y que t.servicios.items.
const SERVICE_SHOTS = [svcTienda, svcGestion, svcAutomatizacion];

// Mismo orden que t.heroStats.
const STAT_ICONS = [Sparkles, Clock, BadgeDollarSign];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** true desde md (768px). Arranca en false para que el prerender no asuma desktop. */
const useIsDesktop = () => {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return desktop;
};

/** Entrada al scroll: aparece una sola vez, desde abajo y con fade. */
const Reveal = ({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: Key;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease: EASE_OUT }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Etiqueta chica sobre los títulos de sección. */
const Kicker = ({ children, tono = 'claro' }: { children: ReactNode; tono?: 'claro' | 'oscuro' }) => (
  <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${tono === 'oscuro' ? 'text-green-400' : 'text-green-600'}`}>
    {children}
  </p>
);

/**
 * Mockup del hero. Arranca inclinado hacia atrás y se endereza a medida que
 * se scrollea, como una pantalla que se levanta. Alrededor flotan los stats.
 */
const HeroMockup = ({
  stats,
}: {
  stats: readonly { valor: string; etiqueta: string; destacado?: boolean }[];
}) => {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const progress = useSpring(useTransform(scrollY, [0, 520], [0, 1]), { stiffness: 120, damping: 24, mass: 0.4 });
  const rotateX = useTransform(progress, [0, 1], [reduced ? 0 : 24, 0]);
  const scale = useTransform(progress, [0, 1], [reduced ? 1 : 1.06, 1]);
  const fade = useTransform(progress, [0, 1], [reduced ? 0 : 0.9, 0]);
  const glowScale = useTransform(progress, [0, 1], [1.25, 0.95]);
  // Las pills se mueven más rápido que la página: eso es lo que las despega del fondo.
  const pillY = useTransform(scrollY, [0, 600], [0, -70]);

  return (
    <div className="relative max-w-5xl mx-auto mt-14 md:mt-16" style={{ perspective: 1400 }}>
      <motion.div
        style={{ scale: glowScale }}
        className="glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[110%] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 56 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
        style={{ rotateX, scale, transformOrigin: '50% 100%' }}
        className="relative"
      >
        <Ventana tono="oscuro" dominio="app.flowpyme.com.ar" className="shadow-2xl shadow-black/25 ring-1 ring-black/5">
          <img
            src={svcGestion}
            alt="Dashboard de flujo de fondos — Flowpyme"
            width={1200}
            height={750}
            className="w-full aspect-[16/10] md:aspect-[16/9] object-cover object-top"
          />
        </Ventana>
        {/* Velo que se levanta: mientras está inclinado, el borde de abajo se funde con el fondo. */}
        <motion.div
          style={{ opacity: fade }}
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-canvas via-canvas/70 to-transparent pointer-events-none rounded-b-2xl"
          aria-hidden="true"
        />
      </motion.div>

      {/* Stats flotando alrededor del mockup (solo desktop; en mobile van en fila) */}
      <motion.div style={{ y: pillY }} className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {stats.map((stat, i) => {
          const Icon = STAT_ICONS[i];
          const pos = [
            'left-0 top-[12%] -translate-x-1/3',
            'right-0 top-[38%] translate-x-1/3',
            'left-[6%] bottom-[10%] -translate-x-1/4',
          ][i];
          const dark = i === 2;
          return (
            <motion.div
              key={stat.etiqueta}
              initial={{ opacity: 0, scale: 0.8, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.7 + i * 0.15 }}
              className={`absolute ${pos}`}
            >
              <motion.div
                animate={reduced ? undefined : { y: [0, -9, 0] }}
                transition={{ duration: 4.5 + i, repeat: Infinity, ease: 'easeInOut' }}
                className={`flex items-center gap-3 rounded-full pl-2 pr-5 py-2 shadow-xl ${
                  dark ? 'bg-ink text-white shadow-black/25' : 'bg-white text-ink shadow-black/10 border border-stone-200'
                }`}
              >
                <span className={`w-9 h-9 rounded-full flex items-center justify-center ${dark ? 'bg-green-400 text-green-950' : 'bg-green-500/10 text-green-700'}`}>
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-lg font-semibold tracking-tight tabular-nums">{stat.valor}</span>
                  <span className={`text-[0.6rem] font-semibold uppercase tracking-widest mt-1 ${dark ? 'text-stone-400' : 'text-stone-500'}`}>
                    {stat.etiqueta}
                  </span>
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

/**
 * Bloque de texto de un servicio. Avisa cuando queda centrado en el viewport
 * para que el mockup clavado a la derecha cambie de pantalla.
 */
const ServicioTexto = ({
  index,
  title,
  body,
  onActive,
}: {
  index: number;
  title: string;
  body: string;
  onActive: (i: number) => void;
  key?: Key;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });
  const Icon = SERVICE_ICONS[index];

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div ref={ref} className="min-h-[60vh] flex flex-col justify-center py-10">
      <div className="w-12 h-12 rounded-2xl bg-ink text-green-400 flex items-center justify-center mb-8">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-ink mb-5 leading-[1.05]">
        {title}
      </h3>
      <p className="text-lg text-stone-600 leading-relaxed max-w-md">{body}</p>
    </div>
  );
};

/**
 * Horizonte: la curva negra con borde verde que sube desde abajo y abre la
 * zona oscura. Se mueve con el scroll para que parezca que asoma.
 */
const Horizonte = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 160, reduced ? 0 : -40]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.6]);

  return (
    <div ref={ref} className="relative h-[220px] md:h-[360px] overflow-hidden bg-canvas" aria-hidden="true">
      <motion.div style={{ y }} className="absolute left-1/2 top-[38%] -translate-x-1/2 w-[150vw] md:w-[180vw]">
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-x-[10%] -top-10 h-40 rounded-[50%] bg-green-500/60 blur-3xl"
        />
        <div className="relative w-full aspect-[2/1] rounded-[50%] bg-ink shadow-[0_-24px_90px_6px_rgba(34,197,94,0.45)]" />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-ink" />
    </div>
  );
};

/**
 * Tesis del sitio sobre fondo negro, con tres teléfonos que se abren en
 * abanico a medida que entran en pantalla.
 */
const Tesis = ({ t }: { t: (typeof translations)['es']['band'] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const desktop = useIsDesktop();
  const spread = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  // En mobile el abanico se cierra: con ±170px los teléfonos de los costados quedan afuera.
  const dx = desktop ? 170 : 100;
  const xL = useTransform(spread, [0, 1], [0, -dx]);
  const xR = useTransform(spread, [0, 1], [0, dx]);
  const rL = useTransform(spread, [0, 1], [0, desktop ? -12 : -9]);
  const rR = useTransform(spread, [0, 1], [0, desktop ? 12 : 9]);
  const yS = useTransform(spread, [0, 1], [0, 28]);
  const titleY = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 60, 0]);
  const phones = [phoneCatalogo, phonePedido, phoneClubar];

  return (
    <section className="bg-ink px-6 md:px-12 pt-8 md:pt-16 pb-10 md:pb-32 relative overflow-hidden">
      <div className="glow absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] opacity-60 pointer-events-none" aria-hidden="true" />
      <motion.div style={{ y: titleY }} className="relative max-w-5xl mx-auto text-center">
        <p className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[1.08] text-white">
          {t.partA}<span className="text-green-400">{t.partAEm}</span>{t.partB}<br className="hidden md:block" />
          {t.partC}<span className="text-green-400">{t.partCEm}</span>{t.partD}
        </p>
      </motion.div>

      <div ref={ref} className="relative mx-auto mt-12 md:mt-20 h-[360px] md:h-[560px] w-full max-w-3xl" style={{ perspective: 1200 }}>
        {phones.map((src, i) => {
          const x = i === 0 ? xL : i === 2 ? xR : 0;
          const rotate = i === 0 ? rL : i === 2 ? rR : 0;
          const y = i === 1 ? 0 : yS;
          return (
            <motion.div
              key={src}
              style={{ x, rotate, y, zIndex: i === 1 ? 2 : 1, transformOrigin: '50% 100%' }}
              className="absolute left-1/2 top-0 -translate-x-1/2 w-[170px] md:w-[250px] shadow-2xl shadow-black/60 rounded-[1.75rem]"
            >
              <Telefono>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={540}
                  height={1170}
                  className="w-full aspect-[9/19.5] object-cover object-top"
                />
              </Telefono>
            </motion.div>
          );
        })}
        {/* Fundido hacia el negro para que los teléfonos no terminen a filo */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
};

type Testimonio = (typeof translations)['es']['testimonios']['items'][number];

const TestimonioCard = ({ testimonio, verCaso }: { testimonio: Testimonio; verCaso: string; key?: Key }) => {
  const { lp } = useLanguage();
  return (
    <blockquote className="w-[320px] md:w-[400px] shrink-0 flex flex-col bg-ink-2 rounded-3xl p-7 border border-white/[0.06]">
      <span className="font-display text-3xl leading-none text-green-400 mb-4" aria-hidden="true">“</span>
      <p className="text-base md:text-lg text-white leading-relaxed mb-7 font-medium tracking-tight">
        {testimonio.frase}
      </p>
      <footer className="mt-auto flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
          <img src={LOGO_BY_NAME[testimonio.logo]} alt="" loading="lazy" decoding="async" className="h-5 max-w-[30px] object-contain" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white truncate">{testimonio.cliente}</p>
          {testimonio.caso && (
            <Link to={lp(`/casos/${testimonio.caso}`)} className="text-xs text-stone-400 hover:text-green-400 transition-colors inline-flex items-center gap-1">
              {verCaso}
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      </footer>
    </blockquote>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [servicioActivo, setServicioActivo] = useState(0);
  const { language, toggleLanguage, lp } = useLanguage();
  const t = translations[language];

  usePageMeta({
    title: t.meta.title,
    description: t.meta.description,
    path: '/',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Con el menú abierto el fondo no debe scrollear detrás del panel.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  const primaryBtn =
    'inline-flex items-center justify-center gap-2 bg-ink text-white px-7 py-4 rounded-full font-medium hover:bg-ink-2 transition-colors group';
  const ghostBtn =
    'inline-flex items-center justify-center gap-2 bg-white text-ink px-7 py-4 rounded-full font-medium border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors';

  // Dos filas de testimonios: la segunda arranca desde otro punto para que no
  // se vean las mismas tarjetas alineadas.
  const filaA = [...t.testimonios.items, ...t.testimonios.items];
  const filaB = [...filaA.slice(2), ...filaA.slice(0, 2)];

  return (
    <div className="min-h-screen bg-canvas overflow-x-clip selection:bg-ink selection:text-white relative">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 ${
          isScrolled ? 'bg-canvas/80 backdrop-blur-md border-b border-stone-200/80 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5" aria-label="RUBRA lab">
            <Isotipo className="w-7 h-7 md:w-8 md:h-8 shrink-0 text-ink" />
            <Wordmark dark size="sm" />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {t.nav.links.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">
                {item.label}
              </a>
            ))}
            <Link to={lp('/blog')} className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">
              {t.nav.blog}
            </Link>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.nav.langToggleLabel}
              className="w-9 h-9 rounded-full border border-stone-200 text-xs font-semibold text-stone-700 flex items-center justify-center hover:bg-white transition-colors"
            >
              {t.nav.langToggle}
            </button>
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-ink text-white hover:bg-ink-2 transition-colors flex items-center gap-2 group shadow-lg shadow-black/10"
            >
              {t.nav.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              className="text-ink"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div data-lenis-prevent className="fixed inset-0 z-40 bg-canvas pt-24 px-6 pb-10 overflow-y-auto md:hidden">
          <div className="flex flex-col gap-5">
            {t.nav.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-2xl font-display font-medium tracking-tight text-ink border-b border-stone-200 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              to={lp('/blog')}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-medium tracking-tight text-ink border-b border-stone-200 pb-4"
            >
              {t.nav.blog}
            </Link>

            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-ink text-white px-6 py-4 rounded-full text-center text-lg font-medium hover:bg-ink-2 transition-colors mt-2 flex items-center justify-center gap-2"
            >
              {t.nav.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={buildWhatsappLink(t.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { track('whatsapp_click', { origin: 'mobile_nav' }); setMobileMenuOpen(false); }}
              className="border border-stone-200 bg-white text-ink px-6 py-4 rounded-full text-center text-lg font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t.whatsapp.label}
            </a>

            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.nav.langToggleLabel}
              className="self-start mt-2 px-4 py-2 rounded-full border border-stone-200 text-sm font-semibold text-stone-700"
            >
              {t.nav.langToggle}
            </button>
          </div>
        </div>
      )}

      <main className="relative z-10 block">
        {/* Hero */}
        <section className="relative pt-36 pb-10 md:pt-44 md:pb-16 px-6 md:px-12">
          {/* El contenido del primer pantallazo no se anima desde opacity:0:
              si el JS tarda, el visitante se queda mirando un hero vacío. */}
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-600/20 bg-green-500/10 px-3.5 py-1.5 text-[0.7rem] md:text-xs font-semibold uppercase tracking-widest text-green-700 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {t.hero.badge}
              {/* El país se esconde en mobile: a 375px el badge no entra en una línea. */}
              <span className="hidden sm:inline"> · {t.hero.badgeSuffix}</span>
            </span>
            <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-ink mb-7">
              {t.hero.titleLine1}<br />
              <span className="text-green-600">{t.hero.titleLine2}</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('schedule_click', { origin: 'hero' })}
                className={`${primaryBtn} shadow-xl shadow-black/15`}
              >
                {t.hero.ctaSchedule}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={buildWhatsappLink(t.whatsapp.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('whatsapp_click', { origin: 'hero' })}
                className={ghostBtn}
              >
                <MessageCircle className="w-5 h-5" />
                {t.hero.ctaContact}
              </a>
            </div>

            {/* Prueba social bajo los CTAs: logos apilados + una línea */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="flex -space-x-2.5">
                {CLIENTS.slice(0, 6).map((client) => (
                  <span key={client.name} className="w-10 h-10 rounded-full bg-white border-2 border-canvas shadow-sm flex items-center justify-center overflow-hidden" title={client.name}>
                    <img src={client.logo} alt="" className="h-5 max-w-[30px] object-contain grayscale" />
                  </span>
                ))}
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-stone-500">{t.hero.trust}</p>
            </div>

            {/* Stats en fila: solo mobile. En desktop flotan alrededor del mockup. */}
            <div className="mt-10 grid grid-cols-3 gap-3 md:hidden">
              {t.heroStats.map((stat) => (
                <div key={stat.etiqueta} className="flex flex-col items-center text-center">
                  <p className={`font-display text-xl font-semibold tracking-tight tabular-nums whitespace-nowrap ${stat.destacado ? 'text-green-600' : 'text-ink'}`}>
                    {stat.valor}
                  </p>
                  <p className="text-[0.6rem] font-medium uppercase tracking-widest text-stone-500 mt-1">
                    {stat.etiqueta}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <HeroMockup stats={t.heroStats} />
        </section>

        {/* Clientes: grilla de logos con peso propio */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-10 md:mb-12">
              <Kicker>{t.clients.kicker}</Kicker>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-ink leading-[1.05]">
                {t.clients.heading}
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {CLIENTS.map((client, i) => {
                const img = (
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                    className="h-11 md:h-14 max-w-[150px] object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                );
                const cls =
                  'group flex items-center justify-center h-28 md:h-32 rounded-2xl bg-white border border-stone-200 px-6 transition-all duration-300 hover:border-stone-300 hover:shadow-lg hover:shadow-black/[0.05] hover:-translate-y-0.5';
                // Si el cliente tiene caso publicado, el logo lleva al caso:
                // mandarlo al sitio del cliente lo saca de rubra.ar.
                const inner = client.caso ? (
                  <Link to={lp(`/casos/${client.caso}`)} className={cls} title={client.name}>{img}</Link>
                ) : client.url ? (
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className={cls} title={client.name}>{img}</a>
                ) : (
                  <div className={cls} title={client.name}>{img}</div>
                );
                return (
                  <Reveal key={client.name} delay={(i % 6) * 0.06}>
                    {inner}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Franja de pantallas: hace visible el "+29 proyectos" del hero */}
        <PantallasStrip kicker={t.pantallas.kicker} titulo={t.pantallas.titulo} cta={t.pantallas.cta} />

        {/* Servicios: el mockup queda clavado mientras pasan los tres textos */}
        <section className="py-16 md:py-24 px-6 md:px-12 relative z-10" id="servicios">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-10 md:mb-16">
              <Kicker>{t.servicios.kicker}</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-ink max-w-3xl leading-[1.02]">
                {t.servicios.titleLine1}<br />{t.servicios.titleLine2}
              </h2>
            </Reveal>

            {/* Desktop: scrollytelling */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
              <div>
                {t.servicios.items.map((item, i) => (
                  <ServicioTexto key={item.title} index={i} title={item.title} body={item.body} onActive={setServicioActivo} />
                ))}
              </div>
              <div className="sticky top-28 h-[calc(100vh-7rem)] flex items-center">
                <div className="relative w-full">
                  <div className="glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] pointer-events-none" aria-hidden="true" />
                  <Ventana tono="oscuro" className="relative shadow-2xl shadow-black/25">
                    <div className="relative aspect-[16/10] bg-ink-2">
                      <AnimatePresence initial={false}>
                        <motion.img
                          key={servicioActivo}
                          src={SERVICE_SHOTS[servicioActivo]}
                          alt={t.servicios.items[servicioActivo].title}
                          width={1200}
                          height={750}
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE_OUT }}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                      </AnimatePresence>
                    </div>
                  </Ventana>
                  <div className="mt-6 flex items-center justify-center gap-2" aria-hidden="true">
                    {t.servicios.items.map((item, i) => (
                      <span
                        key={item.title}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === servicioActivo ? 'w-8 bg-ink' : 'w-1.5 bg-stone-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile y tablet: tarjetas apiladas, cada una con su pantalla */}
            <div className="grid gap-5 lg:hidden">
              {t.servicios.items.map((item, i) => {
                const Icon = SERVICE_ICONS[i];
                return (
                  <Reveal key={item.title} delay={i * 0.05}>
                    <div className="bg-white rounded-[2rem] border border-stone-200 p-7 md:p-9 flex flex-col">
                      <div className="w-11 h-11 rounded-2xl bg-ink text-green-400 flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-3">{item.title}</h3>
                      <p className="text-stone-600 leading-relaxed mb-7">{item.body}</p>
                      <Ventana tono="oscuro" className="mt-auto">
                        <img
                          src={SERVICE_SHOTS[i]}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          width={1200}
                          height={750}
                          className="w-full aspect-[16/10] object-cover object-top"
                        />
                      </Ventana>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Casos */}
        <section className="py-16 md:py-24 px-6 md:px-12 relative z-10" id="casos">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-12 md:mb-16 flex flex-wrap items-end justify-between gap-6">
              <div>
                <Kicker>{t.casos.kicker}</Kicker>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-ink max-w-2xl leading-[1.02]">
                  {t.casos.titleParts[0]}<br />{t.casos.titleParts[1]}
                </h2>
              </div>
              <Link to={lp('/casos')} className={ghostBtn}>
                {t.casos.verTodos} <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {t.casos.items.map((caso, i) => (
                <Reveal key={caso.slug} delay={(i % 2) * 0.08}>
                  <Link
                    to={lp(`/casos/${caso.slug}`)}
                    className="group flex flex-col h-full bg-white rounded-[2rem] p-6 md:p-8 border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <CasoVisual slug={caso.slug} alt={caso.titulo} />
                    <p className="text-[0.7rem] font-semibold tracking-widest text-green-600 uppercase mb-3">
                      {caso.rubro}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-3 leading-tight">
                      {caso.titulo}
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {caso.resumen}
                    </p>
                    <p className="text-sm text-stone-500 mb-6 mt-auto pt-4 border-t border-stone-200">
                      {caso.entregable}
                    </p>
                    <span className="inline-flex items-center gap-2 text-ink font-medium">
                      {t.casos.verCaso}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Zona oscura ——— */}
        <Horizonte />

        <Tesis t={t.band} />

        {/* Método */}
        <section className="bg-ink py-16 md:py-24 px-6 md:px-12 relative z-10" id="metodo">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-14 md:mb-20 text-center max-w-3xl mx-auto">
              <Kicker tono="oscuro">{t.metodo.kicker}</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-white leading-[1.02]">
                {t.metodo.titleParts[0]} {t.metodo.titleParts[1]}<br /><span className="text-green-400">{t.metodo.titleParts[2]}</span>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {t.metodo.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.12} className="h-full">
                  <div className={`relative h-full rounded-[2rem] p-8 md:p-9 pt-12 md:pt-14 border flex flex-col bg-ink-2 ${i === 2 ? 'border-green-400/40 shadow-[0_0_80px_-20px_rgba(34,197,94,0.5)]' : 'border-white/[0.06]'}`}>
                    <span className="absolute -top-5 left-8 md:left-9 w-10 h-10 rounded-full bg-green-400 text-green-950 font-display font-semibold flex items-center justify-center shadow-lg shadow-green-500/30">
                      {i + 1}
                    </span>
                    <span className="self-start text-[0.65rem] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.06] text-green-400 mb-6">
                      {step.tag}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">{step.title}</h3>
                    <p className="text-stone-400 leading-relaxed">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios: dos marquesinas en sentidos opuestos */}
        <section className="bg-ink py-16 md:py-24 relative z-10 overflow-hidden">
          <Reveal className="px-6 md:px-12 mb-12 md:mb-14 text-center max-w-2xl mx-auto">
            <Kicker tono="oscuro">{t.testimonios.kicker}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-white leading-[1.02]">
              {t.testimonios.titleA}<span className="text-green-400">{t.testimonios.titleEm}</span>
            </h2>
          </Reveal>
          <div className="marquee-mask flex flex-col gap-4 md:gap-5">
            <div className="marquee">
              <div className="flex gap-4 md:gap-5 w-max" data-marquee="directa">
                {[0, 1].map((copia) =>
                  filaA.map((item, i) => (
                    <div key={`${copia}-${i}`} aria-hidden={copia === 1}>
                      <TestimonioCard testimonio={item} verCaso={t.testimonios.verCaso} />
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="marquee">
              <div className="flex gap-4 md:gap-5 w-max" data-marquee="reversa">
                {[0, 1].map((copia) =>
                  filaB.map((item, i) => (
                    <div key={`${copia}-${i}`} aria-hidden>
                      <TestimonioCard testimonio={item} verCaso={t.testimonios.verCaso} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-ink py-16 md:py-24 px-6 md:px-12 relative z-10" id="faq">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Kicker tono="oscuro">{t.faq.kicker}</Kicker>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-white leading-[1.02]">
                {t.faq.titleA}<br /><span className="text-green-400">{t.faq.titleEm}</span>
              </h2>
            </Reveal>

            <div className="lg:col-span-7 flex flex-col gap-3">
              {t.faq.items.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                const panelId = `faq-panel-${i}`;
                return (
                  <Reveal key={faq.pregunta} delay={i * 0.05}>
                    <div className={`border rounded-2xl bg-ink-2 overflow-hidden transition-colors ${isOpen ? 'border-white/20' : 'border-white/[0.06]'}`}>
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full flex items-center gap-4 px-6 py-5 text-left"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className="font-display text-sm font-semibold text-green-400 tabular-nums w-7 shrink-0">0{i + 1}</span>
                        <span className="flex-1 text-base md:text-lg font-display font-medium tracking-tight text-white">{faq.pregunta}</span>
                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-green-400 border-green-400 text-green-950 rotate-180' : 'border-white/15 text-white'}`}>
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </button>
                      {/* grid 0fr→1fr: anima la altura sin medirla en JS */}
                      <div
                        id={panelId}
                        className="grid transition-[grid-template-rows] duration-300 ease-out"
                        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="pl-[4.25rem] pr-6 pb-5 text-stone-400 leading-relaxed">{faq.respuesta}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="bg-ink px-6 md:px-12 pb-20 md:pb-28 pt-6 relative z-10" id="contacto">
          <Reveal className="max-w-7xl mx-auto">
            <div className="bg-ink-2 border border-white/[0.06] rounded-[2.5rem] px-6 py-14 md:px-14 md:py-20 relative overflow-hidden">
              <div className="glow absolute -bottom-1/3 -right-1/4 w-[60%] h-[90%] opacity-50 pointer-events-none" aria-hidden="true" />

              <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Kicker tono="oscuro">{t.contact.kicker}</Kicker>
                  <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-white mb-5 leading-[1.02]">
                    {t.contact.title}
                  </h2>
                  <p className="text-lg text-stone-400 leading-relaxed mb-10">
                    {t.contact.intro}
                  </p>

                  {/* Diagnóstico gratuito, con Ruperto: la persona que atiende la reunión */}
                  <div className="bg-ink border border-white/[0.06] rounded-3xl p-6 flex gap-5 items-start">
                    <img
                      src={heroImage}
                      alt="Ruperto Bravo, fundador de RUBRA lab"
                      loading="lazy"
                      decoding="async"
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-semibold tracking-widest text-green-400 uppercase mb-1.5">{t.contact.liveSession}</p>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-white mb-2">{t.contact.diagnosisTitle}</h3>
                      <p className="text-sm text-stone-400 leading-relaxed mb-4">
                        {t.contact.diagnosisBody}
                      </p>
                      <a
                        href={CALENDAR_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track('schedule_click', { origin: 'contact_section' })}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-green-400 transition-colors"
                      >
                        {t.contact.scheduleMeeting}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <form
                    className="grid sm:grid-cols-2 gap-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const data = new FormData(form);
                      setFormStatus('sending');
                      try {
                        const res = await fetch('/api/contacto', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            name: String(data.get('name') ?? ''),
                            email: String(data.get('email') ?? ''),
                            phone: String(data.get('phone') ?? ''),
                            company: String(data.get('company') ?? ''),
                            process: String(data.get('process') ?? ''),
                            lang: language,
                          }),
                        });
                        if (!res.ok) throw new Error('request failed');
                        track('contact_form_submit');
                        setFormStatus('sent');
                        form.reset();
                      } catch {
                        setFormStatus('error');
                      }
                    }}
                  >
                    {(
                      [
                        { id: 'name', type: 'text', autoComplete: 'name', label: t.contact.nameLabel, placeholder: t.contact.namePlaceholder, required: true, optional: null },
                        { id: 'email', type: 'email', autoComplete: 'email', label: t.contact.emailLabel, placeholder: t.contact.emailPlaceholder, required: true, optional: null },
                        { id: 'phone', type: 'tel', autoComplete: 'tel', label: t.contact.phoneLabel, placeholder: t.contact.phonePlaceholder, required: false, optional: t.contact.phoneOptional },
                        { id: 'company', type: 'text', autoComplete: 'organization', label: t.contact.companyLabel, placeholder: t.contact.companyPlaceholder, required: false, optional: t.contact.companyOptional },
                      ] as const
                    ).map((field) => (
                      <div key={field.id} className="flex flex-col gap-2">
                        <label htmlFor={field.id} className="text-[0.65rem] font-semibold tracking-widest text-stone-400 uppercase">
                          {field.label}
                          {field.optional && <span className="text-stone-500 normal-case tracking-normal font-normal"> ({field.optional})</span>}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-stone-500 focus:outline-none focus:border-green-400/60 focus:bg-white/[0.08] transition-colors"
                        />
                      </div>
                    ))}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="process" className="text-[0.65rem] font-semibold tracking-widest text-stone-400 uppercase">{t.contact.processLabel}</label>
                      <textarea
                        id="process"
                        name="process"
                        placeholder={t.contact.processPlaceholder}
                        rows={4}
                        required
                        className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-stone-500 focus:outline-none focus:border-green-400/60 focus:bg-white/[0.08] transition-colors resize-none"
                      ></textarea>
                    </div>
                    <div className="sm:col-span-2 flex flex-wrap items-center gap-x-6 gap-y-4 mt-2">
                      <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="inline-flex items-center gap-2 bg-green-400 text-green-950 px-7 py-4 rounded-full font-semibold hover:bg-green-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'sending' ? t.contact.sending : t.contact.submit}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <p className="text-sm text-stone-400">
                        {t.contact.prefer}{' '}
                        <a
                          href={buildWhatsappLink(t.whatsapp.message)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => track('whatsapp_click', { origin: 'contact_form' })}
                          className="text-white hover:text-green-400 underline underline-offset-4 transition-colors"
                        >
                          {t.contact.whatsappDirect}
                        </a>
                      </p>
                      {formStatus === 'sent' && (
                        <p className="w-full text-sm text-green-400">{t.contact.sent}</p>
                      )}
                      {formStatus === 'error' && (
                        <p className="w-full text-sm text-red-400">{t.contact.sendError}</p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />

      <WhatsAppFloatingButton label={t.whatsapp.label} message={t.whatsapp.message} />
    </div>
  );
}
