// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './Routes';
import Nav from './components/Nav';
import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
