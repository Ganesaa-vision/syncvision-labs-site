/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-indigo-500/50 transition-all duration-500"
      onClick={() => onClick(product)}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-2 py-1 rounded">
            {product.category === 'Mobile' ? 'Software' : product.category === 'Home' ? 'Infrastructure' : 'Core'}
          </span>
          <span className="text-slate-400 text-xs font-medium">${product.price}+</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{product.name}</h3>
        <p className="text-base text-slate-400 font-normal leading-relaxed mb-6">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          View Specifications
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;