// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './components/Home';
import './styles/App.css';
import Nav from './components/Nav';
import Details from './components/Details';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:subregion" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
