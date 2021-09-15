export const initialUser = {
  User: [
    {
      id: 1,
      nickname: "용준이",
      email: "test1@gmail.com",
      mainAddress: "서울시 용산구 신흥로32길 4-33",
      subAddress: "서울시 용산구 신흥로32길 4-44",
      mobile: "010-7185-2791",
      Order: [
        {
          id: 22,
          order_time: "2021년 9월10일 03:00",
          user_email: "test1@gmail.com",
          user_mobile: "010-7185-2791",
          store_id: "5",
          totalPrice: "50000",
        },
        {
          id: 23,
          order_time: "2021년 9월11일 05:00",
          user_email: "test1@gmail.com",
          user_mobile: "010-7185-2791",
          store_id: "9",
          totalPrice: "14000",
        },
      ],
    },
    {
      id: 2,
      nickname: "쑥사장",
      email: "test2@gmail.com",
      mainAddress: "서울시 강서구 구구국구구111",
      subAddress: "서울시 강서구 구구국구구111",
      mobile: "010-6666-6666",
      Store: {
        id: 5,
        name: "쑥카페",
        image: [],
        address: "서울시 강서구 구구국구구111",
        introduce: "많이 놀러오세요~~띠요띵용",
        category: "카페",
        Menu: [],
        //delivery_time: "",
        //business_paper: "",
      },
    },
  ],
};

export const initialCart = {
  // order_time: "2021년 9월12일 07:00",
  user_email: "test1@gmail.com",
  user_mobile: "010-7185-2791",
  user_address: "서울시 용산구 신흥로32길 4-33",
  store_id: "5",
  Menu: [
    {
      id: 42,
      name: "스페셜11 스팸에그 토스트",
      price: "4000",
      detail: "스팸 + 에그 + 글루텐프리 식빵+ 특제 소스",
      image: "../images/toast.png",
      quantity: 1,
    },
    {
      id: 41,
      name: "스페셜11 스팸에그 토스트",
      price: "4000",
      detail: "스팸 + 에그 + 글루텐프리 식빵+ 특제 소스",
      image: "../images/toast.png",
      quantity: 1,
    },
    {
      id: 39,
      name: "아메리카노",
      price: "4000",
      detail: "venti",
      image: "../images/americano.png",
      quantity: 1,
    },
  ],
  plus_check: true,
  plus_money: "2000",
  delivery_detail: "우유 2개 추가, 아메리카노에 시럽 3번짜주세요",
  delivery_term: "1개월",
  delivery_day: "월요일, 화요일",
  delivery_time: "오전 11시",
  totalPrice: "112000",
};

export const initialStore = [{
  id: 5,
  name: "쑥카페",
  image: [],
  address: "서울시 강서구 구구국구구111",
  introduce: "많이 놀러오세요~~띠요띵용",
  category: "카페",
  user_id: 2,
  Menu: [
    {
      id: 38,
      name: "아메리카노",
      price: "4000",
      detail: "venti",
      image: "",
    },
    {
      id: 39,
      name: "카페라떼",
      price: "5000",
      detail: "venti size",
      image: "",
    },
    {
      id: 40,
      name: "스페셜 스팸에그 토스트",
      price: "4000",
      detail: "스팸 + 에그 + 글루텐프리 식빵+ 특제 소스",
      image: "",
    },
  ],
  //delivery_time: "",
  //business_paper: "",
}]

export const initialMap = [
  //id,category,name,address
  {
    id : 1,
    category_name : 'food',
    name : '용준이네집',
    address : '서울시 용산구 신흥로32길 4-33'
  },
  {
    id : 2,
    category_name : 'cafe',
    name : '#도노커피',
    address : '서울 용산구 후암동 262-2'
  },
  {
    id : 3,
    category_name : 'cafe',
    name : '용산구 파리바게트',
    address : '서울 용산구 후암동 415-59'
  },
  {
    id : 4,
    category_name : 'cafe',
    name : '해방커피',
    address : '서울 용산구 용산동2가 1-697'
  }, 
  {
    id : 5,
    category_name : 'cafe',
    name : '남산아래',
    address : '서울 용산구 용산동2가 1-528'
  },
  {
    id : 6,
    category_name : 'home/living',
    name : '한솔클리닝',
    address : '서울 용산구 신흥로 126'
  },
  {
    id : 7,
    category_name : 'plants',
    name : '피아노숲',
    address : '서울 용산구 용산동2가 1-528'
  },
  {
    id : 8,
    category_name : 'food',
    name : '해방식당',
    address : '서울 용산구 용산동2가 1-555'
  },
  {
    id : 9,
    category_name : 'etc',
    name : '고래서점',
    address : '서울 용산구 한강대로 307'
  },
  {
    id : 10,
    category_name : 'etc',
    name : '올리브영',
    address : '서울 용산구 한강대로 285'
  },
]

export const initialHash = [
  //id,category,name,address
  {
    id : 1,
    category_name : 'food',
    hash_arr : []
  },
  {
    id : 2,
    category_name : 'cafe',
    hash_arr : []
  },
  {
    id : 3,
    category_name : 'living/home',
    hash_arr : []
  },
  {
    id : 4,
    category_name : 'plants',
    hash_arr : []
  },
  {
    id : 5,
    category_name : 'lesson',
    hash_arr : []
  },
  {
    id : 6,
    category_name : 'etc',
    hash_arr : []
  },
]
