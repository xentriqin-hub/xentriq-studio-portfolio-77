import { Service } from '../types';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceDetailsModalProps {
  service: Service | null;
  onClose: () => void;
  onInitiateConsultation: (serviceTitle: string) => void;
}

export default function ServiceDetailsModal({
  service,
  onClose,
  onInitiateConsultation,
}: ServiceDetailsModalProps) {
  if (!service) return null;

  // Dynamic Icon helper
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-8 h-8 text-white" />;
    }
    return <Icons.Cpu className="w-8 h-8 text-white" />;
  };

  return (
    <div
      id="service-details-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/75 backdrop-blur-md"
    >
      <motion.div
        id="service-details-modal-container"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl rounded-2xl glass-card-premium p-6 sm:p-8 backdrop-blur-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Glow effects inside modal */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/5 pb-5 mb-5 shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shadow-lg">
              {renderIcon(service.icon)}
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-wider text-indigo-300 uppercase bg-indigo-500/5 border border-indigo-500/10 px-2.5 py-1 rounded-full">
                {service.category} Solution
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1.5">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-thin">
          {/* Main Description */}
          <div>
            <h4 className="font-display font-medium text-xs text-gray-400 uppercase tracking-wider mb-2.5">
              Service Strategy Overview
            </h4>
            <p className="font-sans text-gray-300 text-sm leading-relaxed">
              {service.description} Our implementation approach is visual-first, utilizing minimalist liquid glass visual components, fully type-safe API code, and custom sandboxing environments designed to match the precise scale of your business.
            </p>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="font-display font-medium text-xs text-gray-400 uppercase tracking-wider mb-3">
              Included Deliverables & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors"
                >
                  <Icons.Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-gray-300 leading-normal">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Integrated Tech Stack */}
          <div>
            <h4 className="font-display font-medium text-xs text-gray-400 uppercase tracking-wider mb-3">
              Elite Tech Stack Integration
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-indigo-500/5 border border-indigo-500/10 font-mono text-[11px] text-indigo-300 flex items-center gap-1.5"
                >
                  <Icons.Cpu className="w-3.5 h-3.5 text-white" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/5 mt-6 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            <span className="font-mono text-[10px] text-gray-400">PROJECT START TIME</span>
            <div className="font-display font-semibold text-sm text-emerald-400 flex items-center gap-1.5 mt-0.5">
              <Icons.Zap className="w-4 h-4 text-white" />
              Typically 48-72 hrs
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="glass-button text-gray-300 text-xs sm:text-sm font-sans font-medium py-3 px-5 rounded-full w-full sm:w-auto text-center"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInitiateConsultation(service.title);
              }}
              className="glass-button-primary text-white text-xs sm:text-sm font-display font-medium py-3 px-6 rounded-full w-full sm:w-auto text-center flex items-center justify-center gap-2 liquid-reflection"
            >
              <Icons.ArrowRight className="w-4 h-4 text-white" />
              Get Started on This Service
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
