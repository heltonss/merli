import { call, put } from 'redux-saga/effects';
import Api from '../../../services/api/api';
import { loadSuccess } from './actions';

// sagas
export function* loadSearchProducts() {
  try {
    const { data } = yield call(Api.get, `search?q=apple`);
    yield put(loadSuccess(data));
  } catch (error) {
    // adiciona action de erro
    // tslint:disable-next-line: no-console
    console.log('error');
  }
}
