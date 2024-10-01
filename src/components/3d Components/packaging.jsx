"use client";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Package from "../../../public/models/package/Package";
import { Suspense } from "react";

const Packaging = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid black",
      }}
    >
      <Canvas
        style={{
          width: "100vw",
          aspectRatio: 1,
        }}
      >
        <ambientLight />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Package />
        </Suspense>
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.3}
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

export default Packaging;
