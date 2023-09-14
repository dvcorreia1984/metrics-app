import React from 'react';
import { Link } from 'react-router-dom';
import SouthernAfricaImage from '../assets/country.svg';
import WesternAfricaImage from '../assets/country2.svg';
import NorthernAfricaImage from '../assets/country3.svg';
import EasternAfricaImage from '../assets/country4.svg';
import CentralAfricaImage from '../assets/country5.svg';
import AfricaImage from '../assets/africa.svg';

const Home = () => (
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
    <div className="flex flex-wrap text-center bg-[#3f66ab]">
      <Link to="/southern-africa" className="w-full sm:w-1/2">
        <button type="button" className="w-3/4 aspect-square text-white font-bold p-5">
          <img
            src={SouthernAfricaImage}
            alt="Southern Africa"
            className="w-full h-full mx-auto"
          />
          SOUTHERN AFRICA
        </button>
      </Link>
      <Link to="/western-africa" className="w-full sm:w-1/2 bg-[#4063a5]">
        <button type="button" className="w-3/4 aspect-square text-white font-bold p-5">
          <img src={WesternAfricaImage} alt="Western Africa" className="w-full h-full mx-auto" />
          WESTERN AFRICA
        </button>
      </Link>
      <Link to="/northern-africa" className="w-full sm:w-1/2 bg-[#4063a5]">
        <button type="button" className="w-3/4 aspect-square text-white font-bold p-5">
          <img src={NorthernAfricaImage} alt="Northern Africa" className="w-full h-full mx-auto" />
          NORTHERN AFRICA
        </button>
      </Link>
      <Link to="/eastern-africa" className="w-full sm:w-1/2">
        <button type="button" className="w-3/4 aspect-square text-white font-bold p-5">
          <img src={EasternAfricaImage} alt="Eastern Africa" className="w-full h-full mx-auto" />
          EASTERN AFRICA
        </button>
      </Link>
      <Link to="/central-africa" className="w-full sm:w-1/2">
        <button type="button" className="w-3/4 aspect-square text-white font-bold p-5">
          <img src={CentralAfricaImage} alt="Central Africa" className="w-full h-full mx-auto" />
          CENTRAL AFRICA
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
