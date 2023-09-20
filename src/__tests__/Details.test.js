import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'reduxjs/toolkit';
import Details from '../components/Details';
import countryReducer from '../redux/country/countrySlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

jest.mock('../redux/country/countrySlice', () => ({
  fetchCountry: jest.fn(),
}));

jest.mock('../redux/country/countrySlice', () => ({
  fetchCountry: jest.fn(),
}));

describe('Details Component', () => {
  it('renders country details correctly', () => {
    const selectedCountryData = {
      name: 'SampleCountry',
      capital: 'SampleCapital',
      population: 1000000,
      area: 1000,
      currencies: [{ code: 'USD' }],
      callingCodes: ['+1'],
      timezones: ['UTC'],
      flag: 'sample-flag-url',
    };

    // Mock the useParams hook to return the selected subregion
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        subregion: 'SampleCountry',
      }),
    }));

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/SampleCountry']}>
          <Routes>
            <Route path="/:subregion" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('SampleCountry')).toBeInTheDocument();
    expect(screen.getByText('Population: 1000000')).toBeInTheDocument();
    expect(screen.getByText('CAPITAL')).toBeInTheDocument();
    expect(screen.getByText('SampleCapital')).toBeInTheDocument();
    expect(screen.getByText('POPULATION')).toBeInTheDocument();
    expect(screen.getByText('1000000')).toBeInTheDocument();
    expect(screen.getByText('AREA')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('CURRENCY')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('CALLING CODE')).toBeInTheDocument();
    expect(screen.getByText('+1')).toBeInTheDocument();
    expect(screen.getByText('TIMEZONES')).toBeInTheDocument();
    expect(screen.getByText('UTC')).toBeInTheDocument();
    expect(screen.getByAltText('SampleCountry')).toBeInTheDocument();
  });
});
