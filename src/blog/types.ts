export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string           // formato YYYY-MM-DD
  category: string
  readTime: number       // minutos estimados de lectura
  content: React.FC
}
