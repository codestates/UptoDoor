import {
  SET_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_All_CART,
  ADD_CART,
  ADD_ALL_CART_TO_ORDER,
  SET_ADDRESS,SELECT_STORE,REMOVE_ALL_CART
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

export const setAddress = (selected_address: string, selected_address_detail: string) => {

  return {
    type: SET_ADDRESS,
    payload: {
      selected_address,selected_address_detail
    }
  };
};

export const selectStore = (id: any) => {
  console.log("id", id);
  return {
    type: SELECT_STORE,
    payload: id
  }
}

export const removeAllCart = () => {
  return {
    type: REMOVE_ALL_CART
  }
}