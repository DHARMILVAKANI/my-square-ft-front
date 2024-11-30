import axios from 'axios';
import { toast } from 'react-toastify';
import LocalStorageService from '../services/localStorageService';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://msfapp.icreateinnovations.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor for adding auth token to headers
api.interceptors.request.use(
  config => {
    const token = LocalStorageService.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors globally
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data.message || error.message;

      if (status === 401) {
        toast.error('Session expired. Please log in again.');
        window.location.href = '/login';
      } else if (status === 403) {
        toast.error('You do not have permission to access this resource.');
      } else if (status === 404) {
        toast.error('Resource not found.');
      } else if (status === 500) {
        toast.error('Internal Server Error. Please try again later.');
      } else {
        toast.error(message || 'An unknown error occurred.');
      }
    } else if (error.request) {
      toast.error('Network error. Please check your connection.');
    } else {
      toast.error(`Error: ${error.message}`);
    }

    return Promise.reject(error);
  }
);

export default api;
