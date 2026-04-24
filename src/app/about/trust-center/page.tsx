'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  CheckBadgeIcon, 
  ArrowPathIcon,
  ShieldExclamationIcon,
  FingerPrintIcon,
  CubeIcon,
  BeakerIcon,
  HandThumbUpIcon,
  ArrowRightIcon,
  EyeIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TrustCenter() {

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.1),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.05),_transparent_40%)] pointer-events-none z-0" />
      
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                <ShieldCheckIcon className="w-4 h-4" />
                Trust & Compliance
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Transparency.
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white mt-1">
                  Security.
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Reliability.</span>
                </span>
              </div>
              
              <div className="space-y-6 text-blue-100/80 text-lg leading-relaxed max-w-2xl">
                 <p className="font-bold text-2xl text-blue-300">Building trust through every interaction.</p>
                 <p>
                  At Clicknovation, trust is the foundation of everything we do. We are committed to upholding the highest standards of security, transparency, and accountability, ensuring our clients feel confident in every interaction.
                 </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="relative w-full max-w-[450px] aspect-square">
                {/* Security Field Animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-blue-500/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 border-2 border-dashed border-cyan-400/10 rounded-full"
                />
                
                {/* Central Shield Core */}
                <div className="absolute inset-[20%] bg-gradient-to-tr from-blue-900/40 to-cyan-900/40 backdrop-blur-2xl rounded-[3rem] border border-white/10 flex items-center justify-center p-8 shadow-2xl">
                   <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotateY: [0, 180, 360]
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 border border-blue-500/30"
                      >
                         <ShieldCheckIcon className="w-12 h-12 text-blue-400" />
                      </motion.div>
                      <span className="text-sm font-black tracking-[0.4em] text-cyan-400 uppercase">Trusted</span>
                   </div>
                </div>

                {/* Floating Certifications / Trust Signals */}
                {[
                  { icon: LockClosedIcon, label: "ENCRYPTED" },
                  { icon: EyeIcon, label: "TRANSPARENT" },
                  { icon: FingerPrintIcon, label: "PROTECTED" },
                  { icon: CheckBadgeIcon, label: "CERTIFIED" }
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, idx % 2 === 0 ? 10 : -10, 0]
                    }}
                    transition={{
                      duration: 4 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.7
                    }}
                    className={`absolute p-4 sm:p-5 bg-slate-900/90 border border-white/10 backdrop-blur-lg rounded-2xl flex flex-col items-center gap-2 shadow-xl z-20
                      ${idx === 0 ? '-top-4 -right-4' : ''}
                      ${idx === 1 ? '-bottom-4 -left-4' : ''}
                      ${idx === 2 ? 'top-1/2 -right-12 -translate-y-1/2' : ''}
                      ${idx === 3 ? 'bottom-1/2 -left-12 translate-y-1/2' : ''}
                    `}
                  >
                     <item.icon className="w-6 h-6 text-blue-400" />
                     <span className="text-[10px] font-bold tracking-widest text-white/50">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* DATA SECURITY & PRIVACY */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                Data Protection
              </div>
              <div className="flex flex-col leading-[1.1] tracking-tight mb-8">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Global Standards for</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Security & Privacy</span>
                </span>
              </div>
              <p className="text-lg text-blue-100/70 leading-relaxed max-w-xl">
                We protect what matters most to your business by implementing robust security practices that ensure the safety and confidentiality of your sensitive information.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Secure Storage", 
                desc: "Enterprise-grade handling and storage protocols for all client analytics and operational data.",
                icon: CircleStackIcon 
              },
              { 
                title: "Zero Unauthorized Access", 
                desc: "Multi-layered defense systems to protect against breaches and non-compliant access attempts.",
                icon: ShieldExclamationIcon 
              },
              { 
                title: "Active Monitoring", 
                desc: "Continuous 24/7 system surveillance and timely security updates to stay ahead of threats.",
                icon: EyeIcon 
              },
              { 
                title: "Strict Confidentiality", 
                desc: "Legally backed confidentiality agreements maintained throughout every level of our partnership.",
                icon: LockClosedIcon 
              }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/60 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{feature.title}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QUALITY & RELIABILITY */}
        <section className="py-24 bg-slate-900/30 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                  Operational Excellence
                </div>
                <div className="flex flex-col leading-[1.1] tracking-tight mb-8 items-center text-center">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">Solutions You Can</span>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Depend On</span>
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Rigorous Validation",
                  desc: "Well-structured development cycles and exhaustive testing ensuring bug-free deployment.",
                  icon: BeakerIcon
                },
                {
                  title: "High Performance",
                  desc: "Scalable systems built with modern architecture to maintain speed under heavy load.",
                  icon: ArrowPathIcon
                },
                {
                  title: "Dependable Uptime",
                  desc: "Commitment to consistent delivery and services with absolute minimal downtime.",
                  icon: CheckBadgeIcon
                }
              ].map((item) => (
                <div key={item.title} className="p-10 rounded-[3rem] bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all group">
                   <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                   </div>
                   <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                   <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTINUOUS IMPROVEMENT */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 border border-white/5 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px]" />
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
                      Evolution
                   </div>
                   <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
                      Continuously <span className="text-cyan-400 font-extrabold">Evolving</span> to Stay Ahead.
                   </h2>
                   <p className="text-lg text-slate-300 leading-relaxed mb-8 font-medium">
                      At Clicknovation, we regularly enhance our processes and adopt modern technologies to meet changing industry standards and client expectations.
                   </p>
                   <ul className="space-y-4">
                      {[
                        "Adoption of advanced tools and emerging technologies",
                        "Continuous process optimization and system upgrades",
                        "Strong focus on long-term performance and scalability"
                      ].map((point, i) => (
                        <li key={i} className="flex gap-4 items-center text-slate-300">
                           <div className="w-6 h-6 bg-blue-600/20 text-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                              <ArrowRightIcon className="w-3 h-3" />
                           </div>
                           {point}
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="grid grid-cols-2 gap-6 scale-90 sm:scale-100">
                   <div className="flex flex-col gap-6">
                      <div className="h-40 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl flex items-center justify-center">
                         <CubeIcon className="w-12 h-12 text-blue-400" />
                      </div>
                      <div className="h-56 bg-gradient-to-b from-blue-600/20 to-transparent border border-blue-500/20 rounded-3xl backdrop-blur-xl" />
                   </div>
                   <div className="flex flex-col gap-6 pt-12">
                      <div className="h-56 bg-gradient-to-t from-cyan-600/20 to-transparent border border-cyan-500/20 rounded-3xl backdrop-blur-xl" />
                      <div className="h-40 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl flex items-center justify-center">
                         <HandThumbUpIcon className="w-12 h-12 text-cyan-400" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] pointer-events-none" />
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-8 relative z-10">
              Your Trusted <br/>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Technology Partner</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
              We position ourselves as a reliable partner dedicated to helping you grow, ensuring security, and delivering consistent value over the long term.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.5)] transition-all relative z-10 group"
            >
              Connect with Confidence
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}