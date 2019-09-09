import { combineReducers } from 'redux';
import productDetailDescription from './product_description';
import productDetail from './product_detail';
import search from './search';

const reducers = combineReducers({
  productDetail,
  productDetailDescription,
  search,
});

export default reducers;
