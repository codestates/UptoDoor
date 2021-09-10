import { SIGNIN , SIGNOUT , MYPAGE_USER ,DELETE_USER } from './type'

//유저 signin post 요청
export const signIn = (userinfo) => {
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