import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [selectedRegion, setSelectedRegion] = React.useState('World');

  const handleSelect = (e) => {
    setSelectedRegion(e.target.value);
  };

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
            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" /></svg>
            <select
              className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              value={selectedRegion}
              onChange={handleSelect}
            >
              <option>World</option>
              <option>Africa</option>
              <option>America</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
            </select>
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
