document.addEventListener('DOMContentLoaded', () => {
  const openPopupBtn = document.getElementById('openPopupBtn');
  const modal = document.getElementById('popup');
  const mainContent = document.querySelector('main');
  const closePopupBtn = document.querySelector('.close');

  // Open the modal`
  openPopupBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    mainContent.classList.add('blur');
  });

  // Close the modal when the close button is clicked
  closePopupBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    mainContent.classList.remove('blur');
  });

  // Close the modal when clicking outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      mainContent.classList.remove('blur');
    }
  });
});