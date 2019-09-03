import { mount, shallow } from 'enzyme';
import React from 'react';
import Product from './Product';

describe('Product', () => {
  it('Should render without crash', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should get props of the product', () => {
    const wrapper = mount(<Product price={'1980,00'} title={'Apple'} region={'sp'} />);

    expect(wrapper.props().price).toEqual('1980,00');
    expect(wrapper.props().title).toEqual('Apple');
    expect(wrapper.props().region).toEqual('sp');
  });
});
