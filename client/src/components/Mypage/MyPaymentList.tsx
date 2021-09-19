import React from 'react'
import { MypageOrderListWrapper,OrderListContent,ListDate,ListInfo } from './StyledMypage';

const MyPaymentList = () => {
  return (
    <MypageOrderListWrapper>
      <OrderListContent>
        <ListDate>
          <p>2021.10.17 </p><h5>결제완료 </h5>
        </ListDate>
        <ListInfo>
          <img src="./images/toast.png" alt="order" />
          <div>
            <p><span>기간: </span> ~2021.11.16 </p>
            <p><span>받는 사람:</span>허용준</p>
            <p><span>연락처:</span>010-7185-2791</p>
            <p><span>주소:</span>서울시 용산구 후암동 345-12</p>
            <p><span>결제금액: </span>60,000원</p>
          </div>
        </ListInfo>
      </OrderListContent>
    </MypageOrderListWrapper>
  )
}

export default MyPaymentList
