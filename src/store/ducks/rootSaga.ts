import { all, takeLatest } from 'redux-saga/effects';
import { loadSearchProducts, SearchProductTypes } from './search';

export default function* rootSaga() {
  yield all([takeLatest(SearchProductTypes.LOAD_REQUEST, loadSearchProducts)]);
}
