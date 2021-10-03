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
import BootPay from 'bootpay-js';
import useInput from '../../utils/useInput';
import { RestClient } from "@bootpay/server-rest-client"
import axios from "axios";

function OrderWrapper() {
  const state = useSelector((state) => state);
  const menu = state.cart.menu;
  const cart = state.cart;
  const user = state.user;
  const dispatch = useDispatch();

  const [mobileCheck, setMobileCheck] = useState(false);
  const mobileChecker = () => setMobileCheck((mobileCheck) => !mobileCheck);
  const [paymentCheck, setPaymentCheck] = useState(false);
  const paymentChecker = () => setPaymentCheck((paymentCheck) => !paymentCheck);
  
  const [orderMobile, setOrderMobile] = useState("");
  const [deliveryName, onChangeDeliveryName] = useInput("");
  
  //필요모달 
  const [openModal, setOpenModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [payFailModal, setPayFailModal] = useState(false);
  const [payCancleModal, setPayCancleModal] = useState(false);
  const [issueAccountModal, setIssueAccountModal] = useState(false);

  // const [optionsModal, setOptionsModal] = useState(false);

  const orderHander = useCallback(() => {
    BootPay.request({
      price: 0, //실제 결제되는 가격
      application_id: "6152052e7b5ba4002352bc60",
      name: 'UptoDoor', //결제창에서 보여질 이름
      pg: 'kcp',
      method: 'card_rebill', //결제수단, 입력하지 않으면 결제수단 선택
      show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
      items: [
        {
          item_name: '정기구독권', //상품명
          qty: 1, //수량
          unique: '123', //해당 상품을 구분짓는 primary key
          price: 1000, //상품 단가
        }
      ],
      user_info: {
        username: user.nickname,
        email: user.email,
        addr: user.mainAddress,
        phone: user.mobile
      },
      order_id: (new Date()).getTime(), //고유 주문번호
      //params: {callback1: '그대로 콜백받을 변수 1', callback2: '그대로 콜백받을 변수 2', customvar1234: '변수명도 마음대로'},
      account_expire_at: '2020-10-25', // 가상계좌 입금기간 제한 ( yyyy-mm-dd )
      extra: {
          start_at: '', // 정기 결제 시작일 - 시작일을 지정하지 않으면 그 날 당일로부터 결제가 가능한 Billing key 지급
        end_at: '', // 정기결제 만료일 -  기간 없음 - 무제한
            vbank_result: 0, // 가상계좌 사용시 사용, 가상계좌 결과창을 볼지(1), 말지(0), 미설정시 봄(1)
            quota: [0,2,3], // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용,
        theme: 'purple', // [ red, purple(기본), custom ]
        custom_background: '#00a086', // [ theme가 custom 일 때 background 색상 지정 가능 ]
        custom_font_color: '#ffffff' // [ theme가 custom 일 때 font color 색상 지정 가능 ]
      }
    }).error(function (data) {
      console.log('-- 결제 진행 에러 --',data);
      setOpenModal(true)
      setPayFailModal(true)
    }).cancel(function (data) {
      console.log('-- 결제 취소 에러 --',data , payCancleModal);
      setOpenModal(true)
      setPayCancleModal(true)
    }).ready(function (data) {
      console.log('-- 가상계좌 입금 계좌번호 발급 -- ',data);
      setOpenModal(true)
      setIssueAccountModal(true)
    }).confirm(function (data) {
      //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
      //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
      console.log('-- confirm --',data);
      setOpenModal(true)
      setModalSuccess(true)
      const enable = true; // 재고 수량 관리 로직 혹은 다른 처리
      if (enable) {
        BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
      } else {
        BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
      }
    }).close(function (data) {
        // 결제창이 닫힐(성공 실패 상관없이 됨)
    }).done(function (data) {
      if (!mobileCheck && orderMobile.length >= 11) { //&& paymentCheck
        const selected_mobile = orderMobile;
        dispatch(addOrder(state.cart, selected_mobile, deliveryName, data))
          .then((res) => {
            if (res.payload.message === "Your order has been completed") {
              setOpenModal(true);
              setModalSuccess(true)
            }
          })
          //alert("err입니다", err)
          .catch((err) => setPayFailModal(true));
      } else if (mobileCheck) { // && paymentCheck
        const selected_mobile = state.user.mobile;
        dispatch(addOrder(state.cart, selected_mobile, deliveryName, data))
          .then((res) => {
            if (res.payload.message === "Your order has been completed") {
              dispatch(removeAllCart());
              setOpenModal(true);
              setModalSuccess(true)
            }
          })
          //alert('err입니다') 
          .catch((err) => setPayFailModal(true));
      } else {
        // setOptionsModal(true);
        setModalSuccess(false);
      }
      console.log('-- 결제 완료 --',data)
      setModalSuccess(true);
    });
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
          <MiddleButton 
          type="button" 
          primary
          onClick={orderHander}>
            결제하기
          </MiddleButton>
          <MiddleButton>뒤로가기</MiddleButton>
        </ButtonWrapper>
      </Wrapper>

      {openModal ? (
        <ConfirmModal
          openModal={openModal || payFailModal || payCancleModal || issueAccountModal}
          setOpenModal={setOpenModal}
          url="/"
          modalTitleText={
            payFailModal
            ?'결제 진행'
            :payCancleModal
            ?'결제 취소'
            :issueAccountModal
            ?'가상계좌 입금 계좌번호 발급'
            :''
          }
          modalText={
            payFailModal
            ?'결제 진행에 문제가 생겼습니다.'
            :payCancleModal
            ?'결제를 취소하셨습니다.'
            :issueAccountModal
            ?'가상계좌 입금 계좌번호 발급'
            :''
          }
          modalBtn="확인"
        />
      ) : null}

      {openModal ? (
        <ConfirmModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalSuccess={modalSuccess}
          modalBtn="확인"
          modalTitleText={
            modalSuccess ?
            '주문 완료' :
            '주문 실패'
            }
          modalText={
            modalSuccess ?
            '주문이 완료되었습니다. 감사합니다.' :
            '정보를 다시 확인해주세요.'
          }
        />
      ) : null}
    </Container>
  );
}

export default OrderWrapper;
