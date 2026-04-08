import React from 'react';
import { Facebook, Mail } from 'lucide-react';

const founders = [
  {
    name: "Ganesaa",
    role: "Founder & Technical Lead",
    bio: "I build the systems that power our clients' growth — from architecture to deployment. My focus is writing clean, performant code that solves real business problems.",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61576647099551&sk=about",
      email: "mailto:ominotechofficial@gmail.com"
    }
  },
  {
    name: "Syed Hakim",
    role: "Co-Founder & Head of Operations",
    bio: "I keep the business running and the clients growing. From onboarding to delivery, I ensure every project is on time, on budget, and exceeds expectations.",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61576647099551&sk=about",
      email: "mailto:ominotechofficial@gmail.com"
    }
  }
];

const Founders: React.FC = () => {
  return (
    <section className="mb-32 relative">
      <div className="text-center mb-10 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Engineers</span>, <br />
          Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Strategy</span>.
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We are not just developers; we are your technical partners. 
          Meet the leadership team committed to your digital success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {founders.map((founder, index) => (
          <div 
            key={index} 
            className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] p-1"
          >
            {/* Inner content container */}
            <div className="relative h-full bg-slate-950/90 rounded-[22px] p-8 md:p-10 overflow-hidden flex flex-col">
              
              {/* Background Glow Effects */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700" />
              
              {/* Top subtle gradient line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">{founder.name}</h3>
                    <div className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                      <p className="text-indigo-400 font-mono text-xs md:text-sm tracking-widest uppercase">{founder.role}</p>
                    </div>
                  </div>
                  <a
                    href={founder.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/25 group-hover:-translate-y-1"
                  >
                    <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
                
                <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-10 flex-grow">
                  {founder.bio}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50 mt-auto">
                   <a 
                    href={founder.social.email} 
                    className="group/email flex items-center gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                   >
                    <div className="p-2.5 bg-slate-900 rounded-lg group-hover/email:bg-indigo-500/20 transition-colors border border-slate-800 group-hover/email:border-indigo-500/30">
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="font-medium tracking-wide text-base">Get in touch</span>
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