const slider = document.querySelector('.slider-track');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const sliderWrapper = document.querySelector('.slider-wrapper');
const card = document.querySelector('.card');
const totalSliderWidth = slider.scrollWidth;
const visibleWidth = sliderWrapper.clientWidth;
const cardWidth = card.offsetWidth + 20; // Adjust if needed based on margin/padding
const maxTranslate = -(totalSliderWidth - visibleWidth); // Maximum translate value to prevent over-scrolling

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.pageX - slider.offsetLeft;
  slider.style.transition = 'none';
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  prevTranslate = currentTranslate;
  slider.style.transition = 'transform 0.3s ease-in-out';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentPosition = e.pageX - slider.offsetLeft;
  const moveBy = currentPosition - startPosition;
  currentTranslate = prevTranslate + moveBy;

  // Prevent sliding beyond the boundaries
  if (currentTranslate < 0) {
    currentTranslate = 0;
  } else if (currentTranslate < maxTranslate) {
    currentTranslate = maxTranslate;
  }

  slider.style.transform = `translateX(${currentTranslate}px)`;
});

leftBtn.addEventListener('click', () => {
  currentTranslate += cardWidth;

  // Check if it's beyond the left boundary
  if (currentTranslate < 0) {
    currentTranslate = 0;
  }

  slider.style.transform = `translateX(${currentTranslate}px)`;
  prevTranslate = currentTranslate;
});

rightBtn.addEventListener('click', () => {
  currentTranslate -= cardWidth;

  // Check if it's beyond the right boundary
  if (currentTranslate > maxTranslate) {
    currentTranslate = maxTranslate;
  }
  // Check if it's beyond the left boundary
  if (currentTranslate < maxTranslate) {
    currentTranslate = maxTranslate;
  }

  slider.style.transform = `translateX(${currentTranslate}px)`;
  prevTranslate = currentTranslate;
});