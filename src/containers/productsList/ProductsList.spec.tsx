import { shallow } from 'enzyme';
import React from 'react';
import ProductsList from './ProductsList';

describe('ProductsList', () => {
  it('should render without crash', () => {
    const wrapper = shallow(<ProductsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
