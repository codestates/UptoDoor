import {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  MYPAGE_USER,
  DELETE_USER,
  ADD_ADDRESS,
  ADD_ORDER,
  
} from "./type";

import axios from 'axios'
axios.defaults.withCredentials = true

//!유저 signup post 요청
export const signUp = (userinfo) => {
  const result = 
  axios.post('http://localhost:3060/users/signup',
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
  const result = axios.post('http://localhost:3060/users/signin', userinfo).then((res) => {
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
  
  const request = axios
    .post("http://localhost:3060/users/signout")
    .then((res) => {
      return res.data.message;
    });
    
  
  return {
    type: SIGNOUT,
    payload: request
  };
}
//마이페이지 patch 요청
export const mypageUser = (userinfo) => {
  return {
    type : MYPAGE_USER,
    payload : {
      userinfo
    }
  }
}
//회원탈퇴 delete 요청
export const deleteUser = (userinfo) => {
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

  const request = axios.post("http://localhost:3060/users/address", address);
  console.log(request);
  return {
    type: ADD_ADDRESS,
    payload: "좋아",
  };
};

export const addOrder = (order, selected_mobile) => {
  order.selected_mobile = selected_mobile;
  console.log("오더오더",order);
  const request = axios.post(`http://localhost:3060/users/order`, order).then((res) => {
    console.log("여기.",res.data);
  }).catch((err)=> console.log("ordererr",err))

  return {
    type: ADD_ORDER,
    payload: order
  };
}