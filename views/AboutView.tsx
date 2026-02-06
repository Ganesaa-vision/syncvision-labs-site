import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { 
  Code, BrainCircuit, 
  Terminal, Zap, ShieldCheck, Rocket,
  Target, Users
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-slate-100 font-sans selection:bg-green-500/30 overflow-x-hidden">
      <Helmet>
        <title>About Us | The Rebellion - SyncVision Labs</title>
        <meta name="description" content="We are the glitch in the matrix. A team of student innovators building the future while agencies bill for meeting hours." />
      </Helmet>

      {/* Background Elements */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto relative z-10">
        
        {/* HERO SECTION */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20 md:mb-40 text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-mono mb-8">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             SYSTEM_OVERRIDE_INITIATED
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-10">
            We Are The <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 glitch-text">
              Glitch In The Matrix.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
            While big agencies are still billing you for 'meeting hours,' we are building the future. <span className="text-white font-bold">We are SyncVision Labs.</span>
          </motion.p>
        </motion.div>

        {/* 1. THE ORIGIN STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 md:mb-40">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="absolute -inset-4 bg-green-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-900/50 border border-green-500/20 p-10 rounded-3xl backdrop-blur-sm">
                 <Code className="w-12 h-12 text-green-500 mb-6" />
                 <h2 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">The Rebellion Against Bloat</h2>
                 <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                    <p>
                      <strong className="text-white">SyncVision Labs wasn't started in a boardroom.</strong> It started in a dorm room at 3 AM, fueled by coffee and code.
                    </p>
                    <p>
                      We looked at the Malaysian digital landscape and saw a problem. Traditional agencies were charging RM 15,000 for websites that looked like they were built in 2015. They had fancy offices, expensive coffee machines, and layers of 'account managers'—and you were paying for all of it.
                    </p>
                    <p>
                      We realized that in the age of AI and modern tech, quality doesn't need to be expensive. It just needs to be smart.
                    </p>
                    <p>
                       We are a team of Computer Science innovators. We don't have overhead. We don't have 'office hours.' We have obsession. We built SyncVision Labs to prove a point: That a hungry team of innovators with the latest tech can outperform a sluggish corporate giant any day of the week.
                    </p>
                 </div>
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
           >
              <div className="p-8 border-l-2 border-green-500/30 bg-white/[0.02]">
                 <p className="text-xl font-medium text-white leading-relaxed italic mb-6">
                   "You aren't hiring someone to catch up; you're hiring someone who is already ahead."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                        <span className="font-bold text-xs text-green-500">GL</span>
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm">Ganesaa</div>
                        <div className="text-slate-500 text-xs uppercase tracking-widest">Founder, SyncVision Labs</div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* 2. THE STUDENT INNOVATOR ADVANTAGE */}
        <div className="mb-40">
           <div className="text-center mb-20">
              <span className="text-green-500 font-mono text-xs font-black uppercase tracking-[0.3em] mb-4 block">The Advantage</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Student Advantage</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Most people think hiring a student is a risk. <br/>Here is why hiring an agency is the real risk.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-slate-900/30 border border-white/10 p-8 rounded-3xl hover:border-green-500/50 transition-colors duration-300 group relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Users size={100} /></div>
                 <div className="w-12 h-12 bg-green-900/20 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">Agencies are Comfortable. <br/> We are Hungry.</h3>
                 <p className="text-slate-400 leading-relaxed">
                    An agency employee goes home at 5 PM. They get paid whether your project succeeds or fails. We are building our reputation from zero. We don't just want your project to work; we need it to be a masterpiece. We code with a level of passion that a salary can't buy.
                 </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-green-900/10 border border-green-500/20 p-8 rounded-3xl transition-colors duration-300 group relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-green-500"><BrainCircuit size={100} /></div>
                 <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                    <Terminal size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">They Use Yesterday's Tools. <br/> We Build Tomorrow's.</h3>
                 <p className="text-green-100/80 leading-relaxed">
                    While agencies are still struggling to understand AI, we are native to it. We use Gemini, Flutter, and Next.js—the tech stack of 2026—not the dusty PHP templates of 2010.
                 </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-slate-900/30 border border-white/10 p-8 rounded-3xl hover:border-green-500/50 transition-colors duration-300 group relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Code size={100} /></div>
                 <div className="w-12 h-12 bg-green-900/20 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                    <Target size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">You Pay for Code, <br/> Not Rent.</h3>
                 <p className="text-slate-400 leading-relaxed">
                    When you pay an agency RM 20,000, half of that goes to their office rent and electricity bill. When you pay us, 100% of your budget goes into the Innovation of your product.
                 </p>
              </motion.div>
           </div>
        </div>

        {/* 3. PHILOSOPHY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40 items-center">
           <div>
              <span className="text-green-500 font-mono text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-mono uppercase">Innovation at the <br/> Speed of Thought</h2>
              <p className="text-slate-400 text-lg mb-8">
                We don't believe in 6-month timelines for a website. That’s absurd. We believe in Agile Innovation.
              </p>
              <div className="space-y-6">
                 {[
                    { title: "Eliminate the Noise", desc: "No unnecessary meetings. We communicate via code and results." },
                    { title: "Automate the Boring", desc: "We use AI to handle the mundane tasks so we can focus on the creative magic." },
                    { title: "Democratize Tech", desc: "A small Malaysian business should have the same tech power as a global corporation." }
                 ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 p-6 bg-slate-900/20 border border-white/5 rounded-2xl hover:bg-slate-900/40 transition-colors"
                    >
                       <div className="text-green-500 font-mono font-bold text-xl">0{i+1}</div>
                       <div>
                          <h4 className="text-white font-bold mb-2">{item.title}</h4>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
           
           <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl rounded-full opacity-30"></div>
              <div className="relative bg-slate-950 border border-green-500/20 rounded-3xl p-8 overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck size={120} /></div>
                 <h3 className="text-xl font-bold text-white mb-8 font-mono uppercase tracking-widest border-b border-white/10 pb-4">Vital Stats</h3>
                 
                 <div className="space-y-8">
                    <div>
                       <div className="text-xs text-green-500 font-mono uppercase tracking-widest mb-2">Core Stack</div>
                       <div className="flex flex-wrap gap-2">
                          {['Flutter (Mobile)', 'React/Next.js (Web)', 'Python/AI'].map(tag => (
                             <span key={tag} className="px-3 py-1 bg-green-900/20 border border-green-500/20 rounded text-green-400 text-xs font-mono">{tag}</span>
                          ))}
                       </div>
                    </div>
                    <div>
                       <div className="text-xs text-green-500 font-mono uppercase tracking-widest mb-2">Mission</div>
                       <p className="text-slate-300 text-sm">To lower the barrier of entry for Malaysian businesses to go digital.</p>
                    </div>
                    <div>
                       <div className="text-xs text-green-500 font-mono uppercase tracking-widest mb-2">Standard</div>
                       <p className="text-slate-300 text-sm">We don't ship code we aren't proud of.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 5. PROMISE & CTA */}
        <div className="relative rounded-[3rem] overflow-hidden bg-green-950/20 border border-green-500/20 p-12 md:p-24 text-center">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-green-500/10 to-transparent blur-3xl pointer-events-none"></div>
           
           <div className="relative z-10">
              <h3 className="text-green-500 font-mono text-sm font-black uppercase tracking-[0.3em] mb-8">The SyncVision Promise</h3>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
                "We are not the cheapest because we cut corners. We are the most affordable because we cut out the nonsense. If you want a team that wears suits and talks about 'synergy,' hire an agency. <br/><br/>
                <span className="text-white font-bold">If you want a team that stays up until the job is perfect because we love what we do... Hire SyncVision.</span>"
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link to="/contact" className="px-10 py-5 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-105">
                    Join the Rebellion <Rocket size={18} />
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AboutView;