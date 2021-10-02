import React from "react";
import {
  OrderH3,
  OrderInfoContainer,
  InfoCheck,
  OrderInfoWrraper,
  MoneyCheck,
  CardCheck,
  OrderWrapper,
  OrderUserInfoContent,
  OrderP,OrderH5
} from "./StyledUserOrder";
import { useSelector} from "react-redux";
import {stringToPrice} from '../../utils/validation'

const OrderInfo = (props:any) => {
  const {
    paymentChecker,mobileChecker,mobileCheck,orderMobile,onChangeMobileHandler,onChangeDeliveryName
  } = props;
  const cart = useSelector((state:any) => state.cart);
  const user = useSelector((state:any) => state.user);
  
  return (
    <OrderWrapper>
      <OrderH3>결제 & 배송 정보</OrderH3>
      <OrderInfoContainer>
        <OrderInfoWrraper>
          <h5>주문자 정보</h5>
          <OrderUserInfoContent>
            <OrderP primary>닉네임: </OrderP>
            <OrderP>{user.nickname}</OrderP>
          </OrderUserInfoContent>
          <OrderUserInfoContent>
            <OrderP primary>이메일: </OrderP>
            <OrderP>{user.email}</OrderP>
          </OrderUserInfoContent>
          <OrderUserInfoContent>
            <OrderP primary>연락처: </OrderP>
            <OrderP>{user.mobile}</OrderP>
          </OrderUserInfoContent>
          <InfoCheck>
            <div>
              <OrderH5>주문자명<span>(입력)</span></OrderH5>
            </div>
            <input
              type="text"
              onChange={onChangeDeliveryName}
              required
            />
            <div>
              <OrderH5>받으실 연락처<span>(입력)</span></OrderH5>
              <span >
                <input type="checkbox"onClick={mobileChecker} />
                기존 번호와 일치
              </span>
            </div>
            <input
              type="text"
              value = {mobileCheck ? user.mobile : orderMobile} 
              required
              name="모바일"
              readOnly={mobileCheck ? true : false}
              onChange={onChangeMobileHandler}
            ></input>
          </InfoCheck>
          <InfoCheck>
            <OrderH5>배송지</OrderH5>
            <input type="text" value={cart.selected_address} readOnly></input>
            <input
              type="text"
              value={cart.selected_address_detail}
              readOnly
            ></input>
          </InfoCheck>
        </OrderInfoWrraper>
        <OrderInfoWrraper>
          <h5>결제 금액</h5>
          <MoneyCheck>
            <OrderH5 money>상품 금액</OrderH5>
            <OrderP money>{stringToPrice(cart.total_price)} 원</OrderP>
          </MoneyCheck>
          <MoneyCheck>
            <OrderH5 money>추가 금액</OrderH5>
            <OrderP money>+ {stringToPrice(cart.plus_money)} 원</OrderP>
          </MoneyCheck>
          <MoneyCheck>
            <OrderH5 money>배송비</OrderH5>
            <OrderP money>+ {stringToPrice(cart.delivery_fee)} 원</OrderP>
          </MoneyCheck>
          <MoneyCheck>
            <OrderH5 money>월 결제 금액</OrderH5>
            <OrderP money>{stringToPrice(cart.total_price)} 원</OrderP>
          </MoneyCheck>
          <CardCheck>
            <h4>결제 수단 선택</h4>

            <input 
            onClick={paymentChecker}
            type="checkbox" /> 일반 카드 결제
          </CardCheck>
        </OrderInfoWrraper>
      </OrderInfoContainer>
    </OrderWrapper>
  );
}

export default OrderInfo
