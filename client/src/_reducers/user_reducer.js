import { 
  SIGNUP,
  SIGNIN,
  ADD_MAIN_ADDRESS,
  ADD_SUB_ADDRESS
} from '../_actions/type'

export const initialUser = {
  id: 1,
  nickname: "용준이",
  email: "test1@gmail.com",
  mainAddress: "서울시 용산구 신흥로32길 4-33",
  subAddress: "서울시 용산구 신흥로32길 4-44",
  mobile: "010-7185-2791",
  Order: []
};

export default function user_reducer(state = initialUser, action) {
  
  switch (action.type) {
    case SIGNUP:
      console.log("reducer : ", state);
      return { ...state, signUp: action.payload };

    case SIGNIN:
      console.log("aciotnsignin", action.pay);
      return { ...state, user: initialUser };
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
    default:
      return state;
  }
}
