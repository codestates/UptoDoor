import React from 'react'
import {
  FlexBox,H4,P,
  OrderDate,
  OrderImg,
  OrderSection,
  EachItemBox,
} from './StyledMyPage'

function MyOrderItem({orderitem}:any) {

  return (
    <>
      {orderitem.menu && orderitem.menu.map((el:any,idx:any)=>{
        return (
          <OrderSection key = {idx} shadow >

            <FlexBox align>
              <OrderImg 
              src={el.menu.image} 
              alt="order-img" />

              <div className="order-text-content">
                <EachItemBox>
                  <FlexBox between>
                    <H4>상품명</H4>
                    <OrderDate>{}</OrderDate>
                  </FlexBox>
                  <P>{el.menu.name}</P>
                </EachItemBox>
                
                <EachItemBox>
                  <H4>가격/수량</H4>
                  <P>{el.menu.price}원 / {el.menu.quantity}개</P>
                </EachItemBox>
              </div>

            </FlexBox>

            <EachItemBox>
              <H4>상세정보</H4>
              <P lightColorText>{el.menu.detail}</P>
            </EachItemBox>
            
          </OrderSection>
        )
      })}
      
    </>
  )
}

export default MyOrderItem
