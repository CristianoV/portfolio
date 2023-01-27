import axios from 'axios';

const site = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'

export const fetchFromApi = axios.create({
  baseURL: site,
});
