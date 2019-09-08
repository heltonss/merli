import Product from 'components/Product/Product';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from 'store';
import { IResultSearch } from 'store/ducks/search';
import Style from './ProductsList.module.scss';

interface IOwnProps {
  resultSearch: IResultSearch;
}

class ProductsList extends Component<IOwnProps> {
  static defaultProps: IOwnProps = {
    resultSearch: {
      query: '',
      results: [],
    },
  };

  render() {
    const { results } = this.props.resultSearch;

    return (
      <section className={Style.container}>
        {results.map(product => (
          <Product
            key={product.id}
            price={product.price}
            title={product.title}
            region={product.address.state_name}
          />
        ))}
      </section>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  resultSearch: state.search.data,
});

export default connect(
  mapStateToProps,
  undefined,
)(ProductsList);
