import Product from 'components/Product/Product';
import React, { Component } from 'react';
import Style from './ProductsList.module.scss';

export default class ProductsList extends Component {
  render() {
    const list = [1, 1, 1];
    return (
      <section className={Style.container}>
        {list.map(product => (
          <Product
            key={Math.random()}
            price={'$ 1980'}
            title={'Aple ipode ducks du lroeme fararslfjka '}
            region={'são paulo'}
          />
        ))}
      </section>
    );
  }
}
