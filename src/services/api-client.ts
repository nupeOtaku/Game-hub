import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f134b9b6df7c494d88faf34ea0576b78',
  },
});
