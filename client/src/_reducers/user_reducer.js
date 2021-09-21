import {
  SIGNUP,
  SIGNIN,
  ADD_ADDRESS,
  ADD_ORDER,
  SIGNOUT,
} from "../_actions/type";



export default function user_reducer(state = {}, action) {
  // console.log("reducer : ", action.payload);
  switch (action.type) {
    case SIGNUP:
      return { ...state, signUp: action.payload };
    case SIGNIN:
      console.log("aciotnsignin", action.payload);
      return { ...state, ...action.payload };

    case SIGNOUT:
      return (state = {});

    case ADD_ADDRESS: {
      console.log({ ...state });
      return { ...state };
    }
    case ADD_ORDER: {
      console.log("addorder", action.payload);
      if (!state.order) {
        return { ...state, order: [ action.payload ] };
      } else {
        return {...state,order: [...state.order, action.payload]}
      }
    }

    default:
      return state;
  }
}
