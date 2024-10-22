"use client";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Brand from "../../../public/models/branding/Branding";
import styles from "./styling/branding.module.css";
const Branding = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Canvas
        style={{
          width: "100%",
          height: "60vh",
          aspectRatio: 0.5,
        }}
      >
        <ambientLight />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Brand />
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

export default Branding;
