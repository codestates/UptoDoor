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
  message?: string;
  store_menus: Array<StoreMenus>;
  orders: Array<Orders>;
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
  id: number;
  order_time: string;
  user_name: string;
  selected_mobile: string;
  selected_address: string;
  selected_address_detail: string;
  plus_check: string;
  delivery_detail: string;
  totalprice: string;
  billingkey:any;
  receipt: any;
  state: string;
  createdAt: string;
  store_id: number;
  order_menus: Array<OrderMenus>;
  order_deliveries: OrderDeliveries;
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