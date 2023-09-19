// Navbar.js
import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const currentPathname = location.pathname;

  let displayText = 'Home';

  if (currentPathname === '/Southern%20Africa' || currentPathname === '/southern-africa') {
    displayText = 'Southern Africa';
  } else if (currentPathname === '/Northern%20Africa' || currentPathname === '/northern-africa') {
    displayText = 'Northern Africa';
  } else if (currentPathname === '/Eastern%20Africa' || currentPathname === '/eastern-africa') {
    displayText = 'Eastern Africa';
  } else if (currentPathname === '/Middle%20Africa' || currentPathname === '/middle-africa') {
    displayText = 'Middle Africa';
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
