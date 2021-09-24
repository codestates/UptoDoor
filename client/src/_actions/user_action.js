import {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  EDIT_USER,
  DELETE_USER,
  ADD_ADDRESS,
  ADD_ORDER,
  END_POINTS,
  EDIT_USER,
  KAKAO_SIGNOUT,
  NAVER_SIGNOUT,

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
export const editUser = (userinfoEdit) => {
  const request = axios.patch(`${END_POINTS}/users/userinfo`,
  userinfoEdit)
  .then((res)=>{
  const{name ,mobile,age,gender} =res.data.userinfo
    return {
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
    type : EDIT_USER,
    payload : result
    
  }
}
//회원탈퇴 delete 요청 -> state 전부 초기화하기
export const deleteUser = (userinfo) => {
  const request = axios.delete(`${END_POINTS}/users/signout`,
  userinfo)
  .then((res)=>{
    console.log(res.data);
    return res.data.message;
  })
  .catch((err)=>{
    console.log('==userinfo 받아오기실패==',err)
  })
  return {
    type: DELETE_USER,
    payload: request,
  };
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

export const addOrder = (order, selected_mobile, deliveryName) => {
  order.selected_mobile = selected_mobile;
  order.user_name = deliveryName;
  console.log("오더오더", order);
  const request = axios
    .post(`http://localhost:3060/users/order`, order)
    .then((res) => {
      console.log("여기.", res.data);
      return res.data;
    })
    .catch((err) => console.log("ordererr", err));

  return {
    type: ADD_ORDER,
    payload: request,
  };
};


//kakao logout
//userkakao, naver
// axios.post(`${E}/oauth/kakao/signout`);
export const kakaoSignOut = () => {
  const request = axios.post(`${END_POINTS}/oauth/kakao/signout`)
    .then((res) => {
    return res.data.message;
  });

  return {
    type: KAKAO_SIGNOUT,
    payload: request,
  };
};

export const naverSignOut = () => {
  const request = axios
    .post(`${END_POINTS}/oauth/naver/signout`)
    .then((res) => {
      return res.data.message;
    });

  return {
    type: NAVER_SIGNOUT,
    payload: request,
  };
};