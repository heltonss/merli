import productDescriptionReducer, { Creators } from '../../ducks/product_description';

describe('Reducer description', () => {
  it('Should get description of the product', () => {
    const initialState = {
      data: {
        date_created: '2018-10-14T00:39:18.000Z',
        last_updated: '2018-10-14T00:39:18.000Z',
        plain_text:
          'iPod Touch 5ta Generación de 32 Gigas Color negro. Siempre fue usado con funda así que está mínimamente marcado por el paso del tiempo. La pantalla está impecable puesto que siempre tuvo su film protector Lo que tiene las rayas es ese film. La pantalla está perfecta Funciona perfecto, Necesita cambio de batería. Entrego con cable original',
        text: '',
      },
      loading: true,
    };

    const update = {
      data: {
        ...initialState.data,
      },
      loading: false,
    };
    const state = productDescriptionReducer(
      { data: initialState.data, loading: false },
      Creators.loadSuccess(update.data),
    );

    expect(state.loading).toBe(false);
  });
});
