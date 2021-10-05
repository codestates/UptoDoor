import { Interface } from "readline";

//user signUp/signIn/signOut/mypage/deleteUser
export const USER_SEND_CERT_EMAIL = "USER_SEND_CERT_EMAIL";
export const USER_SIGNUP = "USER_SIGNUP";
export const USER_SIGNIN = "USER_SIGNIN";
export const USER_SIGNOUT = "USER_SIGNOUT";
export const USER_KAKAO_SIGNIN = "USER_KAKAO_SIGNIN";
export const USER_KAKAO_SIGNOUT = "USER_KAKAO_SIGNOUT";
export const USER_NAVER_SIGNIN = "USER_NAVER_SIGNIN";
export const USER_NAVER_SIGNOUT = "USER_NAVER_SIGNOUT";
export const USER_EDIT = "USER_EDIT";
export const USER_DELETE = "USER_DELETE";
export const USER_ADD_ADDRESS = "USER_ADD_ADDRESS";
export const USER_ADD_ORDER = "USER_ADD_ORDER";
export const USER_CALCEL_ORDER = "USER_CALCEL_ORDER";

//admin signUp/signIn/signOut/mypage/deleteAdmin
export const ADMIN_STORE_POST = "ADMIN_STORE_POST";
export const ADMIN_STORE_EDIT = "ADMIN_STORE_EDIT";
export const ADMIN_STORE_DELETE = "ADMIN_STORE_DELETE";
export const ADMIN_STORE_GET_DATA = "ADMIN_STORE_GET_DATA";
export const ADMIN_STORE_RESET = "ADMIN_STORE_RESET";

//Store
export const STORE_DATAS = "STORE_DATAS";
export const STORE_FILTER_BY_HASHTAG = "STORE_FILTER_BY_HASHTAG";
export const STORE_FILTER_BY_SEARCH = "STORE_FILTER_BY_SEARCH";
export const STORE_FILTER_BY_CLICK = "STORE_FILTER_BY_CLICK";
export const STORE_FILTER_BY_SELECTED = "STORE_FILTER_BY_SELECTED";
export const STORE_FILTER_BY_CITY = 'STORE_FILTER_BY_CITY'

//cart action
export const SET_QUANTITY = "SET_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_CART = "ADD_CART";
export const ADD_ALL_CART_TO_ORDER = "ADD_ALL_CART_TO_ORDER";
export const SET_ADDRESS = "SET_ADDRESS";
export const SELECT_STORE = "SELECT_STORE";
export const REMOVE_ALL_CART = "REMOVE_ALL_CART";

//
export const END_POINTS = "https://uptodoors.shop"
export const END_POINT = "https://uptodoor.shop";
// export const END_POINTS = "http://localhost:3060";
// export const END_POINT = "http://localhost:3000";