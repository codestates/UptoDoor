import { initialCart } from "../components/dummyData";
import { SET_QUANTITY, REMOVE_FROM_CART, REMOVE_FROM_All_CART, ADD_CART, ADD_ALL_CART_TO_ORDER } from '../_actions/type';


export default function user_reducer(state = initialCart, action) {
  console.log("reducer-action---", action);
  switch (action.type) {
    case ADD_CART:
      return state;
    case SET_QUANTITY: {
      const filtered = state.Menu.findIndex(
        (item) => item.id === action.payload.id
      );
      state.Menu[filtered].quantity = action.payload.quantity;
      return { ...state };
    }
    case REMOVE_FROM_CART: {
      const filtered = state.Menu.filter((item) => item.id !== action.payload.id);
      state.Menu = filtered;
      return { ...state }
    }

    case REMOVE_FROM_All_CART:
      return {};
    
    case ADD_ALL_CART_TO_ORDER:
      return state;
    default:
      return state;
  }
}
