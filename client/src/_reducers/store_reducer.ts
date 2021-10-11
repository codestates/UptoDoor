import {
  STORE_DATAS,
  STORE_FILTER_BY_HASHTAG,
  STORE_FILTER_BY_SEARCH,
  STORE_FILTER_BY_CLICK,
  STORE_FILTER_BY_CITY,
} from "../_actions/type";
import { StoreInfo } from "../@type/storeInfo";

const initialState: StoreInfo[] = [];

export interface Action {
  type: string;
  payload: Payload;
}

interface Payload {
  message?: string;
  data?: StoreInfo[];
}

export default function admin_reducer(state = initialState, action: Action) {
  switch (action.type) {
    case STORE_DATAS:
      return action.payload;
    case STORE_FILTER_BY_HASHTAG:
      return action.payload;
    case STORE_FILTER_BY_SEARCH:
      return action.payload;
    case STORE_FILTER_BY_CLICK:
      return action.payload;
    case STORE_FILTER_BY_CITY:
      return action.payload;
    default:
      return state;
  }
}
