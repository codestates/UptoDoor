import React from 'react'
import {
  FlexBox,H4,P,
  OrderDate,
  OrderImg,
  OrderSection,
  EachItemBox,
} from './StyledUserOrderInfo'

import { useSelector } from "react-redux";

function MyOrderInfo({orderDate,order}:any) {

  const cart = useSelector((state:any) => state.cart);
  console.log('오더인포의 : ',order)

  return (
    <>
      {cart.menu.map((el:any,idx:any)=>{
        return (
          <OrderSection key = {idx} shadow>
            <FlexBox align>
              <OrderImg src={el.image} alt="order-img" />
              <div className="order-text-content">
                <EachItemBox>
                  <FlexBox between>
                    <H4>상품명</H4>
                    <OrderDate>{orderDate()}</OrderDate>
                  </FlexBox>
                  <P>{el.name}</P>
                </EachItemBox>
                <EachItemBox>
                  <H4>가격/수량</H4>
                  <P>{el.price}원 / {el.quantity}개</P>
                </EachItemBox>
              </div>
            </FlexBox>
            <EachItemBox>
              <H4>상세정보</H4>
              <P lightColorText>{el.detail}</P>
            </EachItemBox>
          </OrderSection>
        )
      })}
      
    </>
  )
}

export default MyOrderInfo
