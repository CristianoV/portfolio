import axios from 'axios';

export const fetchFromApi = axios.create({
  baseURL: 'http://portfolio-two-opal-82.vercel.app/api',
});
