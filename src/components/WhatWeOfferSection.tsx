'use client';

import { motion } from 'framer-motion';
import { 
  ComputerDesktopIcon, 
  GlobeAltIcon, 
  CloudIcon, 
  PresentationChartLineIcon, 
  VideoCameraIcon, 
  LightBulbIcon, 
  CogIcon, 
  LinkIcon, 
  WrenchScrewdriverIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web & App Development',
    description: 'We design and develop responsive websites and powerful mobile applications that are fast, user-friendly, and built to meet your business needs.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'Network Infrastructure',
    description: 'We plan, set up, and manage secure and reliable network systems that ensure smooth connectivity and strong performance for your organization.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Cloud Services',
    description: 'We help you move, manage, and scale your business on the cloud with secure and flexible solutions that improve efficiency and reduce costs.',
    icon: CloudIcon,
  },
  {
    title: 'Digital Marketing',
    description: 'We create effective digital marketing strategies to increase your online presence, attract customers, and grow your brand.',
    icon: PresentationChartLineIcon,
  },
  {
    title: 'CCTV & Security Solutions',
    description: 'We provide advanced surveillance and security systems to protect your business, assets, and people with reliable monitoring solutions.',
    icon: VideoCameraIcon,
  },
  {
    title: 'Business Consultancy',
    description: 'We guide businesses with the right strategies and technology solutions to improve operations, increase productivity, and achieve long-term growth.',
    icon: LightBulbIcon,
  },
  {
    title: 'Custom Software Solutions',
    description: 'We build customized software tailored to your specific business processes, helping you automate tasks and improve efficiency.',
    icon: CogIcon,
  },
  {
    title: 'System Integration',
    description: 'We connect different systems and technologies to work together smoothly, ensuring better performance and streamlined operations.',
    icon: LinkIcon,
  },
  {
    title: 'Support & Maintenance',
    description: 'We provide ongoing support and maintenance services to keep your systems updated, secure, and running without interruptions.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function WhatWeOfferSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1c] text-white py-32 px-4 sm:px-6 lg:px-8 border-y border-slate-800/50">
      {/* Dark Theme Dynamic Ambient Focus */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Dark Theme Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg mb-8 text-sm uppercase tracking-wider backdrop-blur-md">
            What We Offer
          </div>
          
          <div className="flex flex-col leading-[1.1] sm:leading-[1.1] tracking-tight justify-center items-center text-center mb-8">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">
              Complete Technology
            </span>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold mt-1 sm:mt-2">
              <span className="text-white">Solutions to </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text pb-2 inline-block drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                Power Your Business.
              </span>
            </div>
          </div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We provide a wide range of services designed to help your business grow, improve efficiency, and stay competitive in the digital world.
          </p>
        </motion.div>

        {/* Professional Dark-Mode Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-white/[0.02] border border-white/[0.08] p-8 sm:p-10 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] flex flex-col overflow-hidden"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] bg-white/[0.05] border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-200 transition-all duration-500 shadow-[inset_0_0_15px_rgba(59,130,246,0.1)]">
                  <service.icon className="w-8 h-8 stroke-[1.5] drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-400">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Dark-Theme Bento "Our Approach" Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 relative rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] p-8 sm:p-12 lg:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-3xl"
        >
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 p-40 bg-blue-600/10 filter blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 p-40 bg-cyan-500/10 filter blur-[100px] rounded-full pointer-events-none"></div>

          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">Approach</span>
              </h3>
              <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed font-semibold">
                We combine core pillars to deliver holistic, effective, and future-ready solutions perfectly tailored for you.
              </p>
          </div>

          {/* Staggered Horizontal Bento */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {/* Card 1 */}
              <div className="bg-white/[0.03] border border-white/[0.07] p-8 rounded-3xl hover:bg-white/[0.05] transition-all hover:-translate-y-2 flex flex-col items-start relative overflow-hidden group shadow-sm hover:border-cyan-500/30">
                <div className="p-3 bg-white/[0.05] border border-white/10 rounded-2xl mb-6 text-cyan-400 shadow-sm group-hover:scale-110 group-hover:text-cyan-200 transition-all">
                  <CpuChipIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Modern Technology</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                   Implementing scalable, fast, and highly secure technical foundations for every project.
                </p>
              </div>

              {/* Card 2 (Elevated) */}
              <div className="bg-white/[0.03] border border-white/[0.07] p-8 rounded-3xl hover:bg-white/[0.05] transition-all hover:-translate-y-2 flex flex-col items-start relative overflow-hidden group shadow-sm hover:border-blue-500/30 md:-translate-y-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl mb-6 text-blue-400 shadow-sm group-hover:scale-110 group-hover:text-blue-200 transition-all">
                  <RocketLaunchIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Driven Innovation</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                   Pushing boundaries to craft unique, engaging, and state-of-the-art user experiences.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/[0.03] border border-white/[0.07] p-8 rounded-3xl hover:bg-white/[0.05] transition-all hover:-translate-y-2 flex flex-col items-start relative overflow-hidden group shadow-sm hover:border-cyan-500/30">
                <div className="p-3 bg-white/[0.05] border border-white/10 rounded-2xl mb-6 text-cyan-400 shadow-sm group-hover:scale-110 group-hover:text-cyan-200 transition-all">
                  <CheckBadgeIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Practical Application</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                   Ensuring our high-end methods translate accurately into real-world business results.
                </p>
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}