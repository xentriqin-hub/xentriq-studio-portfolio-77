import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Section Observer tracking active element focus
  useEffect(() => {
    const sections = ['home', 'services', 'technologies', 'process', 'about', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-[#A855F7]/30 selection:text-white">
      {/* Navigational Anchor */}
      <Navbar onScrollToSection={handleScrollToSection} activeSection={activeSection} />

      {/* Main structural contents */}
      <main>
        {/* Hero & Interactive Background */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* About overview */}
        <About />

        {/* Comprehensive Capabilities */}
        <Services />

        {/* Technical Stack Grid */}
        <TechStack />

        {/* Structured Process Checklist */}
        <Process />

        {/* Structural Benefits Grid */}
        <WhyChooseUs />

        {/* Bidirectional RFP Contact Layout */}
        <Contact />
      </main>

      {/* Standard Corporate Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Interactive AI Chatbot */}
      <Chatbot />
    </div>
  );
}
