import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7222/api', // replace with your API base URL
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;