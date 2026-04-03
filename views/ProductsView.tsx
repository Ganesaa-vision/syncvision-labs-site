import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Terminal, Activity } from 'lucide-react';
import { PageTransition } from '../PageTransition';
import Footer from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { IMAGES } from '../images';

const ProductsView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": product.name,
        "applicationCategory": "BusinessApplication",
        "description": product.description
      }
    }))
  };

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="bg-white dark:bg-slate-950 min-h-screen flex flex-col relative transition-colors duration-300">
      <Helmet>
        <title>Internal R&D Labs | Omino Tech</title>
        <meta name="description" content="In-house innovation and high-logic internal systems. Explore our proprietary behavioral tech and architectural engineering." />
        <link rel="canonical" href="https://www.ominotech.com.my/products" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ominotech.com.my/products" />
        <meta property="og:title" content="Internal R&D Labs | Omino Tech" />
        <meta property="og:description" content="In-house innovation and high-logic internal systems. Explore our proprietary behavioral tech and architectural engineering." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ominotech.com.my/products" />
        <meta name="twitter:title" content="Internal R&D Labs | Omino Tech" />
        <meta name="twitter:description" content="In-house innovation and high-logic internal systems. Explore our proprietary behavioral tech and architectural engineering." />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image:alt" content="Omino Tech Digital Growth Engine - Custom Web Development and SEO Services Malaysia" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="py-24 md:py-40 px-6 max-w-7xl mx-auto flex-grow w-full">
        <m.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="mb-24 text-center"
        >
          <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Internal R&D Labs</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
            IN-HOUSE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400 italic">INNOVATION.</span>
          </h1>
          <p className="mt-8 text-slate-600 dark:text-slate-200 font-mono text-sm md:text-base max-w-2xl mx-auto uppercase tracking-widest leading-relaxed font-bold">
            These are our high-logic internal systems. Proof of our architectural engineering capability.
          </p>
        </m.div>

        <div className="space-y-40">
          {PRODUCTS.map((product, idx) => (
            <m.div 
              key={product.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/5 aspect-video group shadow-3xl bg-white dark:bg-slate-900">
                   <img 
                     src={product.imageUrl} 
                     alt={`${product.name} - Custom digital infrastructure and AI business automation engineered to scale operations.`} 
                     loading={idx === 0 ? "eager" : "lazy"}
                     fetchPriority={idx === 0 ? "high" : "auto"}
                     decoding={idx === 0 ? "sync" : "async"}
                     className="w-full h-full object-contain brightness-[0.4] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                   <div className="absolute bottom-10 left-10 flex gap-4">
                      <div className="px-5 py-2 bg-interstellar/90 backdrop-blur-md rounded-xl text-xs font-mono font-black text-slate-100 uppercase tracking-widest flex items-center gap-3 shadow-xl">
                        <Activity size={14} className="text-growth animate-pulse" /> {product.status}
                      </div>
                      <div className="px-5 py-2 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-xl text-xs font-mono font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest border border-slate-200 dark:border-white/10 shadow-xl">
                        {product.category}
                      </div>
                   </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                 <div className="space-y-8">
                   <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-slate-100 leading-[1.1] mb-2">{product.name}</h3>
                   <p className="text-interstellar font-mono text-sm font-black uppercase tracking-[0.3em]">{product.tagline}</p>
                   
                   <p className="text-slate-600 dark:text-slate-200 font-medium text-lg leading-relaxed border-l-4 border-interstellar/30 pl-8">
                     {product.longDescription || product.description}
                   </p>

                   <div className="grid grid-cols-1 gap-4 pt-4">
                     {product.features.map(f => (
                       <div key={f} className="flex items-center gap-4 text-xs font-mono font-black text-slate-700 dark:text-slate-100 uppercase tracking-widest p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 rounded-2xl group hover:border-indigo-500/30 transition-all">
                         <Terminal size={14} className="text-interstellar group-hover:scale-110 transition-transform" />
                         {f}
                       </div>
                     ))}
                   </div>

                   <WhatsAppButton 
                     serviceName={`Beta Interest: ${product.name}`}
                     buttonText="Beta Interest Protocol"
                     className="w-full mt-10 py-6 bg-interstellar text-slate-100 font-mono text-sm font-black uppercase tracking-[0.4em] hover:opacity-90 transition-all rounded-2xl shadow-xl shadow-interstellar/20 flex items-center justify-center gap-4 group"
                     showIcon={true}
                   />
                 </div>
              </div>
            </m.div>
          ))}
        </div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
    </PageTransition>
  );
};

export default ProductsView;