'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c1833]/70 backdrop-blur-xl text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Logo height={56} className="mb-6" />
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering businesses with smart digital innovation. We design, build, and scale powerful digital solutions for the modern era.
            </p>
            <div className="space-y-2">
              <motion.div 
                className="flex items-start text-white/80 hover:text-white transition-colors cursor-default"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPinIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <address className="not-italic text-sm leading-relaxed">
                  Clicknovation Technologies<br />
                  MB Patel College Road,<br />
                  Near Durga Temple,<br />
                  Sakoli, Maharashtra – 441802,<br />
                  India
                </address>
              </motion.div>
              <motion.div 
                className="flex items-center text-white/80 hover:text-white transition-colors cursor-default"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                <span>8055556644</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-white/80 hover:text-white transition-colors cursor-default"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                <span>dev.ccpls@gmail.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/about" className="text-white/70 hover:text-blue-300 transition-colors inline-block">About Us</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/services" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Services</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/solution" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Solutions</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/technologies" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Technologies</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/work" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Our Work</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/careers" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Careers</Link></motion.div></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/services/web-app-development" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Web Development</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/services/network-infrastructure" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Network Infrastructure</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/services/digital-marketing" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Digital Marketing</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/services/cloud-services" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Cloud Services</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/services/cctv-security" className="text-white/70 hover:text-blue-300 transition-colors inline-block">CCTV & Security</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><Link href="/contact" className="text-white/70 hover:text-blue-300 transition-colors inline-block">Contact Us</Link></motion.div></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/70 text-sm">
            © {currentYear} Clicknovation Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/privacy" className="text-white/70 hover:text-blue-300 text-sm transition-colors">Privacy Policy</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/terms" className="text-white/70 hover:text-blue-300 text-sm transition-colors">Terms of Service</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}