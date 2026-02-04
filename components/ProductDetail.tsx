/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  return (
    <div className="pt-32 min-h-screen bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Systems
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-[4/5]">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>

          <div className="flex flex-col">
             <span className="text-indigo-500 text-xs font-black uppercase tracking-[0.4em] mb-4 block">System Specification</span>
             <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none uppercase">{product.name}</h1>
             <div className="inline-flex items-center gap-4 mb-10">
               <span className="text-2xl font-light text-slate-200">Starting from ${product.price}</span>
               <div className="h-px w-12 bg-white/20"></div>
               <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Enterprise Ready</span>
             </div>
             
             <p className="text-slate-200 leading-relaxed font-normal text-xl mb-12 pb-12 border-b border-white/10">
               {product.longDescription || product.description}
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
               {product.features.map((feature, idx) => (
                 <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                   <div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                     <svg className="w-3 h-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                   </div>
                   <span className="text-xs font-bold text-white uppercase tracking-widest">{feature}</span>
                 </div>
               ))}
             </div>

             <button 
               onClick={() => onAddToCart(product)}
               className="w-full py-6 bg-indigo-600 text-white uppercase tracking-[0.3em] text-xs font-black hover:bg-indigo-500 transition-all rounded-xl shadow-[0_0_40px_rgba(79,70,229,0.3)]"
             >
               Add to Project Scope
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;