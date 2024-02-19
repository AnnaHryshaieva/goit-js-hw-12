import axios from 'axios';

export async function fetchPictures(inputValue, currentPage) {
  const res = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '34206508-2ad29bd7e91dc1db4e67bd855',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    },
  });

  return res.data;
}
