const slider = document.querySelector('.slider-track');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const sliderWrapper = document.querySelector('.slider-wrapper');
const card = document.querySelector('.carousel-card');

const totalSliderWidth = slider.scrollWidth;
const visibleWidth = sliderWrapper.clientWidth;
const cardWidth = card.offsetWidth + 20; // Adjust if needed based on margin/padding
const maxTranslate = totalSliderWidth - visibleWidth; // Max boundary for LTR

// Function to disable/enable buttons (flipped logic)
function updateButtonState() {
  // At the start of the slider (LTR), disable the right button
  if (currentTranslate <= 0) {
    rightBtn.disabled = true;
    leftBtn.disabled = false;
  } else {
    rightBtn.disabled = false;
  }

  // At the end of the slider, disable the left button
  if (currentTranslate >= maxTranslate) {
    leftBtn.disabled = true;
    rightBtn.disabled = false;
  } else {
    leftBtn.disabled = false;
  }
}

// Initialize button states
updateButtonState();

// Helper function to get the X position from touch or mouse events
function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// Desktop drag events
slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = getPositionX(e) - slider.offsetLeft;
  slider.style.transition = 'none';
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  prevTranslate = currentTranslate;
  slider.style.transition = 'transform 0.3s ease-in-out';
  updateButtonState(); // Update the buttons after dragging
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentPosition = getPositionX(e) - slider.offsetLeft;
  const moveBy = currentPosition - startPosition;
  currentTranslate = prevTranslate + moveBy;

  // Prevent sliding beyond the boundaries (LTR)
  if (currentTranslate > maxTranslate) {
    currentTranslate = maxTranslate;
  } else if (currentTranslate < 0) {
    currentTranslate = 0;
  }

  slider.style.transform = `translateX(${currentTranslate}px)`;
});

// Mobile drag (touch) events
slider.addEventListener('touchstart', (e) => {
  isDragging = true;
  startPosition = getPositionX(e) - slider.offsetLeft;
  slider.style.transition = 'none';
});

slider.addEventListener('touchend', () => {
  isDragging = false;
  prevTranslate = currentTranslate;
  slider.style.transition = 'transform 0.3s ease-in-out';
  updateButtonState();
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentPosition = getPositionX(e) - slider.offsetLeft;
  const moveBy = currentPosition - startPosition;
  currentTranslate = prevTranslate + moveBy;

  // Prevent sliding beyond the boundaries (LTR)
  if (currentTranslate > maxTranslate) {
    currentTranslate = maxTranslate;
  } else if (currentTranslate < 0) {
    currentTranslate = 0;
  }

  slider.style.transform = `translateX(${currentTranslate}px)`;
});

// Left button click (moves slider right in LTR)
leftBtn.addEventListener('click', () => {
  currentTranslate += cardWidth;

  if (currentTranslate > maxTranslate) {
    currentTranslate = maxTranslate;
  }

  slider.style.transform = `translateX(${currentTranslate}px)`;
  prevTranslate = currentTranslate;
  updateButtonState();
});

// Right button click (moves slider left in LTR)
rightBtn.addEventListener('click', () => {
  currentTranslate -= cardWidth;

  if (currentTranslate < 0) {
    currentTranslate = 0;
  }

  slider.style.transform = `translateX(${currentTranslate}px)`;
  prevTranslate = currentTranslate;
  updateButtonState();
});