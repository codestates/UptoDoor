import {
  ADMIN_STORE_POST,
  ADMIN_STORE_EDIT,
  ADMIN_STORE_DELETE,
  ADMIN_STORE_GET_DATA,
  ADMIN_STORE_RESET,
} from "../_actions/type";
import { AdminInfo } from "../@type/adminInfo";

const initialState: AdminInfo = {
  id: 0,
  name: "",
  image: "",
  number: "",
  address: "",
  address_detail: "",
  category: "",
  introduce: "",
  open_time: "",
  close_time: "",
  profileImage: null,
  createdAt: "",
  store_menus: [],
  orders: [],
};

export interface Action {
  type: string;
  payload: Payload;
}

interface Payload {
  message?: string;
  orderdata?: AdminInfo | null;
}

export default function admin_reducer(
  state = initialState,
  action: Action
): AdminInfo {
  switch (action.type) {
    case ADMIN_STORE_POST:
      return { ...state, ...action.payload };
    case ADMIN_STORE_EDIT:
      return { ...state, ...action.payload };
    case ADMIN_STORE_DELETE:
      return (state = initialState);
    case ADMIN_STORE_GET_DATA:
      return { ...state, ...action.payload.orderdata };
    case ADMIN_STORE_RESET:
      return (state = initialState);
    default:
      return state;
  }
}
