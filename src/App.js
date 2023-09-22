// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './components/Home';
import './styles/App.css';
import Nav from './components/Nav';
import Details from './components/Details';
import Region from './components/Region';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:subregion" element={<Details />} />
          <Route path="/africa" component={Region} />
          <Route path="/americas" component={Region} />
          <Route path="/asia" component={Region} />
          <Route path="/europe" component={Region} />
          <Route path="/oceania" component={Region} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
