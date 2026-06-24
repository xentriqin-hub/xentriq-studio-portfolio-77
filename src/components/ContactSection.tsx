import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Website Development',
    budget: 'INR 5,000 - 15,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const projectTypes = [
    'Website Development',
    'Mobile App Development',
    'AI Agents & Automation',
    'Full Stack Portal',
    'Creative 3D App',
    'Other Bespoke Solution'
  ];

  const budgets = [
    'INR 5,000 - 15,000',
    'INR 15,000 - 30,000',
    'INR 30,000 - 50,000',
    'INR 50,000 - 75,000',
    'INR 75,000+'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setForm({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: 'Website Development',
          budget: 'INR 5,000 - 15,000',
          message: ''
        });
      } else {
        setErrorMsg(data.error || 'The connection pipeline timed out. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg('Network error connecting to pipelines. Please verify connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact"
      className="relative py-28 px-6 md:px-10 max-w-5xl mx-auto z-15 min-h-screen flex flex-col justify-center border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left column: Text briefings */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.6em] text-white uppercase">
              LAUNCH PIPELINE
            </span>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-white uppercase leading-tight">
              LET'S BUILD <br />
              <span className="text-white">SOMETHING</span> <br />
              AMAZING.
            </h2>
          </div>

          <p className="font-sans text-xs text-gray-300 leading-relaxed">
            Ready to initiate a premium digital experience? Complete our secure project onboarding brief, and one of our master architects will contact you within 12 hours.
          </p>

          <div className="flex flex-col gap-4 mt-4 font-mono text-[10px] tracking-widest text-white font-bold uppercase">
            <span>• ADMIN@XENTRIQSTUDIO.COM</span>
            <a 
              href="https://wa.me/7824918457?text=Hi%20Xentriq%20Studio%20Team,%20I'm%20interested%20in%20partnering%20on%20a%20luxury%20digital%20solution." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-gray-300 transition-all cursor-pointer"
            >
              <span>• WHATSAPP CHAT: +91 78249 18457</span>
            </a>
          </div>
        </div>

        {/* Right column: Contact Form */}
        <div className="lg:col-span-8 p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 relative overflow-hidden shadow-sm">
          
          {/* Subtle blue background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none" />

          {!submitted ? (
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-wider text-gray-500 uppercase font-bold">Your Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Sterling Cooper"
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-wider text-gray-500 uppercase font-bold">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="admin@sterling.com"
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-wider text-gray-500 uppercase font-bold">Company / Organization</label>
                  <input 
                    type="text" 
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Sterling Realty"
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-wider text-gray-500 uppercase font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-wider text-gray-500 uppercase font-bold">Project Type</label>
                  <select 
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    {projectTypes.map((t) => <option key={t} value={t} className="bg-gray-900 text-white">{t}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-wider text-gray-300 uppercase font-bold">Budget</label>
                  <select 
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    {budgets.map((b) => <option key={b} value={b} className="bg-gray-900 text-white">{b}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] tracking-wider text-gray-500 uppercase font-bold">Detailed Project Summary *</label>
                <textarea 
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  placeholder="Describe your vision..."
                  className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white text-sm text-white focus:outline-none transition-colors resize-none"
                />
              </div>

              {errorMsg && <span className="font-mono text-[10px] text-red-500">⚠️ {errorMsg}</span>}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 px-8 py-3.5 rounded-xl font-display text-xs tracking-widest uppercase font-bold text-black bg-white hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Transmitting...' : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Start Your Project</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-12 text-center flex flex-col items-center gap-4">
              <CheckCircle2 className="w-12 h-12 text-white" />
              <h3 className="font-display text-2xl font-bold text-white uppercase">TRANSMISSION MATCHED!</h3>
              <p className="font-sans text-xs text-gray-300">Your brief is dispatched. We'll contact you within 12 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-white text-xs font-mono uppercase underline">Edit Brief</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
