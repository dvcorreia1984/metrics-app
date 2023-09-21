import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/country/countrySlice';

const Filter = ({ selectedRegion }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = selectedRegion === 'World'
    ? countries
    : countries.filter((country) => country.region === selectedRegion);

  return filteredCountries;
};

export default Filter;
