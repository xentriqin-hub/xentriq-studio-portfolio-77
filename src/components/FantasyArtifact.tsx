import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Shield, Zap } from 'lucide-react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Face {
  indices: number[];
  baseColor: string;
}

export default function FantasyArtifact() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeItem, setActiveItem] = useState<'crystal' | 'rune' | 'ring'>('crystal');
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false });
  const rotationRef = useRef({ rx: 0.5, ry: 0.8, rz: 0.2 });

  // 3D Gemstone Geometry (Crystal)
  const gemVertices: Point3D[] = [
    { x: 0, y: -100, z: 0 }, // 0: Top apex
    // Upper band (6 vertices)
    { x: Math.cos(0) * 60, y: -30, z: Math.sin(0) * 60 },
    { x: Math.cos(Math.PI / 3) * 60, y: -30, z: Math.sin(Math.PI / 3) * 60 },
    { x: Math.cos((2 * Math.PI) / 3) * 60, y: -30, z: Math.sin((2 * Math.PI) / 3) * 60 },
    { x: Math.cos(Math.PI) * 60, y: -30, z: Math.sin(Math.PI) * 60 },
    { x: Math.cos((4 * Math.PI) / 3) * 60, y: -30, z: Math.sin((4 * Math.PI) / 3) * 60 },
    { x: Math.cos((5 * Math.PI) / 3) * 60, y: -30, z: Math.sin((5 * Math.PI) / 3) * 60 },
    // Lower band (6 vertices)
    { x: Math.cos(0) * 65, y: 20, z: Math.sin(0) * 65 },
    { x: Math.cos(Math.PI / 3) * 65, y: 20, z: Math.sin(Math.PI / 3) * 65 },
    { x: Math.cos((2 * Math.PI) / 3) * 65, y: 20, z: Math.sin((2 * Math.PI) / 3) * 65 },
    { x: Math.cos(Math.PI) * 65, y: 20, z: Math.sin(Math.PI) * 65 },
    { x: Math.cos((4 * Math.PI) / 3) * 65, y: 20, z: Math.sin((4 * Math.PI) / 3) * 65 },
    { x: Math.cos((5 * Math.PI) / 3) * 65, y: 20, z: Math.sin((5 * Math.PI) / 3) * 65 },
    { x: 0, y: 100, z: 0 }, // 13: Bottom apex
  ];

  const gemFaces: Face[] = [
    // Top pyramid faces
    { indices: [0, 1, 2], baseColor: 'rgba(99, 102, 241,' },
    { indices: [0, 2, 3], baseColor: 'rgba(129, 140, 248,' },
    { indices: [0, 3, 4], baseColor: 'rgba(168, 85, 247,' },
    { indices: [0, 4, 5], baseColor: 'rgba(139, 92, 246,' },
    { indices: [0, 5, 6], baseColor: 'rgba(236, 72, 153,' },
    { indices: [0, 6, 1], baseColor: 'rgba(99, 102, 241,' },
    // Middle girdle upper triangles
    { indices: [1, 7, 2], baseColor: 'rgba(99, 102, 241,' },
    { indices: [2, 7, 8], baseColor: 'rgba(129, 140, 248,' },
    { indices: [2, 8, 3], baseColor: 'rgba(168, 85, 247,' },
    { indices: [3, 8, 9], baseColor: 'rgba(139, 92, 246,' },
    { indices: [3, 9, 4], baseColor: 'rgba(236, 72, 153,' },
    { indices: [4, 9, 10], baseColor: 'rgba(99, 102, 241,' },
    { indices: [4, 10, 5], baseColor: 'rgba(129, 140, 248,' },
    { indices: [5, 10, 11], baseColor: 'rgba(168, 85, 247,' },
    { indices: [5, 11, 6], baseColor: 'rgba(139, 92, 246,' },
    { indices: [6, 11, 12], baseColor: 'rgba(236, 72, 153,' },
    { indices: [6, 12, 1], baseColor: 'rgba(99, 102, 241,' },
    { indices: [1, 12, 7], baseColor: 'rgba(129, 140, 248,' },
    // Bottom pyramid faces
    { indices: [13, 8, 7], baseColor: 'rgba(99, 102, 241,' },
    { indices: [13, 9, 8], baseColor: 'rgba(129, 140, 248,' },
    { indices: [13, 10, 9], baseColor: 'rgba(168, 85, 247,' },
    { indices: [13, 11, 10], baseColor: 'rgba(139, 92, 246,' },
    { indices: [13, 12, 11], baseColor: 'rgba(236, 72, 153,' },
    { indices: [13, 7, 12], baseColor: 'rgba(99, 102, 241,' },
  ];

  // 3D Star Tetrahedron Geometry (Rune)
  const starVertices: Point3D[] = [
    { x: 0, y: -80, z: 0 }, // 0
    { x: 0, y: 80, z: 0 },  // 1
    // Upper ring
    { x: Math.cos(0) * 55, y: -20, z: Math.sin(0) * 55 },
    { x: Math.cos((2 * Math.PI) / 3) * 55, y: -20, z: Math.sin((2 * Math.PI) / 3) * 55 },
    { x: Math.cos((4 * Math.PI) / 3) * 55, y: -20, z: Math.sin((4 * Math.PI) / 3) * 55 },
    // Lower ring
    { x: Math.cos(Math.PI / 3) * 55, y: 20, z: Math.sin(Math.PI / 3) * 55 },
    { x: Math.cos(Math.PI) * 55, y: 20, z: Math.sin(Math.PI) * 55 },
    { x: Math.cos((5 * Math.PI) / 3) * 55, y: 20, z: Math.sin((5 * Math.PI) / 3) * 55 },
  ];

  const starFaces: Face[] = [
    { indices: [0, 2, 3], baseColor: 'rgba(244, 63, 94,' },
    { indices: [0, 3, 4], baseColor: 'rgba(168, 85, 247,' },
    { indices: [0, 4, 2], baseColor: 'rgba(99, 102, 241,' },
    { indices: [1, 5, 6], baseColor: 'rgba(244, 63, 94,' },
    { indices: [1, 6, 7], baseColor: 'rgba(168, 85, 247,' },
    { indices: [1, 7, 5], baseColor: 'rgba(99, 102, 241,' },
    { indices: [2, 5, 3], baseColor: 'rgba(129, 140, 248,' },
    { indices: [3, 6, 4], baseColor: 'rgba(139, 92, 246,' },
    { indices: [4, 7, 2], baseColor: 'rgba(236, 72, 153,' },
  ];

  // 3D Chrono-Ring Geometry (Ring)
  const ringVertices: Point3D[] = [];
  const ringFaces: Face[] = [];
  const segments = 16;
  const innerRadius = 50;
  const outerRadius = 65;

  // Generate torus vertices
  for (let i = 0; i < segments; i++) {
    const angle = (i * 2 * Math.PI) / segments;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    // Inner loop
    ringVertices.push({ x: cosA * innerRadius, y: -10, z: sinA * innerRadius });
    ringVertices.push({ x: cosA * innerRadius, y: 10, z: sinA * innerRadius });
    // Outer loop
    ringVertices.push({ x: cosA * outerRadius, y: -6, z: sinA * outerRadius });
    ringVertices.push({ x: cosA * outerRadius, y: 6, z: sinA * outerRadius });
  }

  // Generate faces
  for (let i = 0; i < segments; i++) {
    const nextIdx = (i + 1) % segments;
    const offset = i * 4;
    const nextOffset = nextIdx * 4;

    // Top face (outer to inner)
    ringFaces.push({ indices: [offset + 2, offset, nextOffset, nextOffset + 2], baseColor: 'rgba(14, 165, 233,' });
    // Bottom face
    ringFaces.push({ indices: [offset + 1, offset + 3, nextOffset + 3, nextOffset + 1], baseColor: 'rgba(99, 102, 241,' });
    // Outer edge
    ringFaces.push({ indices: [offset, offset + 1, nextOffset + 1, nextOffset], baseColor: 'rgba(168, 85, 247,' });
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    const size = 260;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      mouseRef.current.targetX = x / (size / 2);
      mouseRef.current.targetY = y / (size / 2);
    };

    const handleMouseEnter = () => { mouseRef.current.isHovered = true; };
    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      // Smooth mouse coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;

      // Base rotation + mouse deviation
      const rotationSpeed = mouseRef.current.isHovered ? 0.005 : 0.008;
      rotationRef.current.ry += rotationSpeed;
      rotationRef.current.rx += 0.003;

      const currentRX = rotationRef.current.rx + mouseRef.current.y * 0.5;
      const currentRY = rotationRef.current.ry + mouseRef.current.x * 0.5;
      const currentRZ = rotationRef.current.rz;

      const cosX = Math.cos(currentRX);
      const sinX = Math.sin(currentRX);
      const cosY = Math.cos(currentRY);
      const sinY = Math.sin(currentRY);
      const cosZ = Math.cos(currentRZ);
      const sinZ = Math.sin(currentRZ);

      // Select Geometry
      let activeVertices = gemVertices;
      let activeFaces = gemFaces;

      if (activeItem === 'rune') {
        activeVertices = starVertices;
        activeFaces = starFaces;
      } else if (activeItem === 'ring') {
        activeVertices = ringVertices;
        activeFaces = ringFaces;
      }

      // Project vertices to 2D
      const projected = activeVertices.map((v) => {
        // Rotate Z
        let x1 = v.x * cosZ - v.y * sinZ;
        let y1 = v.y * cosZ + v.x * sinZ;
        let z1 = v.z;

        // Rotate Y
        let x2 = x1 * cosY - z1 * sinY;
        let z2 = z1 * cosY + x1 * sinY;

        // Rotate X
        let y3 = y1 * cosX - z2 * sinX;
        let z3 = z2 * cosX + y1 * sinX;

        // Simple perspective projection
        const scale = 240 / (240 + z3);
        const screenX = size / 2 + x2 * scale;
        const screenY = size / 2 + y3 * scale;

        return { x: screenX, y: screenY, z: z3, scale };
      });

      // Compute normal and depth of each face for sorting & lighting
      const renderFaces = activeFaces.map((face, index) => {
        const indices = face.indices;
        
        // Calculate average Z-depth for painters algorithm
        const avgZ = indices.reduce((sum, idx) => sum + projected[idx].z, 0) / indices.length;

        // Compute face normal vector using original 3D coordinates of first three vertices
        const p0 = activeVertices[indices[0]];
        const p1 = activeVertices[indices[1]];
        const p2 = activeVertices[indices[2]];

        const v1 = { x: p1.x - p0.x, y: p1.y - p0.y, z: p1.z - p0.z };
        const v2 = { x: p2.x - p0.x, y: p2.y - p0.y, z: p2.z - p0.z };

        // Cross product
        const normalX = v1.y * v2.z - v1.z * v2.y;
        const normalY = v1.z * v2.x - v1.x * v2.z;
        const normalZ = v1.x * v2.y - v1.y * v2.x;

        // Normalize
        const len = Math.sqrt(normalX * normalX + normalY * normalY + normalZ * normalZ);
        const nx = normalX / len;
        const ny = normalY / len;
        const nz = normalZ / len;

        // Rotate normal to match object rotation
        // Rotate Y
        let rnx = nx * cosY - nz * sinY;
        let rnz = nz * cosY + nx * sinY;
        // Rotate X
        let rny = ny * cosX - rnz * sinX;

        // Shading based on mouse interactive light source
        const lightDir = { x: mouseRef.current.x * 0.8, y: mouseRef.current.y * 0.8, z: 1 };
        const lightLen = Math.sqrt(lightDir.x * lightDir.x + lightDir.y * lightDir.y + lightDir.z * lightDir.z);
        const lx = lightDir.x / lightLen;
        const ly = lightDir.y / lightLen;
        const lz = lightDir.z / lightLen;

        const dotProduct = rnx * lx + rny * ly + rnz * lz;
        const intensity = Math.max(0.15, (dotProduct + 1) / 2); // Map -1..1 to 0.15..1

        return {
          index,
          indices,
          avgZ,
          intensity,
          baseColor: face.baseColor,
        };
      });

      // Painter's Algorithm: sort by back-to-front depth
      renderFaces.sort((a, b) => b.avgZ - a.avgZ);

      // Render faces
      renderFaces.forEach((face) => {
        ctx.beginPath();
        face.indices.forEach((vIdx, i) => {
          const pt = projected[vIdx];
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();

        // Facet Fill Style (reflective translucent gradient glass)
        const alpha = 0.18 + face.intensity * 0.15;
        ctx.fillStyle = `${face.baseColor}${alpha})`;
        ctx.fill();

        // Facet Stroke Style (glowing edges)
        const strokeAlpha = 0.35 + face.intensity * 0.45;
        ctx.strokeStyle = `rgba(255, 255, 255, ${strokeAlpha})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();

        // Highlight sheen on active angles
        if (face.intensity > 0.75) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${(face.intensity - 0.7) * 1.5})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      // Add small sparks floating inside the artifact
      if (Math.random() < 0.15) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        const randPt = projected[Math.floor(Math.random() * projected.length)];
        ctx.arc(randPt.x + (Math.random() - 0.5) * 10, randPt.y + (Math.random() - 0.5) * 10, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeItem]);

  return (
    <div id="fantasy-artifact-module" className="flex flex-col items-center justify-center p-4">
      {/* 3D Render Window */}
      <div className="relative flex items-center justify-center w-[270px] h-[270px] rounded-3xl glass-card border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.08)] bg-black/40 group">
        
        {/* Glowing atmospheric orbits */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/10 opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5 animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-indigo-500/5 animate-pulse pointer-events-none" />

        {/* 3D Canvas */}
        <canvas
          ref={canvasRef}
          className="relative z-10 cursor-grab active:cursor-grabbing select-none transition-transform duration-300 group-hover:scale-105"
          style={{ width: 260, height: 260 }}
        />

        {/* Delicate Glass HUD Label */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
          <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />
          <span className="font-mono text-[9px] text-gray-300 uppercase tracking-widest font-medium">
            {activeItem === 'crystal' && 'Refractive Mana Crystal'}
            {activeItem === 'rune' && 'Aura Core Polyhedron'}
            {activeItem === 'ring' && 'Chrono-Torus Loop'}
          </span>
        </div>
      </div>

      {/* Artifact Matrix Controls */}
      <div className="flex justify-center items-center gap-2.5 mt-5">
        <button
          onClick={() => setActiveItem('crystal')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-mono text-[10px] tracking-wider transition-all duration-300 ${
            activeItem === 'crystal'
              ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
              : 'bg-white/2 border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          CRYSTAL
        </button>

        <button
          onClick={() => setActiveItem('rune')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-mono text-[10px] tracking-wider transition-all duration-300 ${
            activeItem === 'rune'
              ? 'bg-purple-500/15 border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
              : 'bg-white/2 border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
          }`}
        >
          <Compass className="w-3 h-3" />
          CORE
        </button>

        <button
          onClick={() => setActiveItem('ring')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-mono text-[10px] tracking-wider transition-all duration-300 ${
            activeItem === 'ring'
              ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(14,165,233,0.15)]'
              : 'bg-white/2 border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
          }`}
        >
          <Zap className="w-3 h-3" />
          CHRONO
        </button>
      </div>
    </div>
  );
}
