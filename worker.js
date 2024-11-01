
addEventListener("message", (e) => {
    const {gData, width, height} = e.data;
    const pixels = extractPixels(gData, width, height);
  postMessage(pixels);
});

const extractPixels = (gData, width, height) => {
    const pixels = [];
    for (let i = gData?.length; i >= 0; i -= 4) {
        if (gData[i + 3] > 0) {
          const x = (i / 4) % width;
          const y = height - Math.floor(i / (4 * width));
          if (x % 2 === 0 && y % 2 === 0) pixels.push({ x, y });
        }
      }
    return pixels;
}