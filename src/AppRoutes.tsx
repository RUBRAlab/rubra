import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Blog from './blog/Blog.tsx'
import Post from './blog/Post.tsx'
import Casos from './casos/Casos.tsx'
import Privacidad from './Privacidad.tsx'
import NotFound from './NotFound.tsx'
import Us from './us/Us.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'
import { useLenis } from './hooks/useLenis'

export function AppRoutes() {
  useLenis()
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/casos/:slug" element={<Post />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/us" element={<Us />} />
        <Route path="/en" element={<App />} />
        <Route path="/en/blog" element={<Blog />} />
        <Route path="/en/blog/:slug" element={<Post />} />
        <Route path="/en/cases" element={<Casos />} />
        <Route path="/en/cases/:slug" element={<Post />} />
        <Route path="/en/privacy" element={<Privacidad />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  )
}
