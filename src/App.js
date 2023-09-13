// App.js

import React from 'react';
import { Provider } from 'react-redux';
import CountryList from './components/countryList';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
