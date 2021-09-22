import React,{ useEffect, useState } from 'react'
import { SmallButton } from '../common/Button/Button'
import {
  MypageOrderListWrapper,
  OrderListContent,
} from '../Mypage/StyledMypage'
import { BtnBox } from '../StoreInfo/StyledStoreData'
import {
  StoreInfoWrapper,
  FlexBox,H3,H4,
  OrderDate,
  OrderInfoWrapper,
  TtlPricemBox
} from './StyledUserOrderInfo'
import { useHistory } from 'react-router-dom'
import MyOrderInfo from './MyOrderInfo'
import MyStoreInfo from './MyStoreInfo'
import Modal from '../common/Modal/Modal'

// eslint-disable-next-line react/prop-types
function MyOrderWrapper({ 
  filteredOrderId, 
  listbackHandler,
  cart,user,orderDate }:any, ) {

  const history = useHistory();
  const [openModal , setOpenModal] = useState(false);

  useEffect(() => {
    console.log(filteredOrderId);
  }, []);

  const cancleStoreHandler = () => {
    setOpenModal(true);
  }
  const closeModal = () => {
    setOpenModal((prev)=>!prev);
    history.push('/')
  }

  return (
    <MypageOrderListWrapper>
      <OrderListContent>
        <StoreInfoWrapper className="storeinfo-wrapper">
          <FlexBox between align>
            <div className="i-wrapper">
              <i className="fas fa-angle-double-left" 
              onClick={listbackHandler}></i>
              <span>구독중</span>
            </div>
            <OrderDate> 다음 결제일 : {orderDate(cart.delivery_term)} </OrderDate>
          </FlexBox>
        </StoreInfoWrapper>

        <FlexBox distance>
          <H3>{user.nickname} 님</H3>
          <span>의 구독내역을 확인하세요</span>
        </FlexBox>

        {/* 구독가게정보 component */}
        <MyStoreInfo/>

        <OrderInfoWrapper className="orderinfo-wrapper">
          <FlexBox between>
            <H3>주문상품정보</H3>
          </FlexBox> 
          
          {/* 오더인포 component */}
          <MyOrderInfo
          orderDate = {orderDate}
          />

          <TtlPricemBox>
            <H4>추가 금액</H4>
            <H3>{cart.plus_money} 원</H3>
          </TtlPricemBox>

          <TtlPricemBox className="ttl-price-box">
            <H4>총 결제금액</H4>
            <h2>{cart.total_price}원</h2>
          </TtlPricemBox>
        </OrderInfoWrapper>
      </OrderListContent>

      <BtnBox btnboxMargin>
        <SmallButton 
        primary
        onClick = {listbackHandler}  
        >
        뒤로가기</SmallButton>
        <SmallButton
        onClick = {cancleStoreHandler}
        >구독취소</SmallButton>
      </BtnBox>

      {openModal ?
        <Modal
        openModal = {openModal} 
        closeModal = {closeModal}
        modalTitleText = '구독을 정말 취소하시겠습니까?'
        modalText = '정기구독 중 취소하시면 이번 달 내 주문된 사항까지 적용됩니다.'
        modalBtn = '확인'
        /> : 
        null
      }

    </MypageOrderListWrapper>
  );
}

export default MyOrderWrapper

