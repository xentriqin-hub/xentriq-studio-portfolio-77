import React from 'react';
import { Layers2, Sparkles, Network } from 'lucide-react';
import TiltCard from './TiltCard';

export default function AboutSection() {
  const capabilities = [
    { title: 'Exquisite Renders', desc: 'Crafting immersive 3D, WebGL, and custom particle designs that secure user attention instantly.', icon: Sparkles },
    { title: 'Intelligent Automations', desc: 'Integrating state-of-the-art Large Language Models into core operational datasets.', icon: Network },
    { title: 'Industrial Backbones', desc: 'Setting secure, ultra-scalable Firestore, PostgreSQL, and Cloud components.', icon: Layers2 },
  ];

  return (
    <section 
      id="about"
      className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-15 min-h-[90vh] flex flex-col justify-center border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading and Storyteller */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.6em] text-[#7B2FF7] uppercase font-semibold block mb-2">
              WHO WE ARE
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
              TRANSCENDING THE <br />
              <span className="text-[#7B2FF7]">DIGITAL FRONTIER</span>
            </h2>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-[#7B2FF7]/50 to-transparent my-2" />

          <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-md font-normal">
            Xentriq Studio is a modern, high-end software development agency focused entirely on engineering premium digital products. We combine luxury visual storytelling, pixel-level front-ends, and highly scalable cloud computing architectures to secure digital dominance for trailblazing brands.
          </p>
        </div>

        {/* Right Column: Editorial Paragraphs and Capability Bento List */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="flex flex-col gap-6 p-8 rounded-[24px] bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-relaxed border-l-2 border-[#7B2FF7] pl-6">
              “We combine creativity, custom engineering, and artificial intelligence to deliver high-quality, memorable experiences.”
            </h3>

            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
              Whether we are preparing immersive three-dimensional spatial real estate, optimizing robust progressive web store checkouts, or structuring autonomous AI agents to manage complex corporate data structures, we treat performance and aesthetics as our core parameters.
            </p>
          </div>

          {/* Capabilities Spatial UI cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard
                  key={index}
                  index={index}
                  className="p-6 flex flex-col gap-4 h-full justify-between"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#7B2FF7]/10 flex items-center justify-center text-[#7B2FF7] border border-[#7B2FF7]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display text-sm font-bold tracking-wide text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          {/* Slogans container */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] tracking-[0.25em] text-[#7B2FF7] font-bold uppercase pt-2">
            <span>• Websites</span>
            <span>• Mobile Apps</span>
            <span>• Web Apps</span>
            <span>• AI Solutions</span>
            <span>• Business Automation</span>
            <span>• Enterprise Platforms</span>
          </div>
        </div>

      </div>
    </section>
  );
}
