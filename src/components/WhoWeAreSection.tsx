'use client';

import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_28%)]" />
      <div className="absolute inset-0 z-0 opacity-[0.14] [background-image:linear-gradient(rgba(148,163,184,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.24)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="absolute left-1/2 top-14 z-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full border border-sky-400/10 bg-sky-500/8 blur-3xl" />
      <div className="absolute inset-x-0 top-0 z-0 h-48 bg-[linear-gradient(180deg,rgba(37,99,235,0.18),transparent)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT COLUMN: All Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 text-blue-400 font-bold rounded-full border border-blue-500/20 mb-6 text-xs uppercase tracking-[0.2em]">
                Who We Are
              </div>
              
              <div className="flex flex-col leading-none tracking-tighter mb-6">
                <span className="text-5xl sm:text-7xl lg:text-8xl font-sans font-extrabold text-white">
                  Empowering
                </span>
                <div className="text-5xl sm:text-7xl lg:text-8xl font-sans font-extrabold -mt-1">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-1">Future</span>
                  <span className="text-white ml-3 sm:ml-4 tracking-tighter">with</span>
                </div>
                <div className="flex items-center text-4xl sm:text-6xl lg:text-7xl font-mono text-gray-200 mt-1">
                  Innovation
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="ml-2 sm:ml-4 inline-block w-[3px] h-[35px] sm:h-[50px] lg:h-[60px] bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Clicknovation Technologies helps businesses succeed in today’s digital world with simple, smart, and effective technology solutions. We assist organizations in improving their systems, boosting performance, and adopting modern, reliable, and scalable solutions that are easy to manage and support long-term growth and success.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-slate-800/40 border border-slate-700/30 p-4 rounded-xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-xl">
                <span className="text-2xl font-black text-blue-400">5+</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Innovation</span>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/30 p-4 rounded-xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-xl">
                <span className="text-2xl font-black text-cyan-400">200+</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Projects</span>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/30 p-4 rounded-xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-xl">
                <span className="text-2xl font-black text-blue-500">50+</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Clients</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Animation Structure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center relative min-h-[500px]"
          >
             {/* Abstract Pulse Animation */}
             <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-[100px] animate-pulse" />
             
             <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                {/* Expanding Energy Waves */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 2],
                      opacity: [0.2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1.3,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 border border-blue-500/20 rounded-full"
                  />
                ))}

                {/* Central Core Sphere */}
                <div className="relative z-10 w-48 h-48 bg-slate-900 border border-white/10 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)] group overflow-hidden">
                   <motion.div
                     animate={{ 
                       rotate: 360,
                       scale: [1, 1.1, 1]
                     }}
                     transition={{
                       rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                       scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                     }}
                     className="absolute inset-2 border-2 border-dashed border-cyan-400/20 rounded-full"
                   />
                   <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                         <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                         </svg>
                      </div>
                      <span className="text-xs font-black tracking-[0.4em] text-white uppercase">Growth</span>
                   </div>
                </div>

                {/* Floating Value Badges */}
                {[
                  { label: "SIMPLE", pos: "-top-4 left-1/2 -translate-x-1/2", color: "blue" },
                  { label: "SMART", pos: "bottom-1/4 -right-8", color: "cyan" },
                  { label: "EFFECTIVE", pos: "bottom-1/4 -left-8", color: "blue" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    className={`absolute p-4 sm:p-5 bg-slate-950/90 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl z-20 ${item.pos}`}
                  >
                     <span className={`text-[10px] font-black tracking-[0.3em] text-${item.color}-400 uppercase`}>{item.label}</span>
                  </motion.div>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
