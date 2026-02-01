/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#0A0A0A] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-white/10 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-8 border-b border-white/10">
          <h2 className="text-xl font-bold uppercase tracking-widest text-white">Project Inquiry ({items.length})</h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <p className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400">Queue is empty.</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 animate-fade-in-up">
                <div className="w-20 h-20 bg-white/5 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-white text-sm uppercase tracking-wide">{item.name}</h3>
                        <span className="text-xs text-slate-400">${item.price}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(idx)}
                    className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 hover:text-white transition-colors text-left"
                  >
                    Remove from scope
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-8 border-t border-white/10 bg-white/5">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Estimated Budget</span>
            <span className="text-2xl font-black text-white">${total}</span>
          </div>
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full py-4 bg-indigo-600 text-white uppercase tracking-widest text-xs font-black hover:bg-indigo-500 transition-all rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Review Scope & Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;