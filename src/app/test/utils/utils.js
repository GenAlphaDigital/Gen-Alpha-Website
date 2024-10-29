let body,
  mainContainer,
  scene,
  renderer,
  camera,
  cameraLookAt = new THREE.Vector3(0, 0, 0),
  cameraTarget = new THREE.Vector3(0, 0 ,800),
  windowWidth,
  windowHeight,
  windowHalfWidth,
  windowHalfHeight,
  points,
  mouseX = 0,
  mouseY = 0,
  gui,
  stats,
  contentElement,
  colors = ['#F7A541', '#F45D4C', '#FA2E59', '#4783c3', '#9c6cb7'],
  graphics,
  currentGraphic = 0,
  graphicCanvas,
  gctx,
  canvasWidth = 240,
  canvasHeight = 240,
  graphicPixels,
  particles = [],
  graphicOffsetX = canvasWidth / 2,
  graphicOffsetY = canvasHeight / 4;

  const initStage = () => {
    body = document.querySelector('body');
    mainContainer = document.querySelector('#main');
    contentElement = document.querySelector('.intro-content');
  
    setWindowSize();
  
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);
  }

  const initScene = () => {
    scene = new THREE.Scene();
  
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(windowWidth, windowHeight);
    mainContainer.appendChild(renderer.domElement);
  
    scene.background = new THREE.Color(0xFFFFFF);
  }
  
  