import type { FC } from "react"

export interface BlogPost {
  slug: string
  title: string
  title_en: string
  description: string
  description_en: string
  date: string           // formato YYYY-MM-DD
  category: string       // usado también para lógica de ruteo (ej. 'Casos')
  category_en: string
  readTime: number       // minutos estimados de lectura
  content: FC
  content_en: FC
}
