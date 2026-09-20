import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { AppRoutes } from './AppRoutes.tsx'
import './index.css'

// createRoot (no hydrateRoot) a propósito: el HTML prerenderizado en #root es para
// crawlers que no ejecutan JS. El idioma se resuelve en el cliente (localStorage/geo),
// así que hidratar daría mismatch para visitantes en inglés.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
