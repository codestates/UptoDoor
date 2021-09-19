import {
  SET_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_All_CART,
  ADD_CART,
  ADD_ALL_CART_TO_ORDER,
  SET_ADDRESS,
} from "../_actions/type";

import axios from 'axios'
axios.defaults.withCredentials = true

export const setQuantity = (quantity, id) => {
  return {
    type: SET_QUANTITY,
    payload: {
      quantity,
      id,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id}
  };
}

export const removeFromAllCart = () => {
  return {
    type: REMOVE_FROM_All_CART,
  };
};

export const addCart = (id) => {

  // const cartResult = 
  // axios.post('https://uptodoors.shop/addcart/주소보기',
  // item)
  // .then((res)=>{
  //   console.log(res.data);
  // })
  // .catch((err)=>{
  //   console.log('==userinfo 받아오기실패==',err)
  // })

  //payload 에 cartResult 넣기.
  return {
    type: ADD_CART,
    payload : id
  };
};

export const addAllCartToOrder = (data) => {
  return {
    type: ADD_ALL_CART_TO_ORDER,
    paylad: data
  };
};

export const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    payload: address
  };
};