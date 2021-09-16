import React from 'react'
import { useSelector } from 'react-redux';
import {
  OrderContainer,
  OrderWrapper,
  OrderTitle,
  MenuWrapper,
  MenuItemWrapper,
  MenuItemDetail,
  OrderH3,
  SubscriptAndOrderInfoWrapper
} from "./StyledUserOrder";
import SubscriptionInfo from './SubscriptionInfo';
import OrderInfo from './OrderInfo';
import { ButtonWrapper } from '../UserCart/StyledUserCart';
import {
  SmallButton
} from '../common/Button/Button';

function UserOrderWrapper() {
  const state = useSelector((state) => state.cart);
  if (state === undefined) return null;
  return (
    <OrderContainer>
      <OrderTitle>주문 전 확인</OrderTitle>
      <div>
        <OrderWrapper>
          <OrderH3 primary>정기구독 상품 정보</OrderH3>
          <MenuWrapper>
            {/* 사용설명 nav 느낌 */}
            {state.Menu.map((item) => {
              return (
                <MenuItemWrapper key={item.id}>
                  <img src={item.image} alt="" />
                  <MenuItemDetail>
                    <h5>{item.name}</h5>
                    <div>
                      <span>수량</span> {item.quantity} 개
                    </div>
                    <div>
                      <span>가격</span> {item.price} 원
                    </div>
                  </MenuItemDetail>
                </MenuItemWrapper>
              );
            })}
          </MenuWrapper>
        </OrderWrapper>
        <SubscriptAndOrderInfoWrapper>
          <SubscriptionInfo />
          <OrderInfo />
        </SubscriptAndOrderInfoWrapper>

        <ButtonWrapper>
          <SmallButton>결제하기</SmallButton>
          <SmallButton>뒤로가기</SmallButton>
          
        </ButtonWrapper>
      </div>
    </OrderContainer>
  );
}

export default UserOrderWrapper;
