'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-blue-950 text-white overflow-hidden">
      {/* Background Ornaments */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.5),_transparent_35%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      {/* 1. About Clicknovation Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30">
                <span className="inline-flex h-2 w-2 rounded-full bg-blue-400" />
                About Clicknovation
              </div>
              
              <div className="flex flex-col leading-[1.1] sm:leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Driven by
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">
                  Ideas with
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Technology</span>
                </span>
              </div>
              
              <div className="space-y-4 text-blue-100/80 text-lg leading-relaxed max-w-2xl pt-4">
                <p>
                  Clicknovation Technologies is a modern IT company focused on delivering reliable and scalable digital solutions. We help turn business ideas into practical and impactful digital experiences.
                </p>
                <p>
                  Our approach is simple and effective. We simplify complex systems, improve efficiency, and help businesses adapt to the changing digital world. With the right mix of technology and business understanding, we create solutions that are user-friendly, future-ready, and aligned with long-term goals.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="relative aspect-square flex items-center justify-center overflow-hidden"
            >
              {/* Abstract Animation: Innovation & Ideas */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative w-full max-w-[450px] aspect-square">
                {/* Rotating Rings for Technological Core */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 border border-cyan-400/30 rounded-full"
                />

                {/* Central Floating "Idea" Pulse */}
                <div className="absolute inset-[30%] bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-6 group">
                   <motion.div
                     animate={{ 
                       scale: [1, 1.15, 1],
                       opacity: [0.7, 1, 0.7]
                     }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 border border-blue-400/40"
                   >
                     <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                     </svg>
                   </motion.div>
                   <span className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase">Innovation</span>
                   <div className="h-px w-8 bg-blue-500/30 my-2" />
                   <span className="text-[10px] font-black tracking-[0.4em] text-cyan-400 uppercase">Creative</span>
                </div>

                {/* Orbiting Tech Tokens */}
                {[
                  { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', label: 'CODE' },
                  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'SPEED' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'PURE' },
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'REAL' }
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, (idx % 2 === 0 ? 10 : -10), 0]
                    }}
                    transition={{
                      duration: 5 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.8
                    }}
                    className={`absolute p-4 bg-slate-900/80 border border-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center gap-2 shadow-xl z-20
                      ${idx === 0 ? '-top-2 -right-2' : ''}
                      ${idx === 1 ? '-bottom-2 -left-2' : ''}
                      ${idx === 2 ? 'top-1/2 -right-8 -translate-y-1/2' : ''}
                      ${idx === 3 ? 'bottom-1/2 -left-8 translate-y-1/2' : ''}
                    `}
                  >
                     <svg className="w-5 h-5 text-blue-400 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                     </svg>
                     <span className="text-[8px] font-bold tracking-widest text-white/40">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Side: Heading and Text */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start text-left"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                Why Choose Us
              </div>
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Engineered for</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white mt-1">Performance and</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Reliability</span>
                </span>
              </div>
              <p className="text-lg text-blue-100/70 leading-relaxed max-w-xl">
                At Clicknovation Technologies, we deliver more than just technology — we create solutions that align with your business goals and drive real results. Our approach blends strategic thinking, technical expertise, and a clear understanding of your needs to build systems that are efficient, scalable, and future-ready.
              </p>
            </motion.div>

            {/* Right Side: Bento Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Box 1 - Smart & Scalable Solutions (Spans full width) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="sm:col-span-2 relative p-8 md:p-10 rounded-[2rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
              >
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-400/30 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col sm:flex-row h-full gap-8 items-start sm:items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)] ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Smart & Scalable Solutions</h3>
                    <p className="text-blue-100/70 text-base leading-relaxed">Designed to securely adapt, seamlessly grow, and effortlessly perform as your business evolves.</p>
                  </div>
                </div>
              </motion.div>

              {/* Box 2 - Seamless Execution */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
              >
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-400/20 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-lg ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Seamless Execution</h3>
                    <p className="text-blue-100/70 text-sm leading-relaxed">Smooth integration, highly efficient processes, and consistently timely delivery.</p>
                  </div>
                </div>
              </motion.div>

              {/* Box 3 - Reliable Performance */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
              >
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-400/20 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)] ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Reliable Performance</h3>
                    <p className="text-blue-100/70 text-sm leading-relaxed">High-quality, inherently secure, and consistently optimized systems.</p>
                  </div>
                </div>
              </motion.div>

              {/* Box 4 - Transparent Partnership (Spans full width) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="sm:col-span-2 relative p-8 md:p-10 rounded-[2rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
              >
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-400/30 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col sm:flex-row h-full gap-8 items-start sm:items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-lg ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Transparent Partnership</h3>
                    <p className="text-blue-100/70 text-base leading-relaxed">Crystal clear communication, remarkable operational flexibility, and highly dedicated ongoing support at every stage.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Journey / Timeline */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Our Journey
            </div>
            <div className="flex flex-col leading-[1.1] tracking-tight justify-center items-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Growing with</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white mt-1">Innovation and</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Experience</span>
              </span>
            </div>
            <p className="mt-8 text-lg text-blue-100/70 leading-relaxed max-w-3xl mx-auto">
              Our journey reflects a continuous evolution driven by vision, technology, and commitment to excellence. From local beginnings to expanding across Maharashtra, every milestone represents our dedication to growth and innovation.
            </p>
          </motion.div>

          <div className="relative pt-10 pb-10">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/80 via-cyan-400/50 to-transparent transform -translate-x-1/2"></div>
            
            {/* Left Line for Mobile */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/80 via-cyan-400/50 to-transparent"></div>

            {[
              { year: '2012', title: 'The Beginning', desc: 'Started as Clicknet Communication on 18 August 2012, focusing on providing reliable home broadband services in Bhandara and Gondia districts.' },
              { year: '2016', title: 'Company Expansion', desc: 'Incorporated as Clicknet Communication Pvt. Ltd. on 25 July 2016, marking a significant step towards structured growth and service expansion.' },
              { year: 'Growth', title: 'Service Growth Phase', desc: 'Expanded operations to include both home and corporate broadband services, strengthening our presence and capabilities in the region.' },
              { year: '2018', title: 'ISP License Achievement', desc: 'Obtained ISP License (Category "C") on 18 September 2018 for the Bhandara (Maharashtra) service area, expanding service capabilities.' },
              { year: '2020', title: 'Rural Development Collaboration', desc: 'Began working with BBNL on 01 November 2020, contributing to rural development by providing internet services.' },
              { year: 'Infra', title: 'Infrastructure Development', desc: 'Established and deployed servers on our own premises, ensuring better control, performance, and service reliability.' },
              { year: '2025', title: 'Major Milestone', desc: 'Secured UL-VNO (ISP) License – Category B from DOT on 07 February 2025, expanding across Maharashtra.' },
              { year: 'Scale', title: 'Advanced Data Center Deployment', desc: 'Deployed core routers and servers in Tata Communications Data Center, Mumbai, enhancing network strength and uptime.' },
              { year: 'Now', title: 'The Birth of Clicknovation Technologies', desc: 'Launched Clicknovation Technologies to provide advanced IT services, bringing innovation and digital solutions across the region.' }
            ].map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative mb-16 md:mb-24 w-full flex flex-col md:flex-row justify-between items-center group">
                  
                  {/* Glowing Node on Timeline */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 ring-4 ring-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.6)] transform -translate-x-1/2 z-20 group-hover:scale-[1.35] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all duration-300">
                    <div className="absolute inset-[3px] rounded-full bg-blue-500"></div>
                  </div>

                  {/* Card Content - Alternating Sides */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 mt-2 md:mt-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-3 md:pl-12 md:text-left'} text-left`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden shadow-xl hover:bg-slate-800/60 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 group/card"
                    >
                      {/* Watermark Year Background */}
                      <div className={`absolute top-4 opacity-5 text-7xl md:text-8xl font-black italic text-blue-300 pointer-events-none select-none z-0 ${isEven ? 'right-4' : 'left-4'}`}>
                        {step.year}
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full justify-center">
                        <div className={`text-cyan-400 font-mono font-bold text-sm mb-2 uppercase tracking-widest flex items-center ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          {isEven && <span className="hidden md:inline-block w-8 h-px bg-cyan-400/50 mr-3"></span>}
                          {step.year}
                          {(!isEven || true) && <span className="md:hidden inline-block w-8 h-px bg-cyan-400/50 ml-3"></span>}
                          {!isEven && <span className="hidden md:inline-block w-8 h-px bg-cyan-400/50 ml-3"></span>}
                        </div>
                        <h4 className="text-2xl font-extrabold text-white mb-3 group-hover/card:text-cyan-200 transition-colors">{step.title}</h4>
                        <p className="text-blue-100/70 text-base leading-relaxed">{step.desc}</p>
                      </div>

                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for layout */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'md:order-3' : 'md:order-1'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Our Vision */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/20 overflow-hidden">
        {/* Abstract glowing background element */}
        <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Vision Content */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Our Vision
            </div>
            <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Advancing a</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white mt-1">Future-Ready</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text pb-2 drop-shadow-sm">Digital Ecosystem</span>
              </span>
            </div>
            <div className="space-y-6 text-blue-100/70 text-lg leading-relaxed max-w-xl">
              <p>
                Our vision is to empower organizations with intelligent, future-ready technology solutions that drive innovation, operational excellence, and sustainable growth. We aspire to be a trusted digital partner, enabling enterprises to adapt, evolve, and lead with confidence in a rapidly transforming digital landscape.
              </p>
              <p>
                Through continuous innovation and a strong commitment to excellence, we aim to simplify complex technologies and deliver impactful digital experiences that create long-term value.
              </p>
            </div>
          </motion.div>

          {/* Vision Image Animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square flex items-center justify-center p-4"
          >
             {/* Abstract Connectivity Structure */}
             <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[100px]" />
             
             <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                {/* Expanding Pulse Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 border border-blue-400/30 rounded-full"
                  />
                ))}

                {/* Central Ecosystem Node */}
                <div className="relative z-10 w-48 h-48 bg-slate-900 border border-white/10 rounded-full flex flex-col items-center justify-center shadow-2xl group overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     className="w-16 h-16 border-2 border-dashed border-cyan-400/40 rounded-full flex items-center justify-center mb-4"
                   >
                      <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                   </motion.div>
                   <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">Ecosystem</span>
                </div>

                {/* Satellite Connectivity Nodes */}
                {[...Array(6)].map((_, i) => (
                   <motion.div 
                     key={i}
                     animate={{
                       rotate: 360
                     }}
                     transition={{
                       duration: 20 + i * 5,
                       repeat: Infinity,
                       ease: "linear"
                     }}
                     className="absolute inset-0 flex items-start justify-center"
                   >
                      <div className="w-10 h-10 -mt-5 bg-slate-800 border border-blue-400/30 rounded-xl flex items-center justify-center shadow-lg">
                         <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" />
                      </div>
                   </motion.div>
                ))}
             </div>
          </motion.div>

        </div>
      </section>

      {/* 5. What Makes Us Different */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 relative overflow-hidden">
        {/* Abstract glowing background element */}
        <div className="absolute bottom-0 left-0 -ml-[20%] -mb-[10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Differentiator Image Animation (Left side on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-last lg:order-first aspect-square flex items-center justify-center p-4"
          >
             <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-[100px]" />
             
             <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                {/* Precision Grid Background */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-20">
                   {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-cyan-400/30 rounded-lg" />
                   ))}
                </div>

                {/* Central Commitment Shield */}
                <div className="relative z-10 w-56 h-56 bg-slate-900 border border-white/20 rounded-[3rem] flex flex-col items-center justify-center shadow-2xl group overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-bl from-cyan-600/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <motion.div
                     initial={{ rotateY: 0 }}
                     animate={{ rotateY: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                     className="w-20 h-20 bg-cyan-600/20 rounded-3xl flex items-center justify-center mb-6 border border-cyan-400/30"
                   >
                      <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                   </motion.div>
                   <span className="text-sm font-black text-white uppercase tracking-[0.3em]">Quality</span>
                   <div className="h-px w-10 bg-cyan-400/40 my-3" />
                   <span className="text-sm font-black text-blue-400 uppercase tracking-[0.3em]">Commitment</span>
                </div>

                {/* Floating Satisfaction Metrics */}
                {[
                  { value: '100%', label: 'QUALITY', pos: '-top-4 -right-4' },
                  { value: '24/7', label: 'SUPPORT', pos: '-bottom-4 -left-4' }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute p-6 bg-slate-900/90 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col items-center z-20 ${item.pos}`}
                  >
                     <span className="text-2xl font-black text-cyan-400 mb-1">{item.value}</span>
                     <span className="text-[10px] font-bold text-white/40 tracking-widest">{item.label}</span>
                  </motion.div>
                ))}
             </div>
          </motion.div>

          {/* Differentiator Content */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              What Makes Us Different
            </div>
            <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Focused on</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white mt-1">Quality and</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text pb-2 drop-shadow-sm">Commitment</span>
              </span>
            </div>
            <p className="text-blue-100/70 text-lg leading-relaxed max-w-xl mb-12">
              At Clicknovation Technologies, we believe in putting our clients first. We take the time to understand your business needs and goals before building the right solution. Our focus is not just on delivering projects, but on creating solutions that add real value and support your growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                { title: 'Client-Focused', desc: 'Custom solutions matching your diverse business goals.' },
                { title: 'Custom Solutions', desc: 'Every project is designed strictly for your specific requirements.' },
                { title: 'Reliability', desc: 'Stable, deeply secure, and high-performing tech systems.' },
                { title: 'Ongoing Support', desc: 'Dedicated partnership ensures everything runs smoothly.' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:bg-slate-800/80 transition-colors group">
                  <div className="w-10 h-10 mb-4 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                      {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                      {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />}
                      {idx === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">{item.title}</h4>
                    <p className="text-blue-100/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}