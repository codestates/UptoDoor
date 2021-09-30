import React from 'react';
import {
  StoreInfoWrapper,
  FlexBox,H3,H4,P,Category,
  DetailTextArea,
  EachItemBox,
} from './StyledMypage';

function MyOrderStore({orderitem}:any) {

  return (
    <>
      <StoreInfoWrapper className="storeinfo-wrapper">
        <FlexBox between>
          <H3>{orderitem.store.name}</H3>
          <Category>{orderitem.store.category}</Category>
        </FlexBox>
          <FlexBox col>
            <EachItemBox>
              <H4>🗓 구독기간</H4>
              {orderitem.state === 'cancel' ? 
              <P cancleline lightColorText> 
              {orderitem.delivery_term}개월({Number(orderitem.delivery_term) * 4}주) /
              매주 {orderitem.delivery_day&&orderitem.delivery_day.map((ele:any)=>ele)} 요일 / 
              {orderitem.delivery_time} 시
              </P>
              :
              <P>
              {orderitem.delivery_term}개월({Number(orderitem.delivery_term * 4)}주) /
              매주 {orderitem.delivery_day&&orderitem.delivery_day.map((ele:any)=>ele)}요일 / 
              {orderitem.delivery_time} 시
              </P>
            }
            </EachItemBox>
            <EachItemBox>
              <H4>📍 가게 주소</H4>
              <P>{orderitem.store.address}</P>
            </EachItemBox>
            <EachItemBox>
              <H4>📱 가게 연락처</H4>
              <P>{orderitem.store.number}</P>
            </EachItemBox>
            <EachItemBox>
              <H4>✍🏼 요청사항</H4>
              <DetailTextArea 
              defaultValue={orderitem.delivery_detail}
              readOnly>
              </DetailTextArea>
            </EachItemBox>
          </FlexBox>
        </StoreInfoWrapper>
    </>
  )
}

export default MyOrderStore
