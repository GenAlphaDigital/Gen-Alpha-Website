"use client";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Webdev from "../../../public/models/webdev/Webdev";
import { Suspense } from "react";

const WebDev = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas
        style={{
          width: "100vw",
          // border: "1px solid black",
          aspectRatio: 0.5,
        }}
      >
        <ambientLight />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Webdev />
        </Suspense>
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.5}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#ccc"
        />
      </Canvas>
    </div>
  );
};

export default WebDev;
