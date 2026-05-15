'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const services = [
  {
    name: 'Web & App Development',
    category: 'Build',
    description: 'Custom platforms, mobile apps, and modern product experiences built for scale.',
    accent: 'from-sky-500 to-blue-600',
    visual: (
      <div className="space-y-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live Build
          </div>
          <div className="mt-4 space-y-2 font-mono text-sm text-slate-200">
            <motion.div animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.2, repeat: Infinity }}>
              {'<section className="hero-layout">'}
            </motion.div>
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }} className="pl-5 text-sky-300">
              {'<ProductExperience />'}
            </motion.div>
            <motion.div animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}>
              {'</section>'}
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['UI Layer', 'API', 'Deploy'].map((item, index) => (
            <motion.div
              key={item}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
              className="rounded-xl border border-sky-400/15 bg-white/6 px-3 py-4 text-center text-xs font-semibold text-slate-100"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: 'Business Consultancy',
    category: 'Strategy',
    description: 'Operational planning, process clarity, and practical roadmaps for business growth.',
    accent: 'from-cyan-500 to-sky-600',
    visual: (
      <div className="space-y-3">
        {['Discovery', 'Strategy', 'Execution'].map((item, index) => (
          <motion.div
            key={item}
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.3 }}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-4"
          >
            <div>
              <p className="text-sm font-semibold text-white">{item}</p>
              <p className="mt-1 text-xs text-blue-100/68">Structured decision-making for measurable progress.</p>
            </div>
            <div className="h-2.5 w-24 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                animate={{ width: ['20%', '100%', '45%'] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.35 }}
                className="h-full rounded-full bg-[linear-gradient(90deg,#22d3ee,#2563eb)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    name: 'Network and Infrastructure',
    category: 'Infrastructure',
    description: 'Stable architectures, secure connectivity, and reliable performance across systems.',
    accent: 'from-blue-500 to-indigo-600',
    visual: (
      <div className="relative grid h-full place-items-center">
        <div className="relative h-64 w-64">
          {[
            'Core',
            'Firewall',
            'Cloud',
            'Sites',
          ].map((node, index) => {
            const positions = [
              'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              'left-1/2 top-0 -translate-x-1/2',
              'right-0 top-1/2 -translate-y-1/2',
              'left-0 top-1/2 -translate-y-1/2',
            ];
            return (
              <motion.div
                key={node}
                animate={{ scale: index === 0 ? [1, 1.05, 1] : [1, 1.08, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.2 }}
                className={`absolute ${positions[index]} rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-white shadow-lg`}
              >
                {node}
              </motion.div>
            );
          })}
          <div className="absolute left-1/2 top-1/2 h-px w-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-400/80 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-40 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-sky-400/80 to-transparent" />
        </div>
      </div>
    ),
  },
  {
    name: 'Digital Marketing',
    category: 'Growth',
    description: 'Campaign systems, audience reach, and performance-led growth execution.',
    accent: 'from-violet-500 to-blue-600',
    visual: (
      <div className="space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
          <div className="flex items-center justify-between text-sm text-white">
            <span>Campaign Reach</span>
            <span className="text-cyan-300">+38%</span>
          </div>
          <div className="mt-4 flex h-32 items-end gap-3">
            {[42, 70, 55, 88, 64, 96].map((height, index) => (
              <motion.div
                key={height}
                animate={{ height: [`${Math.max(height - 18, 22)}%`, `${height}%`, `${Math.max(height - 10, 30)}%`] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.12 }}
                className="flex-1 rounded-t-xl bg-[linear-gradient(180deg,#22d3ee,#2563eb)]"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Cloud Services',
    category: 'Cloud',
    description: 'Elastic environments, secure hosting, and dependable cloud operations.',
    accent: 'from-cyan-400 to-blue-500',
    visual: (
      <div className="space-y-4">
        <div className="rounded-2xl border border-white/10 bg-slate-950/75 p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Cloud Availability</span>
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-300">Auto Scale</span>
          </div>
          <div className="mt-5 space-y-3">
            {[76, 58, 91].map((value, index) => (
              <div key={value}>
                <div className="mb-1 flex justify-between text-xs text-blue-100/68">
                  <span>Node {index + 1}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800">
                  <motion.div
                    animate={{ width: [`${Math.max(value - 18, 24)}%`, `${value}%`, `${Math.max(value - 8, 34)}%`] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.25 }}
                    className="h-full rounded-full bg-[linear-gradient(90deg,#38bdf8,#2563eb)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'CCTV & Security',
    category: 'Security',
    description: 'Monitoring, access visibility, and integrated safety systems for operations.',
    accent: 'from-sky-500 to-cyan-500',
    visual: (
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Security Feed</span>
            <span className="rounded-full bg-emerald-500/18 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Live
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((feed, index) => (
              <motion.div
                key={feed}
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.18 }}
                className="relative h-24 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(14,165,233,0.14),rgba(37,99,235,0.16))]"
              >
                <div className="absolute left-3 top-3 text-[10px] uppercase tracking-[0.2em] text-cyan-200/70">
                  Cam {feed}
                </div>
                <motion.div
                  animate={{ x: ['-10%', '110%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.25, ease: 'linear' }}
                  className="absolute top-0 h-full w-10 bg-white/10 blur-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function HeroSection() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveService((current) => (current + 1) % services.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const currentService = services[activeService];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --heading-color: #FFFFFF;
          --accent-color: #FF4500;
        }
      `,
        }}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-blue-950 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.5),_transparent_35%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
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

              <div className="flex flex-col leading-[1.1] tracking-tight sm:leading-[1.1]">
                <span className="text-5xl font-sans font-extrabold text-white sm:text-6xl lg:text-7xl">
                  Transform
                </span>
                <div className="mt-1 text-5xl font-sans font-extrabold sm:mt-2 sm:text-6xl lg:text-7xl">
                  <span className="text-white">your ideas into </span>
                </div>
                <div className="mt-1 text-5xl font-sans font-extrabold sm:mt-2 sm:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text pb-2 text-transparent drop-shadow-sm">
                    digital success
                  </span>
                </div>
                <span className="mt-1 text-5xl font-sans font-extrabold text-white sm:mt-2 sm:text-6xl lg:text-7xl">
                  with us!
                </span>
              </div>

              <p className="max-w-xl text-base leading-8 text-blue-200 sm:text-lg">
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
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.15),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_25%)] p-4 shadow-[0_40px_120px_-40px_rgba(59,130,246,0.6)] sm:p-6">
                <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-[#0a2341] to-[#0c1833] opacity-90" />
                <div className="relative min-h-[520px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService.name}
                      initial={{ opacity: 0, y: 26, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -26, scale: 0.97 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-5 shadow-[0_34px_80px_-40px_rgba(2,6,23,0.95)]"
                    >
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div>
                          <div className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ${currentService.accent}`}>
                            {currentService.category}
                          </div>
                          <h4 className="mt-4 text-2xl font-semibold text-white">
                            {currentService.name}
                          </h4>
                          <p className="mt-3 max-w-md text-sm leading-7 text-blue-100/72">
                            {currentService.description}
                          </p>
                        </div>
                        <div className="hidden rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80 sm:block">
                          Live
                        </div>
                      </div>

                      <div className="min-h-[275px]">
                        {currentService.visual}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
                    {services.map((service, index) => (
                      <button
                        key={service.name}
                        type="button"
                        onClick={() => setActiveService(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeService ? 'w-10 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Show ${service.name}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
