// countrySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  southernAfricaData: null,
  northernAfricaData: null,
  easternAfricaData: null,
  westernAfricaData: null,
  middleAfricaData: null,
  status: 'idle',
  error: null,
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v2/region/africa');
  return response.data;
});

export const fetchSubregionData = createAsyncThunk('countries/fetchSubregionData', async (subregion) => {
  const response = await axios.get(`https://restcountries.com/v2/subregion/${subregion}`);
  return response.data[0];
});

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSubregionData.fulfilled, (state, action) => {
        if (action.meta.arg === 'Southern Africa') {
          state.southernAfricaData = action.payload;
        } else if (action.meta.arg === 'Northern Africa') {
          state.northernAfricaData = action.payload;
        } else if (action.meta.arg === 'Eastern Africa') {
          state.easternAfricaData = action.payload;
        } else if (action.meta.arg === 'Western Africa') {
          state.westernAfricaData = action.payload;
        } else if (action.meta.arg === 'Middle Africa') {
          state.middleAfricaData = action.payload;
        }
      });
  },
});

export default countrySlice.reducer;
