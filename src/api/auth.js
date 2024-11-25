import { ENDPOINTS } from '../constants/apiEndpoints';
import api from './config';

// Login API call
export const loginUser = async (email, password) => {
  try {
    const response = await api.post(ENDPOINTS.LOGIN, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Signup API call
export const signupUser = async userData => {
  try {
    const response = await api.post(ENDPOINTS.SIGNUP, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
