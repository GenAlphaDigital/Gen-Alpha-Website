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
  const inView = useRef(false);
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
        if (!inView.current) {
          particles.current.forEach((particle) => {
            randomPos(particle.position, true); // Scatter particles outside the viewport
          });
        }
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
    window.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    window.removeEventListener("resize", onWindowResize);
    window.removeEventListener("mousemove", onMouseMove);
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
      extractPixels();
      createParticles();
    };
  };

  const extractPixels = () => {
    const { width, height } = graphicCanvas.current;
    const gData = gctx.current.getImageData(0, 0, width, height).data;
    graphicPixels.current = [];
    for (let i = gData.length; i >= 0; i -= 4) {
      if (gData[i + 3] > 0) {
        const x = (i / 4) % width;
        const y = height - Math.floor(i / (4 * width));
        if (x % 2 === 0 && y % 2 === 0) graphicPixels.current.push({ x, y });
      }
    }
  };

  const createParticles = () => {
    const particleCount = graphicPixels.current.length; // Limit particles for performance
    graphicPixels.current.slice(0, particleCount).forEach((pixel) => {
      const particle = new THREE.Object3D();
      particle.targetPosition = getGraphicPos(pixel);
      particle.position.set(windowWidth / 2, windowHeight / 2, 20);
      randomPos(particle.position, true);
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

  const randomPos = (vector, outFrame = false) => {
    const radius = outFrame ? windowWidth * 2 : windowWidth * -2;
    const angle = Math.random() * Math.PI * 2;
    const r = windowWidth + radius * Math.random();
    vector.x = r * Math.cos(angle);
    vector.y = r * Math.sin(angle);
    vector.z = Math.random() * windowWidth;
  };

  const updateParticles = () => {
    particles.current.forEach((particle) => {
      if (inView.current) {
        particle.position.lerp(particle.targetPosition, 1);
      } else {
        randomPos(particle.position, true);
      }
    });
  };

  const onMouseMove = ({ clientX, clientY }) => {
    cameraTarget.current.set(
      (clientX - windowWidth / 2) * -0.5,
      (clientY - windowHeight / 2) * 0.5,
      800
    );
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
    camera.position.lerp(cameraTarget.current, 0.2);
    camera.lookAt(cameraLookAt.current);
    updateParticles();
    renderer.render(scene, camera);
  };

  useEffect(init, [imageUrl]);

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
