import Button from 'components/Button/Button';
import { mount, shallow } from 'enzyme';
import React from 'react';
import Buy from './Buy';

describe('Buy ', () => {
  it('should render without crash', () => {
    const wrapper = mount(
      <Buy solds={'Novo - 234 itens vendidos'} nameProduct={'iphone'} price={1980} />,
    );

    expect(wrapper.props().price).toEqual(1980);
    expect(wrapper.props().nameProduct).toEqual('iphone');
    expect(wrapper.props().solds).toEqual('Novo - 234 itens vendidos');
  });

  it('should have a got a button of buy', () => {
    const wrapper = shallow(
      <Buy solds={'Novo - 234 itens vendidos'} nameProduct={'iphone'} price={1980} />,
    );

    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
