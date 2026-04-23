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
  BoltIcon
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
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-8 text-sm uppercase tracking-wider relative overflow-hidden group">
              <span className="relative z-10">Our Environment</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"
              />
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-8 leading-tight">
              Where Ideas <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Grow</span>.<br />
              People <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Thrive</span>.
            </h1>
            
            <p className="text-2xl text-blue-200 mb-6 font-medium">
              Empowering minds. Building the future together.
            </p>
            
            <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
              Life at Clicknovation is built on innovation, collaboration, and continuous growth. We create an environment where individuals feel empowered to share ideas, take ownership, and grow both professionally and personally.
            </p>
          </motion.div>
        </section>

        {/* WORK CULTURE */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Work Culture</h2>
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Together we create. <br/>
                <span className="text-cyan-400">Together we succeed.</span>
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                We believe that a positive work culture drives great results. Our team works in a supportive and open environment where every voice matters and every contribution is valued. 
                <br/><br/>
                <span className="font-semibold text-white italic">We don’t just work together — we grow together.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-sm hover:bg-slate-800/60 transition-colors group">
                <UserGroupIcon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">Supportive</h4>
                <p className="text-slate-400 text-sm">Open environment where everyone belongs.</p>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-sm hover:bg-slate-800/60 transition-colors group mt-8">
                <SparklesIcon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">Valued</h4>
                <p className="text-slate-400 text-sm">Every contribution makes a real difference.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LEARNING & GROWTH */}
        <section className="py-24 bg-slate-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Learning & Growth</h2>
                <h3 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                  Learn today. <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Lead tomorrow.</span>
                </h3>
                <p className="max-w-3xl mx-auto text-lg text-slate-300">
                  At Clicknovation, learning never stops. We encourage our team to explore new technologies, improve their skills, and stay ahead in the fast-changing digital world.
                </p>
              </motion.div>
            </div>

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
                <h2 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Innovation in Action</h2>
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Think bold. <br/>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Build smarter.</span>
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  We promote creative thinking and new ideas. Our team is always encouraged to experiment, innovate, and find better ways to solve problems.
                  <br/><br/>
                  <span className="text-white font-medium p-4 bg-white/5 border border-white/10 rounded-xl inline-block">
                    "Innovation is not a task — it’s part of our daily work."
                  </span>
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Well-being</h2>
              <h3 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Work smart. <span className="text-blue-500">Live better.</span>
              </h3>
              <p className="max-w-2xl mx-auto text-lg text-slate-300">
                We understand the importance of balance. Our work environment is designed to maintain productivity while ensuring personal well-being.
              </p>
            </motion.div>
          </div>

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