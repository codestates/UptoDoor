// import { initialCart } from "../components/dummyData";
import {
  SET_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_All_CART,
  ADD_CART,
  ADD_ALL_CART_TO_ORDER,
  SET_ADDRESS,
  SELECT_STORE,
} from "../_actions/type";


const initialState = {
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
export default function cart_reducer(state = initialState, action) {
  // console.log("띠용", action.payload);
  // console.log("reducer-action---", action);
  switch (action.type) {
    //* 주소선택하고 스토어들어가면 아이디 가져오기
    case SET_ADDRESS:
      return { ...state, ...action.payload };
    case SELECT_STORE:
      return state;
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
    //* 스토어 빠져나가면 전부 지우기
    case REMOVE_FROM_All_CART:
      return (state = {});
    //* 카트에서 오더로 옮기기
    case ADD_ALL_CART_TO_ORDER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
