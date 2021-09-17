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
} from "./StyledUserOrder";
import { useSelector} from "react-redux";


const OrderInfo = (props:any) => {
  const {
    paymentChecker,mobileChecker,mobileCheck,orderMobile,onChangeMobileHandler,
  } = props;
  // console.log(orderMobile);
  const cart = useSelector((state:any) => state.cart);
  const user = useSelector((state:any) => state.user);
  
  const price = cart.Menu.reduce((acc:any, cur:any) => {
    return acc + (Number(cur.price) * Number(cur.quantity))
  }, 0);
  const total_price = price + cart.plus_money + cart.delivery_fee;

  
  return (
    <OrderWrapper>
      <OrderH3>결제 & 배송 정보</OrderH3>
      <OrderInfoContainer>
        <OrderInfoWrraper>
          <h5>주문자 정보</h5>
          <OrderUserInfoContent>
            <h4>주문자명: </h4>
            <p>{user.user_name}</p>
          </OrderUserInfoContent>
          <OrderUserInfoContent>
            <h4>이메일: </h4>
            <p>{user.email}</p>
          </OrderUserInfoContent>
          <OrderUserInfoContent>
            <h4>연락처: </h4>
            <p>{user.mobile}</p>
          </OrderUserInfoContent>
          <InfoCheck>
            <div>
              <h5>받으실 연락처</h5>
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
            <h5>배송지</h5>
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
            <h5>상품 금액</h5>
            <p>{price} 원</p>
          </MoneyCheck>
          <MoneyCheck>
            <h5>추가 금액</h5>
            <p>+ {cart.plus_money} 원</p>
          </MoneyCheck>
          <MoneyCheck>
            <h5>배송비</h5>
            <p>+ {cart.delivery_fee} 원</p>
          </MoneyCheck>
          <MoneyCheck>
            <h4>월 결제 금액</h4>
            <p>{total_price} 원</p>
          </MoneyCheck>
          <CardCheck>
            <h4>결제 수단 선택</h4>

            <label onClick={paymentChecker}>
              <input type="checkbox" /> 일반 카드 결제
            </label>
          </CardCheck>
        </OrderInfoWrraper>
      </OrderInfoContainer>
    </OrderWrapper>
  );
}

export default OrderInfo
