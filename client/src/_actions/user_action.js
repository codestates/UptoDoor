import {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  MYPAGE_USER,
  DELETE_USER,
  ADD_MAIN_ADDRESS,
  ADD_SUB_ADDRESS,
  ADD_ORDER,
} from "./type";

import axios from 'axios'
axios.defaults.withCredentials = true

//!유저 signup post 요청
export const signUp = (userinfo) => {
  console.log('액션까지옴')
  const result = 
  axios.post('https://uptodoors.shop/users/signup',
  userinfo)
  .then((res)=>{

    console.log(res.data);
  })
  .catch((err)=>{
    console.log('==userinfo 받아오기실패==',err)
  })
  return {
    type : SIGNUP,
    payload : result //result 대체예정,응답받은 유저인포 reducer 전달
  }
}

//유저 signin post 요청
export const signIn = (userinfo) => {
  const result = axios.post('http://localhost:3060/users/signin', userinfo).then((res) => {
    console.log("res.data",res.data)
  })
  console.log(result);
  return {
    type: SIGNIN,
    payload: {
      userinfo,
    },
  };
};

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

//main email 보내기
export const addMainAddress = (mainAddress, mainAddressDetail) => {
  const main = {
    mainAddress,
    mainAddressDetail,
  };
  console.log(main); 
  return {
    type: ADD_MAIN_ADDRESS,
    payload: {
      mainAddress,
      mainAddressDetail
    },
  };
};

export const addSubAddress = (subAddress, subAddressDetail) => {
  const sub = {
    subAddress,
    subAddressDetail,
  };
    console.log(sub)
  return {
    type: ADD_SUB_ADDRESS,
    payload: {
      subAddress,
      subAddressDetail
    },
  };
};

export const addOrder = (order, selected_mobile) => {
  // const request = axios.post(`https://uptodoor.cf/users/order`)
  // console.log(request)
  
  return {
    type: ADD_ORDER,
    payload: {
      order,
      selected_mobile,
    },
  };
}