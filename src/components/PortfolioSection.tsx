'use client';

import { motion } from 'framer-motion';
import {
  BuildingOffice2Icon,
  ShoppingBagIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  HeartIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';

const categoryMeta: Record<string, { color: string; bg: string; border: string; text: string; dot: string }> = {
  BUSINESS: {
    color: 'from-blue-600 to-cyan-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    dot: 'bg-blue-400',
  },
  GOVERNMENT: {
    color: 'from-violet-600 to-blue-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
    dot: 'bg-violet-400',
  },
  EDUCATION: {
    color: 'from-teal-500 to-cyan-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    text: 'text-teal-400',
    dot: 'bg-teal-400',
  },
  HEALTHCARE: {
    color: 'from-rose-500 to-pink-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    text: 'text-rose-400',
    dot: 'bg-rose-400',
  },
};

const projects = [
  {
    title: 'Corporate Business Portal',
    description:
      'Full-featured business portal with admin dashboard, real-time analytics, and an integrated client management system built for enterprise scale.',
    services: ['Custom Website', 'CRM Integration', 'Analytics Dashboard'],
    category: 'BUSINESS',
    icon: BuildingOffice2Icon,
    featured: true,
    deliverable: 'Web App + CRM',
  },
  {
    title: 'E-commerce Marketplace',
    description:
      'Multi-vendor marketplace with inventory management, live order tracking, and secure payment gateway integration.',
    services: ['E-commerce Platform', 'Payment Gateway', 'Vendor Portal'],
    category: 'BUSINESS',
    icon: ShoppingBagIcon,
    featured: false,
    deliverable: 'Marketplace Platform',
  },
  {
    title: 'Grampanchayat Digital Platform',
    description:
      'Digital platform for village administration — notice board, government scheme info, citizen tax services, and document management.',
    services: ['Government Website', 'Citizen Services', 'Document Portal'],
    category: 'GOVERNMENT',
    icon: BuildingLibraryIcon,
    featured: false,
    deliverable: 'Gov. Web Portal',
  },
  {
    title: 'School Management Portal',
    description:
      'Comprehensive school website with online admissions, results publication, attendance tracking, and parent communication tools.',
    services: ['School Website', 'Student Management', 'Parent Portal'],
    category: 'EDUCATION',
    icon: AcademicCapIcon,
    featured: false,
    deliverable: 'EdTech Portal',
  },
  {
    title: 'Hospital Appointment System',
    description:
      'Patient-facing web system with doctor profiles, online appointment booking, emergency contacts, and real-time availability.',
    services: ['Doctor Website', 'Booking System', 'Patient Portal'],
    category: 'HEALTHCARE',
    icon: HeartIcon,
    featured: false,
    deliverable: 'Healthcare Platform',
  },
];

const industries = ['All', 'BUSINESS', 'GOVERNMENT', 'EDUCATION', 'HEALTHCARE'];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5', label: 'Industries Served' },
  { value: '100%', label: 'On-Time Delivery' },
];

export default function PortfolioSection() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="relative overflow-hidden bg-[#0a0f1c] text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
      {/* Background atmosphere */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.08),_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(34,211,238,0.05),_transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">

        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-8 text-sm uppercase tracking-wider">
            Projects Portfolio
          </div>
          <div className="flex flex-col leading-[1.1] tracking-tight items-center mb-8">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Our Work Speaks
            </span>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] pb-2 inline-block">
                for Itself.
              </span>
            </div>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A curated showcase of successfully delivered projects across business, government, education, and healthcare.
          </p>
        </motion.div>

        {/* ── Stats Row ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06] mb-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex-1 min-w-[120px] flex flex-col items-center justify-center py-7 px-6 bg-[#0a0f1c]">
              <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Bento Grid ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-6 mb-6">

          {/* Featured card — spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3 group relative rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-10 sm:p-12 overflow-hidden flex flex-col justify-between hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_24px_60px_rgba(34,211,238,0.12)] transition-all duration-500"
          >
            {/* Neon top bar */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Ambient glow */}
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/15 transition-colors duration-700" />

            <div className="relative z-10">
              {/* Category badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${categoryMeta[featured.category].bg} border ${categoryMeta[featured.category].border} mb-8`}>
                <span className={`w-1.5 h-1.5 rounded-full ${categoryMeta[featured.category].dot}`} />
                <span className={`text-[11px] font-bold uppercase tracking-widest ${categoryMeta[featured.category].text}`}>
                  {featured.category}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 ml-1">· Featured</span>
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${categoryMeta[featured.category].bg} border ${categoryMeta[featured.category].border} ${categoryMeta[featured.category].text} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <featured.icon className="w-7 h-7 stroke-[1.5]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight group-hover:text-cyan-200 transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-base mb-8">
                {featured.description}
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2">
                {featured.services.map((s) => (
                  <span
                    key={s}
                    className={`px-3.5 py-1.5 ${categoryMeta[featured.category].bg} border ${categoryMeta[featured.category].border} ${categoryMeta[featured.category].text} rounded-full text-xs font-semibold tracking-wide`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/[0.05] mt-8">
              <div>
                <p className="text-[10px] text-slate-600 uppercase tracking-widest font-semibold mb-0.5">Deliverable</p>
                <p className="text-sm font-bold text-slate-300">{featured.deliverable}</p>
              </div>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryMeta[featured.category].color} flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500`}>
                <ArrowUpRightIcon className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Right column — 2 stacked cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.slice(0, 2).map((project, i) => {
              const meta = categoryMeta[project.category];
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 + i * 0.12 }}
                  viewport={{ once: true }}
                  className={`group relative rounded-[1.75rem] border border-white/[0.07] bg-white/[0.02] p-8 overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-500`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-20" style={{ background: `var(--glow)` }} />

                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${meta.bg} border ${meta.border} mb-5 w-fit`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${meta.text}`}>{project.category}</span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl ${meta.bg} border ${meta.border} ${meta.text} group-hover:scale-110 transition-transform duration-500`}>
                      <project.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h3 className="text-lg font-extrabold text-white leading-snug group-hover:text-slate-100">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                    {project.services.map((s) => (
                      <span key={s} className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.07] rounded-full text-slate-500 text-[11px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom Row of 3 Cards ───────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.slice(2).map((project, i) => {
            const meta = categoryMeta[project.category];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                viewport={{ once: true }}
                className="group relative rounded-[1.75rem] border border-white/[0.07] bg-white/[0.02] p-8 overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${meta.bg} border ${meta.border} mb-5 w-fit`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${meta.text}`}>{project.category}</span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className={`shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl ${meta.bg} border ${meta.border} ${meta.text} group-hover:scale-110 transition-transform duration-500`}>
                    <project.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                  {project.services.map((s) => (
                    <span key={s} className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.07] rounded-full text-slate-500 text-[11px] font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}