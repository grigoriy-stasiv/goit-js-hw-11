import axios from 'axios';

const API_KEY = '56828083-7e4521b63d087d0b33cd2b929';
const BASE_URL = 'https://pixabay.com/api/'

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true
    }
  })
  .then(response => response.data);
}
