import {
  ADMIN_POST,
  ADMIN_POST_EDIT,
  DELETE_ADMIN_POST,
  GET_ADMIN_DATA,
  RESET_ADMIN,
} from "../_actions/type";

const initialAdminPostInfo = {
    //login 된 사장의 아이디도 같이 넣어주기. 리덕스에 있는 유저 정보 넣던가.
    // title:'',
    // category:'',
    // description:'',
    // mobile : '',
    // adminAddress : '',
    // adminAddressdetail : '',
    // menu:[],
    // storeImage:'',
    // storeFile : ''
}

export default function admin_reducer(state = initialAdminPostInfo, action) {
  switch (action.type) {
    case ADMIN_POST:
      return { ...state, ...action.payload };
    case ADMIN_POST_EDIT:
      return { ...action.payload };
    case DELETE_ADMIN_POST:
      return (state = {});
    case GET_ADMIN_DATA:
      return { ...action.payload.orderdata };
    case RESET_ADMIN:
      return (state={});
    default:
      return state;
  }
}