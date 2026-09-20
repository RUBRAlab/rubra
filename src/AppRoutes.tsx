import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Blog from './blog/Blog.tsx'
import Post from './blog/Post.tsx'
import Casos from './casos/Casos.tsx'
import NotFound from './NotFound.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'

export function AppRoutes() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/casos/:slug" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  )
}
