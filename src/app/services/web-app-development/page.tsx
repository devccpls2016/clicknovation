'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function WebAppDevelopment() {
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
                Services & Solutions
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Build Powerful
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">
                  Digital
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Experiences</span>
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-blue-300 italic">
                Innovative solutions designed to engage, perform, and scale.
              </h2>
              
              <div className="space-y-4 text-blue-100/80 text-lg leading-relaxed max-w-2xl pt-4 border-l-2 border-blue-500/30 pl-6">
                <p>
                  At Clicknovation Technologies, we design and develop high-performance websites and mobile applications that help businesses grow, engage users, and scale efficiently.
                </p>
                <p>
                  Our approach blends creativity, technology, and strategic thinking to deliver seamless digital experiences across all platforms.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Animated Tech Structure */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[100px]" />
              
              <div className="relative w-full max-w-[450px] aspect-square">
                {/* Background Rotating Grid */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-blue-500/10 rounded-[4rem] opacity-30"
                />
                
                {/* Central Multi-Platform Hub */}
                <div className="absolute inset-[25%] bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-8 z-20 group">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                  >
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </motion.div>
                  <span className="text-xs font-black tracking-[0.3em] text-blue-400 uppercase text-center">Development</span>
                  <div className="h-px w-12 bg-blue-500/30 my-3" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase text-center">Web & Mobile</span>
                </div>

                {/* Orbiting Elements - Web */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-0 w-32 p-4 bg-slate-900/80 border border-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center gap-2 shadow-xl z-30"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9-3 9" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-white/80">RESPONSIVE</span>
                </motion.div>

                {/* Orbiting Elements - Mobile */}
                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-0 w-32 p-4 bg-slate-900/80 border border-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center gap-2 shadow-xl z-30"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-white/80">APP NATIVE</span>
                </motion.div>

                {/* Tech Dots/Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className={`absolute w-2 h-2 bg-blue-400 rounded-full blur-[1px]
                      ${i === 0 ? 'top-1/4 left-1/4' : ''}
                      ${i === 1 ? 'top-3/4 right-1/4' : ''}
                      ${i === 2 ? 'top-1/2 right-10' : ''}
                      ${i === 3 ? 'bottom-10 right-1/2' : ''}
                      ${i === 4 ? 'top-10 left-1/2' : ''}
                      ${i === 5 ? 'left-10 bottom-1/4' : ''}
                    `}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 2. What We Offer - Redesigned Bento Grid */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              What We Offer
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Comprehensive services tailored to your <span className="text-cyan-400">digital needs.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            {/* 1. Website Development - Large Horizontal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group hover:bg-slate-800/60 transition-all duration-500"
            >
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-400/20 transition-all duration-700" />
              <div className="relative z-10 h-full flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)] ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9-3 9" /></svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">Website Development</h3>
                  <p className="text-blue-100/70 text-lg leading-relaxed max-w-lg">
                    Fast, responsive, and built for performance. We create modern, user-friendly websites aligned with your business goals, ensuring scalability, security, and optimal performance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2. UI/UX Design - Vertical Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group hover:bg-slate-800/60 transition-all duration-500"
            >
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-400/20 transition-all duration-700" />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center mb-8 shadow-lg ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  Crafting clean, modern, and user-centric interfaces that enhance usability and strengthen connections.
                </p>
              </div>
            </motion.div>

            {/* 3. Mobile App Development - Tall Vertical Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-4 md:row-span-2 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group hover:bg-slate-800/60 transition-all duration-500"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-400/20 transition-all duration-700" />
              <div className="relative z-10 h-full flex flex-col items-center text-center justify-center">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(6,182,212,0.3)] ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Mobile App Development</h3>
                <p className="text-blue-100/70 text-lg leading-relaxed">
                  Engaging experiences across every device. We develop intuitive and feature-rich applications for Android and iOS, delivering smooth performance and engagement.
                </p>
                
                {/* Visual Accent */}
                <div className="mt-12 flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414ZM17.523 15.3414C18.671 13.9114 19.341 12.0914 19.341 10.1114C19.341 5.58141 15.661 1.90141 11.131 1.90141C6.60101 1.90141 2.92102 5.58141 2.92102 10.1114C2.92102 14.6414 6.60101 18.3214 11.131 18.3214C11.991 18.3214 12.821 18.1814 13.591 17.9314C14.071 19.1214 15.141 20.1214 16.481 20.4814C16.891 20.5914 17.311 20.6514 17.741 20.6514C19.461 20.6514 20.981 19.5514 21.521 17.9114C21.681 17.4314 21.141 16.9414 20.631 17.1114C19.341 17.5514 18.061 16.8314 17.523 15.3414Z" /></svg>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.999 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.819-.26.819-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.756-1.332-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.62-5.479 5.92.43.37.814 1.103.814 2.222 0 1.605-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* 4. Custom Solutions - Square Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group hover:bg-slate-800/60 transition-all duration-500"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10 flex flex-col h-full gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-lg ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">Built specifically for your business needs. Tailored web and mobile solutions that offer flexibility.</p>
                </div>
              </div>
            </motion.div>

            {/* 5. E-Commerce Development - Square Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group hover:bg-slate-800/60 transition-all duration-500"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10 flex flex-col h-full gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-lg ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">E-Commerce Development</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">Secure platforms that drive online growth. Scalable online stores with seamless payment integration.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. From Idea to Impact (Process) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                From Idea to Impact
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1]">
                Transforming concepts into <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">successful digital products.</span>
              </h2>
              <p className="text-lg text-blue-100/70 leading-relaxed mb-10">
                We guide your idea through a complete development journey, ensuring every step is aligned with your vision and market needs.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Concept Validation', desc: 'Refining ideas into practical and viable solutions.' },
                  { title: 'Experience Design', desc: 'Creating intuitive and engaging user journeys.' },
                  { title: 'Development & Integration', desc: 'Building powerful, connected systems.' },
                  { title: 'Launch & Optimization', desc: 'Ensuring performance, gathering insights, and driving growth.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{step.title}</h4>
                      <p className="text-blue-100/60 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-7 relative">
              {/* Visual Process Animation */}
              <div className="relative aspect-video rounded-[3rem] bg-slate-900/40 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
                 
                 {/* Floating Screens */}
                 <motion.div
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-slate-800 border border-white/20 rounded-2xl shadow-2xl z-20 flex items-center justify-center overflow-hidden"
                 >
                    <div className="w-full h-full p-4 space-y-3">
                      <div className="w-full h-4 bg-white/10 rounded" />
                      <div className="w-3/4 h-4 bg-white/10 rounded" />
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div className="h-20 bg-blue-500/20 rounded-xl" />
                        <div className="h-20 bg-cyan-500/20 rounded-xl" />
                      </div>
                    </div>
                 </motion.div>
                 
                 <motion.div
                   animate={{ y: [0, 20, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute top-1/3 right-1/4 w-1/3 h-1/2 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl z-10"
                 />
                 
                 {/* Connection Lines */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="white" strokeWidth="2" strokeDasharray="10,10" />
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technology Expertise */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Technology Expertise
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Modern technologies that power <span className="text-blue-400">reliable solutions.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-slate-950 border border-slate-700/50 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                Frontend
              </h3>
              <p className="text-blue-100/60 mb-8">Interactive and visually engaging interfaces using modern frameworks.</p>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Angular', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-slate-800 text-blue-300 text-sm font-bold border border-white/5">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-slate-950 border border-slate-700/50 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-cyan-600/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                </span>
                Backend
              </h3>
              <p className="text-blue-100/60 mb-8">Secure systems built for scalability and high performance.</p>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'PHP'].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-slate-800 text-cyan-300 text-sm font-bold border border-white/5">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-slate-950 border border-slate-700/50 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                </span>
                Database
              </h3>
              <p className="text-blue-100/60 mb-8">Efficient, secure, and scalable data storage solutions.</p>
              <div className="flex flex-wrap gap-3">
                {['SQL', 'MongoDB', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-slate-800 text-indigo-300 text-sm font-bold border border-white/5">{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Our Development Approach - Redesigned with Interactive Core */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                Our Development Journey
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
                A Systematic <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Workflow for Success.</span>
              </h2>
              <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl mx-auto">
                We follow a rigorous, transparent, and highly optimized development cycle to ensure every project exceeds expectations.
              </p>
            </motion.div>
          </div>

          <div className="relative grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Steps 1-4 */}
            <div className="lg:col-span-4 space-y-12">
              {[
                { title: 'Requirement Analysis', desc: 'Understanding your vision and defining the foundation.' },
                { title: 'Strategy & Planning', desc: 'Creating a roadmap and selecting the optimal tech stack.' },
                { title: 'UI/UX Design', desc: 'Designing intuitive and visually appealing interfaces.' },
                { title: 'Development', desc: 'Building robust and scalable solutions with precision.' }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md group hover:bg-slate-800/60 transition-all text-right"
                >
                  <div className="absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent hidden lg:block" />
                  <div className="text-blue-400 font-black text-xs uppercase tracking-widest mb-2">Step 0{idx + 1}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-blue-100/60 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Middle: Animated Process Core */}
            <div className="lg:col-span-4 flex justify-center py-12 lg:py-0">
               <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Rotating Outer Rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-cyan-400/30 rounded-full"
                  />
                  
                  {/* Central Core Sphere */}
                  <div className="absolute inset-12 bg-slate-900 border border-white/10 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.2)] flex items-center justify-center overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 animate-pulse" />
                     <motion.div
                       animate={{ scale: [1, 1.1, 1] }}
                       transition={{ duration: 4, repeat: Infinity }}
                       className="relative z-10 w-24 h-24 bg-blue-600/30 rounded-full flex items-center justify-center border border-blue-400/40"
                     >
                        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                     </motion.div>
                     
                     {/* Data Stream Particles */}
                     {[...Array(8)].map((_, i) => (
                       <motion.div
                         key={i}
                         animate={{
                           y: [-100, 100],
                           opacity: [0, 1, 0]
                         }}
                         transition={{
                           duration: 2 + (i % 4) * 0.5,
                           repeat: Infinity,
                           delay: i * 0.3
                         }}
                         className="absolute w-px h-10 bg-blue-400/40 left-1/2"
                         style={{ transform: `rotate(${i * 45}deg) translateY(-80px)` }}
                       />
                     ))}
                  </div>
               </div>
            </div>

            {/* Right Side: Steps 5-7 */}
            <div className="lg:col-span-4 space-y-12">
              {[
                { title: 'Testing & QA', desc: 'Rigorously testing to deliver bug-free optimized solutions.' },
                { title: 'Deployment', desc: 'Handling secure and smooth product launch with precision.' },
                { title: 'Support & Maintenance', desc: 'Providing continuous updates and long-term support.' }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md group hover:bg-slate-800/60 transition-all text-left"
                >
                  <div className="absolute top-1/2 -left-4 w-8 h-px bg-gradient-to-l from-blue-500/50 to-transparent hidden lg:block" />
                  <div className="text-cyan-400 font-black text-xs uppercase tracking-widest mb-2">Step 0{idx + 5}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-blue-100/60 text-sm">{step.desc}</p>
                </motion.div>
              ))}
              
              {/* Future-Ready Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl border border-blue-500/30 bg-blue-500/5 flex items-center justify-center gap-3"
              >
                 <span className="flex h-3 w-3 rounded-full bg-blue-400 animate-ping" />
                 <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">Future Ready</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Core Capabilities - Redesigned Technical Dashboard */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                Core Capabilities
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1]">
                Engineering <br /> <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Digital Excellence.</span>
              </h2>
              <p className="text-lg text-blue-100/70 leading-relaxed mb-10">
                Our capabilities are built on a foundation of modern architecture, rigorous engineering, and a commitment to scalability.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                 <div>
                    <div className="text-4xl font-black text-white mb-2">99.9%</div>
                    <div className="text-xs text-blue-400 uppercase font-bold tracking-widest">Uptime Promise</div>
                 </div>
                 <div>
                    <div className="text-4xl font-black text-white mb-2">100%</div>
                    <div className="text-xs text-cyan-400 uppercase font-bold tracking-widest">Secure Systems</div>
                 </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Digital Engineering', 
                  desc: 'Seamless user journeys across platforms.', 
                  icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
                  color: 'blue'
                },
                { 
                  title: 'Scalable Architecture', 
                  desc: 'Systems built to grow with you.', 
                  icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
                  color: 'cyan'
                },
                { 
                  title: 'Cross-Platform', 
                  desc: 'Native-feel on every device.', 
                  icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
                  color: 'blue'
                },
                { 
                  title: 'API Integration', 
                  desc: 'Connected ecosystem systems.', 
                  icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
                  color: 'cyan'
                },
                { 
                  title: 'Performance Optimization', 
                  desc: 'Maximum speed and efficiency.', 
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                  color: 'indigo'
                }
              ].map((cap, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 relative overflow-hidden group hover:border-${cap.color}-500/30 transition-all
                    ${idx === 4 ? 'sm:col-span-2' : ''}
                  `}
                >
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${cap.color}-500/5 rounded-full blur-[40px] group-hover:bg-${cap.color}-500/10 transition-all`} />
                  
                  <div className={`w-12 h-12 rounded-xl bg-${cap.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-${cap.color}-500/20`}>
                    <svg className={`w-6 h-6 text-${cap.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cap.icon} />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">{cap.desc}</p>
                  
                  {/* Subtle Technical Grid Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
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
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-900 relative overflow-hidden shadow-2xl"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay" />
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8">
                Let’s Build <br /> Something Great
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
                Transform your ideas into impactful digital solutions. Whether you need a professional website or a powerful mobile application, we are your trusted partner.
              </p>
              <button className="px-10 py-4 bg-white text-blue-900 font-bold rounded-full text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all">
                Get Started Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}