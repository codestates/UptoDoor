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
  message: string;
  login_type: "self" | "kakao" | "naver" | null;
  actionMessage?: "",
}