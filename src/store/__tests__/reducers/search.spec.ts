import searchReducer, { Creators, ISearchProductsState } from '../../../store/ducks/search';

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
      Creators.loadSuccess(update.data),
    );

    expect(state.loading).toBe(false);
  });
});
