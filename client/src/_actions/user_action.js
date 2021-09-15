import { 
  SIGNUP ,
  SIGNIN , 
  SIGNOUT , 
  MYPAGE_USER ,
  DELETE_USER } from './type'

 import axios from 'axios'
 axios.defaults.withCredentials = true

//!유저 signup post 요청
export const signUp = (userinfo) => {
  // const result = 
  // axios.post('https://uptodoor.cf\/users/signup',
  // userinfo)
  // .then((res)=>res.data처럼, 콘솔찍어확인하고 작성, 성공시 result payload 에 담기)
  // .catch((err)=>console.log('==userinfo 받아오기실패==',err))
  return {
    type : SIGNUP,
    payload : {userinfo} //응답받은 유저인포 reducer 전달
  }
}

//유저 signin post 요청
export const signIn = (userinfo) => {
  const result = axios.post('http://localhost:3060/users/signin', userinfo);
  console.log(result);
  return {
    type : SIGNIN,
    payload : {
      userinfo
    }
  }
}

//유저 signout post 요청
export const signOut = (userinfo) => {
  return {
    type : SIGNOUT,
    payload : {
      userinfo
    }
  }
}
//마이페이지 patch 요청
export const mypageUser = (userinfo) => {
  return {
    type : MYPAGE_USER,
    payload : {
      userinfo
    }axios
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