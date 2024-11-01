addEventListener("message", (e) => {
    const { particlePositions, targetPositions, inView, windowWidth, windowHeight } = e.data;
  
    // Process each particle's position
    const updatedPositions = particlePositions.map((position, index) => {
      const targetPosition = targetPositions[index];
      if (inView) {
        return {
          x: position.x + (targetPosition.x - position.x) * 0.2,
          y: position.y + (targetPosition.y - position.y) * 0.2,
          z: position.z + (targetPosition.z - position.z) * 0.2,
        };
      } else {
        const radius = windowWidth * 2;
        const angle = Math.random() * Math.PI * 2;
        const r = windowWidth + radius * Math.random();
        return {
          x: r * Math.cos(angle),
          y: r * Math.sin(angle),
          z: Math.random() * windowWidth,
        };
      }
    });
  
    // Send back the updated positions
    postMessage({ updatedPositions });
  });
  