import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('should render without crash', () => {
    const func = () => {
      return;
    };

    const wrapper = shallow(<Button label={'label do button'} func={func} />);
    expect(wrapper).toMatchSnapshot();
  });
});
