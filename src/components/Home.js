// Home.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import SouthernAfricaImage from '../assets/country.svg';
import NorthernAfricaImage from '../assets/country2.svg';
import AfricaImage from '../assets/africa.svg';
import { fetchSubregionData } from '../redux/country/countrySlice';

const Home = () => {
  const dispatch = useDispatch();
  const [southernAfricaData, northernAfricaData] = useSelector((state) => [
    state.countries.southernAfricaData,
    state.countries.northernAfricaData,
  ]);

  useEffect(() => {
    dispatch(fetchSubregionData('Southern Africa'));
    dispatch(fetchSubregionData('Northern Africa'));
  }, [dispatch]);

  // Function to calculate the total population of a subregion
  const calculatePopulation = (data) => {
    if (data) {
      return data.population;
    }
    return 'Loading...';
  };

  return (
    <div>
      <div className="flex bg-[#5487e3] justify-evenly">
        <div className="w-1/4 text-blue-950 p-5">
          <img src={AfricaImage} alt="africa" />
        </div>
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="font-bold text-4xl">AFRICA</h1>
          <h2>5.6780 views</h2>
        </div>
      </div>
      <div className="bg-[#35548b] pl-5 text-white font-bold">STATS BY COUNTRY</div>
      <div className="flex flex-wrap justify-center bg-[#3f66ab]">
        {/* Container div with flex styles */}
        <div className="flex justify-between w-full max-w-screen-xl mx-auto p-4">
          <Link to="/southern-africa" className="w-full sm:w-1/2 m-2 relative">
            <BsArrowRightCircle className="text-white text-2xl absolute top-0 right-0" />
            <div className="w-full aspect-square text-white font-bold p-5 flex flex-col items-center">
              <img
                src={SouthernAfricaImage}
                alt="Southern Africa"
                className="w-2/3 h-2/3 mx-auto object-cover"
              />
              <div className="w-full flex flex-col">
                <span className="flex justify-end">SOUTHERN</span>
                <span className="flex justify-end">AFRICA</span>
                <span className="flex justify-end">
                  {calculatePopulation(southernAfricaData)}
                </span>
              </div>
            </div>
          </Link>
          <Link to="/northern-africa" className="w-full sm:w-1/2 m-2 relative">
            <BsArrowRightCircle className="text-white text-2xl absolute top-0 right-0" />
            <div className="w-full aspect-square text-white font-bold p-5 flex flex-col items-center">
              <img
                src={NorthernAfricaImage}
                alt="Northern Africa"
                className="w-2/3 h-2/3 mx-auto object-cover"
              />
              <div className="w-full flex flex-col">
                <span className="flex justify-end">NORTHERN</span>
                <span className="flex justify-end">AFRICA</span>
                <span className="flex justify-end">
                  {calculatePopulation(northernAfricaData)}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
