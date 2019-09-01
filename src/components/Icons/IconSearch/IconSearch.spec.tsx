import { shallow } from 'enzyme';
import React from 'react';
import Search from './IconSearch';

describe('Search', () => {
  it('Should render withou crash', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper).toMatchSnapshot();
  });
});
