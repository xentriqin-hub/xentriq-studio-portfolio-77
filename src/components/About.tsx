import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Brain, CodeXml, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#A855F7]" />,
      title: 'Infinite Creativity',
      description: 'Designing interface flows and brand experiences that evoke genuine emotional reactions and distinctiveness.',
    },
    {
      icon: <CodeXml className="w-6 h-6 text-[#B497CF]" />,
      title: 'Flawless Engineering',
      description: 'Developing highly efficient, clean-code foundations designed to support massive scales and near-instant load times.',
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'AI Intelligence',
      description: 'Harnessing the complete intelligence of generative models and automations to optimize normal workflows.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden px-6 md:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs tracking-widest text-[#A855F7] uppercase block mb-4">
              // Who We Are
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight">
              Crafting complete digital solutions, from spark to deployment.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
            <p className="font-sans text-lg text-gray-400 font-light leading-relaxed mb-6">
              Xentriq Studio is a forward-thinking digital engineering agency. We fuse design craftsmanship, robust core computer science, and modern artificial intelligence to deliver elegant solutions for ambitious startups and massive enterprises alike.
            </p>
            <p className="font-sans text-base text-gray-500 font-light leading-relaxed">
              We don't build generic cookie-cutter templates. We analyze, plan, design, and deliver unique custom digital architectures. Whether it is an enterprise SaaS dashboard, a high-converting online brand ecosystem, native mobile apps, or a customized autonomous AI agent flow—we bring your grandest digital vision to life.
            </p>
          </div>
        </div>

        {/* Bento/Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.05] hover:border-[#A855F7]/20 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle gradient hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {val.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3 tracking-tight">
                {val.title}
              </h3>
              
              <p className="font-sans text-gray-400 text-sm leading-relaxed font-light">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
