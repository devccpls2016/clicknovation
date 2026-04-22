'use client';

import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c]">
      {/* Hexagonal mesh background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92' viewBox='0 0 60 103.92' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.32v34.64L30 69.28 0 51.96V17.32z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M30 103.92l30-17.32V51.96L30 69.28 0 51.96v34.64z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 103.92px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-8 text-sm uppercase tracking-wider">
            Who We Are
          </div>
          
          <div className="flex flex-col leading-[1.1] sm:leading-[1.1] tracking-tight mb-6 mt-2">
            {/* Line 1 */}
            <span className="text-5xl sm:text-7xl lg:text-8xl font-sans font-extrabold text-white">
              Empowering
            </span>
            
            {/* Line 2 */}
            <div className="text-5xl sm:text-7xl lg:text-8xl font-sans font-extrabold mt-1 sm:mt-2">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm">Future</span>
              <span className="text-white ml-3 sm:ml-5">with</span>
            </div>
            
            {/* Line 3 with Accent Cursor */}
            <div className="flex items-center text-4xl sm:text-6xl lg:text-7xl font-mono text-gray-200 mt-2 sm:mt-4">
              Innovation
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 1, ease: "linear", times: [0, 0.5, 1] }}
                className="ml-2 sm:ml-4 inline-block w-[4px] sm:w-[6px] h-[40px] sm:h-[60px] lg:h-[70px] bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
              />
            </div>
          </div>
          

        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Clicknovation Technologies helps businesses succeed in today’s digital world with simple, smart, and effective technology solutions. We assist organizations in improving their systems, boosting performance, and adopting modern, reliable, and scalable solutions that are easy to manage and support long-term growth and success.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-2">
              <div className="bg-slate-800/60 border border-slate-700/50 p-5 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-lg transition-transform hover:-translate-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-2">5+</span>
                <span className="text-sm font-medium text-slate-300 leading-tight">Years of<br/>Innovation</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/50 p-5 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-lg transition-transform hover:-translate-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-2">200+</span>
                <span className="text-sm font-medium text-slate-300 leading-tight">Successful<br/>Projects</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/50 p-5 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-lg transition-transform hover:-translate-y-1 col-span-2 sm:col-span-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-500 mb-2">50+</span>
                <span className="text-sm font-medium text-slate-300 leading-tight">Happy<br/>Clients</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Our Core Philosophy:</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Innovation with purpose
              </li>
              <li className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Technology with impact
              </li>
              <li className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Solutions with scalability
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}