"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  Globe, 
  Database, 
  Layout, 
  Sparkles,
  ArrowRight,
  ChevronRight,
  Briefcase,
  Building2,
  GraduationCap,
  Stethoscope,
  ShoppingCart,
  Cpu,
  Monitor,
  Smartphone,
  Share2,
  Network,
  Zap
} from "lucide-react";
import Footer from "@/components/Footer";

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

const projectCategories = [
  {
    id: "esmartgram",
    label: "Esmartgram",
    icon: Building2,
    projects: [
      { name: "Grampanchayat Madgi", type: "Digital Village Portal", details: "Official digital administration hub" },
      { name: "Grampanchayat Kesalwada Pawar", type: "Digital Village Portal", details: "Community governance platform" },
      { name: "Grampanchayat Khairi Walmazari", type: "Digital Village Portal", details: "Integrated village management" },
    ]
  },
  {
    id: "school",
    label: "School",
    icon: GraduationCap,
    projects: [
      { name: "Future Podar School Sakoli", type: "Website + School CRM", details: "Comprehensive educational management system" },
    ]
  },
  {
    id: "hospital",
    label: "Hospital",
    icon: Stethoscope,
    projects: [
      { name: "Dr. Krishna Meshram", type: "Website + Brand Building", details: "Healthcare identity and patient portal" },
    ]
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    icon: ShoppingCart,
    projects: [
      { name: "Swanandji", type: "Automation & Prototyping", details: "Complete business automation solution" },
    ]
  },
  {
    id: "crm",
    label: "CRM Solutions",
    icon: Cpu,
    projects: [
      { name: "School Management Software", type: "ERP Solution", details: "End-to-end institutional management" },
      { name: "Hospital Management Software", type: "Healthcare ERP", details: "Patient and facility management" },
      { name: "Election Management Software", type: "Political CRM", details: "Voter data and campaign analytics" },
      { name: "Coaching Management Software", type: "LMS Portal", details: "Student progress and course tracking" },
      { name: "Study Centers Management", type: "Library System", details: "Resource and member management" },
      { name: "Cosmos Lead Management", type: "Custom Prototyping", details: "Fully customized sales funnel automation" },
    ]
  },
  {
    id: "apps",
    label: "Apps",
    icon: Smartphone,
    projects: [
      { name: "Doctors Appointment App", type: "Mobile Application", details: "Real-time booking and consultation" },
      { name: "Auto Booking App", type: "Utility App", details: "Service on-demand marketplace" },
    ]
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Share2,
    projects: [
      { name: "GP Khairi Walmazari", type: "Social Media Branding", details: "Rural digital reach initiative" },
      { name: "GP Kesalwada Pawar", type: "Content Creation", details: "Village highlight campaigns" },
      { name: "GP Madgi", type: "Digital Marketing", details: "Social outreach and branding" },
      { name: "Sakoli Nagar Parishad Election", type: "Candidate Content", details: "Strategic political content creation" },
    ]
  },
  {
    id: "infra",
    label: "Infrastructure",
    icon: Network,
    projects: [
      { name: "Infoorigin Technologies", type: "IT Infrastructure", details: "Enterprise network deployment" },
      { name: "Lokmangal Sahakari Pathsansta", type: "Banking Networks", details: "Secure financial data infrastructure" },
      { name: "Vidharbha Nidhi Bank", type: "Network Security", details: "Mission-critical banking systems" },
      { name: "Panchayat Samiti Sakoli", type: "Gov Infrastructure", details: "Local government network hub" },
      { name: "Panchayat Samiti Mohadi", type: "Network Setup", details: "Administrative data connectivity" },
      { name: "Tuli Suites Sakoli", type: "End-to-End Prototype", details: "Hospitality tech infrastructure" },
    ]
  },
  {
    id: "smart",
    label: "Smart Projects",
    icon: Zap,
    projects: [
      { name: "Smart City Projects", type: "Urban Transformation", details: "Strategic planning for smart cities" },
      { name: "Smart Village Projects", type: "Rural Digitalization", details: "Empowering villages through technology" },
    ]
  }
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState(projectCategories[0].id);

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        <BackgroundElements />
        <AnimatedGrid />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-left max-w-3xl"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-400 font-semibold mb-8 backdrop-blur-xl shadow-lg shadow-blue-500/5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Excellence in Execution</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
                Our Delivered <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 animate-gradient-x">
                  Projects
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-8 leading-tight">
                Real Work. Real Results. <br /> Built Across Multiple Domains.
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
                At Clicknovation Technologies, our work reflects our ability to understand different industries and deliver practical digital solutions that create real impact. From Grampanchayat websites and school platforms to healthcare branding, CRM systems, ecommerce automation, mobile apps, infrastructure projects, and digital marketing campaigns.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#categories"
                  className="group relative px-10 py-5 bg-blue-600 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/40 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center gap-2">
                    Explore Portfolio <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.a>
                <motion.a 
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  href="/contact"
                  className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg backdrop-blur-xl transition-all"
                >
                  Discuss Project
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Animated Project Domain Visualization */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Central Hub */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    boxShadow: ["0 0 40px rgba(59,130,246,0.3)", "0 0 80px rgba(59,130,246,0.6)", "0 0 40px rgba(59,130,246,0.3)"]
                  }}
                  transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, boxShadow: { duration: 4, repeat: Infinity } }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[40px] flex items-center justify-center border border-white/20 z-10"
                >
                  <Rocket className="w-20 h-20 text-white" />
                  
                  {/* Rotating Outer Rings */}
                  <div className="absolute inset-0 -m-4 border border-blue-500/30 rounded-[50px] animate-spin-slow"></div>
                  <div className="absolute inset-0 -m-8 border border-indigo-500/20 rounded-[60px] animate-spin-reverse-slow"></div>
                </motion.div>

                {/* Orbiting Domain Icons */}
                {[
                  { icon: Building2, label: "Gov", angle: 0, color: "blue" },
                  { icon: GraduationCap, label: "Edu", angle: 72, color: "indigo" },
                  { icon: Stethoscope, label: "Med", angle: 144, color: "blue" },
                  { icon: ShoppingCart, label: "Shop", angle: 216, color: "indigo" },
                  { icon: Network, label: "Infra", angle: 288, color: "blue" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      x: [Math.cos((item.angle * Math.PI) / 180) * 200, Math.cos(((item.angle + 360) * Math.PI) / 180) * 200],
                      y: [Math.sin((item.angle * Math.PI) / 180) * 200, Math.sin(((item.angle + 360) * Math.PI) / 180) * 200],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 0 }}
                      className={`w-20 h-20 bg-[#0a0a0a] border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl group-hover:border-${item.color}-500/50 transition-all`}
                    >
                      <item.icon className={`w-8 h-8 text-${item.color}-400 mb-1`} />
                      <span className="text-[10px] font-bold text-gray-500 uppercase">{item.label}</span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating Data Streams */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5],
                      x: [0, (i % 2 === 0 ? 300 : -300)],
                      y: [0, (i < 2 ? 300 : -300)]
                    }}
                    transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full blur-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Numbers That Reflect Our <span className="text-blue-500">Work, Trust & Execution</span></h2>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              At Clicknovation Technologies, every number represents real project experience, practical execution, and long-term client trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "50+", label: "Projects Delivered" },
              { num: "20+", label: "Industries Served" },
              { num: "100%", label: "Custom Development" },
              { num: "5+", label: "Years of Execution" },
              { num: "24x7", label: "Technical Support", span: "md:col-span-2 lg:col-span-1" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-10 rounded-[40px] bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all relative overflow-hidden ${stat.span || ""}`}
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/15 transition-all"></div>
                
                <h3 className="text-6xl font-black text-blue-500 mb-6 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                  {stat.num}
                </h3>
                <h4 className="text-2xl font-bold text-white mb-4">{stat.label}</h4>
                
                <div className="mt-8 flex items-center gap-2 text-blue-400/50 group-hover:text-blue-400 transition-colors">
                  <div className="w-12 h-1 bg-blue-500/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                      className="w-full h-full bg-blue-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Categories Section */}
      <section className="py-24 px-6 relative border-t border-white/5" id="categories">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Suggested Project <span className="text-blue-500">Categories</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our diverse portfolio of successfully delivered projects across various technical and business domains.
            </p>
          </motion.div>

          {/* Category Buttons - Scrollable on Mobile */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap border ${
                  activeTab === category.id
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Project Display Area */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projectCategories.find(c => c.id === activeTab)?.projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.06] transition-all overflow-hidden"
                  >
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all"></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.details}
                    </p>

                    <div className="flex items-center gap-2 text-blue-400 font-bold text-sm group-hover:gap-3 transition-all">
                      Project Details <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}