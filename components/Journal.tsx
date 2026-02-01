/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
                <span className="text-indigo-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Strategic Insights</span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">THE CORE JOURNAL.</h2>
            </div>
            <button className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors border-b border-white/10 pb-2">
              View all insights
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.map((article) => (
                <div 
                  key={article.id} 
                  className="group cursor-pointer bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-indigo-500/30 transition-all" 
                  onClick={() => onArticleClick(article)}
                >
                    <div className="w-full aspect-video overflow-hidden rounded-xl mb-8">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-75"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2">{article.date}</span>
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{article.title}</h3>
                        <p className="text-slate-400 text-base font-normal leading-relaxed mb-6">{article.excerpt}</p>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase text-white tracking-widest">
                          Read Full Report
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;