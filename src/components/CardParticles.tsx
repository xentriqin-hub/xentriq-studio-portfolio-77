import React, { useEffect, useRef } from 'react';

interface CardParticlesProps {
  isHovered: boolean;
  mouseX?: number;
  mouseY?: number;
  color?: string;
  count?: number;
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  originalX: number;
  originalY: number;
  originalZ: number;
  color: string;
  size: number;
}

export default function CardParticles({
  isHovered,
  mouseX = 0,
  mouseY = 0,
  color = '#D4AF37', // Luxury gold
  count = 35,
}: CardParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle3D[]>([]);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(canvas);

    // Initial positioning in 3D sphere coordinate space
    const focalLength = 150;
    const particles: Particle3D[] = [];

    for (let i = 0; i < count; i++) {
      // Cylindrical or spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = Math.random() * 90 + 20;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        originalX: x,
        originalY: y,
        originalZ: z,
        size: Math.random() * 1.5 + 0.6,
        color: color,
      });
    }
    particlesRef.current = particles;

    let angleX = 0.004;
    let angleY = 0.005;
    let angleZ = 0.002;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Adjust rotation speed based on hover
      const currentAngleX = isHovered ? angleX * 2.5 : angleX;
      const currentAngleY = isHovered ? angleY * 2.5 : angleY;
      const currentAngleZ = isHovered ? angleZ * 2.5 : angleZ;

      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);
      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosZ = Math.cos(currentAngleZ);
      const sinZ = Math.sin(currentAngleZ);

      // Mouse interactive target position inside card box bounds
      const targetX = mouseX - centerX;
      const targetY = mouseY - centerY;

      particlesRef.current.forEach((p) => {
        // 1. Rotate around X axis
        let y = p.y * cosX - p.z * sinX;
        let z = p.z * cosX + p.y * sinX;

        // 2. Rotate around Y axis
        let x = p.x * cosY - z * sinY;
        z = z * cosY + p.x * sinY;

        // 3. Rotate around Z axis
        const rx = x * cosZ - y * sinZ;
        const ry = y * cosZ + x * sinZ;

        p.x = rx;
        p.y = ry;
        p.z = z;

        // If hovered, gently attract particles to the mouse cursor path
        if (isHovered) {
          p.x += (targetX - p.x) * 0.04;
          p.y += (targetY - p.y) * 0.04;
        } else {
          // Return to home state orbit
          p.x += (p.originalX - p.x) * 0.02;
          p.y += (p.originalY - p.y) * 0.02;
          p.z += (p.originalZ - p.z) * 0.02;
        }

        // Add noise/velocity drift
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Perspective Projection calculation
        const cameraDistance = 200;
        const scale = focalLength / (focalLength + p.z + cameraDistance);
        
        const screenX = centerX + p.x * scale * 1.5;
        const screenY = centerY + p.y * scale * 1.5;

        // Only draw if within reasonable visual boundary inside the bounds
        if (screenX > 0 && screenX < width && screenY > 0 && screenY < height) {
          // Apply opacity based on depth coordinate Z (parallax depth-cueing)
          const depthOpacity = Math.max(0.1, Math.min(0.9, (p.z + 150) / 300));
          const baseAlpha = isHovered ? 0.85 : 0.45;
          const finalAlpha = baseAlpha * depthOpacity;

          ctx.beginPath();
          ctx.arc(screenX, screenY, p.size * scale * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = finalAlpha;
          ctx.fill();

          // Connect nearby particles for elegant 3D web construct look
          particlesRef.current.forEach((other) => {
            const dx = p.x - other.x;
            const dy = p.y - other.y;
            const dz = p.z - other.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            if (dist < 42) {
              const otherScale = focalLength / (focalLength + other.z + cameraDistance);
              const otherScreenX = centerX + other.x * otherScale * 1.5;
              const otherScreenY = centerY + other.y * otherScale * 1.5;

              ctx.beginPath();
              ctx.moveTo(screenX, screenY);
              ctx.lineTo(otherScreenX, otherScreenY);
              // Gold wire color link transparency
              ctx.strokeStyle = '#D4AF37';
              ctx.globalAlpha = (1 - dist / 42) * finalAlpha * 0.35;
              ctx.lineWidth = 0.5 * scale;
              ctx.stroke();
            }
          });
        }
      });

      ctx.globalAlpha = 1.0;
      requestRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHovered, mouseX, mouseY, color, count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
}
