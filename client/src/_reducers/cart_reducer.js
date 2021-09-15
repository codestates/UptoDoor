// import { initialStore } from "../components/dummyData";
import { 
  SET_QUANTITY, 
  REMOVE_FROM_CART, 
  REMOVE_FROM_All_CART, 
  ADD_CART, 
  ADD_ALL_CART_TO_ORDER,
  SET_ADDRESS } from '../_actions/type';

const initialState = {
  Menu : [],
  user_address : null
}
export default function user_reducer(state = initialState, action) {
  // console.log("reducer-action---", action);
  switch (action.type) {
    case ADD_CART:
      return {...state,Menu : [...state.Menu,action.payload]};

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

    case SET_ADDRESS:
    return {...state,user_address : action.payload};
    
    default:
      return state;
  }
}
