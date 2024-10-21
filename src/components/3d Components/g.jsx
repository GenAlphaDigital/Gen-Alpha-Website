"use client";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GModel from "../../../public/models/g/G";
import { Suspense } from "react";

const page = () => {
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
          width: "50vw",
          height: "60vh",
          aspectRatio: 0.5,
        }}
      >
        <ambientLight />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <GModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default page;
