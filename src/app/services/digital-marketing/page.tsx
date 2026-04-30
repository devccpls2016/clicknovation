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

      {/* 1. Hero Section */}
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
                <span className="inline-flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                Digital Marketing
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Helping Your
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">
                  Local Business
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Grow Online</span>
                </span>
              </div>

              <h2 className="text-xl font-medium text-blue-200/80 italic max-w-lg">
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

            {/* Right Side: Animated Marketing Hub */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center lg:pl-12"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
              
              <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
                 {/* Central Core */}
                 <div className="relative z-20 w-48 h-48 md:w-56 md:h-56 bg-slate-900 border-2 border-white/10 rounded-full flex flex-col items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.3)] group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10" />
                    
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-4 border border-cyan-400/30 rounded-full"
                    />

                    <div className="relative z-10 flex flex-col items-center text-center px-4">
                       <motion.div
                         animate={{ rotate: 360 }}
                         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                         className="w-16 h-16 border-2 border-dashed border-blue-400/40 rounded-full mb-4 flex items-center justify-center"
                       >
                          <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                          </svg>
                       </motion.div>
                       <span className="text-[11px] font-black tracking-[0.3em] text-cyan-400 uppercase mb-1">Influence</span>
                       <span className="text-sm font-bold text-white uppercase tracking-widest leading-tight">Growth<br/>Engine</span>
                    </div>
                 </div>

                 {/* Orbiting Marketing Nodes */}
                 {[
                   { label: 'SEO', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', color: 'blue', angle: -60, dist: '45%' },
                   { label: 'SOCIAL', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z', color: 'cyan', angle: 60, dist: '45%' },
                   { label: 'ADS', icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122', color: 'sky', angle: 180, dist: '45%' }
                 ].map((node, i) => {
                    const x = `calc(50% + ${Math.cos(node.angle * Math.PI / 180)} * ${node.dist})`;
                    const y = `calc(50% + ${Math.sin(node.angle * Math.PI / 180)} * ${node.dist})`;
                    
                    return (
                      <motion.div
                        key={node.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                        className="absolute z-30"
                        style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                      >
                         <motion.div
                           animate={{ y: [0, -15, 0] }}
                           transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                           className="group cursor-default"
                         >
                            <div className="relative p-5 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center gap-3 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300">
                               <div className={`w-12 h-12 rounded-xl bg-${node.color}-500/10 flex items-center justify-center border border-${node.color}-500/20 group-hover:scale-110 transition-transform`}>
                                  <svg className={`w-6 h-6 text-${node.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={node.icon} />
                                  </svg>
                               </div>
                               <span className="text-xs font-bold tracking-wider text-white">{node.label}</span>
                            </div>

                            {/* Connection Lines */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none -z-10 overflow-visible">
                               <motion.path
                                 d={`M 40 40 L ${-Math.cos(node.angle * Math.PI / 180) * 110} ${-Math.sin(node.angle * Math.PI / 180) * 110}`}
                                 stroke={`url(#grad-mkt-${i})`}
                                 strokeWidth="2"
                                 strokeDasharray="4 8"
                                 fill="none"
                                 className="opacity-30"
                               />
                               <defs>
                                  <linearGradient id={`grad-mkt-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                     <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
                                     <stop offset="100%" stopColor="transparent" />
                                  </linearGradient>
                               </defs>
                            </svg>
                         </motion.div>
                      </motion.div>
                    );
                 })}

                 {/* Orbital Rings */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute w-full h-full border border-blue-500/30 rounded-full" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute w-3/4 h-3/4 border border-cyan-400/20 rounded-full border-dashed" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Problem Most Brands Face */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              The Problem Most Brands Face
            </h2>
            <p className="text-lg text-blue-300/80 max-w-2xl mx-auto italic font-medium">
              "Where Efforts Don’t Turn Into Results"
            </p>
            <p className="text-blue-100/70 max-w-3xl mx-auto mt-6">
              Many businesses invest time and money in marketing but still struggle to see real outcomes. Without the right strategy and direction, efforts often fail to deliver meaningful growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Traffic, No Conversions', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
              { title: 'Ads Without Clear ROI', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Inconsistent Presence', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
              { title: 'No Clear Direction', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' }
            ].map((prob, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-[2rem] bg-slate-950/40 border border-slate-700/50 backdrop-blur-sm flex flex-col items-center text-center group hover:bg-slate-800/80 hover:border-cyan-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={prob.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold text-white/90">{prob.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. From Visibility to Influence & Transformation */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
                The Shift
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                From Visibility to <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Influence</span>
              </h2>
              <h3 className="text-xl font-medium text-cyan-300 mb-6 italic">Turning Attention into Trust and Preference</h3>
              <p className="text-blue-100/70 text-lg leading-relaxed mb-6">
                Running ads is easy — building real influence is what sets a brand apart. We focus on creating a strong and consistent presence that not only attracts attention but also builds trust and credibility over time.
              </p>
              <p className="text-blue-100/70 text-lg leading-relaxed">
                At Clicknovation, our approach is to move your brand beyond basic visibility and position it as a reliable and preferred choice in your market.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Our Transformation Approach</h3>
              {[
                { from: 'Just Another Option', to: 'A Preferred Choice', desc: 'We help your brand stand out with clear positioning and strong messaging that builds trust and preference.' },
                { from: 'Occasional Visibility', to: 'Consistent Presence', desc: 'We ensure your brand stays active and visible across the right platforms with a consistent strategy.' },
                { from: 'Random Traffic', to: 'Intent-Driven Audience', desc: 'We target the right audience who are more likely to engage, convert, and become long-term customers.' }
              ].map((item, idx) => (
                <div key={idx} className="relative p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all group overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                   <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <span className="text-slate-400 font-medium line-through decoration-slate-500/50">{item.from}</span>
                      <svg className="hidden sm:block w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      <svg className="sm:hidden w-5 h-5 text-cyan-400 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      <span className="text-cyan-300 font-bold text-lg">{item.to}</span>
                   </div>
                   <p className="text-sm text-blue-100/60">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Mindset & Beliefs */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">Our Marketing Mindset</h2>
            <p className="text-xl text-cyan-300 italic max-w-2xl mx-auto">Understanding People Before Platforms</p>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-20 text-blue-100/80 text-lg leading-relaxed space-y-6">
            <p>
              We don’t begin with tools or platforms. We start with understanding your audience, their behavior, and their intent. Because effective marketing is not about where you post, but how well you connect.
            </p>
            <p>
              At Clicknovation, we focus on creating strategies built around real people and real needs, ensuring every effort delivers meaningful results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden md:block" />
             {[
               { title: 'The Right Message Meets The Right Audience', desc: 'Clear and relevant communication that speaks directly to your customers', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
               { title: 'At the Right Time', desc: 'Reaching your audience when they are most likely to engage and take action', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
               { title: 'In the Right Format', desc: 'Delivering content in a way that is easy to understand, engaging, and impactful', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' }
             ].map((belief, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-8 rounded-[2rem] bg-slate-900/80 border border-white/5 backdrop-blur-md text-center group hover:bg-slate-800 transition-all z-10"
                >
                   <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:-translate-y-2 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={belief.icon} /></svg>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4 leading-snug">{belief.title}</h3>
                   <p className="text-blue-100/60 text-sm">{belief.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Services - Digital Marketing Solutions Bento Grid */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
              Digital Marketing Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              End-to-End <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Digital Growth</span>
            </h2>
            <p className="text-lg text-blue-100/70 max-w-3xl mx-auto">
               We provide complete digital marketing services designed to help your business attract the right audience, build trust, and generate consistent results. Our focus is not just on marketing activities, but on creating measurable business growth.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
             {/* 1. SEO - Large Horizontal */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-40 h-40 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                   </div>
                   <h3 className="text-3xl font-extrabold text-white mb-4">Search Engine Optimization (SEO)</h3>
                   <p className="text-blue-100/70 text-lg max-w-lg mb-6">Improve your visibility on search engines and attract organic traffic that converts.</p>
                   <ul className="grid grid-cols-2 gap-2 text-sm text-blue-200/60">
                      <li>• Keyword intent research</li>
                      <li>• On-page optimization</li>
                      <li>• Technical SEO</li>
                      <li>• Local & Regional SEO</li>
                   </ul>
                </div>
             </motion.div>

             {/* 2. SMM - Vertical */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.1 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="h-full flex flex-col">
                   <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Social Media Marketing</h3>
                   <p className="text-blue-100/60 leading-relaxed mb-4">Build a strong brand presence and connect with your audience across platforms.</p>
                   <div className="mt-auto flex gap-2 flex-wrap">
                      <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-cyan-300">Instagram</span>
                      <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-cyan-300">Facebook</span>
                      <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-cyan-300">YouTube</span>
                   </div>
                </div>
             </motion.div>

             {/* 3. Paid Ads - Tall */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="md:col-span-4 md:row-span-2 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="h-full flex flex-col">
                   <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
                      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Performance Marketing</h3>
                   <p className="text-blue-100/60 leading-relaxed mb-8">Run targeted ad campaigns that generate leads, sales, and measurable ROI.</p>
                   
                   <div className="space-y-4">
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                         <div className="text-sm font-bold text-white mb-1">Google Ads</div>
                         <div className="text-xs text-blue-300/60">Search & YouTube</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                         <div className="text-sm font-bold text-white mb-1">Social Ads</div>
                         <div className="text-xs text-blue-300/60">Instagram, Facebook, WhatsApp</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                         <div className="text-sm font-bold text-white mb-1">Targeting</div>
                         <div className="text-xs text-blue-300/60">Audience & Retargeting Strategy</div>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* 4. Brand Strategy */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30">
                   <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Brand Positioning</h3>
                <p className="text-blue-100/60 text-sm leading-relaxed">Define how your brand is perceived. Unique value proposition (UVP), brand voice, and long-term digital growth roadmap.</p>
             </motion.div>

             {/* 5. Content Marketing */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-sky-500/30 transition-all"
             >
                <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-6 border border-sky-500/30">
                   <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Content Marketing</h3>
                <p className="text-blue-100/60 text-sm leading-relaxed">Create meaningful content that attracts, educates, and converts. Web content, ad creatives, and storytelling.</p>
             </motion.div>

             {/* 6. Lead Gen */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-indigo-500/30 transition-all"
             >
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/30">
                   <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lead Gen & Funnel</h3>
                <p className="text-blue-100/60 text-sm leading-relaxed">Build systems that consistently generate leads. Funnel design (awareness → conversion), and email workflows.</p>
             </motion.div>

             {/* 7. Analytics */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.6 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-teal-500/30 transition-all"
             >
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 border border-teal-500/30">
                   <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics & Tracking</h3>
                <p className="text-blue-100/60 text-sm leading-relaxed">Make informed decisions. Campaign reports, user behavior analysis, and continuous optimization based on data.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Working Approach (Process Pipeline) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Our Working Approach</h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto">
              We follow a structured and result-oriented process ensuring every campaign is aligned with your business goals and continuously improved.
            </p>
          </div>

          <div className="relative">
             <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 rounded-full hidden md:block -translate-y-1/2" />
             <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hidden md:block -translate-y-1/2 opacity-50 blur-sm" />
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: '01', title: 'Research', desc: 'Analyzing audience and market', color: 'blue' },
                  { step: '02', title: 'Strategy', desc: 'Crafting the targeted plan', color: 'cyan' },
                  { step: '03', title: 'Execution', desc: 'Deploying the campaigns', color: 'sky' },
                  { step: '04', title: 'Optimization', desc: 'Refining based on data', color: 'indigo' }
                ].map((phase, idx) => (
                   <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                     viewport={{ once: true }}
                     className="relative text-center group"
                   >
                      <div className={`w-20 h-20 mx-auto rounded-full bg-slate-900 border-4 border-slate-950 shadow-[0_0_0_2px_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:border-${phase.color}-500 transition-all duration-300 relative z-10`}>
                         <span className={`text-2xl font-black text-${phase.color}-400`}>{phase.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                      <p className="text-sm text-blue-100/60">{phase.desc}</p>
                   </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden shadow-2xl border border-blue-500/20"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Start Your Journey Now
              </h2>
              <h3 className="text-xl text-cyan-300 mb-8 font-medium">Take the First Step Towards Smarter Growth</h3>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                Every successful digital journey begins with a simple decision. At Clicknovation, we make that first step easy, clear, and focused on results. Whether starting new or scaling up, we guide you with the right strategy.
              </p>
              <button className="px-10 py-4 bg-white text-blue-950 font-bold rounded-full text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-blue-50 hover:scale-105 transition-all">
                Let's Discuss Your Growth
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}