import {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  DELETE_USER,
  ADD_ADDRESS,
  ADD_ORDER,
  END_POINTS,
} from "./type";

import axios from 'axios'
axios.defaults.withCredentials = true

//!유저 signup post 요청
export const signUp = (userinfo) => {
  const result = 
  axios.post(`${END_POINTS}/users/signup`,
  userinfo)
  .then((res)=>{
    console.log(res.data);
    return res.data;
  })
  .catch((err)=>{
    console.log('==userinfo 받아오기실패==',err)
  })
  return {
    type : SIGNUP,
    payload : result 
  }
}

//유저 signin post 요청
export const signIn = (userinfo) => {
  const result = 
  axios.post('http://localhost:3060/users/signin', userinfo)
  .then((res) => {
    console.log("signin", res.data);
    const{id,email,name ,mainAddress,mainAddressDetail,subAddress,subAddressDetail,mobile,age,gender,position,billingkey} =res.data.userinfo
    return {
      message: res.data.message,
      id,
      email,
      name,
      mainAddress,
      mainAddressDetail,
      subAddress,
      subAddressDetail,
      mobile,
      age,
      gender,
      position,
      billingkey,
    };
  });

  console.log("result", result);
  return {
    type: SIGNIN,
    payload: result,
  };
};
//유저 signout post 요청
export const signOut = () => {
  axios.post("http://localhost:3060/users/signout").
  then((res) => {
    console.log(res.data)
  })
  
  return {
    type: SIGNOUT,
    payload: "signout success"
  };
}
//마이페이지 patch 요청
export const editUser = (userinfoEdit) => {
  //patch 수정하고 로그인부분이 바뀌는거니까 SIGNIN
  console.log('==받아와라!!===',userinfoEdit)
  axios.patch(`${END_POINTS}/users/userinfo`,
  userinfoEdit)
  .then((res)=>{
  const{name ,mobile,age,gender} =res.data.userinfoEdit
  return {
      message: res.data.message,
      name,
      mobile,
      age,
      gender
    };
  })
  .catch((err)=>{
    console.log('==userinfo 받아오기실패==',err)
  })
  return {
    type : SIGNIN,
    payload : userinfoEdit
    
  }
}
//회원탈퇴 delete 요청 -> state 전부 초기화하기
export const deleteUser = (userinfo) => {
  axios.delete(`${END_POINTS}/users/signout`,
  userinfo)
  .then((res)=>{
    console.log(res.data);
    return res.data;
  })
  .catch((err)=>{
    console.log('==userinfo 받아오기실패==',err)
  })
  return {
    type : DELETE_USER,
    payload : {
      userinfo
    }
  }
}

//main email 보내기
export const addAddress = (address, name) => {
  console.log("액션에서", address);

  const request = 
  axios.post("http://localhost:3060/users/address", address);
  console.log(request);
  return {
    type: ADD_ADDRESS,
    payload: "좋아",
  };
};

export const addOrder = (order, selected_mobile) => {
  order.selected_mobile = selected_mobile;
  console.log("오더오더",order);
  const request = 
  axios.post(`http://localhost:3060/users/order`, order)
  .then((res) => {
    console.log("여기.",res.data);
  }).catch((err)=> console.log("ordererr",err))

  return {
    type: ADD_ORDER,
    payload: order
  };
}