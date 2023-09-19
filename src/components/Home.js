// Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import AfricaImage from '../assets/africa.svg';
import { fetchCountries } from '../redux/country/countrySlice';
import SouthernAfricaImage from '../assets/country.svg';
import NorthernAfricaImage from '../assets/country2.svg';
import MiddleAfricaImage from '../assets/country3.svg';
import EasternAfricaImage from '../assets/country4.svg';
import WesternAfricaImage from '../assets/country5.svg';

const Card = ({
  to, imageSrc, title, subtitle, backgroundColor,
}) => (
  <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2" style={{ backgroundColor }}>
    <Link to={to} className="relative">
      <BsArrowRightCircle className="text-white text-2xl absolute top-0 right-0" />
      <div className="w-full aspect-square text-white font-bold flex flex-col items-center">
        <img src={imageSrc} alt={title} className="w-2/3 h-2/3 mx-auto object-cover" />
        <div className="w-full flex flex-col text-sm">
          <span className="flex justify-end mb-[-5px]">{title}</span>
          <span className="flex justify-end mb-[-5px]">{subtitle}</span>
          <span className="flex justify-end font-light" />
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
};

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div>
      <div className="flex bg-[#5487e3] justify-center gap-10">
        <div className="w-1/4 text-blue-950 py-3">
          <img src={AfricaImage} alt="africa" />
        </div>
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="font-bold">AFRICA</h1>
          <h3 className="mt-[-5px] text-[10px]">5.6780 views</h3>
        </div>
      </div>

      <div className="bg-[#35548b] pl-5 text-white text-sm">STATS BY COUNTRY</div>
      <div className="flex justify-center bg-[#3f66ab]" id="container">
        <div className="flex flex-wrap max-w-screen-xl mx-auto">
          <Card to="/Southern Africa" imageSrc={SouthernAfricaImage} title="SOUTHERN" subtitle="AFRICA" backgroundColor="#35548b" />
          <Card to="/Northern Africa" imageSrc={NorthernAfricaImage} title="NORTHERN" subtitle="AFRICA" />
          <Card to="/Middle Africa" imageSrc={MiddleAfricaImage} title="MIDDLE" subtitle="AFRICA" />
          <Card to="/Eastern Africa" imageSrc={EasternAfricaImage} title="EASTERN" subtitle="AFRICA" backgroundColor="#35548b" />
          <Card to="/Western Africa" imageSrc={WesternAfricaImage} title="WESTERN" subtitle="AFRICA" backgroundColor="#35548b" />
        </div>
      </div>
    </div>
  );
};

export default Home;
