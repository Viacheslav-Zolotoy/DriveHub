import { configureStore } from '@reduxjs/toolkit';
import advertReducer from './advert/advertSlice';
import favoritesReducer from './favorites/favoritesSlice';
import storage from 'redux-persist/lib/storage';
import filtersReducer from './filter/filterSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const favoritesPersistConfig = {
  key: 'favorites',
  storage: storage,
  whitelist: ['favorites'],
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer,
    advert: advertReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
