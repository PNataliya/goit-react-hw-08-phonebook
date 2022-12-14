import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credential);
      token.set(data.token);
      console.log(token);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('User creation error');
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credential);
      token.set(data.token);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('Login error');
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/logout', credential);
      token.unset(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('There is no token, return from fetchCurrentUser');
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
