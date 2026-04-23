'use client';

import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  GlobeAltIcon, 
  RocketLaunchIcon, 
  ArrowPathIcon,
  ShieldCheckIcon,
  BeakerIcon,
  MagnifyingGlassIcon,
  CpuChipIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CustomerStories() {
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
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

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
                Success Stories
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Real
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">
                  Experiences.
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Measurable Impact.</span>
                </span>
              </div>
              
              <div className="space-y-6 text-blue-100/80 text-lg leading-relaxed max-w-2xl">
                <p className="font-bold text-2xl text-blue-300">
                  Turning challenges into proven success stories.
                </p>
                <p>
                  Every project we deliver goes beyond a solution — it represents a measurable success built on trust, collaboration, and tangible results. Our customer stories highlight how we empower businesses to overcome challenges and achieve sustainable growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-square flex items-center justify-center overflow-hidden"
            >
              {/* Abstract Success Visualization */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative w-full max-w-[400px] aspect-square">
                {/* Achievement Ring 1 - Vertical Orbit */}
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-blue-500/10 rounded-full flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                   <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)]" />
                </motion.div>

                {/* Achievement Ring 2 - Horizontal Orbit */}
                <motion.div
                  animate={{ rotateX: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-cyan-400/20 rounded-full flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                   <div className="absolute left-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]" />
                </motion.div>

                {/* Central Multi-layered Core */}
                <div className="absolute inset-[20%] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                       animate={{ scale: [1, 1.1, 1] }}
                       transition={{ duration: 3, repeat: Infinity }}
                       className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mb-6 border border-blue-500/30"
                    >
                       <ChartBarIcon className="w-10 h-10 text-cyan-400" />
                    </motion.div>
                    <span className="text-sm font-black tracking-[0.3em] text-white uppercase">Deliver</span>
                    <div className="h-px w-12 bg-blue-500/50 my-3" />
                    <span className="text-sm font-black tracking-[0.3em] text-cyan-400 uppercase">Success</span>
                  </div>
                </div>

                {/* Success Nodes */}
                {[
                  { label: "GROWTH", icon: RocketLaunchIcon, pos: "-top-8 -right-8" },
                  { label: "TRUST", icon: ShieldCheckIcon, pos: "-bottom-8 -left-8" },
                  { label: "IMPACT", icon: SparklesIcon, pos: "top-1/2 -left-12 -translate-y-1/2" },
                  { label: "RESULT", icon: ArrowPathIcon, pos: "bottom-1/2 -right-12 translate-y-1/2" }
                ].map((node, i) => (
                  <motion.div
                    key={node.label}
                    animate={{
                      y: [0, (i % 2 === 0 ? -15 : 15), 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    className={`absolute p-5 bg-slate-900/90 border border-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center gap-3 shadow-2xl z-20 ${node.pos}`}
                  >
                     <node.icon className="w-6 h-6 text-blue-400" />
                     <span className="text-[10px] font-bold tracking-widest text-white/60">{node.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                Our Methodology
              </div>
              <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Strategic Thinking.</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Seamless Execution</span>
                </span>
              </div>
              <p className="text-lg text-blue-100/70 leading-relaxed max-w-xl">
                We follow a results-driven approach to ensure every client achieves meaningful and lasting outcomes through precise engineering and strategic foresight.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Understanding Needs", 
                desc: "Deep analysis of business challenges and unique requirements.",
                icon: MagnifyingGlassIcon 
              },
              { 
                title: "Tailored Strategy", 
                desc: "Development of customized solutions built for specific goals.",
                icon: BeakerIcon 
              },
              { 
                title: "Precise Execution", 
                desc: "High-quality delivery with rigorous attention to detail.",
                icon: RocketLaunchIcon 
              },
              { 
                title: "Optimization", 
                desc: "Continuous support and improvements for long-term success.",
                icon: ArrowPathIcon 
              }
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:border-blue-500/50 transition-all">
                  <step.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CUSTOMER ACHIEVEMENTS */}
        <section className="py-24 bg-slate-900/50 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                Core Outcomes
              </div>
              <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Delivering Outcomes</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">that Truly Matter</span>
                </span>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Business Growth",
                  subtitle: "Expanding opportunities. Driving success.",
                  desc: "Our solutions enable businesses to scale effectively, improve operational efficiency, and unlock new growth opportunities.",
                  icon: ChartBarIcon
                },
                {
                  title: "Digital Presence",
                  subtitle: "Building brands that stand out.",
                  desc: "We help clients establish a powerful and professional online presence that resonates with their target audience.",
                  icon: GlobeAltIcon
                },
                {
                  title: "Improved Performance",
                  subtitle: "Optimized systems. Measurable results.",
                  desc: "From enhanced speed to streamlined processes, we focus on delivering clear and impactful performance improvements.",
                  icon: RocketLaunchIcon
                },
                {
                  title: "Scalable Solutions",
                  subtitle: "Built for today. Ready for tomorrow.",
                  desc: "Our solutions are designed to ensure long-term reliability while providing the flexibility to scale as business needs evolve.",
                  icon: CpuChipIcon
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-10 rounded-[40px] hover:border-blue-500/30 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-cyan-400 font-medium mb-4 text-lg">{item.subtitle}</p>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900 via-[#0a0f1c] to-cyan-900 border border-white/10 rounded-[60px] p-16 lg:p-24 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl font-extrabold mb-8">
                Let’s Create Your <br/>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Success Story</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                Your vision. Our expertise. Partner with us to transform your ideas into impactful digital solutions and build your next milestone.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/30 group"
                >
                  Start Your Journey
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/work" 
                  className="inline-flex items-center justify-center px-10 py-5 border border-white/20 hover:bg-white/10 rounded-full font-bold text-lg transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}