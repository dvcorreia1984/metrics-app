import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ label, value }) => (
  <li className="flex text-2xl h-24 p-5 items-center text-white gap-5 even:bg-[#35548b]">
    <div className="w-7/12 pl-5">{label}</div>
    <div className="w-4/12">{value}</div>
  </li>
);

const Details = () => {
  const params = useParams();
  const { subregion } = params;
  const countries = useSelector((state) => state.countries.countries);

  const selectedCountry = countries.find((country) => country.name === subregion);

  return (
    <div>
      <div className="flex h-40 bg-[#5487e3] justify-center gap-10">
        <div className="flex w-1/4 text-blue-950 py-3 items-center">
          <div>
            <img src={selectedCountry?.flag} alt={subregion} className="w-40 h-30 rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="font-bold">{subregion?.toUpperCase()}</h1>
          <h3 className="mt-[-5px] text-[10px]">{`Population: ${selectedCountry?.population}`}</h3>
        </div>
      </div>
      <div className="bg-[#35548b] pl-5 h-8 text-white text-sm">STATS BY COUNTRY</div>
      <div>
        <ul>
          <Card label="CAPITAL" value={selectedCountry?.capital} />
          <Card label="POPULATION" value={selectedCountry?.population} />
          <Card label="AREA" value={selectedCountry?.area} />
          <Card label="CURRENCY" value={selectedCountry?.currencies[0]?.code} />
          <Card label="CALLING CODE" value={selectedCountry?.callingCodes} />
          <Card label="TIMEZONES" value={selectedCountry?.timezones} />
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Details;
