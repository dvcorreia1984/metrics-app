// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'
import Home from './components/Home';
import SouthernAfrica from './components/SouthernAfrica';
import NorthernAfrica from './components/NorthernAfrica';
import CountryList from './components/countryList';

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country-list" element={<CountryList />} />
      <Route path="/southern-africa" element={<SouthernAfrica />} />
      <Route path="/northern-africa" element={<NorthernAfrica />} />
    </Routes>
  </Router>
);

export default RoutesComponent; // Rename the exported component
