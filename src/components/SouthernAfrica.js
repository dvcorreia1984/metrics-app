// SouthernAfrica.js
import React from 'react';
import { useSelector } from 'react-redux';

const SouthernAfrica = () => {
  const countries = useSelector((state) => state.countries.countries);

  if (!Array.isArray(countries)) {
    return <div>Loading...</div>;
  }

  const southernAfricaSubregion = 'Southern Africa';

  const southernAfricanCountries = countries.filter(
    (country) => country.subregion === southernAfricaSubregion,
  );

  return (
    <div>
      <h1>Southern Africa Countries</h1>
      <ul>
        {southernAfricanCountries.map((country) => (
          <li key={country.alpha2Code}>
            <strong>Name:</strong>
            {' '}
            {country.name}
            ,
            {' '}
            <strong>Population:</strong>
            {' '}
            {country.population}
            ,
            {' '}
            <strong>Region:</strong>
            {' '}
            {country.subregion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SouthernAfrica;
