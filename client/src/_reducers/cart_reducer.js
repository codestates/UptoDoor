// import { initialCart } from "../components/dummyData";
import { 
  SET_QUANTITY, 
  REMOVE_FROM_CART, 
  REMOVE_FROM_All_CART, 
  ADD_CART, 
  ADD_ALL_CART_TO_ORDER,
  SET_ADDRESS } from '../_actions/type';


const initialState = {
  Menu: [
    {
      id: 42,
      name: "스페셜11 스팸에그 토스트",
      price: 5000,
      detail: "스팸 + 에그 + 글루텐프리 식빵+ 특제 소스",
      image: "../images/toast.png",
      quantity: 4,
    },
    {
      id: 41,
      name: "오징어 먹물 치아바타",
      price: 4000,
      detail: "스팸 + 에그 + 글루텐프리 식빵+ 특제 소스",
      image: "./images/salad.png",
      quantity: 1,
    },
    {
      id: 39,
      name: "아메리카노",
      price: 4000,
      detail: "venti",
      image: "../images/americano.png",
      quantity: 1,
    },
  ],
  MenuDummySample: [
    {
      id: 1,
      name: "버터치킨커리",
      price: 10000,
      detail: "대표메뉴, 안매움",
      image: "./images/curry.png",
    },
    {
      id: 2,
      name: "마르게리따 피자",
      price: 13000,
      detail: "3~4인용",
      image: "./images/pizza.png",
    },
    {
      id: 4,
      name: "로제 파스타",
      price: 12000,
      detail: "특제 로제소스로 만든 파스타",
      image: "./images/pasta.png",
    },
    {
      id: 41,
      name: "오징어 먹물 치아바타",
      price: 4000,
      detail: "스팸 + 에그 + 글루텐프리 식빵+ 특제 소스",
      image: "./images/salad.png",
    },
    {
      id: 42,
      name: "스페셜11 스팸에그 토스트",
      price: 5000,
      detail: "스팸 + 에그 + 글루텐프리 식빵+ 특제 소스",
      image: "../images/toast.png",
    },
  ],

  selected_address: "서울시 용산구 신흥로32길 4-33",
  selected_address_detail: "좋다좋다",
  delivery_detail: null,
  delivery_term: null,
  delivery_day: null,
  delivery_time: null,
  delivery_fee: 0,
  plus_check: false,
  plus_money: 4000,
  store_id: null,
};
export default function user_reducer(state = initialState, action) {
  // console.log("reducer-action---", action);
  switch (action.type) {
    case ADD_CART:
      return { ...state, Menu: [...state.Menu, action.payload] };

    case SET_QUANTITY: {
      const filtered = state.Menu.findIndex(
        (item) => item.id === action.payload.id
      );
      state.Menu[filtered].quantity = action.payload.quantity;
      return { ...state };
    }
    case REMOVE_FROM_CART: {
      const filtered = state.Menu.filter(
        (item) => item.id !== action.payload.id
      );
      state.Menu = filtered;
      return { ...state };
    }
    case REMOVE_FROM_All_CART:
      return {};

    case ADD_ALL_CART_TO_ORDER:
      return state;

    case SET_ADDRESS:
      return { ...state, selected_address: action.payload };
    default:
      return state;
  }
}
