// Nav.js
import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './Search';

const Nav = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [selectedRegion, setSelectedRegion] = useState('Africa');

  const handleRegionChange = (newRegion) => {
    setSelectedRegion(newRegion);
  };
  console.log('selectedRegion in Nav:', selectedRegion);

  let displayText = currentPathname;
  if (currentPathname === '/') {
    displayText = 'Home';
  } else {
    displayText = currentPathname.slice(1);
  }

  return (
    <>
      <nav className="flex flex-row bg-[#4369b2] text-white justify-between">
        <div className="flex flex-row p-4 flex-1 items-center">
          <NavLink to="/">
            <FaChevronLeft />
          </NavLink>
          <p>{displayText}</p>
        </div>
        <div className="py-4 flex-1 text-center font-thin items-center">
          <div className="relative inline-flex">
            <Search selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} />
          </div>
        </div>
        <div className="flex flex-row p-4 flex-1 justify-end items-center pr-10 gap-5">
          <div> </div>
          <FaMicrophone />
          <FaCog />
        </div>
      </nav>
    </>
  );
};

export default Nav;
