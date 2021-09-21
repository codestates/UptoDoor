import React from 'react'
import { 
  MypageOrderListWrapper,
  OrderListContent,
  ListDate,ListInfo,
  DeliveryState,NextBtn,
  OrderListWrapper } from './StyledMypage';

function MyOrderList({ 
  moveDetailHandler , 
  cart, orderDate}:any):any {

  return (
    <MypageOrderListWrapper>
      {cart.menu.map((el:any,idx:any)=>{
        return (
            <OrderListWrapper key = {idx}>
              <OrderListContent>
                <ListDate>
                  <p>다음 결제일: </p>
                  <h5>{orderDate(cart.delivery_term)}</h5>
                </ListDate>
                <ListInfo>
                  {/* {cancle 된 상품이면 ? 
                  <DeliveryState blue>취소됨</DeliveryState> 
                  :
                  <DeliveryState blue>구독중</DeliveryState>} */}
                  <DeliveryState blue>구독중</DeliveryState>
                  <img src ={el.image} alt="ordered-img" />
                  <div>
                    <h4>남산아래</h4>
                    <p><span>내용:</span>{el.detail}</p>
                  </div>
                </ListInfo>
              </OrderListContent>
      
              <NextBtn type="button" onClick={()=>{moveDetailHandler("1")}}>
                <i className="fas fa-angle-double-right"></i>
              </NextBtn>
            </OrderListWrapper>
          )
        })}
    </MypageOrderListWrapper>
  )
}

export default MyOrderList
