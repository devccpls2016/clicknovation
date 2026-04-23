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
            <div className="space-y-4">
              <motion.div 
                className="flex items-start text-white/80 hover:text-white transition-colors cursor-default"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPinIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Clicknovation Technologies,<br />
                  MB Patel College Road, Near Durga Temple,<br />
                  Sakoli, Maharashtra – 441802, India
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center text-white/80 hover:text-white transition-colors cursor-default"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:8055556644" className="hover:text-blue-400 transition-colors">8055556644</a>
              </motion.div>
              <motion.div 
                className="flex items-center text-white/80 hover:text-white transition-colors cursor-default"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:dev.ccpls@gmail.com" className="hover:text-blue-400 transition-colors">dev.ccpls@gmail.com</a>
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
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link href="https://linkedin.com" target="_blank" className="text-white/70 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link href="https://facebook.com" target="_blank" className="text-white/70 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link href="https://instagram.com" target="_blank" className="text-white/70 hover:text-pink-500 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link href="https://youtube.com" target="_blank" className="text-white/70 hover:text-red-600 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}