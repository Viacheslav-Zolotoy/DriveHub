import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6570a29309586eff6641bd12.mockapi.io';

export const fetchAdvert = createAsyncThunk(
  'advert/fetchAdvert',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/advert');
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
