import React from "react";
import {
  OrderWrapper,
  OrderH3,
  OrderP,
  SubscriptionWrapper,
  SubscriptionInfoWrapper,
} from "./StyledUserOrder";
import { useSelector } from "react-redux";
import { stringToPrice } from "../../utils/validation";
import { RootReducerType } from "../../store/store";

const OrderSubscription = (): JSX.Element => {
  const cart = useSelector((state: RootReducerType) => state.cart);

  return (
    <OrderWrapper left>
      <OrderH3>정기구독 상세 정보</OrderH3>
      <SubscriptionWrapper>
        <h5>구독 정보</h5>
        <div>
          <SubscriptionInfoWrapper>
            <div>
              <OrderP primary>구독 기간 : </OrderP>
              <OrderP>
                {cart.delivery_term}개월 ({cart.delivery_term * 4}주)
              </OrderP>
            </div>
            <div>
              <OrderP primary>배송 요일 : </OrderP>
              <OrderP>
                {cart.delivery_day &&
                  cart.delivery_day.map((day: string) => {
                    return `${day}요일 ${" "}`;
                  })}
              </OrderP>
            </div>
            <div>
              <OrderP primary>배송 시간 : </OrderP>
              <OrderP>{cart.delivery_time}</OrderP>
            </div>
            <div>
              <OrderP primary>추가 금액 : </OrderP>
              <OrderP>{stringToPrice(cart.plus_money)} 원</OrderP>
            </div>
          </SubscriptionInfoWrapper>

          <SubscriptionInfoWrapper>
            <OrderP primary>주문 세부사항</OrderP>
            <textarea
              className="order-detail"
              defaultValue={cart.delivery_detail}
              readOnly
            />
          </SubscriptionInfoWrapper>
        </div>
      </SubscriptionWrapper>
    </OrderWrapper>
  );
};

export default OrderSubscription;
