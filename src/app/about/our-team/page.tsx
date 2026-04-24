'use client';

import { motion } from 'framer-motion';
import { 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon, 
  MegaphoneIcon, 
  CloudIcon, 
  LifebuoyIcon,
  ClipboardDocumentListIcon,
  MapIcon,
  CodeBracketIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  SparklesIcon,
  CpuChipIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  ArrowsPointingOutIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import Footer from '@/components/Footer';

export default function OurTeam() {

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.05),_transparent_40%)] pointer-events-none z-0" />
      
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                <span className="inline-flex h-2 w-2 rounded-full bg-blue-400" />
                Our Team
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">Driven by</span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">Expertise.</span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">United by Purpose.</span>
                </span>
              </div>
              
              <div className="space-y-6 text-blue-100/80 text-lg leading-relaxed max-w-2xl">
                 <p className="font-bold text-2xl text-blue-300 italic">Skilled professionals working together to create impactful solutions.</p>
                 <p>
                  Our team brings together creativity, technical expertise, and practical experience to deliver effective digital solutions. Through strong collaboration and a shared vision, we ensure every project meets the highest standards of quality and performance.
                 </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative aspect-square flex items-center justify-center pointer-events-none"
            >
              {/* Unique Connectivity Grid Animation */}
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
                
                {/* Connection Lines (Static SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                  <motion.path
                    d="M200 100 L200 300 M100 200 L300 200 M130 130 L270 270 M270 130 L130 270"
                    stroke="url(#grad1)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* CENTRAL STATIC CORE (No Rotation) */}
                <div className="relative z-20 w-48 h-48 bg-slate-900 border-2 border-blue-500/30 rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                  <div className="flex flex-col items-center">
                    <UserGroupIcon className="w-12 h-12 text-blue-400 mb-2" />
                    <span className="text-xl font-black tracking-[0.3em] text-white">TEAM</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400">STRENGTH</span>
                  </div>
                </div>

                {/* FLOATING SYNERGY NODES (Simple Motion Only) */}
                {[
                  { label: "SKILL", icon: CpuChipIcon, pos: "top-0 left-1/2 -translate-x-1/2" },
                  { label: "TRUST", icon: ShieldCheckIcon, pos: "bottom-0 left-1/2 -translate-x-1/2" },
                  { label: "IDEAS", icon: LightBulbIcon, pos: "left-0 top-1/2 -translate-y-1/2" },
                  { label: "GROW", icon: RocketLaunchIcon, pos: "right-0 top-1/2 -translate-y-1/2" }
                ].map((node, i) => (
                  <motion.div
                    key={node.label}
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
                    className={`absolute p-4 bg-slate-800/90 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col items-center gap-1 shadow-2xl z-30 ${node.pos}`}
                  >
                     <node.icon className="w-6 h-6 text-cyan-400" />
                     <span className="text-[8px] font-bold tracking-widest text-white/50">{node.label}</span>
                  </motion.div>
                ))}

                {/* Additional Decorative Dots */}
                <div className="absolute inset-0">
                   {[...Array(8)].map((_, i) => (
                     <motion.div
                       key={i}
                       animate={{ opacity: [0.2, 0.6, 0.2] }}
                       transition={{ duration: 2 + i, repeat: Infinity }}
                       className={`absolute w-1.5 h-1.5 bg-blue-400 rounded-full blur-[1px]
                        ${i === 0 ? 'top-1/4 left-1/4' : ''}
                        ${i === 1 ? 'top-3/4 right-1/4' : ''}
                        ${i === 2 ? 'top-1/2 right-10' : ''}
                        ${i === 3 ? 'bottom-10 left-1/2' : ''}
                        ${i === 4 ? 'top-10 left-10' : ''}
                        ${i === 5 ? 'bottom-5 right-5' : ''}
                        ${i === 6 ? 'top-1/3 right-1/3' : ''}
                        ${i === 7 ? 'left-5 bottom-1/3' : ''}
                       `}
                     />
                   ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                Who We Are
              </div>
              <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Passionate Minds Focused on</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Innovation & Problem-Solving</span>
                </span>
              </div>
              <p className="text-xl text-blue-100/70 leading-relaxed max-w-4xl">
                We are a team of dedicated professionals driven by a passion for technology, innovation, and solving real-world challenges. At Clicknovation Technologies, we specialize in understanding unique business requirements and transforming ideas into reliable, scalable, and result-oriented digital solutions.
              </p>
            </motion.div>

            {/* Unique Collaboration Animation for Who We Are */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-square flex items-center justify-center bg-slate-900/30 rounded-[3rem] border border-white/5 overflow-hidden"
            >
               {/* Moving "Team Synergy" Bars */}
               <div className="flex items-end gap-3 h-32">
                 {[...Array(12)].map((_, i) => (
                   <motion.div
                     key={i}
                     animate={{
                       height: [20, 60 + (i * 10) % 60, 20],
                       backgroundColor: i % 2 === 0 ? '#3b82f6' : '#22d3ee'
                     }}
                     transition={{
                       duration: 2 + i * 0.1,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                     className="w-3 rounded-full opacity-40 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                   />
                 ))}
               </div>
               
               {/* Label in center of animation */}
               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="p-6 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl"
                  >
                     <span className="text-xs font-bold tracking-[0.4em] text-cyan-400">SYNERGY</span>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* OUR EXPERTISE */}
        <section className="py-24 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
           {/* Background Grid Animation */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           </div>

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
                 <div>
                    <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Our Expertise</h2>
                    <h3 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1]">
                       Comprehensive skills to power <br className="hidden md:block"/><span className="text-cyan-400">digital growth.</span>
                    </h3>
                 </div>
                 
                 {/* Mini Dynamic Indicator */}
                 <div className="hidden lg:flex justify-end">
                    <div className="flex gap-2">
                       {[...Array(4)].map((_, i) => (
                         <motion.div
                           key={i}
                           animate={{ 
                             scaleY: [1, 1.5, 1],
                             opacity: [0.3, 1, 0.3]
                           }}
                           transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                           className="w-1.5 h-8 bg-blue-500 rounded-full"
                         />
                       ))}
                    </div>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Web Development', icon: GlobeAltIcon },
                  { name: 'Application Development', icon: DevicePhoneMobileIcon },
                  { name: 'UI/UX Design', icon: PaintBrushIcon },
                  { name: 'Digital Marketing', icon: MegaphoneIcon },
                  { name: 'Cloud & Network Solutions', icon: CloudIcon },
                  { name: 'Technical Support', icon: LifebuoyIcon },
                ].map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="p-8 bg-slate-950/40 border border-slate-800/50 rounded-3xl hover:border-blue-500/30 hover:bg-slate-900/60 transition-all group overflow-hidden"
                  >
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-600/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600 transition-colors">
                         <item.icon className="w-6 h-6 text-cyan-400 group-hover:text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white tracking-wide">{item.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </section>

        {/* OUR WORK APPROACH */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                  Work Approach
                </div>
                <div className="flex flex-col leading-[1.1] tracking-tight">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Structured Process</span>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Ensuring Success</span>
                  </span>
                </div>
              </div>

              {/* Progress Flow Animation */}
              <div className="flex items-center gap-4 py-4 px-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                 {[...Array(5)].map((_, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <motion.div 
                        animate={{ 
                          backgroundColor: ['rgba(59,130,246,0.1)', 'rgba(34,211,238,0.8)', 'rgba(59,130,246,0.1)']
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                        className="w-3 h-3 rounded-full"
                      />
                      {i < 4 && <div className="w-8 h-px bg-white/10" />}
                   </div>
                 ))}
                 <span className="ml-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">LIVE FLOW</span>
              </div>
          </div>

          <div className="space-y-6">
            {[
              { 
                title: "Understanding Requirements", 
                subtitle: "Clarity from the very beginning.",
                desc: "We begin by carefully analyzing client needs, goals, and challenges to establish a strong foundation.",
                icon: ClipboardDocumentListIcon
              },
              { 
                title: "Planning & Strategy", 
                subtitle: "Smart planning for effective execution.",
                desc: "Based on insights, we design a clear and efficient strategy to achieve optimal results.",
                icon: MapIcon
              },
              { 
                title: "Design & Development", 
                subtitle: "User-focused design with powerful technology.",
                desc: "Our team creates intuitive designs and develops scalable, reliable solutions using modern tools.",
                icon: CodeBracketIcon
              },
              { 
                title: "Testing & Quality Assurance", 
                subtitle: "Ensuring performance, security, and reliability.",
                desc: "We rigorously test every component to meet high-quality standards.",
                icon: CheckBadgeIcon
              },
              { 
                title: "Delivery & Ongoing Support", 
                subtitle: "Long-term success beyond delivery.",
                desc: "We ensure timely delivery and provide continuous support to maintain smooth operations and growth.",
                icon: RocketLaunchIcon
              }
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[3rem] bg-slate-900/60 border border-slate-700/50 hover:bg-slate-800/80 transition-all flex flex-col md:flex-row gap-10 items-start overflow-hidden"
              >
                 {/* Background Number */}
                 <div className="absolute right-10 top-0 text-[10rem] font-black text-white/5 pointer-events-none">{idx + 1}</div>
                 
                 <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                    <step.icon className="w-8 h-8 text-white" />
                 </div>
                 <div className="relative z-10 lg:max-w-2xl">
                    <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-cyan-400 font-bold mb-4">{step.subtitle}</p>
                    <p className="text-slate-400 leading-relaxed text-lg">{step.desc}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DIFFERENTIATORS - 10 POINTS */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center mb-16">
             <h2 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">The Clicknovation Difference</h2>
             <h3 className="text-4xl sm:text-6xl font-bold mb-8">Expertise, Innovation, <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Commitment.</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: "Multi-Domain Expertise", desc: "Diverse skills across technologies for complete, integrated solutions under one roof.", icon: ArrowsPointingOutIcon },
               { title: "Solution-Oriented Mindset", desc: "We prioritize solving real business challenges with measurable, outcome-focused results.", icon: LightBulbIcon },
               { title: "Agile & Adaptive Workflow", desc: "Flexible processes that adapt quickly to change, ensuring efficiency and responsiveness.", icon: BoltIcon },
               { title: "Continuous Learning", desc: "We stay updated with the latest tools and trends to deliver modern, future-ready solutions.", icon: ArrowPathIcon },
               { title: "Strong Collaboration", desc: "Transparency at every step. Clear communication builds long-term client confidence.", icon: ChatBubbleLeftRightIcon },
               { title: "Innovation-Driven", desc: "Creative thinking integrated into execution to develop unique, high-performing solutions.", icon: SparklesIcon },
               { title: "Quality Assurance", desc: "Structured testing and reviews at every stage to ensure reliability and security.", icon: CheckBadgeIcon },
               { title: "Ownership & Accountability", desc: "We take full responsibility for every project, ensuring consistency and timely completion.", icon: ShieldCheckIcon },
               { title: "Scalable Thinking", desc: "Systems designed for long-term growth, built to evolve alongside your business needs.", icon: CpuChipIcon },
               { title: "Long-Term Support", desc: "Supporting you beyond delivery with improvements that ensure sustained digital success.", icon: LifebuoyIcon }
             ].map((item, idx) => (
               <motion.div
                 key={item.title}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4, delay: idx * 0.05 }}
                 viewport={{ once: true }}
                 className="p-8 bg-slate-900/40 border border-slate-800/50 rounded-3xl hover:border-blue-500/30 hover:bg-slate-800/40 transition-all group flex flex-col h-full"
               >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                     <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}