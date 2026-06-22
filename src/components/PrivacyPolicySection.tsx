import React, { useEffect } from 'react';
import { Shield, ArrowLeft, Mail, Clock, Lock, Eye, FileCheck } from 'lucide-react';

interface PrivacyPolicySectionProps {
  onBack: () => void;
}

export default function PrivacyPolicySection({ onBack }: PrivacyPolicySectionProps) {
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
        <span className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37] uppercase block mb-3">SECURE PROTOCOLS</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extralight tracking-tight text-white uppercase leading-none">
          PRIVACY <span className="text-[#D4AF37] font-semibold tracking-wide">CHARTER</span>
        </h1>
        <p className="mt-4 font-sans text-xs sm:text-sm tracking-[0.25em] text-gray-400 font-medium uppercase">
          Xentriq Studio Privacy & Data Protection Policy
        </p>
        <div className="h-[1px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mt-6" />
      </div>

      {/* Quick metadata registry */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-white/5 py-8 mb-12 text-left bg-white/[0.01] rounded-xl px-6">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <div>
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block">LAST UPDATE</span>
            <span className="font-sans text-xs text-slate-200">June 22, 2026</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <div>
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block">ADMINISTRATION</span>
            <span className="font-sans text-xs text-slate-200">Xentriq Studio</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <div>
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block">EMAIL DISPATCH</span>
            <a href="mailto:admin@xentriqstudio.com" className="font-sans text-xs text-[#D4AF37] hover:underline">
              admin@xentriqstudio.com
            </a>
          </div>
        </div>
      </div>

      {/* Core documentation narrative text */}
      <div className="flex flex-col gap-10 font-sans text-sm text-gray-300 leading-relaxed text-left">
        
        {/* Section 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">01.</span>
            <span>POLICIES OVERVIEW</span>
          </h2>
          <p>
            At Xentriq Studio, we hold individual privacy to the highest standard. This Privacy Charter governs how we collect, process, manage, and secure user specifications and communication details captured during interactions with our digital portfolio interfaces. By engaging with our services, you consent to the data protocols detailed below.
          </p>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">02.</span>
            <span>CONTACT FORM & ONBOARDING DATA COLLECTION</span>
          </h2>
          <p>
            When utilizing our digital proposal configuration system ("Start Your Project"), we collect authentic identifying parameters supplied by the client. These parameters strictly encompass:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-gray-400 font-sans text-xs">
            <li><strong>Personal/Corporate Identity:</strong> Name and Company/Organization specifications.</li>
            <li><strong>Contact Gateways:</strong> Certified Email Address and Phone Number.</li>
            <li><strong>Software Outlines:</strong> Selected Project Type, chosen target Budget bracket, and specific blueprint briefing or comments.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">03.</span>
            <span>EMAIL COMMUNICATION PIPELINES</span>
          </h2>
          <p>
            All submitted proposal files are securely converted to server-side mail payloads and transmitted to our central inbox at <strong>admin@xentriqstudio.com</strong> via a standard automated SMTP courier pipeline. We use your address details solely to correspond with your team regarding your specific custom software inquiry. We will never sell, lease, or distribute your email records to secondary advertising platforms.
          </p>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">04.</span>
            <span>COOKIES & BROWSER CACHING</span>
          </h2>
          <p>
            Our web servers leverage standard browser local storage configurations and essential session cache tokens to optimize rendering speed, preserve high-performance WebGL animations, and manage client-side state parameters. We do not use intrusive persistent behavioral tracking cookies targeting secondary display platforms.
          </p>
        </section>

        {/* Section 5 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">05.</span>
            <span>ANALYTICS UTILITY</span>
          </h2>
          <p>
            To monitor structural health, prevent malicious API overloading, and improve core web vitals, we record aggregate, non-identifiable technical data parameters such as device viewport sizes, core system environments, and interaction latency intervals. This data is leveraged strictly to guide layout density refinement and prevent visual regressions.
          </p>
        </section>

        {/* Section 6 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">06.</span>
            <span>WEBSITE SECURITY SYSTEMS</span>
          </h2>
          <p>
            Xentriq Studio incorporates industry-grade secure socket layer (SSL/TLS) encryption mechanisms across all endpoint routing operations. The transfer of onboarding data is wrapped in secure HTTPS layers. This ensures third-party interception is practically impossible, keeping your premium proprietary project ideas protected.
          </p>
        </section>

        {/* Section 7 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">07.</span>
            <span>DATA RETENTION PROTOCOLS</span>
          </h2>
          <p>
            We retain proposal data payloads for as long as is necessary to compile project blueprints, coordinate project launch dates, and fulfill contract execution terms. Once project services are concluded or upon a direct purge request from the client, all related identification parameters are permanently destroyed or anonymized.
          </p>
        </section>

        {/* Section 8 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">08.</span>
            <span>YOUR RIGHTS AND JURISDICTION</span>
          </h2>
          <p>
            As a global digital participant, you retain absolute authority over your data. You possess the right to:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-gray-400 font-sans text-xs">
            <li>Request comprehensive transparency concerning saved client parameters.</li>
            <li>Require precise revisions or modifications of faulty records in our systems.</li>
            <li>Demand structured complete erasure of all records from our central index vaults.</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-medium tracking-wide text-white flex items-center gap-2">
            <span className="font-mono text-xs text-[#D4AF37]">09.</span>
            <span>POLICY UPDATES & INQUIRIES</span>
          </h2>
          <p>
            Xentriq Studio reserves the right to refine this charter as compliance requirements and digital infrastructure guidelines expand. All modifications will appear instantly on this designated route page. For data purges or administrative inquiries, reach out directly to <strong>admin@xentriqstudio.com</strong>.
          </p>
        </section>

      </div>

      {/* Footer Return Trigger */}
      <div className="mt-16 pt-10 border-t border-white/5 flex justify-center">
        <button 
          onClick={onBack}
          className="px-8 py-3.5 rounded-full font-display text-xs tracking-widest uppercase font-semibold text-black bg-gradient-to-r from-[#D4AF37] via-[#F5DF88] to-[#C59B27] hover:scale-[1.03] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] cursor-pointer select-none"
        >
          <span>Acknowledge & Return</span>
        </button>
      </div>

    </article>
  );
}
