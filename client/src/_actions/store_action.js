
import {
  STORE_DATAS,
  STORE_FILTER_HASHTAG,
  STORE_FILTER_BY_SEARCH,
  STORE_FILTER_BY_CLICK,
  END_POINTS
} from "./type";
import axios from "axios";
axios.defaults.withCredentials = true;
import { initialStore } from '../components/dummyData';
export const getStoreData = () => {
  const request = axios.get(`${END_POINTS}/store`)
    .then((res) => {
      console.log("ssssssss", res.data)
      return res.data.storeinfo;
  })

  return {
    type: STORE_DATAS,
    payload: request,
  };
};

export const getFitteredStore = (hastag) => {
  const request = axios.get(`${END_POINTS}/store`).then((res) => {
    let data;
    if (hastag === "all") {
      data = res.data.storeinfo;
    } else {
      data = res.data.storeinfo.filter((el) => {
        return el.category === hastag;
      });
    }
    return data
  });
  
  

  return {
    type: STORE_FILTER_HASHTAG,
    payload: request,
  };
};

export const getFitteredBySearch = (keyword) => {

  const request = axios.get(`${END_POINTS}/store`).then((res) => {
    const info = res.data.storeinfo
    let data;
    if (keyword === "") {
      data = info;
    } else {
      // let RegExp = /[안녕]/g;
      let RegExp1 = new RegExp(`${keyword}`, "g");

      data = info.filter((el) => {
        if (
          RegExp1.test(el.name) ||
          RegExp1.test(el.introduce) ||
          RegExp1.test(el.category)
        ) {
          return el;
        }
      });
    }
    console.log("서치서치=========", data);
    return data;
  });


  return {
    type: STORE_FILTER_BY_SEARCH,
    payload: request,
  };
};

export const getFitteredByClick = (address) => {
  const request = axios.get(`${END_POINTS}/store`).then((res) => {
    console.log("res.data---cliock", res.data);
    const info = res.data.storeinfo
    console.log("info", info);
    let data;
    if (address) {
      data = info.filter((el) => {
        console.log(el.address);
        return el.address === address;
      });
    }
    return data;
  });
  return {
    type: STORE_FILTER_BY_CLICK,
    payload: request,
  };
}