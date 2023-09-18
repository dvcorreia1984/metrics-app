// Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import SouthernAfricaImage from '../assets/country.svg';
import NorthernAfricaImage from '../assets/country2.svg';
import MiddleAfricaImage from '../assets/country3.svg';
import EasternAfricaImage from '../assets/country4.svg';
import AfricaImage from '../assets/africa.svg';
import { fetchCountries, fetchSubregionData } from '../redux/country/countrySlice';

const Home = () => {
  const dispatch = useDispatch();
  const [
    southernAfricaData,
    northernAfricaData,
    easternAfricaData,
    middleAfricaData,
  ] = useSelector((state) => [
    state.countries.southernAfricaData,
    state.countries.northernAfricaData,
    state.countries.easternAfricaData,
    state.countries.middleAfricaData,
  ]);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchSubregionData('Southern Africa'));
    dispatch(fetchSubregionData('Northern Africa'));
    dispatch(fetchSubregionData('Eastern Africa'));
    dispatch(fetchSubregionData('Middle Africa'));
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
      <div className="flex bg-[#5487e3] justify-center gap-10">
        <div className="w-1/4 text-blue-950 py-3">
          <img src={AfricaImage} alt="africa" />
        </div>
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="font-bold">AFRICA</h1>
          <h3
            className="mt-[-5px] text-[10px]"
          >
            5.6780 views
          </h3>
        </div>
      </div>
      <div className="bg-[#35548b] pl-5 text-white text-sm">STATS BY COUNTRY</div>
      <div
        className="flex justify-center bg-[#3f66ab]"
        id="container"
      >
        <div className="flex flex-wrap max-w-screen-xl mx-auto">
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2">
            <Link to="/southern-africa" className="relative">
              <BsArrowRightCircle className="text-white text-2xl absolute top-0 right-0" />
              <div className="w-full aspect-square text-white font-bold flex flex-col items-center">
                <img
                  src={SouthernAfricaImage}
                  alt="Southern Africa"
                  className="w-2/3 h-2/3 mx-auto object-cover"
                />
                <div className="w-full flex flex-col text-sm">
                  <span className="flex justify-end mb-[-5px]">SOUTHERN</span>
                  <span className="flex justify-end mb-[-5px]">AFRICA</span>
                  <span className="flex justify-end font-light">
                    {calculatePopulation(southernAfricaData)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 bg-[#3d60a2]">
            <Link to="/northern-africa" className="relative">
              <BsArrowRightCircle className="text-white text-2xl absolute top-0 right-0" />
              <div className="w-full aspect-square text-white font-bold flex flex-col items-center">
                <img
                  src={NorthernAfricaImage}
                  alt="Northern Africa"
                  className="w-2/3 h-2/3 mx-auto object-cover"
                />
                <div className="w-full flex flex-col text-sm">
                  <span className="flex justify-end mb-[-5px]">NORTHERN</span>
                  <span className="flex justify-end mb-[-5px]">AFRICA</span>
                  <span className="flex justify-end font-light">
                    {calculatePopulation(northernAfricaData)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 bg-[#3d60a2]">
            <Link to="/middle-africa" className="relative">
              <BsArrowRightCircle className="text-white text-2xl absolute top-0 right-0" />
              <div className="w-full aspect-square text-white font-bold flex flex-col items-center">
                <img
                  src={MiddleAfricaImage}
                  alt="Middle Africa"
                  className="w-2/3 h-2/3 mx-auto object-cover"
                />
                <div className="w-full flex flex-col text-sm">
                  <span className="flex justify-end mb-[-5px]">MIDDLE</span>
                  <span className="flex justify-end mb-[-5px]">AFRICA</span>
                  <span className="flex justify-end font-light">
                    {calculatePopulation(middleAfricaData)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2">
            <Link to="/eastern-africa" className="relative">
              <BsArrowRightCircle className="text-white text-2xl absolute top-0 right-0" />
              <div className="w-full aspect-square text-white font-bold flex flex-col items-center">
                <img
                  src={EasternAfricaImage}
                  alt="Eastern Africa"
                  className="w-2/3 h-2/3 mx-auto object-cover"
                />
                <div className="w-full flex flex-col text-sm">
                  <span className="flex justify-end mb-[-5px]">EASTERN</span>
                  <span className="flex justify-end mb-[-5px]">AFRICA</span>
                  <span className="flex justify-end font-light">
                    {calculatePopulation(easternAfricaData)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
