import { shallow } from 'enzyme';
import React from 'react';
import Input from '../Input/Input';
import Search from './Search';

describe('Search', () => {
  it('Should render withou crash', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper).toMatchSnapshot();
  });
  it('Should have one input', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.find(Input)).toHaveLength(1);
  });
});
