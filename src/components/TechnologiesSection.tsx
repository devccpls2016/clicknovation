'use client';

import { motion } from 'framer-motion';
import { WindowIcon, ServerStackIcon, CloudIcon, CircleStackIcon, CpuChipIcon, RocketLaunchIcon, CheckBadgeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const techStacks = [
  {
    title: 'Frontend Technologies',
    description: 'We create responsive and user-friendly interfaces using modern frameworks and standards.',
    icon: WindowIcon,
    technologies: ['React', 'Angular', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend Technologies',
    description: 'Our backend systems are designed for speed, security, and scalability to handle real-world operations.',
    icon: ServerStackIcon,
    technologies: ['Node.js', 'Python', 'PHP'],
  },
  {
    title: 'Cloud Platforms',
    description: 'We leverage trusted cloud platforms to ensure flexibility, performance, and seamless scalability.',
    icon: CloudIcon,
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud'],
  },
  {
    title: 'Databases',
    description: 'We use reliable and efficient databases to manage and secure your data with high performance.',
    icon: CircleStackIcon,
    technologies: ['MySQL', 'MongoDB'],
  },
];

export default function TechnologiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1c] text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_left,_rgba(59,130,246,0.1),_transparent_50%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Header Block matching advanced typograhpy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-8 text-sm uppercase tracking-wider backdrop-blur-md">
            Technology Stack
          </div>
          
          <div className="flex flex-col leading-[1.1] sm:leading-[1.1] tracking-tight justify-center items-center text-center mb-8">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">
              Modern Tools.
            </span>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1 sm:mt-2">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] pb-2 inline-block">
                Scalable Solutions.
              </span>
            </div>
          </div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We use a powerful and reliable technology stack to build high-performance, secure, and easily scalable structures for your business.
          </p>
        </motion.div>

        {/* Unique "Glass Data-Node" Technology Cards Grids */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-white/[0.02] border border-white/[0.08] p-8 sm:p-10 rounded-[2rem] backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] flex flex-col overflow-hidden"
            >
              {/* Neon Top-Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Massive soft glowing background aura */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/15 transition-colors duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-5 mb-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-200 transition-all duration-500 shadow-[inset_0_0_15px_rgba(59,130,246,0.1)]">
                    <stack.icon className="w-8 h-8 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight transition-colors group-hover:text-cyan-300">
                    {stack.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-base font-medium mb-8">
                  {stack.description}
                </p>

                {/* Floating Tags for Technologies */}
                <div className="mt-auto pt-6 border-t border-white/[0.05] flex flex-wrap gap-3">
                  {stack.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-slate-300 text-sm font-semibold tracking-wide hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy in Technology Stack — Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-28 relative rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Corner ambient glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 p-10 sm:p-14 lg:p-16">

            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-950/70 border border-white/10 text-slate-100 text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] mb-6 shadow-[0_12px_30px_rgba(2,6,23,0.35)]">
                <span className="w-6 h-px rounded-full bg-cyan-400/90" />
                Our Philosophy
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-[3.35rem] font-semibold sm:font-bold text-white tracking-tight leading-[1.08] mb-5">
                <span className="block">Technology Stack</span>
                <span className="block mt-2 text-cyan-100">
                  Built with Intention
                </span>
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                We don&apos;t follow hype — we carefully evaluate and select technologies that align with your operational goals, ensuring every layer of the stack serves a purpose.
              </p>
            </div>

            {/* Pillar Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-10">

              {/* Card 1 — Future-First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 flex flex-col overflow-hidden hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.1)] transition-all duration-500"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-200 transition-all duration-500 shadow-[inset_0_0_12px_rgba(34,211,238,0.08)]">
                  <CpuChipIcon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">Future-First Thinking</h4>
                <p className="text-slate-400 leading-relaxed text-sm flex-1">
                  We architect systems designed to evolve — leveraging modern frameworks and cloud-native patterns that scale gracefully as your business grows.
                </p>
                <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                  <span className="w-4 h-[1.5px] bg-cyan-400 rounded" />
                  Scalability &amp; Longevity
                </div>
              </motion.div>

              {/* Card 2 — Performance-Driven (Elevated) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-b from-blue-900/20 to-white/[0.02] border border-blue-500/20 rounded-3xl p-8 flex flex-col overflow-hidden hover:border-blue-400/40 hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(59,130,246,0.2)] transition-all duration-500 md:-translate-y-4"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-500 shadow-[inset_0_0_12px_rgba(59,130,246,0.15)] relative z-10">
                  <RocketLaunchIcon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors relative z-10">Performance-Driven</h4>
                <p className="text-slate-400 leading-relaxed text-sm flex-1 relative z-10">
                  Speed and responsiveness are never compromises. Every technology choice is measured against real-world performance benchmarks and your end-users&apos; experience.
                </p>
                <div className="mt-6 pt-5 border-t border-blue-500/10 flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider group-hover:text-blue-300 transition-colors relative z-10">
                  <span className="w-4 h-[1.5px] bg-blue-400 rounded" />
                  Speed &amp; Efficiency
                </div>
              </motion.div>

              {/* Card 3 — Security-by-Default */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 flex flex-col overflow-hidden hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.1)] transition-all duration-500"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-200 transition-all duration-500 shadow-[inset_0_0_12px_rgba(34,211,238,0.08)]">
                  <ShieldCheckIcon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">Security-by-Default</h4>
                <p className="text-slate-400 leading-relaxed text-sm flex-1">
                  Security is not an afterthought. From data encryption to access control, our stack enforces enterprise-grade security standards at every layer.
                </p>
                <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                  <span className="w-4 h-[1.5px] bg-cyan-400 rounded" />
                  Trust &amp; Reliability
                </div>
              </motion.div>

            </div>

            {/* Bottom Value Bar */}
            <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-500/5 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-4">
                <CheckBadgeIcon className="w-8 h-8 text-cyan-400 shrink-0" />
                <p className="text-slate-300 text-base font-semibold leading-snug">
                  Every technology decision is a deliberate business decision — not just a technical one.
                </p>
              </div>
              <div className="relative z-10 shrink-0 flex gap-6 text-center">
                <div>
                  <p className="text-2xl font-extrabold text-white">100%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Vetted Stack</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="text-2xl font-extrabold text-white">10+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="text-2xl font-extrabold text-white">24/7</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">System Uptime</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
