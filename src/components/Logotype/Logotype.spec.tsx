import { shallow } from 'enzyme';
import React from 'react';
import Logotype from './Logotype';

describe('Logotype ', () => {
  it('Should render without crash', () => {
    const wrapper = shallow(<Logotype />);

    expect(wrapper).toMatchSnapshot();
  });
});
