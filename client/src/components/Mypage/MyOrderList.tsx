import React from 'react'
import { MypageOrderListWrapper,OrderListContent,ListDate,ListInfo,DeliveryState } from './StyledMypage';


function MyOrderList():any {
  return (
    
    <MypageOrderListWrapper>
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
      <OrderListContent>
        <ListDate>
          <p>다음 결제일: </p><h5>2021.10.17 </h5>
        </ListDate>
        <ListInfo>
          <DeliveryState>취소됨</DeliveryState>
          <img src="./images/toast.png" alt="order" />
          <div>
            <h4>남산아래</h4>
            <p><span>내용:</span>스페셜 토스트, 아메리카노</p>
            
          </div>
           
        </ListInfo>
        
      </OrderListContent><OrderListContent>
        <ListDate>
          <p>다음 결제일: </p><h5>2021.10.17 </h5>
        </ListDate>
        <ListInfo>
           <DeliveryState>취소됨</DeliveryState>
          <img src="./images/toast.png" alt="order" />
          <div>
            <h4>남산아래</h4>
            <p><span>내용:</span>스페셜 토스트, 아메리카노</p>
            
          </div>
            
        </ListInfo>
        
      </OrderListContent><OrderListContent>
        <ListDate>
          <p>다음 결제일: </p><h5>2021.10.17 </h5>
        </ListDate>
        <ListInfo>
          <DeliveryState>취소됨</DeliveryState>
          <img src="./images/toast.png" alt="order" />
          <div>
            <h4>남산아래</h4>
            <p><span>내용:</span>스페셜 토스트, 아메리카노</p>
            
          </div>
            
        </ListInfo>
        
      </OrderListContent>
      
    </MypageOrderListWrapper>
  )
}

export default MyOrderList
