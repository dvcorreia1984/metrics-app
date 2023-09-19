import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SouthernAfricaImage from '../assets/country.svg';
import NorthernAfricaImage from '../assets/country2.svg';
import MiddleAfricaImage from '../assets/country3.svg';
import EasternAfricaImage from '../assets/country4.svg';
import WesternAfricaImage from '../assets/country5.svg';

const Details = () => {
  const { subregion } = useParams();
  let subregionImage;

  switch (subregion) {
    case 'Southern Africa':
      subregionImage = SouthernAfricaImage;
      break;
    case 'Northern Africa':
      subregionImage = NorthernAfricaImage;
      break;
    case 'Middle Africa':
      subregionImage = MiddleAfricaImage;
      break;
    case 'Eastern Africa':
      subregionImage = EasternAfricaImage;
      break;
    case 'Western Africa':
      subregionImage = WesternAfricaImage;
      break;
    default:
      break;
  }
  const countries = useSelector((state) => state.countries.countries);

  const subregionCountries = countries.filter(
    (country) => country.subregion === subregion,
  );

  if (!Array.isArray(countries)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex h-40 bg-[#5487e3] justify-center gap-10">
        <div className="flex w-1/4 text-blue-950 py-3 items-center">
          <div>
            <img
              src={subregionImage}
              alt={subregion}
              className="h-32 w-32"
            />
          </div>
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
                className="w-7/12 pl-5"
              >
                {country.name}
              </div>
              <div
                className="w-4/12"
              >
                {country.population}
                {' '}
                citizens
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
