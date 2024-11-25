import axios from 'axios';
import { toast } from 'react-toastify';
import LocalStorageService from '../services/localStorageService';
// import { useHistory } from "react-router-dom"; // React Router for redirection

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your base API URL
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
    // If there's a response error
    if (error.response) {
      // Handle known errors (e.g., 401, 404, etc.)
      const status = error.response.status;
      const message = error.response.data.message || error.message;

      if (status === 401) {
        // Unauthorized error: Redirect to login page
        toast.error('Session expired. Please log in again.');
        // Add logic to redirect user to login
        window.location.href = '/login'; // Or use useHistory for redirection
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
      // No response received
      toast.error('Network error. Please check your connection.');
    } else {
      // Error in setting up request
      toast.error(`Error: ${error.message}`);
    }

    return Promise.reject(error);
  }
);

export default api;
