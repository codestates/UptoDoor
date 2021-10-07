import {Menu} from './adminInfo'

export interface User {
  age: string | null;
  email: string;
  id: number;
  mainAddress: string;
  mainAddressDetail: string;
  gender: string;
  mobile: string;
  nickname: string;
  position: string | null;
  subAddress: string;
  subAddressDetail: string ;
  message?: string;
  login_type: "self" | "kakao" | "naver" | null;
  successMessage?: "",
}

export interface UserOrders {
  createdAt: string;
  delivery_day: string[],
  delivery_detail: string;
  delivery_term: string;
  delivery_time: string;
  id: number;
  menu: MenuArr[];
  nextPayDay: string;
  plusMoney: number;
  selected_address: string;
  selected_address_detail: string;
  selected_mobile: string;
  state: string;
  store: StoreInfo;
  totalprice: number;
  user_name: number;
}

export type MenuArr = {
  id: number;
  menu_id: number;
  quantity: number;
  menu: Menu;
}