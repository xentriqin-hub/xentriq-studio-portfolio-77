import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Phone, Check, ArrowRight } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please provide your name';
    if (!form.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!form.projectType) newErrors.projectType = 'Please choose a project category';
    if (!form.budget) newErrors.budget = 'Please select a budget range';
    if (!form.message.trim() || form.message.length < 10) {
      newErrors.message = 'Please provide a brief message explaining your project (min. 10 chars)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const projectCategories = [
    'Software Development',
    'Web Engineering',
    'Mobile Application',
    'E-commerce Platform',
    'AI & Automation Solutions',
    'Creative & Graphic Design',
    'Video & Motion Production',
  ];

  const budgets = [
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹75,000',
    '₹75,000+',
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden px-6 md:px-12">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#A855F7]/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Side: Call To Action and details */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-10 text-left">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-widest text-[#A855F7] uppercase block">
                // Let's Synchronize
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-[#A855F7] to-[#B497CF] bg-clip-text text-transparent">
                  Incredible Together
                </span>
                .
              </h2>
              <p className="font-sans text-gray-400 font-light text-base leading-relaxed max-w-md pt-2">
                Have an ambitious idea or standard operation that requires clean design and fast code? Give us a outline of your project. Let's make it a reality.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6 w-full pt-4">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:border-white/[0.06] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#A855F7]/10 flex items-center justify-center border border-[#A855F7]/20">
                  <Mail className="w-4 h-4 text-[#A855F7]" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">Email Address</span>
                  <a href="mailto:admin@xentriqstudio.com" className="font-sans text-sm text-gray-300 hover:text-white transition-colors">
                    admin@xentriqstudio.com
                  </a>
                </div>
              </div>
            </div>

            {/* Prompt design guidelines */}
            <div className="font-mono text-[10px] text-gray-600 space-y-1.5 pt-6 border-t border-white/[0.04] w-full">
              <span>// SECURITY PROTOCOL: SSL_TLS_v1.3</span>
              <br />
              <span>// ESTIMATED INITIAL CALLBACK TIME: &lt; 4 HOURS</span>
            </div>
          </div>

          {/* Right Side: Glassmorphism Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#09090b]/40 border border-white/[0.06] backdrop-blur-xl p-8 sm:p-12 overflow-hidden shadow-2xl">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Two-Column Grid: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2 text-left">
                        <label htmlFor="name" className="font-sans text-xs font-semibold text-gray-400">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={form.name}
                          onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="Sarah Jenkins"
                          className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border focus:border-[#A855F7]/50 focus:bg-[#A855F7]/[0.01] text-white text-sm outline-none transition-all ${
                            errors.name ? 'border-red-500/50' : 'border-white/[0.06]'
                          }`}
                        />
                        {errors.name && <p className="text-[11px] text-red-400 font-sans mt-1">{errors.name}</p>}
                      </div>

                      <div className="space-y-2 text-left">
                        <label htmlFor="email" className="font-sans text-xs font-semibold text-gray-400">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="sarah@aetheria.co"
                          className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border focus:border-[#A855F7]/50 focus:bg-[#A855F7]/[0.01] text-white text-sm outline-none transition-all ${
                            errors.email ? 'border-red-500/50' : 'border-white/[0.06]'
                          }`}
                        />
                        {errors.email && <p className="text-[11px] text-red-400 font-sans mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Company field */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="company" className="font-sans text-xs font-semibold text-gray-400">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Aetheria Labs"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] focus:border-[#A855F7]/50 focus:bg-[#A855F7]/[0.01] text-white text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Project Category selection */}
                    <div className="space-y-2 text-left">
                      <span className="font-sans text-xs font-semibold text-gray-400 block">
                        Project Category *
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {projectCategories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => {
                              setForm({ ...form, projectType: cat });
                              if (errors.projectType) setErrors({ ...errors, projectType: undefined });
                            }}
                            className={`px-4 py-3 rounded-xl border text-left text-xs transition-all ${
                              form.projectType === cat
                                ? 'bg-[#A855F7]/10 border-[#A855F7] text-white font-medium'
                                : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] text-gray-400 hover:text-white'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                      {errors.projectType && <p className="text-[11px] text-red-400 font-sans mt-1">{errors.projectType}</p>}
                    </div>

                    {/* Budget Selection */}
                    <div className="space-y-2 text-left">
                      <span className="font-sans text-xs font-semibold text-gray-400 block">
                        Project Budget Range *
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {budgets.map((bud) => (
                          <button
                            key={bud}
                            type="button"
                            onClick={() => {
                              setForm({ ...form, budget: bud });
                              if (errors.budget) setErrors({ ...errors, budget: undefined });
                            }}
                            className={`px-3 py-3 rounded-xl border text-center text-xs transition-all ${
                              form.budget === bud
                                ? 'bg-[#A855F7]/10 border-[#A855F7] text-white font-medium'
                                : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] text-gray-400 hover:text-white'
                            }`}
                          >
                            {bud}
                          </button>
                        ))}
                      </div>
                      {errors.budget && <p className="text-[11px] text-red-400 font-sans mt-1">{errors.budget}</p>}
                    </div>

                    {/* Message Details */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="message" className="font-sans text-xs font-semibold text-gray-400">
                        Project Overview *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Tell us what you want to achieve, your preferred timelines, tech stack, or integrations..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border focus:border-[#A855F7]/50 focus:bg-[#A855F7]/[0.01] text-white text-sm outline-none transition-all resize-none ${
                          errors.message ? 'border-red-500/50' : 'border-white/[0.06]'
                        }`}
                      />
                      {errors.message && <p className="text-[11px] text-red-400 font-sans mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-white text-black font-sans font-bold text-sm tracking-wide hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl relative overflow-hidden group disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit Proposal</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                      <Check className="w-8 h-8 text-[#A855F7]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-white">Proposal Transmitted</h3>
                      <p className="font-sans text-sm text-gray-400 font-light max-w-sm">
                        Thank you for reaching out to Xentriq Studio. Our systems have synchronized your request. A digital architect will contact you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setForm({
                          name: '',
                          email: '',
                          company: '',
                          projectType: '',
                          budget: '',
                          message: '',
                        });
                        setIsSubmitted(false);
                      }}
                      className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-xs text-gray-400 hover:text-white transition-all bg-white/[0.01]"
                    >
                      Send Another Inquire
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
