"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Send, CheckCircle2 } from "lucide-react";

export default function CareerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center"
      >
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
        <p className="text-gray-400 mb-8">
          Thank you for your interest in joining Clicknovation Technologies. Our recruitment team will review your profile and get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 transition-all rounded-xl font-semibold"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
          <input
            required
            type="text"
            placeholder="John Doe"
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
          <input
            required
            type="email"
            placeholder="john@example.com"
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Mobile Number</label>
          <input
            required
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Position Applying For</label>
          <select
            required
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white appearance-none cursor-pointer"
          >
            <option className="bg-[#0a0a0a]" value="">Select Position</option>
            <option className="bg-[#0a0a0a]" value="software-dev">Software & Web Development</option>
            <option className="bg-[#0a0a0a]" value="mobile-dev">Mobile App Development</option>
            <option className="bg-[#0a0a0a]" value="ui-ux">UI/UX & Graphic Design</option>
            <option className="bg-[#0a0a0a]" value="marketing">Digital Marketing & SEO</option>
            <option className="bg-[#0a0a0a]" value="business">Business Development</option>
            <option className="bg-[#0a0a0a]" value="cloud">Network & Cloud</option>
            <option className="bg-[#0a0a0a]" value="internship">Internship / Fresher</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Years of Experience</label>
          <input
            required
            type="text"
            placeholder="e.g. 2 Years / Fresher"
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Upload Resume (PDF)</label>
          <div className="relative group">
            <input
              required
              type="file"
              accept=".pdf,.doc,.docx"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 text-gray-400 group-hover:bg-white/10 transition-all border-dashed">
              <Upload className="w-5 h-5 text-blue-400" />
              <span>Choose file...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400 ml-1">Cover Message (Optional)</label>
        <textarea
          rows={4}
          placeholder="Tell us a bit about yourself and why you want to join us..."
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600 resize-none"
        ></textarea>
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
        ) : (
          <>
            <span>Submit Application</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-gray-500 text-sm">
        By submitting, you agree to our recruitment terms and conditions.
      </p>
    </form>
  );
}
