const sliderArea = document.querySelector('.slider-area');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const sketchArea = document.querySelector('.sketch-area');
const resetButton = document.querySelector('#reset');

makePixels();
colorPixels();

slider.addEventListener('input', () => { 
  sliderValue.textContent = `${slider.value} x ${slider.value}`;
  sliderArea.appendChild(sliderValue);
  removePixels();
  makePixels();
  colorPixels();
});

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
      sketchPixel.style.backgroundColor = setPixelsColor();
    });
    resetButton.addEventListener('click', () => {
      sketchPixel.classList.remove('colored');
    });
  });
}

function setPixelsColor() {
  let colorPicker = document.querySelector('.color-picker');
  return colorPicker.value;
}