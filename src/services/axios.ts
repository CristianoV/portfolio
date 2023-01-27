import axios from 'axios';

const site = `http://localhost:3000/api`

export const fetchFromApi = axios.create({
  baseURL: site,
});
