import {ADMIN_POST} from '../_actions/type'

const initialAdminPostInfo = {
    //login 된 사장의 아이디도 같이 넣어주기. 리덕스에 있는 유저 정보 넣던가.
    title:'title',
    category:'category',
    description:'description',
    mobile : 'mobile',
    adminAddress : 'adminAddress',
    Menu:[{
      menuImg : '', 
      menuName :'sook', 
      menuDescription:'good', 
      price:1000
    }],
    storeImage:'storeImgArr',
    storeFile : 'storeFile'
}

export default function admin_reducer(state = initialAdminPostInfo, action) {
  // console.log("reducer-action---", action);
  switch (action.type) {
    case ADMIN_POST:
      return {...state, adminPostInfo : action.payload};
    default:
      return state;
  }
}