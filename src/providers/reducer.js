/**
 * Handle when user click 'rent now' button on the item
 * Push/Remove the item into on-renting page with Context API
 * 
 * declare all the application level states
 */

export const initialState = {
  allItems:[],
  rentingBasket: [],
};

// selector helper
export const getTotalRenting = rentingBasket => {
  rentingBasket?.reduce(
    (amount, item) => item.cost + amount, 0);
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'ADD_TO_RENTING':
      return{
        ...state,
        rentingBasket: [...state.rentingBasket, action.item]
      };
    case 'REMOVE_FROM_RENTING':
      const index = state.rentingBasket.findIndex(
        (thisItem) => thisItem.id === action.id
      );
      let tempBasket = [...state.rentingBasket];
      // console.log('tempBasket for cancel renting from reducer.js', tempBasket);
      if (index >= 0) {
        tempBasket.splice(index, 1);
      }
      return {
        ...state, 
        rentingBasket: tempBasket
      };
    default:
      return state;
  }
};
export default reducer;

