import axios from 'axios';

const site = `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api` || 'http://localhost:3000/api'

export const fetchFromApi = axios.create({
  baseURL: site,
});
