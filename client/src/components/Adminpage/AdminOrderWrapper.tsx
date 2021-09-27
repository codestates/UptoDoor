import React,{useEffect} from 'react'
import { ArrowBtn ,MiddleButton, SmallButton } from '../common/Button/Button'
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
} from '../UserOrderInfo/StyledUserOrderInfo'
import AdminOrderInfo from './AdminOrderInfo'
import AdminStoreInfo from './AdminStoreInfo'

function AdminOrderWrapper({ orderitem, listbackHandler }:any) {

  useEffect(() => {
    console.log("ㅁㅇㄴㅈㅂㅈ1131", orderitem);
  }, []);

  return (
    <MypageOrderListWrapper>
      <OrderListContent>
        <StoreInfoWrapper className="storeinfo-wrapper">
          <FlexBox between align>
            <div className="i-wrapper">
              <ArrowBtn className="fas fa-angle-double-left" 
              onClick={listbackHandler}></ArrowBtn>
              <span>전체주문내역 보기</span>
            </div>
            <OrderDate> 다음 결제일 : 2021.12.25 </OrderDate>
          </FlexBox>
        </StoreInfoWrapper>

        <FlexBox distance>
          <H3>오명재 님</H3>
          <span>의 구독내역입니다.</span>
        </FlexBox>

        {/* 구독가게정보 */}
        <AdminStoreInfo/>

        {/* 오더인포 */}
        <OrderInfoWrapper className="orderinfo-wrapper">
          <FlexBox between>
            <H3>주문상품정보</H3>
          </FlexBox>
          
          <AdminOrderInfo/>

          <TtlPricemBox className="ttl-price-box">
            <H4>총 결제금액</H4>
            <h2>140,000 원</h2>
          </TtlPricemBox>
        </OrderInfoWrapper>
      </OrderListContent>

      <BtnBox btnboxMargin>
        <MiddleButton primary>확인</MiddleButton>
      </BtnBox>
    </MypageOrderListWrapper>
  )
}

export default AdminOrderWrapper
