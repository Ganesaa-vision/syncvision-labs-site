/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  category: string;
  imageUrl: string;
  features: string[];
  status?: string;
}

export interface DetailedService {
  id: string;
  category: 'ENGINEERING' | 'PRESENCE' | 'OPERATIONS';
  title: string;
  shortDesc: string;
  fullDesc: string;
  history?: string;
  achievements?: string[];
  gallery?: string[];
  proof?: string;
  features: string[];
  tech: string[];
  icon: string;
}

export interface PortfolioItem {
  id: string;
  type: 'CLIENT' | 'INTERNAL';
  title: string;
  role?: string;
  mission?: string;
  status?: string;
  execution: string[];
  results?: string[];
  concept?: string;
  tech?: string;
  image: string;
  link?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type PageType = 'home' | 'services' | 'work' | 'about' | 'contact' | 'products';

export type ViewState = { type: PageType };