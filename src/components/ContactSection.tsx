import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, CloudLightning } from 'lucide-react';
import CardParticles from './CardParticles';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Website Development',
    budget: '10K - 25K',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Track hover and coordinate details for contact container interactive particles
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    setMousePos({ x: relativeX, y: relativeY });
  };

  const projectTypes = [
    'Website Development',
    'Mobile App Development',
    'AI Agents & Automation',
    'Full Stack Portal',
    'Creative 3D App',
    'Other Bespoke Solution'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setLoading(true);
    // Simulate luxury-level database pipeline storage
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form
      setForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: 'Website Development',
        budget: '10K - 25K',
        message: ''
      });
    }, 1500);
  };

  return (
    <section 
      id="contact"
      className="relative py-28 px-6 md:px-10 max-w-5xl mx-auto z-15 min-h-screen flex flex-col justify-center border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left column: High end text briefings */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.65, scale: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37] uppercase"
            >
              LAUNCH PIPELINE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-2 font-display text-4xl font-light tracking-tight text-white uppercase leading-tight"
            >
              LET'S BUILD <br />
              <span className="text-[#D4AF37] font-semibold">SOMETHING</span> <br />
              AMAZING.
            </motion.h2>
          </div>

          <p className="font-sans text-xs text-gray-400 leading-relaxed">
            Ready to initiate a premium digital experience? Complete our secure project onboarding brief, and one of our master architects will contact you within 12 hours.
          </p>

          <div className="flex flex-col gap-4 mt-4 font-mono text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase">
            <span>• INFO@XENTRIQSTUDIO.COM</span>
            <a 
              href="https://wa.me/7824918457?text=Hi%20Xentriq%20Studio%20Team,%20I'm%20interested%20in%20partnering%20on%20a%20luxury%20digital%20solution." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <span>• WHATSAPP CHAT: +91 78249 18457</span>
              <span className="text-[7px] tracking-normal font-bold bg-[#D4AF37]/10 text-[#D4AF37] px-1.5 py-0.5 rounded-full border border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/30 group-hover:text-white transition-colors">SECURE LIVE</span>
            </a>
          </div>
        </div>

        {/* Right column: The Contact Form */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="lg:col-span-8 p-10 rounded-3xl bg-[#080808]/85 border border-[#D4AF37]/15 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
        >
          {/* Custom 3D active background particles */}
          <CardParticles isHovered={isHovered} mouseX={mousePos.x} mouseY={mousePos.y} count={45} />
          
          {/* Accent golden background blur */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col gap-6"
              >
                {/* Dual field inputs (Name & Email) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-gray-400 uppercase font-bold">Your Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Sterling Cooper"
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 focus:border-[#D4AF37] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-gray-400 uppercase font-bold">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. admin@sterling.com"
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 focus:border-[#D4AF37] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Dual field inputs (Company & Phone) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-gray-400 uppercase font-bold">Company / Organization</label>
                    <input 
                      type="text" 
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. Sterling Realty Group"
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 focus:border-[#D4AF37] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-gray-400 uppercase font-bold">Phone Number</label>
                    <input 
                      type="tel" 
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 019-2834"
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 focus:border-[#D4AF37] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Dropdowns selectors (Project Type & Budget) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-gray-400 uppercase font-bold">Project Type Scope</label>
                    <select 
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#0c0c0c] text-white py-2">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-gray-400 uppercase font-bold">Target Budget Bracket</label>
                    <select 
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-[#0c0c0c] text-white py-2">{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Brief message textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-wider text-gray-400 uppercase font-bold">Detailed Project Summary *</label>
                  <textarea 
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="Briefly describe what you are looking to create: core features, performance objectives..."
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 focus:border-[#D4AF37] text-sm text-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Master solid-gold action submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 px-8 py-3.5 rounded-xl font-display text-xs tracking-widest uppercase font-semibold text-black bg-gradient-to-r from-[#D4AF37] via-[#F5DF88] to-[#C59B27] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Files...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                      <span>Start Your Project</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-2 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-light tracking-wide text-white uppercase">
                  TRANSMISSION MATCHED!
                </h3>
                <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
                  Your project blueprint coordinates are securely saved inside the Xentriq Studio core database. A chief architect will contact you within 12 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 rounded-full border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 font-mono text-[9px] tracking-widest text-[#D4AF37] uppercase transition-all cursor-pointer"
                >
                  Edit Information
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
