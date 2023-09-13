// store.js
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';

export const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});
