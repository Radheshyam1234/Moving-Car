import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useKeyboard from "../hooks/useKeyBoard";
import { useFrame } from "@react-three/fiber";

export function Car(props) {
  const { nodes, materials } = useGLTF("/assets/3d_car.glb");
  const carRef = useRef();

  const { forward, backward, left, right, shift } = useKeyboard();

  useFrame(() => {
    if (left) {
      if (shift) {
        carRef.current.position.z += -0.05;
      }
      carRef.current.position.z += -0.07;
    }
    if (right) {
      if (shift) {
        carRef.current.position.z += 0.05;
      }
      carRef.current.position.z += 0.07;
    }
    if (backward) {
      if (shift) {
        carRef.current.position.x += -0.05;
      }
      carRef.current.position.x += -0.07;
    }
    if (forward) {
      if (shift) {
        carRef.current.position.x += 0.05;
      }
      carRef.current.position.x += 0.07;
    }
  });

  return (
    <group {...props} dispose={null} ref={carRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.21}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["100ddbff_dds"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["92609579_dds"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["24fe1dbe_dds"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["5b395f45_dds"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["7a84d5be_dds"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.d121065c_dds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.e0810183_dds}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/3d_car.glb");
