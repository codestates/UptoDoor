import {
  ADMIN_STORE_POST,
  ADMIN_STORE_EDIT,
  ADMIN_STORE_DELETE,
  ADMIN_STORE_GET_DATA,
  ADMIN_STORE_RESET,
} from "../_actions/type";


export default function admin_reducer(state = {}, action) {
  switch (action.type) {
    case ADMIN_STORE_POST:
      return { ...state, ...action.payload };
    case ADMIN_STORE_EDIT:
      return { ...action.payload };
    case ADMIN_STORE_DELETE:
      return (state = {});
    case ADMIN_STORE_GET_DATA:
      return { ...action.payload.orderdata };
    case ADMIN_STORE_RESET:
      return (state = {});
    default:
      return state;
  }
}