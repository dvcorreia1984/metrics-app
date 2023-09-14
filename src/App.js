// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App" />
    </Provider>
  );
}

export default App;
