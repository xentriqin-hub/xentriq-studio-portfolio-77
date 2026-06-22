import React, { Suspense, useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Highly optimized custom shader material for realistic glowing luxury gold dust particles
const particleVertexShader = `
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uMouse;
  attribute vec3 aTargetSpiral;
  attribute vec3 aTargetLogo;
  attribute float aSpeed;
  attribute float aRandomOffset;
  
  varying vec3 vPosition;
  varying float vScroll;

  void main() {
    vScroll = uScroll;
    
    // Smooth transition weights based on scroll steps
    float tSpiral = 0.0;
    float tLogo = 0.0;
    
    if (uScroll < 0.4) {
      // Transition from cosmic dust to spiral
      tSpiral = smoothstep(0.0, 0.4, uScroll);
    } else if (uScroll < 0.85) {
      tSpiral = 1.0 - smoothstep(0.4, 0.7, uScroll);
      tLogo = smoothstep(0.4, 0.75, uScroll);
    } else {
      // State 3: Final explosion/dispersion from Logo
      tLogo = 1.0 - smoothstep(0.85, 0.98, uScroll);
    }

    // Blend coordinates on the GPU
    vec3 morphPosition = mix(position, aTargetSpiral, tSpiral);
    morphPosition = mix(morphPosition, aTargetLogo, tLogo);
    
    // Add micro-breathing motion
    float wave = sin(uTime * aSpeed + aRandomOffset) * 0.06;
    morphPosition.x += wave;
    morphPosition.y += cos(uTime * aSpeed * 0.8) * 0.06;
    morphPosition.z += sin(uTime * aSpeed * 1.2) * 0.03;

    // Apply mouse parallax shift
    morphPosition.x += uMouse.x * 0.4 * (1.0 - tLogo * 0.7);
    morphPosition.y += uMouse.y * 0.4 * (1.0 - tLogo * 0.7);

    if (uScroll >= 0.85) {
      // Explode outwards at the end of scroll
      float expForce = smoothstep(0.85, 0.98, uScroll) * 4.5;
      morphPosition += normalize(aTargetLogo + vec3(0.001)) * expForce * aRandomOffset;
    }

    vec4 mvPosition = modelViewMatrix * vec4(morphPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation (near particles are larger)
    gl_PointSize = (18.0 / -mvPosition.z) * (1.1 + sin(uTime * 2.0 + aRandomOffset) * 0.2);
  }
`;

const particleFragmentShader = `
  varying float vScroll;
  
  void main() {
    // Make circular particles instead of square
    float dist = distance(gl_PointCoord, vec2(0.5));
    if (dist > 0.5) discard;
    
    // Dynamic soft luxury gold colors
    vec3 goldBase = vec3(0.95, 0.81, 0.43); // #F3CF6B
    vec3 goldBright = vec3(1.0, 0.92, 0.65); // brighter glowing center
    
    vec3 color = mix(goldBase, goldBright, smoothstep(0.1, 0.5, 0.5 - dist));
    
    // Soft outer glow fade
    float alpha = smoothstep(0.5, 0.1, dist) * 0.85;
    
    gl_FragColor = vec4(color, alpha);
  }
`;

function ParticleEngine() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const scrollRef = useRef<number>(0);
  const { size } = useThree();

  const particleCount = 10000;

  // Initialize mouse listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      scrollRef.current = docHeight > 0 ? currentScroll / docHeight : 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute positions
  const { positions, spirals, logos, speeds, offsets } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const spirals = new Float32Array(particleCount * 3);
    const logos = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    const offsets = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      
      // Speed & Offsets
      speeds[i] = 0.5 + Math.random() * 2.5;
      offsets[i] = Math.random() * Math.PI * 2;

      // STAGE 0: Infinite deep cloud
      positions[idx] = (Math.random() - 0.5) * 12;
      positions[idx + 1] = (Math.random() - 0.5) * 10;
      positions[idx + 2] = (Math.random() - 0.5) * 8 - 2;

      // STAGE 1: Smooth luxury spiral vortex
      const theta = (i / particleCount) * Math.PI * 32; // multiple spiral turns
      const radius = 0.15 + (i / particleCount) * 4.5;
      spirals[idx] = Math.cos(theta) * radius;
      spirals[idx + 1] = Math.sin(theta) * radius;
      spirals[idx + 2] = (Math.random() - 0.5) * 1.5 - (radius * 0.3);

      // STAGE 2: Precise 3D Volumetric Xentriq Logo (Z-Shape ribbon)
      const section = i % 4;
      const t = Math.random();
      let lx = 0;
      let ly = 0;
      let lz = (Math.random() - 0.5) * 0.4;

      if (section === 0) {
        // Curve top bar
        // Moves from left [-1.2, 1.2] to right [1.0, 1.0]
        lx = -1.2 + t * 2.2;
        if (lx < -0.4) {
          // Curved upper left corner
          const angle = ((lx + 1.2) / 0.8) * (Math.PI / 2);
          lx = -0.4 - Math.cos(angle) * 0.8;
          ly = 0.4 + Math.sin(angle) * 0.8;
        } else {
          ly = 1.2;
        }
      } else if (section === 1) {
        // Curve bottom bar
        // Moves from right [1.2, -1.2] to left [-1.0, -1.0]
        lx = 1.2 - t * 2.2;
        if (lx > 0.4) {
          // Curved lower right corner
          const angle = ((1.2 - lx) / 0.8) * (Math.PI / 2);
          lx = 0.4 + Math.cos(angle) * 0.8;
          ly = -0.4 - Math.sin(angle) * 0.8;
        } else {
          ly = -1.2;
        }
      } else if (section === 2) {
        // Slanted main diagonal bar
        lx = -1.0 + t * 2.0;
        ly = -1.0 + t * 2.0;
      } else {
        // Second parallel internal slanted accent bar (the dual luxury ribbon stroke)
        lx = -0.4 + t * 1.2;
        ly = -0.6 + t * 1.2;
        lz = (Math.random() - 0.5) * 0.2;
      }

      // Scale logo matching standard visual center
      logos[idx] = lx * 1.4;
      logos[idx + 1] = ly * 1.4;
      logos[idx + 2] = lz * 1.4;
    }

    return { positions, spirals, logos, speeds, offsets };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
      // Exponentially ease scroll to make particle transition smoother
      materialRef.current.uniforms.uScroll.value += (scrollRef.current - materialRef.current.uniforms.uScroll.value) * 0.1;
      
      // Smoothly interpolate mouse parallax coordinates to avoid jumpiness
      materialRef.current.uniforms.uMouse.value.x += (mouseRef.current.x - materialRef.current.uniforms.uMouse.value.x) * 0.08;
      materialRef.current.uniforms.uMouse.value.y += (mouseRef.current.y - materialRef.current.uniforms.uMouse.value.y) * 0.08;
    }

    if (pointsRef.current) {
      const scroll = scrollRef.current;
      // Subtle natural rotational drifts depending on sections
      if (scroll < 0.4) {
        pointsRef.current.rotation.y = time * 0.03;
        pointsRef.current.rotation.x = time * 0.01;
      } else if (scroll < 0.85) {
        // Faster spiral vortex rotation
        pointsRef.current.rotation.y = time * 0.08;
        pointsRef.current.rotation.z = time * 0.02;
      } else {
        // Elegant slower logo presentation orbit
        pointsRef.current.rotation.y = time * 0.015 + (scroll * 0.5);
        pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aTargetSpiral"
          args={[spirals, 3]}
        />
        <bufferAttribute
          attach="attributes-aTargetLogo"
          args={[logos, 3]}
        />
        <bufferAttribute
          attach="attributes-aSpeed"
          args={[speeds, 1]}
        />
        <bufferAttribute
          attach="attributes-aRandomOffset"
          args={[offsets, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) }
        }}
      />
    </points>
  );
}

// 3D floating digital elements that add deep luxury layers (rings, wireframes, grids)
function FloatingBackgroundElements() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);
  const meshRef4 = useRef<THREE.Mesh>(null);
  const meshRef5 = useRef<THREE.Mesh>(null);
  const parentRef = useRef<THREE.Group>(null);
  
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      scrollRef.current = docHeight > 0 ? currentScroll / docHeight : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = scrollRef.current;

    if (parentRef.current) {
      // Moves camera/scenes drift dynamically on vertical scroll (parallax)
      parentRef.current.position.y = -scroll * 6.0;
    }

    if (meshRef1.current) {
      // Luxury gold wireframe torus ring floating
      meshRef1.current.rotation.x = time * 0.15 + scroll * 2.0;
      meshRef1.current.rotation.y = time * 0.25;
      meshRef1.current.position.y = Math.sin(time * 0.5) * 0.25 + 0.5;
    }

    if (meshRef2.current) {
      // Futuristic holographic cube
      meshRef2.current.rotation.y = -time * 0.2 + scroll * 2.5;
      meshRef2.current.rotation.z = time * 0.1;
      meshRef2.current.position.y = Math.cos(time * 0.4) * 0.2 - 2.5;
    }

    if (meshRef3.current) {
      // Small orbiting particle ring
      meshRef3.current.rotation.z = time * 0.3 + scroll * 1.5;
      meshRef3.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    }

    if (meshRef4.current) {
      // Exquisite gold wireframe icosahedron
      meshRef4.current.rotation.y = time * 0.22 - scroll * 1.8;
      meshRef4.current.rotation.x = time * 0.15;
      meshRef4.current.position.y = Math.sin(time * 0.3) * 0.3 - 6.0;
    }

    if (meshRef5.current) {
      // Holographic dodecahedron
      meshRef5.current.rotation.x = -time * 0.12 + scroll * 3.0;
      meshRef5.current.rotation.z = time * 0.18;
      meshRef5.current.position.y = Math.cos(time * 0.5) * 0.2 - 10.0;
    }
  });

  return (
    <group ref={parentRef}>
      {/* Dynamic luxury gold ring */}
      <mesh ref={meshRef1} position={[3.5, 0.5, -3]}>
        <torusGeometry args={[0.9, 0.02, 16, 100]} />
        <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.25} />
      </mesh>

      {/* Futuristic holographic cube */}
      <mesh ref={meshRef2} position={[-3.5, -1, -4]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.12} />
      </mesh>

      {/* Orbiting thin particle disk helper */}
      <mesh ref={meshRef3} position={[0, -5, -6]}>
        <ringGeometry args={[2.5, 2.52, 64]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.18} />
      </mesh>

      {/* Exquisite wireframe icosahedron */}
      <mesh ref={meshRef4} position={[3.8, -6.0, -4.5]}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.22} />
      </mesh>

      {/* Holographic dodecahedron */}
      <mesh ref={meshRef5} position={[-4.0, -10.0, -5]}>
        <dodecahedronGeometry args={[1.0, 0]} />
        <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Digital tracking floor grid at the absolute bottom */}
      <gridHelper args={[40, 40, '#D4AF37', '#111111']} position={[0, -15, 0]} />
    </group>
  );
}

// Custom Camera Director to animate the field-of-view and alignment coordinates based on scroll depth
function CameraController() {
  const { camera } = useThree();
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      scrollRef.current = docHeight > 0 ? currentScroll / docHeight : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    const scroll = scrollRef.current;
    
    // Smooth camera Z compression based on scroll depth
    const targetZ = 5.0 - scroll * 1.6;
    camera.position.z += (targetZ - camera.position.z) * 0.08;

    // Gentle camera rotation tilt based on scroll depth to match reading line-of-sight
    const targetX = -scroll * 0.15;
    camera.rotation.x += (targetX - camera.rotation.x) * 0.08;

    // Subtle panning shift to match natural spatial reading flow
    const targetY = scroll * 0.08;
    camera.position.y += (-scroll * 1.5 - camera.position.y) * 0.08;
  });

  return null;
}

export default function ThreeCanvas() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#020202]">
      {/* Dynamic soft light beam effects */}
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none blur-3xl rounded-full" />
      <div className="absolute top-[25vh] left-[-10vw] w-[40vw] h-[40vw] bg-[#D4AF37]/3 pointer-events-none blur-3xl rounded-full" />
      <div className="absolute bottom-[10vh] right-[-10vw] w-[40vw] h-[40vw] bg-[#D4AF37]/3 pointer-events-none blur-3xl rounded-full" />

      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ fov: 60, near: 0.1, far: 50 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <CameraController />
        
        {/* Cinematic rich premium lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 2]} intensity={1.5} color="#D4AF37" />
        <pointLight position={[-5, -5, -2]} intensity={0.5} color="#A78BFA" />

        <Suspense fallback={null}>
          <ParticleEngine />
          <FloatingBackgroundElements />
        </Suspense>
      </Canvas>
    </div>
  );
}
