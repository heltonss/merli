import MockAdapter from 'axios-mock-adapter';
import { runSaga } from 'redux-saga';
import api from 'services/api/api';
import { ISearchProductsState, loadSearchProducts, loadSuccess } from 'store/ducks/search';

const apiMock = new MockAdapter(api);
const response: ISearchProductsState = {
  data: {
    query: 'apple',
    results: [
      {
        id: 'MLA786117240',
        site_id: 'MLA',
        title: 'iPod Touch 5ta Generación 32 Gigas',
        seller: {},
        price: 3300,
        currency_id: 'ARS',
        available_quantity: 1,
        sold_quantity: 0,
        buying_mode: 'buy_it_now',
        listing_type_id: 'gold_special',
        stop_time: '2039-05-22T20:08:44.000Z',
        condition: 'used',
        permalink:
          'https://articulo.mercadolibre.com.ar/MLA-786117240-ipod-touch-5ta-generacion-32-gigas-_JM',
        thumbnail: 'http://mla-s1-p.mlstatic.com/743054-MLA28371111319_102018-I.jpg',
        accepts_mercadopago: true,
        installments: {},
        address: {},
        shipping: {},
        seller_address: {},
        attributes: [],
        original_price: null,
        category_id: 'MLA7262',
        official_store_id: null,
        catalog_product_id: null,
        tags: [],
      },
    ],
  },
  loading: false,
};

describe('Saga benefit with season', () => {
  it('Should be able to fetch detail event with season', async () => {
    const dispatched = [];

    apiMock.onGet('search?q=ipod').reply(200, response.data);
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      loadSearchProducts,
      { payload: { query: 'apple' } },
    ).toPromise();

    expect(dispatched).toContainEqual(loadSuccess(response.data));
  });
});
