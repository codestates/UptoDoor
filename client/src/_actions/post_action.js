import { 
  ADMIN_POST,
  DELETE_ADMIN_POST ,
  STORE_DATAS, 
  END_POINTS } from "./type";
import axios from "axios";
axios.defaults.withCredentials = true;

export const adminPost = (adminposts) => {
  axios.post(`${END_POINTS}/admin/store`,adminposts)
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

//delete store 삭제 
export const deleteAdminPost = (adminposts) => {
  // axios.delete(`${END_POINTS}/admin/admin`,
  // adminposts)
  // .then((res)=>{
  //   console.log(res.data)
  //   return alert('스토어삭제.')
  // })
  // .catch((err)=>{
  //   console.log('==상품업로드 실패==',err)
  // })

  return {
    type: DELETE_ADMIN_POST,
    payload: adminposts
  };
};