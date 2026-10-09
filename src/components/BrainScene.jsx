import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls, PointMaterial, Points } from "@react-three/drei";
import { useMemo, useRef } from "react";

function Brain() {
  const ref = useRef();
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 14500; i += 1) {
      const theta = i * 2.399963229728653;
      const phi = Math.acos(1 - 2 * ((i + 0.5) / 14500));
      const side = Math.cos(theta) >= 0 ? 1 : -1;
      const ripple = 1 + Math.sin(theta * 8) * 0.045 + Math.sin(phi * 11) * 0.035;
      let x = Math.abs(Math.sin(phi) * Math.cos(theta) * 2.4 * ripple) * side;
      const y = Math.cos(phi) * 1.58 * ripple;
      const z = Math.sin(phi) * Math.sin(theta) * 1.72 * ripple;
      x += side * 0.12;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={ref}>
      <Points positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#183d98" size={0.016} sizeAttenuation depthWrite={false} />
      </Points>
      <NeuralNetwork />
    </group>
  );
}

function NeuralNetwork() {
  const paths = useMemo(() => Array.from({ length: 64 }, (_, index) => {
    const angle = (index / 64) * Math.PI * 2;
    const tilt = ((index % 9) - 4) * 0.12;
    return [
      [-1.15 * Math.cos(angle), -0.7 + tilt, -0.5],
      [-0.32 * Math.cos(angle * 1.7), tilt * 0.5, 0],
      [0.42 * Math.sin(angle * 1.25), 0.55 - tilt, 0.42],
      [1.2 * Math.cos(angle + 0.4), tilt, -0.28],
    ];
  }), []);

  return (
    <group>
      {paths.map((points, index) => <Line key={index} points={points} color="#2858bd" lineWidth={0.5} transparent opacity={0.65} />)}
      {[-0.9, -0.3, 0.3, 0.9].map((x) => (
        [-0.58, 0, 0.58].map((y) => (
          <mesh key={`${x}-${y}`} position={[x, y, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#0f3590" transparent opacity={0.95} />
          </mesh>
        ))
      ))}
    </group>
  );
}

export default function BrainScene() {
  return (
    <div className="brain-scene" aria-label="A rotating three-dimensional brain filled with a neural network">
      <Canvas camera={{ position: [0, 0, 6.7], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={1.4} />
        <Brain />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
