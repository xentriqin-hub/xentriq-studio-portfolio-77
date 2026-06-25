import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  speed: number;
  angle: number;
  rotSpeed: number;
  opacity: number;
  glow: number;
}

export default function FantasyParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle Config
    const PARTICLE_COUNT = 150;
    const particles: Particle[] = [];
    const focalLength = 300; // Camera focal length for 3D projection

    // Warm, fantasy magical colors
    const colors = [
      'rgba(129, 140, 248, ',  // Indigo
      'rgba(168, 85, 247, ',   // Purple
      'rgba(99, 102, 241, ',   // Violet
      'rgba(244, 63, 94, ',    // Rose / Fantasy Pink
      'rgba(14, 165, 233, ',   // Cyan / Sky
    ];

    // Initialize 3D particles in a spherical/vortex space
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = Math.random() * 350 + 50;
      const angle = Math.random() * Math.PI * 2;
      const heightOffset = (Math.random() - 0.5) * 400;

      // 3D coordinates relative to center
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = heightOffset;

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        angle,
        rotSpeed: Math.random() * 0.005 + 0.002,
        opacity: Math.random() * 0.5 + 0.3,
        glow: Math.random() * 10 + 5,
      });
    }

    // Window Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse Move Handler
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      // Normalize to -1 to 1 range
      mouseRef.current.targetX = (e.clientX - cx) / cx;
      mouseRef.current.targetY = (e.clientY - cy) / cy;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for mouse interaction
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const angleY = mouseRef.current.x * 0.3; // Rotate around Y axis
      const angleX = mouseRef.current.y * 0.3; // Rotate around X axis

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Process and sort particles by depth (z) to render properly
      const projectedParticles = particles.map((p) => {
        // Continuous orbital rotation in 3D space
        p.angle += p.rotSpeed;
        const currentRadius = Math.sqrt(p.baseX * p.baseX + p.baseZ * p.baseZ);
        const curX = Math.cos(p.angle) * currentRadius;
        const curZ = Math.sin(p.angle) * currentRadius;
        const curY = p.baseY;

        // Apply mouse rotation Y
        let x1 = curX * cosY - curZ * sinY;
        let z1 = curZ * cosY + curX * sinY;

        // Apply mouse rotation X
        let y2 = curY * cosX - z1 * sinX;
        let z2 = z1 * cosX + curY * sinX;

        // Camera distance shift
        const cameraDistance = 450;
        const finalZ = z2 + cameraDistance;

        // Perspective projection
        let scale = focalLength / finalZ;
        if (scale < 0) scale = 0;

        const screenX = width / 2 + x1 * scale;
        const screenY = height / 2 + y2 * scale;
        const size = p.size * scale;

        return {
          screenX,
          screenY,
          size,
          z: finalZ,
          color: p.color,
          opacity: p.opacity * Math.min(1, scale * 1.5),
          glow: p.glow * scale,
        };
      });

      // Depth sort: paint particles further away first (painters algorithm)
      projectedParticles.sort((a, b) => b.z - a.z);

      // Draw projected particles
      projectedParticles.forEach((p) => {
        if (p.screenX < 0 || p.screenX > width || p.screenY < 0 || p.screenY > height) return;

        // Beautiful layered radial gradient for glowing fantasy sparks
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          p.screenX,
          p.screenY,
          0,
          p.screenX,
          p.screenY,
          Math.max(1, p.size * 3)
        );

        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.2, `${p.color}${p.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.arc(p.screenX, p.screenY, Math.max(1, p.size * 3), 0, Math.PI * 2);
        ctx.fill();

        // Extra dynamic cross star flare for larger glowing particles
        if (p.size > 2.2) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          // Horizontal line
          ctx.moveTo(p.screenX - p.size * 2.5, p.screenY);
          ctx.lineTo(p.screenX + p.size * 2.5, p.screenY);
          // Vertical line
          ctx.moveTo(p.screenX, p.screenY - p.size * 2.5);
          ctx.lineTo(p.screenX, p.screenY + p.size * 2.5);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
