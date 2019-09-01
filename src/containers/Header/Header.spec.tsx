import Logotype from 'components/Logotype/Logotype';
import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header', () => {
  it('Should render withou crash', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should have logo mercado livre', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(Logotype)).toHaveLength(1);
  });
});
