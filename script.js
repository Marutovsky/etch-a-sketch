sketchArea = document.querySelector('.sketch-area');

for (let i = 0; i < 256; i++) {
  let sketchPixel = document.createElement('div');
  sketchPixel.classList.add('sketch-pixel');
  sketchArea.appendChild(sketchPixel);
}

