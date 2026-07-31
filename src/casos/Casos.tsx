import { Link } from 'react-router-dom'
import { casos } from '../blog/posts'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Casos() {
  usePageMeta({
    title: 'Casos | RUBRA lab: software para empresas de Latinoamérica',
    description:
      'Tiendas online, sistemas de gestión y portales B2B que construimos para empresas e instituciones. Casos reales, en producción.',
    path: '/casos',
  })

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-baseline">
            <span className="font-display text-3xl font-bold tracking-tight text-stone-900">RUBRA</span>
            <span className="font-display text-3xl font-light text-green-600 ml-1.5">lab</span>
          </Link>
          <Link
            to="/#contacto"
            className="bg-green-800 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2 group"
          >
            Hablemos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </nav>

      {/* Contenido */}
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-4">Casos</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-stone-900 mb-6">
            Lo que construimos,<br />en producción.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mb-16">
            Cada uno de estos proyectos resolvió un problema concreto de un negocio real.
            No son maquetas ni pruebas de concepto: están funcionando.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {casos.map((caso) => (
              <Link
                key={caso.slug}
                to={`/casos/${caso.slug}`}
                className="group block bg-white rounded-[2rem] p-8 md:p-10 border border-stone-200 hover:border-green-600/40 hover:shadow-lg hover:shadow-green-900/5 transition-all"
              >
                <p className="text-xs font-semibold tracking-widest text-green-700 uppercase mb-4">
                  {caso.readTime} min de lectura
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-stone-900 mb-4 leading-tight">
                  {caso.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">{caso.description}</p>
                <span className="inline-flex items-center gap-2 text-green-700 font-medium">
                  Ver el caso
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-20 border-t border-stone-200 pt-10">
            <p className="text-stone-600 leading-relaxed mb-4">
              ¿Tenés un proyecto parecido en mente?
            </p>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 text-green-800 font-medium hover:gap-3 transition-all"
            >
              Contanos qué necesitás <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
