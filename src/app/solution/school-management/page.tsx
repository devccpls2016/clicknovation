'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function SchoolManagement() {
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
                <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
                Next-Gen School ERP
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white">
                  Smart School
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 mt-1 pb-2">
                  Management
                </span>
                <span className="text-4xl sm:text-5xl lg:text-5xl font-sans font-bold mt-1 text-slate-300">
                  for Modern Institutions
                </span>
              </div>
              
              <div className="space-y-4 text-indigo-100/80 text-lg leading-relaxed max-w-2xl pt-4 border-l-2 border-indigo-500/30 pl-6">
                <p>
                  Simplify every academic and administrative process with a powerful School Management Software built to manage admissions, attendance, fees, examinations, staff, transport, communication, and reporting through one intelligent digital platform.
                </p>
                <p>
                  Designed for schools, colleges, academies, and educational groups, this software helps institutions operate faster, smarter, and with complete transparency.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Animated School Hub */}
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
                    animate={{ rotateZ: ring % 2 === 0 ? -360 : 360 }}
                    transition={{ duration: 20 + ring * 10, repeat: Infinity, ease: "linear" }}
                    className={`absolute rounded-full border-[0.5px] border-indigo-500/20 [transform:rotateX(65deg)] ${ring === 1 ? 'w-[60%] h-[60%]' : ring === 2 ? 'w-[100%] h-[100%]' : 'w-[140%] h-[140%]'}`}
                  />
                ))}

                {/* Core Server/Hub */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20"
                >
                  <div className="w-32 h-40 bg-slate-900 border border-indigo-500/50 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.3)] p-4 flex flex-col gap-2 relative overflow-hidden backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent" />
                    {/* Simulated Server Lights */}
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex-1 border border-indigo-500/30 rounded-lg flex items-center px-3 gap-2 bg-slate-950/50">
                        <div className={`w-2 h-2 rounded-full ${i===1?'bg-green-400':i===2?'bg-sky-400':'bg-indigo-400'} animate-pulse`} />
                        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ x: ['-100%', '100%'] }} 
                            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }} 
                            className="h-full w-1/2 bg-indigo-500" 
                          />
                        </div>
                      </div>
                    ))}
                    <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-indigo-500/30 blur-[20px] rounded-full" />
                  </div>
                </motion.div>

                {/* Floating Modules */}
                {[
                  { icon: '🎓', label: 'Academics', pos: 'top-0 left-1/4' },
                  { icon: '💰', label: 'Finance', pos: 'bottom-10 right-10' },
                  { icon: '📊', label: 'Reports', pos: 'top-10 right-1/4' },
                  { icon: '🚌', label: 'Transport', pos: 'bottom-20 left-10' },
                ].map((module, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, delay: idx, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${module.pos} z-30`}
                  >
                    <div className="bg-slate-800/80 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                      <span className="text-2xl">{module.icon}</span>
                      <span className="text-sm font-bold text-white">{module.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. One Platform Ecosystem */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 ring-1 ring-indigo-500/30 mb-8">
              Unified Digital Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              One Platform to Manage the <span className="text-indigo-400">Entire School Ecosystem</span>
            </h2>
            <p className="text-lg text-indigo-100/70 leading-relaxed mb-8">
              Educational institutions handle multiple departments every day — students, teachers, accounts, examinations, parents, transport, and administration. Managing all these operations manually often leads to delays, paperwork, and communication gaps.
            </p>
            <p className="text-xl font-medium text-sky-300">
              This centralized School ERP Software connects every department into one streamlined system, making daily operations smooth, organized, and easy to monitor from a single dashboard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Powerful Modules Bento Grid */}
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
            {/* 1. Admission & Records */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="md:col-span-8 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Student Admission & Records</h3>
                  <p className="text-indigo-100/70 text-lg">Manage student registration, documents, classroom details, attendance history, certificates, and academic records with a structured digital system.</p>
                </div>
              </div>
            </motion.div>

            {/* 2. Fees & Accounting */}
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
                  <h3 className="text-xl font-bold text-white mb-2">Fees & Accounting Management</h3>
                  <p className="text-indigo-100/70 text-sm">Automate fee collection, installment tracking, due reminders, receipts, concession entries, and complete finance reporting.</p>
                </div>
              </div>
            </motion.div>

            {/* 3. Examination & Results */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="md:col-span-4 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group md:row-span-2"
            >
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col items-center text-center justify-center">
                <div className="w-20 h-20 rounded-3xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Examination & Result Management</h3>
                <p className="text-indigo-100/70">Create exam schedules, upload marks, generate report cards, and maintain academic performance records digitally.</p>
              </div>
            </motion.div>

            {/* 4. Parent Communication */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="md:col-span-4 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Parent Communication System</h3>
                  <p className="text-indigo-100/70 text-sm">Send notices, fee reminders, attendance alerts, homework updates instantly through SMS, WhatsApp, or app notifications.</p>
                </div>
              </div>
            </motion.div>

            {/* 5. Transport & Library */}
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
                  <h3 className="text-xl font-bold text-white mb-2">Transport, Library & Inventory</h3>
                  <p className="text-indigo-100/70 text-sm">Manage bus routes, GPS tracking, book records, hostel details, visitor logs, and internal stock from one platform.</p>
                </div>
              </div>
            </motion.div>

            {/* 6. Attendance & Staff */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="md:col-span-12 relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden group flex flex-col md:flex-row items-center gap-8"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-indigo-500/0 group-hover:from-blue-600/10 group-hover:to-indigo-500/10 transition-colors duration-500" />
               <div className="w-20 h-20 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Attendance & Staff Monitoring</h3>
                  <p className="text-indigo-100/70 text-lg max-w-4xl">Track student, teacher, and employee attendance with smart daily monitoring and real-time status updates.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Stakeholders Grid */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 ring-1 ring-indigo-500/30 mb-8">
              Connected Stakeholders
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Everyone.</span>
            </h2>
            <p className="text-lg text-indigo-100/70 max-w-3xl mx-auto">
              This software creates a connected digital environment where every stakeholder gets the right information at the right time. The result is faster communication, better accountability, and improved educational coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: 'Administrators', title: 'Management gets full operational control', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z' },
              { role: 'Teachers', title: 'Teachers get academic workflow support', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              { role: 'Parents', title: 'Parents stay updated with student progress', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { role: 'Students', title: 'Students access homework, notices easily', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
            ].map((user, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-700/50 rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-slate-800 border border-indigo-500/30 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={user.icon} /></svg>
                </div>
                <h4 className="text-xl font-bold text-sky-400 mb-3">{user.role}</h4>
                <p className="text-white text-sm">{user.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real-Time & Mobile & Why Choose & Secure (Feature Sections) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Real-Time Data */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-3 rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-300 ring-1 ring-sky-500/30 mb-6">
                Data-Driven Insights
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Real-Time Data. <span className="text-indigo-400">Better School Decisions.</span></h2>
              <p className="text-lg text-indigo-100/70 mb-6">
                Monitor admissions, fee collections, attendance, exam performance, staff reports, and transport updates through live dashboards and instant reports.
              </p>
              <p className="text-lg text-indigo-100/70">
                Instead of depending on manual files, school administrators get real-time visibility that helps in making quicker and smarter institutional decisions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-80 bg-slate-900/60 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-8 backdrop-blur-sm">
               <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-indigo-500/10" />
               {/* Animated Chart Representation */}
               <div className="w-full h-full flex items-end justify-between gap-2">
                 {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     whileInView={{ height: `${height}%` }}
                     transition={{ duration: 1, delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="w-full bg-gradient-to-t from-indigo-600 to-sky-400 rounded-t-md opacity-80"
                   />
                 ))}
               </div>
            </motion.div>
          </div>

          {/* Mobile App Connectivity */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1 relative h-80 flex items-center justify-center">
               <div className="absolute w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]" />
               {/* Animated Mobile Device Frame */}
               <motion.div 
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="relative z-10 w-48 h-80 bg-slate-900 border-[4px] border-slate-700 rounded-[2rem] shadow-2xl p-2 flex flex-col"
               >
                  <div className="w-16 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
                  <div className="flex-1 bg-slate-800 rounded-xl p-3 flex flex-col gap-3">
                     <div className="w-full h-10 bg-indigo-500/30 rounded-lg animate-pulse" />
                     <div className="w-full h-20 bg-sky-500/20 rounded-lg animate-pulse" />
                     <div className="flex gap-2">
                        <div className="flex-1 h-16 bg-green-500/20 rounded-lg animate-pulse" />
                        <div className="flex-1 h-16 bg-purple-500/20 rounded-lg animate-pulse" />
                     </div>
                  </div>
               </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 ring-1 ring-indigo-500/30 mb-6">
                Anywhere Access
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Mobile App Connectivity for <span className="text-sky-400">Complete Accessibility</span></h2>
              <p className="text-lg text-indigo-100/70 mb-6">
                Stay connected beyond the office with mobile access for administrators, teachers, parents, and students.
              </p>
              <p className="text-lg text-indigo-100/70">
                From fee payments and homework updates to attendance alerts and notices, every important activity can be accessed anytime, anywhere through an integrated mobile application.
              </p>
            </motion.div>
          </div>

          {/* Secure, Scalable & Why Schools Need */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/50 border border-slate-700/50 rounded-[2rem] p-8 md:p-12">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002 2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300 ring-1 ring-indigo-500/30 mb-4">
                Digital Transformation
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Schools Need Smart ERP</h3>
              <p className="text-indigo-100/70 mb-4">
                Modern institutions require speed, transparency, and efficient communication. A digital School ERP Software helps reduce paperwork, improve fee management, simplify academic reporting, strengthen parent trust, and create a more organized educational workflow.
              </p>
              <p className="text-sky-300 font-semibold">It is not just software — it is a complete digital management solution for future-ready schools.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-900/50 border border-slate-700/50 rounded-[2rem] p-8 md:p-12">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 ring-1 ring-sky-500/30 mb-4">
                Future-Ready Tech
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure, Scalable & Easy to Operate</h3>
              <p className="text-indigo-100/70 mb-4">
                Built on secure cloud technology, the software offers role-based access, protected data storage, fast performance, and customizable modules that can scale according to institution size.
              </p>
              <p className="text-indigo-100/70">Whether you manage one school or multiple branches, the system is designed to grow with your educational operations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-indigo-900 to-sky-900 relative overflow-hidden shadow-2xl border border-sky-500/20"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-300 ring-1 ring-sky-500/30 mb-8 border border-sky-400/20 backdrop-blur-md">
                Upgrade Your Institution
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Transform with Smarter <br /> Digital Management.
              </h2>
              <p className="text-lg text-indigo-100/90 max-w-2xl mx-auto mb-12">
                Upgrade from manual administration to a smart automated platform that improves productivity, transparency, communication, and overall school performance. Run your institution with confidence using a modern School Management Software.
              </p>
              <button className="px-10 py-4 bg-white text-indigo-950 font-bold rounded-full text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                Book a Free Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
