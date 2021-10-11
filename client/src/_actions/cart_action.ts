import {
  SET_QUANTITY,
  REMOVE_FROM_CART,
  ADD_CART,
  ADD_ALL_CART_TO_ORDER,
  SET_ADDRESS,
  SELECT_STORE,
  REMOVE_ALL_CART,
} from "./type";

export const setQuantity = (quantity: number, id: string): any => {
  return {
    type: SET_QUANTITY,
    payload: {
      quantity,
      id,
    },
  };
};

export const removeFromCart = (id: string): any => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id },
  };
};

export const addCart = async (item: {}) => {
  return {
    type: ADD_CART,
    payload: item,
  };
};

export const addAllCartToOrder = (data: {}) => {
  return {
    type: ADD_ALL_CART_TO_ORDER,
    payload: data,
  };
};

export const setAddress = (
  selected_address: string,
  selected_address_detail: string
) => {
  return {
    type: SET_ADDRESS,
    payload: {
      selected_address,
      selected_address_detail,
    },
  };
};

export const selectStore = (id: any) => {
  return {
    type: SELECT_STORE,
    payload: id,
  };
};

export const removeAllCart = () => {
  return {
    type: REMOVE_ALL_CART,
  };
};
