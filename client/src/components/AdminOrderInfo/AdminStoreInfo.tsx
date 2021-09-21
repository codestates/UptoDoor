import React from 'react'
import {
  StoreInfoWrapper,
  FlexBox,H3,H4,P,Category,
  DetailTextArea,
  EachItemBox,
} from '../UserOrderInfo/StyledUserOrderInfo'

function AdminStoreInfo() {
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
            <P>3개월(12주) / 매주 토요일 / 11:00 시</P>
          </EachItemBox>
          <EachItemBox>
            <H4>📍 가게 주소</H4>
            <P>서울시 용산구 후암동 456-633</P>
          </EachItemBox>
          <EachItemBox>
            <H4>📱 가게 연락처</H4>
            <P>070-1231-1232</P>
          </EachItemBox>
          <EachItemBox>
            <H4>✍🏼 요청사항</H4>
            <DetailTextArea 
            defaultValue='소스는 항상많이'
            readOnly>
            </DetailTextArea>
          </EachItemBox>
        </FlexBox>
        </StoreInfoWrapper>
    </>
  )
}

export default AdminStoreInfo
