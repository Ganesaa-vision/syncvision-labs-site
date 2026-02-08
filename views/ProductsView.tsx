import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Terminal, Activity, ArrowRight } from 'lucide-react';

const ProductsView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="py-24 md:py-40 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen relative transition-colors duration-300">
      <Helmet>
        <title>Internal R&D Labs | SyncVision Labs</title>
        <meta name="description" content="In-house innovation and high-logic internal systems. Explore our proprietary behavioral tech and architectural engineering." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-indigo-600 dark:text-interstellar text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Internal R&D Labs</span>
          <h2 className="text-4xl md:text-7xl font-mono font-black text-slate-900 dark:text-slate-100 tracking-tighter uppercase leading-none">IN-HOUSE <br/><span className="text-interstellar italic">INNOVATION.</span></h2>
          <p className="mt-8 text-slate-600 dark:text-slate-200 font-mono text-sm md:text-base max-w-2xl uppercase tracking-widest leading-relaxed font-bold">
            These are our high-logic internal systems. Proof of our architectural engineering capability.
          </p>
        </div>

        <div className="space-y-40">
          {PRODUCTS.map((product, idx) => (
            <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/5 aspect-video group shadow-3xl bg-white dark:bg-slate-900">
                   <img 
                     src={product.imageUrl} 
                     alt={product.name} 
                     loading="lazy"
                     decoding="async"
                     className="w-full h-full object-cover brightness-[0.4] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                   <div className="absolute bottom-10 left-10 flex gap-4">
                      <div className="px-5 py-2 bg-interstellar/90 backdrop-blur-md rounded-xl text-xs font-mono font-black text-slate-100 uppercase tracking-widest flex items-center gap-3 shadow-xl">
                        <Activity size={14} className="text-growth animate-pulse" /> {product.status}
                      </div>
                      <div className="px-5 py-2 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-xl text-xs font-mono font-black text-slate-900 dark:text-slate-100 uppercase tracking-widest border border-slate-200 dark:border-white/10 shadow-xl">
                        {product.category}
                      </div>
                   </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                 <div className="space-y-8">
                   <h3 className="text-4xl md:text-5xl font-mono font-black text-slate-900 dark:text-slate-100 uppercase tracking-tighter leading-none">{product.name}</h3>
                   <p className="text-interstellar font-mono text-sm font-black uppercase tracking-[0.3em]">{product.tagline}</p>
                   
                   <p className="text-slate-600 dark:text-slate-200 font-medium text-lg leading-relaxed border-l-4 border-interstellar/30 pl-8">
                     {product.longDescription || product.description}
                   </p>

                   <div className="grid grid-cols-1 gap-4 pt-4">
                     {product.features.map(f => (
                       <div key={f} className="flex items-center gap-4 text-xs font-mono font-black text-slate-700 dark:text-slate-100 uppercase tracking-widest p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 rounded-2xl group hover:border-indigo/30 transition-all">
                         <Terminal size={14} className="text-interstellar group-hover:scale-110 transition-transform" />
                         {f}
                       </div>
                     ))}
                   </div>

                   <Link to="/contact" className="w-full mt-10 py-6 bg-interstellar text-slate-100 font-mono text-sm font-black uppercase tracking-[0.4em] hover:opacity-90 transition-all rounded-2xl shadow-xl shadow-interstellar/20 flex items-center justify-center gap-4 group">
                     Beta Interest Protocol <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                   </Link>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsView;