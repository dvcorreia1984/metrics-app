// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './Routes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
