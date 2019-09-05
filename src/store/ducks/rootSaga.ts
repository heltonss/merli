import { all, takeLatest } from 'redux-saga/effects';
import { loadSearchProducts } from './search/sagas';
import { SearchProductTypes } from './search/types';

export default function* rootSaga() {
  yield all([takeLatest(SearchProductTypes.LOAD_REQUEST, loadSearchProducts)]);
}
