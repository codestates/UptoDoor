import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Wrapper, Title } from "../GlobalStyle";
import {
  SubscriptAndOrderInfoWrapper,
  ButtonWrapper,
} from "./StyledUserOrder";
import { MiddleButton } from "../common/Button/Button";

import OrderMenu from './OrderMenu';
import OrderSubscription from "./OrderSubscription";
import OrderInfo from "./OrderInfo";
import ConfirmModal from "../common/Modal/ConfirmModal";
import Auth from '../../hoc/auth'
import Signin from '../common/Signin/SigninModal'

import { addOrder } from '../../_actions/user_action';
import BootPay from 'bootpay-js';
import useInput from '../../utils/useInput';
import { END_POINT } from "../../_actions/type";

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
  const [deliveryUserName, onChangeDeliveryUserName] = useInput("");
  
  //필요모달 
  const [loginModal , setLoginModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [payErrorModal, setPayErrorModal] = useState(false);
  const [payCancelModal, setPayCancelModal] = useState(false);
  const [resErrorModal, setResErrorModal] = useState(false);
  const [validationModal, setValidationModal] = useState(false);
  const [wrongPathModal, setWrongPathModal] = useState(false);
  const modalText = [
    "주문이 완료되었습니다. 감사합니다.",
    "결제에 실패했습니다. 다시 시도해주세요.",
    "결제 진행을 취소하였습니다.",
    "결제에 실패했습니다. 다시 시도해주세요.11",
    "모든 정보를 입력해 주세요.",
  ];
  // const [optionsModal, setOptionsModal] = useState(false);

  const orderHander = useCallback(async () => {
    const user_info = {
      username: deliveryUserName,
      email: user.email,
      addr: cart.selected_address + cart.selected_address_detail,
      phone: orderMobile,
    };
    if (!mobileCheck && orderMobile.length >= 11 && paymentCheck) {
        BootPay.request({
          price: 0, //실제 결제되는 가격
          application_id: "6152052e7b5ba4002352bc60",
          name: "UptoDoor", //결제창에서 보여질 이름
          pg: "kcp",
          method: "card_rebill", //결제수단, 입력하지 않으면 결제수단 선택
          show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
          user_info: user_info,
          order_id: new Date().getTime(), //고유 주문번호
          extra: {
            quota: [0, 2, 3], // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용,
            theme: "purple", // [ red, purple(기본), custom ]
            custom_background: "#00a086", // [ theme가 custom 일 때 background 색상 지정 가능 ]
            custom_font_color: "#ffffff", // [ theme가 custom 일 때 font color 색상 지정 가능 ]
          },
        })
          .error(function (data) {
            setPayErrorModal(true);
            setModalSuccess(false);
            setOpenModal(true);
          })
          .cancel(function (data) {
            setPayCancelModal(true);
            setModalSuccess(false);
            setOpenModal(true);
          })
          .ready(function (data) {
          })
          .confirm(function (data) {
            //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
            //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
            setModalSuccess(true);
            const enable = true; // 재고 수량 관리 로직 혹은 다른 처리
            if (enable) {
              BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
            } else {
              BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
            }
          })
          .close(function (data) {
            // 결제창이 닫힐(성공 실패 상관없이 됨)
          })
          .done(function (data) {
            const selected_mobile = orderMobile;
            dispatch(
              addOrder(cart, selected_mobile, deliveryUserName, data)
            )
              .then((res) => {
                if (
                  res.payload.message === "Your order has been completed"
                ) {
                  setModalSuccess(true);
                  setOpenModal(true);
                }
              })
              .catch((err) => {
                setResErrorModal(true);
                setModalSuccess(false);
                setOpenModal(true);
              });
          });
        
    }
    else if (mobileCheck && paymentCheck) {
      const user_info = {
        username: deliveryUserName,
        email: user.email,
        addr: cart.selected_address + cart.selected_address_detail,
        phone: user.mobile,
      };
        BootPay.request({
          price: 0, //실제 결제되는 가격
          application_id: "6152052e7b5ba4002352bc60",
          name: "UptoDoor", //결제창에서 보여질 이름
          pg: "kcp",
          method: "card_rebill", //결제수단, 입력하지 않으면 결제수단 선택
          show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
          user_info: user_info,
          order_id: new Date().getTime(), //고유 주문번호
          extra: {
            quota: [0, 2, 3], // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용,
            theme: "purple", // [ red, purple(기본), custom ]
            custom_background: "#00a086", // [ theme가 custom 일 때 background 색상 지정 가능 ]
            custom_font_color: "#ffffff", // [ theme가 custom 일 때 font color 색상 지정 가능 ]
          },
        })
          .error(function (data) {
            setPayErrorModal(true);
            setModalSuccess(false);
            setOpenModal(true);
          })
          .cancel(function (data) {
            setPayCancelModal(true);
            setModalSuccess(false);
            setOpenModal(true);
          })
          .ready(function (data) {
            // 가상계좌 입금 계좌번호 발급 
          })
          .confirm(function (data) {
            //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
            //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
            setModalSuccess(true);
            const enable = true; // 재고 수량 관리 로직 혹은 다른 처리
            if (enable) {
              BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
            } else {
              BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
            }
          })
          .close(function (data) {
            // 결제창이 닫힐(성공 실패 상관없이 됨)
          })
          .done(function (data) {
            const selected_mobile = user.mobile;
            dispatch(
              addOrder(cart, selected_mobile, deliveryUserName, data)
            )
              .then((res) => {
                if (res.payload.message === "Your order has been completed") {
                  setModalSuccess(true);
                  setOpenModal(true);
                }
              })
              .catch((err) => {
                setResErrorModal(true);
                setModalSuccess(false);
                setOpenModal(true);
              });
          });
    }
    else {
setValidationModal(true);
setModalSuccess(false);
return setOpenModal(true);
    }
      
  }, [paymentCheck, mobileCheck, orderMobile, state]);

  const onChangeMobileHandler = useCallback((e) => {
    let mobileRegExp = /^[0-9\b -]{0,13}$/;
    if (mobileRegExp.test(e.target.value)) {
      setOrderMobile(e.target.value);
    }
  }, []);

  const goBackHandler = () => {
    history.back()
  }

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

  useEffect(() => {
    const request = Auth(true);
    if(request === undefined){
      return setLoginModal(true);
    }

    if (cart.menu.length === 0) {
      return setWrongPathModal(true);
    }
  },[])

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
            onChangeDeliveryUserName={onChangeDeliveryUserName}
          />
        </SubscriptAndOrderInfoWrapper>

        <ButtonWrapper>
          <MiddleButton type="button" primary onClick={orderHander}>
            결제하기
          </MiddleButton>
          <MiddleButton type="button" onClick={goBackHandler}>
            뒤로가기
          </MiddleButton>
        </ButtonWrapper>
      </Wrapper>

      {openModal ? (
        <ConfirmModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          url={modalSuccess ? "/" : null}
          modalTitleText="주문 결제"
          modalText={
            payErrorModal
              ? modalText[1]
              : payCancelModal
              ? modalText[2]
              : resErrorModal
              ? modalText[3]
              : validationModal
              ? modalText[4]
              : modalText[0]
          }
          modalSuccess={modalSuccess}
          modalBtn="확인"
          setHandler={
            payErrorModal
              ? setPayErrorModal
              : payCancelModal
              ? setPayCancelModal
              : resErrorModal
              ? setResErrorModal
              : validationModal
              ? setValidationModal
              : null
          }
        />
      ) : null}
      {loginModal ? (
        <Signin
          modalOpen={loginModal}
          setModalOpen={setLoginModal}
          request={Auth(true) === undefined}
          url="/"
        />
      ) : null}
      {wrongPathModal ? (
        <ConfirmModal
          openModal={wrongPathModal}
          setOpenModal={setWrongPathModal}
          modalBtn="확인"
          modalTitleText="접근 실패"
          modalText="잘못된 접근입니다. 메인페이지로 이동합니다."
          url="/"
        />
      ) : null}
    </Container>
  );
}

export default OrderWrapper;
