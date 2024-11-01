"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./page.module.css";

const Particles = ({ imageUrl }) => {
  const mountRef = useRef(null);
  const particles = useRef([]);
  const graphicPixels = useRef([]);
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 800));
  const cameraLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const graphicCanvas = useRef(null);
  const gctx = useRef(null);
  const workerRef = useRef(null);
  const workerRef2 = useRef(null);
  const inView = useRef(false);
  const arrangedOnce = useRef(false); // State variable to track if arranged
  let camera, renderer, scene;
  let windowWidth, windowHeight;

  if (typeof window !== "undefined") {
    windowWidth = window.innerWidth * 0.8;
    windowHeight = window.innerHeight * 0.8;
  }

  const init = () => {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(windowWidth, windowHeight);
    mountRef.current.appendChild(renderer.domElement);

    initLights();
    initCamera();
    initCanvas();
    loadImageAndSetParticles();
    addEventListeners();
    animate();

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(mountRef.current);

    return () => {
      removeEventListeners();
      mountRef.current.removeChild(renderer.domElement);
      observer.disconnect();
    };
  };

  const initLights = () => {
    const lights = [
      new THREE.DirectionalLight(0xffffff, 2).position.set(20, 0, 10),
      new THREE.DirectionalLight(0xffffff, 1.5).position.set(-20, 0, 20),
      new THREE.DirectionalLight(0xffffff, 1).position.set(0, 0, -20),
    ];
    lights.forEach((light) => scene.add(light));
  };

  const initCamera = () => {
    camera = new THREE.PerspectiveCamera(
      75,
      windowWidth / windowHeight,
      1,
      3000
    );
    camera.position.z = 800;
  };

  const initCanvas = () => {
    graphicCanvas.current = document.createElement("canvas");
    graphicCanvas.current.width = 250;
    graphicCanvas.current.height = 250;
    gctx.current = graphicCanvas.current.getContext("2d", {
      willReadFrequently: true,
    });
  };

  const addEventListeners = () => {
    window.addEventListener("resize", onWindowResize);
  };

  const removeEventListeners = () => {
    window.removeEventListener("resize", onWindowResize);
  };

  const loadImageAndSetParticles = () => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      gctx.current.drawImage(
        img,
        0,
        0,
        graphicCanvas.current.width,
        graphicCanvas.current.height
      );

      const { width, height } = graphicCanvas.current;
      const gData = gctx.current.getImageData(0, 0, width, height).data;
      workerRef.current.postMessage({
        width,
        height,
        gData,
      });
    };
  };

  const createParticles = () => {
    const particleCount = graphicPixels.current?.length || 0; // Limit particles for performance
    graphicPixels.current?.slice(0, particleCount).forEach((pixel) => {
      const particle = new THREE.Object3D();
      particle.targetPosition = getGraphicPos(pixel);
      // Set random starting position
      randomPos(particle.position);
      particle.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(1, 4, 4), // Reduced size for better performance
          new THREE.MeshBasicMaterial({ color: "#000" })
        )
      );
      particles.current.push(particle);
      scene.add(particle);
    });
  };

  const getGraphicPos = (pixel) => ({
    x: (pixel.x - graphicCanvas.current.width / 2) * 3,
    y: (pixel.y - graphicCanvas.current.height / 2) * 3,
    z: -20 * Math.random() + 40,
  });

  const randomPos = (vector) => {
    const radius = windowWidth * 2;
    const angle = Math.random() * Math.PI * 2;
    const r = windowWidth + radius * Math.random();
    vector.x = r * Math.cos(angle);
    vector.y = r * Math.sin(angle);
    vector.z = Math.random() * windowWidth;
  };

  const updateParticles = () => {
    if (!arrangedOnce.current && inView.current) {
      particles.current.forEach((particle) => {
        particle.position.lerp(particle.targetPosition, 0.05); // Adjust this for speed
      });
      // Check if all particles are close enough to their target positions
      const allArranged = particles.current.every(
        (particle) => particle.position.distanceTo(particle.targetPosition) < 1
      );
      if (allArranged) {
        arrangedOnce.current = true; // Set to true after first arrangement
      }
    }
  };

  const onWindowResize = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    renderer.setSize(windowWidth, windowHeight);
    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
  };

  const animate = () => {
    requestAnimationFrame(animate);
    updateParticles(); // Update particles on each frame
    camera.position.lerp(cameraTarget.current, 0.2);
    camera.lookAt(cameraLookAt.current);
    renderer.render(scene, camera);
  };

  useEffect(() => {
    const worker = new Worker(
      new URL("../../../../worker.js", import.meta.url)
    );
    workerRef.current = worker;

    const worker2 = new Worker(
      new URL("../../../../worker2.js", import.meta.url)
    );
    workerRef2.current = worker2;

    workerRef.current.onmessage = (event) => {
      graphicPixels.current = event.data;
      createParticles();
    };

    init();

    return () => {
      workerRef.current.terminate();
      workerRef2.current.terminate();
    };
  }, [imageUrl]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      className={styles.particlesContainer}
    />
  );
};

export default Particles;
