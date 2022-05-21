const initialState = [
    {
        shop_name: 'shop shop1',
        shop_id: '1',
        shop_area: 'Thane',
        shop_category: 'Grocery',
        open: '2022-06-03',
        close: '2022-06-01'
      },
      {
        shop_name: 'shop shop2',
        shop_id: '2',
        shop_area: 'Thane',
        shop_category: 'Grocery',
        open: '2022-05-26',
        close: '2022-05-10'
      },
    {
        shop_name: 'shop shop3',
        shop_id: '3',
        shop_area: 'Thane',
        shop_category: 'Grocery',
        open: '2022-06-03',
        close: '2022-06-01'
      },
      {
        shop_name: 'shop shop4',
        shop_id: '4',
        shop_area: 'Thane',
        shop_category: 'Grocery',
        open: '2022-05-26',
        close: '2022-05-10'
      },
    {
        shop_name: 'shop shop5',
        shop_id: '5',
        shop_area: 'Thane',
        shop_category: 'Grocery',
        open: '2022-06-03',
        close: '2022-06-01'
      },
      {
        shop_name: 'shop shop6',
        shop_id: '6',
        shop_area: 'Thane',
        shop_category: 'Grocery',
        open: '2022-05-26',
        close: '2022-05-10'
      },
    {
        shop_name: 'shop shop7',
        shop_id: '7',
        shop_area: 'Thane',
        shop_category: 'Grocery',
        open: '2022-06-03',
        close: '2022-06-01'
      },

]
const store = (state = initialState, action) => {
    switch (action.type) {
        case 'shops':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }

}

export default store;