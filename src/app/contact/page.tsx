'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Footer from '@/components/Footer';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormState({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
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
            Let's build something <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Amazing</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Whether you have a strategic question, need specific technological support, or want to transform your business—our experts are ready to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
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
                    <a href="mailto:dev.ccpls@gmail.com" className="text-blue-400 text-lg hover:text-cyan-300 transition-colors break-all">
                      dev.ccpls@gmail.com
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Form Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none" />
              <div className="absolute top-0 right-0 flex items-center justify-center w-16 h-16 pointer-events-none">
                <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-blue-500/40" />
              </div>
              
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
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all transform hover:-translate-y-1"
                >
                  Send Message
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy regarding data holding.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}