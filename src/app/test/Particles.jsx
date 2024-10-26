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
  let scene = new THREE.Scene();
  let renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  const fieldOfView = 75;
  const aspectRatio = windowWidth / windowHeight;
  const nearPlane = 1;
  const farPlane = 3000;
  let camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );
  camera.position.z = 800;

  const initStage = () => {
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("mousemove", onMouseMove);
  };

  const initScene = (scene, renderer) => {
    const bgColor = new THREE.Color(0xffffff);
    scene.background = bgColor;

    // Set up lighting
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
    const aspectRatio = windowWidth / windowHeight;
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
    const createParticle = (i) => {
      const particle = new THREE.Object3D();
      const geometryCore = new THREE.SphereGeometry(1, 2, 2);
      const materialCore = new THREE.MeshBasicMaterial({ color: "#000" });
      const box = new THREE.Mesh(geometryCore, materialCore);

      const pos = getGraphicPos(graphicPixels.current[i]);
      particle.targetPosition = new THREE.Vector3(pos.x, pos.y, pos.z);

      particle.position.set(
        windowWidth.current * 0.5,
        windowHeight.current * 0.5,
        20
      );
      randomPos(particle.position);

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
        particle.position.lerp(particle.targetPosition, 0.1);
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

    // Update renderer and camera aspect
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
      const gData = gctx.current.getImageData(
        0,
        0,
        graphicCanvas.current.width,
        graphicCanvas.current.height
      ).data;

      graphicPixels.current = [];
      for (let i = gData.length; i >= 0; i -= 4) {
        if (gData[i] === 0) {
          const x = (i / 4) % graphicCanvas.current.width;
          const y =
            graphicCanvas.current.height -
            Math.floor(Math.floor(i / graphicCanvas.current.width) / 4);
          if (x && x % 2 === 0 && y && y % 2 === 0) {
            graphicPixels.current.push({ x, y });
          }
        }
      }
      initParticles(scene);
    };
  };

  useEffect(() => {
    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(windowWidth.current, windowHeight.current);
    mountRef.current.appendChild(renderer.domElement);

    initStage();
    initScene(scene, renderer);

    // Create Canvas for Graphics
    graphicCanvas.current = document.createElement("canvas");
    graphicCanvas.current.width = 240;
    graphicCanvas.current.height = 240;
    gctx.current = graphicCanvas.current.getContext("2d");

    // Load Image and Set Particles
    loadImageAndSetParticles();

    // Start Animation Loop
    const camera = new THREE.PerspectiveCamera(
      75,
      windowWidth.current / windowHeight.current,
      1,
      3000
    );
    camera.position.z = 800;
    animate(scene, camera, renderer);

    return () => {
      // Clean up event listeners
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [imageUrl]); // Re-run effect if imageUrl changes

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default Particles;
