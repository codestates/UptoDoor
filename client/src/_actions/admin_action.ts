import {
  ADMIN_STORE_POST,
  ADMIN_STORE_EDIT,
  ADMIN_STORE_DELETE,
  ADMIN_STORE_GET_DATA,
  ADMIN_STORE_RESET,
  END_POINTS,
} from "./type";
import axios from "axios";
axios.defaults.withCredentials = true;



export const adminStorePost = async (adminposts:object) => {
  const request = await axios
    .post(`${END_POINTS}/admin/store`, adminposts)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("==상품업로드 실패==", err);
    });

  return {
    type: ADMIN_STORE_POST,
    payload: request,
  };
};

export const adminStoreEdit = (sendInfo:object, id:number) => {
  const request = axios
    .patch(`http://localhost:3060/admin/store/${id}`, { sendInfo })
    .then((res) => {
      console.log("AdminStoreGetData",res.data)
    return res.data
  })
  .catch((err)=>{
    console.log('==수정 실패==',err)
  })

  return {
    type: ADMIN_STORE_EDIT,
    payload: request
  };
};

//delete store 삭제 
export const adminStoreDelete = (id:number) => {
  const request = axios
    .delete(`${END_POINTS}/admin/store/${id}`)
    .then((res)=>{
    return res.data;
  })
  .catch((err)=>{
    console.log("deleteAdminPost action", err);
  })

  return {
    type: ADMIN_STORE_DELETE,
    payload: request,
  };
};

export const AdminStoreGetData = () => {
  const request = axios
    .get(`${END_POINTS}/admin/admininfo`)
    .then((res) => {
      console.log("AdminStoreGetData",res.data.orderdata)
    return res.data;
  }).catch((err) => {
    console.log("getAdminData action", err);
  })

  return {
    type: ADMIN_STORE_GET_DATA,
    payload: request
  }
}

export const AdminStoreReset = () => {
  
  return {
    type: ADMIN_STORE_RESET
  }
}