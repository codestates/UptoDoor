import {
  SIGNUP,
  SIGNIN,
  ADD_MAIN_ADDRESS,
  ADD_SUB_ADDRESS,
  ADD_ORDER,
} from "../_actions/type";

export const initialUser = {
  id: -1,
  nickname: "",
  email: "",
  mainAddress: "",
  subAddress: "",
  mobile: "",
  order: []
};


export default function user_reducer(state = initialUser, action) {
  switch (action.type) {
    case SIGNUP:
      console.log("reducer : ", state);
      return { ...state, signUp: action.payload };

    case SIGNIN:
      console.log("aciotnsignin", action.payload);
      return { ...state, userInfo: action.payload };
    case ADD_MAIN_ADDRESS: {
      initialUser.mainAddress = action.payload.mainAddress;
      initialUser.mainAddressDetail = action.payload.mainAddressDetail;
      console.log({ ...state });
      return { ...state };
    }
    case ADD_SUB_ADDRESS: {
      initialUser.subAddress = action.payload.subAddress;
      initialUser.subAddressDetail = action.payload.subAddressDetail;
      console.log({...state})
      return { ...state };
    }
    case ADD_ORDER: {
      const selected_mobile = action.payload.selected_mobile;
      const order1 = action.payload.order;
      
      return { ...state, order: [...state.order, { ...order1, selected_mobile }]};
    }
      
    default:
      return state;
  }
}
