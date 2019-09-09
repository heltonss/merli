import Buy from 'components/Buy/Buy';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from 'store';
import { IProductDescription } from 'store/ducks/product_description';
import { IProductDetail } from 'store/ducks/product_detail';
import { Creators as getProductDetail } from 'store/ducks/product_detail';
import Style from './ProductDetail.module.scss';

interface ITParams {
  id: string;
}
interface IStateToProps extends RouteComponentProps<ITParams> {
  product: IProductDetail;
  description: IProductDescription;
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
    const { getProductDetail, match } = this.props;

    console.log(this.props.match.params.id);
    getProductDetail(this.props.match.params.id);
  }

  render() {
    const { product, description } = this.props;
    const { title, sold_quantity, condition, pictures, price } = product;
    const { plain_text } = description;
    return (
      <>
        <div className={Style.container}>
          <div className={Style.product}>
            <div className={Style.image}>
              <img src={pictures[0].url} alt={title} />
            </div>
            <Buy
              price={price}
              nameProduct={title}
              solds={sold_quantity ? `${condition} - ${sold_quantity}` : '0 vendidos'}
            />
          </div>
          <div className={Style.description}>
            <h2 className={Style.subtitle}>Description del producto</h2>
            <p className={Style.text}> {plain_text} </p>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  description: state.productDetailDescription.data,
  product: state.productDetail.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(getProductDetail, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProductDetail),
);
