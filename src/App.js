// App.js

import React from 'react';
import { Provider } from 'react-redux';
import CountryList from './components/countryList';
import { store } from './redux/store';
import { Home } from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
