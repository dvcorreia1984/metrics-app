// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <img src="#" alt="worldpop" />
    <h1>World Population</h1>
    <Link to="/southern-africa">
      <button type="button">Southern Africa</button>
    </Link>
    <Link to="/northern-africa">
      <button type="button">Northern Africa</button>
    </Link>
  </div>
);

export default Home;
