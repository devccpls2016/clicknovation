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
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const expertiseItems = [
  { name: 'Web Development', icon: GlobeAltIcon },
  { name: 'Application Development', icon: DevicePhoneMobileIcon },
  { name: 'UI/UX Design', icon: PaintBrushIcon },
  { name: 'Digital Marketing', icon: MegaphoneIcon },
  { name: 'Cloud & Network Solutions', icon: CloudIcon },
  { name: 'Technical Support', icon: LifebuoyIcon },
];

const approachSteps = [
  {
    title: 'Understanding Requirements',
    description: 'We begin by carefully analyzing client needs, goals, and challenges to ensure a clear direction from the start.',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Planning & Strategy',
    description: 'Based on the requirements, we create a well-defined plan and strategy to achieve efficient and effective results.',
    icon: MapIcon,
  },
  {
    title: 'Design & Development',
    description: 'Our team designs user-friendly interfaces and develops reliable, scalable solutions using modern technologies.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'We thoroughly test every aspect of the project to ensure performance, security, and quality standards are met.',
    icon: CheckBadgeIcon,
  },
  {
    title: 'Delivery & Ongoing Support',
    description: 'After successful completion, we deliver the project on time and provide continuous support to ensure smooth operation and long-term success.',
    icon: RocketLaunchIcon,
  },
];

const differentiators = [
  { title: 'Multi-Domain Expertise', desc: 'Our team works across multiple technologies and industries, allowing us to deliver complete and integrated solutions under one roof.' },
  { title: 'Solution-Oriented Mindset', desc: 'We focus on solving real business challenges, not just completing tasks. Every decision is driven by outcomes and measurable results.' },
  { title: 'Agile & Adaptive Workflow', desc: 'Our team follows a flexible and agile approach, quickly adapting to changes and ensuring faster and more efficient delivery.' },
  { title: 'Continuous Learning Culture', desc: 'We stay updated with the latest tools, technologies, and industry trends to deliver modern and competitive solutions.' },
  { title: 'Strong Collaboration & Communication', desc: 'Our team maintains clear and transparent communication at every stage, ensuring smooth project execution and client confidence.' },
  { title: 'Innovation-Driven Execution', desc: 'We encourage creative thinking and innovative approaches to build unique and high-performing digital solutions.' },
  { title: 'Quality Assurance at Every Step', desc: 'Each project goes through structured testing and review processes to maintain performance, security, and reliability.' },
  { title: 'Ownership & Accountability', desc: 'Our team takes full responsibility for every project, ensuring commitment, consistency, and timely delivery.' },
  { title: 'Scalable & Future-Ready Thinking', desc: 'We build solutions that are not only effective today but also ready to grow with your business in the future.' },
  { title: 'Long-Term Support Approach', desc: 'Our work doesn’t end with delivery — we provide continuous support and improvements to ensure long-term success.' },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative">


      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-6 text-sm uppercase tracking-wider relative overflow-hidden group">
              <span className="relative z-10">Our Team</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mb-6 leading-tight">
              Driven by <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm">Expertise</span>.<br />
              United by <span className="text-white">Purpose</span>.
            </h1>
            
            <p className="mt-6 text-xl text-slate-300 max-w-2xl leading-relaxed">
              Our team consists of dedicated professionals who bring altogether creativity, technical knowledge, and practical experience to deliver effective digital solutions. We work collaboratively to ensure every project meets high standards of quality and performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative h-full min-h-[400px] hidden md:flex items-center justify-center"
          >
            {/* Glowing orb 1 */}
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen"
            />
            {/* Glowing orb 2 */}
            <motion.div
              animate={{ 
                y: [0, 40, 0],
                x: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl mix-blend-screen right-0"
            />
            
            {/* Core tech abstract graphic */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="relative z-10 w-80 h-80 border border-dashed border-cyan-500/30 rounded-full flex items-center justify-center"
            >
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-56 h-56 border border-blue-500/40 rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(37,99,235,0.1)]"
               >
                 {/* Orbiting dots */}
                 <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                 <div className="absolute -bottom-2 left-1/3 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />

                 <div className="w-28 h-28 bg-gradient-to-tr from-[#0a0f1c] to-[#1e293b] border border-blue-500/50 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.3)] flex items-center justify-center overflow-hidden relative">
                    <motion.div 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20"
                    />
                    <span className="text-white font-extrabold tracking-widest text-sm z-10 relative">TEAM</span>
                 </div>
               </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* WHO WE ARE SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 group"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Who <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">We Are</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We are a team of dedicated professionals driven by a passion for technology, innovation, and problem-solving. At Clicknovation Technologies, we specialize in understanding unique business requirements and transforming ideas into reliable, scalable, and result-oriented digital solutions.
            </p>
            <div className="mt-10 flex items-center gap-4 text-3xl font-mono text-gray-200">
              Innovation
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 1, ease: "linear", times: [0, 0.5, 1] }}
                className="inline-block w-[4px] h-[40px] bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
              />
            </div>
          </motion.div>
        </section>

        {/* OUR EXPERTISE */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Our <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">Expertise</span></h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Our team covers a wide range of skills to support complete digital growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/80 border border-slate-700/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-xl hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-400/60 transition-all">
                    <item.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{item.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR WORK APPROACH */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Sticky Header Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block px-4 py-1.5 bg-blue-900/40 border border-blue-500/30 text-cyan-400 font-semibold rounded-full shadow-lg mb-6 text-xs uppercase tracking-widest">
                    Process
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                    Our Work <br className="hidden lg:block"/><span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Approach</span>
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    We follow a structured and professional process to ensure every project is delivered successfully and meets client expectations.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Stacked Cards Column */}
            <div className="lg:w-2/3 space-y-6">
              {approachSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-6 sm:p-8 rounded-3xl hover:bg-slate-800/70 hover:border-blue-500/40 transition-all group relative overflow-hidden"
                >
                  {/* Big Background Number */}
                  <div className="absolute -right-4 -bottom-6 text-9xl font-extrabold text-white/[0.02] group-hover:text-blue-500/[0.05] transition-colors pointer-events-none select-none">
                    0{index + 1}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0a0f1c] border border-slate-700 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-900/20 transition-all shadow-lg">
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-blue-400 font-mono text-sm font-semibold tracking-wider">STEP 0{index + 1}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0f1c] to-[#050810]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">What Makes Our Team <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Different</span></h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((diff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/80 hover:border-blue-500/30 transition-all flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-extrabold text-white/5 mr-4 leading-none select-none absolute right-4 top-4">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <CheckCircleIcon className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-gray-100">{diff.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed flex-grow">
                    {diff.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}