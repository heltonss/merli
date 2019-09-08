import Buy from 'components/Buy/Buy';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from 'store';
import { IProductDetail } from 'store/ducks/product_detail';
import { Creators as getProductDetail } from 'store/ducks/product_detail';
import Style from './ProductDetail.module.scss';
interface IStateToProps {
  product: IProductDetail;
}

interface IDispatchToProps {
  getProductDetail(id: string): void;
}

type props = IStateToProps & IDispatchToProps;
class ProductDetail extends Component<props> {
  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    const { getProductDetail } = this.props;
    getProductDetail('MLA786117240');
  }

  render() {
    const { product } = this.props;
    const { title, sold_quantity, condition, pictures, price } = product;
    console.log('prod', product);
    return (
      product && (
        <div className={Style.container}>
          <div className={Style.image}>
            <img src={pictures[0].url} alt={title} />
          </div>
          <Buy
            price={price}
            nameProduct={title}
            solds={sold_quantity ? `${condition} - ${sold_quantity}` : '0 vendidos'}
          />
        </div>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  product: state.productDetail.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(getProductDetail, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);
