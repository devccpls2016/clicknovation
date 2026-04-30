'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function CloudServices() {
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
                Cloud Infrastructure
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Cloud Infrastructure
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">
                  That Moves
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Business Forward</span>
                </span>
              </div>

              <h2 className="text-2xl font-bold text-cyan-300/90 italic tracking-wide">
                Secure. Scalable. Always Accessible.
              </h2>
              
              <div className="space-y-4 text-blue-100/70 text-lg leading-relaxed max-w-2xl pt-4 border-l-2 border-cyan-500/30 pl-6">
                <p>
                  Traditional systems slow down growth and create unnecessary maintenance challenges. 
                </p>
                <p>
                  Clicknovation Technologies delivers smart cloud environments that simplify storage, strengthen security, and give your business uninterrupted access to critical systems anytime, anywhere.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Animated Cloud Hub */}
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
                 {/* Central Cloud Core */}
                 <div className="relative z-20 w-48 h-48 md:w-56 md:h-56 bg-slate-900 border-2 border-white/10 rounded-[3rem] flex flex-col items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.3)] group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10" />
                    
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-4 border border-cyan-400/30 rounded-[2.5rem]"
                    />

                    <div className="relative z-10 flex flex-col items-center text-center px-4">
                       <motion.div
                         animate={{ y: [-5, 5, -5] }}
                         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                         className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-400/40 rounded-2xl mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                       >
                          <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                          </svg>
                       </motion.div>
                       <span className="text-[11px] font-black tracking-[0.3em] text-cyan-400 uppercase mb-1">Clicknovation</span>
                       <span className="text-sm font-bold text-white uppercase tracking-widest leading-tight">Cloud<br/>Network</span>
                    </div>
                 </div>

                 {/* Orbiting Cloud Nodes */}
                 {[
                   { label: 'SECURE', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', angle: -60, dist: '48%' },
                   { label: 'SCALE', icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4', angle: 60, dist: '48%' },
                   { label: 'ACCESS', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9', angle: 180, dist: '48%' }
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
                           animate={{ y: [0, -10, 0] }}
                           transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                           className="group cursor-default"
                         >
                            <div className="relative p-5 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center gap-3 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300">
                               <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={node.icon} />
                                  </svg>
                               </div>
                               <span className="text-[10px] font-black tracking-widest text-white">{node.label}</span>
                            </div>

                            {/* Connection Lines */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] pointer-events-none -z-10 overflow-visible">
                               <motion.path
                                 d={`M 110 110 L ${110 - Math.cos(node.angle * Math.PI / 180) * 110} ${110 - Math.sin(node.angle * Math.PI / 180) * 110}`}
                                 stroke={`url(#grad-cloud-${i})`}
                                 strokeWidth="2"
                                 strokeDasharray="4 6"
                                 fill="none"
                                 className="opacity-40"
                               />
                               <defs>
                                  <linearGradient id={`grad-cloud-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                     <stop offset="0%" stopColor="rgba(6,182,212,0.8)" />
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
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-full h-full border border-blue-500/30 rounded-full" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[80%] h-[80%] border border-cyan-400/20 rounded-full border-dashed" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CLOUD CAPABILITY PILLARS */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
              Cloud Capabilities
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Our Cloud <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Pillars</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Smart Cloud Deployment', 
                subtitle: 'Built Around Your Workflow', 
                desc: 'We design cloud environments that fit your business operations, application needs, and future growth. Every deployment is planned for speed, flexibility, and long-term performance.', 
                icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
              },
              { 
                title: 'Secure Cloud Storage', 
                subtitle: 'Data Protected, Access Simplified', 
                desc: 'Store files, records, and business data in a centralized cloud space with secure user access. Your information stays protected, organized, and available whenever your team needs it.', 
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              },
              { 
                title: 'Seamless Cloud Migration', 
                subtitle: 'Move Without Downtime', 
                desc: 'We transfer your servers, applications, and business data into cloud infrastructure with a smooth migration strategy that keeps operations running without disruption.', 
                icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
              },
              { 
                title: 'Backup & Disaster Recovery', 
                subtitle: 'Recovery Ready at All Times', 
                desc: 'Unexpected failures should never stop your business. Our automated backup systems and disaster recovery solutions ensure your critical data remains safe and quickly restorable.', 
                icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
              },
              { 
                title: 'Remote Access Solutions', 
                subtitle: 'Work From Anywhere Securely', 
                desc: 'Enable your staff and management to access systems, applications, and files remotely through protected cloud connectivity designed for modern work environments.', 
                icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9'
              },
              { 
                title: 'Monitoring & Optimization', 
                subtitle: 'Performance Under Control', 
                desc: 'We continuously monitor server health, storage usage, uptime, and security activity to keep your cloud ecosystem stable, fast, and cost efficient.', 
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-[2rem] bg-slate-900/60 border border-white/5 backdrop-blur-md group hover:bg-slate-800/80 transition-all overflow-hidden"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pillar.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <h4 className="text-sm font-semibold text-cyan-400 mb-4">{pillar.subtitle}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE DELIVER (Pipeline) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">How We Deliver</h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto">
              A structured roadmap ensuring stability, security, and precision at every phase.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {[
                { step: '01', title: 'Infrastructure Assessment', subtitle: 'Understanding Your Current Environment', desc: 'We study your systems, workloads, and storage patterns to build the right cloud strategy.' },
                { step: '02', title: 'Cloud Blueprint Planning', subtitle: 'Structured for Stability', desc: 'A complete deployment roadmap is created covering storage, access, security, and scalability.' },
                { step: '03', title: 'Migration & Deployment', subtitle: 'Safe and Controlled Execution', desc: 'Your data, applications, and workflows are shifted to cloud architecture with full testing and validation.' },
                { step: '04', title: 'Security Configuration', subtitle: 'Protection at Every Layer', desc: 'We implement authentication, firewall rules, encrypted access, and backup controls for secure cloud operations.' },
                { step: '05', title: 'Ongoing Support', subtitle: 'Continuous Performance Care', desc: 'Our team keeps monitoring, maintaining, and optimizing your cloud environment for smooth business continuity.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:block w-1/2" />
                  
                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-slate-900 border-4 border-slate-950 shadow-[0_0_0_2px_rgba(6,182,212,0.2)] rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 text-cyan-400 font-black text-sm">
                    {item.step}
                  </div>

                  <div className="w-full md:w-1/2 pl-20 md:pl-0">
                    <div className="p-8 rounded-[2rem] bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all group">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <h4 className="text-sm text-cyan-400 font-medium mb-4">{item.subtitle}</h4>
                      <p className="text-blue-100/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOUD BUSINESS APPLICATIONS (Bento Grid) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Cloud Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Cloud Business <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Applications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
             {/* 1. File Collaboration - Large Horizontal */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="relative z-10 h-full flex flex-col justify-center">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                   </div>
                   <h3 className="text-3xl font-extrabold text-white mb-2">Cloud File Collaboration</h3>
                   <h4 className="text-cyan-400 font-medium mb-4">Smarter Team Connectivity</h4>
                   <p className="text-blue-100/70 text-lg max-w-lg">Share and manage business files centrally across departments and branches with secure, real-time access.</p>
                </div>
             </motion.div>

             {/* 2. Web Hosting - Vertical */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.1 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="h-full flex flex-col">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">App & Web Hosting</h3>
                   <h4 className="text-blue-300 font-medium mb-4 text-sm">Reliable Digital Performance</h4>
                   <p className="text-blue-100/60 text-sm leading-relaxed">Run websites, portals, software, and internal applications on stable cloud servers.</p>
                </div>
             </motion.div>

             {/* 3. Database Security - Tall */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="md:col-span-4 md:row-span-2 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="h-full flex flex-col">
                   <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/30">
                      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Database Security</h3>
                   <h4 className="text-cyan-400 font-medium mb-6 text-sm">Critical Data Always Protected</h4>
                   <p className="text-blue-100/60 leading-relaxed">Maintain customer, employee, and financial records in encrypted cloud databases. Ensured integrity and isolation from potential threats.</p>
                </div>
             </motion.div>

             {/* 4. Enterprise Backup */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                   <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Backups</h3>
                <h4 className="text-blue-300 font-medium mb-3 text-xs">Built for Continuity</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">Automate secure backups to prevent accidental loss and downtime.</p>
             </motion.div>

             {/* 5. Multi-Location Access */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30">
                   <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Multi-Location Access</h3>
                <h4 className="text-cyan-400 font-medium mb-3 text-xs">One Network, Multiple Offices</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">Connect branches and distributed teams through one unified cloud platform.</p>
             </motion.div>

             {/* 6. Remote Working - Horizontal */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
               className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="relative z-10 h-full flex flex-col justify-center">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Remote Working Infrastructure</h3>
                   <h4 className="text-blue-300 font-medium mb-4 text-sm">Business Beyond Boundaries</h4>
                   <p className="text-blue-100/60 text-sm leading-relaxed max-w-lg">Allow your workforce to operate securely from anywhere with cloud-enabled access to essential company resources without latency or security compromise.</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TRUST BLOCK & 6. BUSINESS IMPACT */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Trust Block */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-16 rounded-[3rem] bg-blue-900/20 border border-blue-500/20 relative overflow-hidden text-center mb-20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
               <svg className="w-16 h-16 text-cyan-400 mx-auto mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
               </svg>
               <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Engineered for Security, Stability and Scale</h2>
               <h3 className="text-xl text-blue-300 font-medium mb-6">Cloud solutions built to perform under growing business demands.</h3>
               <p className="text-blue-100/70 text-lg leading-relaxed">
                  Every cloud environment we create is protected with structured access control, encrypted communication, automated backup systems, and continuous monitoring—ensuring long-term reliability with enterprise-level confidence.
               </p>
            </div>
          </motion.div>

          {/* Business Impact Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">The Business Impact</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {[
               { title: 'Less Hardware Dependency', desc: 'Move beyond traditional server limitations.', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
               { title: 'Better Accessibility', desc: 'Access business systems from anywhere.', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9' },
               { title: 'Stronger Data Protection', desc: 'Keep critical information secure.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
               { title: 'Faster Continuity', desc: 'Recover quickly from disruptions.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
               { title: 'Easy Scalability', desc: 'Expand without infrastructure barriers.', icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' },
               { title: 'Lower IT Burden', desc: 'Simplify maintenance and operations.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
             ].map((impact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 flex items-start gap-4 hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all"
                >
                   <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={impact.icon} /></svg>
                   </div>
                   <div className="text-left">
                      <h4 className="text-white font-bold mb-1">{impact.title}</h4>
                      <p className="text-sm text-blue-100/60">{impact.desc}</p>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
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
                Build a More Connected Business Future
              </h2>
              <h3 className="text-xl text-cyan-300 mb-8 font-medium">Cloud solutions designed to keep your business secure, agile, and always ready for growth.</h3>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                Clicknovation Technologies helps organizations modernize infrastructure with cloud systems that deliver accessibility, performance, and long-term digital confidence.
              </p>
              <button className="px-10 py-4 bg-white text-blue-950 font-bold rounded-full text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-blue-50 hover:scale-105 transition-all">
                Modernize Your Infrastructure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
