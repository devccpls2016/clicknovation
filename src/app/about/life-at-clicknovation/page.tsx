'use client';

import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  AcademicCapIcon, 
  LightBulbIcon, 
  SparklesIcon, 
  UserGroupIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CircleStackIcon,
  CpuChipIcon,
  BoltIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LifeAtClicknovation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

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
                Our Environment
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Where Ideas
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">
                  Grow. People
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Thrive.</span>
                </span>
              </div>
              
              <div className="space-y-6 text-blue-100/80 text-lg leading-relaxed max-w-2xl">
                 <p className="font-bold text-2xl text-blue-300">Empowering minds. Building the future together.</p>
                 <p>
                  Life at Clicknovation is built on innovation, collaboration, and continuous growth. We create an environment where individuals feel empowered to share ideas, take ownership, and grow both professionally and personally.
                 </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-square flex items-center justify-center overflow-hidden"
            >
              {/* Abstract Animated Structure */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative w-full max-w-[400px] aspect-square">
                {/* Floating Ring 1 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full flex items-center justify-center"
                >
                   <div className="absolute top-0 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                </motion.div>

                {/* Floating Ring 2 */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-cyan-400/20 rounded-full flex items-center justify-center"
                >
                   <div className="absolute bottom-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                </motion.div>

                {/* Central Core */}
                <div className="absolute inset-[25%] bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl flex items-center justify-center p-8">
                  <div className="relative w-full h-full">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-xl blur-lg"
                    />
                    <div className="relative flex flex-col items-center justify-center h-full text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                        <SparklesIcon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">Culture</span>
                      <div className="h-px w-8 bg-slate-700 my-2" />
                      <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">Innovation</span>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    className={`absolute w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg
                      ${i === 0 ? '-top-4 -left-4 font-bold text-blue-400 text-xs' : ''}
                      ${i === 1 ? '-bottom-4 -right-4 font-bold text-cyan-400 text-xs' : ''}
                      ${i === 2 ? 'top-1/2 -right-8 -translate-y-1/2 font-bold text-white/40 text-xs' : ''}
                      ${i === 3 ? 'bottom-1/2 -left-8 translate-y-1/2 font-bold text-white/40 text-xs' : ''}
                    `}
                  >
                     {i === 0 && "IDEA"}
                     {i === 1 && "GROW"}
                     {i === 2 && "TECH"}
                     {i === 3 && "TEAM"}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* WORK CULTURE */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Work Culture
            </div>
            <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Together we create.</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Together we succeed.</span>
              </span>
            </div>
            <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
              We believe that a positive work culture drives great results. Our team works in a supportive and open environment where every voice matters and every contribution is valued. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Supportive & Open",
                desc: "A collaborative ecosystem where every voice matters and cross-team support is part of our DNA.",
                icon: UserGroupIcon,
                color: "blue"
              },
              {
                title: "Value Driven",
                desc: "We recognize and celebrate every contribution, ensuring that individual achievements fuel collective success.",
                icon: SparklesIcon,
                color: "cyan"
              },
              {
                title: "Dynamic Evolution",
                desc: "\"We don't just work together — we grow together.\" We adapt and evolve as a single, unified team.",
                icon: ArrowPathIcon,
                color: "indigo"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[3rem] bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:bg-slate-800/40 hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Glow Effect */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${item.color}-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-${item.color}-600 group-hover:border-${item.color}-400 transition-all duration-500 shadow-xl`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-400 group-hover:text-white transition-colors`} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">{item.title}</h4>
                  <p className="text-blue-100/60 leading-relaxed">{item.desc}</p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors">
                   <item.icon className="w-12 h-12" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LEARNING & GROWTH */}
        <section className="py-24 bg-slate-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                Learning & Growth
              </div>
              <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Learn today.</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Lead tomorrow.</span>
                </span>
              </div>
              <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
                At Clicknovation, learning never stops. We encourage our team to explore new technologies, improve their skills, and stay ahead in the fast-changing digital world.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Skill Development", 
                  desc: "Continuous training and workshops to keep your edge sharp.",
                  icon: AcademicCapIcon 
                },
                { 
                  title: "Real-world Impact", 
                  desc: "Direct exposure to complex, high-stakes digital projects.",
                  icon: GlobeAltIcon 
                },
                { 
                  title: "Modern Stack", 
                  desc: "Freedom to experiment with and master the latest tools.",
                  icon: CircleStackIcon 
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 border border-slate-700/50 p-8 rounded-3xl hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <benefit.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{benefit.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INNOVATION IN ACTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-950/40 to-cyan-950/40 border border-white/5 rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 blur-3xl rounded-full" />
            <div className="relative z-10 lg:flex items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                  Innovation in Action
                </div>
                <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Think bold.</span>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Build smarter.</span>
                  </span>
                </div>
                <p className="text-lg text-blue-100/70 leading-relaxed mb-8">
                  We promote creative thinking and new ideas. Our team is always encouraged to experiment, innovate, and find better ways to solve problems.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-4 mt-12 lg:mt-0">
                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
                   <CpuChipIcon className="w-12 h-12 text-blue-400" />
                   <span className="text-xl font-semibold">Future-Ready Tech</span>
                </div>
                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                   <LightBulbIcon className="w-12 h-12 text-cyan-400" />
                   <span className="text-xl font-semibold">Creative Autonomy</span>
                </div>
                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
                   <BoltIcon className="w-12 h-12 text-blue-400" />
                   <span className="text-xl font-semibold">Rapid Iteration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK-LIFE BALANCE */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Well-being
            </div>
            <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Work smart.</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Live better.</span>
              </span>
            </div>
            <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
              We understand the importance of balance. Our work environment is designed to maintain productivity while ensuring personal well-being.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
             <div className="p-8 bg-slate-800/30 rounded-3xl border border-slate-700/50 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-6">
                   <SparklesIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Flexible Schedule</h4>
                <p className="text-slate-400">Supportive environment that adapts to your life needs.</p>
             </div>
             <div className="p-8 bg-slate-800/30 rounded-3xl border border-slate-700/50 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mb-6">
                   <HeartIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Mental Well-being</h4>
                <p className="text-slate-400">Resources and culture focused on keeping you at your best.</p>
             </div>
             <div className="p-8 bg-slate-800/30 rounded-3xl border border-slate-700/50 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-6">
                   <UserGroupIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Healthy Practices</h4>
                <p className="text-slate-400">Sustainable workflow designs to prevent burnout.</p>
             </div>
          </div>
        </section>

        {/* JOIN THE JOURNEY */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-blue-600 to-cyan-500 rounded-[50px] p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-8">
                Grow with us. <br/>
                <span className="text-white/80">Make an impact.</span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-medium">
                Be a part of a team that is passionate, innovative, and driven to create something impactful. Your ideas matter, and your growth is our priority.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/careers" 
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition-all"
                >
                  Join Our Journey
                  <ArrowRightIcon className="w-5 h-5 font-bold" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}