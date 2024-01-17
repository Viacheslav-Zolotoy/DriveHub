import { createSlice } from '@reduxjs/toolkit';

const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
  favorites: initialFavorites,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const { id } = action.payload;
      state.favorites.push(id);
    },
    deleteFromFavorite: (state, action) => {
      const { id } = action.payload;
      state.favorites = state.favorites.filter((favId) => favId !== id);
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
