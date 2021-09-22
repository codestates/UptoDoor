import { ADMIN_POST, STORE_DATAS } from "../_actions/type";

const initialAdminPostInfo = {
    //login 된 사장의 아이디도 같이 넣어주기. 리덕스에 있는 유저 정보 넣던가.
    title:'',
    category:'',
    description:'',
    mobile : '',
    adminaddress : '',
    adminaddressdetail : '',
    menu:[],
    storeimage:'',
    storefile : ''
}

export default function admin_reducer(state = initialAdminPostInfo, action) {
  switch (action.type) {
    case ADMIN_POST:
      return {...state, state : action.payload};
    default:
      return state;
  }
}