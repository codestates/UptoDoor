import React from 'react'
import {
  FlexBox,H4,P,
  OrderDate,
  OrderImg,
  OrderSection,
  EachItemBox,
} from './StyledMypage'
import { stringToPrice } from '../../utils/validation';
import {MenuArr} from '../../@type/userInfo'

type IProps = {
  menus: MenuArr[]
}

function MyOrderDetailItem({ menus }: IProps): JSX.Element {
  console.log(menus);
  return (
    <>
      {menus && menus.map((el:any,idx:number)=>{
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
                  <P>{stringToPrice(el.menu.price)}원 / {el.quantity}개</P>
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

export default MyOrderDetailItem
