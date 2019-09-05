import { loadSuccess } from 'store/ducks/search/actions';
import { ISearchProductsState } from 'store/ducks/search/types';
import searchReducer from '../../../store/ducks/search';

describe('Reducer benefit with season', () => {
  it('Should get benefit with season', () => {
    const initialState: ISearchProductsState = {
      data: {
        query: '',
        results: [],
      },
      loading: true,
    };

    const update = {
      data: {
        query: '',
        results: [],
      },
      loading: false,
    };
    const state = searchReducer(
      { data: initialState.data, loading: false },
      loadSuccess(update.data),
    );

    expect(state.loading).toBe(false);
  });
});
