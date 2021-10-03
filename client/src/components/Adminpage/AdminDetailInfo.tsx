import React from 'react'
import {
  StoreInfoWrapper,
  FlexBox,H4,P,
  DetailTextArea,
  EachItemBox,
} from '../Mypage/StyledMypage'

interface Iprops {
  userMobile: string;
  userAddress: string;
  deliveryInfo: any;
  detailInfo: string;
}

function AdminDetailInfo({ 
  userMobile,userAddress,
  deliveryInfo,detailInfo}: Iprops) {

    console.log('detailInfo=========',detailInfo,userMobile)
  return (
    <>
      <StoreInfoWrapper className="storeinfo-wrapper">
        <FlexBox col>
          <EachItemBox>
            <H4>🗓 구독기간</H4>
            <P>{deliveryInfo.delivery_term}개월({Number(deliveryInfo.delivery_term) * 4}주) / 매주 {deliveryInfo.delivery_day}요일 / {deliveryInfo.delivery_time}</P>
          </EachItemBox>
          <EachItemBox>
            <H4>📍 고객 주소</H4>
            <P>{userAddress }</P>
          </EachItemBox>
          <EachItemBox>
            <H4>📱 고객 연락처</H4>
            <P>{userMobile}</P>
          </EachItemBox>
          <EachItemBox>
            <H4>✍🏼 요청사항</H4>
            <DetailTextArea 
              defaultValue={detailInfo}
            readOnly>
            </DetailTextArea>
          </EachItemBox>
        </FlexBox>
        </StoreInfoWrapper>
    </>
  )
}

export default AdminDetailInfo
