import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Details from '../Details'; // Import your Details component

describe('Details Component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        {' '}
        <Details />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
