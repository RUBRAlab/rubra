/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import heroImage from './assets/images/yo10.png';
import logoBlueSky from './assets/images/clients/bluesky.png';
import logoConcil from './assets/images/clients/concil.png';
import logoDeportivoPradere from './assets/images/clients/deportivo-pradere.png';
import logoHayZonda from './assets/images/clients/hayzonda.png';
import logoJuliaH from './assets/images/clients/juliah.png';
import logoLaEspanola from './assets/images/clients/la-espanola.png';
import logoMG from './assets/images/clients/mg-estrategia.png';
import logoPalomarMarin from './assets/images/clients/palomar-marin.png';
import logoPeregrina from './assets/images/clients/peregrina.png';
import logoPulsoWines from './assets/images/clients/pulso-wines.png';
import logoDesquiciado from './assets/images/clients/desquiciado.png';
import logoAcacia from './assets/images/clients/acacia.jpg';
import { usePageMeta } from './hooks/usePageMeta';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Zap, 
  ShieldCheck, 
  BarChart3,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const AbstractBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
          const dist = Math.sqrt(dx*dx + dy*dy);
          // Very gentle displacement from mouse
          if (dist < 200) {
            const force = (200 - dist) / 200;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }
      }
      
      draw() {
        ctx.fillStyle = 'rgba(34, 197, 94, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const floatingParticles: FloatingParticle[] = [];
    
    for (let i = 0; i < 70; i++) {
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

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth mouse follow for the glow
      if (targetMouse.x !== -100) {
        mouse.x += (targetMouse.x - mouse.x) * 0.15;
        mouse.y += (targetMouse.y - mouse.y) * 0.15;
        
        // Draw soft cursor glow
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
        gradient.addColorStop(0, 'rgba(34, 197, 94, 0.18)');
        gradient.addColorStop(0.5, 'rgba(34, 197, 94, 0.06)');
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
        
        // Draw faint connections between nearby particles
        for (let j = i + 1; j < floatingParticles.length; j++) {
          const p2 = floatingParticles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.3 * (1 - dist/100)})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', setDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

const NAV_LINKS = [
  { label: 'Casos', href: '#casos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

const CASOS = [
  {
    slug: 'caso-pintureria-cinco-sucursales',
    rubro: 'Retail · 5 sucursales',
    titulo: 'De vender por mostrador a una tienda online',
    resumen: 'Una pinturería de La Rioja con su catálogo abierto las 24 horas y un panel donde su equipo carga productos y precios sin depender de nadie.',
  },
  {
    slug: 'caso-club-deportivo-cuotas',
    rubro: 'Institución · 86 años',
    titulo: 'Un club que dejó de conciliar cuotas a mano',
    resumen: 'Padrón de socios, pagos online, roles por comisión y avisos por WhatsApp para el Club Deportivo Social Juan A. Pradere.',
  },
  {
    slug: 'caso-portal-b2b-bodega',
    rubro: 'Bodega · Venta mayorista',
    titulo: 'Un portal B2B para dejar de vender por WhatsApp',
    resumen: 'Listas de precios por cliente, pedidos en minutos y seguimiento logístico automático para Desquiciado Wines.',
  },
  {
    slug: 'caso-concil-producto-propio',
    rubro: 'Producto propio · SaaS',
    titulo: 'CONCIL: construimos nuestro propio producto',
    resumen: 'Conciliación bancaria para estudios contables, con suscripciones recurrentes y multi-cuenta. En producción en concil.ar.',
  },
];

const CLIENTS = [
  { name: 'Blue Sky', logo: logoBlueSky, url: 'https://www.blueskysa.com.ar' },
  { name: 'Concil', logo: logoConcil, url: 'https://www.concil.ar' },
  { name: 'Deportivo Pradere', logo: logoDeportivoPradere, url: 'https://www.deportivopradere.com.ar' },
  { name: 'Hay Zonda', logo: logoHayZonda, url: 'https://www.hayzonda.ar' },
  { name: 'Julia H', logo: logoJuliaH, url: 'https://www.juliah.com.ar' },
  { name: 'Pinturerías La Española', logo: logoLaEspanola, url: 'https://www.pintureriaslaespanola.com.ar' },
  { name: 'MG Estrategia Pyme', logo: logoMG, url: 'https://www.mgestrategiapyme.com.ar' },
  { name: 'Palomar Marín', logo: logoPalomarMarin, url: 'https://www.palomarmarin.com.ar' },
  { name: 'Peregrina', logo: logoPeregrina, url: 'https://www.peregrina.com.ar' },
  { name: 'Pulso Wines', logo: logoPulsoWines, url: 'https://www.pulsowines.com.ar' },
  { name: 'Desquiciado', logo: logoDesquiciado, url: 'https://desquiciado.com' },
  { name: 'Acacia Paisajismo', logo: logoAcacia, url: null },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  usePageMeta({
    title: 'RUBRA lab | Desarrollo de software y automatización con IA para pymes',
    description: 'Construimos tiendas online, sistemas de gestión y automatización con IA para pymes de Latinoamérica. Alcance y precio cerrado, en producción. Mirá nuestros casos.',
    path: '/',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-baseline overflow-hidden group"
          >
            <motion.div className="flex">
              {"RUBRA".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-none"
                  initial={{ y: 0 }}
                  whileHover={{ y: -6, color: '#15803d' }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                    mass: 0.8
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <div className="ml-1.5 flex">
              {"lab".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="font-display text-3xl md:text-4xl font-light text-green-600 leading-none"
                  initial={{ y: 0 }}
                  whileHover={{ y: 4, rotate: (index % 2 === 0 ? 5 : -5) }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                    mass: 0.8
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/blog" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Blog</Link>
            {NAV_LINKS.map((item, i) => (
              <motion.a 
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                href={item.href} 
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              href="#contacto"
              className="bg-green-800 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2 group"
            >
              Hablemos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <button 
            className="md:hidden text-stone-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-stone-50 pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((item) => (
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
              Blog
            </Link>
            <a href="https://calendar.app.google/EkGn6twofhVFeFQu6" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="bg-stone-900 text-stone-50 px-6 py-4 rounded-full text-center text-lg font-medium hover:bg-stone-800 transition-colors mt-4">
              Agendar diagnóstico
            </a>
          </div>
        </div>
      )}

      <main className="relative z-10 block">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-display font-semibold tracking-tight text-stone-900 mb-6">
                  Construimos el software <br />
                  que tu negocio <span className="font-serif italic text-stone-500 font-normal">necesita.</span>
                </h1>
                <p className="text-lg md:text-xl text-green-700 max-w-xl mb-10 leading-relaxed">
                  Tiendas online, sistemas de gestión y automatización con IA para pymes de Latinoamérica. Alcance cerrado, precio cerrado, y en producción — no en una presentación.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href="https://calendar.app.google/EkGn6twofhVFeFQu6" target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-stone-50 px-8 py-4 rounded-full font-medium hover:bg-green-800 transition-all hover:shadow-lg hover:shadow-green-900/20 flex items-center gap-2 group">
                    Agendar reunion
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#contacto" className="px-8 py-4 rounded-full font-medium border border-stone-300 text-stone-900 hover:bg-stone-100 transition-colors">
                    Hacer consulta
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div 
                style={{ y: y1, opacity }}
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
              >
                <img 
                  src={heroImage} 
                  alt="Modern architecture" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Band */}
        <section className="bg-green-900/90 backdrop-blur-md border-y border-green-800/50 py-20 px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-green-100">
              La mayoría de las pymes no necesita <span className="font-serif italic font-normal text-white">más software</span>.<br className="hidden md:block" />
              Necesita <span className="font-serif italic font-normal text-white">el que le falta</span>, funcionando de verdad y sin depender de nadie para usarlo.
            </p>
          </motion.div>
        </section>

        {/* Clientes Section */}
        <section className="py-20 px-6 md:px-12 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-10 text-center">
              Confían en nosotros
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center justify-items-center">
              {CLIENTS.map((client) => {
                const img = (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 md:max-h-14 max-w-[140px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                );
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

        {/* Método Section */}
        <section className="py-24 px-6 md:px-12 bg-transparent relative z-10" id="metodo">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-stone-900">
                Cómo trabajamos
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-stone-200/50 hover:shadow-xl hover:shadow-stone-200/50 transition-shadow flex flex-col items-start"
              >
                <span className="font-mono text-sm font-semibold text-green-600 mb-8 border border-green-200 bg-green-50 px-2 py-1 rounded">01</span>
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-900">
                  <svg width="24" height="24" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="17" cy="17" r="11"/>
                    <circle cx="17" cy="17" r="4.5"/>
                    <line x1="17" y1="6" x2="17" y2="9"/>
                    <line x1="17" y1="25" x2="17" y2="28"/>
                    <line x1="6" y1="17" x2="9" y2="17"/>
                    <line x1="25" y1="17" x2="28" y2="17"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 text-stone-900">Diagnóstico</h3>
                <p className="text-stone-600 leading-relaxed">
                  Antes de tocar nada, entendemos tu negocio. Nos sentamos con vos, mapeamos cómo trabaja tu equipo hoy y encontramos <strong className="font-medium text-stone-900">dónde se pierde tiempo, plata o energía</strong> sin que nadie lo note. De ahí sale un plan concreto, no genérico.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/70 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-stone-200/50 hover:shadow-xl hover:shadow-stone-200/50 transition-shadow flex flex-col items-start"
              >
                <span className="font-mono text-sm font-semibold text-green-600 mb-8 border border-green-200 bg-green-50 px-2 py-1 rounded">02</span>
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-900">
                  <svg width="24" height="24" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="6" y="11" width="8" height="10" rx="1"/>
                    <rect x="19" y="11" width="8" height="10" rx="1"/>
                    <path d="M14 16 L19 16"/>
                    <path d="M10 6 L10 11"/>
                    <path d="M23 6 L23 11"/>
                    <path d="M10 21 L10 27"/>
                    <path d="M23 21 L23 27"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 text-stone-900">Implementación</h3>
                <p className="text-stone-600 leading-relaxed">
                  Ponemos en marcha las herramientas y acompañamos a tu equipo en el camino. <strong className="font-medium text-stone-900">No dejamos un manual y nos vamos</strong>; estamos hasta que el cambio funciona de verdad en el día a día, sin resistencia ni confusión.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/70 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-stone-200/50 hover:shadow-xl hover:shadow-stone-200/50 transition-shadow flex flex-col items-start"
              >
                <span className="font-mono text-sm font-semibold text-green-600 mb-8 border border-green-200 bg-green-50 px-2 py-1 rounded">03</span>
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-900">
                  <svg width="24" height="24" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 25 C8 25 12 15 17 15 C22 15 26 9 26 9" strokeLinecap="round"/>
                    <path d="M22 9 L26 9 L26 13" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="17" cy="27" r="1.8" fill="currentColor" fillOpacity=".3" stroke="none"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 text-stone-900">Evolución</h3>
                <p className="text-stone-600 leading-relaxed">
                  El trabajo no termina con la entrega. Revisamos, ajustamos y mejoramos los sistemas junto a vos. <strong className="font-medium text-stone-900">Tu empresa sigue creciendo</strong> y nosotros nos aseguramos de que las herramientas crezcan con ella.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Casos Section */}
        <section className="py-24 px-6 md:px-12 bg-transparent relative z-10" id="casos">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-4">Lo que construimos</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-stone-900 max-w-2xl">
                Casos reales,<br />en producción.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {CASOS.map((caso, i) => (
                <motion.div
                  key={caso.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={`/blog/${caso.slug}`}
                    className="group block h-full bg-white/70 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-stone-200 hover:border-green-600/40 hover:shadow-lg hover:shadow-green-900/5 transition-all"
                  >
                    <p className="text-xs font-semibold tracking-widest text-green-700 uppercase mb-4">
                      {caso.rubro}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-stone-900 mb-4 leading-tight">
                      {caso.titulo}
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {caso.resumen}
                    </p>
                    <span className="inline-flex items-center gap-2 text-green-700 font-medium">
                      Ver el caso
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section className="py-24 px-6 md:px-12 bg-stone-900/95 backdrop-blur-md text-stone-50" id="servicios">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-sm font-semibold tracking-widest text-green-400 uppercase mb-4">Qué construimos</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white max-w-2xl">
Software a medida.<br />Y automatización que trabaja sola.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-px bg-stone-800 rounded-[2rem] overflow-hidden border border-stone-800">
              <div className="bg-stone-900 p-8 md:p-12 hover:bg-stone-800/80 transition-colors">
                <div className="w-12 h-12 rounded bg-stone-800 border border-stone-700 flex items-center justify-center text-green-400 mb-8">
                  <svg width="24" height="24" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="14" height="11" rx="1"/>
                    <line x1="5" y1="7" x2="13" y2="7"/>
                    <line x1="5" y1="10" x2="10" y2="10"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-medium text-stone-100 mb-4">Tiendas online</h3>
                <p className="text-stone-400 leading-relaxed">
                  Ecommerce y portales de venta mayorista con catálogo, pedidos y pagos. Tu equipo carga productos y precios sin llamar a nadie.
                </p>
              </div>

              <div className="bg-stone-900 p-8 md:p-12 hover:bg-stone-800/80 transition-colors">
                <div className="w-12 h-12 rounded bg-stone-800 border border-stone-700 flex items-center justify-center text-green-400 mb-8">
                  <svg width="24" height="24" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="9" cy="5.5" r="2.5"/>
                    <path d="M3 15 C3 15 4.5 10 9 10 C13.5 10 15 15 15 15" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-medium text-stone-100 mb-4">Sistemas de gestión</h3>
                <p className="text-stone-400 leading-relaxed">
                  Clientes, cobranzas, stock, pedidos. El sistema que tu operación necesita, hecho a la medida de cómo trabajás — no al revés.
                </p>
              </div>

              <div className="bg-stone-900 p-8 md:p-12 hover:bg-stone-800/80 transition-colors">
                <div className="w-12 h-12 rounded bg-stone-800 border border-stone-700 flex items-center justify-center text-green-400 mb-8">
                  <svg width="24" height="24" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="6" height="6" rx=".5"/>
                    <rect x="10" y="2" width="6" height="6" rx=".5"/>
                    <rect x="2" y="10" width="6" height="6" rx=".5"/>
                    <rect x="10" y="10" width="6" height="6" rx=".5"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-medium text-stone-100 mb-4">Automatización con IA</h3>
                <p className="text-stone-400 leading-relaxed">
                  Las tareas repetitivas que hoy hace una persona, hechas por un agente: cargar datos, responder consultas, cruzar información, avisar.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-24 px-6 md:px-12 bg-transparent relative z-10" id="contacto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-4">El siguiente paso</p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Contanos qué necesitás construir o qué proceso te está consumiendo el día. El primer paso es un diagnóstico, sin costo y sin compromiso.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-12 lg:gap-24">
              <div className="md:col-span-3">
                <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); const name = (document.getElementById("name") as HTMLInputElement).value; const company = (document.getElementById("company") as HTMLInputElement).value; const process = (document.getElementById("process") as HTMLTextAreaElement).value; const subject = encodeURIComponent(`Consulta de ${name}`); const body = encodeURIComponent(`Nombre: ${name}\nEmpresa: ${company}\n\n${process}`); const a = document.createElement('a'); a.href = `mailto:hola@rubra.ar?subject=${subject}&body=${body}`; a.click(); (e.target as HTMLFormElement).reset(); }}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold tracking-widest text-stone-500 uppercase">Nombre completo</label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder="Ej. Juan Pérez"
                      required
                      className="w-full bg-transparent border-0 border-b border-stone-300 py-3 text-stone-900 placeholder:text-stone-400 focus:ring-0 focus:border-green-600 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-semibold tracking-widest text-stone-500 uppercase">Empresa / Industria</label>
                    <input 
                      id="company"
                      type="text" 
                      placeholder="Ej. Logística Global"
                      required
                      className="w-full bg-transparent border-0 border-b border-stone-300 py-3 text-stone-900 placeholder:text-stone-400 focus:ring-0 focus:border-green-600 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="process" className="text-xs font-semibold tracking-widest text-stone-500 uppercase">¿Qué proceso deseás profesionalizar?</label>
                    <textarea 
                      id="process"
                      placeholder="Describí brevemente tu mayor cuello de botella..."
                      rows={3}
                      required
                      className="w-full bg-transparent border-0 border-b border-stone-300 py-3 text-stone-900 placeholder:text-stone-400 focus:ring-0 focus:border-green-600 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="self-start bg-green-800 text-stone-50 px-8 py-4 rounded font-medium hover:bg-green-700 transition-colors">
                    Enviar consulta
                  </button>
                </form>
              </div>

              <div className="md:col-span-2 flex flex-col justify-center border-t md:border-t-0 md:border-l border-stone-200 pt-12 md:pt-0 md:pl-12 lg:pl-16">
                <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-4">Sesión en vivo</p>
                <h3 className="text-2xl font-display font-medium text-stone-900 mb-4">Diagnóstico gratuito</h3>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Una sesión de 30 minutos para mapear los cuellos de botella de tu operación y diseñar un plan de acción concreto.
                </p>
                <a href="https://calendar.app.google/EkGn6twofhVFeFQu6" target="_blank" rel="noopener noreferrer" className="inline-block text-center border border-green-700 text-green-800 px-8 py-4 rounded font-medium hover:bg-green-50 transition-colors">
                  Reservar sesión →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900/95 backdrop-blur-md text-stone-400 py-12 px-6 md:px-12 border-t border-stone-800 relative z-10 block">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-display font-bold tracking-widest text-stone-300 mb-2">RUBRA LAB</div>
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} RUBRA Lab · El futuro no es técnico, es humano.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-stone-500">
            <a
              href="https://crm.rubra.ar/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors"
            >
              Acceso equipo
            </a>
          </div>
        </div>
      </footer>

      {/* Tailwind configuration for animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
