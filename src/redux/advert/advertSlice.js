import { createSlice } from '@reduxjs/toolkit';

import { fetchAdvert } from './advertOperation';

const initialState = {
  items: [],
  selectAdvert: null,
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvert.pending, handlePending)

      .addCase(fetchAdvert.rejected, handleRejected)

      .addCase(fetchAdvert.fulfilled, (_, action) => {
        return {
          items: [...action.payload],
          isLoading: false,
          error: null,
        };
      });
  },
});

export default advertSlice.reducer;
