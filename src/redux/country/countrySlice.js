// countrySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v2/all');
  const data = await response.data;
  const mappedCountries = data.map((country) => ({
    region: country.region,
    name: country.name,
    population: country.population,
    flag: country.flag,
    alpha2code: country.alpha2Code,
    currency: country.currencies,
    area: country.area,
    callingCode: country.callingCodes,
    timezones: country.timezones,
  }));
  return mappedCountries;
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
      });
  },
});

export default countrySlice.reducer;
