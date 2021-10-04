export interface AdminInfo {
	id: number;
	name: string;
	image: string;
	number: string;
  address: string;
  address_detail: string;
  category: string;
  introduce: string;
  open_time: string;
  close_time: string;
	profileImage: string | null;
  createdAt?: string;
  store_menus: StoreMenus[];
  orders: Orders[];
  message?: string;
}

export interface StoreMenus {
  menu_id: number;
  menu: {
    id: number,
    name: string,
    image: string,
    price: number,
    detail: string
  }
}

export interface Orders {
  billingkey?: any;
  createdAt?: string;
  delivery_detail?: string;
  id: number;
  order_deliveries: OrderDeliveries;
  order_menus: OrderMenus[];
  order_time: string;
  plus_check: string;
  plus_money: number;
  user_name: string;
  receipt: any;
  selected_mobile: string;
  selected_address: string;
  selected_address_detail: string;
  totalprice: string;
  state: string;
  store_id: number;
  user_name: string;
}

export interface OrderMenus {
  quantity: number;
  menu: {
    name: string,
    image: string,
    price: number,
    detail: string
  };
}

export interface OrderDeliveries {
  delivery_time: string;
  delivery_day: string;
  delivery_term: string;
  paycount: any;
}