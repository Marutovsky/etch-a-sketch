const sliderArea = document.querySelector('.slider-area');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const sketchArea = document.querySelector('.sketch-area');
const resetButton = document.querySelector('#reset');
const funkyMode = document.querySelector('#funky');
const progressiveDarkening = document.querySelector('#progressive');

makePixels();
colorPixels();

slider.addEventListener('input', () => { 
  sliderValue.textContent = `${slider.value} x ${slider.value}`;
  sliderArea.appendChild(sliderValue);
});

slider.addEventListener('change', () => {
  removePixels();
  makePixels();
  colorPixels();
})

funkyMode.addEventListener('click', () => progressiveDarkening.checked = false);
progressiveDarkening.addEventListener('click', () => funkyMode.checked = false);

function makePixels() {
  for (let i = 0; i < slider.value * slider.value; i++) {
    let sketchPixel = document.createElement('div');
    sketchPixel.classList.add('sketch-pixel');
    sketchPixel.style.width = 512 / slider.value + 'px';
    sketchPixel.style.height = 512 / slider.value + 'px';
    sketchArea.appendChild(sketchPixel);
  }
}

function removePixels() {
  if(sketchArea.childNodes) {
    allSketchPixels = document.querySelectorAll('.sketch-pixel');
    allSketchPixels.forEach((sketchPixel) => {
      sketchPixel.remove();
    });
  }
}

function colorPixels() {
  let allSketchPixels = document.querySelectorAll('.sketch-pixel');
  allSketchPixels.forEach((sketchPixel) => {
    sketchPixel.addEventListener('mouseenter', () => {
      if (funkyMode.checked) {
        sketchPixel.style.backgroundColor = setRandomColor();
      } else if (progressiveDarkening.checked) {
        sketchPixel.style.backgroundColor = setPixelsColor();
        if (sketchPixel.style.opacity <= '0.9') {
          sketchPixel.style.opacity -= "-0.1";
        }
      } else {
        sketchPixel.style.backgroundColor = setPixelsColor();
        sketchPixel.style.opacity = '1.0';
      }
    });
    resetButton.addEventListener('click', () => {
      sketchPixel.style.removeProperty('background-color');
      sketchPixel.style.removeProperty('opacity');
    });
  });
}

function setPixelsColor() {
  let color = document.querySelector('.color');
  return color.value;
}

function setRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}