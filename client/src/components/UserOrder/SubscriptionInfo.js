import React from 'react'
import {
  OrderWrapper,
  OrderH3,
  OrderP,
  SubscriptionWrapper,
  SubscriptionInfoWrapper,
} from "./StyledUserOrder";
import { useSelector } from 'react-redux';
const SubscriptionInfo = () => {
  const state = useSelector((state) => state.cart);

  return (
    <OrderWrapper>
      <OrderH3>정기구독 상세 정보</OrderH3>
      <SubscriptionWrapper>
        <h5>구독 정보</h5>
        <div>
          <SubscriptionInfoWrapper>
            <div>
              <OrderP primary>구독 기간 : </OrderP>
              <OrderP>{state.delivery_term}</OrderP>
            </div>
            <div>
              <OrderP primary>배송 요일 : </OrderP>
              <OrderP>{state.delivery_day}</OrderP>
            </div>
            <div>
              <OrderP primary>배송 시간 : </OrderP>
              <OrderP>{state.delivery_time}</OrderP>
            </div>
            <div>
              <OrderP primary>추가 금액 : </OrderP>
              <OrderP>{state.plus_money} 원</OrderP>
            </div>
          </SubscriptionInfoWrapper>

          <SubscriptionInfoWrapper>
            <OrderP primary>주문 세부사항</OrderP>
            <textarea defaultValue={state.delivery_detail} readOnly />
          </SubscriptionInfoWrapper>
        </div>
      </SubscriptionWrapper>
    </OrderWrapper>
  );
}

export default SubscriptionInfo
