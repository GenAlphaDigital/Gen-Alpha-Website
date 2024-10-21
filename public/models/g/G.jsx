"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function GModel(props) {
  const { nodes, materials } = useGLTF("../models/g/g.gltf");

  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null} rotation={[0, -0.3, 0]}>
      <mesh
        geometry={nodes.Node1.geometry}
        material={materials["#F15A2BFF"]}
        rotation={[89.5, 0, 0]}
      />
      <mesh
        geometry={nodes.Node2.geometry}
        material={materials["#F15A2BFF"]}
        rotation={[89.5, 0, 0]}
      />
      <mesh
        geometry={nodes.Node3.geometry}
        material={materials["#F89820FF"]}
        rotation={[89.5, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("../models/g/g.gltf");
