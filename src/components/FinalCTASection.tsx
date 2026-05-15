'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RocketLaunchIcon, CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function FinalCTASection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 sm:p-16 text-center shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden group"
        >
          {/* Animated Internal Glow */}
          <div className="absolute -top-[150px] -left-[150px] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-colors duration-700" />
          <div className="absolute -bottom-[150px] -right-[150px] w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[80px] group-hover:bg-cyan-400/30 transition-colors duration-700" />

          <div className="relative z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-10 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Let&apos;s Scale Together
            </div>

            <h2 className="text-4xl sm:text-6xl font-sans font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              Let&apos;s Build the <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                Digital Future
              </span> Together.
            </h2>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
              Your business deserves technology that works smarter, scales faster, 
              and delivers measurable results. Bring your vision to life today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary CTA */}
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_rgba(34,211,238,0.4)] transition-all flex items-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <RocketLaunchIcon className="w-6 h-6 stroke-[2]" />
                  Contact Us Now
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              {/* Secondary CTA */}
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-5 rounded-full bg-white/[0.05] border border-white/10 text-white font-bold text-lg hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center gap-3"
                >
                  <CalendarDaysIcon className="w-6 h-6 text-cyan-400" />
                  Free Consultation
                </motion.button>
              </Link>
            </div>

            {/* Trust Hint */}
            <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 text-slate-500 font-bold text-sm tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> No Obligation
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Expert Consultation
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> 24-Hour Response
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}