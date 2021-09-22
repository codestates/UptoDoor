import React from 'react'
import {
  FlexBox,H4,P,
  OrderDate,
  OrderImg,
  OrderSection,
  EachItemBox,
} from '../UserOrderInfo/StyledUserOrderInfo'

function AdminOrderInfo() {
  return (
    <>
      <OrderSection shadow>
        <FlexBox align>
          <OrderImg src="./images/pasta.png" alt="order-img" />
          <div className="order-text-content">
            <EachItemBox>
              <FlexBox between>
                <H4>상품명</H4>
                <OrderDate>2021.09.22</OrderDate>
              </FlexBox>
              <P>로제파스타</P>
              {/* <P lightColorText >스팸 + 에그 +글루텐프리 식빵 + 특제소스</P> */}
            </EachItemBox>
            <EachItemBox>
              <H4>가격/수량</H4>
              <P>14000 원 / 3개</P>
              <P>추가금액 : 2000원</P>
            </EachItemBox>
          </div>
        </FlexBox>
        <EachItemBox>
          <H4>상세정보</H4>
          <P lightColorText>스팸 + 에그 +글루텐프리 식빵 + 특제소스</P>
        </EachItemBox>
      </OrderSection>
    </>
  )
}

export default AdminOrderInfo
