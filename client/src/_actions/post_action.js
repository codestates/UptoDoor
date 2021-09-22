import { ADMIN_POST, STORE_DATAS, END_POINTS } from "./type";
import axios from "axios";
axios.defaults.withCredentials = true;



export const adminPost = (adminposts) => {
  axios.post('http://localhost:3060/admin/store',adminposts)
  .then((res)=>{
    console.log(res.data)
    return alert('상품업로드 성공.')
  })
  .catch((err)=>{
    console.log('==상품업로드 실패==',err)
  })

  return {
    type: ADMIN_POST,
    payload: adminposts
  };
};