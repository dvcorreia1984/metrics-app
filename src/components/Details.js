import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { subregion } = useParams();
  const countries = useSelector((state) => state.countries.countries);

  const subregionCountries = countries.filter(
    (country) => country.subregion === subregion,
  );

  if (!Array.isArray(countries)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{`${subregion} Countries`}</h1>
      {' '}
      <ul>
        {subregionCountries.map((country) => (
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

export default Details;
