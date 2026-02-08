import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const PrivacyView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      <Helmet>
        <title>Privacy Policy | SyncVision Labs</title>
        <meta name="description" content="Privacy Policy regarding data collection and usage at SyncVision Labs." />
      </Helmet>

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p className="font-mono text-xs uppercase tracking-widest mb-8">Last Updated: {new Date().getFullYear()}</p>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Introduction</h3>
          <p>SyncVision Labs ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This policy outlines how we handle your information in compliance with the Personal Data Protection Act 2010 (PDPA) of Malaysia.</p>

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
      </div>
    </div>
  );
};

export default PrivacyView;