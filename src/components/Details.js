import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
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
      <div className="flex h-36 bg-[#5487e3] justify-center gap-10">
        <div className="w-1/4 text-blue-950 py-3">
          <img src="#" alt="africa" />
        </div>
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="font-bold">{`${subregion.toUpperCase()}`}</h1>
          <h3 className="mt-[-5px] text-[10px]">5.6780 views</h3>
        </div>
      </div>
      <div className="bg-[#35548b] pl-5 h-8 text-white text-sm">STATS BY COUNTRY</div>
      <div>
        <ul>
          {subregionCountries.map((country) => (
            <li
              key={country.alpha2Code}
              className="flex text-2xl h-24 p-5 items-center text-white gap-5 even:bg-[#35548b]"
            >
              <div
                className="flex-1 pl-5"
              >
                {country.name}
              </div>
              <div>
                {country.population}
              </div>
              <BsArrowRightCircle />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
