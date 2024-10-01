import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Media(props) {
  const { nodes, materials } = useGLTF("../models/media/Media.gltf");
  return (
    <group {...props} dispose={null} scale={1} position={[0, 0, 0]}>
      <group scale={0.1} position={[0, 0, 0]}>
        <mesh
          geometry={nodes.Facebook_2_Facebook1_0.geometry}
          material={materials["Facebook.1"]}
          position={[0, 15 / 2, 0]}
        />
        <mesh
          geometry={nodes.Instagram_2_Instagram1_0.geometry}
          material={materials["Instagram.1"]}
          position={[-15, 15 / 2, 0]}
        />
        <mesh
          geometry={nodes.Twitter_2_Twitter1_0.geometry}
          material={materials["Twitter.1"]}
          position={[15, 15 / 2, 0]}
        />

        <mesh
          geometry={nodes.Youtube_2_Youtube_0.geometry}
          material={materials.Youtube}
          position={[0, -15 / 2, 0]}
        />
        <mesh
          geometry={nodes.Twitch_2_Twitch1_0.geometry}
          material={materials["Twitch.1"]}
          position={[-15, -15 / 2, 0]}
        />
        <mesh
          geometry={nodes.Discord_2_Discord1_0.geometry}
          material={materials["Discord.1"]}
          position={[15, -15 / 2, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Media.gltf");
