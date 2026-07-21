import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import App from './App.tsx'
import Blog from './blog/Blog.tsx'
import Post from './blog/Post.tsx'
import Casos from './casos/Casos.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/casos/:slug" element={<Post />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
