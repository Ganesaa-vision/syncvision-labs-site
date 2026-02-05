import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const founders = [
  {
    name: "Ganesaa", // Placeholder: Update with your actual name
    role: "Co-Founder & Strategic Lead",
    bio: "Driving the strategic vision of SyncVision. With a focus on scalable digital infrastructure and business growth, I ensure our partners stay ahead of the curve.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", // Placeholder: Replace with your photo URL
    social: {
      linkedin: "#",
      email: "mailto:contact@syncvision.com"
    }
  },
  {
    name: "Co-Founder", // Placeholder: Update with co-founder's name
    role: "Co-Founder & Technical Director",
    bio: "The engineering mind behind our high-performance systems. Specializing in Next.js architecture and AI integration to deliver robust, future-proof solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", // Placeholder: Replace with co-founder's photo URL
    social: {
      linkedin: "#",
      email: "mailto:tech@syncvision.com"
    }
  }
];

const Founders: React.FC = () => {
  return (
    <section className="mb-32 relative">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Engineers</span>, <br />
          Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Strategy</span>.
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We are not just developers; we are your technical partners. 
          Meet the leadership team committed to your digital success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {founders.map((founder, index) => (
          <div key={index} className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
            
            {/* Image Section */}
            <div className="h-80 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
              <img 
                src={founder.image} 
                alt={founder.name} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 relative z-20 -mt-12">
              <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-indigo-400 font-mono text-sm tracking-wide">{founder.role}</p>
                  </div>
                  <a href={founder.social.linkedin} className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  {founder.bio}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                   <a href={founder.social.email} className="flex items-center gap-2 text-sm text-slate-300 hover:text-indigo-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>Get in touch</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;