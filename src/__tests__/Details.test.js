import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import store from '../redux/store';

test('renders the Details component with expected elements', () => {
  render(
    <Provider store={store}>
      <Details />
    </Provider>,
  );

  const capitalElement = screen.getByText('CAPITAL');
  const populationElement = screen.getByText('POPULATION');
  const areaElement = screen.getByText('AREA');
  const currencyElement = screen.getByText('CURRENCY');
  const callingCodeElement = screen.getByText('CALLING CODE');
  const timezoneElement = screen.getByText('TIMEZONES');

  expect(capitalElement).toBeInTheDocument();
  expect(populationElement).toBeInTheDocument();
  expect(areaElement).toBeInTheDocument();
  expect(currencyElement).toBeInTheDocument();
  expect(callingCodeElement).toBeInTheDocument();
  expect(timezoneElement).toBeInTheDocument();
});
