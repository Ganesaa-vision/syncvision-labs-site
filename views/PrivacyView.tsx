import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { PageTransition } from '../PageTransition';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { IMAGES } from '../images';

const PrivacyView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      <Helmet>
        <title>Privacy Policy | Omino Tech</title>
        <meta name="description" content="Privacy Policy regarding data collection and usage at Omino Tech." />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-32 pb-20 px-6 max-w-4xl mx-auto flex-grow w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400 mb-8 leading-[1.1]">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p className="font-mono text-xs uppercase tracking-widest mb-8">Last Updated: {new Date().getFullYear()}</p>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Introduction</h3>
          <p>Omino Tech ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This policy outlines how we handle your information in compliance with the Personal Data Protection Act 2010 (PDPA) of Malaysia.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Information We Collect</h3>
          <p>We may collect personal information such as your name, email address, phone number, and company details when you contact us or use our services.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide and maintain our services.</li>
            <li>Communicate with you about your projects.</li>
            <li>Send you updates or marketing materials (you can opt-out).</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Data Security</h3>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
    </PageTransition>
  );
};

export default PrivacyView;