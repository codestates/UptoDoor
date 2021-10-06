import {
  USER_SEND_CERT_EMAIL,
  USER_SIGNUP,
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_KAKAO_SIGNIN,
  USER_KAKAO_SIGNOUT,
  USER_NAVER_SIGNIN,
  USER_NAVER_SIGNOUT,
  USER_EDIT,
  USER_DELETE,
  USER_ADD_ADDRESS,
  USER_ADD_ORDER,
  USER_CALCEL_ORDER,
} from "../_actions/type";
import { User } from "../@type/userInfo";

export interface Action {
  type: string;
  payload: Payload;
}

interface Payload {
	message?: string;
  data?: User | null;
  order?: Object[] | null;
}

const intitialState: User = {
  id: 0,
  nickname: "",
  email: "",
  age: "",
  mainAddress: "",
  mainAddressDetail: "",
  gender: "",
  mobile: "",
  position: "",
  subAddress: "",
  subAddressDetail: "",
  message: "",
  login_type: null,
  successMessage: ""
};

export default function user_reducer(state = intitialState, action: any) {
  console.log("리듀서 들어올때", action.payload)
  switch (action.type) {
    case USER_SEND_CERT_EMAIL:
      return { ...state };
    case USER_SIGNUP:
      return { ...state, signUp: action.payload };
    case USER_SIGNIN:
      return { ...state, ...action.payload };
    case USER_SIGNOUT:
      return (state = intitialState);
    case USER_KAKAO_SIGNIN:
      return { ...state, ...action.payload };
    case USER_KAKAO_SIGNOUT:
      return (state = intitialState);
    case USER_NAVER_SIGNIN:
      return { ...state, ...action.payload };
    case USER_NAVER_SIGNOUT:
      return (state = intitialState);
    case USER_EDIT:
      return { ...state, ...action.payload };
    case USER_DELETE:
      return (state = intitialState);
    case USER_ADD_ADDRESS: {
      return { ...state, ...action.payload.data };
    }
    case USER_ADD_ORDER: 
        return { ...state, successMessage: action.payload.message };
    case USER_CALCEL_ORDER: {
      console.log("reducer", action.payload);
      return { ...state, successMessage: action.payload.message };
    }
    default:
      return state;
  }
}
