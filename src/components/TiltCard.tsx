import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import CardParticles from './CardParticles';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  index?: number;
}

export default function TiltCard({ children, className = '', onClick, index = 0 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of cursor relative to card center
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    setMousePos({ x: relativeX, y: relativeY });

    const mouseX = relativeX - width / 2;
    const mouseY = relativeY - height / 2;
    
    // Max tilt angles: 10 degrees for elegant subtle lux vibe
    const targetRotateX = -(mouseY / (height / 2)) * 10;
    const targetRotateY = (mouseX / (width / 2)) * 10;
    
    setRotateX(targetRotateX);
    setRotateY(targetRotateY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ 
        type: 'spring', 
        stiffness: 70, 
        damping: 15,
        delay: index * 0.06 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative rounded-3xl p-8 bg-[#0c0c0c]/85 border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 cursor-pointer select-none transition-colors duration-500 overflow-hidden ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? '10px' : '0px'})`,
        transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.5s ease',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(212, 175, 55, 0.12), 0 15px 35px -10px rgba(0, 0, 0, 0.7)' 
          : '0 10px 30px -15px rgba(0, 0, 0, 0.6)'
      }}
    >
      {/* 3D particle layer container positioned absolutely behind contents */}
      <CardParticles isHovered={isHovered} mouseX={mousePos.x} mouseY={mousePos.y} />

      {/* Absolute inner 3D glow layer */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
        style={{ transform: 'translateZ(2px)' }}
      />
      
      {/* Core card contents */}
      <div style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}
