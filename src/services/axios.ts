import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const site = `${process.env.VERCEL_URL}/api`

export const fetchFromApi = axios.create({
  baseURL: 'https://portfolio-2o1l38qb6-cristianov.vercel.app/api',
});
