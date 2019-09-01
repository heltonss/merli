import { mount, shallow } from 'enzyme';
import React from 'react';
import Input from './Input';

describe('Input', () => {
  it('Should render without crash', () => {
    const wrapper = shallow(<Input placeholder={'insira seu texto aqui'} type={'text'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should get the props', () => {
    const getValueInput = () => {
      return;
    };
    const wrapper = mount(
      <Input
        placeholder={'Buscar produtos, marcas, muito mais'}
        type={'text'}
        getValue={getValueInput}
      />,
    );
    expect(wrapper.props().placeholder).toEqual('Buscar produtos, marcas, muito mais');
    expect(wrapper.props().type).toEqual('text');
  });
});
