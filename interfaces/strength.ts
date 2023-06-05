import type Author from './author'

type StrengthType = {
  slug: string
  title: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default StrengthType
