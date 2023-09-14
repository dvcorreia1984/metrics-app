import React from 'react';
import { Link } from 'react-router-dom';
import { GiAfrica } from 'react-icons/gi';
import SouthernAfricaImage from '../assets/southern-africa.png';
import WesternAfricaImage from '../assets/western-africa.png';
import NorthernAfricaImage from '../assets/northern-africa.png';
import EasternAfricaImage from '../assets/eastern-africa.png';
import CentralAfricaImage from '../assets/central-africa.png';

const Home = () => (
  <div>
    <div className="flex bg-blue-400 justify-evenly">
      <div className="text-9xl text-blue-950">
        <GiAfrica />
      </div>
      <div className="flex flex-col justify-center items-start text-white">
        <h1 className="font-bold text-4xl">AFRICA</h1>
        <h2>5.6780 views</h2>
      </div>
    </div>
    <div className="bg-blue-800 pl-5 text-white font-bold">STATS BY COUNTRY</div>
    <div className="flex flex-wrap text-center bg-red-400">
      <Link to="/southern-africa" className="w-full md:w-1/2 lg:w-1/5 p-2">
        <button type="button">
          <img src={SouthernAfricaImage} alt="Southern Africa" className="w-16 h-16 mx-auto" />
          Southern Africa
        </button>
      </Link>
      <Link to="/western-africa" className="w-full md:w-1/2 lg:w-1/5 p-2">
        <button type="button">
          <img src={WesternAfricaImage} alt="Western Africa" className="w-16 h-16 mx-auto" />
          Western Africa
        </button>
      </Link>
      <Link to="/northern-africa" className="w-full md:w-1/2 lg:w-1/5 p-2">
        <button type="button">
          <img src={NorthernAfricaImage} alt="Northern Africa" className="w-16 h-16 mx-auto" />
          Northern Africa
        </button>
      </Link>
      <Link to="/eastern-africa" className="w-full md:w-1/2 lg:w-1/5 p-2">
        <button type="button">
          <img src={EasternAfricaImage} alt="Eastern Africa" className="w-16 h-16 mx-auto" />
          Eastern Africa
        </button>
      </Link>
      <Link to="/central-africa" className="w-full md:w-1/2 lg:w-1/5 p-2">
        <button type="button">
          <img src={CentralAfricaImage} alt="Central Africa" className="w-16 h-16 mx-auto" />
          Central Africa
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
