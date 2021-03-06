// import { initialCart } from "../components/dummyData";
import { CartInfo } from "../@type/cart";
import {
  SET_QUANTITY,
  REMOVE_FROM_CART,
  ADD_CART,
  ADD_ALL_CART_TO_ORDER,
  SET_ADDRESS,
  SELECT_STORE,
  REMOVE_ALL_CART,
} from "../_actions/type";



const initialState:CartInfo = {
  menu: [],
  selected_address: "",
  selected_address_detail: "",
  delivery_detail: null,
  delivery_term: null,
  delivery_day: null,
  delivery_time: null,
  delivery_fee: 0,
  plus_check: false,
  plus_money: 0,
  store_id: null,
};
export default function cart_reducer(state = initialState, action:any) {
  switch (action.type) {
    //* 주소선택하고 스토어들어가면 아이디 가져오기
    case SET_ADDRESS:
      return { ...state, ...action.payload };
    case SELECT_STORE:
      return { ...state, store_id: action.payload };
    //* 메뉴선택, 수량체크, 메뉴 하나제거
    case ADD_CART:
      return { ...state, menu: [...state.menu, action.payload] };
    case SET_QUANTITY: {
      const filtered = state.menu.findIndex(
        (item) => item.id === action.payload.id
      );
      state.menu[filtered].quantity = action.payload.quantity;
      return { ...state };
    }
    case REMOVE_FROM_CART: {
      const filtered = state.menu.filter(
        (item) => item.id !== action.payload.id
      );
      state.menu = filtered;
      return { ...state };
    }
    //* 카트에서 오더로 옮기기
    case ADD_ALL_CART_TO_ORDER:
      return { ...state, ...action.payload };
    case REMOVE_ALL_CART:
      return (state = initialState);
    default:
      return state;
  }
}
