import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Container, Wrapper, Title } from "../GlobalStyle";
import {
  MenuWrapper,
  MenuItemWrapper,
  MenuItemDetail,
  OrderH3,
  SubscriptAndOrderInfoWrapper,
  MenuUl,
  ButtonWrapper,
  MenuContainer,
} from "./StyledUserOrder";
import { MiddleButton } from "../common/Button/Button";

import OrderMenu from './OrderMenu';
import OrderSubscription from "./OrderSubscription";
import OrderInfo from "./OrderInfo";
import ConfirmModal from "../common/Modal/ConfirmModal";

import { addOrder } from '../../_actions/user_action';
import { removeAllCart } from "../../_actions/cart_action";
import useInput from "../../utils/useInput";

function OrderWrapper() {
  const state = useSelector((state) => state);
  const menu = state.cart.menu;

  const dispatch = useDispatch();
  const [mobileCheck, setMobileCheck] = useState(false);
  const mobileChecker = () => setMobileCheck((mobileCheck) => !mobileCheck);
  const [paymentCheck, setPaymentCheck] = useState(false);
  const paymentChecker = () => setPaymentCheck((paymentCheck) => !paymentCheck);

  const [orderMobile, setOrderMobile] = useState("");
  const [deliveryName, onChangeDeliveryName] = useInput("");

  const [openModal, setOpenModal] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);

  const orderHander = useCallback(() => {
    console.log(paymentCheck);
    if (!mobileCheck && orderMobile.length >= 11 && paymentCheck) {
      const selected_mobile = orderMobile;
      dispatch(addOrder(state.cart, selected_mobile, deliveryName))
        .then((res) => {
          if (res.payload.message === "Your order has been completed") {
            setOpenModal(true);
          }
        })
        .catch((err) => alert("err입니다", err));
    } else if (mobileCheck && paymentCheck) {
      const selected_mobile = state.user.mobile;
      dispatch(addOrder(state.cart, selected_mobile, deliveryName))
        .then((res) => {
          if (res.payload.message === "Your order has been completed") {
            dispatch(removeAllCart());
            setOpenModal(true);
          }
        })
        .catch((err) => alert("err입니다", err));
    } else {
      setOptionsModal(true);
    }
  }, [paymentCheck, mobileCheck, orderMobile, state]);

  const onChangeMobileHandler = useCallback((e) => {
    let mobileRegExp = /^[0-9\b -]{0,13}$/;
    if (mobileRegExp.test(e.target.value)) {
      setOrderMobile(e.target.value);
    }
  }, []);

  useEffect(() => {
    if (orderMobile.length === 10) {
      setOrderMobile(orderMobile.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (orderMobile.length === 13) {
      setOrderMobile(
        orderMobile
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [orderMobile]);

  if (state === undefined) return null;
  return (
    <Container>
      <Title>주문 전 확인</Title>

      <Wrapper>
        {/* 정기구독 상품정보 */}
        <OrderMenu menu={menu} />
        {/* 정기구독 상세정보에서 구독정보와 결제&배송정보 */}
        <SubscriptAndOrderInfoWrapper>
          <OrderSubscription />
          <OrderInfo
            onChangeMobileHandler={onChangeMobileHandler}
            setOrderMobile={setOrderMobile}
            orderMobile={orderMobile}
            mobileCheck={mobileCheck}
            paymentChecker={paymentChecker}
            mobileChecker={mobileChecker}
            onChangeDeliveryName={onChangeDeliveryName}
          />
        </SubscriptAndOrderInfoWrapper>

        <ButtonWrapper>
          <MiddleButton type="button" onClick={orderHander}>
            결제하기
          </MiddleButton>
          <MiddleButton>뒤로가기</MiddleButton>
        </ButtonWrapper>
      </Wrapper>
      {openModal ? (
        <ConfirmModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalTitleText="주문 완료"
          modalText="주문이 완료되었습니다. 감사합니다."
          url="/"
          modalBtn="확인"
        />
      ) : null}
      {optionsModal ? (
        <ConfirmModal
          openModal={optionsModal}
          setOpenModal={setOptionsModal}
          modalTitleText="주문 실패"
          modalText="모든 정보를 확인해주세요"
          modalBtn="확인"
        />
      ) : null}
    </Container>
  );
}

export default OrderWrapper;
