export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  longDescription?: string;
  features: string[];
  imageUrl: string;
  status?: string;
  tagline?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  type: 'CLIENT' | 'INTERNAL';
  image: string;
  mission?: string;
  results?: string[];
  concept?: string;
  status?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
}