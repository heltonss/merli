import { Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import Api from 'services/api/api';
import { action } from 'typesafe-actions';

export enum SearchProductTypes {
  LOAD_REQUEST = '@search_products/LOAD_REQUEST',
  LOAD_SUCCESS = '@search_products/LOAD_SUCCESS',
}

export interface IProducts {
  id: string;
  site_id: string;
  title: string;
  seller: {};
  price: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  accepts_mercadopago: boolean;
  installments: {};
  address: {
    state_id: string;
    state_name: string;
  };
  shipping: {};
  seller_address: {};
  attributes: [];
  original_price: any;
  category_id: string;
  official_store_id: any;
  catalog_product_id: any;
  tags: [];
}

export interface IResultSearch {
  query: string;
  results: IProducts[];
}

export interface ISearchProductsState {
  readonly data: IResultSearch;
  readonly loading: boolean;
}

export const Creators = {
  loadSuccess: (data: IResultSearch) => action(SearchProductTypes.LOAD_SUCCESS, { data }),
  searchProducts: (query: string) => action(SearchProductTypes.LOAD_REQUEST, { query }),
};

export function* loadSearchProducts(action: any) {
  try {
    const { data } = yield call(Api.get, `search?q=${action.payload.query}`);
    yield put(Creators.loadSuccess(data));
  } catch (error) {
    // adiciona action de erro
    // tslint:disable-next-line: no-console
    console.log('error');
  }
}

const INITIAL_STATE: ISearchProductsState = {
  data: {
    query: '',
    results: [],
  },
  loading: false,
};

const reducer: Reducer<ISearchProductsState> = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case SearchProductTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case SearchProductTypes.LOAD_SUCCESS:
      return { ...state, data: actions.payload.data };
    default:
      return state;
  }
};

export default reducer;
