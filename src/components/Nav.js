// Navbar.js
import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const currentPathname = location.pathname;

  let displayText = 'Home';

  if (currentPathname === '/Botswana' || currentPathname === '/botswana') {
    displayText = 'Botswana';
  } else if (currentPathname === '/French%20Southern%20Territories' || currentPathname === '/french-southern-teritories') {
    displayText = 'French Southern Teritories';
  } else if (currentPathname === '/Lesotho' || currentPathname === '/lesotho') {
    displayText = 'Lesotho';
  } else if (currentPathname === '/Namibia' || currentPathname === '/namibia') {
    displayText = 'Namibia';
  } else if (currentPathname === '/South%20Africa' || currentPathname === '/south-africa') {
    displayText = 'South Africa';
  } else if (currentPathname === '/Swaziland' || currentPathname === '/swaziland') {
    displayText = 'Swaziland';
  } else if (currentPathname === '/Zimbabwe' || currentPathname === '/zimbabwe') {
    displayText = 'zimbabwe';
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
        <div className="py-4 flex-1 text-center font-thin items-center">most views</div>
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
