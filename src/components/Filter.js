import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/country/countrySlice';

const Filter = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  console.log(fetchCountries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  // const africanRegion = countries.filter((countries) => countries.region === 'Africa');
  // const asiaRegion = countries.filter((countries) => countries.region === 'Asia');
  // const europeanRegion = countries.filter((countries) => countries.region === 'Europe');
  // const americasRegion = countries.filter((countries) => countries.region === 'Americas');
  const oceaniaRegion = countries.filter((countries) => countries.region === 'Oceania');

  // Get selected region from Search

  return oceaniaRegion;
};

export default Filter;
