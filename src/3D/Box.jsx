import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import useKeyboard from "../hooks/useKeyBoard";

export default function Box(props) {
  const boxRef = useRef();
  const { forward, backward, left, right, shift } = useKeyboard();

  useFrame(() => {
    if (forward) {
      if (shift) {
        boxRef.current.position.z += -0.1;
      }
      boxRef.current.position.z += -0.02;
    }
    if (backward) {
      if (shift) {
        boxRef.current.position.z += 0.1;
      }
      boxRef.current.position.z += 0.02;
    }
    if (left) {
      if (shift) {
        boxRef.current.position.x += -0.1;
      }
      boxRef.current.position.x += -0.02;
    }
    if (right) {
      if (shift) {
        boxRef.current.position.x += 0.1;
      }
      boxRef.current.position.x += 0.02;
    }
  });

  return (
    <mesh ref={boxRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}
