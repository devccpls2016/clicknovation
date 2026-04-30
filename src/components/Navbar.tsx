'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

const menuItems = [
  {
    name: 'About',
    href: '/about',
    icon: '👥',
    description: 'Learn about our company',
    submenus: [
      { name: 'Who We Are', href: '/about/who-we-are', desc: 'Our story and mission' },
      { name: 'Our Team', href: '/about/our-team', desc: 'Meet our experts' },
      { name: 'Life at Clicknovation', href: '/about/life-at-clicknovation', desc: 'Culture & values' },
      { name: 'Customer Stories', href: '/about/customer-stories', desc: 'Success cases' },
      { name: 'Trust Center', href: '/about/trust-center', desc: 'Security & compliance' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    icon: '⚙️',
    description: 'Our expertise',
    submenus: [
      { name: 'Business Consultancy', href: '/services/business-consultancy', desc: 'Strategic guidance' },
      { name: 'Web & App Development', href: '/services/web-app-development', desc: 'Custom solutions' },
      { name: 'Network and Infrastructure', href: '/services/network-infrastructure', desc: 'Enterprise networks' },
      { name: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Growth strategies' },
      { name: 'Cloud Services', href: '/services/cloud-services', desc: 'Scalable infrastructure' },
      { name: 'CCTV & Security', href: '/services/cctv-security', desc: 'Safety systems' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solution',
    icon: '💡',
    description: 'Ready-made solutions',
    submenus: [
      { name: 'School Management', href: '/solution/school-management', desc: 'Educational platform' },
      { name: 'Election Management', href: '/solution/election-management', desc: 'Voting systems' },
      { name: 'Hospital Management', href: '/solution/hospital-management', desc: 'Healthcare systems' },
      { name: 'Coaching Management', href: '/solution/coaching-management', desc: 'Learning platform' },
      { name: 'Whatsapp Integration', href: '/solution/whatsapp-integration', desc: 'Communication' },
      { name: 'Payment Gateway', href: '/solution/payment-gateway', desc: 'Secure payments' },
    ],
  },
  { name: 'ClickNet', href: 'https://www.clicknetcommunication.com/', external: true },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Work', href: '/work' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl text-[#0c1833] shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Logo height={42} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenus ? (
                  <motion.button
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="px-4 py-2 rounded-lg flex items-center space-x-1 group relative overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:text-[#1d4ed8] transition-colors duration-300">
                      {item.name}
                    </span>
                    <motion.div
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-4 h-4" />
                    </motion.div>
                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-[#0c1833]/5 rounded-lg -z-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-lg group/link relative overflow-hidden block"
                    {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-[#0c1833]/5 rounded-lg -z-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.submenus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-screen max-w-2xl bg-white backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-6 p-6">
                        {/* Left Column - Title and Description */}
                        <div className="col-span-1 border-r border-gray-300 pr-6">
                          <h3 className="text-xl font-bold mb-2 text-[#1a202c]">{item.name}</h3>
                          <p className="text-sm text-[#475569] mb-6">
                            {item.description}
                          </p>

                        </div>

                        {/* Right Column - Submenu Grid */}
                        <div className="col-span-1 grid grid-cols-1 gap-3">
                          {item.submenus.map((submenu) => (
                            <motion.div
                              key={submenu.name}
                              whileHover={{ x: 8 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                href={submenu.href}
                                className="block p-3 rounded-lg group/submenu hover:bg-gray-200 transition-all duration-300"
                              >
                                <div className="font-semibold text-[#1a202c] group-hover/submenu:text-blue-600 transition-colors">
                                  {submenu.name}
                                </div>
                                <div className="text-xs text-[#64748b] group-hover/submenu:text-[#475569] transition-colors">
                                  {submenu.desc}
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#f1f5f9]/90 backdrop-blur-md rounded-xl mt-2 mb-2 overflow-hidden border border-gray-300"
            >
              <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.submenus ? (
                      <details className="group">
                        <summary className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
                          <span className="font-semibold text-[#1a202c]">{item.name}</span>
                          <ChevronDownIcon className="w-4 h-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="pt-2 pl-4 space-y-2 border-l-2 border-gray-300 ml-2">
                          {item.submenus.map((submenu) => (
                            <Link
                              key={submenu.name}
                              href={submenu.href}
                              onClick={() => setIsOpen(false)}
                              className="block p-2 rounded text-sm text-[#475569] hover:text-blue-600 hover:pl-3 transition-all"
                            >
                              {submenu.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block p-3 rounded-lg font-semibold text-[#1a202c] hover:bg-gray-200 transition-colors"
                        {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}