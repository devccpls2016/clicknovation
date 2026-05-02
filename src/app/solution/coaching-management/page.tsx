'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function CoachingManagement() {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden font-sans">
      {/* Background Gradients (Blue + Soft Purple) */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(168,85,247,0.15),_transparent_50%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      {/* 1. Hero Section (SaaS Dashboard Mockup) */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 backdrop-blur-md">
                <span className="inline-flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                Next-Gen Coaching ERP
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white">
                  Run Your Coaching
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mt-1 pb-2">
                  With Digital Control.
                </span>
              </div>
              
              <p className="text-blue-100/70 text-lg leading-relaxed max-w-xl">
                Managing a coaching center is no longer limited to classrooms. Organize admissions, batch scheduling, online learning, exams, and fee collections all under one powerful platform.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                 <button className="px-8 py-4 bg-white text-blue-950 font-bold rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 transition-all">
                    Start Free Trial
                 </button>
                 <button className="px-8 py-4 bg-blue-950/50 text-white font-bold rounded-full border border-blue-500/30 hover:bg-blue-900/50 transition-all backdrop-blur-md flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    Watch Demo
                 </button>
              </div>
            </motion.div>

            {/* Animated Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center"
            >
               {/* Main Dashboard Window */}
               <div className="relative w-full h-[80%] bg-slate-900/80 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col">
                  {/* Browser/App Header */}
                  <div className="h-10 bg-slate-800/50 border-b border-white/5 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/80" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                     <div className="w-3 h-3 rounded-full bg-green-500/80" />
                     <div className="mx-auto w-1/3 h-4 bg-slate-700/50 rounded-full" />
                  </div>
                  {/* Dashboard Content Area */}
                  <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                     {/* Sidebar */}
                     <div className="col-span-1 space-y-3">
                        <div className="h-8 bg-blue-500/20 rounded-md w-full" />
                        <div className="h-6 bg-slate-800 rounded-md w-3/4" />
                        <div className="h-6 bg-slate-800 rounded-md w-5/6" />
                        <div className="h-6 bg-slate-800 rounded-md w-4/5" />
                        <div className="h-6 bg-slate-800 rounded-md w-full" />
                     </div>
                     {/* Main Content Area */}
                     <div className="col-span-2 space-y-4">
                        <div className="flex justify-between items-end">
                           <div>
                              <div className="h-4 w-20 bg-slate-600 rounded mb-2" />
                              <div className="h-8 w-32 bg-white/90 rounded" />
                           </div>
                           <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                             <div className="w-5 h-5 bg-purple-400 rounded-full" />
                           </div>
                        </div>
                        {/* Chart Area */}
                        <div className="h-32 bg-slate-800/50 rounded-xl border border-white/5 p-4 flex items-end gap-2">
                           {[40, 70, 45, 90, 65, 85].map((h, i) => (
                             <motion.div 
                               key={i} 
                               initial={{ height: 0 }} 
                               animate={{ height: `${h}%` }} 
                               transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                               className="flex-1 bg-gradient-to-t from-blue-600 to-purple-400 rounded-t-sm opacity-80" 
                             />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Floating Student Card 1 */}
               <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-1/4 bg-slate-800/90 border border-blue-500/30 p-3 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 z-20"
               >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white/10" />
                  <div>
                     <div className="h-3 w-16 bg-white/80 rounded mb-1" />
                     <div className="h-2 w-12 bg-blue-300/50 rounded" />
                  </div>
                  <div className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold rounded">JOINED</div>
               </motion.div>

               {/* Floating Alert Card 2 */}
               <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 bottom-1/4 bg-slate-800/90 border border-purple-500/30 p-4 rounded-xl shadow-xl backdrop-blur-md z-20"
               >
                  <div className="flex items-center gap-2 mb-2">
                     <span className="text-purple-400 text-sm">🔔</span>
                     <div className="h-3 w-20 bg-white/80 rounded" />
                  </div>
                  <div className="h-2 w-32 bg-slate-600 rounded mb-1" />
                  <div className="h-2 w-24 bg-slate-600 rounded" />
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Supported Institutes (Marquee style) */}
      <section className="relative z-10 py-10 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto overflow-hidden flex">
            <div className="flex space-x-12 animate-[loop_40s_linear_infinite] whitespace-nowrap">
               {[
                 'Tuition Classes', 'NEET/JEE Coaching', 'Competitive Exam Academy', 
                 'Spoken English Center', 'Computer Training Institute', 'Skill Development Center', 
                 'Government Exam Coaching', 'Certification Classes'
               ].map((type, i) => (
                  <span key={i} className="text-xl font-bold text-slate-500/80 uppercase tracking-widest">{type}</span>
               ))}
               {/* Duplicate for infinite loop */}
               {[
                 'Tuition Classes', 'NEET/JEE Coaching', 'Competitive Exam Academy', 
                 'Spoken English Center', 'Computer Training Institute', 'Skill Development Center', 
                 'Government Exam Coaching', 'Certification Classes'
               ].map((type, i) => (
                  <span key={`dup-${i}`} className="text-xl font-bold text-slate-500/80 uppercase tracking-widest">{type}</span>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Core Features - Z-Pattern Layout */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Smart Admission */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 ring-1 ring-purple-500/30 mb-6">
                Online Enrollment
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Smart Admission System. <br /><span className="text-purple-400">Digital Onboarding.</span></h2>
              <p className="text-lg text-blue-100/70 mb-6 leading-relaxed">
                Transform the complete enrollment process into a smooth online workflow. Eliminate physical forms and document chaos with an integrated portal.
              </p>
              <ul className="space-y-3 text-sm text-blue-100/60">
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Online enquiry & registration portal</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Document upload & course selection</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Admission approval workflow & auto ID generation</li>
              </ul>
            </motion.div>
            {/* Admission Analytics Chart UI */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-80 bg-slate-900/60 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-8 backdrop-blur-sm group hover:border-purple-500/30 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10" />
               <div className="relative w-full max-w-sm">
                  <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
                     <div>
                        <div className="text-slate-400 text-xs font-bold mb-1 uppercase tracking-wider">Total Admissions</div>
                        <div className="text-4xl font-black text-white">1,284</div>
                     </div>
                     <div className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">+12%</div>
                  </div>
                  <div className="space-y-4">
                     {[{ label: 'NEET Batch', val: 75, color: 'bg-purple-500' }, { label: 'JEE Mains', val: 60, color: 'bg-blue-500' }, { label: 'Foundation', val: 40, color: 'bg-sky-500' }].map((item, i) => (
                        <div key={i}>
                           <div className="flex justify-between text-xs text-slate-300 mb-1">
                              <span>{item.label}</span>
                              <span>{item.val}%</span>
                           </div>
                           <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.val}%` }} transition={{ duration: 1, delay: i * 0.2 }} className={`h-full ${item.color}`} />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Batches & Timetable */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1 relative h-80 bg-slate-900/60 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-6 backdrop-blur-sm group hover:border-blue-500/30 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-indigo-500/10" />
               {/* Timetable UI Mockup */}
               <div className="relative w-full h-full bg-slate-950/80 rounded-xl border border-white/5 p-4 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                     <div className="h-4 w-32 bg-white/80 rounded" />
                     <div className="flex gap-2">
                        <div className="h-6 w-6 bg-slate-800 rounded" />
                        <div className="h-6 w-6 bg-slate-800 rounded" />
                     </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 flex-1">
                     {Array.from({ length: 5 }).map((_, col) => (
                        <div key={col} className="flex flex-col gap-2">
                           <div className="h-3 w-full bg-slate-800 rounded mb-1" />
                           {Array.from({ length: 3 }).map((_, row) => (
                              <motion.div 
                                key={row}
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: (col + row) * 0.1 }}
                                className={`flex-1 rounded border border-white/5 ${row === 1 && col === 2 ? 'bg-blue-500/20 border-blue-500/30' : 'bg-slate-800/50'}`}
                              />
                           ))}
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 ring-1 ring-blue-500/30 mb-6">
                Academic Structure
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Batches & Timetable. <br /><span className="text-blue-400">Zero Overlaps.</span></h2>
              <p className="text-lg text-blue-100/70 mb-6 leading-relaxed">
                Manage unlimited batches without scheduling confusion. Automatically align teachers, classrooms, and subjects to prevent operational disorder.
              </p>
              <ul className="space-y-3 text-sm text-blue-100/60">
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Subject & faculty wise scheduling</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Attendance linked batch assignment</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Live schedule visibility for students & staff</li>
              </ul>
            </motion.div>
          </div>

          {/* LMS & Smart Classes */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300 ring-1 ring-indigo-500/30 mb-6">
                Digital Education
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">LMS & Live Classes. <br /><span className="text-indigo-400">Hybrid Teaching.</span></h2>
              <p className="text-lg text-blue-100/70 mb-6 leading-relaxed">
                Give your institute a complete online teaching support system. Share notes, recorded videos, and conduct live Zoom/Meet classes directly from the platform.
              </p>
              <ul className="space-y-3 text-sm text-blue-100/60">
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> PDF notes, eBooks, and homework sharing</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Student video tutorial library with tracking</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Automated live class attendance</li>
              </ul>
            </motion.div>
            {/* Video Player UI */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-80 bg-slate-900/60 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-6 backdrop-blur-sm group hover:border-indigo-500/30 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10" />
               <div className="relative w-full h-full bg-slate-950 border border-white/10 rounded-xl overflow-hidden flex flex-col">
                  {/* Video Area */}
                  <div className="flex-1 bg-slate-800 relative flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                     <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer z-10">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                     </motion.div>
                  </div>
                  {/* Video Controls */}
                  <div className="h-12 bg-slate-900 border-t border-white/5 flex items-center px-4 gap-4">
                     <div className="w-4 h-4 text-white">▶</div>
                     <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 w-1/3" />
                     </div>
                     <div className="text-xs text-slate-400 font-mono">12:40 / 45:00</div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Feature Bento Grid (Exams, Finance, Analytics, Communication) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Complete Institute <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Automation.</span>
            </h2>
            <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
              Everything from test series to fee reminders is handled automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Online Exams */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-blue-500/30 overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg className="w-24 h-24 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
               </div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">📝</div>
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2">Online Examinations</h3>
                     <p className="text-sm text-blue-100/60 leading-relaxed">Automate MCQ/descriptive tests. Instant rank generation and analytics for NEET, JEE, and competitive exams.</p>
                  </div>
               </div>
            </motion.div>

            {/* Fees Collection */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-emerald-500/30 overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg className="w-24 h-24 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">💰</div>
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2">Fees & Revenue Control</h3>
                     <p className="text-sm text-blue-100/60 leading-relaxed">Online payment gateway, installment tracking, auto receipts, and defaulter tracking dashboard.</p>
                  </div>
               </div>
            </motion.div>

            {/* Smart Alerts */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-green-500/30 overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg className="w-24 h-24 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
               </div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center">💬</div>
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2">WhatsApp & SMS Alerts</h3>
                     <p className="text-sm text-blue-100/60 leading-relaxed">Instant notifications for fee dues, absentee alerts, holiday announcements, and exam results to parents.</p>
                  </div>
               </div>
            </motion.div>

            {/* Performance Analytics */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="lg:col-span-2 relative p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-purple-500/30 overflow-hidden group flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1 z-10">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">📈</div>
                  <h3 className="text-xl font-bold text-white mb-2">Student Performance Analytics</h3>
                  <p className="text-sm text-blue-100/60 leading-relaxed">
                    Subject wise marks analysis, weak topic identification, and batch-wise topper reports to help institutes take data-driven academic decisions.
                  </p>
               </div>
               <div className="flex-1 w-full relative h-32 border-l border-white/10 pl-6 flex items-end gap-3 z-10">
                  {[20, 45, 30, 80, 55, 95].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="flex-1 bg-purple-500/50 rounded-t-sm" />
                  ))}
               </div>
            </motion.div>

            {/* Security/Roles */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="relative p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-sky-500/30 overflow-hidden group">
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">🔐</div>
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2">Multi-User Roles</h3>
                     <p className="text-sm text-blue-100/60 leading-relaxed">Secure separate login panels for Admin, Faculty, Accountant, Student, and Parent.</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Mobile App Showcase */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Cloud Based. <br /> Accessible On <span className="text-blue-400">Every Device.</span>
              </h2>
              <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
                Provide a premium experience to your students and parents with dedicated mobile applications. Manage your entire institute from your phone.
              </p>
              <div className="flex gap-4">
                 <div className="px-6 py-3 bg-slate-800 rounded-xl border border-white/10 flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <span className="font-bold">Student App</span>
                 </div>
                 <div className="px-6 py-3 bg-slate-800 rounded-xl border border-white/10 flex items-center gap-3">
                    <span className="text-2xl">👨‍🏫</span>
                    <span className="font-bold">Faculty App</span>
                 </div>
              </div>
            </motion.div>
            
            {/* Animated Phones */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-96 flex items-center justify-center">
               <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
               
               {/* Phone 1 */}
               <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute z-20 w-48 h-[340px] bg-slate-900 border-4 border-slate-700 rounded-[2rem] shadow-2xl p-2 -rotate-6 -translate-x-12">
                  <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-2" />
                  <div className="h-full bg-slate-800 rounded-xl p-3 flex flex-col gap-2">
                     <div className="h-20 bg-blue-500/20 rounded-lg" />
                     <div className="h-10 bg-purple-500/20 rounded-lg" />
                     <div className="flex gap-2">
                        <div className="flex-1 h-12 bg-white/5 rounded-lg" />
                        <div className="flex-1 h-12 bg-white/5 rounded-lg" />
                     </div>
                  </div>
               </motion.div>

               {/* Phone 2 */}
               <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute z-10 w-48 h-[340px] bg-slate-900 border-4 border-slate-700 rounded-[2rem] shadow-2xl p-2 rotate-6 translate-x-12 translate-y-8">
                  <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-2" />
                  <div className="h-full bg-slate-800 rounded-xl p-3 flex flex-col gap-2">
                     <div className="h-10 bg-indigo-500/20 rounded-lg" />
                     <div className="flex-1 bg-white/5 rounded-lg p-2 space-y-2">
                        <div className="h-2 w-3/4 bg-white/20 rounded" />
                        <div className="h-2 w-1/2 bg-white/20 rounded" />
                     </div>
                  </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] border border-blue-500/30 backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-blue-300 ring-1 ring-white/10 mb-8 border border-white/5 backdrop-blur-md">
                Grow Your Institute Faster
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Turn Your Coaching Center Into <br /> A Smart Learning Business.
              </h2>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                Your institute deserves more than registers and scattered student records. Get a connected ecosystem where academics, finance, and online learning work together.
              </p>
              <button className="px-10 py-4 bg-white text-blue-950 font-bold rounded-full text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                Request a Free Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
