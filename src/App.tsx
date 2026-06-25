import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ServiceDetailsModal from './components/ServiceDetailsModal';
import FantasyParticles from './components/FantasyParticles';
import { Service } from './types';
import { Mail, Heart } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [preSelectedService, setPreSelectedService] = useState<string>('');

  const handleServiceConsultation = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    // Smooth scroll to contact form which is now pre-selected
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="app-root-container" className="min-h-screen bg-[#05050a] text-white selection:bg-indigo-500/30 overflow-x-hidden relative font-sans">
      
      {/* 3D Fantasy Particles Canvas Background */}
      <FantasyParticles />

      {/* Dynamic Animated Atmospheric Canvas */}
      <div className="absolute top-0 inset-x-0 h-[1000px] bg-gradient-to-b from-indigo-950/20 via-purple-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] left-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main id="app-main-content" className="relative z-10">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. FAQ Section */}
        <FAQ />

        {/* 8. Contact Section */}
        <Contact preSelectedService={preSelectedService} />
      </main>

      {/* 9. Premium Footer */}
      <footer id="app-footer" className="border-t border-white/5 bg-[#030307]/80 backdrop-blur-md pt-16 pb-8 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <a href="#" className="flex items-center gap-3 group mb-5">
              <div className="relative w-9 h-9 rounded-full bg-[#0a0a14] border border-white/10 flex items-center justify-center shadow-lg overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://i.ibb.co/JwHnypRF/xentriqstudio.png" 
                  alt="Xentriq Studio Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wider text-white">
                  XENTRIQ
                </span>
                <span className="font-mono text-[8px] text-purple-400 tracking-widest font-medium">
                  STUDIO
                </span>
              </div>
            </a>
            <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Bespoke, premium digital design systems, high-speed software architectures, and autonomous AI automation deployed securely for enterprises globally.
            </p>
          </div>

          {/* Quick Nav links */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web App Engineering</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Progressive Web Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Android & iOS Suites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Autonomous AI Agents</a></li>
            </ul>
          </div>

          {/* Office logistics */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider mb-4">
              Direct Inquiries
            </h4>
            <a
              href="mailto:admin@xentriqstudio.com"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-indigo-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              admin@xentriqstudio.com
            </a>
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Xentriq Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Security Audit</a>
            <span className="text-white/10">&bull;</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Shield</a>
            <span className="text-white/10">&bull;</span>
            <div className="flex items-center gap-1.5 cursor-default text-gray-600">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-white animate-pulse fill-white" />
              <span>for Elite Brands</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 10. Service Details Popup Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailsModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onInitiateConsultation={handleServiceConsultation}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
