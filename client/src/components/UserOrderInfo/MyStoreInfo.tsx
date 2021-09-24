import React from 'react'
import {
  StoreInfoWrapper,
  FlexBox,H3,H4,P,Category,
  DetailTextArea,
  EachItemBox,
} from './StyledUserOrderInfo'

import { useSelector } from "react-redux";

function MyStoreInfo({order,user}:any) {

  const cart = useSelector((state:any) => state.cart);
  const admin = useSelector((state:any) => state.admin);
  console.log(cart);
  console.log(admin);

  console.log('가게정보스토어정보 : ',order)
  // console.log('주문한유저정보 : ',user.user_orders.map((el:any)=>el.order_id))
  const userOrderId = user.user_orders.map((el:any)=>el.order_id)
  console.log('주문한유저정보 : ',userOrderId);

  return (
    <>
      <StoreInfoWrapper className="storeinfo-wrapper">
        <FlexBox between>
          <H3>남산 아래</H3>
          <Category>Food</Category>
        </FlexBox>
        {/* 오더아이디와 유저아이디가 같을경우에만 필터링 걸러서 매핑하기 */}
        {order && order.map((el: any, idx: any) => {
            return (
              <FlexBox col key = {idx}>
                <EachItemBox>
                  <H4>🗓 구독기간</H4>
                  <P> 
                  {el.delivery_term}개월({el.delivery_term * 4}주) /
                  매주 {el.delivery_day&&el.delivery_day.map((ele:any)=>ele)}요일 / 
                  {el.delivery_time} 시
                  </P>
                </EachItemBox>
                <EachItemBox>
                  <H4>📍 가게 주소</H4>
                  <P>{el.selected_address}({el.selected_address_detail})</P>
                </EachItemBox>
                <EachItemBox>
                  <H4>📱 가게 연락처</H4>
                  <P>{el.selected_mobile}</P>
                </EachItemBox>
                <EachItemBox>
                  <H4>✍🏼 요청사항</H4>
                  <DetailTextArea 
                  defaultValue={el.delivery_detail}
                  readOnly>
                  </DetailTextArea>
                </EachItemBox>
              </FlexBox>
            )
          })}
        </StoreInfoWrapper>
    </>
  )
}

export default MyStoreInfo
