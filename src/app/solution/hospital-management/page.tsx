'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function HospitalManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-indigo-950 text-white overflow-hidden">
      {/* Background Ornaments */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.15),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.15),_transparent_35%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      {/* 1. Hero Section */}
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
              <div className="inline-flex items-center gap-3 rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 ring-1 ring-indigo-500/30">
                <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                Next-Gen Healthcare ERP
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Smart Healthcare
                </span>
                <span className="text-4xl sm:text-5xl lg:text-5xl font-sans font-bold text-slate-300 mt-2">
                  Begins With
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 mt-1 pb-2">
                  Smart Management
                </span>
              </div>
              
              <div className="space-y-4 text-indigo-100/70 text-lg leading-relaxed max-w-2xl pt-4 border-l-2 border-indigo-500/30 pl-6">
                <p>
                  Today’s hospitals cannot run efficiently on manual files and disconnected departments. Our Hospital Management Software digitally connects every medical, administrative, and financial operation under one intelligent platform.
                </p>
                <p>
                  Reduce workload, improve patient trust, and control revenue leakage with our centralized healthcare ERP.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Animated Medical Hub */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-[100px]" />
              
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center perspective-[1000px]">
                {/* Orbital Rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 20 + ring * 10, repeat: Infinity, ease: "linear" }}
                    className={`absolute rounded-full border-[0.5px] border-indigo-500/20 [transform:rotateX(60deg)] ${ring === 1 ? 'w-[50%] h-[50%]' : ring === 2 ? 'w-[90%] h-[90%]' : 'w-[130%] h-[130%]'}`}
                  />
                ))}

                {/* Central Medical Core */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 w-32 h-32 bg-slate-900 border border-indigo-500/50 rounded-3xl shadow-[0_0_50px_rgba(99,102,241,0.3)] flex items-center justify-center backdrop-blur-xl"
                >
                   <svg className="w-16 h-16 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002 2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </motion.div>

                {/* Orbiting Departments */}
                {[
                  { icon: '👥', label: 'OPD/IPD', pos: 'top-0 left-1/4' },
                  { icon: '💊', label: 'Pharmacy', pos: 'bottom-10 right-10' },
                  { icon: '🔬', label: 'Pathology', pos: 'top-10 right-1/4' },
                  { icon: '💳', label: 'Billing', pos: 'bottom-20 left-10' },
                ].map((dept, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, delay: idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${dept.pos} z-30`}
                  >
                    <div className="bg-slate-800/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                      <span className="text-xl">{dept.icon}</span>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{dept.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. One Digital Platform Ecosystem */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-slate-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-12">
             <div className="inline-flex items-center gap-3 rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-300 ring-1 ring-sky-500/30 mb-6">
               Unified Architecture
             </div>
             <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
               One Platform For Your Entire <span className="text-sky-400">Hospital Ecosystem</span>
             </h2>
           </div>
           
           {/* Scrolling Ticker of Features */}
           <div className="relative flex overflow-hidden group">
              <div className="flex space-x-8 animate-[loop_30s_linear_infinite] whitespace-nowrap py-4">
                 {[
                   'Front Desk & Reception', 'OPD Consultation', 'IPD Admission', 
                   'Pharmacy Billing', 'Laboratory Management', 'Doctor EMR Records', 
                   'Accounts & Finance', 'HR & Staff Attendance', 'Insurance / TPA Claims', 'MIS Reports'
                 ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3">
                       <div className="w-2 h-2 rounded-full bg-sky-400" />
                       <span className="text-slate-200 font-medium">{feature}</span>
                    </div>
                 ))}
                 {/* Duplicate for infinite loop */}
                 {[
                   'Front Desk & Reception', 'OPD Consultation', 'IPD Admission', 
                   'Pharmacy Billing', 'Laboratory Management', 'Doctor EMR Records', 
                   'Accounts & Finance', 'HR & Staff Attendance', 'Insurance / TPA Claims', 'MIS Reports'
                 ].map((feature, i) => (
                    <div key={`dup-${i}`} className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3">
                       <div className="w-2 h-2 rounded-full bg-sky-400" />
                       <span className="text-slate-200 font-medium">{feature}</span>
                    </div>
                 ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
           </div>
        </div>
      </section>

      {/* 3. Core Modules - Modern Bento Layout (Using Complete Automation Colors) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-300 ring-1 ring-sky-500/30 mb-8">
              Complete Automation Modules
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Built with Powerful Modules for <span className="text-sky-400">Complete Automation.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
            {/* 1. Reception & OPD - Indigo/Purple */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="md:col-span-8 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Smart Reception & OPD</h3>
                  <p className="text-indigo-100/70 text-lg">Quick UHID registration, queue display, appointment booking, token generation, and a streamlined doctor consultation flow with digital case papers.</p>
                </div>
              </div>
            </motion.div>

            {/* 2. Billing & Finance - Sky */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="md:col-span-4 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform">
                  <svg className="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Billing & Finance</h3>
                  <p className="text-indigo-100/70 text-sm">Control revenue leakage through centralized OPD, IPD, and procedure billing with automated GST invoices.</p>
                </div>
              </div>
            </motion.div>

            {/* 3. Pathology & Lab - Purple */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="md:col-span-4 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group md:row-span-2"
            >
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col items-center text-center justify-center">
                <div className="w-20 h-20 rounded-3xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pathology & Lab Integration</h3>
                <p className="text-indigo-100/70">Digitize lab reports with doctor-linked visibility, sample collection entry, and online report access.</p>
              </div>
            </motion.div>

            {/* 4. Pharmacy - Green */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="md:col-span-4 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002 2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Pharmacy Store</h3>
                  <p className="text-indigo-100/70 text-sm">Reduce medicine wastage with batch-wise stock entries, expiry alerts, and integrated barcode billing.</p>
                </div>
              </div>
            </motion.div>

            {/* 5. Inventory & Assets - Orange */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="md:col-span-4 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform">
                  <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Inventory & Assets</h3>
                  <p className="text-indigo-100/70 text-sm">Manage surgical items, consumables, minimum stock alerts, and biomedical asset maintenance logs.</p>
                </div>
              </div>
            </motion.div>

            {/* 6. IPD & Bed Management - Blue/Indigo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="md:col-span-12 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group flex flex-col md:flex-row items-center gap-8"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-indigo-500/0 group-hover:from-blue-600/10 group-hover:to-indigo-500/10 transition-colors duration-500" />
               <div className="w-20 h-20 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-white mb-3">IPD & Bed Management</h3>
                  <p className="text-indigo-100/70 text-lg max-w-4xl">Complete control over patient admissions, ward allocation, nursing treatment charts, daily doctor rounds, and automated final discharge summaries.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Specialized Hospital Operations (Grid list) */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-300 ring-1 ring-sky-500/30 mb-6">
                Advanced Operations
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Engineered for <span className="text-sky-400">Complex Workflows.</span>
              </h2>
              <p className="text-lg text-indigo-100/60 leading-relaxed mb-6">
                Hospitals handle critical data that goes beyond basic billing. Our platform streamlines the most complex administrative layers.
              </p>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Electronic Medical Records', desc: 'Lifelong digital tracking of patient history, reports, and chronic diseases.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                { title: 'OT Management', desc: 'Manage surgery schedules, anesthesia records, and post-op notes systematically.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { title: 'Insurance & TPA Claims', desc: 'Faster claim settlements with digitized pre-auth forms and policy storage.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                { title: 'Telemedicine & Online', desc: 'Video consultations, online appointments, and digital payment collections.', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-sky-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} /></svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-indigo-100/60 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Management Control Dashboard Grid */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-3 rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 ring-1 ring-indigo-500/30 mb-6">
                Administrative Oversight
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Complete Management <span className="text-indigo-400">Control.</span></h2>
              <p className="text-indigo-100/60 max-w-lg">
                Hospital owners shouldn't wait for manual reports. Get exact control over every rupee, every employee, and every department instantly.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-800/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">HR & Staff Payroll</h3>
              <p className="text-sm text-slate-300 mb-6">Manage doctors, nurses, and admins. Duty shifts, attendance, salary, and incentive records perfectly organized.</p>
              <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                 <div className="h-full bg-indigo-500 w-3/4" />
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-800/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-sky-400 mb-4">Live Dashboard Reports</h3>
              <p className="text-sm text-slate-300 mb-6">Real-time stats on daily OPD/IPD counts, department revenue, pharmacy sales, and outstanding TPA payments.</p>
              <div className="flex gap-2">
                 {[40, 70, 50, 90, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-700 rounded-t-sm flex items-end h-8">
                       <div className="w-full bg-sky-500 rounded-t-sm" style={{ height: `${h}%` }} />
                    </div>
                 ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-800/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Secure & Role-Based</h3>
              <p className="text-sm text-slate-300 mb-6">Cloud-based, paperless architecture. Provide specific access to Reception, Doctors, Lab Techs, and Admin ensuring data security.</p>
              <div className="flex gap-2">
                 <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30">Admin</span>
                 <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded border border-indigo-500/30">Doctor</span>
                 <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded border border-sky-500/30">Nurse</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Why Hospitals Choose Us */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-indigo-900/30">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">Why Hospitals Choose Our <span className="text-indigo-400">HMS</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
               {[
                 'Faster patient handling', 'Better doctor productivity', 'Accurate billing system', 
                 'Department synchronization', 'Paperless records', 'Reduced staff dependency', 
                 'Strong financial control', 'Smart healthcare growth'
               ].map((benefit, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                   className="bg-indigo-900/20 border border-indigo-500/20 px-6 py-3 rounded-full text-indigo-100 font-medium"
                 >
                   ✓ {benefit}
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Call to Action */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-indigo-900 to-sky-900 relative overflow-hidden shadow-2xl border border-sky-500/30"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-300 ring-1 ring-sky-500/30 mb-8 border border-sky-400/20 backdrop-blur-md">
                Digital Transformation
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Build A Digitally Managed Hospital, <br /> Not Just A Medical Facility.
              </h2>
              <p className="text-lg text-indigo-100/80 max-w-2xl mx-auto mb-12">
                Modern hospitals require intelligent operational systems. Transform your daily operations into a connected, efficient, and patient-friendly digital ecosystem.
              </p>
              <button className="px-10 py-4 bg-white text-indigo-950 font-bold rounded-full text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
