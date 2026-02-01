/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

const categories = ['All', 'Systems', 'Development', 'Strategy'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    // Simple mapping for demo purposes
    const catMap: {[key: string]: string} = { 'Systems': 'Home', 'Development': 'Mobile', 'Strategy': 'Audio' };
    return PRODUCTS.filter(p => p.category === catMap[activeCategory]);
  }, [activeCategory]);

  return (
    <section id="products" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-indigo-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Core Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[0.9]">ENGINEERED FOR EXCELLENCE.</h2>
          </div>
          
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'text-indigo-500' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;