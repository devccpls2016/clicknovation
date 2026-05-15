'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ChatBubbleBottomCenterTextIcon 
} from '@heroicons/react/24/outline';
import { CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Something went wrong. Please try again later.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      color: 'hover:text-blue-600',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      color: 'hover:text-pink-500',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      color: 'hover:text-red-600',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white relative overflow-hidden flex flex-col">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />

      <main className="flex-grow z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-8 text-sm uppercase tracking-wider relative overflow-hidden group">
              <span className="relative z-10">Contact Us</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"
              />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Let&apos;s build something <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Amazing</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Whether you have a strategic question, need specific technological support, or want to transform your business—our experts are ready to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                
                {/* Phone Component */}
                <div className="flex items-start bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0a0f1c] border border-slate-700 flex items-center justify-center rounded-xl group-hover:border-blue-500/50 group-hover:bg-blue-900/20 transition-all mr-6">
                    <PhoneIcon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Give Us a Call</h4>
                    <p className="text-slate-400 mb-2 text-sm">Mon-Fri from 9am to 6pm.</p>
                    <a href="tel:8055556644" className="text-blue-400 text-xl font-mono hover:text-cyan-300 transition-colors">
                      8055556644
                    </a>
                  </div>
                </div>

                {/* Email Component */}
                <div className="flex items-start bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0a0f1c] border border-slate-700 flex items-center justify-center rounded-xl group-hover:border-blue-500/50 group-hover:bg-blue-900/20 transition-all mr-6">
                    <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Send an Email</h4>
                    <p className="text-slate-400 mb-2 text-sm">Our friendly team is here to help.</p>
                    <a href="mailto:info@clicknovation.tech" className="text-blue-400 text-lg hover:text-cyan-300 transition-colors break-all">
                      info@clicknovation.tech
                    </a>
                  </div>
                </div>

                {/* Address Component */}
                <div className="flex items-start bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0a0f1c] border border-slate-700 flex items-center justify-center rounded-xl group-hover:border-blue-500/50 group-hover:bg-blue-900/20 transition-all mr-6">
                    <MapPinIcon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Visit Our Office</h4>
                    <address className="not-italic text-slate-300 text-base leading-loose">
                      Clicknovation Technologies<br />
                      MB Patel College Road,<br />
                      Near Durga Temple,<br />
                      Sakoli, Maharashtra – 441802,<br />
                      India
                    </address>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect with Us</h3>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.name}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      href={social.href} 
                      target="_blank" 
                      className={`text-slate-400 ${social.color} transition-colors duration-300`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Form Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none" />
              <div className="absolute top-0 right-0 flex items-center justify-center w-16 h-16 pointer-events-none">
                <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-blue-500/40" />
              </div>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
                  <div className="text-slate-300 space-y-4 mb-8 text-left bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
                    <p>Thank you for contacting us. Our team will review your inquiry and get back to you as soon as possible.</p>
                    <p>We appreciate your interest and look forward to assisting you.</p>
                    <p className="pt-4 font-semibold text-white">Best Regards,<br />Team Clicknovation Technologies.</p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0a0f1c]/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0a0f1c]/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number <span className="text-slate-500 text-xs">(optional)</span></label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full bg-[#0a0f1c]/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-slate-300">Company Name <span className="text-slate-500 text-xs">(optional)</span></label>
                        <input 
                          type="text" 
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full bg-[#0a0f1c]/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">How can we help?</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-[#0a0f1c]/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    <p className="text-xs text-slate-500 text-center mt-4">
                      By submitting this form, you agree to our privacy policy regarding data holding.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}