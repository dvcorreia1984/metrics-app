// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import AfricaImage from '../assets/africa.svg';
import Filter from './Filter';

const Card = ({
  to, imageSrc, title, subtitle, backgroundColor, population,
}) => (
  <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2" style={{ backgroundColor }}>
    <Link to={to} className="relative">
      <BsArrowRightCircle className="text-white text-2xl absolute top-0 right-0" />
      <div className="w-10/12 aspect-square text-white font-bold flex flex-col items-center justify-start">
        <img src={imageSrc} alt={title} className="object-cover rounded-lg" />
        <div className="w-full flex flex-col text-sm">
          <span className="flex justify-end">{title}</span>
          <span className="flex justify-end">{subtitle}</span>
          <span className="flex justify-end font-light">
            Population:
            {' '}
            {population}
          </span>
        </div>
      </div>
    </Link>
  </div>
);

Card.propTypes = {
  to: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

const Home = () => {
  const filteredCountries = Filter();
  return (
    <div>
      <div className="flex bg-[#5487e3] justify-center gap-10">
        <div className="w-1/4 text-blue-950 py-3">
          <img src={AfricaImage} alt="africa" />
        </div>
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="font-bold"> AFRICA </h1>
          <h3 className="mt-[-5px] text-[10px]">Population:  60,546,598</h3>
        </div>
      </div>

      <div className="bg-[#35548b] pl-5 text-white text-sm">STATS BY COUNTRY</div>
      <div className="flex justify-center bg-[#3f66ab]" id="container">
        <div className="flex flex-wrap max-w-screen-xl mx-auto">
          {filteredCountries.map((country, index) => (
            <Card
              key={country.alpha2code}
              to={`/${country.name}`}
              title={country.name}
              backgroundColor={index === 0 || index === 3 || index === 4 || index === 7 || index === 8 ? '#3f66ab' : '#4369b2'}
              population={country.population}
              imageSrc={country.flag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
