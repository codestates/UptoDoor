import React from 'react'
import {
  StoreInfoWrapper,
  FlexBox,H3,H4,P,Category,
  DetailTextArea,
  EachItemBox,
} from './StyledUserOrderInfo'

function MyStoreInfo({orderitem}:any) {
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
              {orderitem.state === 'cancel' ? 
              <P cancleline lightColorText> 
              {orderitem.delivery_term}개월({orderitem.delivery_term * 4}주) /
              매주 {orderitem.delivery_day&&orderitem.delivery_day.map((ele:any)=>ele)}요일 / 
              {orderitem.delivery_time} 시
              </P>
              :
              <P>
              {orderitem.delivery_term}개월({orderitem.delivery_term * 4}주) /
              매주 {orderitem.delivery_day&&orderitem.delivery_day.map((ele:any)=>ele)}요일 / 
              {orderitem.delivery_time} 시
              </P>
            }
            </EachItemBox>
            <EachItemBox>
              <H4>📍 가게 주소</H4>
              <P>{orderitem.selected_address}({orderitem.selected_address_detail})</P>
            </EachItemBox>
            <EachItemBox>
              <H4>📱 가게 연락처</H4>
              <P>{orderitem.selected_mobile}</P>
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

export default MyStoreInfo
