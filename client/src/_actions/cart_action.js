import {
  SET_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_All_CART,
  ADD_CART,
  ADD_ALL_CART_TO_ORDER,
} from "../_actions/type";

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

export const addCart = () => {
  return {
    type: ADD_CART,
  };
};

export const addAllCartToOrder = (data) => {
  return {
    type: ADD_ALL_CART_TO_ORDER,
    paylad: data
  };
};