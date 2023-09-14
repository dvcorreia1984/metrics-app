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
    <div className="flex bg-blue-400 justify-evenly">
      <div className="text-9xl text-blue-950">
        <img src={AfricaImage} alt="africa" />
      </div>
      <div className="flex flex-col justify-center items-start text-white">
        <h1 className="font-bold text-4xl">AFRICA</h1>
        <h2>5.6780 views</h2>
      </div>
    </div>
    <div className="bg-blue-800 pl-5 text-white font-bold">STATS BY COUNTRY</div>
    <div className="flex flex-wrap text-center bg-blue-800">
      <Link to="/southern-africa" className="w-full sm:w-1/2">
        <button type="button" className="w-full aspect-square text-white font-bold">
          <img
            src={SouthernAfricaImage}
            alt="Southern Africa"
            className="w-full h-full mx-auto"
          />
          SOUTHERN AFRICA
        </button>
      </Link>
      <Link to="/western-africa" className="w-full sm:w-1/2 bg-blue-700">
        <button type="button" className="w-full aspect-square text-white font-bold">
          <img src={WesternAfricaImage} alt="Western Africa" className="w-full h-full mx-auto" />
          WESTERN AFRICA
        </button>
      </Link>
      <Link to="/northern-africa" className="w-full sm:w-1/2 bg-blue-700">
        <button type="button" className="w-full aspect-square text-white font-bold">
          <img src={NorthernAfricaImage} alt="Northern Africa" className="w-full h-full mx-auto" />
          NORTHERN AFRICA
        </button>
      </Link>
      <Link to="/eastern-africa" className="w-full sm:w-1/2">
        <button type="button" className="w-full aspect-square text-white font-bold">
          <img src={EasternAfricaImage} alt="Eastern Africa" className="w-full h-full mx-auto" />
          EASTERN AFRICA
        </button>
      </Link>
      <Link to="/central-africa" className="w-full sm:w-1/2">
        <button type="button" className="w-full aspect-square text-white font-bold">
          <img src={CentralAfricaImage} alt="Central Africa" className="w-full h-full mx-auto" />
          CENTRAL AFRICA
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
