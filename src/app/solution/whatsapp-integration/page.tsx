'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function WhatsappIntegration() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans">
      {/* Premium Background Gradients (Blue + Purple) */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.15),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.15),_transparent_40%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      {/* 1. Hero Section (WhatsApp Verified + CRM Dashboard Mockup) */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-base text-blue-300 ring-1 ring-blue-500/30 backdrop-blur-md">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs">✔</span>
                Meta Verified Business CRM
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white">
                  Automate Every
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mt-1 pb-2">
                  Conversation.
                </span>
              </div>
              
              <p className="text-blue-100/70 text-lg leading-relaxed max-w-xl">
                One Platform To Manage Conversations, Campaigns, Customers & Conversions. Build trusted communication channels, automate customer interactions, and run powerful marketing campaigns from one intelligent dashboard.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                 <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 transition-all flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.573-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.396.86s.274.066.381-.039c.105-.106.449-.521.571-.7.121-.179.243-.149.404-.087.161.063 1.03.486 1.203.571.174.087.289.13.332.202.043.073.043.423-.101.827z"/></svg>
                    Get Verified Setup
                 </button>
                 <button className="px-8 py-4 bg-slate-800/50 text-white font-bold rounded-full border border-white/10 hover:bg-slate-800 transition-all backdrop-blur-md">
                    Explore CRM
                 </button>
              </div>
            </motion.div>

            {/* Right: Automated Chat Mockup */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative aspect-square flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px]" />
               
               {/* CRM Interface Base */}
               <div className="relative w-full h-[85%] bg-slate-900/80 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)] backdrop-blur-xl overflow-hidden flex flex-col">
                  {/* Top Bar */}
                  <div className="h-14 bg-slate-800/80 border-b border-white/5 flex items-center justify-between px-4">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">C</div>
                        <div>
                           <div className="flex items-center gap-2">
                              <span className="text-white text-base font-bold">Clicknovation Tech</span>
                              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px]">✔</span>
                           </div>
                           <div className="text-green-400 text-xs mt-0.5">Online</div>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full bg-slate-700" />
                        <div className="w-4 h-4 rounded-full bg-slate-700" />
                     </div>
                  </div>
                  
                  {/* Chat Area */}
                  <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                     {/* Incoming Message */}
                     <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0" />
                        <div className="bg-slate-800 text-base text-slate-200 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                           Hi, I need pricing for your services.
                        </div>
                     </motion.div>

                     {/* Bot Typing Indicator */}
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 1, duration: 1.5 }} className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0 flex items-center justify-center"><span className="text-sm">🤖</span></div>
                        <div className="bg-blue-600/20 p-3 rounded-2xl rounded-tr-none flex items-center gap-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" />
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                     </motion.div>

                     {/* Bot Response */}
                     <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.5 }} className="flex gap-2 justify-end">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-base text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-lg">
                           Hello! Welcome to Clicknovation. Here is our automated pricing catalog. Would you like to book a demo?
                           <div className="mt-3 bg-white/20 p-3 rounded-lg text-sm flex justify-between cursor-pointer">
                              <span>📄 View Catalog</span>
                              <span>↓</span>
                           </div>
                        </div>
                     </motion.div>
                  </div>
                  
                  {/* Bottom Input */}
                  <div className="h-14 border-t border-white/5 flex items-center px-4 gap-2">
                     <div className="w-6 h-6 rounded-full bg-slate-700" />
                     <div className="flex-1 h-8 bg-slate-800 rounded-full" />
                     <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">➤</div>
                  </div>
               </div>

               {/* Floating Verification Badge */}
               <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -right-6 top-1/4 bg-slate-800/90 border border-green-500/30 p-4 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 z-20">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white text-lg">✔</span>
                  </div>
                  <div>
                     <div className="text-white font-bold text-lg">Meta Verified</div>
                     <div className="text-green-400 text-sm">Instant Trust</div>
                  </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Omni Channel Centralization */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                 Omni Channel Messaging In <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">One Centralized Platform.</span>
               </h2>
               <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                 Customers contact businesses from multiple sources. Connect every communication channel together and handle everything from one single CRM screen.
               </p>
            </div>

            <div className="relative h-64 md:h-80 max-w-4xl mx-auto flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1),_transparent_60%)]" />
               
               {/* Center CRM Core */}
               <motion.div className="relative z-20 w-32 h-32 rounded-3xl bg-slate-800 border border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center backdrop-blur-xl">
                  <div className="text-center">
                     <div className="text-3xl mb-1">💻</div>
                     <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Unified CRM</div>
                  </div>
               </motion.div>

               {/* Orbiting Channels */}
               {[
                 { label: 'WhatsApp', color: 'bg-green-500', pos: '-translate-y-24 -translate-x-32' },
                 { label: 'Facebook', color: 'bg-blue-600', pos: '-translate-y-24 translate-x-32' },
                 { label: 'Instagram', color: 'bg-pink-500', pos: 'translate-y-24 -translate-x-32' },
                 { label: 'Website Chat', color: 'bg-purple-500', pos: 'translate-y-24 translate-x-32' },
                 { label: 'RCS/API', color: 'bg-indigo-500', pos: 'translate-x-48' },
                 { label: 'Emails', color: 'bg-sky-500', pos: '-translate-x-48' }
               ].map((channel, i) => (
                 <motion.div 
                   key={i} 
                   animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                   className={`absolute ${channel.pos} z-10 flex items-center gap-3 bg-slate-900 border border-white/10 px-5 py-3 rounded-full shadow-lg`}
                 >
                   <div className={`w-3 h-3 rounded-full ${channel.color} animate-pulse`} />
                   <span className="text-base font-bold text-slate-200">{channel.label}</span>
                 </motion.div>
               ))}

               {/* Animated Connection Lines */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <circle cx="50%" cy="50%" r="140" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                  <circle cx="50%" cy="50%" r="220" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_30s_linear_infinite_reverse]" />
               </svg>
            </div>
         </div>
      </section>

      {/* 3. AI Chatbot & Trigger Automation (Grid Layout) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* AI Chatbot */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 ring-1 ring-blue-500/30 mb-6">
                24/7 Intelligent Responses
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">AI Chatbot Replies When <br /><span className="text-blue-400">Your Team Is Offline.</span></h2>
              <p className="text-lg text-blue-100/70 mb-6 leading-relaxed">
                Customers ask questions at any time. Our intelligent chatbot automation instantly handles conversations, inquiries, pricing sharing, and bookings without human delay.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-base text-blue-100/70">
                 {['Auto inquiry collection', 'Price & Catalog sharing', 'Appointment booking', 'Complaint registration', 'Payment information', 'Order tracking'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-blue-400" /> {item}
                    </li>
                 ))}
              </ul>
            </motion.div>
            
            {/* Real-time Switching Mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative bg-slate-900/60 rounded-3xl border border-white/10 p-8 overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10" />
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                     <span className="text-2xl">🤝</span> Human + Bot Combination
                  </h3>
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl border border-white/5">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-3xl">🤖</div>
                        <div>
                           <div className="text-base font-bold text-white">Bot Handling Initial Chat</div>
                           <div className="text-sm text-slate-400 mt-1">Collecting requirements & FAQs</div>
                        </div>
                     </div>
                     <div className="flex justify-center">
                        <div className="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                     </div>
                     <div className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-3xl">👩‍💻</div>
                        <div>
                           <div className="text-base font-bold text-purple-300">Live Executive Takes Over</div>
                           <div className="text-sm text-slate-400 mt-1">Advanced sales & complex support</div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Trigger Automation Workflow */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1 relative bg-slate-900/60 rounded-3xl border border-white/10 p-8 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-blue-500/10" />
               <div className="relative z-10 flex flex-col gap-6">
                  {/* Timeline Flow */}
                  {[
                     { action: 'Form Submission', icon: '📝', msg: 'Sends Welcome Brochure' },
                     { action: 'Payment Overdue', icon: '💸', msg: 'Sends Reminder + Link' },
                     { action: 'Order Dispatched', icon: '📦', msg: 'Sends Tracking Info' }
                  ].map((flow, i) => (
                     <div key={i} className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-2xl z-10">{flow.icon}</div>
                        <div className="flex-1 h-1 bg-gradient-to-r from-slate-700 to-purple-500/50" />
                        <div className="bg-purple-500/10 border border-purple-500/30 px-5 py-3 rounded-lg text-base font-medium text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                           {flow.msg}
                        </div>
                     </div>
                  ))}
               </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 ring-1 ring-purple-500/30 mb-6">
                Automated Workflows
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Trigger Based Auto <br /><span className="text-purple-400">Messaging System.</span></h2>
              <p className="text-lg text-blue-100/70 mb-6 leading-relaxed">
                Manual follow-up is why businesses lose leads. Send messages automatically based on customer actions without depending on manual staff effort.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                 {['Missed Calls', 'Payment Reminders', 'Order Updates', 'Feedback Requests', 'Birthday Wishes', 'Lead Inactive'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 text-sm font-medium rounded-full border border-white/5">{tag}</span>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Bulk Campaign & Analytics (SaaS Dashboard UI) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                 Bulk Marketing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Campaign Broadcasting.</span>
               </h2>
               <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                 Send promotional offers, multimedia catalogs, and event invitations to thousands of contacts instantly with complete response analytics.
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
               {/* Left: Performance Chart */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-[2rem] p-8 relative overflow-hidden">
                  <h3 className="text-2xl font-bold text-white mb-8">Campaign Performance Measurement</h3>
                  <div className="flex justify-between mb-10">
                     <div><div className="text-base text-slate-400">Total Sent</div><div className="text-3xl font-bold text-blue-400">45,280</div></div>
                     <div><div className="text-base text-slate-400">Delivered</div><div className="text-3xl font-bold text-purple-400">98.5%</div></div>
                     <div><div className="text-base text-slate-400">Read Rate</div><div className="text-3xl font-bold text-green-400">72.1%</div></div>
                     <div><div className="text-base text-slate-400">Click Rate</div><div className="text-3xl font-bold text-sky-400">24.8%</div></div>
                  </div>
                  {/* SVG Line Chart Mockup */}
                  <div className="relative h-40 w-full flex items-end">
                     <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,80 Q20,60 40,70 T80,30 T100,10" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        <path d="M0,90 Q20,80 40,85 T80,60 T100,40" fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                     </svg>
                  </div>
               </motion.div>

               {/* Right: Campaign Features */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl mb-2">🚀</div>
                  <h3 className="text-2xl font-bold text-white">One Click Broadcast</h3>
                  <p className="text-base text-slate-400 mb-4 leading-relaxed">Easier and cheaper than traditional advertising. Personalize messages with media support.</p>
                  <ul className="space-y-4 text-base text-slate-300">
                     <li className="flex items-center gap-3">✔ Segmented customer lists</li>
                     <li className="flex items-center gap-3">✔ PDF & Product Catalog sharing</li>
                     <li className="flex items-center gap-3">✔ Retarget inactive leads automatically</li>
                  </ul>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 5. API Integration & Customer Database */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 ring-1 ring-blue-500/30 mb-6">
                End To End Automation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">API Campaigning & <br /><span className="text-blue-400">3rd Party Integration.</span></h2>
              <p className="text-lg text-blue-100/70 mb-6 leading-relaxed">
                Connect our automation system with almost any business software or website. Whenever an event happens in your software, messages trigger automatically.
              </p>
              <div className="grid grid-cols-2 gap-5">
                 {['Ecommerce Portals', 'Billing Software', 'Hospital Systems', 'Payment Gateways'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl text-base font-medium text-slate-300">
                       <span className="text-blue-500 text-xl">⚡</span> {item}
                    </div>
                 ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative bg-slate-900 border border-slate-800 rounded-[2rem] p-8">
               <h3 className="text-2xl font-bold text-white mb-6">Complete Contact Database & Intelligence</h3>
               <p className="text-base text-slate-400 mb-8 leading-relaxed">Every conversation automatically becomes part of your customer database giving you strong intelligence for repeat sales.</p>
               <div className="space-y-4">
                  {['Lead Category & Source', 'Purchase Status', 'Follow-up Date', 'Campaign Response History'].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-white/5">
                        <span className="text-base font-medium text-slate-200">{item}</span>
                        <div className="w-5 h-5 rounded-full border-2 border-blue-500/50 flex items-center justify-center">
                           <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        </div>
                     </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Best Suitable For (Grid) */}
      <section className="relative z-10 py-20 bg-slate-900/50 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-300 mb-10 uppercase tracking-widest">Industries We Automate</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {['Hospitals', 'Schools & Colleges', 'Coaching Institutes', 'Ecommerce Stores', 'Finance Companies', 'Real Estate', 'Retail Chains', 'Customer Support'].map((ind, i) => (
                 <span key={i} className="px-6 py-3 bg-slate-800 text-blue-200 rounded-full border border-blue-500/20 hover:border-blue-400 transition-colors cursor-default">
                    {ind}
                 </span>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Call to Action Banner */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden shadow-[0_0_80px_rgba(37,99,235,0.2)] border border-blue-500/30 backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10">
               <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
               </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Turn Every Message Into <br /> A Business Opportunity.
              </h2>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                Stop managing leads manually across phones and social apps. Get 24x7 technical support, setup assistance, and continuous platform monitoring from our team.
              </p>
              <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full text-lg shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:bg-blue-500 hover:scale-105 transition-all">
                Start Automating Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
