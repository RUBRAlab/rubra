/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
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
import { Ventana } from './components/Mockup';
import svcTienda from './assets/images/pantallas/genial-catalogo.webp';
import svcGestion from './assets/images/pantallas/flowpyme-dashboard.webp';
import svcAutomatizacion from './assets/images/pantallas/flowpyme-importacion.webp';
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
  Bot
} from 'lucide-react';

/**
 * Fondo de partículas. Solo en desktop y solo si el usuario no pidió menos
 * movimiento: en mobile queda tapado por las secciones y solo gasta batería.
 */
const AbstractBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(min-width: 768px)').matches) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setDimensions();
    window.addEventListener('resize', setDimensions);

    class FloatingParticle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouseX !== -100) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // Very gentle displacement from mouse
          if (dist < 200) {
            const force = (200 - dist) / 200;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.fillStyle = 'rgba(34, 197, 94, 0.45)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const floatingParticles: FloatingParticle[] = [];
    for (let i = 0; i < 40; i++) {
      floatingParticles.push(new FloatingParticle());
    }

    let mouse = { x: -100, y: -100 };
    let targetMouse = { x: -100, y: -100 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
      if (mouse.x === -100) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    const handleMouseLeave = () => {
      targetMouse.x = -100;
      targetMouse.y = -100;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let animationId = 0;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow for the glow
      if (targetMouse.x !== -100) {
        mouse.x += (targetMouse.x - mouse.x) * 0.15;
        mouse.y += (targetMouse.y - mouse.y) * 0.15;

        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
        gradient.addColorStop(0, 'rgba(34, 197, 94, 0.14)');
        gradient.addColorStop(0.5, 'rgba(34, 197, 94, 0.05)');
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 300, 0, Math.PI * 2);
        ctx.fill();
      } else {
        mouse.x = -100;
        mouse.y = -100;
      }

      floatingParticles.forEach((p, i) => {
        p.update(mouse.x, mouse.y);
        p.draw();

        for (let j = i + 1; j < floatingParticles.length; j++) {
          const p2 = floatingParticles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.22 * (1 - dist / 100)})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      if (!document.hidden) {
        animationId = requestAnimationFrame(animate);
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        cancelAnimationFrame(animationId);
        animate();
      }
    };

    animate();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', setDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

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

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { language, toggleLanguage } = useLanguage();
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

  const navLinkClass = isScrolled
    ? 'text-stone-600 hover:text-stone-900'
    : 'text-stone-300 hover:text-white';

  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden selection:bg-stone-900 selection:text-white relative">
      <AbstractBackground />

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 ${
          isScrolled ? 'bg-stone-50/80 backdrop-blur-md border-b border-stone-200' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5" aria-label="RUBRA lab">
            <Isotipo className={`w-7 h-7 md:w-8 md:h-8 shrink-0 transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-stone-900' : 'text-stone-100'}`} />
            <Wordmark dark={isScrolled || mobileMenuOpen} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {t.nav.links.map((item) => (
              <a key={item.href} href={item.href} className={`text-sm font-medium transition-colors ${navLinkClass}`}>
                {item.label}
              </a>
            ))}
            <Link to="/blog" className={`text-sm font-medium transition-colors ${navLinkClass}`}>
              {t.nav.blog}
            </Link>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.nav.langToggleLabel}
              className={`w-9 h-9 rounded-full border text-xs font-semibold flex items-center justify-center transition-colors ${isScrolled ? 'border-stone-300 text-stone-700 hover:bg-stone-100' : 'border-stone-100/25 text-stone-100 hover:bg-stone-100/10'}`}
            >
              {t.nav.langToggle}
            </button>
            <a
              href="#contacto"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 group ${isScrolled ? 'bg-green-800 text-stone-50 hover:bg-green-700' : 'bg-green-400 text-green-950 hover:bg-green-300'}`}
            >
              {t.nav.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              className={`transition-colors ${mobileMenuOpen || isScrolled ? 'text-stone-900' : 'text-white'}`}
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
        <div className="fixed inset-0 z-40 bg-stone-50 pt-24 px-6 pb-10 overflow-y-auto md:hidden">
          <div className="flex flex-col gap-5">
            {t.nav.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-2xl font-display font-medium text-stone-900 border-b border-stone-200 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-medium text-stone-900 border-b border-stone-200 pb-4"
            >
              {t.nav.blog}
            </Link>

            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-green-800 text-stone-50 px-6 py-4 rounded-full text-center text-lg font-medium hover:bg-green-700 transition-colors mt-2 flex items-center justify-center gap-2"
            >
              {t.nav.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={buildWhatsappLink(t.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { track('whatsapp_click', { origin: 'mobile_nav' }); setMobileMenuOpen(false); }}
              className="border border-stone-300 text-stone-800 px-6 py-4 rounded-full text-center text-lg font-medium hover:bg-stone-100 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t.whatsapp.label}
            </a>

            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.nav.langToggleLabel}
              className="self-start mt-2 px-4 py-2 rounded-full border border-stone-300 text-sm font-semibold text-stone-700"
            >
              {t.nav.langToggle}
            </button>
          </div>
        </div>
      )}

      <main className="relative z-10 block">
        {/* Hero */}
        <section className="relative bg-[#35362f] pt-32 pb-16 md:pt-48 md:pb-20 px-6 md:px-12 overflow-hidden">
          {/* Halo verde: da profundidad sin competir con el texto */}
          <div className="pointer-events-none absolute -top-1/3 -left-1/4 w-[900px] h-[600px] rounded-full bg-green-500/10 blur-3xl" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* El contenido del primer pantallazo no se anima desde opacity:0:
                si el JS tarda, el visitante se queda mirando un hero vacío. */}
            <div className="lg:col-span-7 relative">
              <h1 className="text-4xl md:text-6xl lg:text-[4rem] leading-[1.05] font-display font-semibold tracking-tight text-white mb-6">
                {t.hero.titleParts[0]}<span className="font-serif italic text-green-300 font-normal">{t.hero.titleParts[1]}</span>{t.hero.titleParts[2]}<span className="font-serif italic text-green-300 font-normal">{t.hero.titleParts[3]}</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-300 max-w-xl mb-10 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('schedule_click', { origin: 'hero' })}
                  className="bg-green-400 text-green-950 px-8 py-4 rounded-full font-semibold hover:bg-green-300 transition-all hover:shadow-lg hover:shadow-green-400/20 flex items-center gap-2 group"
                >
                  {t.hero.ctaSchedule}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={buildWhatsappLink(t.whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('whatsapp_click', { origin: 'hero' })}
                  className="px-8 py-4 rounded-full font-medium border border-stone-100/25 text-stone-100 hover:bg-stone-100/10 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.hero.ctaContact}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-green-400/20"
              >
                <img
                  src={heroImage}
                  alt="Ruperto Bravo, fundador de RUBRA lab"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#35362f] via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>

          {/* Stats: los números que sostienen la promesa del título */}
          {/* En mobile van apilados con la etiqueta al lado: en 3 columnas a
              375px "USD 1.000" no entra y se corta contra el borde. */}
          <div className="max-w-7xl mx-auto relative z-10 mt-14 md:mt-20 pt-10 border-t border-stone-100/15 flex flex-col gap-5 sm:grid sm:grid-cols-3 sm:gap-6 md:gap-12 md:max-w-3xl md:mx-0">
            {t.heroStats.map((stat) => (
              <div key={stat.etiqueta} className="flex items-baseline gap-3 sm:flex-col sm:gap-0">
                <p className={`font-display text-2xl md:text-4xl font-semibold tracking-tight tabular-nums whitespace-nowrap ${stat.destacado ? 'text-green-400' : 'text-white'}`}>
                  {stat.valor}
                </p>
                <p className="text-[0.7rem] md:text-xs font-medium uppercase tracking-widest text-stone-400 leading-snug sm:mt-1.5">
                  {stat.etiqueta}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Franja de pantallas: hace visible el "+29 proyectos" del hero */}
        <PantallasStrip kicker={t.pantallas.kicker} titulo={t.pantallas.titulo} cta={t.pantallas.cta} />

        {/* Clientes */}
        <section className="py-20 px-6 md:px-12 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-10 text-center">
              {t.clients.heading}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center justify-items-center">
              {CLIENTS.map((client) => {
                const img = (
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 md:max-h-14 max-w-[140px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                );
                // Si el cliente tiene caso publicado, el logo lleva al caso:
                // mandarlo al sitio del cliente lo saca de rubra.ar.
                if (client.caso) {
                  return (
                    <Link key={client.name} to={`/casos/${client.caso}`} className="group flex items-center justify-center" title={client.name}>
                      {img}
                    </Link>
                  );
                }
                return client.url ? (
                  <a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center"
                    title={client.name}
                  >
                    {img}
                  </a>
                ) : (
                  <div key={client.name} className="group flex items-center justify-center" title={client.name}>
                    {img}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Band: la tesis del sitio */}
        <section className="bg-green-900/90 backdrop-blur-md border-y border-green-800/50 py-20 px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-green-100">
              {t.band.partA}<span className="font-serif italic font-normal text-white">{t.band.partAEm}</span>{t.band.partB}<br className="hidden md:block" />
              {t.band.partC}<span className="font-serif italic font-normal text-white">{t.band.partCEm}</span>{t.band.partD}
            </p>
          </motion.div>
        </section>

        {/* Servicios */}
        <section className="py-24 px-6 md:px-12 bg-[#35362f] text-stone-50" id="servicios">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-sm font-semibold tracking-widest text-green-400 uppercase mb-4">{t.servicios.kicker}</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white max-w-2xl">
                {t.servicios.titleLine1}<br />{t.servicios.titleLine2}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-stone-100/15 rounded-[2rem] overflow-hidden border border-stone-100/15">
              {t.servicios.items.map((item, i) => {
                const Icon = SERVICE_ICONS[i];
                return (
                  <div key={item.title} className="bg-[#35362f] p-8 md:p-10 hover:bg-stone-100/5 transition-colors flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-stone-100/10 border border-stone-100/20 flex items-center justify-center text-green-400 mb-8">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white mb-4">{item.title}</h3>
                    <p className="text-stone-300 leading-relaxed mb-8">{item.body}</p>
                    {/* Una captura por servicio: el ícono dice la categoría, la
                        captura muestra que eso existe y ya se entregó. */}
                    <Ventana tono="oscuro" className="mt-auto -mb-2">
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Casos */}
        <section className="py-24 px-6 md:px-12 bg-transparent relative z-10" id="casos">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-4">{t.casos.kicker}</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-stone-900 max-w-2xl">
                {t.casos.titleParts[0]}<br />{t.casos.titleParts[1]}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.casos.items.map((caso, i) => (
                <motion.div
                  key={caso.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={`/casos/${caso.slug}`}
                    className="group flex flex-col h-full bg-white/70 backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-stone-200 hover:border-green-600/40 hover:shadow-lg hover:shadow-green-900/5 transition-all"
                  >
                    <CasoVisual slug={caso.slug} alt={caso.titulo} />
                    <p className="text-xs font-semibold tracking-widest text-green-700 uppercase mb-4">
                      {caso.rubro}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-stone-900 mb-4 leading-tight">
                      {caso.titulo}
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {caso.resumen}
                    </p>
                    <p className="text-sm text-stone-500 mb-6 mt-auto pt-2 border-t border-stone-200/80">
                      {caso.entregable}
                    </p>
                    <span className="inline-flex items-center gap-2 text-green-700 font-medium">
                      {t.casos.verCaso}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                to="/casos"
                className="inline-flex items-center gap-2 text-green-800 font-medium hover:gap-3 transition-all"
              >
                {t.casos.verTodos} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="pb-24 px-6 md:px-12 bg-transparent relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-4">{t.testimonios.kicker}</p>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-stone-900">
                {t.testimonios.titleA}<span className="font-serif italic text-stone-500 font-normal">{t.testimonios.titleEm}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.testimonios.items.map((testimonio, i) => (
                <motion.blockquote
                  key={testimonio.cliente}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="flex flex-col bg-white/70 backdrop-blur-md rounded-[2rem] p-8 border border-stone-200"
                >
                  <p className="font-serif italic text-xl md:text-2xl text-stone-800 leading-relaxed mb-8">
                    “{testimonio.frase}”
                  </p>
                  <footer className="mt-auto pt-6 border-t border-stone-200 flex items-center gap-4">
                    <img
                      src={LOGO_BY_NAME[testimonio.logo]}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-9 max-w-[88px] object-contain grayscale opacity-70"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-widest text-green-700 uppercase truncate">
                        {testimonio.cliente}
                      </p>
                      {testimonio.caso && (
                        <Link
                          to={`/casos/${testimonio.caso}`}
                          className="text-sm text-stone-500 hover:text-green-700 transition-colors inline-flex items-center gap-1.5 mt-1"
                        >
                          {t.testimonios.verCaso}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Método */}
        <section className="py-24 px-6 md:px-12 bg-[#35362f] relative z-10" id="metodo">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 max-w-2xl">
              <p className="text-sm font-semibold tracking-widest text-green-400 uppercase mb-4">{t.metodo.kicker}</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white">
                {t.metodo.titleParts[0]}<br />{t.metodo.titleParts[1]}<br /><span className="font-serif italic text-green-300 font-normal">{t.metodo.titleParts[2]}</span>
              </h2>
            </div>

            <div className="relative">
              {/* Línea conectora, solo desktop */}
              <div className="hidden md:block absolute top-10 left-[8.33%] right-[8.33%] h-px bg-stone-100/15" />

              <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                {t.metodo.steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center relative z-10 shrink-0 ${
                          i === 2 ? 'bg-green-400' : 'bg-stone-100/10 border border-stone-100/20'
                        }`}
                      >
                        <span className={`font-display text-2xl font-semibold ${i === 2 ? 'text-green-950' : 'text-white'}`}>
                          0{i + 1}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">{step.tag}</p>
                    <h3 className="text-2xl font-display font-medium mb-3 text-white">{step.title}</h3>
                    <p className="text-stone-300 leading-relaxed">{step.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12 bg-transparent relative z-10" id="faq">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-4">{t.faq.kicker}</p>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-stone-900">
                {t.faq.titleA}<br /><span className="font-serif italic text-stone-500 font-normal">{t.faq.titleEm}</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {t.faq.items.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                const panelId = `faq-panel-${i}`;
                return (
                  <div
                    key={faq.pregunta}
                    className="border border-stone-200 rounded-2xl bg-white/70 backdrop-blur-md overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="text-lg font-display font-medium text-stone-900">{faq.pregunta}</span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-green-700 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {/* grid 0fr→1fr: anima la altura sin medirla en JS */}
                    <div
                      id={panelId}
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-stone-600 leading-relaxed">{faq.respuesta}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-24 px-6 md:px-12 bg-[#35362f] relative z-10" id="contacto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <p className="text-sm font-semibold tracking-widest text-green-400 uppercase mb-4">{t.contact.kicker}</p>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6">
                {t.contact.title}
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed">
                {t.contact.intro}
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-12 lg:gap-24">
              <div className="md:col-span-3">
                <form
                  className="flex flex-col gap-8"
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
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold tracking-widest text-stone-400 uppercase">{t.contact.nameLabel}</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={t.contact.namePlaceholder}
                      required
                      className="w-full bg-transparent border-0 border-b border-stone-100/25 py-3 text-white placeholder:text-stone-400 focus:ring-0 focus:border-green-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold tracking-widest text-stone-400 uppercase">{t.contact.emailLabel}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={t.contact.emailPlaceholder}
                      required
                      className="w-full bg-transparent border-0 border-b border-stone-100/25 py-3 text-white placeholder:text-stone-400 focus:ring-0 focus:border-green-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold tracking-widest text-stone-400 uppercase">
                      {t.contact.phoneLabel} <span className="text-stone-500 normal-case tracking-normal font-normal">({t.contact.phoneOptional})</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full bg-transparent border-0 border-b border-stone-100/25 py-3 text-white placeholder:text-stone-400 focus:ring-0 focus:border-green-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-semibold tracking-widest text-stone-400 uppercase">
                      {t.contact.companyLabel} <span className="text-stone-500 normal-case tracking-normal font-normal">({t.contact.companyOptional})</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={t.contact.companyPlaceholder}
                      className="w-full bg-transparent border-0 border-b border-stone-100/25 py-3 text-white placeholder:text-stone-400 focus:ring-0 focus:border-green-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="process" className="text-xs font-semibold tracking-widest text-stone-400 uppercase">{t.contact.processLabel}</label>
                    <textarea
                      id="process"
                      name="process"
                      placeholder={t.contact.processPlaceholder}
                      rows={3}
                      required
                      className="w-full bg-transparent border-0 border-b border-stone-100/25 py-3 text-white placeholder:text-stone-400 focus:ring-0 focus:border-green-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-4">
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="self-start bg-green-400 text-green-950 px-8 py-4 rounded-full font-semibold hover:bg-green-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'sending' ? t.contact.sending : t.contact.submit}
                    </button>
                    {formStatus === 'sent' && (
                      <p className="text-sm text-green-400">{t.contact.sent}</p>
                    )}
                    {formStatus === 'error' && (
                      <p className="text-sm text-red-400">{t.contact.sendError}</p>
                    )}
                    <p className="text-sm text-stone-400">
                      {t.contact.prefer}{' '}
                      <a
                        href={buildWhatsappLink(t.whatsapp.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track('whatsapp_click', { origin: 'contact_form' })}
                        className="text-green-300 hover:text-green-200 underline underline-offset-4"
                      >
                        {t.contact.whatsappDirect}
                      </a>
                    </p>
                  </div>
                </form>
              </div>

              <div className="md:col-span-2 flex flex-col justify-center border-t md:border-t-0 md:border-l border-stone-100/15 pt-12 md:pt-0 md:pl-12 lg:pl-16">
                <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-4">{t.contact.liveSession}</p>
                <h3 className="text-2xl font-display font-medium text-white mb-4">{t.contact.diagnosisTitle}</h3>
                <p className="text-stone-300 leading-relaxed mb-8">
                  {t.contact.diagnosisBody}
                </p>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('schedule_click', { origin: 'contact_section' })}
                  className="inline-block text-center border border-green-400/40 text-green-300 px-8 py-4 rounded-full font-medium hover:bg-green-400/10 transition-colors"
                >
                  {t.contact.scheduleMeeting}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <WhatsAppFloatingButton label={t.whatsapp.label} message={t.whatsapp.message} />
    </div>
  );
}
