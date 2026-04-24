'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function NetworkInfrastructure() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-blue-950 text-white overflow-hidden">
      {/* Background Ornaments */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.5),_transparent_35%)] pointer-events-none z-0" />
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
                <span className="inline-flex h-2 w-2 rounded-full bg-blue-400" />
                Network & Infrastructure
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Building Strong,
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">
                  Secure & Scalable
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Foundations</span>
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-blue-300 italic">
                Powering your business with reliable infrastructure.
              </h2>
              
              <div className="space-y-4 text-blue-100/80 text-lg leading-relaxed max-w-2xl pt-4 border-l-2 border-blue-500/30 pl-6">
                <p>
                  At Clicknovation, we design and manage high-performance network and infrastructure solutions that support your entire digital ecosystem.
                </p>
                <p>
                  From startups to growing enterprises, we ensure your systems remain fast, secure, and always available.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Redesigned Infrastructure Dashboard Hub */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center lg:pl-12"
            >
              {/* Main Ambient Glow */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
              
              <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
                 
                 {/* 1. The Central Information Hub */}
                 <div className="relative z-20 w-44 h-44 md:w-52 md:h-52 bg-slate-900 border-2 border-white/10 rounded-[3rem] flex flex-col items-center justify-center shadow-[0_0_80px_rgba(37,99,235,0.3)] group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10" />
                    
                    {/* Pulsing Core Scanner */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-4 border border-blue-400/30 rounded-[2.5rem]"
                    />

                    <div className="relative z-10 flex flex-col items-center text-center px-4">
                       <motion.div
                         animate={{ rotate: 360 }}
                         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                         className="w-14 h-14 border-2 border-dashed border-cyan-400/40 rounded-2xl mb-4 flex items-center justify-center"
                       >
                          <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]" />
                       </motion.div>
                       <span className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase mb-1">Infrastructure</span>
                       <span className="text-sm font-black text-white uppercase tracking-widest leading-tight">Business<br/>Continuity</span>
                    </div>
                 </div>

                 {/* 2. Technical Feature Pods (Orbiting) */}
                 {[
                   { label: 'STRONG', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'blue', angle: -90, dist: '42%' },
                   { label: 'SECURE', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', color: 'cyan', angle: 30, dist: '42%' },
                   { label: 'SCALABLE', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'indigo', angle: 150, dist: '42%' }
                 ].map((pod, i) => {
                    const x = `calc(50% + ${Math.cos(pod.angle * Math.PI / 180)} * ${pod.dist})`;
                    const y = `calc(50% + ${Math.sin(pod.angle * Math.PI / 180)} * ${pod.dist})`;
                    
                    return (
                      <motion.div
                        key={pod.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                        className="absolute z-30"
                        style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                      >
                         <motion.div
                           animate={{ y: [0, -10, 0] }}
                           transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                           className="group cursor-default"
                         >
                            <div className="relative p-6 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-4 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300">
                               <div className={`w-14 h-14 rounded-2xl bg-${pod.color}-500/10 flex items-center justify-center border border-${pod.color}-500/20 group-hover:scale-110 transition-transform`}>
                                  <svg className={`w-8 h-8 text-${pod.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pod.icon} />
                                  </svg>
                               </div>
                               <div className="flex flex-col items-center">
                                  <span className="text-xs font-black tracking-widest text-white">{pod.label}</span>
                                  <div className={`h-1 w-6 bg-${pod.color}-500/40 rounded-full mt-2`} />
                               </div>
                            </div>

                            {/* Animated Connection Stream */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none -z-10 overflow-visible">
                               <motion.path
                                 d={`M 40 40 L ${-Math.cos(pod.angle * Math.PI / 180) * 100} ${-Math.sin(pod.angle * Math.PI / 180) * 100}`}
                                 stroke={`url(#grad-${i})`}
                                 strokeWidth="1"
                                 strokeDasharray="4 8"
                                 fill="none"
                                 className="opacity-20"
                               />
                               <defs>
                                  <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                     <stop offset="0%" stopColor="white" />
                                     <stop offset="100%" stopColor="transparent" />
                                  </linearGradient>
                               </defs>
                            </svg>
                         </motion.div>
                      </motion.div>
                    );
                 })}

                 {/* 3. Background Orbital Rings */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="absolute w-full h-full border border-blue-500/20 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute w-3/4 h-3/4 border border-cyan-400/20 rounded-full border-dashed"
                    />
                 </div>

                 {/* 4. Moving Data Particles */}
                 {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        rotate: 360,
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 2
                      }}
                      className="absolute inset-0 flex items-start justify-center"
                    >
                       <div className="w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]" />
                    </motion.div>
                 ))}
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* 2. Our Approach */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Our Approach
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Performance, security, and <span className="text-cyan-400">scalability at the core.</span>
            </h2>
            <p className="text-lg text-blue-100/70 max-w-3xl mx-auto">
               We believe a strong IT infrastructure is the backbone of every successful business. Our approach ensures seamless operations, minimal disruptions, and long-term reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Future-Ready Architecture', 
                desc: 'Designed to grow with your business. We build infrastructure that adapts to evolving technologies.', 
                icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
              },
              { 
                title: 'High Performance & Uptime', 
                desc: 'Consistent speed and uninterrupted operations. Optimized networks deliver fast connectivity with minimal downtime.', 
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              },
              { 
                title: 'Security-First Mindset', 
                desc: 'Protection at every layer. Advanced security measures safeguard your data, systems, and operations.', 
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl group hover:bg-slate-800/60 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-blue-100/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section - Bento Grid */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Our Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-[1.1]">
              Comprehensive solutions for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">performance, security, and growth.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px]">
            {/* 1. Network Design - Large Horizontal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-40 h-40 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                 </svg>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                 <div className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">Service 01</div>
                 <h3 className="text-3xl font-extrabold text-white mb-4">Network Design & Setup</h3>
                 <p className="text-blue-100/70 text-lg max-w-lg mb-8">Efficient connectivity tailored to your needs. LAN, WAN, and wireless planning with expert configuration.</p>
                 <div className="flex flex-wrap gap-4">
                    {['LAN/WAN', 'Wireless', 'Router/Switch', 'Planning'].map(t => (
                       <span key={t} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-300">{t}</span>
                    ))}
                 </div>
              </div>
            </motion.div>

            {/* 2. Server Management - Vertical */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group"
            >
               <div className="h-full flex flex-col">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
                     <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Server Management</h3>
                  <p className="text-blue-100/60 leading-relaxed">Reliable servers for uninterrupted operations. Installation, performance monitoring, and regular maintenance.</p>
               </div>
            </motion.div>

            {/* 3. Network Security - Tall */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 md:row-span-1 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group"
            >
               <div className="h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-cyan-600/20 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/30">
                     <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Network Security</h3>
                  <p className="text-blue-100/60 leading-relaxed">Advanced protection against modern threats. Firewall setup, encryption, and threat monitoring.</p>
               </div>
            </motion.div>

            {/* 4. IT Infra Mgmt - Large Horizontal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group"
            >
               <div className="relative z-10 h-full flex items-center gap-8">
                  <div className="hidden lg:flex flex-shrink-0 w-32 h-32 bg-indigo-600/10 rounded-full border border-indigo-500/20 items-center justify-center">
                     <svg className="w-16 h-16 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">IT Infrastructure Management</h3>
                    <p className="text-blue-100/60 leading-relaxed max-w-lg">End-to-end management for seamless performance. Hardware integration, system monitoring, and troubleshooting.</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Strategy & Execution - Redesigned Simple & Attractive Horizontal Flow */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Success Framework
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              A Simplified <span className="text-blue-400">Path to Performance.</span>
            </h2>
          </motion.div>

          <div className="relative">
             {/* Simple Success Path Line */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden lg:block" />

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {[
                  { 
                    title: 'Understand', 
                    desc: 'We analyze your workflows and future goals to build a risk-free foundation.',
                    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                    color: 'blue'
                  },
                  { 
                    title: 'Architect', 
                    desc: 'Strategic design of high-performance blueprints optimized for your specific scale.',
                    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
                    color: 'cyan'
                  },
                  { 
                    title: 'Scale', 
                    desc: 'Continuous monitoring and expansion strategies to ensure 100% business continuity.',
                    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                    color: 'indigo'
                  }
                ].map((step, idx) => (
                   <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                     viewport={{ once: true }}
                     className="relative group"
                   >
                      <div className="relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl group-hover:bg-slate-800/60 group-hover:border-blue-500/30 transition-all duration-300">
                         <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${step.color}-600 to-${step.color}-800 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                            </svg>
                         </div>
                         <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                         <p className="text-blue-100/60 leading-relaxed text-sm">
                            {step.desc}
                         </p>
                         
                         {/* Simple Pulse Dot */}
                         <div className="absolute top-8 right-8">
                            <span className={`flex h-2 w-2 rounded-full bg-${step.color}-400 opacity-20 group-hover:opacity-100 transition-opacity animate-pulse`} />
                         </div>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>


      {/* 5. Industries We Serve - Redesigned Technical Service Grid */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
             <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
               className="lg:col-span-5"
             >
                <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                  Global Service Matrix
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1]">
                  Engineered for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text pb-2">Every Scale.</span>
                </h2>
                <p className="text-lg text-blue-100/70 mb-10 leading-relaxed">
                   Our infrastructure frameworks are designed to adapt to the unique technological demands of specialized industries, ensuring zero-risk operations.
                </p>
                
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   </div>
                   <div>
                      <div className="text-white font-bold">100% Industry Compliant</div>
                      <div className="text-blue-300/60 text-sm">Tailored standards for every sector</div>
                   </div>
                </div>
             </motion.div>
             
             <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: 'Startups & SMEs', icon: 'M13 10V3L4 14h7v7l9-11h-7z', tag: 'Fast Scaling' },
                  { name: 'Corporate Offices', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', tag: 'High Uptime' },
                  { name: 'E-commerce Platforms', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', tag: 'Secure Flow' },
                  { name: 'Educational Tech', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', tag: 'Mass Load' },
                  { name: 'Healthcare Systems', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', tag: 'Zero Leak' }
                ].map((ind, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.1 }}
                     className="p-8 rounded-[2rem] bg-slate-900 border border-white/5 relative group hover:border-blue-500/40 transition-all overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />
                      <div className="relative z-10">
                         <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ind.icon} />
                            </svg>
                         </div>
                         <h3 className="text-xl font-bold text-white mb-2">{ind.name}</h3>
                         <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-blue-300/40 uppercase tracking-[0.2em]">{ind.tag}</span>
                            <div className="flex-1 h-px bg-white/5" />
                            <div className="text-[10px] font-bold text-green-400">Optimized</div>
                         </div>
                      </div>
                      
                      {/* Subtle Technical Pattern */}
                      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.png')] mix-blend-overlay" />
                   </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose & Clicknovation Advantage */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
               {/* Why Choose */}
               <motion.div 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                 className="space-y-8"
               >
                  <h2 className="text-4xl font-extrabold text-white">Why Choose <span className="text-blue-400">Clicknovation</span></h2>
                  <div className="space-y-6">
                     {[
                       { t: 'Reliable & Scalable', d: 'Our infrastructure ensures consistent performance while scaling with your business needs.' },
                       { t: 'Expert Team Support', d: 'Technical expertise you can depend on. Proactive approach to ensure smooth operations.' },
                       { t: 'End-to-End Management', d: 'From planning and deployment to maintenance and optimization, we handle everything.' },
                       { t: 'Cost-Effective Approach', d: 'Maximizing value without unnecessary complexity. Optimized for efficiency and budget.' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black">
                              {i + 1}
                           </div>
                           <div>
                              <h4 className="text-lg font-bold text-white mb-1">{item.t}</h4>
                              <p className="text-blue-100/60 text-sm leading-relaxed">{item.d}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>

               {/* Advantage */}
               <motion.div 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                 className="p-10 rounded-[3rem] bg-blue-600/10 border border-blue-500/20 relative overflow-hidden"
               >
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                  <h2 className="text-3xl font-black text-white mb-8">Clicknovation Advantage</h2>
                  <div className="space-y-8">
                     {[
                       'Focused on simplicity without unnecessary complexity',
                       'Designed for strength, scalability, and stability',
                       'Built to eliminate fragile systems and performance risks'
                     ].map((point, i) => (
                        <div key={i} className="flex items-start gap-4">
                           <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                           </svg>
                           <p className="text-blue-100 text-lg font-medium">{point}</p>
                        </div>
                     ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/5">
                     <p className="text-blue-300 font-bold italic">Engineered for reliability. Built for continuity.</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 7. Call to Action */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-700 to-indigo-950 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Built for Businesses That <br /> Can’t Afford Downtime
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
                Your infrastructure must be dependable, secure, and built for performance. We deliver robust systems designed for reliability and future scalability.
              </p>
              <button className="px-10 py-4 bg-white text-blue-900 font-bold rounded-full text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all">
                Get Expert Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}