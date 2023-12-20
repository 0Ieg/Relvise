import axios from "axios";
import { BASE_URL } from '@env';

export const myAxios = axios.create({
  baseURL: BASE_URL,
  headers:{Authorization:`Bearer ${localStorage.getItem('access_token')}`}
})