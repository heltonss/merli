import { Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import Api from 'services/api/api';
import { ISearchProductsState, SearchProductTypes } from './types';
const INITIAL_STATE: ISearchProductsState = {
  data: {
    query: '',
    results: [],
  },
  loading: false,
};

const reducer: Reducer<ISearchProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchProductTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case SearchProductTypes.LOAD_SUCCESS:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

export default reducer;
