import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { technologies } from '../data';

export default function TechnologiesSection() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const startXRef = useRef(0);
  const currentRotationRef = useRef(0);

  // Group technologies for premium bento-filters
  const categories = [
    { label: 'All STACK', value: 'all' },
    { label: 'Frontend & 3D', value: 'frontend' },
    { label: 'Core Backend', value: 'backend' },
    { label: 'Databases', value: 'database' },
    { label: 'AI Models', value: 'ai' },
    { label: 'Cloud/DevOps', value: 'cloud_devops' }
  ];

  // Auto-rotate effect when not interactive
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.15);
    }, 30);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    currentRotationRef.current = rotation;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    // Multiplier determines drag sensitivity
    setRotation(currentRotationRef.current + deltaX * 0.25);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, rotation]);

  // Touch screen support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    currentRotationRef.current = rotation;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startXRef.current;
    setRotation(currentRotationRef.current + deltaX * 0.3);
  };

  const filteredTechnologies = activeCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section 
      id="technologies"
      className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-15 min-h-[90vh] flex flex-col justify-center overflow-hidden border-t border-white/5"
    >
      {/* Editorial Header */}
      <div className="text-center mb-16 flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.65, scale: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37] uppercase"
        >
          ENGINEERING STACK
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-2 font-display text-3xl md:text-5xl font-light tracking-tight text-white uppercase"
        >
          3D COGNITIVE <span className="text-[#D4AF37] font-semibold">CAROUSEL</span>
        </motion.h2>
        <p className="mt-4 font-sans text-xs text-gray-400 max-w-md tracking-wider">
          Drag horizontally to rotate our core technological system orb. Hover to focus glowing digital components.
        </p>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-1.5 rounded-full font-mono text-[9px] tracking-wider uppercase transition-all border cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-semibold'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Futuristic 3D Carousel Stage */}
      <div 
        className="relative w-full h-[380px] md:h-[450px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        style={{ perspective: '1000px' }}
      >
        {/* Sphere Core Node Spark */}
        <div className="absolute w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl animate-pulse pointer-events-none" />
        <div className="absolute w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF37] pointer-events-none" />

        {/* Floating Ring Outline helpers */}
        <div 
          className="absolute rounded-full border border-dashed border-[#D4AF37]/15 pointer-events-none"
          style={{ width: '480px', height: '480px', transform: 'rotateX(82deg)' }}
        />
        <div 
          className="absolute rounded-full border border-dashed border-[#D4AF37]/10 pointer-events-none"
          style={{ width: '380px', height: '380px', transform: 'rotateX(-60deg)' }}
        />

        {/* Rotating Carousel container using pure CSS variables for trig offsets */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {filteredTechnologies.map((tech, idx) => {
            const count = filteredTechnologies.length;
            const angleStep = 360 / count;
            const currentAngle = idx * angleStep + rotation;
            const radius = window.innerWidth < 768 ? 140 : 220; // Mobile responsiveness

            // Calculate x and z placements for natural 3D cylinder
            const angleInRad = (currentAngle * Math.PI) / 180;
            const x = Math.sin(angleInRad) * radius;
            const z = Math.cos(angleInRad) * radius;

            // Compute depth perspective details
            const scale = (z + radius * 1.5) / (radius * 2.5); // ranges roughly 0.4 to 1.0
            const opacity = (z + radius) / (radius * 1.8); // ranges roughly 0.1 to 1.0

            return (
              <div
                key={tech.name}
                className="absolute text-center select-none pointer-events-auto"
                style={{
                  transform: `translate3d(${x}px, 0px, ${z}px) scale(${scale})`,
                  opacity: Math.max(0.12, opacity),
                  zIndex: Math.round(z + radius),
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out, opacity 0.1s ease-out',
                }}
              >
                {/* Tech Glowing Node */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="px-5 py-3 rounded-2xl bg-[#0c0c0c] border border-white/5 hover:border-[#D4AF37]/45 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all flex flex-col items-center gap-2"
                >
                  {/* Category bullet color */}
                  <span 
                    className={`w-1.5 h-1.5 rounded-full ${
                      tech.category === 'ai' 
                        ? 'bg-[#10B981]' 
                        : tech.category === 'frontend' 
                        ? 'bg-[#D4AF37]' 
                        : 'bg-blue-400'
                    }`}
                  />
                  <span className="font-display text-[10px] md:text-xs font-semibold text-white tracking-widest uppercase">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[7px] text-gray-500 uppercase tracking-widest font-bold">
                    {tech.category.replace('_', ' ')}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
