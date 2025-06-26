import React from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

export const ParticlesBackground: React.FC = () => {
  const particles = React.useRef<THREE.Points>(null);
  useFrame((state, delta) => {
    if (particles.current) {
      particles.current.rotation.x += delta * 0.1;
      particles.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Points
      ref={particles}
      positions={random.inSphere(new Float32Array(500), { radius: 1.5 })}
    >
      <PointMaterial color="#5ffac9" size={0.01} transparent opacity={0.7} />
    </Points>
  );
};
