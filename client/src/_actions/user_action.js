import {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  EDIT_USER,
  DELETE_USER,
  ADD_ADDRESS,
  ADD_ORDER,
  END_POINTS,
  KAKAO_SIGNOUT,
  NAVER_SIGNOUT,
  NAVER_SIGNIN,
  KAKAO_SIGNIN,
  CALCEL_ORDER,
  SEND_CERT_EMAIL,
} from "./type";

import axios from 'axios'
axios.defaults.withCredentials = true
//
export const sendCertEmail = (email) => {
  const request = axios
    .post(
      `${END_POINTS}/auth/email`,
      { email: email },
      { withCredentials: true, credentials: "include" }
    )
    .then((res) => {
      return res.data;
    });

  return {
    type: SEND_CERT_EMAIL,
    payload: request,
  };
};
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
  axios.post(`${END_POINTS}/users/signin`, userinfo)
      .then((res) => {
    return {
      message: res.data.message,
      id: res.data.userinfo.id,
      email: res.data.userinfo.email,
      nickname: res.data.userinfo.nickname,
      mainAddress: res.data.userinfo.mainAddress,
      mainAddressDetail: res.data.userinfo.mainAddressDetail,
      subAddress: res.data.userinfo.subAddress,
      subAddressDetail: res.data.userinfo.subAddressDetail,
      mobile: res.data.userinfo.mobile,
      age: res.data.userinfo.age,
      gender: res.data.userinfo.gender,
      position: res.data.userinfo.position,
      billingkey: res.data.userinfo.billingkey,
      login_type: res.data.login_type,
    };
      }).catch(() => {
    return {
      message: "error"
    }
  })

  return {
    type: SIGNIN,
    payload: result,
  };
};
//유저 signout post 요청
export const signOut = () => {
  console.log("액션까지")
  const request = axios
    .post(`${END_POINTS}/users/signout`)
    .then((res) => {
      console.log("안에", res.data);
      return res.data.message;
    }).catch((err) => {
      console.log(err);
    })
    
  
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
  const{nickname ,mobile,age,gender} =res.data.userinfo
    return {
      nickname,
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
    payload : request
    
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
export const addAddress = (address) => {
  const request = 
    axios.post(`${END_POINTS}/users/address`, address).then((res) => {
      return res.data;
    })
  
  return {
    type: ADD_ADDRESS,
    payload: request,
  };
};

//order관련 구독하기, 취소하기
export const addOrder = (order, selected_mobile, deliveryName) => {
  order.selected_mobile = selected_mobile;
  order.user_name = deliveryName;
  console.log("오더오더", order);
  const request = axios
    .post(`${END_POINTS}/users/order`, order)
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

export const cancelOrder = (id) => {
  const request = axios.patch(`${END_POINTS}/users/order:${id}`)
    .then((res) => {
      console.log(res)
      return res.data
    }).catch((err) => {
      console.log(err)
    });
  //id랑 메시지 같이 받아오기
  return {
    type: CALCEL_ORDER,
    payload: request
  };
}

//kakao logout
//userkakao, naver
// axios.post(`${E}/oauth/kakao/signout`);
export const kakaoSignIn = (authorizationCode) => {
  const request = axios
    .post(`${END_POINTS}/oauth/kakao/login`, {
      authorizationCode: authorizationCode,
    })
    .then((res) => {
      return {
        message: res.data.message,
        id: res.data.userinfo.id,
        email: res.data.userinfo.email,
        nickname: res.data.userinfo.nickname,
        mainAddress: res.data.userinfo.mainAddress,
        mainAddressDetail: res.data.userinfo.mainAddressDetail,
        subAddress: res.data.userinfo.subAddress,
        subAddressDetail: res.data.userinfo.subAddressDetail,
        mobile: res.data.userinfo.mobile,
        age: res.data.userinfo.age,
        gender: res.data.userinfo.gender,
        position: res.data.userinfo.position,
        billingkey: res.data.userinfo.billingkey,
        login_type: res.data.login_type,
      };
    });

  return {
    type: KAKAO_SIGNIN,
    payload: request,
  };
};

export const naverSignIn = (authorizationCode, state) => {
  const request = axios
    .post(`${END_POINTS}/oatuh/naver/login`, {
      authorizationCode: authorizationCode,
      state: state,
    })
    .then((res) => {
      return {
        message: res.data.message,
        id: res.data.userinfo.id,
        email: res.data.userinfo.email,
        nickname: res.data.userinfo.nickname,
        mainAddress: res.data.userinfo.mainAddress,
        mainAddressDetail: res.data.userinfo.mainAddressDetail,
        subAddress: res.data.userinfo.subAddress,
        subAddressDetail: res.data.userinfo.subAddressDetail,
        mobile: res.data.userinfo.mobile,
        age: res.data.userinfo.age,
        gender: res.data.userinfo.gender,
        position: res.data.userinfo.position,
        billingkey: res.data.userinfo.billingkey,
        login_type: res.data.login_type,
      };
    });

  return {
    type: NAVER_SIGNIN,
    payload: request,
  };
};


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