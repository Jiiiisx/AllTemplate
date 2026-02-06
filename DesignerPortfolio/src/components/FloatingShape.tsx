import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleExplosion = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);

  const count = 2500;
  const [positions, originalPositions, stepData] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    const steps = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const x = Math.cos(theta) * Math.sin(phi) * 1.5;
      const y = Math.sin(theta) * Math.sin(phi) * 1.5;
      const z = Math.cos(phi) * 1.5;

      pos.set([x, y, z], i * 3);
      orig.set([x, y, z], i * 3);
      steps[i] = Math.random() * 0.4 + 0.6;
    }
    return [pos, orig, steps];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const attr = pointsRef.current.geometry.attributes.position;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const hX = originalPositions[i3];
      const hY = originalPositions[i3 + 1];
      const hZ = originalPositions[i3 + 2];

      if (hovered) {
        const factor = 2.2 * stepData[i];
        attr.array[i3] = THREE.MathUtils.lerp(attr.array[i3], hX * factor + Math.sin(time * 3 + i) * 0.3, 0.1);
        attr.array[i3 + 1] = THREE.MathUtils.lerp(attr.array[i3 + 1], hY * factor + Math.cos(time * 3 + i) * 0.3, 0.1);
        attr.array[i3 + 2] = THREE.MathUtils.lerp(attr.array[i3 + 2], hZ * factor + Math.sin(time * 2 + i) * 0.3, 0.1);
      } else {
        const pulse = Math.sin(time + i) * 0.05;
        attr.array[i3] = THREE.MathUtils.lerp(attr.array[i3], hX + pulse, 0.05);
        attr.array[i3 + 1] = THREE.MathUtils.lerp(attr.array[i3 + 1], hY + pulse, 0.05);
        attr.array[i3 + 2] = THREE.MathUtils.lerp(attr.array[i3 + 2], hZ + pulse, 0.05);
      }
    }
    
    attr.needsUpdate = true;
    pointsRef.current.rotation.y += 0.001;
  });

  return (
    <Points 
      ref={pointsRef} 
      positions={positions} 
      stride={3} 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <PointMaterial
        transparent
        color="#BFFF00"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const FloatingShape = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] cursor-pointer z-0">
      <Canvas 
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleExplosion />
      </Canvas>
    </div>
  );
};

export default FloatingShape;