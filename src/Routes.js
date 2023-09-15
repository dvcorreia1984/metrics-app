import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SouthernAfrica from './components/SouthernAfrica';
import NorthernAfrica from './components/NorthernAfrica';
import WesternAfrica from './components/WesternAfrica'; // Import WesternAfrica component
import EasternAfrica from './components/EasternAfrica'; // Import EasternAfrica component
import MiddleAfrica from './components/MiddleAfrica'; // Import CentralAfrica component
import CountryList from './components/countryList';

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country-list" element={<CountryList />} />
      <Route path="/southern-africa" element={<SouthernAfrica />} />
      <Route path="/northern-africa" element={<NorthernAfrica />} />
      <Route path="/western-africa" element={<WesternAfrica />} />
      <Route path="/eastern-africa" element={<EasternAfrica />} />
      <Route path="/middle-africa" element={<MiddleAfrica />} />
    </Routes>
  </Router>
);

export default RoutesComponent;
