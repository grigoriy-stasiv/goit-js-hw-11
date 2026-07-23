import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';



const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements['search-text'].value.trim();

  // Валідація на порожній рядок
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please fill out the search field!',
      position: 'topRight'
    });
    return;
  }

  // Очищення галереї та показ лоадера перед запитом
  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      // Перевірка на порожній масив результатів
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight'
        });
        return;
      }

      // Малювання карток, якщо масив не порожній
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight'
      });
      console.error(error);
    })
    .finally(() => {
      // Ховаємо лоадер і скидаємо форму в будь-якому випадку
      hideLoader();
      form.reset();
    });
}
