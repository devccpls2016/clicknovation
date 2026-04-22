'use client';

import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  MapIcon,
  PaintBrushIcon,
  BeakerIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    number: '01',
    phase: 'Phase 1',
    title: 'Discovery',
    subtitle: 'Understanding Your World',
    description:
      'We deeply analyse your business, goals, and existing systems before writing a single line of code. This phase is where great projects begin.',
    icon: MagnifyingGlassIcon,
    tags: ['Requirements', 'Stakeholder Interviews', 'System Audit'],
    nodeGradient: 'from-sky-500 to-cyan-400',
    glowColor: 'rgba(34,211,238,0.35)',
    glowSoft: 'rgba(34,211,238,0.08)',
    lineGradient: 'from-sky-500 to-violet-500',
    accent: '#22d3ee',
    cardBorder: 'border-cyan-500/20',
    cardBg: 'bg-cyan-500/5',
    badgeBg: 'bg-cyan-500/10',
    badgeText: 'text-cyan-300',
    tagHover: 'hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-200',
  },
  {
    number: '02',
    phase: 'Phase 2',
    title: 'Strategy',
    subtitle: 'Blueprint for Success',
    description:
      'We engineer a crystal-clear roadmap — the right stack, realistic timelines, resource allocation, and phased milestones aligned to your priorities.',
    icon: MapIcon,
    tags: ['Tech Selection', 'Sprint Planning', 'Risk Mapping'],
    nodeGradient: 'from-violet-500 to-blue-500',
    glowColor: 'rgba(139,92,246,0.35)',
    glowSoft: 'rgba(139,92,246,0.08)',
    lineGradient: 'from-violet-500 to-blue-500',
    accent: '#8b5cf6',
    cardBorder: 'border-violet-500/20',
    cardBg: 'bg-violet-500/5',
    badgeBg: 'bg-violet-500/10',
    badgeText: 'text-violet-300',
    tagHover: 'hover:bg-violet-500/10 hover:border-violet-500/30 hover:text-violet-200',
  },
  {
    number: '03',
    phase: 'Phase 3',
    title: 'Build',
    subtitle: 'Design & Development',
    description:
      'Pixel-perfect interfaces meet robust, scalable engineering. Every component is crafted with user experience and business outcomes at its core.',
    icon: PaintBrushIcon,
    tags: ['UI/UX Design', 'Agile Development', 'Code Reviews'],
    nodeGradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59,130,246,0.35)',
    glowSoft: 'rgba(59,130,246,0.08)',
    lineGradient: 'from-blue-500 to-teal-400',
    accent: '#3b82f6',
    cardBorder: 'border-blue-500/20',
    cardBg: 'bg-blue-500/5',
    badgeBg: 'bg-blue-500/10',
    badgeText: 'text-blue-300',
    tagHover: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-200',
  },
  {
    number: '04',
    phase: 'Phase 4',
    title: 'Launch',
    subtitle: 'Test & Deploy',
    description:
      'Multi-layer QA — functional, performance, and security testing — ensures production-grade quality. Zero-downtime deployments with full monitoring.',
    icon: BeakerIcon,
    tags: ['QA Testing', 'Security Audit', 'Zero-Downtime Deploy'],
    nodeGradient: 'from-teal-400 to-cyan-400',
    glowColor: 'rgba(20,184,166,0.35)',
    glowSoft: 'rgba(20,184,166,0.08)',
    lineGradient: 'from-teal-400 to-indigo-500',
    accent: '#14b8a6',
    cardBorder: 'border-teal-500/20',
    cardBg: 'bg-teal-500/5',
    badgeBg: 'bg-teal-500/10',
    badgeText: 'text-teal-300',
    tagHover: 'hover:bg-teal-500/10 hover:border-teal-500/30 hover:text-teal-200',
  },
  {
    number: '05',
    phase: 'Phase 5',
    title: 'Growth',
    subtitle: 'Support & Evolution',
    description:
      'Our partnership continues post-launch. Proactive monitoring, iterative upgrades, and strategic improvements ensure your systems evolve as fast as your business.',
    icon: ArrowPathIcon,
    tags: ['24/7 Monitoring', 'Optimization', 'Strategic Upgrades'],
    nodeGradient: 'from-indigo-500 to-blue-600',
    glowColor: 'rgba(99,102,241,0.35)',
    glowSoft: 'rgba(99,102,241,0.08)',
    lineGradient: 'from-indigo-500 to-cyan-500',
    accent: '#6366f1',
    cardBorder: 'border-indigo-500/20',
    cardBg: 'bg-indigo-500/5',
    badgeBg: 'bg-indigo-500/10',
    badgeText: 'text-indigo-300',
    tagHover: 'hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-200',
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1c] text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.08),_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(34,211,238,0.06),_transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">

        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-8 text-sm uppercase tracking-wider">
            Our Process
          </div>
          <div className="flex flex-col leading-[1.1] tracking-tight items-center mb-8">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              How We Work
            </span>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] pb-2 inline-block">
                Transparent &amp; Result-Driven.
              </span>
            </div>
          </div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A structured five-phase roadmap that brings clarity, precision, and full accountability to every engagement — from first conversation to long-term success.
          </p>
        </motion.div>

        {/* ── Horizontal Roadmap Rail (Desktop) ──────────────────── */}
        <div className="hidden lg:block mb-20">
          {/* Rail wrapper */}
          <div className="relative flex items-start justify-between gap-0">

            {/* Full-width connector track */}
            <div className="absolute top-[2.625rem] left-[calc(10%)] right-[calc(10%)] h-px bg-white/[0.06] z-0" />

            {/* Animated gradient progress fill */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.3 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              className="absolute top-[2.625rem] left-[calc(10%)] right-[calc(10%)] h-px bg-gradient-to-r from-sky-500 via-violet-500 via-blue-500 via-teal-400 to-indigo-500 z-0"
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center flex-1"
              >
                {/* Node */}
                <div className="relative z-10 mb-8">
                  {/* Outer pulse ring */}
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-60 animate-pulse"
                    style={{ backgroundColor: step.glowColor, margin: '-6px' }}
                  />
                  {/* Node circle */}
                  <div
                    className={`relative w-[5.25rem] h-[5.25rem] rounded-full bg-gradient-to-br ${step.nodeGradient} flex flex-col items-center justify-center shadow-[0_0_28px_var(--glow)] border border-white/20 cursor-default group`}
                    style={{ '--glow': step.glowColor } as React.CSSProperties}
                  >
                    <step.icon className="w-6 h-6 text-white/90 stroke-[1.5] mb-0.5" />
                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{step.number}</span>
                  </div>
                </div>

                {/* Phase label */}
                <span className={`text-[10px] font-bold uppercase tracking-[0.18em] mb-2 ${step.badgeText}`}>
                  {step.phase}
                </span>

                {/* Title */}
                <h3 className="text-base font-extrabold text-white text-center leading-tight mb-1">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-500 text-center font-medium">
                  {step.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Detail Cards Grid (All Screens) ────────────────────── */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[1.75rem] border ${step.cardBorder} ${step.cardBg} backdrop-blur-sm p-7 sm:p-8 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_24px_60px_var(--glow)] transition-all duration-500 ${index === 4 ? 'md:col-span-2 xl:col-span-1' : ''}`}
              style={{ '--glow': step.glowSoft } as React.CSSProperties}
            >
              {/* Top neon hairline */}
              <div
                className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${step.accent}, transparent)` }}
              />

              {/* Corner ambient blur */}
              <div
                className="absolute -top-8 -right-8 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                style={{ backgroundColor: step.glowColor }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Icon badge */}
                    <div
                      className={`shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl ${step.badgeBg} border ${step.cardBorder} ${step.badgeText} group-hover:scale-110 transition-all duration-500`}
                    >
                      <step.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                      <span className={`block text-[10px] font-bold uppercase tracking-[0.18em] ${step.badgeText} mb-0.5`}>
                        {step.phase}
                      </span>
                      <h3 className="text-xl font-extrabold text-white leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  {/* Large step number */}
                  <span
                    className="text-5xl font-black leading-none opacity-[0.07] group-hover:opacity-[0.13] transition-opacity duration-500 select-none"
                    style={{ color: step.accent }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Subtitle */}
                <p className={`text-xs font-semibold uppercase tracking-wider ${step.badgeText} mb-3`}>
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm flex-1 mb-6">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.05]">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full text-slate-500 text-xs font-semibold tracking-wide transition-all duration-300 ${step.tagHover}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA Strip ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 relative rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-500/5 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xl font-extrabold text-white mb-1">Ready to start your project?</p>
            <p className="text-slate-400 text-sm leading-snug max-w-md">
              Let&apos;s walk through your requirements and map out the right path forward together.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}