import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Input from '../Input/Input';
import Search from './Search';

describe('Search', () => {
  it('Should render withou crash', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
  // it('Should have one input', () => {
  //   const wrapper = shallow(
  //     <Provider store={store}>
  //       <Search />
  //     </Provider>,
  //   );

  //   expect(wrapper.contains(Input).exists).toHaveLength(1);
  // });
});
