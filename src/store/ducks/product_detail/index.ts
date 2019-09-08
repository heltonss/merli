import { Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import Api from 'services/api/api';
import { action } from 'typesafe-actions';

export enum ProductDetailTypes {
  LOAD_REQUEST = '@product_detail/LOAD_REQUEST',
  LOAD_SUCCESS = '@product_detail/LOAD_SUCCESS',
}

export interface IProductDetail {
  id: string;
  site_id: string;
  title: string;
  subtitle: string;
  seller_id: number;
  category_id: string;
  official_store_id: string;
  price: number;
  base_price: number;
  original_price: null;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  buying_mode: string;
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: any[];
  video_id: null;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: {};
  international_delivery_mode: string;
  seller_address: {};
  seller_contact: null;
  location: {};
  geolocation: {};
  coverage_areas: any[];
  attributes: any[];
  warnings: any[];
  listing_source: string;
  variations: any[];
  status: string;
  sub_status: any[];
  tags: any[];
  warranty: null;
  catalog_product_id: null;
  domain_id: string;
  parent_item_id: string;
  differential_pricing: null;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number;
  catalog_listing: boolean;
}

export interface ISearchProductsState {
  readonly data: IProductDetail;
  readonly loading: boolean;
}

export const Creators = {
  getProductDetail: (id: string) => action(ProductDetailTypes.LOAD_REQUEST, { id }),
  loadSuccess: (data: IProductDetail) => action(ProductDetailTypes.LOAD_SUCCESS, { data }),
};

export function* loadSearchProducts(action: any) {
  try {
    const { data } = yield call(Api.get, `items/${action.payload.id}`);
    yield put(Creators.loadSuccess(data));
  } catch (error) {
    // adiciona action de erro
    // tslint:disable-next-line: no-console
    console.log('error');
  }
}

const INITIAL_STATE: ISearchProductsState = {
  data: {
    accepts_mercadopago: false,
    attributes: [],
    automatic_relist: false,
    available_quantity: null,
    base_price: null,
    buying_mode: '',
    catalog_listing: false,
    catalog_product_id: null,
    category_id: '',
    condition: '',
    coverage_areas: [],
    currency_id: '',
    date_created: '',
    deal_ids: [],
    descriptions: [],
    differential_pricing: null,
    domain_id: '',
    geolocation: {},
    health: null,
    id: '',
    initial_quantity: null,
    international_delivery_mode: '',
    last_updated: '',
    listing_source: '',
    listing_type_id: '',
    location: {},
    non_mercado_pago_payment_methods: [],
    official_store_id: '',
    original_price: null,
    parent_item_id: '',
    permalink: '',
    pictures: [],
    price: null,
    sale_terms: [],
    secure_thumbnail: '',
    seller_address: {},
    seller_contact: null,
    seller_id: null,
    shipping: {},
    site_id: '',
    sold_quantity: null,
    start_time: '',
    status: '',
    stop_time: '',
    sub_status: [],
    subtitle: '',
    tags: [],
    thumbnail: '',
    title: '',
    variations: [],
    video_id: null,
    warnings: [],
    warranty: null,
  },
  loading: false,
};

const reducer: Reducer<ISearchProductsState> = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ProductDetailTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ProductDetailTypes.LOAD_SUCCESS:
      return {
        ...state,
        data: actions.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
