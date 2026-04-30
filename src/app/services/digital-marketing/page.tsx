'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-blue-950 text-white overflow-hidden">
      {/* Background Ornaments */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.15),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.15),_transparent_40%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      {/* 1. HERO VISION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30">
                <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Strategic Digital Growth
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Helping Your
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-sm pb-2">Business Grow Online.</span>
                </span>
              </div>

              <h2 className="text-2xl font-bold text-cyan-300/90 italic tracking-wide">
                Marketing today is not about being everywhere. It's about reaching the right people at the right time.
              </h2>
              
              <div className="space-y-4 text-blue-100/70 text-lg leading-relaxed max-w-2xl pt-4 border-l-2 border-cyan-500/30 pl-6">
                <p>
                  For local businesses, this means building a strong presence where your customers are already looking. 
                </p>
                <p>
                  At Clicknovation, we create simple and effective digital marketing strategies that help your business get noticed, attract the right audience, and turn them into loyal customers.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Animated Marketing Funnel / Orbit */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center lg:pl-12"
            >
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
              
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                 {/* Central Core */}
                 <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 bg-slate-900 border border-cyan-500/30 rounded-full shadow-[0_0_60px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-500 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/10" />
                    <svg className="w-12 h-12 text-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-xs font-bold tracking-widest text-white">GROWTH</span>
                 </div>

                 {/* Orbital paths */}
                 <div className="absolute w-[60%] h-[60%] border border-cyan-500/20 rounded-full" />
                 <div className="absolute w-[85%] h-[85%] border border-blue-500/20 rounded-full border-dashed" />
                 <div className="absolute w-[110%] h-[110%] border border-cyan-500/10 rounded-full" />

                 {/* Orbiting Elements */}
                 {[
                   { label: 'SEO', angle: 0, radius: '42.5%', color: 'bg-cyan-500', delay: 0 },
                   { label: 'ADS', angle: 120, radius: '42.5%', color: 'bg-blue-500', delay: -5 },
                   { label: 'SOCIAL', angle: 240, radius: '42.5%', color: 'bg-indigo-500', delay: -10 }
                 ].map((orb, i) => (
                    <motion.div
                      key={orb.label}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: orb.delay }}
                      className="absolute w-full h-full z-30 pointer-events-none"
                    >
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top: `calc(50% - ${orb.radius})` }}>
                          <motion.div 
                            animate={{ rotate: -360 }} 
                            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: orb.delay }}
                            className="bg-slate-800 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-md shadow-xl flex flex-col items-center gap-1 group pointer-events-auto hover:bg-slate-700 hover:border-cyan-400 transition-colors"
                          >
                             <div className={`w-3 h-3 rounded-full ${orb.color} shadow-[0_0_10px_currentColor]`} />
                             <span className="text-[10px] font-bold text-white tracking-wider">{orb.label}</span>
                          </motion.div>
                       </div>
                    </motion.div>
                 ))}

                 {/* Floating floating particles */}
                 {[...Array(6)].map((_, i) => (
                   <motion.div
                     key={i}
                     animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                     transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                     className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                     style={{
                       left: `${Math.random() * 100}%`,
                       top: `${Math.random() * 100}%`
                     }}
                   />
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM GRID (Dark/Warning Tone) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-cyan-400 ring-1 ring-cyan-500/30 mb-8">
                The Challenge
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                The Problem Most Brands Face: <br/> <span className="text-blue-400">Where Efforts Don’t Turn Into Results</span>
              </h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                Many businesses invest time and money in marketing but still struggle to see real outcomes. Without the right strategy and direction, efforts often fail to deliver meaningful growth.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Traffic, but no conversions.', desc: 'People visit your site, but no one buys or calls.', icon: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6' },
              { title: 'Running ads without clear ROI.', desc: 'Spending money on ads without knowing what actually works.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Inconsistent brand presence.', desc: 'Posting randomly across platforms without a unified message.', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
              { title: 'No clear marketing direction.', desc: 'Lacking a roadmap to systematically acquire new customers.', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' }
            ].map((problem, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all flex items-start gap-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={problem.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FROM VISIBILITY TO INFLUENCE */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden group">
                 {/* Decorative background grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                 
                 <div className="relative z-10 text-center space-y-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-24 h-24 mx-auto bg-slate-900 border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.5)]"
                    >
                       <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                       </svg>
                    </motion.div>
                    <div className="bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30">
                       <span className="text-cyan-300 font-bold tracking-widest uppercase">Influence Built</span>
                    </div>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                From Visibility to <span className="text-cyan-400">Influence.</span>
              </h2>
              <h3 className="text-xl text-blue-300 font-medium mb-6">Turning Attention into Trust and Preference</h3>
              <p className="text-blue-100/70 text-lg leading-relaxed mb-8">
                Running ads is easy — building real influence is what sets a brand apart. We focus on creating a strong and consistent presence that not only reaches your audience but compels them to choose you over the competition.
              </p>
              
              <ul className="space-y-6">
                 {[
                   { title: 'Data-Driven Positioning', desc: 'We place your brand exactly where your audience is most active.' },
                   { title: 'Engaging Content', desc: 'Message framing that resonates and builds trust.' },
                   { title: 'Conversion Optimization', desc: 'Turning casual scrollers into committed buyers.' }
                 ].map((item, idx) => (
                   <li key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                         <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-lg">{item.title}</h4>
                         <p className="text-blue-100/60 text-sm">{item.desc}</p>
                      </div>
                   </li>
                 ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES BENTO */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
              Service Pillars
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Core Marketing <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
             {/* SEO - Large */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
                <div className="relative z-10 h-full flex flex-col justify-center">
                   <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30">
                      <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                   </div>
                   <h3 className="text-3xl font-extrabold text-white mb-2">Search Engine Optimization (SEO)</h3>
                   <p className="text-blue-100/70 text-lg max-w-lg mt-2">Rank higher on Google. We optimize your website structurally and content-wise so local customers find you first when they search for your services.</p>
                </div>
             </motion.div>

             {/* Paid Ads - Vertical */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.1 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="h-full flex flex-col">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Paid Advertising</h3>
                   <p className="text-blue-100/60 text-sm leading-relaxed mt-2">Targeted Google & Meta ad campaigns designed purely for ROI and lead generation. Stop wasting ad spend.</p>
                </div>
             </motion.div>

             {/* Social Media - Vertical */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="h-full flex flex-col justify-center">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Social Media Management</h3>
                   <p className="text-blue-100/60 text-sm leading-relaxed mt-2">Build a community. We manage your profiles to establish authority and keep your brand top-of-mind.</p>
                </div>
             </motion.div>

             {/* Content & Branding - Large */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3 }}
               className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
                <div className="relative z-10 h-full flex flex-col justify-center">
                   <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30">
                      <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                   </div>
                   <h3 className="text-3xl font-extrabold text-white mb-2">Content & Brand Storytelling</h3>
                   <p className="text-blue-100/70 text-lg max-w-lg mt-2">Your brand needs a voice. We produce high-quality copy, visuals, and messaging that clearly articulates your value proposition to the market.</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-slate-900 to-blue-950 relative overflow-hidden shadow-2xl border border-cyan-500/20"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Stop Guessing. <br /> Start Growing.
              </h2>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                Let Clicknovation Technologies build a marketing engine that consistently drives high-quality leads and establishes your brand as the leader in your space.
              </p>
              
              <button className="px-10 py-4 bg-cyan-500 text-slate-950 font-bold rounded-full text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:bg-cyan-400 hover:scale-105 transition-all">
                Plan Your Strategy
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}