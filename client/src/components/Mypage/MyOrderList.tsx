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


  // console.log('selected_address:',cart.selected_address);

  return (
    <MypageOrderListWrapper>
      {/* {cart.selected_address === '' ? 
      <p>구독중인 스토어가 없습니다.</p>
      : */}
        <>
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

              <NextBtn type="button" onClick={()=>{moveDetailHandler("1")}}>
                <i className="fas fa-angle-double-right"></i>
              </NextBtn>
                </ListInfo>
              </OrderListContent>
      
            </OrderListWrapper>
          )
        })}
        </>
      {/* } */}
    </MypageOrderListWrapper>
  )
}

export default MyOrderList

{/* <MypageOrderListWrapper>
<OrderListWrapper>
<OrderListContent>
  
  <ListDate>
    <p>다음 결제일: </p><h5>2021.10.17 </h5>
    
  </ListDate>
  <ListInfo>
    <DeliveryState blue>구독중</DeliveryState>
    <img src="./images/toast.png" alt="order" />
    <div>
      <h4>남산아래</h4>
      <p><span>내용:</span>스페셜 토스트, 아메리카노</p>
      
    </div>
    
  </ListInfo>
  </OrderListContent>
  <NextBtn type="button" onClick={()=>{moveDetailHandler("1")}}>
    <i className="fas fa-angle-double-right"></i>
  </NextBtn>
</OrderListWrapper>

<OrderListWrapper>
<OrderListContent>
  
  <ListDate>
    <p>다음 결제일: </p><h5>2021.10.17 </h5>
    
  </ListDate>
  <ListInfo>
    <DeliveryState blue>구독중</DeliveryState>
    <img src="./images/toast.png" alt="order" />
    <div>
      <h4>남산아래</h4>
      <p><span>내용:</span>스페셜 토스트, 아메리카노</p>
      
    </div>
    
  </ListInfo>
  </OrderListContent>
  <NextBtn type="button" onClick={()=>{moveDetailHandler("2")}}>
    <i className="fas fa-angle-double-right"></i>
  </NextBtn>
</OrderListWrapper>
<OrderListWrapper>
<OrderListContent>
  
  <ListDate>
    <p>다음 결제일: </p><h5>2021.10.17 </h5>
    
  </ListDate>
  <ListInfo>
    <DeliveryState >취소됨</DeliveryState>
    <img src="./images/toast.png" alt="order" />
    <div>
      <h4>남산아래</h4>
      <p><span>내용:</span>스페셜 토스트, 아메리카노</p>
      
    </div>
    
  </ListInfo>
  </OrderListContent>
  <NextBtn type="button" onClick={()=>{moveDetailHandler("3")}}>
    <i className="fas fa-angle-double-right"></i>
  </NextBtn>
</OrderListWrapper>

</MypageOrderListWrapper> */}