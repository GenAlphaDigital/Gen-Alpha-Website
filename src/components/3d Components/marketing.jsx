"use client";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Media from "../../../public/models/media/Media";

const Marketing = () => {
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
          height: "100vh",
          // border: "1px solid black",
        }}
      >
        <ambientLight />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Media />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Marketing;
