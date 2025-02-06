import axios from 'axios';

export const fetchPhotosByQuery = (searchedEl, currentPage) => {
  const searchParams = new URLSearchParams({
    q: searchedEl,
    key: '48488586-a0a2593ae7f5d81beed47469e',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  });
  return axios.get(`https://pixabay.com/api/?${searchParams}`);
};
