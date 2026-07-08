import React, { useEffect, useRef } from 'react';

interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
}

export const DotField: React.FC<DotFieldProps> = ({
  dotRadius = 1.5,
  dotSpacing = 14,
  cursorRadius = 500,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 67,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = 'rgba(168, 85, 247, 0.35)',
  gradientTo = 'rgba(180, 151, 207, 0.25)',
  glowColor = '#120F17',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // High DPI Canvas setup
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);

    // Mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleMouseEnter = () => {
      mouseRef.current.active = true;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    let time = 0;

    // Animation loop
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // 1. Draw Background Glow around cursor
      if (mouse.active) {
        const glowGrd = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );
        glowGrd.addColorStop(0, gradientFrom);
        glowGrd.addColorStop(0.5, gradientTo);
        glowGrd.addColorStop(1, 'rgba(5, 5, 5, 0)');
        
        ctx.fillStyle = glowGrd;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Extra subtle dark overlay for glowColor if specified
        if (glowColor) {
          ctx.fillStyle = 'rgba(18, 15, 23, 0.05)';
          ctx.fillRect(0, 0, width, height);
        }
      }

      // 2. Draw Dot Field
      const cols = Math.ceil(width / dotSpacing) + 1;
      const rows = Math.ceil(height / dotSpacing) + 1;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const originX = c * dotSpacing;
          const originY = r * dotSpacing;

          let targetX = originX;
          let targetY = originY;

          // Wave motion if amplitude specified
          if (waveAmplitude > 0) {
            targetY += Math.sin(originX * 0.01 + time) * waveAmplitude;
          }

          let dotColor = 'rgba(255, 255, 255, 0.12)';

          // React to cursor
          if (mouse.active) {
            const dx = originX - mouse.x;
            const dy = originY - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < cursorRadius) {
              const angle = Math.atan2(dy, dx);
              // Bulge effect calculation
              const factor = 1 - distance / cursorRadius;
              
              // Apply strength and force
              const displacement = factor * bulgeStrength * cursorForce;

              if (bulgeOnly) {
                targetX += Math.cos(angle) * displacement;
                targetY += Math.sin(angle) * displacement;
              } else {
                targetX -= Math.cos(angle) * displacement;
                targetY -= Math.sin(angle) * displacement;
              }

              // Color transition for dots near cursor
              const colorRatio = factor * factor; // square for smoother falloff
              dotColor = `rgba(${Math.floor(168 * colorRatio + 255 * (1 - colorRatio))}, ${Math.floor(85 * colorRatio + 255 * (1 - colorRatio))}, ${Math.floor(247 * colorRatio + 255 * (1 - colorRatio))}, ${0.12 + 0.38 * colorRatio})`;
            }
          }

          // Optional sparkle effect
          let radius = dotRadius;
          if (sparkle) {
            const sparkleFactor = Math.sin(originX * originY + time * 2) * 0.5 + 0.5;
            radius = dotRadius * (0.6 + sparkleFactor * 0.8);
          }

          ctx.fillStyle = dotColor;
          ctx.beginPath();
          ctx.arc(targetX, targetY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [
    dotRadius,
    dotSpacing,
    cursorRadius,
    cursorForce,
    bulgeOnly,
    bulgeStrength,
    glowRadius,
    sparkle,
    waveAmplitude,
    gradientFrom,
    gradientTo,
    glowColor,
  ]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-transparent">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none block" />
    </div>
  );
};
