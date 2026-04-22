'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    quote:
      'Clicknovation completely transformed how we operate. Their cloud infrastructure overhaul cut our system downtime by 80% and the entire team was professional, responsive, and deeply knowledgeable throughout.',
    author: 'Rajesh Mehta',
    role: 'CEO',
    company: 'NovaTech Solutions',
    initials: 'RM',
    avatarGradient: 'from-blue-500 to-cyan-400',
    rating: 5,
    featured: true,
  },
  {
    quote:
      'The team understood our vision from day one. They built our web platform on time, on budget, and it exceeded every expectation we had. Truly exceptional delivery.',
    author: 'Priya Sharma',
    role: 'Project Director',
    company: 'Horizon Group',
    initials: 'PS',
    avatarGradient: 'from-violet-500 to-blue-500',
    rating: 5,
    featured: false,
  },
  {
    quote:
      'Their network infrastructure setup was flawless. Zero downtime during migration and the ongoing support has been outstanding. I would recommend Clicknovation to any growing business.',
    author: 'Ankit Patel',
    role: 'IT Manager',
    company: 'CoreBridge Enterprises',
    initials: 'AP',
    avatarGradient: 'from-teal-400 to-cyan-500',
    rating: 5,
    featured: false,
  },
  {
    quote:
      'Their innovative approach and structured process gave us complete confidence. From CCTV installation to custom software, every solution was built to last.',
    author: 'Sara Khan',
    role: 'Operations Head',
    company: 'Vantage Retail',
    initials: 'SK',
    avatarGradient: 'from-indigo-500 to-violet-400',
    rating: 5,
    featured: false,
  },
  {
    quote:
      'A reliable technology partner that actually listens. They didn\'t just deliver a product — they delivered a competitive advantage for our business.',
    author: 'David Thomas',
    role: 'Managing Director',
    company: 'Pinnacle Consulting',
    initials: 'DT',
    avatarGradient: 'from-cyan-500 to-blue-600',
    rating: 5,
    featured: false,
  },
];

const stats = [
  { value: '150+', label: 'Clients Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '5.0', label: 'Average Rating' },
  { value: '10+', label: 'Years of Trust' },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="w-4 h-4 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const featured = testimonials.find((t) => t.featured)!;
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section className="relative overflow-hidden bg-slate-50 text-slate-900 py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      {/* Ambient light blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">

        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-8 text-sm uppercase tracking-wider">
            Client Testimonials
          </div>
          <div className="flex flex-col leading-[1.1] tracking-tight items-center mb-8">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900">
              Trusted by Businesses.
            </span>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text pb-2 inline-block">
                Proven by Results.
              </span>
            </div>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real feedback from real businesses whose operations, growth, and technology we&apos;ve transformed.
          </p>
        </motion.div>

        {/* ── Stats Bar ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden mb-16 shadow-sm"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white flex flex-col items-center justify-center py-8 px-4 group hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 transition-all duration-500"
            >
              <p className="text-3xl font-extrabold text-slate-900 group-hover:text-white transition-colors duration-300 mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold group-hover:text-white/70 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Bento Grid Layout ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-6">

          {/* Featured Card (spans 3 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative group bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[2rem] p-10 sm:p-12 overflow-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(37,99,235,0.25)] hover:shadow-[0_28px_80px_rgba(37,99,235,0.4)] hover:-translate-y-1.5 transition-all duration-500"
          >
            {/* Decorative quote mark */}
            <div className="absolute top-6 right-8 opacity-10">
              <ChatBubbleLeftRightIcon className="w-28 h-28 text-white" />
            </div>
            {/* Glow blob */}
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <StarRating count={featured.rating} />
                <span className="text-white/60 text-xs font-semibold uppercase tracking-widest ml-1">
                  Verified Review
                </span>
              </div>

              {/* Large open-quote glyph */}
              <span className="block text-7xl leading-none font-serif text-white/20 -mb-4 -ml-1 select-none">&ldquo;</span>
              <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-10">
                {featured.quote}
              </p>
            </div>

            {/* Author */}
            <div className="relative z-10 flex items-center gap-4 pt-8 border-t border-white/20">
              <div className={`w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-extrabold text-base border border-white/30 shrink-0`}>
                {featured.initials}
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">{featured.author}</p>
                <p className="text-white/70 text-sm font-medium">{featured.role} · {featured.company}</p>
              </div>
            </div>
          </motion.div>

          {/* Stack of 2 regular cards (spans 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.slice(0, 2).map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-slate-200 rounded-[1.75rem] p-8 overflow-hidden flex flex-col gap-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:border-blue-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <StarRating count={t.rating} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified</span>
                </div>

                <p className="relative z-10 text-slate-700 leading-relaxed text-sm font-medium flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-extrabold text-sm shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm leading-tight">{t.author}</p>
                    <p className="text-slate-500 text-xs font-medium">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom Row of 3 Cards ───────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {rest.slice(2).map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-slate-200 rounded-[1.75rem] p-8 overflow-hidden flex flex-col gap-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:border-blue-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <StarRating count={t.rating} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified</span>
              </div>

              <p className="relative z-10 text-slate-700 leading-relaxed text-sm font-medium flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-extrabold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm leading-tight">{t.author}</p>
                  <p className="text-slate-500 text-xs font-medium">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Trust badge card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[1.75rem] p-8 overflow-hidden flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-white text-2xl font-extrabold leading-tight mb-2">
                  5.0 / 5.0
                </p>
                <p className="text-slate-400 text-sm font-medium">
                  Average rating across all client engagements
                </p>
              </div>
              <div className="pt-5 border-t border-white/[0.08]">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-0.5">Powered by</p>
                <p className="text-white font-bold text-sm">Clicknovation Client Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}