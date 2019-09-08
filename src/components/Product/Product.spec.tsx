import { mount, shallow } from 'enzyme';
import React from 'react';
import Product from './Product';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Product', () => {
  it('Should render without crash', () => {
    const wrapper = shallow(
      <Product thumbnail={''} id="MLA123" price={198000} title={'Apple'} region={'sp'} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  // it('Should get props of the product', () => {
  //   const wrapper = mount(
  //     <Router>
  //       <Product thumbnail={''} id="MLA123" price={1980} title={'Apple'} region={'sp'} />,
  //     </Router>,
  //   );

  //   // expect(wrapper.props().id).toEqual('MLA123');
  //   expect(wrapper.props().price).toEqual('1980,00');
  //   expect(wrapper.props().title).toEqual('Apple');
  //   expect(wrapper.props().region).toEqual('sp');
  // });
});
