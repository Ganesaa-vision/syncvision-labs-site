export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  description: string;
  longDescription?: string;
  features?: string[];
  status?: string;
  tagline?: string;
}

export interface PortfolioItem {
  id: string;
  type: 'CLIENT' | 'INTERNAL';
  image: string;
  title: string;
  role: string;
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

export type PageType = 'home' | 'services' | 'work' | 'about';
