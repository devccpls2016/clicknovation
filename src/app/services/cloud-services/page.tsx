'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-blue-950 text-white overflow-hidden">
      {/* Background Ornaments */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.15),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.15),_transparent_40%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      {/* 1. HERO VISION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-500/30">
                <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                Cloud Computing Excellence
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Cloud Infrastructure
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold mt-1 mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-sm pb-2">That Moves Business Forward.</span>
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-blue-300 italic tracking-wide">
                Secure. Scalable. Always Accessible.
              </h2>
              
              <div className="space-y-4 text-blue-100/80 text-lg leading-relaxed max-w-2xl pt-4 border-l-2 border-cyan-500/30 pl-6">
                <p>
                  Traditional systems slow down growth and create unnecessary maintenance challenges. Clicknovation Technologies delivers smart cloud environments that simplify storage, strengthen security, and give your business uninterrupted access to critical systems anytime, anywhere.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Animated Cloud Network Hub */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center lg:pl-12"
            >
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[100px]" />
              
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center perspective-[1200px]">
                 {/* Central Core Server */}
                 <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-[0_0_60px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-blue-600/10" />
                    {/* Pulsing server lights */}
                    <div className="flex gap-2 mb-4">
                       <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyan-400" />
                       <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="w-2 h-2 rounded-full bg-blue-400" />
                       <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} className="w-2 h-2 rounded-full bg-indigo-400" />
                    </div>
                    <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                 </div>

                 {/* Orbiting Rings */}
                 <motion.div 
                   animate={{ rotateX: 60, rotateZ: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute w-full h-full border border-cyan-500/20 rounded-full"
                 />
                 <motion.div 
                   animate={{ rotateX: -60, rotateZ: -360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                   className="absolute w-[80%] h-[80%] border border-blue-500/30 rounded-full"
                 />

                 {/* Connecting Nodes */}
                 {[
                   { label: 'STORAGE', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', delay: 0 },
                   { label: 'COMPUTE', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z', delay: 1.5 },
                   { label: 'NETWORK', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1', delay: 3 }
                 ].map((node) => (
                    <motion.div
                      key={node.label}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: node.delay }}
                      className="absolute w-full h-full z-30 pointer-events-none"
                    >
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <motion.div 
                            animate={{ rotate: -360 }} // Counter rotation to keep upright
                            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: node.delay }}
                            className="bg-slate-800 border border-white/10 p-3 rounded-2xl backdrop-blur-md shadow-xl flex flex-col items-center gap-2 group pointer-events-auto hover:bg-slate-700 transition-colors"
                          >
                             <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={node.icon} />
                                </svg>
                             </div>
                             <span className="text-[10px] font-bold text-blue-200 tracking-wider">{node.label}</span>
                          </motion.div>
                       </div>
                    </motion.div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CLOUD CAPABILITY PILLARS (Glassmorphic Grid) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 mb-8">
              Capability Pillars
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Cloud Solutions <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Architected For You</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Smart Cloud Deployment', subtitle: 'Built Around Your Workflow', desc: 'We design cloud environments that fit your business operations, application needs, and future growth. Every deployment is planned for speed, flexibility, and long-term performance.' },
              { title: 'Secure Cloud Storage', subtitle: 'Data Protected, Access Simplified', desc: 'Store files, records, and business data in a centralized cloud space with secure user access. Your information stays protected, organized, and available whenever your team needs it.' },
              { title: 'Seamless Cloud Migration', subtitle: 'Move Without Downtime', desc: 'We transfer your servers, applications, and business data into cloud infrastructure securely. Our migration process guarantees zero data loss and minimal disruption to daily operations.' },
              { title: 'Reliable Cloud Hosting', subtitle: 'High Uptime, No Hardware Costs', desc: 'Run websites, portals, and software on powerful virtual servers. Cloud hosting eliminates the need for expensive physical hardware while providing better speed and reliability.' },
              { title: 'Data Backup & Recovery', subtitle: 'Business Continuity Ensured', desc: 'Avoid data loss from failures or cyber threats. We set up automated backup systems that save your work securely in the cloud, ensuring instant recovery if a disaster happens.' },
              { title: 'Cyber Security for Cloud', subtitle: 'Vulnerability Protection', desc: 'Protect your cloud environments from unauthorized access, breaches, and malware. We implement strict firewall rules, encryption, and identity management to secure your digital assets.' }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl bg-slate-800/40 border border-white/5 hover:bg-slate-800/80 transition-all overflow-hidden group"
              >
                 {/* Hover Glow */}
                 <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] transition-all" />
                 
                 <h3 className="text-xl font-bold text-white mb-2 relative z-10">{pillar.title}</h3>
                 <h4 className="text-sm font-semibold text-cyan-400 mb-4 relative z-10">{pillar.subtitle}</h4>
                 <p className="text-blue-100/70 text-sm leading-relaxed relative z-10">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLOUD DEPLOYMENT TIMELINE / PROCESS */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Our Cloud Implementation Pipeline</h2>
            <p className="text-blue-100/70">A structured transition from physical constraints to limitless cloud potential.</p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 md:-translate-x-1/2 rounded-full" />
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5 }}
              className="absolute left-[27px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 md:-translate-x-1/2 rounded-full"
            />

            <div className="space-y-12">
              {[
                { title: 'Infrastructure Audit & Planning', desc: 'Evaluating existing systems, performance needs, and software dependencies.' },
                { title: 'Cloud Architecture Design', desc: 'Designing the server instances, storage mapping, and network configurations.' },
                { title: 'Data Migration & Synchronization', desc: 'Securely moving workloads and databases into the cloud environment.' },
                { title: 'Security & Access Configuration', desc: 'Establishing firewalls, encryption, VPNs, and user access roles.' },
                { title: 'Continuous Management & Optimization', desc: 'Ongoing resource monitoring to maintain efficiency and cost-effectiveness.' }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-slate-900 border-4 border-slate-800 rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 ring-2 ring-cyan-500/50 group hover:ring-cyan-400 transition-all">
                     <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform" />
                  </div>

                  <div className="w-full md:w-1/2 pl-20 md:pl-0">
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">Phase 0{idx + 1}: {step.title}</h3>
                      <p className="text-blue-100/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS APPLICATIONS GRID (Bento) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Cloud Applications for Business</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
             {/* Card 1 */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="md:col-span-8 p-8 rounded-3xl bg-slate-900/60 border border-white/5 relative overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[60px]" />
                <h3 className="text-2xl font-bold text-white mb-3">CRM & ERP Systems Hosting</h3>
                <p className="text-blue-100/70 text-lg max-w-lg">Host your company&apos;s heavy management systems on cloud servers to ensure they run fast and are accessible to multiple branch offices simultaneously.</p>
             </motion.div>

             {/* Card 2 */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.1 }}
               className="md:col-span-4 p-8 rounded-3xl bg-slate-900/60 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <h3 className="text-xl font-bold text-white mb-3">E-Commerce Hosting</h3>
                <p className="text-blue-100/70 text-sm">Scale resources during heavy traffic periods without crashing, ensuring smooth transactions for customers.</p>
             </motion.div>

             {/* Card 3 */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="md:col-span-4 p-8 rounded-3xl bg-slate-900/60 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <h3 className="text-xl font-bold text-white mb-3">Centralized Documentation</h3>
                <p className="text-blue-100/70 text-sm">Store vast amounts of legal, medical, or corporate documentation in organized cloud storage vaults.</p>
             </motion.div>

             {/* Card 4 */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3 }}
               className="md:col-span-8 p-8 rounded-3xl bg-slate-900/60 border border-white/5 relative overflow-hidden group hover:border-cyan-500/30 transition-all"
             >
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[60px]" />
                <h3 className="text-2xl font-bold text-white mb-3">Remote Work Desktops (VDI)</h3>
                <p className="text-blue-100/70 text-lg max-w-lg">Create virtual cloud desktops so your employees can access high-performance software and tools from any basic laptop, anywhere in the world.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING ADVANTAGES / CTA */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-slate-900 to-blue-950 relative overflow-hidden shadow-2xl border border-cyan-500/20"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Modernize Your IT Infrastructure. Remove Physical Limitations.
              </h2>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                Clicknovation Technologies manages the technical complexity of cloud adoption so you can focus entirely on growing your business.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-semibold text-cyan-300">
                 <span className="bg-slate-900/50 px-4 py-2 rounded-full border border-cyan-500/30">Cost Savings</span>
                 <span className="bg-slate-900/50 px-4 py-2 rounded-full border border-cyan-500/30">Security Control</span>
                 <span className="bg-slate-900/50 px-4 py-2 rounded-full border border-cyan-500/30">Performance Speed</span>
              </div>

              <button className="px-10 py-4 bg-cyan-500 text-slate-950 font-bold rounded-full text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:bg-cyan-400 hover:scale-105 transition-all">
                Migrate to the Cloud
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
