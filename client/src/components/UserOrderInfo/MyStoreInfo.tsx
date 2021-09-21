import React from 'react'
import {
  StoreInfoWrapper,
  FlexBox,H3,H4,P,Category,
  DetailTextArea,
  EachItemBox,
} from './StyledUserOrderInfo'

import { useSelector } from "react-redux";

function MyStoreInfo() {

  const cart = useSelector((state:any) => state.cart);
  const admin = useSelector((state:any) => state.admin);
  console.log(admin);

  return (
    <>
      <StoreInfoWrapper className="storeinfo-wrapper">
        <FlexBox between>
          <H3>남산 아래</H3>
          <Category>Food</Category>
        </FlexBox>
        <FlexBox col>
          <EachItemBox>
            <H4>🗓 구독기간</H4>
            <P> 
            {cart.delivery_term}개월({cart.delivery_term * 4}주) /
            매주 {cart.delivery_day.map((el:any)=>el)}요일 / 
            {cart.delivery_time} 시
            </P>
          </EachItemBox>
          <EachItemBox>
            <H4>📍 가게 주소</H4>
            <P>서울시 용산구 후암동 123-1233</P>
          </EachItemBox>
          <EachItemBox>
            <H4>📱 가게 연락처</H4>
            <P>070-1231-1232</P>
          </EachItemBox>
          <EachItemBox>
            <H4>✍🏼 요청사항</H4>
            <DetailTextArea 
            defaultValue={cart.delivery_detail}
            readOnly>
            </DetailTextArea>
          </EachItemBox>
        </FlexBox>
        </StoreInfoWrapper>
    </>
  )
}

export default MyStoreInfo
