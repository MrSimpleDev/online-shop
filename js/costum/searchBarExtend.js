const searchBox = document.querySelector('.searchbar');
const searchContainer = document.querySelector('.search-container');
const suggestions = document.querySelector('.search-expand');

searchBox.addEventListener('focus', () => {
  searchContainer.classList.add('expanded');
});

searchBox.addEventListener('blur', () => {
  setTimeout(() => {
    searchContainer.classList.remove('expanded');
  }, 20); // زمان بسته شدن اضافه جست و جو بعد از کلیک
});
