'use client';

import { motion } from 'framer-motion';
import {
  CloudIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  LightBulbIcon,
  LinkIcon,
  PresentationChartLineIcon,
  VideoCameraIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web & App Development',
    description: 'Responsive websites, custom platforms, and mobile experiences designed for performance and growth.',
    icon: ComputerDesktopIcon,
    tag: 'Build',
  },
  {
    title: 'Network Infrastructure',
    description: 'Secure and reliable network environments that support uninterrupted connectivity and business operations.',
    icon: GlobeAltIcon,
    tag: 'Systems',
  },
  {
    title: 'Cloud Services',
    description: 'Flexible cloud solutions that improve efficiency, strengthen security, and make scaling easier.',
    icon: CloudIcon,
    tag: 'Cloud',
  },
  {
    title: 'Digital Marketing',
    description: 'Targeted campaigns and digital strategies that grow visibility, engagement, and demand.',
    icon: PresentationChartLineIcon,
    tag: 'Growth',
  },
  {
    title: 'CCTV & Security',
    description: 'Advanced monitoring and protection systems built to safeguard people, assets, and facilities.',
    icon: VideoCameraIcon,
    tag: 'Security',
  },
  {
    title: 'Business Consultancy',
    description: 'Practical guidance that helps businesses improve operations, productivity, and long-term direction.',
    icon: LightBulbIcon,
    tag: 'Strategy',
  },
  {
    title: 'System Integration',
    description: 'Connected workflows that help different platforms and technologies operate as one reliable system.',
    icon: LinkIcon,
    tag: 'Integration',
  },
  {
    title: 'Support & Maintenance',
    description: 'Ongoing technical support to keep your systems updated, secure, and performing consistently.',
    icon: WrenchScrewdriverIcon,
    tag: 'Support',
  },
];

const highlights = [
  'Tailored digital solutions',
  'Scalable technical foundations',
  'Reliable delivery and support',
];

export default function WhatWeOfferSection() {
  return (
    <section className="relative overflow-hidden border-y border-slate-800/50 bg-[#0a0f1c] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end"
        >
          <div>
            <div className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
              What We Offer
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">Technology services designed to move your business </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                forward with clarity and confidence.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              We combine strategy, engineering, infrastructure, and support to help organizations build stronger systems,
              improve efficiency, and grow with modern technology.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 backdrop-blur-sm shadow-[0_22px_50px_-38px_rgba(2,6,23,0.92)]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/78">
                Focus Areas
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-white/0 via-cyan-300/30 to-white/0" />
            </div>
            <div className="mt-5 grid gap-3">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{highlight}</p>
                      <p className="mt-1 text-xs leading-6 text-slate-400">
                        Built to support stable, practical, and growth-ready delivery.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.95)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:bg-[linear-gradient(180deg,rgba(14,165,233,0.08),rgba(255,255,255,0.04))]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40 text-cyan-300 shadow-[inset_0_0_18px_rgba(56,189,248,0.08)] transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="h-7 w-7 stroke-[1.6]" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200/82">
                  {service.tag}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold leading-7 text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(255,255,255,0.04))] p-8 shadow-[0_30px_80px_-50px_rgba(2,6,23,0.95)] sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/82">
                How We Deliver
              </p>
              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
                <span className="text-white">Professional execution from planning </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  to long-term support.
                </span>
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Every service is backed by structured delivery, reliable communication, and a focus on results that stay useful as your business evolves.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { step: '01', title: 'Strategy', text: 'We define direction, priorities, and the right solution path.' },
                { step: '02', title: 'Build', text: 'We execute with clear milestones, quality checks, and alignment.' },
                { step: '03', title: 'Operate', text: 'We support, improve, and keep systems reliable over time.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/35 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xs font-semibold text-cyan-200">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
