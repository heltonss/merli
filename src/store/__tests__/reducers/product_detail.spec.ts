import searchReducer, { Creators } from '../../ducks/product_detail';

describe('Reducer benefit with season', () => {
  it('Should get benefit with season', () => {
    const initialState = {
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
        id: 'MLA123',
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
      loading: true,
    };

    const update = {
      data: {
        ...initialState.data,
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
