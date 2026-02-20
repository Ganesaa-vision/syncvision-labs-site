import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';

const AnimatedKnot = () => {
  const knotRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (knotRef.current) {
      // Rotation animation
      knotRef.current.rotation.x += delta * 0.1;
      knotRef.current.rotation.y += delta * 0.2;

      // Scale-in animation on mount, matching the original duration
      const duration = 2;
      // Calculate time elapsed, clamped between 0 and 1
      const t = Math.min(state.clock.getElapsedTime() / duration, 1);
      
      // Apply an ease-out quint function to replicate the smooth spring-like opening
      const easedT = 1 - Math.pow(1 - t, 5);
      
      const scale = THREE.MathUtils.lerp(0, 1, easedT);
      knotRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <TorusKnot ref={knotRef} args={[1, 0.3, 200, 32]}>
      <meshStandardMaterial 
        color="#6366f1"
        emissive="#4338ca"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.1}
        wireframe={true}
      />
    </TorusKnot>
  );
};

const HeroAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.5}
          color="#ffffff"
        />
        <directionalLight 
          position={[-5, -5, -5]} 
          intensity={0.5}
          color="#818cf8"
        />
        <AnimatedKnot />
      </Canvas>
    </div>
  );
};

export default HeroAnimation;