/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\Branding.gltf 
Author: LasquetiSpice (https://sketchfab.com/LasquetiSpice)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/upwards-trending-bar-graph-on-phone-b005fc3213004e0c95e67a8158138677
Title: Upwards Trending Bar Graph on Phone
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Brand(props) {
  const { nodes, materials } = useGLTF("../models/branding/Branding.gltf");
  return (
    <group {...props} dispose={null} scale={1} rotation={[0.4, 0.4, 0]}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Primitive_Material}
        position={[-0.19, 1.608, 0]}
        rotation={[0, 0, 0.489]}
        scale={[1.409, 0.249, 0.192]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Primitive_Material_copy}
        position={[0.47, 1.96, 0]}
        rotation={[0, 0, 1.274]}
        scale={[0.363, 0.36, 0.192]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Primitive_Material_0}
        scale={[4.775, 0.233, 2.504]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Primitive_Material_copy_0}
        position={[0, 0.014, 0]}
        scale={[4.61, 0.218, 2.347]}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Primitive_Material_copy_1}
        position={[2.15, 0.016, 0]}
        scale={[0.307, 0.233, 1.327]}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.Primitive_Material_1}
        position={[1.689, 0.008, 0.788]}
        scale={[0.386, 0.055, 1]}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.Primitive_Material_2}
        position={[-1.668, 0.481, 0]}
        scale={[0.673, 0.731, 0.904]}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.Primitive_Material_copy_2}
        position={[-0.756, 0.621, 0]}
        scale={[0.673, 1.008, 0.904]}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.Primitive_Material_copy_3}
        position={[0.364, 0.809, 0]}
        scale={[0.673, 1.384, 0.904]}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.Primitive_Material_copy_4}
        position={[-0.767, 1.47, 0]}
        rotation={[0, 0, 2.038]}
        scale={[0.538, 0.249, 0.192]}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.Primitive_Material_copy_5}
        position={[-1.342, 1.327, 0]}
        rotation={[0, 0, 0.489]}
        scale={[1.229, 0.249, 0.192]}
      />
    </group>
  );
}

useGLTF.preload("../models/branding/Branding.gltf");