// actions
import { action } from 'typesafe-actions';
import { IResultSearch, SearchProductTypes } from './types';

export const searchProducts = () => action(SearchProductTypes.LOAD_REQUEST);
export const loadSuccess = (data: IResultSearch) =>
  action(SearchProductTypes.LOAD_SUCCESS, { data });
