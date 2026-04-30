'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function BusinessConsultancy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-blue-950 text-white overflow-hidden">
      {/* Background Ornaments */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),_transparent_35%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      {/* 1. Hero Section (Split Layout like Web App) */}
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
              <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30">
                <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                Strategic Business Growth
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Strategic Thinking.
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">
                  Practical Execution.
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-sm pb-2">Measurable Growth.</span>
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-blue-300 italic">
                Turn business challenges into scalable solutions.
              </h2>
              
              <div className="space-y-4 text-blue-100/80 text-lg leading-relaxed max-w-2xl pt-4 border-l-2 border-cyan-500/30 pl-6">
                <p>
                  At Clicknovation Technologies, our business consultancy services help organizations make smarter decisions, streamline operations, adopt the right technologies, and unlock new growth opportunities.
                </p>
                <p>
                  We combine market understanding, process intelligence, and digital innovation to roadmap your success.
                </p>
              </div>
            </motion.div>

            {/* Right Side: UNIQUE Animated Strategy Hub */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[100px]" />
              
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center perspective-[1000px]">
                {/* 3D Rotating Floor Grid */}
                <motion.div
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[150%] h-[150%] border-[0.5px] border-cyan-500/20 rounded-full [transform:rotateX(60deg)] opacity-40 bg-[radial-gradient(transparent_30%,_rgba(6,182,212,0.1)_100%)]"
                >
                   {/* Grid lines inside the rotated circle */}
                   <div className="w-full h-full bg-[linear-gradient(rgba(6,182,212,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.2)_1px,transparent_1px)] bg-[size:40px_40px] rounded-full overflow-hidden" />
                </motion.div>
                
                {/* Central Strategy Diamond */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 w-32 h-32 bg-slate-900 border border-cyan-400/50 rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.4)]"
                >
                  <div className="-rotate-45 flex flex-col items-center">
                    <svg className="w-10 h-10 text-cyan-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-[10px] font-bold tracking-widest text-white">GROWTH</span>
                  </div>
                </motion.div>

                {/* Orbiting Metrics Data Nodes */}
                {[
                  { label: "MARKET", delay: 0 },
                  { label: "PROCESS", delay: 1.5 },
                  { label: "DIGITAL", delay: 3 }
                ].map((node, i) => (
                   <motion.div
                     key={i}
                     animate={{ rotate: 360 }}
                     transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: node.delay }}
                     className="absolute w-full h-full z-30 pointer-events-none"
                   >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <motion.div 
                           animate={{ rotate: -360 }} // Counter-rotate to keep text upright
                           transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: node.delay }}
                           className="bg-slate-800 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2"
                         >
                            <div className={`w-2 h-2 rounded-full ${i===0?'bg-cyan-400':i===1?'bg-blue-400':'bg-indigo-400'} animate-pulse`} />
                            <span className="text-xs font-bold text-white tracking-wider">{node.label}</span>
                         </motion.div>
                      </div>
                   </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. What We Help You Solve - Bento Grid with Unique Reveal Hover */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
              Problem Solving
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              What We Help You <span className="text-cyan-400">Solve.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            {/* 1. Operational Process Improvement - Large Horizontal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-8 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-500/0 group-hover:from-blue-600/10 group-hover:to-cyan-500/10 transition-colors duration-500" />
              <div className="absolute right-0 top-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[bg-pan_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 h-full flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-lg ring-1 ring-cyan-500/30 group-hover:ring-cyan-400 group-hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">Operational Process Improvement</h3>
                  <p className="text-blue-100/70 text-lg leading-relaxed max-w-lg">
                    We analyze your existing workflows, internal systems, and team operations to improve productivity, reduce delays, and eliminate unnecessary manual work.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2. Digital Transformation - Vertical Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 ring-1 ring-blue-500/30 group-hover:ring-blue-400 group-hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  Helping traditional businesses shift toward smarter digital systems, automation, and technology-driven operations.
                </p>
              </div>
            </motion.div>

            {/* 3. Expansion Strategy - Tall Vertical Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-4 md:row-span-2 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col items-center text-center justify-center">
                <div className="w-24 h-24 rounded-3xl bg-slate-800 flex items-center justify-center mb-10 ring-1 ring-indigo-500/30 group-hover:ring-indigo-400 group-hover:-translate-y-3 transition-all duration-300">
                  <svg className="w-12 h-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Business Expansion Strategy</h3>
                <p className="text-blue-100/70 text-lg leading-relaxed">
                  Whether launching a new service, entering a new market, or scaling operations—we provide strategic planning backed by practical implementation guidance.
                </p>
              </div>
            </motion.div>

            {/* 4. Brand Positioning - Square Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col h-full gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center ring-1 ring-cyan-500/30 group-hover:ring-cyan-400 group-hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Brand Positioning</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">We help businesses define how they should appear, communicate, and compete in the modern market.</p>
                </div>
              </div>
            </motion.div>

            {/* 5. Technology Advisory - Square Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-4 relative p-8 rounded-[3rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col h-full gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center ring-1 ring-blue-500/30 group-hover:ring-blue-400 group-hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Technology Advisory</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">Selecting the right software, cloud tools, business systems, and IT infrastructure that support long-term growth.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Methodology Process (From Idea to Impact structure) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
                Consulting Methodology
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1]">
                A logical framework for <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">business improvement.</span>
              </h2>
              <p className="text-lg text-blue-100/70 leading-relaxed mb-10">
                We don't guess. We follow a systematic, logic-driven approach to deconstruct your business challenges and architect a clear path to execution.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'Understanding the Business', desc: 'We begin by studying your business model, current workflow, customer challenges, and growth objectives.' },
                  { title: 'Gap & Opportunity Analysis', desc: 'Our team identifies where your business is losing time, money, efficiency, or market opportunities.' },
                  { title: 'Strategic Blueprint Creation', desc: 'We build a customized improvement strategy with practical recommendations.' },
                  { title: 'Execution Support', desc: 'Beyond planning, we help in implementation through technology solutions, process systems, branding, and digital tools.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-cyan-500/20 flex items-center justify-center text-cyan-300 font-black text-lg group-hover:bg-cyan-500/20 transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-blue-100/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-7 relative">
              {/* UNIQUE Process Animation: The Ascending Growth Steps */}
              <div className="relative aspect-video rounded-[3rem] bg-slate-900/40 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl flex items-end justify-center p-8">
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
                 
                 <div className="relative w-full h-full flex items-end justify-between gap-4">
                    {[1, 2, 3, 4].map((step, i) => (
                       <motion.div
                         key={i}
                         initial={{ height: "10%" }}
                         whileInView={{ height: `${(i + 1) * 25}%` }}
                         transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                         viewport={{ once: true }}
                         className="relative flex-1 bg-gradient-to-t from-slate-800 to-cyan-500/20 border border-white/10 rounded-t-xl group"
                       >
                          {/* Inner Glowing Column */}
                          <div className="absolute inset-x-2 bottom-0 top-2 bg-gradient-to-t from-transparent to-cyan-400/20 rounded-t-md opacity-50 group-hover:opacity-100 transition-opacity" />
                          
                          {/* Floating Marker */}
                          <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                            className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-900 border border-cyan-400 rounded-full flex items-center justify-center"
                          >
                             <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                          </motion.div>
                       </motion.div>
                    ))}
                 </div>

                 {/* Arrow Trend Line Overlay */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                    <motion.path 
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       transition={{ duration: 1.5, delay: 1 }}
                       viewport={{ once: true }}
                       d="M 10% 80% L 35% 60% L 60% 35% L 85% 10%"
                       fill="none" 
                       stroke="#22d3ee" 
                       strokeWidth="3" 
                       strokeLinecap="round" 
                       strokeLinejoin="round" 
                    />
                    <motion.path 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 2.5 }}
                       viewport={{ once: true }}
                       d="M 75% 10% L 85% 10% L 85% 20%"
                       fill="none"
                       stroke="#22d3ee"
                       strokeWidth="3"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                    />
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Areas of Strategic Consultation (Replaces Tech Expertise Grid) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
              Strategic Domains
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Areas of Strategic <span className="text-cyan-400">Consultation.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Startup Advisory', desc: 'Guidance for launching with the right structure, digital presence, and systems.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Automation Consulting', desc: 'Identifying manual tasks and replacing them with efficient digital workflows.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
              { title: 'Revenue Optimization', desc: 'Improving service offerings, pricing structures, and customer funnels.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Enterprise Consulting', desc: 'Modernizing operations for schools, hospitals, and organizations via tech.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' }
            ].map((area, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-slate-950 border border-slate-700/50 shadow-xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-blue-100/60 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clarity Before Growth (Replaces Development Approach Center Core) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
                Assessment & Clarity
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
                Business Clarity Before <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Business Growth.</span>
              </h2>
              <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl mx-auto">
                Before investing in systems or expansion, businesses need a clear understanding of what is limiting growth and where the next opportunity lies.
              </p>
            </motion.div>
          </div>

          <div className="relative grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Side Points */}
            <div className="lg:col-span-4 space-y-8">
              {[
                { title: 'Operational Inefficiencies', desc: 'Identify bottlenecks slowing you down.' },
                { title: 'Technology Gaps', desc: 'Find where legacy systems hold back progress.' },
                { title: 'Revenue Leakage', desc: 'Pinpoint areas where profitability is slipping.' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md text-right hover:border-cyan-500/30 transition-colors"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-blue-100/60 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Middle: UNIQUE Animated Clarity Radar */}
            <div className="lg:col-span-4 flex justify-center py-12 lg:py-0">
               <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 border-[3px] border-cyan-400 rounded-full"
                  />
                  <motion.div 
                    animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute inset-4 border border-blue-400 rounded-full"
                  />
                  
                  {/* Central Core */}
                  <div className="absolute inset-16 bg-slate-900 border border-cyan-500/30 rounded-full shadow-[0_0_80px_rgba(6,182,212,0.3)] flex items-center justify-center z-10 backdrop-blur-md">
                     <div className="text-center">
                        <span className="block text-cyan-400 font-black tracking-widest uppercase text-sm">Clear</span>
                        <span className="block text-white font-bold tracking-widest uppercase text-xs">Vision</span>
                     </div>
                  </div>

                  {/* Scanning line */}
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 origin-center z-0"
                  >
                     <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-cyan-500/20" />
                  </motion.div>
               </div>
            </div>

            {/* Right Side Points */}
            <div className="lg:col-span-4 space-y-8">
              {[
                { title: 'Customer Experience Issues', desc: 'Resolve friction points in the user journey.' },
                { title: 'Expansion Opportunities', desc: 'Map out new markets and product lines.' },
                { title: 'Digital Transformation', desc: 'Determine the requirements for modernization.' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md text-left hover:border-cyan-500/30 transition-colors"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-blue-100/60 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Businesses Choose Us & Real Outcomes (Replaces Core Capabilities) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30 mb-8">
                Consultancy Impact
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1]">
                Built Around <br /> <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Real Outcomes.</span>
              </h2>
              <p className="text-lg text-blue-100/70 leading-relaxed mb-6">
                In a rapidly changing market, businesses cannot rely only on traditional decisions. They need expert guidance to stay competitive, agile, and digitally aligned.
              </p>
              <ul className="space-y-4 text-blue-100/80 mb-8">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Reducing costly mistakes</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Making informed investments</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Accelerating growth & efficiency</li>
              </ul>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Faster Operations', desc: 'Streamlined process execution.' },
                { title: 'Better Customer Handling', desc: 'Improved journey and satisfaction.' },
                { title: 'Team Coordination', desc: 'Aligned goals and internal logic.' },
                { title: 'Digital Visibility', desc: 'Stronger brand presence online.' },
                { title: 'Smarter Decisions', desc: 'Data-driven business choices.' },
                { title: 'Sustainable Growth', desc: 'Long-term revenue structuring.' }
              ].map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-[1.5rem] bg-slate-900/60 border border-white/5 relative overflow-hidden group hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     </div>
                     <div>
                        <h3 className="text-lg font-bold text-white mb-1">{outcome.title}</h3>
                        <p className="text-blue-100/60 text-sm">{outcome.desc}</p>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. Call to Action (Partnership) */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-slate-900 to-blue-950 relative overflow-hidden shadow-2xl border border-cyan-500/20"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4 tracking-wide uppercase">More Than Advice — A Growth Partnership</h3>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Build Smarter. <br /> Operate Better. <br /> Grow Faster.
              </h2>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                At Clicknovation Technologies, we work as your long-term business improvement partner. With the right strategy and systems, move from uncertainty to measurable growth.
              </p>
              <button className="px-10 py-4 bg-cyan-500 text-slate-950 font-bold rounded-full text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:bg-cyan-400 hover:scale-105 transition-all">
                Start Your Transformation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
