import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./Box";
import { Car } from "./Car";
import Plane from "./Plane";

export default function Playground() {
  return (
    <Canvas>
      {/* <Box position={[0, 0, 0]} /> */}
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[1, 0, 1]} />
      <Plane position={[0, -0.5, 0]} />
      {/* <SpiderMan position={[0, 28, 0]} /> */}
      <Car />
    </Canvas>
  );
}
