// redux/country/countrySlice.test.js
import countryReducer, { fetchCountries } from '../countrySlice';

describe('countryReducer', () => {
  it('should handle fetchCountries.pending', () => {
    const initialState = { countries: [], status: 'idle', error: null };
    const nextState = countryReducer(initialState, fetchCountries.pending());
    expect(nextState.status).toEqual('loading');
  });

  it('should handle fetchCountries.fulfilled', () => {
    const initialState = { countries: [], status: 'loading', error: null };
    const payload = [{ name: 'Country 1' }, { name: 'Country 2' }];
    const nextState = countryReducer(initialState, fetchCountries.fulfilled(payload));
    expect(nextState.status).toEqual('succeeded');
    expect(nextState.countries).toEqual(payload);
  });

  it('should handle fetchCountries.rejected', () => {
    const initialState = { countries: [], status: 'loading', error: null };
    const error = 'An error occurred';
    const nextState = countryReducer(initialState, fetchCountries.rejected(error));
    expect(nextState.status).toEqual('failed');
    expect(nextState.error).toEqual(error);
  });
});
