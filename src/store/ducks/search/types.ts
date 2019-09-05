// types
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
  address: {};
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
