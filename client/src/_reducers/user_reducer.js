import {
  SIGNUP,
  SIGNIN,
  ADD_ADDRESS,
  ADD_ORDER,
  SIGNOUT,
  EDIT_USER,
  DELETE_USER,
  NAVER_SIGNOUT,
  KAKAO_SIGNOUT,
  KAKAO_SIGNIN,
  NAVER_SIGNIN,
  CALCEL_ORDER,
  SEND_CERT_EMAIL,
} from "../_actions/type";

export default function user_reducer(state = {}, action) {
  switch (action.type) {
    case SEND_CERT_EMAIL:
      return {...state }
    case SIGNUP:
      return { ...state, signUp: action.payload };

    case SIGNIN:
      console.log("aciotnsignin", action.payload);
      return { ...state, ...action.payload };

    case SIGNOUT:
      return (state = {});

    case ADD_ADDRESS: {
      return { ...state, ...action.payload.data };
    }
    case ADD_ORDER: {
      console.log("addorder", action.payload);
      if (!state.order) {
        return { ...state, order: [action.payload] };
      } else {
        return { ...state, order: [...state.order, action.payload] };
      }
    }
    case CALCEL_ORDER: {
      return {...state }
    }
      
    case EDIT_USER:
      console.log("===EDIT_USER===", action.payload);
      return { ...state, ...action.payload };

    case DELETE_USER:
      return (state = {});
    case KAKAO_SIGNIN:
      return { ...state, ...action.payload };
    case KAKAO_SIGNOUT:
      return (state = {});
    case NAVER_SIGNIN:
      return { ...state, ...action.payload };
    case NAVER_SIGNOUT:
      return (state = {});

    default:
      return state;
  }
}
