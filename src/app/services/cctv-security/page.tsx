'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function CCTVSecurity() {
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
                Intelligent Security
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Designed for
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Total Protection</span>
                </span>
              </div>

              <h2 className="text-2xl font-bold text-cyan-300/90 italic tracking-wide">
                Smarter Surveillance. Faster Response. Stronger Control.
              </h2>
              
              <div className="space-y-4 text-blue-100/70 text-lg leading-relaxed max-w-2xl pt-4 border-l-2 border-cyan-500/30 pl-6">
                <p>
                  Security today is no longer limited to recording cameras and basic monitoring. Businesses, institutions, offices, and public spaces require intelligent systems that actively watch, detect, alert, and protect. 
                </p>
                <p>
                  Clicknovation Technologies delivers advanced CCTV and security infrastructures built to provide complete visual control, real-time monitoring, automated threat detection, and reliable safety management across every corner of your organization.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Animated Surveillance Radar */}
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
                 {/* Main Radar Container */}
                 <div className="relative z-20 w-64 h-64 md:w-72 md:h-72 border border-cyan-500/20 rounded-full flex flex-col items-center justify-center group overflow-hidden bg-slate-900/40 backdrop-blur-sm">
                    {/* Concentric Rings */}
                    <div className="absolute inset-4 border border-blue-500/20 rounded-full" />
                    <div className="absolute inset-12 border border-cyan-400/20 rounded-full" />
                    <div className="absolute inset-20 border border-blue-400/20 rounded-full" />
                    
                    {/* Crosshairs */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-500/20 -translate-x-1/2" />
                    <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-500/20 -translate-y-1/2" />

                    {/* Animated Scanning Beam */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 origin-center"
                    >
                       <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-cyan-500/20 skew-x-12 origin-bottom-right" />
                    </motion.div>

                    {/* Central Lens */}
                    <div className="relative z-10 w-24 h-24 bg-slate-900 border-2 border-cyan-400/40 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.4)] flex items-center justify-center overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20" />
                       <motion.div
                         animate={{ scale: [1, 1.2, 1] }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center"
                       >
                          <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]" />
                       </motion.div>
                    </div>
                 </div>

                 {/* Corner Viewfinder Brackets */}
                 <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50" />
                 <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50" />
                 <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50" />
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50" />

                 {/* Orbiting Targets */}
                 {[
                   { label: 'AI DETECT', angle: -45, dist: '55%' },
                   { label: 'REMOTE', angle: 45, dist: '55%' },
                   { label: 'ACCESS', angle: 135, dist: '55%' },
                   { label: 'STORAGE', angle: 225, dist: '55%' }
                 ].map((target, i) => {
                    const x = `calc(50% + ${Math.cos(target.angle * Math.PI / 180)} * ${target.dist})`;
                    const y = `calc(50% + ${Math.sin(target.angle * Math.PI / 180)} * ${target.dist})`;
                    
                    return (
                      <motion.div
                        key={target.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                        className="absolute z-30"
                        style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                      >
                         <motion.div
                           animate={{ y: [0, -5, 0] }}
                           transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                           className="flex flex-col items-center gap-2"
                         >
                            <div className="w-10 h-10 bg-slate-900 border border-blue-500/30 rounded-lg flex items-center justify-center relative group">
                               <div className="absolute inset-1 border border-cyan-400/20 group-hover:border-cyan-400 transition-colors" />
                               <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-cyan-400 transition-colors" />
                            </div>
                            <span className="text-[9px] font-black tracking-[0.2em] text-cyan-400/70 uppercase">{target.label}</span>
                         </motion.div>
                      </motion.div>
                    );
                 })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SECURITY SOLUTION PILLARS */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
              Solution Pillars
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Advanced Security <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Pillars</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Advanced CCTV Surveillance', 
                subtitle: 'Complete Visual Monitoring Coverage', 
                desc: 'We install high-definition surveillance systems that provide continuous monitoring of offices, campuses, warehouses, shops, institutions, and industrial premises with crystal clear recording and centralized viewing control.', 
                icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
              },
              { 
                title: 'AI Based Solutions', 
                subtitle: 'Surveillance That Thinks Beyond Recording', 
                desc: 'Our AI-powered security systems are built with intelligent motion detection, facial recognition, intrusion alerts, crowd monitoring, object tracking, and abnormal activity identification—turning traditional CCTV into a proactive security management tool.', 
                icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              },
              { 
                title: 'Remote Monitoring & Mobile', 
                subtitle: 'Security in Your Hands Anytime', 
                desc: 'Access live CCTV feeds, playback footage, and receive alerts directly from your mobile or desktop from anywhere. Our remote surveillance solutions ensure complete monitoring control even when you are off-site.', 
                icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
              },
              { 
                title: 'Video Storage & Backup', 
                subtitle: 'Footage Protected for Verification', 
                desc: 'We deploy secure NVR, DVR, cloud backup, and centralized storage systems that keep your surveillance footage safe, searchable, and easily retrievable whenever required for review or evidence.', 
                icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
              },
              { 
                title: 'Access Control & Entry', 
                subtitle: 'Restrict Unauthorized Movement', 
                desc: 'Strengthen premises security with biometric access, RFID attendance, smart door control, visitor logs, and permission-based entry systems designed to secure sensitive zones.', 
                icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
              },
              { 
                title: 'Security Network Integration', 
                subtitle: 'One Unified Protection Ecosystem', 
                desc: 'We integrate CCTV cameras, alarms, attendance devices, remote sensors, and access systems into one centrally managed network for easier administration and stronger operational visibility.', 
                icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9'
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-none bg-slate-900/60 border border-white/5 backdrop-blur-md group hover:bg-slate-800/80 transition-all overflow-hidden"
              >
                {/* Viewfinder brackets on hover */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 bg-slate-950 flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <h4 className="text-xs font-semibold text-cyan-400 mb-4 tracking-widest uppercase">{pillar.subtitle}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR SECURITY IMPLEMENTATION PROCESS */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Our Security Implementation Process</h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto">
              A structured roadmap ensuring stability, security, and precision at every phase.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Circuit Line */}
            <div className="absolute top-8 bottom-8 left-[39px] md:left-1/2 w-[2px] bg-white/5 md:-translate-x-1/2" />
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-8 left-[39px] md:left-1/2 w-[2px] bg-gradient-to-b from-blue-500 to-cyan-400 md:-translate-x-1/2 origin-top"
            />
            
            <div className="space-y-16">
              {[
                { step: '01', title: 'Site Risk Assessment', subtitle: 'Understanding Vulnerable Areas', desc: 'We inspect entry points, blind zones, high-risk sections, movement patterns, and monitoring requirements before designing the security plan.' },
                { step: '02', title: 'Surveillance Layout Planning', subtitle: 'Strategic Camera Positioning', desc: 'A complete surveillance blueprint is prepared to ensure every important area receives optimized visual coverage without dead spots.' },
                { step: '03', title: 'Installation & System Configuration', subtitle: 'Structured Deployment Execution', desc: 'Cameras, recorders, access devices, and monitoring units are professionally installed with stable connectivity and controlled configuration.' },
                { step: '04', title: 'AI & Alert System Activation', subtitle: 'Intelligent Monitoring Enabled', desc: 'Advanced analytics, motion alerts, facial tracking, mobile notifications, and smart detection features are activated for proactive surveillance.' },
                { step: '05', title: 'Monitoring Support & Maintenance', subtitle: 'Long-Term Security Reliability', desc: 'We provide health checks, footage verification, storage maintenance, and technical support to keep your security system continuously operational.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:block w-1/2" />
                  
                  {/* Hexagon Node */}
                  <div className="absolute left-0 md:left-1/2 w-20 h-20 bg-slate-900 border-2 border-cyan-500/30 rounded-xl rotate-45 flex items-center justify-center md:-translate-x-1/2 z-10 group hover:border-cyan-400 hover:bg-slate-800 transition-all cursor-default">
                     <div className="-rotate-45 text-cyan-400 font-black text-lg">
                       {item.step}
                     </div>
                  </div>

                  <div className="w-full md:w-1/2 pl-24 md:pl-0 mt-2">
                    <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all group">
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

      {/* 4. WHERE OUR SECURITY SOLUTIONS WORK (Bento Grid) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Deployment Areas
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Where Our Security Solutions <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
             {/* 1. Commercial - Large Horizontal */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="relative z-10 h-full flex flex-col justify-center">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                   </div>
                   <h3 className="text-3xl font-extrabold text-white mb-2">Commercial Office Surveillance</h3>
                   <h4 className="text-cyan-400 font-medium mb-4">Protect Teams, Assets and Daily Operations</h4>
                   <p className="text-blue-100/70 text-lg max-w-lg">Maintain full visibility across cabins, entrances, work floors, and customer areas.</p>
                </div>
             </motion.div>

             {/* 2. Retail - Vertical */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.1 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="h-full flex flex-col">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Retail & Showroom</h3>
                   <h4 className="text-blue-300 font-medium mb-4 text-sm">Monitor Every Customer Movement</h4>
                   <p className="text-blue-100/60 text-sm leading-relaxed">Reduce theft risk, improve staff accountability, and secure inventory with centralized surveillance.</p>
                </div>
             </motion.div>

             {/* 3. Industrial - Tall */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="md:col-span-4 md:row-span-2 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="h-full flex flex-col">
                   <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/30">
                      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Industrial & Warehouse</h3>
                   <h4 className="text-cyan-400 font-medium mb-6 text-sm">Watch Critical Operations Closely</h4>
                   <p className="text-blue-100/60 leading-relaxed">Secure storage areas, loading zones, machinery sections, and restricted premises with uninterrupted surveillance designed for tough environments.</p>
                </div>
             </motion.div>

             {/* 4. Education */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                   <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">School & Campus</h3>
                <h4 className="text-blue-300 font-medium mb-3 text-xs">Safer Learning Environments</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">Track campus activities, entry points, hallways, and public zones.</p>
             </motion.div>

             {/* 5. Residential */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
               className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30">
                   <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Residential & Society</h3>
                <h4 className="text-cyan-400 font-medium mb-3 text-xs">Smart Safety for Homes</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">Deploy camera networks, gate monitoring, and mobile alert systems.</p>
             </motion.div>

             {/* 6. Government - Horizontal */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
               className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="relative z-10 h-full flex flex-col justify-center">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Government & Public Premises</h3>
                   <h4 className="text-blue-300 font-medium mb-4 text-sm">High Visibility Public Protection</h4>
                   <p className="text-blue-100/60 text-sm leading-relaxed max-w-lg">Ensure monitoring across offices, municipal buildings, roads, halls, and citizen service centers with highly scalable systems.</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TRUST BLOCK & 6. BUSINESS ADVANTAGES */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Trust Block */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-16 rounded-[3rem] bg-slate-900 border border-cyan-500/20 relative overflow-hidden text-center mb-20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
               <svg className="w-16 h-16 text-cyan-400 mx-auto mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
               </svg>
               <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Built for Continuous Vigilance and Reliable Threat Control</h2>
               <h3 className="text-xl text-blue-300 font-medium mb-6">Security systems that do more than just record.</h3>
               <p className="text-blue-100/70 text-lg leading-relaxed">
                  Our CCTV and security solutions are designed with stable uptime, intelligent alerts, secure footage storage, remote accessibility, and centralized control—giving organizations the confidence to monitor, detect, and respond with greater speed and precision.
               </p>
            </div>
          </motion.div>

          {/* Business Advantages Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Business Advantages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {[
               { title: 'Real-Time Visual Control', desc: 'Monitor activities as they happen.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
               { title: 'Smart AI Detection', desc: 'Identify suspicious movement instantly.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
               { title: 'Reduced Security Risks', desc: 'Prevent incidents before escalation.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
               { title: 'Evidence Ready Recording', desc: 'Maintain footage for review and proof.', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
               { title: 'Better Workforce Discipline', desc: 'Improve accountability through monitoring.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
               { title: 'Centralized Management', desc: 'Control all devices from one platform.', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' }
             ].map((advantage, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 flex items-start gap-4 hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all"
                >
                   <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.icon} /></svg>
                   </div>
                   <div className="text-left">
                      <h4 className="text-white font-bold mb-1 text-sm md:text-base">{advantage.title}</h4>
                      <p className="text-xs md:text-sm text-blue-100/60">{advantage.desc}</p>
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
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-slate-900 to-blue-950 relative overflow-hidden shadow-2xl border border-blue-500/20"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Upgrade Security From Passive Watching to Intelligent Protection
              </h2>
              <h3 className="text-xl text-cyan-300 mb-8 font-medium">Modern surveillance systems built to secure your people, assets, and operations with complete confidence.</h3>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                Clicknovation Technologies provides advanced CCTV, AI-based monitoring, access control, and integrated security solutions engineered for smarter protection and long-term operational safety.
              </p>
              <button className="px-10 py-4 bg-white text-blue-950 font-bold rounded-full text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-blue-50 hover:scale-105 transition-all">
                Secure Your Premises
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
