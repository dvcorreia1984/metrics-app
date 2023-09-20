import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const { subregion } = params;
  const countries = useSelector((state) => state.countries.countries);

  const filteredCountries = countries.filter((country) => country.name === subregion);
  console.log(filteredCountries);

  return (
    <div>
      <div className="flex h-40 bg-[#5487e3] justify-center gap-10">
        <div className="flex w-1/4 text-blue-950 py-3 items-center">
          <div>
            <img
              src={filteredCountries[0]?.flag}
              alt={subregion}
              className="w-40 h-40"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="font-bold">{`${subregion.toUpperCase()}`}</h1>
          <h3 className="mt-[-5px] text-[10px]">{`Population: ${filteredCountries[0].population}`}</h3>
        </div>
      </div>
      <div className="bg-[#35548b] pl-5 h-8 text-white text-sm">STATS BY COUNTRY</div>
      <div>
        <ul>
          <li
            className="flex text-2xl h-24 p-5 items-center text-white gap-5 even:bg-[#35548b]"
          >
            <div className="w-7/12 pl-5">
              CAPITAL
            </div>
            <div className="w-4/12">
              {filteredCountries[0].capital}
            </div>
          </li>
          <li
            className="flex text-2xl h-24 p-5 items-center text-white gap-5 even:bg-[#35548b]"
          >
            <div className="w-7/12 pl-5">
              POPULATION
            </div>
            <div className="w-4/12">
              {filteredCountries[0].population}
            </div>
          </li>
          <li
            className="flex text-2xl h-24 p-5 items-center text-white gap-5 even:bg-[#35548b]"
          >
            <div className="w-7/12 pl-5">
              AREA
            </div>
            <div className="w-4/12">
              {filteredCountries[0].area}
            </div>
          </li>
          <li
            className="flex text-2xl h-24 p-5 items-center text-white gap-5 even:bg-[#35548b]"
          >
            <div className="w-7/12 pl-5">
              CURRENCY
            </div>
            <div className="w-4/12">
              {filteredCountries[0].currencies[0].code}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
