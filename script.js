const sketchArea = document.querySelector('.sketch-area');
const sliderArea = document.querySelector('.slider-area');
const slider = document.querySelector('.slider');

for (let i = 0; i < 256; i++) {
  let sketchPixel = document.createElement('div');
  sketchPixel.classList.add('sketch-pixel');
  sketchArea.appendChild(sketchPixel);
}

const allSketchPixels = document.querySelectorAll('.sketch-pixel');
const resetButton = document.querySelector('#reset');

allSketchPixels.forEach((sketchPixel) => {
  sketchPixel.addEventListener('mouseenter', () => {
    sketchPixel.classList.add('colored');
  });
  resetButton.addEventListener('click', () => {
    sketchPixel.classList.remove('colored');
  });
});

const sliderValue = document.querySelector('.slider-value');
slider.addEventListener('input', () => { 
  sliderValue.textContent = `${slider.value} x ${slider.value}`;
  sliderArea.appendChild(sliderValue);
});
