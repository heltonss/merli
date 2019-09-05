import ProductsList from 'containers/productsList/ProductsList';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from 'store';
import * as SearchActions from 'store/ducks/search/actions';
import { IResultSearch } from 'store/ducks/search/types';
interface IStateToProps {
  resultSearch: IResultSearch;
}

interface IDispatchToProps {
  searchProducts(): void;
}

type props = IStateToProps & IDispatchToProps;
class Home extends Component<props> {
  componentDidMount() {
    const { searchProducts } = this.props;
    searchProducts();
  }

  render() {
    return (
      <>
        <ProductsList />
      </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  resultSearch: state.search.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(SearchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
