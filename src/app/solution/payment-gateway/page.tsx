'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function PaymentGatewayIntegration() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans">
      {/* Fintech Background Gradients (Blue + Cyan) */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.15),_transparent_50%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      {/* 1. Hero Section (Digital Payment Dashboard Mockup) */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-base text-cyan-300 ring-1 ring-cyan-500/30 backdrop-blur-md">
                <span className="flex items-center justify-center w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                End-To-End Payment Automation
              </div>
              
              <div className="flex flex-col leading-[1.1] tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white">
                  Smart Payment
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-1 pb-2">
                  Collection Engine.
                </span>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Automate your complete payment journey — from invoice generation to successful collection, split settlement, and CRM synchronization. Built for modern digital businesses.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                 <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Integrate Payments
                 </button>
                 <button className="px-8 py-4 bg-slate-800/50 text-white font-bold rounded-full border border-white/10 hover:bg-slate-800 transition-all backdrop-blur-md">
                    View Supported APIs
                 </button>
              </div>
            </motion.div>

            {/* Fintech Dashboard Animation Mockup */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative aspect-square flex items-center justify-center">
               <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[120px]" />
               
               {/* Main Dashboard Card */}
               <div className="relative w-full h-[85%] bg-slate-900/80 rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(6,182,212,0.15)] backdrop-blur-xl overflow-hidden flex flex-col p-6">
                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">₹</div>
                        <div>
                           <div className="text-white font-bold text-lg">Total Collections</div>
                           <div className="text-slate-400 text-sm">Today, 24 May</div>
                        </div>
                     </div>
                     <div className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">+14.5%</div>
                  </div>

                  <div className="text-5xl font-black text-white mb-8 tracking-tight">₹ 8,45,290.<span className="text-slate-500">00</span></div>

                  <div className="space-y-4">
                     {/* Animated Payment Success Row */}
                     <motion.div animate={{ y: [20, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.5 }} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✔</div>
                           <div>
                              <div className="text-white font-bold text-sm">Invoice #INV-2940</div>
                              <div className="text-slate-400 text-xs">UPI Transaction</div>
                           </div>
                        </div>
                        <div className="text-white font-bold">+₹12,500</div>
                     </motion.div>

                     {/* Recurring Debit Row */}
                     <motion.div animate={{ y: [20, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 1 }} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">🔄</div>
                           <div>
                              <div className="text-white font-bold text-sm">Subscription Auto-Debit</div>
                              <div className="text-slate-400 text-xs">Credit Card ending 4092</div>
                           </div>
                        </div>
                        <div className="text-white font-bold">+₹4,999</div>
                     </motion.div>
                  </div>
               </div>

               {/* Floating API Success Card */}
               <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-8 bottom-1/4 bg-slate-800/90 border border-cyan-500/30 p-5 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-4 z-20">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-2xl">⚡</div>
                  <div>
                     <div className="text-white font-bold text-lg">Webhook Success</div>
                     <div className="text-cyan-400 text-sm">CRM Synced Instantly</div>
                  </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Integration Partners Strip */}
      <section className="relative z-10 py-10 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto overflow-hidden flex">
            <div className="flex space-x-16 animate-[loop_30s_linear_infinite] whitespace-nowrap items-center opacity-70">
               {['RAZORPAY', 'BILLDESK', 'EASEBUZZ', 'ZOHO PAYMENTS', 'PAYTM', 'CASHFREE', 'STRIPE'].map((gateway, i) => (
                  <span key={i} className="text-2xl font-black text-slate-400 tracking-widest">{gateway}</span>
               ))}
               {['RAZORPAY', 'BILLDESK', 'EASEBUZZ', 'ZOHO PAYMENTS', 'PAYTM', 'CASHFREE', 'STRIPE'].map((gateway, i) => (
                  <span key={`dup-${i}`} className="text-2xl font-black text-slate-400 tracking-widest">{gateway}</span>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Direct Payment Checkout Animation */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 ring-1 ring-blue-500/30 mb-6">
                Direct Integration
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Frictionless Direct <br /><span className="text-blue-400">Checkout Experience.</span></h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Allow customers to pay directly inside your website, mobile app, or software portal without manual transfer processes. Support for UPI, Cards, Net Banking, and Wallets natively.
              </p>
              
              {/* Timeline list */}
              <div className="space-y-6 mt-8">
                 {[
                   { step: '1', title: 'Invoice Generated', desc: 'System auto-creates payment link.' },
                   { step: '2', title: 'Customer Pays Online', desc: 'Secure checkout with preferred method.' },
                   { step: '3', title: 'Auto Callback & CRM Sync', desc: 'Receipt sent, CRM instantly updated.' }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-500/30">{item.step}</div>
                          {i !== 2 && <div className="w-0.5 h-10 bg-slate-800 my-1" />}
                       </div>
                       <div>
                          <h4 className="text-white font-bold text-lg">{item.title}</h4>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>

            {/* Direct Checkout Mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex flex-col items-center shadow-2xl">
               <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="bg-slate-50 p-6 border-b border-slate-200">
                     <div className="text-slate-500 text-sm mb-1">Paying Clicknovation Tech</div>
                     <div className="text-slate-900 text-3xl font-bold">₹ 12,500.00</div>
                  </div>
                  <div className="p-6 space-y-4">
                     <div className="text-sm font-bold text-slate-900 mb-2">Select Payment Method</div>
                     {/* UPI */}
                     <div className="p-4 border-2 border-blue-500 rounded-xl flex items-center justify-between cursor-pointer bg-blue-50">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-blue-100 rounded text-blue-600 flex items-center justify-center font-bold text-xs">UPI</div>
                           <span className="font-bold text-blue-900">UPI / QR Code</span>
                        </div>
                        <div className="w-4 h-4 rounded-full border-4 border-blue-500" />
                     </div>
                     {/* Cards */}
                     <div className="p-4 border border-slate-200 rounded-xl flex items-center gap-3 cursor-pointer">
                        <div className="w-8 h-8 bg-slate-100 rounded text-slate-500 flex items-center justify-center font-bold text-xs">💳</div>
                        <span className="font-bold text-slate-700">Credit / Debit Card</span>
                     </div>
                     <button className="w-full py-4 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">Pay ₹ 12,500.00</button>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Split Payment Distribution Infographic */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-500/30 mb-6">
                 Advanced Logic
               </div>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                 Split Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Distribution.</span>
               </h2>
               <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                 Perfect for Marketplaces, Franchises, and Aggregators. Automatically distribute a single customer payment to multiple parties through API logic without manual accounting.
               </p>
            </div>

            {/* Split UI Infographic */}
            <div className="relative max-w-5xl mx-auto h-[400px] flex items-center justify-center">
               
               {/* Main Source Node */}
               <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="absolute left-0 lg:left-10 z-20">
                  <div className="w-32 h-32 rounded-3xl bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.4)] flex flex-col items-center justify-center border-2 border-white/20">
                     <span className="text-3xl font-black text-white">₹1000</span>
                     <span className="text-xs font-bold text-blue-200">Customer Pays</span>
                  </div>
               </motion.div>

               {/* Connection Lines */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block">
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M 160 200 L 400 200" stroke="#06b6d4" strokeWidth="4" strokeDasharray="8 8" fill="none" className="animate-[pulse_2s_infinite]" />
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} d="M 500 200 Q 600 200 700 100" stroke="#a855f7" strokeWidth="3" fill="none" />
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.2 }} d="M 500 200 L 700 200" stroke="#3b82f6" strokeWidth="3" fill="none" />
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.4 }} d="M 500 200 Q 600 200 700 300" stroke="#10b981" strokeWidth="3" fill="none" />
               </svg>

               {/* Gateway Node */}
               <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="absolute z-20">
                  <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex flex-col items-center justify-center">
                     <span className="text-2xl">⚡</span>
                     <span className="text-[10px] font-bold text-cyan-400 text-center leading-tight mt-1">Gateway<br/>Split Logic</span>
                  </div>
               </motion.div>

               {/* Destination Nodes */}
               <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} viewport={{ once: true }} className="absolute right-0 lg:right-10 top-10 md:top-[80px] z-20 hidden md:flex items-center gap-4 bg-slate-800 border border-purple-500/30 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">₹850</div>
                  <div>
                     <div className="text-white font-bold text-sm">Vendor Share</div>
                     <div className="text-slate-400 text-xs">Auto Settlement</div>
                  </div>
               </motion.div>

               <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.2 }} viewport={{ once: true }} className="absolute right-0 lg:right-10 z-20 hidden md:flex items-center gap-4 bg-slate-800 border border-blue-500/30 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">₹100</div>
                  <div>
                     <div className="text-white font-bold text-sm">Platform Fee</div>
                     <div className="text-slate-400 text-xs">Your Revenue</div>
                  </div>
               </motion.div>

               <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.4 }} viewport={{ once: true }} className="absolute right-0 lg:right-10 bottom-10 md:bottom-[80px] z-20 hidden md:flex items-center gap-4 bg-slate-800 border border-green-500/30 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">₹50</div>
                  <div>
                     <div className="text-white font-bold text-sm">Tax / Agent</div>
                     <div className="text-slate-400 text-xs">Separate Account</div>
                  </div>
               </motion.div>

               {/* Mobile View Destinations */}
               <div className="absolute -bottom-20 w-full md:hidden flex flex-col gap-4">
                  <div className="flex items-center gap-4 bg-slate-800 border border-purple-500/30 p-4 rounded-xl">
                     <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">₹850</div>
                     <div><div className="text-white font-bold text-sm">Vendor Share</div></div>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-800 border border-blue-500/30 p-4 rounded-xl">
                     <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">₹150</div>
                     <div><div className="text-white font-bold text-sm">Platform Fee & Tax</div></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. CRM Linked Payment Automation Workflow */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             {/* Left: Animated Reminders / WhatsApp Mockup */}
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1 relative h-96 bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-blue-500/10" />
                
                {/* Invoice generation -> WhatsApp */}
                <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
                   {/* Fake Invoice UI */}
                   <div className="bg-slate-800 border border-slate-700 w-full p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="text-2xl">📄</div>
                         <div>
                            <div className="text-white text-sm font-bold">Invoice #9082 Generated</div>
                            <div className="text-slate-400 text-xs">Amount: ₹4,500</div>
                         </div>
                      </div>
                   </div>

                   <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-500" />

                   {/* Fake WhatsApp Message */}
                   <div className="bg-[#128C7E] w-full p-4 rounded-xl rounded-tl-none shadow-lg self-start relative">
                      <div className="text-white text-sm leading-relaxed">
                         Dear Customer, your invoice for ₹4,500 is generated. <br/>
                         Please pay here: <span className="text-blue-200 underline">pay.link/inv9082</span>
                      </div>
                      <div className="text-right text-[10px] text-white/70 mt-1">10:42 AM ✔✔</div>
                   </div>
                </div>
             </motion.div>

             <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-300 ring-1 ring-green-500/30 mb-6">
                Connected Workflow
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">CRM Linked Payment <br /><span className="text-green-400">Collection Automation.</span></h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Payment is not only about checkout — it must communicate with your CRM. We build systems where invoices are generated, links are sent via WhatsApp/SMS, and pending dues are tracked automatically.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-slate-300">
                 {['Instant payment links', 'WhatsApp/SMS reminders', 'Auto receipt generation', 'Pending dues tracked', 'Failed payment alerts', 'CRM status updates'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-green-400" /> {item}
                    </li>
                 ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* New Section: Payment Automation Workflow Line */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-white/5 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative z-20">
               <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 ring-1 ring-blue-500/30 mb-6">
                 Beyond Basic Checkout
               </div>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                 End-To-End Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Automation Journey.</span>
               </h2>
               <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                 A payment gateway should do more than just accept money. Everything works instantly in real-time, with no manual payment checking or operator dependency.
               </p>
            </div>

            <div className="relative overflow-x-auto pb-10 hide-scrollbar mt-12">
               <div className="min-w-[1000px] flex items-center justify-between relative px-10 pt-8">
                  {/* Background Line */}
                  <div className="absolute top-1/2 left-16 right-16 h-1.5 bg-slate-800 -translate-y-1/2 z-0 rounded-full" />
                  
                  {/* Animated Progress Line */}
                  <motion.div initial={{ width: 0 }} whileInView={{ width: 'calc(100% - 128px)' }} transition={{ duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="absolute top-1/2 left-16 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 -translate-y-1/2 z-10 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

                  {/* Nodes */}
                  {[
                     { step: 1, title: 'Request Generated', icon: '📝' },
                     { step: 2, title: 'Customer Pays', icon: '💳' },
                     { step: 3, title: 'Gateway Verify', icon: '⚡' },
                     { step: 4, title: 'Success Callback', icon: '🔄' },
                     { step: 5, title: 'CRM Auto Update', icon: '💻' },
                     { step: 6, title: 'Receipt & Service', icon: '🚀' }
                  ].map((node, i) => (
                     <motion.div key={i} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.3 }} viewport={{ once: true }} className="relative z-20 flex flex-col items-center gap-4 w-32 group">
                        <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-cyan-500 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center justify-center text-2xl relative">
                           {node.icon}
                           <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-slate-900">{node.step}</div>
                        </div>
                        <div className="text-center font-bold text-white text-sm">{node.title}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* New Section: What We Offer */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-500/30 mb-6">
               Complete Service Suite
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-16">
               What We Offer In <span className="text-cyan-400">Payment Integration.</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                  { title: 'API Gateway Integration', desc: 'Securely connect gateway APIs with your website, mobile app, CRM, ERP, or custom software.' },
                  { title: 'Dynamic Payment Links', desc: 'Automatically generate payment links for pending dues, invoices, admissions, subscriptions.' },
                  { title: 'Auto Confirmation', desc: 'Instant confirmations to both customer and admin as soon as payment is successful.' },
                  { title: 'Invoice & Receipt', desc: 'Generate digital invoices, receipts, and transaction acknowledgements automatically.' },
                  { title: 'Customer Notification', desc: 'Send success, failure, and due reminders via WhatsApp, SMS, or Email instantly.' },
                  { title: 'Refund & Failure Handling', desc: 'Manage failed payments, pending callbacks, refund initiation, and retries systematically.' }
               ].map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all group">
                     <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors flex items-center justify-center font-bold mb-6 text-xl">✔</div>
                     <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                     <p className="text-slate-400 text-base leading-relaxed">{service.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* New Section: Why Businesses Choose Us */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-t border-white/5">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Why Businesses Choose Our <br /><span className="text-blue-400">Integration Solutions.</span></h2>
               <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Payment collection should never be a manual burden. We help businesses achieve faster collections with zero manual errors.
               </p>
               <div className="grid sm:grid-cols-2 gap-4 text-base text-slate-300 font-medium">
                  {[
                     'Faster collections', 'Less payment follow-up', 'Instant confirmation', 'Accurate records',
                     'Automated ledger updates', 'Lower human error', 'Better customer experience', 'Scalable online revenue'
                  ].map((benefit, i) => (
                     <div key={i} className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                        <span className="text-cyan-400">✦</span> {benefit}
                     </div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-900/50 to-slate-900 border border-blue-500/30 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
               <h3 className="text-3xl font-bold text-white mb-10 relative z-10">Technical Expertise</h3>
               <div className="space-y-8 relative z-10">
                  <div className="flex gap-5 items-start">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">🛠</div>
                     <div><h4 className="text-white font-bold text-lg mb-1">Customized Workflow</h4><p className="text-slate-400 text-sm leading-relaxed">We don&apos;t just provide generic checkout pages; we build payment systems according to your exact business process.</p></div>
                  </div>
                  <div className="flex gap-5 items-start">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">⚙</div>
                     <div><h4 className="text-white font-bold text-lg mb-1">Automation Focused</h4><p className="text-slate-400 text-sm leading-relaxed">Our goal is complete business workflow automation immediately after a payment is successfully processed.</p></div>
                  </div>
                  <div className="flex gap-5 items-start">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">🚀</div>
                     <div><h4 className="text-white font-bold text-lg mb-1">Fast Deployment</h4><p className="text-slate-400 text-sm leading-relaxed">From merchant credential setup to live testing, our team ensures smooth, compliant, and rapid implementation.</p></div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                 Built For High Volume <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Transactions.</span>
               </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {/* Reconciliation */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/30 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mb-6">📊</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Settlement & Reconciliation</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                     Automate success/failure callbacks, daily collection summaries, and refund tracking. Finance teams always know exactly what is settled.
                  </p>
                  {/* Mini Bar Chart */}
                  <div className="flex items-end gap-2 h-20 w-full mt-auto">
                     {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-500/30 rounded-t-sm group-hover:bg-blue-500 transition-colors" style={{ height: `${h}%` }} />
                     ))}
                  </div>
               </motion.div>

               {/* Recurring */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/30 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mb-6">🔄</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Recurring Auto-Debits</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                     Perfect for ISPs, SaaS, and coaching centers. Automated renewals, due date reminders, and e-mandate registration for subscription billing.
                  </p>
                  <div className="mt-auto bg-slate-800 rounded-xl p-4 border border-white/5 flex justify-between items-center">
                     <div>
                        <div className="text-white font-bold">Monthly Plan</div>
                        <div className="text-xs text-slate-400">Auto renews 1st of month</div>
                     </div>
                     <div className="w-8 h-4 bg-cyan-500 rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
                     </div>
                  </div>
               </motion.div>

               {/* API Security */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/30 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl mb-6">🔒</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Secure API Infrastructure</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                     We follow strict API architecture: Encrypted callback verification, webhook validation, and duplicate transaction prevention.
                  </p>
                  <div className="mt-auto space-y-2">
                     <div className="flex items-center gap-2 text-sm text-purple-300 bg-purple-500/10 p-2 rounded">
                        <span>✔</span> 256-bit Encryption
                     </div>
                     <div className="flex items-center gap-2 text-sm text-purple-300 bg-purple-500/10 p-2 rounded">
                        <span>✔</span> Signature Verification
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 7. Industries We Serve */}
      <section className="relative z-10 py-20 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-300 mb-10 uppercase tracking-widest">Industries We Automate</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {['Ecommerce Platforms', 'Hospitals', 'Coaching Institutes', 'Schools & Colleges', 'ISPs', 'SaaS Subscriptions', 'Utility Billing', 'Real Estate'].map((ind, i) => (
                 <span key={i} className="px-6 py-3 bg-slate-900 text-cyan-200 rounded-full border border-cyan-500/20 hover:border-cyan-400 transition-colors cursor-default font-medium">
                    {ind}
                 </span>
               ))}
            </div>
         </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.2)] border border-cyan-500/30 backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10">
               <div className="w-20 h-20 mx-auto rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-8">
                  <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
               </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Build A Seamless Payment <br /> Experience For Customers.
              </h2>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-12">
                Stop managing screenshots and delayed payment entries. Move to a smart, automated infrastructure where every payment gets collected, confirmed, and settled.
              </p>
              <button className="px-10 py-4 bg-cyan-500 text-slate-900 font-bold rounded-full text-lg shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:bg-cyan-400 hover:scale-105 transition-all">
                Talk to Integration Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
