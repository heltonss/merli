import { Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import Api from 'services/api/api';
import { action } from 'typesafe-actions';

export enum ProductDescriptionTypes {
  LOAD_REQUEST = '@product_description/LOAD_REQUEST',
  LOAD_SUCCESS = '@product_description/LOAD_SUCCESS',
}

export interface IProductDescription {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
}

export interface IProductDescriptionState {
  readonly data: IProductDescription;
  readonly loading: boolean;
}

export const Creators = {
  getProductDescription: (id: string) => action(ProductDescriptionTypes.LOAD_REQUEST, { id }),
  loadSuccess: (data: IProductDescription) =>
    action(ProductDescriptionTypes.LOAD_SUCCESS, { data }),
};

export function* getProductDescription(action: any) {
  try {
    const { data } = yield call(Api.get, `items/${action.payload.id}/description`);
    yield put(Creators.loadSuccess(data));
  } catch (error) {
    // adiciona action de erro
    // tslint:disable-next-line: no-console
    console.log('error');
  }
}

const INITIAL_STATE: IProductDescriptionState = {
  data: {
    date_created: '',
    last_updated: '',
    plain_text: '',
    text: '',
  },
  loading: false,
};

const reducer: Reducer<IProductDescriptionState> = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ProductDescriptionTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ProductDescriptionTypes.LOAD_SUCCESS:
      return {
        ...state,
        data: actions.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
