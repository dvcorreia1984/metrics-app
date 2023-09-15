// Navbar.js
import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';

import React from 'react';

const Nav = () => (
  <>
    <nav className="flex flex-row bg-[#4369b2] text-white justify-between">
      <div className="flex flex-row p-4 flex-1 items-center">
        <FaChevronLeft />
        <p>2015</p>
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

export default Nav;
