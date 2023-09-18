// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './components/Home';
import './styles/App.css';
import Nav from './components/Nav';
import SouthernAfrica from './components/SouthernAfrica';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/southern-africa" element={<SouthernAfrica />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
