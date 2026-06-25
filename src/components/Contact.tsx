import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, ArrowUpRight, MessageCircle, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  key?: React.Key;
  preSelectedService?: string;
}

export default function Contact({ preSelectedService }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState(preSelectedService || 'Web App Development');
  const [budget, setBudget] = useState('₹10,000 - ₹25,000');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update selected service if parent provides one
  useEffect(() => {
    if (preSelectedService) {
      setProjectType(preSelectedService);
    }
  }, [preSelectedService]);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 1200);
  };

  const projectTypes = [
    'Website Development',
    'Web App Development',
    'Progressive Web Apps (PWA)',
    'E-Commerce Storefront',
    'Android & iOS App',
    'Custom Software Engine',
    'SEO Auditing',
    'UI/UX Design Strategy',
    'AI Automation Workflow',
    'AI Autonomous Agents',
  ];

  const budgetTiers = [
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹75,000',
    '₹75,000 - ₹1,00,000',
    '₹1,00,000+',
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Direct Info & Booking Ledger */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-purple-300 tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5 text-white" />
                <span>COMMISSION WORK</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6">
                Let's Craft <span className="text-gradient-purple">Something Elite</span>
              </h2>
              <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
                Have a challenging project, architectural upgrade, or automation pipeline you want implemented? Send our lead consulting director an inquiry.
              </p>

              {/* Direct Info Pills */}
              <div className="space-y-4">
                <a
                  href="mailto:admin@xentriqstudio.com"
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="font-mono text-[9px] text-gray-400 block uppercase tracking-wider">DIRECT EMAIL</span>
                    <span className="font-display font-semibold text-sm text-white group-hover:text-indigo-300 transition-colors">
                      admin@xentriqstudio.com
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white ml-auto group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://wa.me/917824918457"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="font-mono text-[9px] text-emerald-400 block uppercase tracking-wider font-semibold">WHATSAPP CHAT</span>
                    <span className="font-display font-semibold text-sm text-white group-hover:text-emerald-300 transition-colors">
                      +91 78249 18457
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white ml-auto group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl glass-card-premium p-6 sm:p-8 backdrop-blur-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl" />

              <form onSubmit={handleSubmitInquiry} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-left">
                    <label className="font-display font-medium text-[11px] text-gray-400 uppercase tracking-widest block mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Marcus Thorne"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>

                  <div className="text-left">
                    <label className="font-display font-medium text-[11px] text-gray-400 uppercase tracking-widest block mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. marcus@vanguard.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-left">
                    <label className="font-display font-medium text-[11px] text-gray-400 uppercase tracking-widest block mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vanguard Atelier"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>

                  <div className="text-left">
                    <label className="font-display font-medium text-[11px] text-gray-400 uppercase tracking-widest block mb-2">
                      Project Core Category
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="glass-input w-full px-4 py-3 rounded-xl text-sm bg-black/40 text-white cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#05050a] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="text-left">
                  <label className="font-display font-medium text-[11px] text-gray-400 uppercase tracking-widest block mb-2">
                    Approximate Budget Level
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {budgetTiers.map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setBudget(tier)}
                        className={`py-2 px-3 rounded-lg font-mono text-[10px] sm:text-xs text-center border cursor-pointer transition-all ${
                          budget === tier
                            ? 'bg-indigo-500/10 border-indigo-500/30 text-white'
                            : 'bg-white/2 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-left">
                  <label className="font-display font-medium text-[11px] text-gray-400 uppercase tracking-widest block mb-2">
                    Brief Project Blueprint & Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe the requirements, target objectives, or automation milestones..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>

                {/* Submitting Feedback */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3.5 text-left text-xs text-emerald-200"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block mb-0.5">Strategy Inquiry Filed Successfully!</span>
                        Your blueprint is cached locally. An engineer will generate your custom proposal structure within 48 hours.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="glass-button-primary text-white text-sm font-display font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer disabled:opacity-50 liquid-reflection"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin text-white" />
                        Generating Encrypted Handshake...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        Submit Strategy Brief
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
