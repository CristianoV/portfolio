import axios from 'axios';

export const fetchFromApi = axios.create({
  baseURL: 'https://portfolio-2o1l38qb6-cristianov.vercel.app/api',
});
