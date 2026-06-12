import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
  path: string
}

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    const url = `https://www.rubra.ar${path}`

    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [title, description, path])
}
