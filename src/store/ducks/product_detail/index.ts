import { Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import Api from 'services/api/api';
import { Creators as act } from 'store/ducks/product_description';
import { action } from 'typesafe-actions';

export enum ProductDetailTypes {
  LOAD_REQUEST = '@product_detail/LOAD_REQUEST',
  LOAD_SUCCESS = '@product_detail/LOAD_SUCCESS',
}

export interface IPicture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface IProductDetail {
  id?: string;
  site_id?: string;
  title: string;
  subtitle?: string;
  seller_id?: any;
  category_id?: string;
  official_store_id?: string;
  price: number;
  base_price?: number;
  original_price?: any;
  currency_id?: string;
  initial_quantity?: any;
  available_quantity?: number;
  sold_quantity?: number;
  sale_terms?: any[];
  buying_mode?: string;
  listing_type_id?: string;
  start_time?: string;
  stop_time?: string;
  condition?: string;
  permalink?: string;
  thumbnail?: string;
  secure_thumbnail?: string;
  pictures: IPicture[];
  video_id?: any;
  descriptions?: any[];
  accepts_mercadopago?: boolean;
  non_mercado_pago_payment_methods?: any[];
  shipping?: {};
  international_delivery_mode?: string;
  seller_address?: {};
  seller_contact?: any;
  location?: {};
  geolocation?: {};
  coverage_areas?: any[];
  attributes?: any[];
  warnings?: any[];
  listing_source?: string;
  variations?: any[];
  status?: string;
  sub_status?: any[];
  tags?: any[];
  warranty?: any;
  catalog_product_id?: any;
  domain_id?: string;
  parent_item_id?: string;
  differential_pricing?: any;
  deal_ids?: any[];
  automatic_relist?: boolean;
  date_created?: string;
  last_updated?: string;
  health?: any;
  catalog_listing?: boolean;
}

export interface IProductDetailState {
  readonly data: IProductDetail;
  readonly loading: boolean;
}

export const Creators = {
  getProductDetail: (id: string) => action(ProductDetailTypes.LOAD_REQUEST, { id }),
  loadSuccess: (data: IProductDetail) => action(ProductDetailTypes.LOAD_SUCCESS, { data }),
};

export function* getProductDetail(action: any) {
  try {
    const { data } = yield call(Api.get, `items/${action.payload.id}`);
    yield put(Creators.loadSuccess(data));
    yield put(act.getProductDescription(action.payload.id));
  } catch (error) {
    // adiciona action de erro
    // tslint:disable-next-line: no-console
    console.log('error');
  }
}

const INITIAL_STATE: IProductDetailState = {
  data: {
    accepts_mercadopago: false,
    attributes: [],
    automatic_relist: false,
    available_quantity: 0,
    base_price: 0,
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
    pictures: [
      {
        id: '',
        max_size: '',
        quality: '',
        secure_url: '',
        size: '',
        url: '',
      },
    ],
    price: 0,
    sale_terms: [],
    secure_thumbnail: '',
    seller_address: {},
    seller_contact: null,
    seller_id: null,
    shipping: {},
    site_id: '',
    sold_quantity: 0,
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

const reducer: Reducer<IProductDetailState> = (state = INITIAL_STATE, actions) => {
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
