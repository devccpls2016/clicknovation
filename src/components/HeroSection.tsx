'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --heading-color: #FFFFFF;
          --accent-color: #FF4500;
        }
      `}} />
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-blue-950 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.5),_transparent_35%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm text-white ring-1 ring-white/10 shadow-lg">
              <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              Ready to Work With You
            </div>

            <div className="flex flex-col leading-[1.1] sm:leading-[1.1] tracking-tight">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                Transform
              </span>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 sm:mt-2">
                <span className="text-white">your ideas into </span>
              </div>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">digital success</span>
              </div>
              <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1 sm:mt-2">
                with us!
              </span>
            </div>

            <p className="max-w-xl text-base text-blue-200 sm:text-lg leading-8">
              At Clicknovation Technologies, we build secure, scalable, and high-performance digital solutions that empower businesses to innovate, grow, and succeed in today&apos;s digital world.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 py-3 text-sm font-semibold text-white transition hover:border-blue-300 hover:bg-white/10 hover:text-white/90">
                Start Your Project
              </button>
              <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                View Services
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.15),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_25%)] p-8 shadow-[0_40px_120px_-40px_rgba(59,130,246,0.6)]">
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-[#0a2341] to-[#0c1833] opacity-80" />
              <div className="relative flex h-[420px] w-full items-center justify-center">
                <div className="relative h-80 w-80 rounded-full bg-gradient-to-r from-[#0f3460] via-[#12315b] to-[#1b4c7a] shadow-[inset_0_0_60px_rgba(59,130,246,0.45),0_35px_80px_-35px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.45),_transparent_35%)] blur-2xl" />
                  <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.35),_transparent_40%)] blur-3xl" />
                  <div className="absolute inset-0 m-6 rounded-full border border-white/10" />
                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#0d2b58] via-[#0b1f44] to-[#0c1833] shadow-[0_0_60px_rgba(59,130,246,0.25)]" />
                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20 opacity-40" />
                </div>
                <div className="absolute inset-0 -m-4 rounded-[2rem] bg-[conic-gradient(at_top,_rgba(56,189,248,0.18),_transparent_25%,_rgba(14,165,233,0.08))]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}