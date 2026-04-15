import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  CheckCircle2, MessageSquare, ArrowRight, ShieldCheck,
  Mail, MapPin, Zap, ChevronDown,
} from 'lucide-react';
import { PageTransition } from '../PageTransition';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../images';

const WHATSAPP_NUMBER = '601127117920';
const EMAIL = 'ominotechofficial@gmail.com';

const SERVICE_OPTIONS = [
  'Custom Web Architecture',
  'SEO Dominance',
  'AI Automation & WhatsApp Agents',
  'E-commerce Development',
  'Mobile App Engineering',
  'Web Management & Maintenance',
  'Server Setup & Hosting',
  'Other / Not Sure',
];

const BUDGET_OPTIONS = [
  'RM 500 – RM 2,000',
  'RM 2,000 – RM 5,000',
  'RM 5,000 – RM 10,000',
  'RM 10,000 – RM 25,000',
  'RM 25,000+',
  'Need Consultation',
];

// Reusable WhatsApp SVG (optimized — no animation, pure path)
const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const ContactView: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const formContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const formItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Omino Tech',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+60-11-2711-7920',
          contactType: 'customer service',
          email: EMAIL,
          areaServed: 'MY',
          availableLanguage: ['English', 'Malay'],
        },
      ],
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Build a structured WhatsApp message from form data and open WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      '🎯 NEW PROJECT INQUIRY',
      '',
      `👤 Name: ${formData.name}`,
      `📧 Email: ${formData.email}`,
      `🛠️ Service: ${formData.service || 'Not specified'}`,
      `💰 Budget: ${formData.budget || 'Not specified'}`,
      '',
      '📝 Project Details:',
      formData.message,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', service: '', budget: '', message: '' });
    setSent(false);
  };

  const quickWhatsApp = () => {
    const msg = "Hi Omino Tech, I'd like to discuss a project with your team.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <PageTransition>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
          {/* Ambient backdrop orbs — GPU-only, no layout thrash */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-3xl rounded-full pointer-events-none transform-gpu" aria-hidden="true"></div>
          <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 blur-3xl rounded-full pointer-events-none transform-gpu" aria-hidden="true"></div>

          <Helmet>
            <title>Contact Omino Tech | Start Your Project Today</title>
            <meta name="description" content="Connect with Omino Tech via WhatsApp, email, or send a detailed project brief. Replies in minutes. Malaysia's strategic digital foundry." />
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <meta name="apple-mobile-web-app-title" content="Omino Tech" />
            <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
            <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
            <link rel="manifest" href="/site.webmanifest" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
          </Helmet>

          <m.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="py-24 md:py-40 px-6 max-w-7xl mx-auto flex-grow w-full relative z-10"
          >
            {/* =============== HERO — matches HomeView structure =============== */}
            <div className="mb-20 md:mb-24 text-center flex flex-col items-center">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-900/5 dark:border-white/5 bg-slate-900/[0.02] dark:bg-white/[0.02] text-slate-600 dark:text-slate-300 text-[10px] sm:text-xs font-bold font-mono uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <span>COMMUNICATION PROTOCOL | SECURE CHANNEL ACTIVE</span>
              </div>

              {/* H1 — matches About/Home page exactly */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[550] tracking-tighter text-slate-900 dark:text-white leading-[1.1] mb-10">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">
                  Extraordinary Together.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto mb-6">
                Three channels. Zero friction. Choose how you want to connect — your message reaches our team instantly.
              </p>

              {/* Student Founder tagline — gradient text matching the H1 */}
              <p className="text-base md:text-lg font-bold max-w-2xl mx-auto">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">
                  Lock in the Student Founder rate before we graduate to agency pricing.
                </span>
              </p>
            </div>

            {/* =============== QUICK CONNECT CARDS =============== */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-20 md:mb-24"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-indigo-500"></div>
                <span className="font-mono text-xs font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
                  Instant Channels
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* --- WhatsApp Card --- */}
                <button
                  type="button"
                  onClick={quickWhatsApp}
                  className="group relative text-left p-8 md:p-10 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-green-500/10 transform-gpu"
                  aria-label="Chat with us on WhatsApp"
                >
                  {/* Subtle gradient glow on hover */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-500">
                      <WhatsAppIcon size={26} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Online</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
                    WhatsApp Chat
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Fastest route to our engineering team. Typical reply time: <span className="font-bold text-slate-900 dark:text-white">under 10 minutes</span>.
                  </p>

                  <div className="flex items-center gap-2 text-green-600 dark:text-green-500 font-mono text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    Start Chat
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>

                {/* --- Email Card --- */}
                <a
                  href={`mailto:${EMAIL}?subject=New%20Project%20Inquiry%20-%20Omino%20Tech&body=Hi%20Omino%20Tech%20team%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project...`}
                  className="group relative text-left p-8 md:p-10 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-indigo-500/10 transform-gpu"
                  aria-label="Send us an email"
                >
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-cyan-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Mail size={24} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                      <ShieldCheck size={12} className="text-indigo-600 dark:text-indigo-400" />
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Formal</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
                    Email Protocol
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    For detailed RFPs, corporate proposals, or NDA-bound briefs. Response within <span className="font-bold text-slate-900 dark:text-white">12 hours</span>.
                  </p>

                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    Compose Message
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </div>
            </m.div>

            {/* =============== DETAILED FORM =============== */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-indigo-500"></div>
                <span className="font-mono text-xs font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
                  Or Send Detailed Brief
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* --- Intake Info Panel --- */}
                <div className="lg:col-span-5 p-6 md:p-10 bg-white dark:bg-white/[0.02] backdrop-blur-xl rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col justify-between">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                        <MessageSquare size={22} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                        Technical Intake
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Structured briefs route directly to our WhatsApp engineering channel — pre-packaged and ready for review.
                    </p>

                    <div className="space-y-4 pt-2">
                      {[
                        'Instant delivery to project lead',
                        'No lost leads. No form queue.',
                        'Reply within 10 minutes',
                      ].map((perk) => (
                        <div key={perk} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/5 space-y-5">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
                      Secure Channel Active
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                      <ShieldCheck size={14} /> Encrypted Handshake Ready
                    </div>
                  </div>
                </div>

                {/* --- Form / Success Screen --- */}
                <div className="lg:col-span-7">
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <m.div
                        key="success-message"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="p-10 md:p-16 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-emerald-500/40 rounded-[2.5rem] text-center shadow-2xl flex flex-col items-center h-full justify-center"
                      >
                        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 ring-4 ring-emerald-500/20">
                          <CheckCircle2 size={40} className="text-emerald-500" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-slate-100 mb-4 leading-[1.1]">
                          SIGNAL RECEIVED
                        </h3>
                        <p className="text-slate-700 dark:text-slate-200 text-xs uppercase tracking-widest mb-4 font-bold">
                          Your brief has been routed to WhatsApp.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-10 max-w-sm">
                          If WhatsApp didn't open automatically, check your browser popup blocker or tap the button below.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                          <button
                            onClick={quickWhatsApp}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-mono text-xs font-black uppercase tracking-widest shadow-lg shadow-green-500/30 hover:scale-105 transition-transform duration-300"
                          >
                            <WhatsAppIcon size={16} />
                            Open WhatsApp
                          </button>
                          <button
                            onClick={resetForm}
                            className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-black uppercase tracking-widest border-b-2 border-indigo-500/20 hover:border-indigo-500 transition-all pb-1"
                          >
                            New Transmission
                          </button>
                        </div>
                      </m.div>
                    ) : (
                      <m.form
                        key="contact-form"
                        variants={formContainer}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        onSubmit={handleSubmit}
                        className="p-8 md:p-12 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] space-y-8 shadow-2xl relative overflow-hidden"
                      >
                        {/* Identity + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <m.div variants={formItem} className="space-y-3">
                            <label htmlFor="name" className="font-mono text-[10px] md:text-xs uppercase text-slate-600 dark:text-slate-400 tracking-widest font-black block">
                              Identity / Organization
                            </label>
                            <input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              type="text"
                              placeholder="Name or Company"
                              className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-2xl p-4 md:p-5 text-slate-900 dark:text-slate-200 font-mono text-sm font-black focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder-slate-500 dark:placeholder-slate-500 shadow-inner transform-gpu focus:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                            />
                          </m.div>
                          <m.div variants={formItem} className="space-y-3">
                            <label htmlFor="email" className="font-mono text-[10px] md:text-xs uppercase text-slate-600 dark:text-slate-400 tracking-widest font-black block">
                              Signal Channel (Email)
                            </label>
                            <input
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              type="email"
                              placeholder="you@company.com"
                              className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-2xl p-4 md:p-5 text-slate-900 dark:text-slate-200 font-mono text-sm font-black focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder-slate-500 dark:placeholder-slate-500 shadow-inner transform-gpu focus:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                            />
                          </m.div>
                        </div>

                        {/* Service + Budget */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <m.div variants={formItem} className="space-y-3">
                            <label htmlFor="service" className="font-mono text-[10px] md:text-xs uppercase text-slate-600 dark:text-slate-400 tracking-widest font-black block">
                              Service Vector
                            </label>
                            <div className="relative">
                              <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="appearance-none w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-2xl p-4 md:p-5 pr-12 text-slate-900 dark:text-slate-200 font-mono text-sm font-black focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 shadow-inner transform-gpu focus:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-900/50 cursor-pointer"
                              >
                                <option value="" disabled>Select service…</option>
                                {SERVICE_OPTIONS.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                              <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                            </div>
                          </m.div>
                          <m.div variants={formItem} className="space-y-3">
                            <label htmlFor="budget" className="font-mono text-[10px] md:text-xs uppercase text-slate-600 dark:text-slate-400 tracking-widest font-black block">
                              Budget Range
                            </label>
                            <div className="relative">
                              <select
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                required
                                className="appearance-none w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-2xl p-4 md:p-5 pr-12 text-slate-900 dark:text-slate-200 font-mono text-sm font-black focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 shadow-inner transform-gpu focus:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-900/50 cursor-pointer"
                              >
                                <option value="" disabled>Select budget…</option>
                                {BUDGET_OPTIONS.map((b) => (
                                  <option key={b} value={b}>{b}</option>
                                ))}
                              </select>
                              <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                            </div>
                          </m.div>
                        </div>

                        {/* Message */}
                        <m.div variants={formItem} className="space-y-3">
                          <label htmlFor="message" className="font-mono text-[10px] md:text-xs uppercase text-slate-600 dark:text-slate-400 tracking-widest font-black block">
                            Mission Objective
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            placeholder="Technical requirements, ROI goals, timelines, or architectural objectives..."
                            className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-2xl p-4 md:p-5 text-slate-900 dark:text-slate-200 font-mono text-sm font-black focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 resize-none placeholder-slate-500 dark:placeholder-slate-500 shadow-inner transform-gpu focus:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                          />
                        </m.div>

                        {/* Delivery note */}
                        <m.div variants={formItem} className="flex items-start gap-3 px-4 py-3 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                          <Zap size={16} className="text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                          <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            On submit, your brief is packaged and delivered instantly to our WhatsApp channel for the fastest response.
                          </p>
                        </m.div>

                        {/* Submit */}
                        <m.div variants={formItem}>
                          <button
                            type="submit"
                            className="group w-full py-5 md:py-6 bg-indigo-600 text-white font-mono text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center gap-4 shadow-xl shadow-indigo-500/20 active:scale-95 hover:shadow-indigo-500/40 hover:-translate-y-1 transform-gpu"
                          >
                            <WhatsAppIcon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                            Deploy Transmission
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </m.div>
                      </m.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </m.div>

            {/* =============== DIRECT CONTACT STRIP =============== */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-20 md:mt-24"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-indigo-500"></div>
                <span className="font-mono text-xs font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
                  Direct Coordinates
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Location */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Balakong%2C+Selangor%2C+Malaysia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 md:p-8 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1 transform-gpu"
                  aria-label="View our location on Google Maps"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <MapPin size={18} />
                    </div>
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Location</span>
                  </div>
                  <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
                    Balakong, Selangor
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">Malaysia</p>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 md:p-8 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl transition-all duration-300 hover:border-green-500/40 hover:-translate-y-1 transform-gpu"
                  aria-label="Chat with us on WhatsApp"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600 dark:text-green-500">
                      <WhatsAppIcon size={18} />
                    </div>
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">WhatsApp</span>
                  </div>
                  <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
                    +60 11 2711 7920
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">Tap to chat instantly</p>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="group p-6 md:p-8 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl transition-all duration-300 hover:border-fuchsia-500/40 hover:-translate-y-1 transform-gpu"
                  aria-label="Send us an email"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                      <Mail size={18} />
                    </div>
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Email</span>
                  </div>
                  <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white break-all">
                    {EMAIL}
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">Formal inquiries</p>
                </a>
              </div>
            </m.div>
          </m.main>
          <Footer />
        </div>
      </LazyMotion>
    </PageTransition>
  );
};

export default ContactView;
