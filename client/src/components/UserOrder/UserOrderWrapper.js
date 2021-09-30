import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  MenuWrapper,
  MenuItemWrapper,
  MenuItemDetail,
  OrderH3,
  SubscriptAndOrderInfoWrapper,
  MenuUl,
  ButtonWrapper,
} from "./StyledUserOrder";
import SubscriptionInfo from './SubscriptionInfo';
import OrderInfo from "./OrderInfo";
import { MiddleButton } from "../common/Button/Button";
import { addOrder } from '../../_actions/user_action';
import { Container, Wrapper, Title } from "../GlobalStyle";
import useInput from "../../utils/useInput";
import ConfirmModal from "../common/Modal/ConfirmModal";
import { removeAllCart } from "../../_actions/cart_action";

function UserOrderWrapper() {
  const state = useSelector((state) => state);
  const menu = state.cart.menu;
  console.log(menu)
  const cart = state.cart;
  const user = state.user;
  const dispatch = useDispatch();
  const [mobileCheck, setMobileCheck] = useState(false);
  const mobileChecker = () => setMobileCheck((mobileCheck) => !mobileCheck);
  const [paymentCheck, setPaymentCheck] = useState(false);
  const paymentChecker = () => setPaymentCheck((paymentCheck) => !paymentCheck);

  const [orderMobile, setOrderMobile] = useState("");
  const [deliveryName, onChangeDeliveryName] = useInput('')

  const [openModal, setOpenModal] = useState(false)
  const [optionsModal, setOptionsModal] = useState(false);
  // console.log("orderMobile", orderMobile);
  // console.log("mobileCheck", mobileCheck);
  console.log("paymentCheck", paymentCheck);
 
  const orderHander = useCallback(() => {
    // console.log(orderMobile.length)
    // console.log("orderMobile", orderMobile);
    // console.log("mobileCheck", mobileCheck);
    // console.log("paymentCheck", paymentCheck);
    BootPay.request({
      price: cart.total_price, //실제 결제되는 가격
      application_id: "6152052e7b5ba4002352bc60",
      name: 'UptoDoor', //결제창에서 보여질 이름
      pg: 'kcp',
      method: '', //결제수단, 입력하지 않으면 결제수단 선택
      show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
      items: [
        {
          item_name: menu[0].name, //상품명
          qty: menu[0].quantity, //수량
          unique: '123', //해당 상품을 구분짓는 primary key
          price: menu[0].price, //상품 단가
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
        end_at: ``, // 정기결제 만료일 -  기간 없음 - 무제한
            vbank_result: 0, // 가상계좌 사용시 사용, 가상계좌 결과창을 볼지(1), 말지(0), 미설정시 봄(1)
            quota: [0,2,3], // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용,
        theme: 'purple', // [ red, purple(기본), custom ]
        custom_background: '#00a086', // [ theme가 custom 일 때 background 색상 지정 가능 ]
        custom_font_color: '#ffffff' // [ theme가 custom 일 때 font color 색상 지정 가능 ]
      }
    }).error(function (data) {
      setOptionsModal(true);
      <ConfirmModal
          openModal={optionsModal}
          setOpenModal={setOptionsModal}
          modalTitleText="주문 실패"
          modalText="모든 정보를 확인해주세요"
          modalBtn="확인"
      />
      console.log('-- 결제 진행 에러 --',data);
    }).cancel(function (data) {
      console.log('-- 결제 취소 에러 --',data);
    }).ready(function (data) {
      console.log('-- 가상계좌 입금 계좌번호 발급 -- ',data);
    }).confirm(function (data) {
      //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
      //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
      console.log('-- confirm --',data);
      const enable = true; // 재고 수량 관리 로직 혹은 다른 처리
      if (enable) {
        BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
      } else {
        BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
      }
    }).close(function (data) {
        // 결제창이 닫힐(성공 실패 상관없이 됨)
        console.log('--close--',data);
    }).done(function (data) {
      RestClient.setConfig(
        '6152052e7b5ba4002352bc60',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
      );
      
      RestClient.getAccessToken().then(function (response) {
        if (response.status === 200) {
          console.log(response.data.token);
        }
      });
      // 결제 정상 완료
      // 여기서 결제 검증 해야함
      setOpenModal(true);
      <ConfirmModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalTitleText="주문 완료"
          modalText="주문이 완료되었습니다. 감사합니다."
          url="/"
          modalBtn="확인"
      />
      console.log('-- 결제 완료 -- ',data);
    });

    if (!mobileCheck && orderMobile.length >= 11 && paymentCheck) {
      const selected_mobile = orderMobile;
      dispatch(addOrder(state.cart, selected_mobile, deliveryName))
        .then((res) => {
        if (res.payload.message === 'Your order has been completed') {
          setOpenModal(true);
        }
      }).catch((err)=> alert("err입니다", err))
    } else if (mobileCheck && paymentCheck) {
      const selected_mobile = state.user.mobile;
      dispatch(addOrder(state.cart, selected_mobile, deliveryName)).
        then((res) => {
          if (res.payload.message === 'Your order has been completed') {
          dispatch(removeAllCart())
          setOpenModal(true);
        }
      }).catch((err)=> alert("err입니다", err));
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
      orderMobile.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
    );
  }
}, [orderMobile]);

  if (state === undefined) return null;
  return (
    <Container>
      <Title>주문 전 확인</Title>
      <div>
        <Wrapper>
          <OrderH3 primary>정기구독 상품 정보</OrderH3>
          <MenuWrapper>
            <MenuUl>
              <li>상품 정보</li>
              <li>수량</li>
              <li>가격</li>
            </MenuUl>
            {/* 사용설명 nav 느낌 */}
            {menu &&
              menu.map((item) => {
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
        </Wrapper>
        <SubscriptAndOrderInfoWrapper>
          <SubscriptionInfo />
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
      </div>
      {/* {openModal ? (
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
      ) : null} */}
    </Container>
  );
}

export default UserOrderWrapper;
