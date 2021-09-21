import {
  SET_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_All_CART,
  ADD_CART,
  ADD_ALL_CART_TO_ORDER,
  SET_ADDRESS,SELECT_STORE
} from "./type";



export const setQuantity = (quantity:number, id:string):any => {
  return {
    type: SET_QUANTITY,
    payload: {
      quantity,
      id,
    },
  };
};

export const removeFromCart = (id:string):any => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id}
  };
}

export const removeFromAllCart = async() => {
  return await {
    type: REMOVE_FROM_All_CART,
  };
};

export const addCart = async (item: {}) => {
  return await {
    type: ADD_CART,
    payload : item
  };
};

export const addAllCartToOrder = (data: {}) => {
  console.log("액션이다", data);
  return {
    type: ADD_ALL_CART_TO_ORDER,
    payload: data
  };
};

export const setAddress = (address:string) => {
  return {
    type: SET_ADDRESS,
    payload: address
  };
};

export const selectStore = (id: any) => {
  return {
    type: SELECT_STORE,
    payload: id
  }
}