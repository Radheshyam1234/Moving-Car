import React from "react";

export default function Plane(props) {
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
}
