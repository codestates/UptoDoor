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

export default function user_reducer(state = {}, action) {
  switch (action.type) {
    case USER_SEND_CERT_EMAIL:
      return { ...state };
    case USER_SIGNUP:
      return { ...state, signUp: action.payload };
    case USER_SIGNIN:
      return { ...state, ...action.payload };
    case USER_SIGNOUT:
      return (state = {});
    case USER_KAKAO_SIGNIN:
      return { ...state, ...action.payload };
    case USER_KAKAO_SIGNOUT:
      return (state = {});
    case USER_NAVER_SIGNIN:
      return { ...state, ...action.payload };
    case USER_NAVER_SIGNOUT:
      return (state = {});
    case USER_EDIT:
      return { ...state, ...action.payload };
    case USER_DELETE:
      return (state = {});
    case USER_ADD_ADDRESS: {
      return { ...state, ...action.payload.data };
    }
    case USER_ADD_ORDER: {
      if (!state.order) {
        return { ...state, order: [action.payload] };
      } else {
        return { ...state, order: [...state.order, action.payload] };
      }
    }
    case USER_CALCEL_ORDER: {
      return { ...state };
    }

    default:
      return state;
  }
}
