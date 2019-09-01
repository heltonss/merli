import { shallow } from 'enzyme';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumb', () => {
  it('should render withou crash', () => {
    const wrapper = shallow(<Breadcrumbs />);

    expect(wrapper).toMatchSnapshot();
  });
});
