'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  BriefcaseIcon, 
  Cog6ToothIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon, 
  LifebuoyIcon, 
  CurrencyDollarIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'End-to-End IT Solutions',
    description: 'We provide complete services from development to deployment and support, ensuring a smooth and hassle-free experience for your business.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Business-First Approach',
    description: 'We understand your goals and challenges before building solutions, so everything we create delivers real value and measurable results.',
    icon: BriefcaseIcon,
  },
  {
    title: 'Tailored to Your Needs',
    description: 'Every solution is designed specifically for your business, ensuring the right fit for your requirements, industry, and budget.',
    icon: Cog6ToothIcon,
  },
  {
    title: 'Quality and Security',
    description: 'We build systems that are stable, secure, and high-performing, keeping your data safe and your operations reliable.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Timely Delivery',
    description: 'We follow structured planning and efficient execution to deliver projects on time without compromising on quality.',
    icon: ClockIcon,
  },
  {
    title: 'Experienced Team',
    description: 'Our skilled professionals bring strong technical knowledge and practical experience to solve real business problems.',
    icon: UserGroupIcon,
  },
  {
    title: 'Ongoing Support',
    description: 'We provide continuous support, updates, and improvements to ensure your systems always perform at their best.',
    icon: LifebuoyIcon,
  },
  {
    title: 'Value for Investment',
    description: 'Our solutions are cost-effective and designed to give you maximum return without compromising quality.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Future-Ready Technology',
    description: 'We use modern tools and innovative approaches to help your business stay ahead in a competitive digital world.',
    icon: LightBulbIcon,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1c] text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
      {/* Tech Background Ambient Glows */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.1),_transparent_40%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-8 text-sm uppercase tracking-wider">
            Why Choose Us
          </div>
          
          <div className="flex flex-col leading-[1.1] sm:leading-[1.1] tracking-tight justify-center items-center text-center mb-10">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">
              Built on Trust.
            </span>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1 sm:mt-2">
              <span className="text-white">Driven by </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm pb-2">Innovation.</span>
            </div>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white mt-1 sm:mt-2">
              Focused on Results.
            </span>
          </div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We focus on delivering practical, reliable, and future-ready solutions that help your business grow with confidence.
          </p>
        </motion.div>

        {/* Editorial Numeric Glass Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] p-8 sm:p-10 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] flex flex-col overflow-hidden"
            >
              {/* Massive Editorial Number Watermark */}
              <div className="absolute -bottom-8 -right-4 text-9xl font-extrabold text-white/[0.02] group-hover:text-cyan-500/[0.05] transition-colors duration-500 select-none pointer-events-none tracking-tighter">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Glowing Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 inline-flex items-center justify-center text-cyan-400 group-hover:text-cyan-200 group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-12 h-12 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] stroke-[1.2]" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-cyan-300">
                  {feature.title}
                </h3>
                
                <div className="w-8 h-[2px] bg-slate-700 mb-5 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500"></div>

                <p className="text-slate-400 leading-relaxed text-base font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Multi-Card "Our Promise" Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 relative rounded-[2.5rem] bg-gradient-to-br from-white/[0.02] to-white/[0.04] border border-white/[0.08] p-8 sm:p-12 lg:p-16 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 p-40 bg-blue-500/10 mix-blend-screen filter blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 p-40 bg-cyan-500/10 mix-blend-screen filter blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
            {/* Left Header Section */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Our <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Promise</span>
              </h3>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-semibold mb-8">
                Your success is our priority. We build long-term partnerships on a foundation of core principles.
              </p>
              <div className="hidden lg:block h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
            </div>

            {/* Right Cards Section (Staggered Bento Grid) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Card 1: Transparency */}
              <div className="bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8 rounded-3xl hover:bg-white/[0.06] transition-all hover:-translate-y-1 flex flex-col items-start relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 p-16 bg-blue-500/5 mix-blend-screen filter blur-[40px] rounded-full pointer-events-none group-hover:bg-blue-500/15 transition-colors duration-500"></div>
                <div className="p-3 bg-white/[0.05] border border-white/10 rounded-2xl mb-5 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:scale-110 transition-transform">
                  <LightBulbIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Transparency</h4>
                <p className="text-slate-400 leading-relaxed font-medium">Clear communication and honest workflows at every stage of your project.</p>
              </div>

              {/* Card 2: Trust */}
              <div className="bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8 rounded-3xl hover:bg-white/[0.06] transition-all hover:-translate-y-1 flex flex-col items-start sm:translate-y-8 relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 p-16 bg-cyan-500/5 mix-blend-screen filter blur-[40px] rounded-full pointer-events-none group-hover:bg-cyan-500/15 transition-colors duration-500"></div>
                <div className="p-3 bg-white/[0.05] border border-white/10 rounded-2xl mb-5 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:scale-110 transition-transform">
                  <ShieldCheckIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Unwavering Trust</h4>
                <p className="text-slate-400 leading-relaxed font-medium">Reliable solutions and secure systems built strictly to protect your business.</p>
              </div>

              {/* Card 3: Performance */}
              <div className="bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8 rounded-3xl hover:bg-white/[0.06] transition-all hover:-translate-y-1 flex flex-col items-start sm:col-span-2 mt-4 sm:mt-12 relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 p-24 bg-blue-600/5 mix-blend-screen filter blur-[50px] rounded-full pointer-events-none group-hover:bg-blue-600/10 transition-colors duration-500"></div>
                <div className="p-3 bg-white/[0.05] border border-white/10 rounded-2xl mb-5 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:scale-110 transition-transform">
                  <Cog6ToothIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Consistent Performance</h4>
                <p className="text-slate-400 leading-relaxed font-medium max-w-2xl">We focus heavily on technical excellence, guaranteeing high-performing systems mapped to your operational goals.</p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}