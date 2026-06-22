import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers2, Sparkles, Network } from 'lucide-react';
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
            <motion.span 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.65, scale: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37] uppercase"
            >
              WHO WE ARE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-2 font-display text-4xl md:text-5xl font-light tracking-tight text-white uppercase leading-tight"
            >
              TRANSCENDING THE <br />
              <span className="text-[#D4AF37] font-semibold">DIGITAL FRONTIER</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full h-[1px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent my-2"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-sm text-gray-300 leading-relaxed max-w-md"
          >
            Xentriq Studio is a modern, high-end software development agency focused entirely on engineering premium digital products. We combine luxury visual storytelling, pixel-level front-ends, and highly scalable cloud computing architectures to secure digital dominance for trailblazing brands.
          </motion.p>
        </div>

        {/* Right Column: Editorial Paragraphs and Capability Bento List */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-xl md:text-2xl font-light text-white leading-relaxed border-l-2 border-[#D4AF37] pl-6"
            >
              “We combine creativity, custom engineering, and artificial intelligence to deliver high-quality, memorable experiences.”
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-xs text-gray-400 leading-relaxed"
            >
              Whether we are preparing immersive three-dimensional spatial real estate, optimizing robust progressive web store checkouts, or structuring autonomous AI agents to manage complex corporate data structures, we treat performance and aesthetics as our core parameters.
            </motion.p>
          </div>

          {/* Capabilities bento boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard
                  key={index}
                  index={index}
                  className="p-6 flex flex-col gap-3 h-full justify-between"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display text-sm font-semibold tracking-wide text-white">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          {/* Slogans grid container */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[9px] tracking-[0.25em] text-[#D4AF37] font-semibold uppercase">
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
