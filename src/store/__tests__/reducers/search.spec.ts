import searchReducer, { Creators, ISearchProductsState } from '../../../store/ducks/search';

describe('Reducer search', () => {
  it('Should get search of products', () => {
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
      Creators.loadSuccess(update.data),
    );

    expect(state.loading).toBe(false);
  });
});
