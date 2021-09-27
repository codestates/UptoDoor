import {
  ADMIN_POST,
  ADMIN_POST_GET,
  ADMIN_POST_EDIT,
  DELETE_ADMIN_POST,
  GET_ADMIN_DATA,
  END_POINTS,
} from "./type";
import axios from "axios";
axios.defaults.withCredentials = true;

export const adminPost = (adminposts) => {
  console.log("ssss", adminposts)
  const result = axios.post(`${END_POINTS}/admin/store`,adminposts)
  .then((res)=>{
    console.log(res.data)
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

export const adminPostGet = (adminpostEditGet) => {
  axios.get(`${END_POINTS}/admin/store/59`,
  adminpostEditGet)
  .then((res)=>{
    //수정성공
    console.log(res.data)
  })
  .catch((err)=>{
    console.log('==수정 실패==',err)
  })
  return {
    type: ADMIN_POST_GET,
    payload: adminpostEditGet
  };
};

export const adminPostEdit = (adminpostEdit) => {
  // axios.patch(`${END_POINTS}/admin/store`,
  // adminpostEdit)
  // .then((res)=>{
  //   //수정성공
  //   console.log(res.data)
  // })
  // .catch((err)=>{
  //   console.log('==수정 실패==',err)
  // })
  return {
    type: ADMIN_POST_EDIT,
    payload: adminpostEdit
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

export const getAdminData = () => {
  const request = axios.get(`${END_POINTS}/admin/admininfo`).then((res) => {
    console.log("goasdas", res.data);
    return res.data;
  });

  return {
    type: GET_ADMIN_DATA,
    payload: request
  }
}