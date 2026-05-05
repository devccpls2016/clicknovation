'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Technologies() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans">
      {/* Background Gradients (Blue + Cyan) */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.15),_transparent_50%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      {/* 1. Hero Section (Tech Dashboard Mockup) */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-base text-cyan-300 ring-1 ring-cyan-500/30 backdrop-blur-md">
                <span className="flex items-center justify-center w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                Modern Technology Stack
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white">
                  Engineered For
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-1 pb-2">
                  Long-Term Scale.
                </span>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                At Clicknovation Technologies, every digital solution is developed on a strong foundation of performance-focused engineering, scalable system architecture, and secure deployment practices.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                 <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    Explore Capabilities
                 </button>
                 <button className="px-8 py-4 bg-slate-800/50 text-white font-bold rounded-full border border-white/10 hover:bg-slate-800 transition-all backdrop-blur-md">
                    View Architecture
                 </button>
              </div>
            </motion.div>

            {/* Holographic Tech Hub Animation */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="relative aspect-square flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />
               
               {/* Central Core - Rotating Tech Sphere */}
               <div className="relative w-72 h-72 flex items-center justify-center">
                  {/* Outer Rings */}
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full" />
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border border-blue-400/20 rounded-full" />
                  
                  {/* Central Node */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], rotateY: [0, 180, 360] }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.5)] flex items-center justify-center border border-white/20 transform-style-3d"
                  >
                     <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                     <svg className="w-16 h-16 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                     </svg>
                  </motion.div>
               </div>

               {/* Orbiting Service Cards */}
               {[
                  { label: "FRONTEND", icon: "⚛", pos: "top-0 left-1/4", color: "cyan", delay: 0 },
                  { label: "BACKEND", icon: "⚙", pos: "top-1/4 right-0", color: "blue", delay: 1 },
                  { label: "DATABASE", icon: "🗄", pos: "bottom-1/4 left-0", color: "teal", delay: 2 },
                  { label: "CLOUD", icon: "☁", pos: "bottom-0 right-1/4", color: "indigo", delay: 3 }
               ].map((orb, i) => (
                  <motion.div 
                    key={i}
                    animate={{ 
                      y: [0, -15, 0],
                      x: [0, 10, 0]
                    }}
                    transition={{ duration: 4 + i, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
                    className={`absolute ${orb.pos} z-20 group`}
                  >
                     <div className={`p-4 bg-slate-900/80 border border-${orb.color}-500/30 rounded-2xl shadow-2xl backdrop-blur-xl group-hover:border-${orb.color}-400 transition-all cursor-default`}>
                        <div className="flex items-center gap-3">
                           <div className={`w-10 h-10 rounded-xl bg-${orb.color}-500/20 flex items-center justify-center text-${orb.color}-400 text-xl`}>{orb.icon}</div>
                           <div className="text-left">
                              <div className="text-[10px] font-black tracking-widest text-slate-500 mb-0.5">{orb.label}</div>
                              <div className="h-1 w-12 bg-slate-800 rounded-full overflow-hidden">
                                 <motion.div 
                                   animate={{ width: ["0%", "100%"] }} 
                                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                   className={`h-full bg-${orb.color}-500`} 
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* Connecting Line to Core */}
                     <div className={`absolute top-1/2 left-1/2 -z-10 w-32 h-px bg-gradient-to-r from-${orb.color}-500/50 to-transparent origin-left rotate-${i * 90} opacity-20`} />
                  </motion.div>
               ))}

               {/* Floating Data Packets */}
               {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`packet-${i}`}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                      y: [Math.random() * 200 - 100, Math.random() * 200 - 100]
                    }}
                    transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7 }}
                    className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
                  />
               ))}

               {/* Tech Badge Overlay */}
               <motion.div 
                 animate={{ y: [10, -10, 10] }} 
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute -bottom-10 bg-slate-800/90 border border-white/10 px-6 py-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 z-30"
               >
                  <div className="flex -space-x-2">
                     {['⚛', '📂', '⚡', '☁'].map((sym, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs">{sym}</div>
                     ))}
                  </div>
                  <div className="text-xs font-bold text-slate-300">Architecture Verified</div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core Tech Stack Strip */}
      <section className="relative z-10 py-10 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto overflow-hidden flex">
            <div className="flex space-x-16 animate-[loop_30s_linear_infinite] whitespace-nowrap items-center opacity-70">
               {['REACT', 'NEXT.JS', 'NODE.JS', 'PYTHON', 'POSTGRESQL', 'MONGODB', 'AWS', 'VERCEL'].map((tech, i) => (
                  <span key={i} className="text-2xl font-black text-slate-400 tracking-widest">{tech}</span>
               ))}
               {['REACT', 'NEXT.JS', 'NODE.JS', 'PYTHON', 'POSTGRESQL', 'MONGODB', 'AWS', 'VERCEL'].map((tech, i) => (
                  <span key={`dup-${i}`} className="text-2xl font-black text-slate-400 tracking-widest">{tech}</span>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Frontend Experience Animation (Like Direct Checkout) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 ring-1 ring-blue-500/30 mb-6">
                User Interface
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Frontend Engineering <br /><span className="text-blue-400">That Delivers Experience.</span></h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                A great digital product begins with a seamless user experience. Our frontend stack helps us build applications that are visually modern, mobile responsive, SEO optimized, and highly interactive across all devices.
              </p>
              
              {/* Timeline list */}
              <div className="space-y-6 mt-8">
                 {[
                   { step: '1', title: 'React & Next.js', desc: 'Dynamic UI and server-side rendering.' },
                   { step: '2', title: 'Tailwind CSS', desc: 'Modern styling and rapid prototyping.' },
                   { step: '3', title: 'Framer Motion', desc: 'Smooth animations and interactions.' }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-500/30">{item.step}</div>
                          {i !== 2 && <div className="w-0.5 h-10 bg-slate-800 my-1" />}
                       </div>
                       <div>
                          <h4 className="text-white font-bold text-lg">{item.title}</h4>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>

            {/* Frontend Mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex flex-col items-center shadow-2xl">
               <div className="w-full bg-[#0f172a] rounded-xl overflow-hidden shadow-2xl relative border border-slate-700">
                  {/* Browser Bar */}
                  <div className="bg-slate-800 p-3 flex gap-2 items-center border-b border-slate-700">
                     <div className="w-3 h-3 rounded-full bg-red-400" />
                     <div className="w-3 h-3 rounded-full bg-amber-400" />
                     <div className="w-3 h-3 rounded-full bg-green-400" />
                     <div className="ml-4 bg-slate-900 rounded-md h-6 w-full max-w-[200px]" />
                  </div>
                  {/* Content Area */}
                  <div className="p-6 space-y-4">
                     <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="h-8 w-1/3 bg-slate-700 rounded-lg" />
                     <div className="flex gap-4">
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="h-32 w-1/2 bg-blue-900/50 rounded-xl border border-blue-500/30" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, delay: 0.5, repeat: Infinity }} className="h-32 w-1/2 bg-cyan-900/50 rounded-xl border border-cyan-500/30" />
                     </div>
                     <div className="h-4 w-full bg-slate-700 rounded mt-4" />
                     <div className="h-4 w-5/6 bg-slate-700 rounded" />
                     <div className="h-4 w-4/6 bg-slate-700 rounded" />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Backend Architecture (Layered Server Stack) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-500/30 mb-6">
                    Core Infrastructure
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                    Backend Architecture Built <br /><span className="text-cyan-400">For Business Logic.</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Secure Processing. Powerful APIs. Reliable Automation. We build scalable engines that process massive data effortlessly.
                  </p>
                  
                  <div className="space-y-6 mt-8">
                     {[
                        { title: 'API Gateways', desc: 'Secure entry points for all client requests.', icon: '⚡' },
                        { title: 'Microservices', desc: 'Decoupled services for auth, payments, and data processing.', icon: '🧩' },
                        { title: 'Serverless Functions', desc: 'Auto-scaling event-driven computing.', icon: '☁' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                           <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl shadow-inner border border-slate-700 shrink-0">{item.icon}</div>
                           <div>
                              <h4 className="text-white font-bold text-lg">{item.title}</h4>
                              <p className="text-slate-400 text-sm">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>

               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[500px] flex items-center justify-center" style={{ perspective: '1000px' }}>
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[100px]" />
                  
                  <div className="relative w-full max-w-sm flex flex-col gap-8" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(15deg) rotateY(-15deg)' }}>
                     
                     {/* Connecting Beams Background */}
                     <div className="absolute inset-0 z-0 pointer-events-none flex justify-center -top-10 -bottom-10" style={{ transform: 'translateZ(-20px)' }}>
                        <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                        <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent ml-20" />
                        <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent mr-20 absolute" />
                     </div>

                     {/* Layer 1: Client / Frontend */}
                     <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="bg-slate-800/90 border border-blue-500/40 p-4 rounded-xl shadow-[0_20px_40px_rgba(37,99,235,0.15)] backdrop-blur-md relative z-40" style={{ transform: 'translateZ(60px)' }}>
                        <div className="text-blue-400 font-bold text-xs mb-3 text-center tracking-widest">CLIENT REQUESTS</div>
                        <div className="flex justify-center gap-3">
                           <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] animate-ping" />
                           <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] delay-100" />
                           <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] delay-200" />
                        </div>
                     </motion.div>

                     {/* Layer 2: Load Balancer / API Gateway */}
                     <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, delay: 0.2, repeat: Infinity }} className="bg-slate-800/90 border border-cyan-500/40 p-5 rounded-xl shadow-[0_20px_40px_rgba(6,182,212,0.15)] backdrop-blur-md relative z-30" style={{ transform: 'translateZ(40px)' }}>
                        <div className="flex justify-between items-center mb-3">
                           <div className="text-cyan-400 font-bold text-xs tracking-widest">API GATEWAY</div>
                           <div className="px-2 py-0.5 bg-cyan-500/20 rounded text-[10px] text-cyan-300 font-bold border border-cyan-500/30">WAF</div>
                        </div>
                        <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden flex">
                           <motion.div className="h-full bg-cyan-400 w-1/3 rounded-full" animate={{ x: ['-100%', '300%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
                        </div>
                     </motion.div>

                     {/* Layer 3: Microservices Array */}
                     <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, delay: 0.4, repeat: Infinity }} className="grid grid-cols-2 gap-4 relative z-20" style={{ transform: 'translateZ(20px)' }}>
                        <div className="bg-slate-800/90 border border-purple-500/40 p-4 rounded-xl shadow-lg backdrop-blur-md">
                           <div className="text-purple-400 text-[10px] font-bold mb-2 tracking-wider">AUTH SERVICE</div>
                           <div className="w-full h-1.5 bg-purple-500/20 rounded-full"><div className="w-1/2 h-full bg-purple-400 rounded-full shadow-[0_0_8px_#c084fc]" /></div>
                        </div>
                        <div className="bg-slate-800/90 border border-emerald-500/40 p-4 rounded-xl shadow-lg backdrop-blur-md">
                           <div className="text-emerald-400 text-[10px] font-bold mb-2 tracking-wider">PAYMENT API</div>
                           <div className="w-full h-1.5 bg-emerald-500/20 rounded-full"><div className="w-3/4 h-full bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]" /></div>
                        </div>
                     </motion.div>

                     {/* Layer 4: Databases */}
                     <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, delay: 0.6, repeat: Infinity }} className="bg-slate-900/90 border border-slate-600/50 p-6 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-10" style={{ transform: 'translateZ(0px)' }}>
                        <div className="flex items-center justify-center gap-6">
                           {[1, 2, 3].map(i => (
                              <div key={i} className="flex flex-col items-center">
                                 <div className="w-12 h-4 rounded-[100%] border-t border-slate-400 bg-slate-700 relative -mb-2 z-30 flex items-center justify-center"><div className="w-1 h-1 bg-green-400 rounded-full shadow-[0_0_5px_#4ade80]"></div></div>
                                 <div className="w-12 h-4 rounded-[100%] border-t border-slate-500 bg-slate-800 relative -mb-2 z-20" />
                                 <div className="w-12 h-6 rounded-[100%] border-b border-slate-600 bg-slate-800 relative z-10" />
                              </div>
                           ))}
                        </div>
                        <div className="text-center text-slate-400 text-[10px] font-bold tracking-widest mt-5">CLUSTER STORAGE</div>
                     </motion.div>
                     
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 5. Database Systems (Like CRM Linked Mockup) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             {/* Left: Animated Database Stack */}
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1 relative h-96 bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10" />
                
                <div className="relative z-10 flex flex-col gap-2 w-full max-w-[200px] mx-auto items-center">
                   {[1, 2, 3].map((disc, idx) => (
                     <motion.div 
                       key={idx}
                       animate={{ y: [0, -5, 0] }}
                       transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
                       className="w-48 h-16 rounded-[100%] border-2 border-cyan-400 bg-slate-800/90 shadow-[0_10px_30px_rgba(6,182,212,0.3)] flex items-center justify-center relative -mb-6"
                       style={{ zIndex: 10 - idx }}
                     >
                       <div className="absolute w-full h-1/2 bottom-0 bg-cyan-500/20 rounded-b-[100%]" />
                       <span className="text-cyan-300 font-bold text-xs relative z-10">
                          {idx === 0 ? 'MySQL / PG' : idx === 1 ? 'MongoDB' : 'Redis Cache'}
                       </span>
                     </motion.div>
                   ))}
                   <div className="w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent mt-4 opacity-50" />
                </div>
                
                {/* Floating tags */}
                <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-8 right-8 bg-slate-800/80 border border-cyan-500/30 px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-300 backdrop-blur-sm">
                   Data Synced
                </motion.div>
             </motion.div>

             <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-500/30 mb-6">
                Data Integrity
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Database Systems <br /><span className="text-cyan-400">Designed For Reliability.</span></h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Modern applications demand data systems that are secure, scalable, and capable of handling everything from user records to transactions, reports, logs, media, and analytics.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-slate-300">
                 {['MySQL for structured data', 'PostgreSQL for advanced apps', 'MongoDB for flexible cloud', 'Redis for high-speed caching', 'Supabase for real-time', 'Cloud backups & security'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-cyan-400" /> {item}
                    </li>
                 ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. DevOps Automation Flow (Horizontal Progress Line) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-white/5 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative z-20">
               <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 ring-1 ring-blue-500/30 mb-6">
                 CI / CD Pipeline
               </div>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                 Cloud Deployment & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">DevOps Journey.</span>
               </h2>
               <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                 Building software is only half the journey — live performance depends on where and how it is deployed. We automate deployments for stable production environments.
               </p>
            </div>

            <div className="relative overflow-x-auto pb-10 hide-scrollbar mt-12">
               <div className="min-w-[1000px] flex items-center justify-between relative px-10 pt-8">
                  {/* Background Line */}
                  <div className="absolute top-1/2 left-16 right-16 h-1.5 bg-slate-800 -translate-y-1/2 z-0 rounded-full" />
                  
                  {/* Animated Progress Line */}
                  <motion.div initial={{ width: 0 }} whileInView={{ width: 'calc(100% - 128px)' }} transition={{ duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="absolute top-1/2 left-16 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 -translate-y-1/2 z-10 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

                  {/* Nodes */}
                  {[
                     { step: 1, title: 'Code Commit', icon: '💻' },
                     { step: 2, title: 'Auto Build', icon: '⚙' },
                     { step: 3, title: 'Testing', icon: '🧪' },
                     { step: 4, title: 'Deploy (AWS/Vercel)', icon: '☁' },
                     { step: 5, title: 'CDN Edge', icon: '🌍' },
                     { step: 6, title: 'Monitor', icon: '📈' }
                  ].map((node, i) => (
                     <motion.div key={i} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.3 }} viewport={{ once: true }} className="relative z-20 flex flex-col items-center gap-4 w-32 group">
                        <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-cyan-500 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center justify-center text-2xl relative">
                           {node.icon}
                           <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-slate-900">{node.step}</div>
                        </div>
                        <div className="text-center font-bold text-white text-sm">{node.title}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 7. Complete Technology Stack Grid */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-500/30 mb-6">
                 Complete Stack
               </div>
<h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                 Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">We Use.</span>
               </h2>
               <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                 Our engineers leverage a diverse ecosystem of modern tools, frameworks, and infrastructure platforms to build scalable, enterprise-grade software.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  {
                    title: "Frontend",
                    icon: "🎨",
                    color: "bg-blue-500/10",
                    border: "border-blue-500/30",
                    textColor: "text-blue-400",
                    techs: [
                       { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
                       { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
                       { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
                       { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
                       { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" }
                    ]
                  },
                  {
                    title: "Backend",
                    icon: "⚙",
                    color: "bg-purple-500/10",
                    border: "border-purple-500/30",
                    textColor: "text-purple-400",
                    techs: [
                       { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339939" },
                       { name: "Next.js API", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
                       { name: "Express", logo: "https://cdn.simpleicons.org/express/white" },
                       { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
                       { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" }
                    ]
                  },
                  {
                    title: "Database",
                    icon: "🗄",
                    color: "bg-emerald-500/10",
                    border: "border-emerald-500/30",
                    textColor: "text-emerald-400",
                    techs: [
                       { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
                       { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
                       { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
                       { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" }
                    ]
                  },
                  {
                    title: "Cloud",
                    icon: "☁",
                    color: "bg-sky-500/10",
                    border: "border-sky-500/30",
                    textColor: "text-sky-400",
                    techs: [
                       { name: "AWS", logo: "https://cdn.simpleicons.org/amazonwebservices/white" },
                       { name: "Azure", logo: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
                       { name: "GCP", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
                       { name: "DigitalOcean", logo: "https://cdn.simpleicons.org/digitalocean/0080FF" }
                    ]
                  },
                  {
                    title: "DevOps",
                    icon: "🚀",
                    color: "bg-orange-500/10",
                    border: "border-orange-500/30",
                    textColor: "text-orange-400",
                    techs: [
                       { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
                       { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
                       { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
                       { name: "Jenkins", logo: "https://cdn.simpleicons.org/jenkins/D24939" }
                    ]
                  },
                  {
                    title: "Security",
                    icon: "🛡",
                    color: "bg-red-500/10",
                    border: "border-red-500/30",
                    textColor: "text-red-400",
                    techs: [
                       { name: "Fortinet", logo: "https://cdn.simpleicons.org/fortinet/C0101A" },
                       { name: "Cisco", logo: "https://cdn.simpleicons.org/cisco/1BA0D7" },
                       { name: "Honeywell", logo: "https://cdn.simpleicons.org/honeywell/E2001A" },
                       { name: "SSL/TLS", logo: "https://cdn.simpleicons.org/letsencrypt/white" }
                    ]
                  }
               ].map((category, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className={`bg-slate-900 border ${category.border} p-8 rounded-[2rem] hover:-translate-y-2 transition-transform group relative overflow-hidden flex flex-col`}>
                     <div className={`absolute top-0 right-0 w-32 h-32 ${category.color} rounded-full blur-[50px] opacity-50 group-hover:opacity-100 transition-opacity`} />
                     <div className={`w-14 h-14 rounded-2xl ${category.color} ${category.textColor} flex items-center justify-center text-3xl mb-6 relative z-10 border ${category.border}`}>
                        {category.icon}
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{category.title}</h3>
                     <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
                        {category.techs.map(tech => (
                           <div key={tech.name} className={`flex items-center gap-2.5 px-4 py-2 bg-slate-800/80 rounded-xl border border-slate-700/50 group-hover:${category.border} transition-colors`}>
                              <img src={tech.logo} alt={tech.name} className="w-5 h-5 object-contain" />
                              <span className="text-sm font-bold text-slate-200">{tech.name}</span>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-500/30 mb-6">
               Complete Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-16">
               End To End Development <span className="text-cyan-400">Capabilities.</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                  { title: 'Business Websites', desc: 'Fast, SEO-optimized corporate web presence.' },
                  { title: 'Enterprise Web Apps', desc: 'Complex SaaS and portal platforms.' },
                  { title: 'Mobile Applications', desc: 'Flutter based native-feeling iOS & Android apps.' },
                  { title: 'API Integrations', desc: 'Connecting multi-platform ecosystems securely.' },
                  { title: 'AI Automation', desc: 'Integrating intelligent logic and workflows.' },
                  { title: 'CRM & ERP Platforms', desc: 'Custom management systems for operations.' }
               ].map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all group">
                     <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors flex items-center justify-center font-bold mb-6 text-xl">✔</div>
                     <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                     <p className="text-slate-400 text-base leading-relaxed">{service.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. The Right Stack (Why Businesses Choose Us format) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-t border-white/5">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">We Build With The Right Stack <br /><span className="text-blue-400">— Not A Fixed Stack.</span></h2>
               <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  At Clicknovation Technologies, we do not force every project into one standard technology pattern. Instead, our engineering team selects technologies based on precise project needs.
               </p>
               <div className="grid sm:grid-cols-2 gap-4 text-base text-slate-300 font-medium">
                  {[
                     'Project complexity', 'User traffic expectations', 'Security level required', 'API dependency',
                     'Cloud scalability', 'AI module requirement', 'Future maintenance ease', 'Budget optimization'
                  ].map((benefit, i) => (
                     <div key={i} className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                        <span className="text-cyan-400">✦</span> {benefit}
                     </div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-900/50 to-slate-900 border border-blue-500/30 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
               <h3 className="text-3xl font-bold text-white mb-10 relative z-10">Architectural Focus</h3>
               <div className="space-y-8 relative z-10">
                  <div className="flex gap-5 items-start">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">🛡</div>
                     <div><h4 className="text-white font-bold text-lg mb-1">Security First</h4><p className="text-slate-400 text-sm leading-relaxed">Data protection and vulnerability prevention are engineered from day one.</p></div>
                  </div>
                  <div className="flex gap-5 items-start">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">📈</div>
                     <div><h4 className="text-white font-bold text-lg mb-1">Scalability Ready</h4><p className="text-slate-400 text-sm leading-relaxed">Microservices and cloud architectures designed to grow with user demand.</p></div>
                  </div>
                  <div className="flex gap-5 items-start">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">⚡</div>
                     <div><h4 className="text-white font-bold text-lg mb-1">High Performance</h4><p className="text-slate-400 text-sm leading-relaxed">Optimized queries and CDN delivery ensure blazing fast application speeds.</p></div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.2)] border border-cyan-500/30 backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10">
               <div className="w-20 h-20 mx-auto rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-8">
                  <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
               </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Technology Is How We <br /> Future-Proof Your Business.
              </h2>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                Strong software needs strong engineering beneath the surface. Ensure your platform is prepared not just for today's users, but for tomorrow's growth.
              </p>
              <button className="px-10 py-4 bg-cyan-500 text-slate-900 font-bold rounded-full text-lg shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:bg-cyan-400 hover:scale-105 transition-all">
                Start Your Tech Project
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}