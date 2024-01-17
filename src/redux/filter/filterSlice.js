import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    carBrand: '',
    hourlyPrice: '',
    mileage: { from: '', to: '' },
  },
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
