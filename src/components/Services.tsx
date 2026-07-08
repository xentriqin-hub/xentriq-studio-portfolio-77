import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import {
  Terminal,
  Globe,
  Smartphone,
  ShoppingBag,
  Cpu,
  Palette,
  Video,
  Activity,
  Layers,
  PenTool,
  TrendingUp,
  Server,
  Code,
  Check,
  Sparkles
} from 'lucide-react';

const IconMap: Record<string, React.ComponentType<any>> = {
  Terminal,
  Globe,
  Smartphone,
  ShoppingBag,
  Cpu,
  Palette,
  Video,
  Activity,
  Layers,
  PenTool,
  TrendingUp,
  Server,
  Code,
};

type CategoryFilter = 'All' | 'Engineering' | 'Intelligence' | 'Creative';

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  // Categorize services based on their ID
  const getCategory = (id: string): CategoryFilter => {
    if (['software-dev', 'web-dev', 'mobile-dev', 'backend-dev', 'frontend-dev'].includes(id)) {
      return 'Engineering';
    }
    if (['ai-solutions', 'seo-growth'].includes(id)) {
      return 'Intelligence';
    }
    return 'Creative'; // UI/UX, video, motion, 3d, graphic, ecommerce
  };

  const filteredServices = SERVICES.filter(
    (service) => activeFilter === 'All' || getCategory(service.id) === activeFilter
  );

  const filters: { label: string; value: CategoryFilter }[] = [
    { label: 'All Solutions', value: 'All' },
    { label: 'Core Engineering', value: 'Engineering' },
    { label: 'Intelligence & SEO', value: 'Intelligence' },
    { label: 'Creative & Commerce', value: 'Creative' },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] relative border-y border-white/[0.02] px-6 md:px-12">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#A855F7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl text-left">
            <span className="font-mono text-xs tracking-widest text-[#A855F7] uppercase block mb-4">
              // Our Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Elite solutions crafted for{' '}
              <span className="bg-gradient-to-r from-[#A855F7] to-[#B497CF] bg-clip-text text-transparent">
                uncompromised performance
              </span>
              .
            </h2>
          </div>
          
          {/* Subtle note */}
          <div className="mt-4 md:mt-0 font-mono text-[11px] text-gray-500 max-w-xs text-left md:text-right">
            Providing end-to-end consulting, design, and systems delivery.
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/[0.04] pb-6">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-medium tracking-wide transition-all relative ${
                activeFilter === filter.value
                  ? 'text-white bg-[#A855F7]/10 border border-[#A855F7]/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.02] border border-transparent'
              }`}
            >
              {filter.label}
              {activeFilter === filter.value && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 rounded-full bg-[#A855F7]/5 -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComponent = IconMap[service.icon] || Code;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-2xl bg-[#09090b]/40 border border-white/[0.04] hover:border-white/[0.08] p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[320px] backdrop-blur-md"
                >
                  {/* Glowing Top Border Hover effect */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A855F7]/60 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  {/* Gradient Light Reflection inside the card */}
                  <div className="absolute top-[-100px] right-[-100px] w-48 h-48 rounded-full bg-[#A855F7]/5 blur-2xl group-hover:bg-[#A855F7]/10 transition-colors duration-500 pointer-events-none" />

                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-[#A855F7]/40 group-hover:bg-[#A855F7]/5 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-[#A855F7] transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-white transition-colors duration-300 tracking-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-[#9ca3af] text-sm leading-relaxed mb-6 font-light group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullets of Sub-services */}
                  <div className="space-y-2 border-t border-white/[0.03] pt-6">
                    <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest block mb-1">
                      Includes
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.subservices.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.04] text-[11px] font-sans text-gray-400 hover:text-white hover:border-[#A855F7]/20 transition-colors duration-200"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#A855F7]" />
                          <span>{sub}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-white/[0.01] to-[#A855F7]/[0.02] border border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#A855F7]/10 flex items-center justify-center border border-[#A855F7]/20">
              <Sparkles className="w-5 h-5 text-[#A855F7]" />
            </div>
            <div className="text-left">
              <h4 className="font-display font-bold text-lg text-white">Need a highly tailored specific custom build?</h4>
              <p className="font-sans text-sm text-gray-400 font-light">Our core software engineering team thrives on tackling unsolved structural challenges.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 rounded-lg bg-white text-black font-sans font-medium text-xs tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Inquire Specific Stack
          </button>
        </motion.div>

      </div>
    </section>
  );
};
