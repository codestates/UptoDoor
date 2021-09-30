import {
  ADMIN_POST,
  ADMIN_POST_EDIT,
  DELETE_ADMIN_POST,
  GET_ADMIN_DATA,
  END_POINTS,
  RESET_ADMIN,
} from "./type";
import axios from "axios";
axios.defaults.withCredentials = true;

export const adminPost = (adminposts) => {
  console.log("adminPost action 들어오는 값", adminposts)
  const result = axios.post(`${END_POINTS}/admin/store`,adminposts)
  .then((res)=>{
    console.log("adminPost 요청 후 응답값",res.data)
    return res.data
  })
  .catch((err)=>{
    console.log('==상품업로드 실패==',err)
  })

  return {
    type: ADMIN_POST,
    payload: result
  };
};

export const adminPostEdit = (sendInfo, id) => {
  const request = axios.patch(`http://localhost:3060/admin/store/${id}`, { sendInfo }).then((res) => {
    return res.data
  })
  .catch((err)=>{
    console.log('==수정 실패==',err)
  })
  return {
    type: ADMIN_POST_EDIT,
    payload: request
  };
};

//delete store 삭제 
export const deleteAdminPost = (id) => {
  const request = axios.delete(`${END_POINTS}/admin/store/${id}`)
  .then((res)=>{
    return res.data;
  })
  .catch((err)=>{
    console.log("deleteAdminPost action", err);
  })

  return {
    type: DELETE_ADMIN_POST,
    payload: request,
  };
};

export const getAdminData = () => {
  const request = axios.get(`${END_POINTS}/admin/admininfo`).then((res) => {
    console.log("getAdminData action", res.data);
    return res.data;
  }).catch((err) => {
    console.log("getAdminData action", err);
  })

  return {
    type: GET_ADMIN_DATA,
    payload: request
  }
}

export const resetAdmin = () => {
  
  return {
    type: RESET_ADMIN
  }
}