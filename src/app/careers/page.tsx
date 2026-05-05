"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Users, 
  Cloud, 
  Headset, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Zap,
  Layers
} from "lucide-react";
import CareerForm from "@/components/CareerForm";
import Footer from "@/components/Footer";
import { useRef } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 100, 0],
        y: [0, 50, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
        x: [0, -100, 0],
        y: [0, -50, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]"
    />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
  </div>
);

const AnimatedGrid = () => (
  <div className="absolute inset-0 z-0 opacity-[0.15]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  </div>
);

export default function CareersPage() {
  const containerRef = useRef(null);
  
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 overflow-x-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <BackgroundElements />
        <AnimatedGrid />
        
        {/* Abstract Hero Graphics */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] border border-blue-500/5 rounded-full relative"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                className="absolute w-4 h-4 bg-blue-500/40 rounded-full blur-sm"
                style={{
                  top: `${50 + 45 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                  left: `${50 + 45 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                }}
              />
            ))}
          </motion.div>
        </div>

        <div className="container mx-auto relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-400 font-semibold mb-8 backdrop-blur-xl shadow-lg shadow-blue-500/5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Shape the Digital Future</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              Build Your Career <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 animate-gradient-x">
                Beyond Boundaries
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              At Clicknovation Technologies, we don&apos;t just offer jobs. We provide a launchpad for innovators who want to redefine what&apos;s possible in the tech world.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#apply"
                className="group relative px-10 py-5 bg-blue-600 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  View Openings <ArrowRight className="w-5 h-5" />
                </span>
              </motion.a>
              <motion.a 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                href="#culture"
                className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg backdrop-blur-xl transition-all"
              >
                Our DNA
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EVP Section - Interactive Glass Cards */}
      <section className="py-32 px-6 relative overflow-hidden" id="evp">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">A Platform For <span className="text-blue-500">Professional Excellence</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We empower our team members with the tools, environment, and challenges needed to reach their full potential.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Live Exposure", desc: "Work on diverse, high-impact technology projects that solve real business problems." },
              { icon: Layers, title: "Modern Stack", desc: "Gain mastery over modern software tools, cloud platforms, and cutting-edge frameworks." },
              { icon: TrendingUp, title: "Performance First", desc: "Recognition and rewards that move as fast as you do. Merit-based growth is our core." },
              { icon: Lightbulb, title: "Innovation Hub", desc: "We encourage ownership and provide the freedom to experiment with new ideas." },
              { icon: GraduationCap, title: "Continuous Learning", desc: "Practical development experience supplemented by structured mentorship programs." },
              { icon: Briefcase, title: "Industry Leadership", desc: "Build a resume that stands out. We prepare you for long-term IT industry leadership." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.06] transition-all relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-6 border border-white/10">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section - Dynamic Shapes */}
      <section className="py-32 px-6 bg-blue-600/[0.02] relative overflow-hidden" id="culture">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl font-black mb-8 leading-tight">Collaborative. <br/> Professional. <br/> <span className="text-blue-500">Innovation Driven.</span></h2>
              <div className="space-y-8">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our DNA is built on transparency and technical excellence. We maintain an environment where employees can share ideas freely and solve complex problems together.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Open Communication",
                    "Solution-Oriented Thinking",
                    "Client-Focused Execution",
                    "Technical Experimentation",
                    "Continuous Improvement",
                    "Healthy Work-Life Balance"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                      <span className="text-gray-400 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="relative grid grid-cols-2 gap-4 h-[500px]">
              {/* Abstract Culture Visual - No Images */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-end"
              >
                <Users className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-bold">One Connected Team</h4>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-indigo-600/10 border border-indigo-500/20 rounded-3xl p-8 mt-12"
              >
                <Cpu className="w-12 h-12 text-indigo-400 mb-4" />
                <h4 className="text-xl font-bold">Tech First</h4>
              </motion.div>
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="col-span-2 bg-gradient-to-r from-blue-500/5 to-transparent border border-white/10 rounded-3xl p-8 flex items-center gap-8"
              >
                <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#030712] bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center text-xs font-bold">
                      Dev
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-blue-400 font-bold">CULTURE</p>
                  <p className="text-lg font-semibold">Driven by talented minds</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Domains - Bento Style */}
      <section className="py-32 px-6" id="domains">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Career Domains</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore opportunities across multiple technology and business functions as we continue our global expansion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {[
              { icon: Code2, title: "Software & Web", color: "blue", span: "md:col-span-2" },
              { icon: Smartphone, title: "Mobile Dev", color: "indigo" },
              { icon: Palette, title: "UI/UX & Design", color: "purple" },
              { icon: TrendingUp, title: "Marketing", color: "blue" },
              { icon: Users, title: "Business Dev", color: "indigo", span: "md:col-span-2" },
              { icon: Cloud, title: "Cloud & Infra", color: "blue" },
              { icon: Headset, title: "Support", color: "indigo" },
              { icon: Cpu, title: "AI & Automation", color: "blue", span: "md:col-span-2" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group ${item.span || ""}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">Regularly building talent across this specialized department.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process - Modern Simple Structure */}
      <section className="py-32 px-6 relative" id="process">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <motion.div {...fadeIn} className="lg:w-1/3 lg:sticky lg:top-32">
                <div className="inline-block px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm mb-6 uppercase tracking-widest">
                  Our Journey Together
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6">How We <span className="text-blue-500">Hire</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We&apos;ve streamlined our recruitment process to be as efficient and transparent as possible. We value your time and aim to provide a professional experience from day one.
                </p>
                
                <div className="mt-12 p-6 rounded-3xl bg-blue-600/5 border border-blue-500/10 hidden lg:block">
                  <p className="text-sm text-blue-400 font-bold mb-2">PRO TIP</p>
                  <p className="text-sm text-gray-400">Be yourself, showcase your passion for technology, and don&apos;t be afraid to ask us questions about our culture and projects.</p>
                </div>
              </motion.div>

              <div className="lg:w-2/3 relative">
                {/* Vertical Progress Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent hidden md:block"></div>
                
                <div className="space-y-12">
                  {[
                    { step: "01", title: "Application Review", desc: "Our recruitment experts analyze your profile against our core values and technical requirements." },
                    { step: "02", title: "Discovery Call", desc: "A brief telephonic discussion to understand your career aspirations and introduce you to our vision." },
                    { step: "03", title: "Technical Synergy", desc: "Deep dive into your skills through practical assessments or technical discussions with our leads." },
                    { step: "04", title: "Culture Alignment", desc: "A final conversation to ensure our workplace environment and your professional goals are a perfect match." },
                    { step: "05", title: "Welcome Aboard", desc: "Formal offer and a smooth onboarding process to kickstart your journey with Clicknovation." }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-0 md:pl-20 group"
                    >
                      {/* Step Indicator Dot */}
                      <div className="absolute left-[28px] top-1.5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] z-10 hidden md:block group-hover:scale-150 transition-transform"></div>
                      
                      <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] group-hover:border-blue-500/20 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                          <div className="text-4xl font-black text-white/10 group-hover:text-blue-500/20 transition-colors shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-xl">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section - Abstract Glass */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-12 md:p-20 rounded-[48px] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 relative overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
            
            <motion.div {...fadeIn} className="relative z-10 max-w-3xl mx-auto">
              <GraduationCap className="w-16 h-16 text-blue-400 mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-black mb-8">Start Your Journey with <span className="text-blue-500">Practical Exposure</span></h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Our internship and fresher programs are designed to help students transition from academic knowledge to real implementation confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["Web Dev", "Testing", "Design", "Marketing", "Support", "Networking"].map((tag, i) => (
                  <span key={i} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 font-medium">{tag}</span>
                ))}
              </div>
              <p className="text-blue-400 font-bold text-lg">&quot;We believe fresh talent becomes stronger when given real responsibility.&quot;</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 px-6 relative" id="apply">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div {...fadeIn}>
              <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mb-10 border border-blue-500/20">
                <Briefcase className="w-10 h-10 text-blue-400" />
              </div>
              <h2 className="text-5xl font-black mb-8 leading-tight">Join the <br/><span className="text-blue-500">Innovation Team</span></h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Even if there are no current openings listed, we are always looking for the right talent. Your next big career move starts with a simple application.
              </p>
              
              <div className="space-y-6">
                {[
                  "Continuous review of applications",
                  "Talent pool for future requirements",
                  "Direct connection with recruitment team",
                  "Professional growth focused culture"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] blur opacity-20"></div>
              <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[40px] relative z-10 shadow-2xl">
                <h3 className="text-3xl font-bold mb-2">Apply Now</h3>
                <p className="text-gray-400 mb-10">Fill the form below and we&apos;ll be in touch.</p>
                <CareerForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
}