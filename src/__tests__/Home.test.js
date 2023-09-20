import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest-DOM matchers
import { Provider } from 'react-redux';
import Home from '../components/Home'; // Import your Home component
import store from '../redux/store';

test('renders the Home component with expected elements', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  const africaImage = screen.getByAltText('africa');
  const titleElement = screen.getByText('SOUTHERN AFRICA');
  const populationElement = screen.getByText('Population: 60,546,598');

  expect(africaImage).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(populationElement).toBeInTheDocument();
});
