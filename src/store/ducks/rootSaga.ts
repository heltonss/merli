import { all, takeLatest } from 'redux-saga/effects';
import { getProductDetail, ProductDetailTypes } from './product_detail';
import { loadSearchProducts, SearchProductTypes } from './search';

export default function* rootSaga() {
  yield all([takeLatest(SearchProductTypes.LOAD_REQUEST, loadSearchProducts)]);
  yield all([takeLatest(ProductDetailTypes.LOAD_REQUEST, getProductDetail)]);
}
