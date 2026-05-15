'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  Bars3Icon as MenuIcon,
  ChevronDownIcon,
  XMarkIcon as XIcon,
} from '@heroicons/react/24/outline';
import Logo from './Logo';

type SubmenuItem = {
  name: string;
  href: string;
  desc: string;
  category: string;
};

type MenuItem = {
  name: string;
  href: string;
  summary?: string;
  submenus?: SubmenuItem[];
  external?: boolean;
};

const primaryItems: MenuItem[] = [
  {
    name: 'About',
    href: '/about',
    summary: 'Meet the people, culture, and principles behind Clicknovation.',
    submenus: [
      { name: 'Who We Are', href: '/about/who-we-are', desc: 'Our story, mission, and direction.', category: 'Company' },
      { name: 'Our Team', href: '/about/our-team', desc: 'The experts behind strategy and delivery.', category: 'Leadership' },
      { name: 'Life at Clicknovation', href: '/about/life-at-clicknovation', desc: 'How our culture supports great work.', category: 'Culture' },
      { name: 'Customer Stories', href: '/about/customer-stories', desc: 'Real outcomes from client partnerships.', category: 'Proof' },
      { name: 'Trust Center', href: '/about/trust-center', desc: 'Security, standards, and reliability focus.', category: 'Trust' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    summary: 'Advisory, engineering, cloud, and infrastructure capabilities.',
    submenus: [
      { name: 'Business Consultancy', href: '/services/business-consultancy', desc: 'Strategic planning and process improvement.', category: 'Strategy' },
      { name: 'Web & App Development', href: '/services/web-app-development', desc: 'Modern digital products and custom platforms.', category: 'Engineering' },
      { name: 'Network and Infrastructure', href: '/services/network-infrastructure', desc: 'Robust systems for scale and stability.', category: 'Infrastructure' },
      { name: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Campaigns focused on reach and growth.', category: 'Growth' },
      { name: 'Cloud Services', href: '/services/cloud-services', desc: 'Secure and scalable cloud environments.', category: 'Cloud' },
      { name: 'CCTV & Security', href: '/services/cctv-security', desc: 'Integrated physical and operational protection.', category: 'Security' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solution',
    summary: 'Ready-to-deploy products for institutions and service businesses.',
    submenus: [
      { name: 'School Management', href: '/solution/school-management', desc: 'A complete digital system for school operations.', category: 'Education' },
      { name: 'Hospital Management', href: '/solution/hospital-management', desc: 'Structured workflows for healthcare delivery.', category: 'Healthcare' },
      { name: 'Coaching Management', href: '/solution/coaching-management', desc: 'Smarter coordination for classes and learners.', category: 'Learning' },
      { name: 'WhatsApp Integration', href: '/solution/whatsapp-integration', desc: 'Messaging workflows built into business operations.', category: 'Communication' },
      { name: 'Payment Gateway', href: '/solution/payment-gateway', desc: 'Secure payment experiences for modern platforms.', category: 'Finance' },
    ],
  },
];

const secondaryItems: MenuItem[] = [
  { name: 'Technologies', href: '/technologies' },
  { name: 'Work', href: '/work' },
  { name: 'Careers', href: '/careers' },
  { name: 'ClickNet', href: 'https://www.clicknetcommunication.com/', external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const activeMenuItem = primaryItems.find((item) => item.name === activeDropdown) ?? null;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(12,24,51,0.94))] text-white shadow-[0_18px_50px_-28px_rgba(2,6,23,0.9)] backdrop-blur-xl">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center">
            <Logo height={42} />
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            {primaryItems.map((item) => {
              const isOpenDropdown = activeDropdown === item.name;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[15px] font-medium tracking-[0.01em] transition-all duration-200 ${
                      isOpenDropdown
                        ? 'bg-white/12 text-white'
                        : 'text-blue-50/88 hover:bg-white/8 hover:text-white'
                    }`}
                    onClick={() =>
                      setActiveDropdown((current) => (current === item.name ? null : item.name))
                    }
                    aria-expanded={isOpenDropdown}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpenDropdown ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              );
            })}

            {secondaryItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[15px] font-medium tracking-[0.01em] text-blue-50/88 transition-all duration-200 hover:bg-white/8 hover:text-white"
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span>{item.name}</span>
                {item.external ? <ArrowUpRightIcon className="h-4 w-4" /> : null}
              </Link>
            ))}
          </div>

          <div className="hidden items-center lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0ea5e9,#2563eb)] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(37,99,235,0.85)] transition hover:brightness-110"
            >
              Contact Us
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <motion.button
              onClick={() => setIsOpen((current) => !current)}
              className="rounded-xl border border-white/10 bg-white/6 p-2.5 text-white transition-colors hover:bg-white/10"
              whileTap={{ scale: 0.96 }}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenuItem?.submenus ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-full z-50 hidden w-full max-w-7xl -translate-x-1/2 px-4 sm:px-6 lg:block lg:px-8"
              onMouseEnter={() => setActiveDropdown(activeMenuItem.name)}
            >
              <div className="w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_34px_90px_-38px_rgba(2,6,23,0.55)]">
                <div className="grid md:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[16rem_minmax(0,1fr)]">
                  <div className="border-r border-slate-200 bg-[linear-gradient(180deg,#f8fbff,#eef5ff)] p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
                      {activeMenuItem.name}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-950">
                      Explore our {activeMenuItem.name.toLowerCase()}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {activeMenuItem.summary}
                    </p>
                  </div>

                  <div className="p-5">
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {activeMenuItem.submenus.map((submenu) => (
                        <Link
                          key={submenu.name}
                          href={submenu.href}
                          className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-[linear-gradient(135deg,#f5fbff,#eef6ff)] hover:shadow-[0_18px_40px_-28px_rgba(37,99,235,0.35)]"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                              {submenu.category}
                            </span>
                            <ArrowRightIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-500 transition-colors group-hover:text-blue-700" />
                          </div>
                          <div className="mt-4 text-[15px] font-semibold leading-6 text-slate-950 transition-colors group-hover:text-sky-800">
                            {submenu.name}
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors group-hover:text-slate-700">
                            {submenu.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-2 overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,35,65,0.96),rgba(12,24,51,0.96))] lg:hidden"
            >
              <div className="max-h-[32rem] space-y-3 overflow-y-auto p-4">
                {primaryItems.map((item) => (
                  <details key={item.name} className="group rounded-2xl border border-white/10 bg-white/4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4">
                      <div>
                        <p className="text-[15px] font-semibold text-white">{item.name}</p>
                        <p className="mt-1 text-xs leading-5 text-blue-100/64">{item.summary}</p>
                      </div>
                      <ChevronDownIcon className="h-4 w-4 shrink-0 text-blue-100/70 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-white/10 p-3">
                      <div className="space-y-2">
                        {item.submenus?.map((submenu) => (
                          <Link
                            key={submenu.name}
                            href={submenu.href}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.08))] p-3 transition-all duration-200 hover:border-cyan-300/35 hover:bg-[linear-gradient(135deg,rgba(8,47,73,0.94),rgba(29,78,216,0.58))]"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-sm font-semibold text-white">{submenu.name}</span>
                              <span className="rounded-full border border-white/10 bg-white/6 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200/82">
                                {submenu.category}
                              </span>
                            </div>
                            <p className="mt-2 text-xs leading-5 text-blue-100/68">{submenu.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </details>
                ))}

                {secondaryItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/4 px-4 py-4 text-[15px] font-medium text-white"
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span>{item.name}</span>
                    {item.external ? <ArrowUpRightIcon className="h-4 w-4" /> : null}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0ea5e9,#2563eb)] px-5 py-3 text-sm font-semibold text-white"
                >
                  Contact Us
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
}
