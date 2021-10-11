export interface CartInfo {
  menu: Menu[];
  selected_address: string | "";
  selected_address_detail: string | "";
  delivery_detail: string | null;
  delivery_term: string | null;
  delivery_day: string[] | null;
  delivery_time: string | null;
  delivery_fee: number;
  plus_check: boolean;
  plus_money: number;
  store_id: number | null;
}

export type Menu = {
  id: number;
  name: string;
  image: string;
  price: number;
  detail: string;
  quantity: number;
};