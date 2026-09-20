import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes.tsx'
import { posts, basePath } from './blog/posts'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
}

export const postRoutes = posts.map((p) => ({
  path: `${basePath(p.category)}/${p.slug}`,
  title: `${p.title} | RUBRA`,
  headline: p.title,
  description: p.description,
  date: p.date,
  isCaso: p.category === 'Casos',
}))
