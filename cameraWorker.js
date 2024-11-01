addEventListener("message", (e) => {
    const { cameraTarget, clientX, clientY, windowWidth, windowHeight } = e.data;

  const targetX = (clientX - windowWidth / 2) * -0.5;
  const targetY = (clientY - windowHeight / 2) * 0.5;
  cameraTarget.x += (targetX - cameraTarget.x) * 0.2;
  cameraTarget.y += (targetY - cameraTarget.y) * 0.2;

  postMessage(cameraTarget);
})