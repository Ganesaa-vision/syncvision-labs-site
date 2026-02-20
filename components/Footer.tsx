import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 block">
              Ominos Tech
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
              Strategic Digital Foundry. We engineer high-performance digital assets for Malaysian businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Menu</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-indigo-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-indigo-500 transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-indigo-500 transition-colors">Work</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500 transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-indigo-500" />
                <span>Jalan KPB 12, Balakong<br />43300 Seri Kembangan, Selangor</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-indigo-500" />
                <span>+60 12 345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-indigo-500" />
                <span>hello@ominostech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Ominos Tech. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;