import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import ProductsList from './ProductsList';

describe('ProductsList', () => {
  it('should render without crash', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProductsList />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
