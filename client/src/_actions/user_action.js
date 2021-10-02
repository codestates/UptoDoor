import {
  USER_SEND_CERT_EMAIL,
  USER_SIGNUP,
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_KAKAO_SIGNIN,
  USER_KAKAO_SIGNOUT,
  USER_NAVER_SIGNIN,
  USER_NAVER_SIGNOUT,
  USER_EDIT,
  USER_DELETE,
  USER_ADD_ADDRESS,
  USER_ADD_ORDER,
  USER_CALCEL_ORDER,
  END_POINTS,
} from "./type";

import axios from 'axios'
axios.defaults.withCredentials = true

//이메일 인증
export const sendCertEmail = (email) => {
  const request = axios
    .post(`${END_POINTS}/auth/email`,
      { email: email }, { credentials: "include" })
    .then((res) => {
      return res.data;
    });

  return {
    type: USER_SEND_CERT_EMAIL,
    payload: request,
  };
};
//유저 signup post 요청
export const signUp = (userinfo) => {
  const request = axios
    .post(`${END_POINTS}/users/signup`, userinfo)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("==userinfo 받아오기실패==", err);
    });

  return {
    type: USER_SIGNUP,
    payload: request,
  };
}

//유저 signin post 요청
export const signIn = (userinfo) => {
  const request = axios
    .post(`${END_POINTS}/users/signin`, userinfo)
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
    })
    .catch(() => {
      return {
        message: "error",
      };
    });

  return {
    type: USER_SIGNIN,
    payload: request,
  };
};
//유저 signout post 요청
export const signOut = () => {
  const request = axios
    .post(`${END_POINTS}/users/signout`)
    .then((res) => {
      return res.data.message;
    }).catch((err) => {
      console.log(err);
    })
    
  return {
    type: USER_SIGNOUT,
    payload: request,
  };
}

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
    type: USER_KAKAO_SIGNIN,
    payload: request,
  };
};

export const kakaoSignOut = () => {
  const request = axios
    .post(`${END_POINTS}/oauth/kakao/signout`)
    .then((res) => {
      return res.data.message;
    });

  return {
    type: USER_KAKAO_SIGNOUT,
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
    type: USER_NAVER_SIGNIN,
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
    type: USER_NAVER_SIGNOUT,
    payload: request,
  };
};

//마이페이지 patch 요청
export const editUser = (userinfoEdit) => {
  const request = axios
    .patch(`${END_POINTS}/users/userinfo`,userinfoEdit)
    .then((res)=>{
      const{nickname ,mobile,age,gender} =res.data.userinfo
        return {
          nickname,mobile,age,gender
        };
      })
    .catch((err)=>{
      console.log('==userinfo 받아오기실패==',err)
    })
  
  return {
    type: USER_EDIT,
    payload: request,
  };
}
//회원탈퇴 delete 요청 -> state 전부 초기화하기
export const deleteUser = (userinfo) => {
  const request = axios
    .delete(`${END_POINTS}/users/signout`,userinfo)
    .then((res)=>{
      return res.data.message;
    })
    .catch((err)=>{
      console.log('==userinfo 받아오기실패==',err)
    })
  
  return {
    type: USER_DELETE,
    payload: request,
  };
}

//main email 보내기
export const addAddress = (address) => {
  const request = axios
    .post(`${END_POINTS}/users/address`, address)
    .then((res) => {
      return res.data;
    })
  
  return {
    type: USER_ADD_ADDRESS,
    payload: request,
  };
};

//order관련 구독하기, 취소하기
export const addOrder = (order, selected_mobile, deliveryName, data) => {
  order.selected_mobile = selected_mobile;
  order.user_name = deliveryName;
  const orderinfo = {
    order: order,
    data: data
  }
  const request = axios
    .post(`${END_POINTS}/users/order`, orderinfo)
    //.post(`https://uptodoors.shop/users/order`, orderinfo)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("ordererr", err);
    });

  return {
    type: USER_ADD_ORDER,
    payload: request,
  };
};

//구독취소
export const cancelOrder = (id) => {
  const request = axios
    .patch(`${END_POINTS}/users/order:${id}`)
    .then((res) => {
      return res.data
    }).catch((err) => {
      console.log(err)
    });
  //id랑 메시지 같이 받아오기
  return {
    type: USER_CALCEL_ORDER,
    payload: request,
  };
}





