import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_REACT_APP_API_KEY,
  },
});

export default api;
