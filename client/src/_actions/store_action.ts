import {
  STORE_DATAS,
  STORE_FILTER_BY_HASHTAG,
  STORE_FILTER_BY_SEARCH,
  STORE_FILTER_BY_CLICK,
  STORE_FILTER_BY_SELECTED,
  STORE_FILTER_BY_CITY,
  END_POINTS,
} from "./type";
import axios from "axios";
axios.defaults.withCredentials = true;

export const getFilteredStoreSelected = () => {
  const request = axios.get(`${END_POINTS}/store`).then((res) => {
    return res.data.storeinfo;
  });

  return {
    type: STORE_FILTER_BY_SELECTED,
    payload: request,
  };
};

export const getStoreData = () => {
  const request = axios.get(`${END_POINTS}/store`).then((res) => {
    return res.data.storeinfo;
  });

  return {
    type: STORE_DATAS,
    payload: request,
  };
};

export const getFitteredByHastag = (hastag: string) => {
  const request = axios.get(`${END_POINTS}/store`).then((res) => {
    let data;
    if (hastag === "all") {
      data = res.data.storeinfo;
    } else {
      data = res.data.storeinfo.filter((el: any) => {
        return el.category === hastag;
      });
    }
    return data;
  });

  return {
    type: STORE_FILTER_BY_HASHTAG,
    payload: request,
  };
};

export const getFitteredBySearch = (keyword: string) => {
  const request = axios.get(`${END_POINTS}/store`).then((res) => {
    const info = res.data.storeinfo;
    let data;

    if (keyword === "") {
      data = info;
    } else {
      let RegExp1 = new RegExp(`${keyword}`, "g");

      data = info.filter((el: any) => {
        if (
          RegExp1.test(el.name) ||
          RegExp1.test(el.introduce) ||
          RegExp1.test(el.category)
        ) {
          return el;
        }
      });
    }
    return data;
  });

  return {
    type: STORE_FILTER_BY_SEARCH,
    payload: request,
  };
};

export const getFitteredByClick = (address: string) => {
  const request = axios.get(`${END_POINTS}/store`).then((res) => {
    const info = res.data.storeinfo;
    let data;
    if (address) {
      data = info.filter((el: any) => {
        return el.address === address;
      });
    }
    return data;
  });

  return {
    type: STORE_FILTER_BY_CLICK,
    payload: request,
  };
};

export const storeFilterByCity = (data: string) => {
  const request = axios.get(`${END_POINTS}/store`).then((res) => {
    if (data === "ALL") {
      return res.data.storeinfo;
    } else {
      const addressFilter = res.data.storeinfo.filter((el: any) => {
        let splitAdd = el.address.split(" ")[1];
        return splitAdd === data;
      });
      return addressFilter;
    }
  });

  return {
    type: STORE_FILTER_BY_CITY,
    payload: request,
  };
};
