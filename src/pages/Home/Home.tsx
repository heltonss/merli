import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import React, { Component } from 'react';
import ProductsList from 'containers/productsList/ProductsList';

export default class Home extends Component {
  render() {
    return (
      <>
        <ProductsList />
      </>
    );
  }
}
