import { combineReducers } from 'redux';
import productDetail from './product_detail';
import search from './search/index';

const reducers = combineReducers({
  productDetail,
  search,
});

export default reducers;
