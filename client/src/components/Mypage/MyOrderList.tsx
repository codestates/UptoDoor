import React from 'react'
import { MypageOrderListWrapper,OrderListContent,ListDate,ListInfo,DeliveryState,NextBtn,OrderListWrapper } from './StyledMypage';


function MyOrderList({ moveDetailHandler}:any):any {
  return (
    
    <MypageOrderListWrapper>
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
          <i className="fas fa-chevron-right"></i>
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
          <i className="fas fa-chevron-right"></i>
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
          <i className="fas fa-chevron-right"></i>
        </NextBtn>
      </OrderListWrapper>
      
    </MypageOrderListWrapper>
  )
}

export default MyOrderList
