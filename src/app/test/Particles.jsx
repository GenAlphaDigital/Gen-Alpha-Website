"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Particles = ({ imageUrl }) => {
  const mountRef = useRef(null);
  const particles = useRef([]);
  const graphicPixels = useRef([]);
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 800));
  const cameraLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);
  const graphicCanvas = useRef(null);
  const gctx = useRef(null);
  const inView = useRef(false); // Track if the component is in view
  let camera;

  const initStage = () => {
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("mousemove", onMouseMove);
  };

  const initScene = (scene, renderer) => {
    const bgColor = new THREE.Color(0xffffff);
    scene.background = bgColor;

    const light1 = new THREE.DirectionalLight(0xffffff, 2);
    light1.position.set(20, 0, 10);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1.5);
    light2.position.set(-20, 0, 20);
    scene.add(light2);

    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(0, 0, -20);
    scene.add(backLight);
  };

  const initCamera = () => {
    const fieldOfView = 75;
    const aspectRatio = windowWidth.current / windowHeight.current;
    const nearPlane = 1;
    const farPlane = 3000;
    camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );
    camera.position.z = 800;
  };

  const initParticles = (scene) => {
    if (graphicPixels.current.length === 0) return;

    const createParticle = (i) => {
      const particle = new THREE.Object3D();
      const geometryCore = new THREE.SphereGeometry(2, 4, 4);
      const materialCore = new THREE.MeshBasicMaterial({ color: "#000" });
      const box = new THREE.Mesh(geometryCore, materialCore);

      const pos = getGraphicPos(graphicPixels.current[i]);
      particle.targetPosition = new THREE.Vector3(pos.x, pos.y, pos.z);

      particle.position.set(
        windowWidth.current * 0.5,
        windowHeight.current * 0.5,
        20
      );
      randomPos(particle.position, true); // Initially place out of view

      particle.add(box);
      particles.current[i] = particle;
      scene.add(particle);
    };

    for (let i = 0; i < graphicPixels.current.length; i++) {
      createParticle(i);
    }
  };

  const getGraphicPos = (pixel) => {
    const posX = (pixel.x - graphicCanvas.current.width / 2) * 3;
    const posY = (pixel.y - graphicCanvas.current.height / 4) * 3;
    const posZ = -20 * Math.random() + 40;
    return { x: posX, y: posY, z: posZ };
  };

  const randomPos = (vector, outFrame = false) => {
    const radius = outFrame
      ? windowWidth.current * 2
      : windowWidth.current * -2;
    const centerX = 0;
    const centerY = 0;
    const r = windowWidth.current + radius * Math.random();
    const angle = Math.random() * Math.PI * 2;

    vector.x = centerX + r * Math.cos(angle);
    vector.y = centerY + r * Math.sin(angle);
    vector.z = Math.random() * windowWidth.current;
  };

  const updateParticles = () => {
    particles.current.forEach((particle) => {
      if (particle) {
        if (inView.current) {
          particle.position.lerp(particle.targetPosition, 0.1);
        } else {
          randomPos(particle.position, true);
        }
      }
    });
  };

  const onMouseMove = (event) => {
    const mouseX = event.clientX - windowWidth.current / 2;
    const mouseY = event.clientY - windowHeight.current / 2;
    cameraTarget.current.x = (mouseX * -1) / 2;
    cameraTarget.current.y = mouseY / 2;
  };

  const onWindowResize = () => {
    windowWidth.current = window.innerWidth;
    windowHeight.current = window.innerHeight;

    renderer.setSize(windowWidth.current, windowHeight.current);
    camera.aspect = windowWidth.current / windowHeight.current;
    camera.updateProjectionMatrix();
  };

  const animate = (scene, camera, renderer) => {
    requestAnimationFrame(() => animate(scene, camera, renderer));
    camera.position.lerp(cameraTarget.current, 0.2);
    camera.lookAt(cameraLookAt.current);
    updateParticles();
    renderer.render(scene, camera);
  };

  const loadImageAndSetParticles = (scene) => {
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
      const gData = gctx.current.getImageData(
        0,
        0,
        graphicCanvas.current.width,
        graphicCanvas.current.height
      ).data;

      graphicPixels.current = [];
      for (let i = gData.length; i >= 0; i -= 4) {
        if (gData[i + 3] > 0) {
          const x = (i / 4) % graphicCanvas.current.width;
          const y =
            graphicCanvas.current.height -
            Math.floor(i / (4 * graphicCanvas.current.width));
          if (x % 2 === 0 && y % 2 === 0) {
            graphicPixels.current.push({ x, y });
          }
        }
      }
      initParticles(scene);
    };
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(windowWidth.current, windowHeight.current);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    initStage();
    initScene(scene, renderer);
    initCamera();

    graphicCanvas.current = document.createElement("canvas");
    graphicCanvas.current.width = 250;
    graphicCanvas.current.height = 250;
    gctx.current = graphicCanvas.current.getContext("2d");

    loadImageAndSetParticles(scene);

    animate(scene, camera, renderer);

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (mountRef.current) observer.observe(mountRef.current);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      observer.disconnect();
    };
  }, [imageUrl]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "50%",
        height: "100vh",
        border: "1px solid red",
        margin: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default Particles;
