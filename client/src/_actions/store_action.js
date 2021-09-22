
import {
  STORE_DATAS,
  STORE_FILTER_HASHTAG,
  STORE_FILTER_BY_SEARCH,
  STORE_FILTER_BY_CLICK,
} from "./type";
import axios from "axios";
axios.defaults.withCredentials = true;
import { initialStore } from '../components/dummyData';
export const getStoreData = () => {


  return {
    type: STORE_DATAS,
    payload: initialStore
  };
};

export const getFitteredStore = (hastag) => {
  let data;
  if (hastag === "all") {
    data = initialStore;
  } else {
    data = initialStore.filter((el) => {
      return el.category === hastag;
    });
  }
  

  return {
    type: STORE_FILTER_HASHTAG,
    payload: data,
  };
};

export const getFitteredBySearch = (keyword) => {
  let data;
  if (keyword === "") {
    data = initialStore;
  } else {
    // let RegExp = /[안녕]/g;
    let RegExp1 = new RegExp(`${keyword}`,"g");

    data = initialStore.filter((el) => {
      if (RegExp1.test(el.name) || RegExp1.test(el.introduce) || RegExp1.test(el.category)) {
        return el
      }
    });
  }
  console.log("data",data);

  return {
    type: STORE_FILTER_BY_SEARCH,
    payload: data,
  };
};

export const getFitteredByClick = (address) => {
  console.log("address---", address);
  let data;
  if (address) {
    data = initialStore.filter((el) => {
      console.log(el.address);
      return el.address ===address
    });
  }
  
  console.log("ㄸ;요", data);
  return {
    type: STORE_FILTER_BY_CLICK,
    payload: data,
  };
}