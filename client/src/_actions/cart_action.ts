import {
  SET_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_All_CART,
  ADD_CART,
  ADD_ALL_CART_TO_ORDER,
  SET_ADDRESS,
} from "./type";



export const setQuantity = (quantity:number, id:string) => {
  return {
    type: SET_QUANTITY,
    payload: {
      quantity,
      id,
    },
  };
};

export const removeFromCart = (id:string) => {
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

export const addCart = (item: {}) => {
  return {
    type: ADD_CART,
    payload : item
  };
};

export const addAllCartToOrder = (data:{}) => {
  return {
    type: ADD_ALL_CART_TO_ORDER,
    paylad: data
  };
};

export const setAddress = (address:string) => {
  return {
    type: SET_ADDRESS,
    payload: address
  };
};