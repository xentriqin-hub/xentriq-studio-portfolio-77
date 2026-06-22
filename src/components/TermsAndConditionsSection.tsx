import React, { useEffect } from 'react';
import { FileText, ArrowLeft, Mail, Clock, HelpCircle, CheckSquare, Info } from 'lucide-react';

interface TermsAndConditionsSectionProps {
  onBack: () => void;
}

export default function TermsAndConditionsSection({ onBack }: TermsAndConditionsSectionProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <article className="relative min-h-screen py-28 px-6 md:px-10 max-w-4xl mx-auto z-15 flex flex-col justify-start">
      {/* Background radial gold glow blots */}
      <div className="absolute top-[10%] left-[-20%] w-[350px] h-[350px] bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-20%] w-[350px] h-[350px] bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation breadcrumbs link back */}
      <button 
        onClick={onBack}
        className="group mb-12 flex items-center gap-2.5 w-fit font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase select-none cursor-pointer hover:text-white transition-colors duration-300"
      >
        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
        <span>Return to Studio Hub</span>
      </button>

      {/* Header Title Block */}
      <div className="mb-14">
        <span className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37] uppercase block mb-3">CONTRACT GUIDELINES</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extralight tracking-tight text-white uppercase leading-none">
          SYSTEM <span className="text-[#D4AF37] font-semibold tracking-wide">PROTOCOLS</span>
        </h1>
        <p className="mt-4 font-sans text-xs sm:text-sm tracking-[0.25em] text-gray-400 font-medium uppercase">
          Xentriq Studio Terms of Service & Engagement Agreements
        </p>
        <div className="h-[1px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mt-6" />
      </div>

      {/* Quick metadata registry */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-white/5 py-8 mb-12 text-left bg-white/[0.01] rounded-xl px-6">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <div>
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block">REGISTRATION DATE</span>
            <span className="font-sans text-xs text-slate-200">June 22, 2026</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <div>
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block">JURISDICTION</span>
            <span className="font-sans text-xs text-slate-200">India, Tamil Nadu</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <div>
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block">GET IN TOUCH</span>
            <span className="font-sans text-xs text-slate-200">admin@xentriqstudio.com</span>
          </div>
        </div>
      </div>

      {/* Core terms agreement narrative text */}
      <div className="flex flex-col gap-10 font-sans text-sm text-gray-300 leading-relaxed text-left">
        
        {/* Section 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">01.</span>
            <span>ACCEPTANCE OF PROTOCOLS</span>
          </h2>
          <p>
            Welcome to Xentriq Studio. By visiting or interacting with our digital interfaces, submitting formal proposals, or initiating code-level engagements, you formally agree to comply with and be bound by the terms and protocols highlighted herein. If you disagree with any segment, please terminate all active requests immediately.
          </p>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">02.</span>
            <span>SCOPE OF BESPOKE DIGITAL SERVICES</span>
          </h2>
          <p>
            Xentriq Studio offers premium software architecture consultancy, bespoke high-performance interactive 3D WebGL user interface builds, Progressive Web Applications (PWA), Android application software design, and specialized autonomous AI integration suites. Exact project boundaries, timeline targets, milestones, and deliverable indices are formalised independently in customized Statement of Work (SOW) documents.
          </p>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">03.</span>
            <span>PROPOSAL INITIATION & COMMUNICATIONS</span>
          </h2>
          <p>
            Submitting a "Start Your Project" form triggers an administrative record transmission to <strong>admin@xentriqstudio.com</strong>. This process is purely an exploratory inquiry and does not establish a binding service contract. All project agreements require a signed mutually approved digital contract incorporating specific financial parameters and scope of milestones.
          </p>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">04.</span>
            <span>INTELLECTUAL PROPERTY RIGHTS</span>
          </h2>
          <p>
            All conceptual layouts, geometric designs, 3D particles engine codes, visual animations, shaders, logo designs, and typography configurations present on our portfolio are the exclusive trademark and property of Xentriq Studio. Replication, extraction, or scraping of these assets without written studio consent is strictly prohibited.
          </p>
        </section>

        {/* Section 5 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">05.</span>
            <span>CLIENT REPRESENTATIONS & VERIFICATION</span>
          </h2>
          <p>
            Clients must supply authentic, accurate, and valid identifying properties (such as real name, active email coordinates, and reachable telephone lines) when commissioning projects. Supplying malicious inputs, spam, artificial automated scripts, or attempting unauthorized system injection will lead to immediate routing bans and blacklist actions.
          </p>
        </section>

        {/* Section 6 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">06.</span>
            <span>LIMITATION OF SYSTEM LIABILITY</span>
          </h2>
          <p>
            Xentriq Studio strives for flawless up-time and peak performance across our digital assets. However, we are not responsible for browser-specific rendering discrepancies arising from older hardware, network dropouts, regional ISP outages, canvas hardware-acceleration limits, or external server cluster disruptions.
          </p>
        </section>

        {/* Section 7 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">07.</span>
            <span>GOVERNING LAW</span>
          </h2>
          <p>
            These protocols, terms of engagement, and any direct custom contract solutions built under our pipelines are governed, executed, and interpreted in compliance with the laws of <strong>India, State of Tamil Nadu</strong>. Any resulting disputes shall be navigated strictly under the local courts of Chennai jurisdiction.
          </p>
        </section>

        {/* Section 8 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">08.</span>
            <span>AMENDMENTS & INQUIRIES</span>
          </h2>
          <p>
            We reserve the right to revise these terms to align with legal guidelines, system releases, or policy upgrades. Engaging with the site after updates constitutes acceptance of the modified Terms and Conditions pact. For specialized inquiries or contract requests, communicate via: <strong>admin@xentriqstudio.com</strong>
          </p>
        </section>

      </div>

      {/* Footer Return Trigger */}
      <div className="mt-16 pt-10 border-t border-white/5 flex justify-center">
        <button 
          onClick={onBack}
          className="px-8 py-3.5 rounded-full font-display text-xs tracking-widest uppercase font-semibold text-black bg-gradient-to-r from-[#D4AF37] via-[#F5DF88] to-[#C59B27] hover:scale-[1.03] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] cursor-pointer select-none"
        >
          <span>Accept & Return</span>
        </button>
      </div>

    </article>
  );
}
