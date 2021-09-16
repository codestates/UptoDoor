import React from 'react'
import {
  OrderH3,
  OrderInfoContainer,
  InfoCheck,
  OrderInfoWrraper,
  MoneyCheck,
  CardCheck,
  OrderWrapper,
  OrderUserInfoContent,
} from "./StyledUserOrder";
import { useSelector } from "react-redux";
const OrderInfo = () => {
  const state = useSelector((state) => state.cart);


  return (
    <OrderWrapper>
      <OrderH3>결제 & 배송 정보</OrderH3>
      <OrderInfoContainer>
        <OrderInfoWrraper>
          <h5>주문자 정보</h5>
          <OrderUserInfoContent>
            <h4>주문자명: </h4>
            <p>{state.user_name}</p>
          </OrderUserInfoContent>
          <OrderUserInfoContent>
            <h4>이메일: </h4>
            <p>dydwns2441@naver.com</p>
          </OrderUserInfoContent>
          <OrderUserInfoContent>
            <h4>연락처: </h4>
            <p>010-9999-9999</p>
          </OrderUserInfoContent>
          <InfoCheck>
            <div>
              <h5>받으실 연락처</h5>
              <span>
                <input type="checkbox" />
                기존 번호와 일치
              </span>
            </div>
            <input type="text" />
          </InfoCheck>
          <InfoCheck>
            <h5>배송지</h5>
            <input type="text" value={state.user_address} readOnly></input>
            <input
              type="text"
              value={state.user_address_detail}
              readOnly
            ></input>
          </InfoCheck>
        </OrderInfoWrraper>
        <OrderInfoWrraper>
          <h5>결제 금액</h5>
          <MoneyCheck>
            <h5>상품금액</h5>
            <p>22000 원</p>
          </MoneyCheck>
          <MoneyCheck>
            <h5>추가금액</h5>
            <p>+ {state.plus_money} 원</p>
          </MoneyCheck>
          <MoneyCheck>
            <h5>배송비</h5>
            <p>+ 0 원</p>
          </MoneyCheck>
          <MoneyCheck>
            <h4>최종 결제금액</h4>
            <p>{state.total_price} 원</p>
          </MoneyCheck>
          <CardCheck>
            <h4>결제 수단 선택</h4>

            <label>
              <input type="checkbox" /> 일반 카드 결제
            </label>
          </CardCheck>
        </OrderInfoWrraper>
      </OrderInfoContainer>
    </OrderWrapper>
  );
}

export default OrderInfo
