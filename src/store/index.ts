import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { IProductDetailState } from './ducks/product_detail';
import reducers from './ducks/rootReducer';
import sagas from './ducks/rootSaga';
import { ISearchProductsState } from './ducks/search';
declare var console: any;

export interface IApplicationState {
  search: ISearchProductsState;
  productDetail: IProductDetailState;
}

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer(),
      )
    : compose(applyMiddleware(...middlewares));

const store: Store<IApplicationState> = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
