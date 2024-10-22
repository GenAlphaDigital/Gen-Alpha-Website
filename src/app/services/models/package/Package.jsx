import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Package(props) {
  const { nodes, materials } = useGLTF("../models/package/Package.gltf");
  return (
    <group {...props} dispose={null} scale={0.09} rotation={[0.5, -1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-3.799, -0.08, 0]}>
          <group position={[3.799, 0.08, 0]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials["01_-_Default"]}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials["01_-_Defaultddd"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Package.gltf");
