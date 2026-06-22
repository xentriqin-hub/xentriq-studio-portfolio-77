import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import ThreeCanvas from './components/ThreeCanvas';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TechnologiesSection from './components/TechnologiesSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatBot from './components/AIChatBot';

export default function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Initiate buttery smooth scrolling on all modern desktop structures
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious sweet easing
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#020202] text-white selection:bg-[#D4AF37]/35 selection:text-white">
      {/* Dynamic Cinematic Splasher loading page */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Floating 3D WebGL Back Canvas Space */}
      <ThreeCanvas />

      {/* The main high-fidelity user interface block */}
      {!loading && (
        <div className="relative z-10 w-full flex flex-col">
          {/* Header Bar Navigation */}
          <Navbar />

          <main className="w-full flex flex-col">
            {/* Cinematic Landing Screen */}
            <HeroSection />

            {/* Structured Solution Services */}
            <ServicesSection />

            {/* Storyteller Studio Overview */}
            <AboutSection />

            {/* Circular Orbiting Tools Stack */}
            <TechnologiesSection />

            {/* Methodical Timeline Deliveries */}
            <ProcessSection />

            {/* Comparative Bento Supremacy Boxes */}
            <WhyChooseUs />

            {/* Secure CRM Launchpad Contact Onboarding */}
            <ContactSection />
          </main>

          {/* Minimal Corporate Footer */}
          <Footer />

          {/* Golden Interactive floating WhatsApp trigger */}
          <WhatsAppButton />

          {/* Luxury AI Chatbot trigger and panel */}
          <AIChatBot />
        </div>
      )}
    </div>
  );
}
