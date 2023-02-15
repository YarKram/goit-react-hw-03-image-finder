import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';

export function fetchPictures(page, q) {
  return axios({
    params: {
      key: '32445976-19b17560e96f7fd808d7c3843',
      page,
      q,
      per_page: '12',
      orientation: 'horizontal',
      image_type: 'photo',
    },
  });
}
