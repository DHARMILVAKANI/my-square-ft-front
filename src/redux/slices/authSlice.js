import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/config';
import LocalStorageService from '../../services/localStorageService';
// Define initial state for auth
const initialState = {
  user: null,
  loading: false,
  error: null
};

// Async thunk for signup
export const signupUser = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post('/register', userData);
    return response.data; // Assuming the response contains user data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Signup failed');
  }
});

// Async thunk for login
export const loginUser = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post('/login', userData);
    return response.data; // Assuming the response contains user data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Create the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      LocalStorageService.removeItem('accessToken');
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        LocalStorageService.setItem('accessToken', action.payload.token); // Store token
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Error from rejectWithValue
      })
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        LocalStorageService.setItem('accessToken', action.payload.token); // Store token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Error from rejectWithValue
      });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
