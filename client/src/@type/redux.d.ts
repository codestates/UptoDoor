export interface Action {
  type: string;
  payload: Payload;
}

interface Payload {
	message?: string;
	data?: Object;
  orderdata?: AdminInfo | null;
}