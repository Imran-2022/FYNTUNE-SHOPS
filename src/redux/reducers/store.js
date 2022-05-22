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
    shop_area: 'Pune',
    shop_category: 'Butcher',
    open: '2022-05-26',
    close: '2022-05-10'
  },
  {
    shop_name: 'shop shop3',
    shop_id: '3',
    shop_area: 'Mumbai-Suburban',
    shop_category: 'Baker',
    open: '2022-06-03',
    close: '2022-06-01'
  },
  {
    shop_name: 'shop shop4',
    shop_id: '4',
    shop_area: 'Nashik',
    shop_category: 'Chemist',
    open: '2022-05-26',
    close: '2022-05-10'
  },
  {
    shop_name: 'shop shop5',
    shop_id: '5',
    shop_area: 'Nagpur',
    shop_category: 'Stationery-shop',
    open: '2022-06-03',
    close: '2022-06-01'
  },
  {
    shop_name: 'shop shop6',
    shop_id: '6',
    shop_area: 'Ahmednagar',
    shop_category: 'Grocery',
    open: '2022-05-26',
    close: '2022-05-10'
  },
  {
    shop_name: 'shop shop7',
    shop_id: '7',
    shop_area: 'Solapur',
    shop_category: 'Butcher',
    open: '2022-06-03',
    close: '2022-06-01'
  },
  {
    shop_name: 'shop shop5',
    shop_id: '8',
    shop_area: 'Nagpur',
    shop_category: 'Stationery-shop',
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
    case 'shopsD':
      return state.filter(dt => dt.shop_id !== action.payload);
    case 'shopsU':
      console.log(action.payload)
      const index = state.findIndex(dt => dt.shop_id === action.payload); //finding index of the item
      console.log("first",index);
      const newArray = [...state]; //making a new array
      newArray[index].shop_name=action.shop_name;//changing value in the new array
      newArray[index].shop_id=action.shop_id;
      newArray[index].shop_area=action.shop_area;
      newArray[index].shop_category=action.shop_category;
      newArray[index].open=action.open;
      newArray[index].close=action.close;
      return [...state]
    default:
      return state;
  }

}

export default store;