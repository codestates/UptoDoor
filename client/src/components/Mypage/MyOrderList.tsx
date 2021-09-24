import React from 'react'
import { 
  MypageOrderListWrapper,
  OrderListContent,
  ListDate,ListInfo,
  DeliveryState,NextBtn,
  OrderListWrapper } from './StyledMypage';

function MyOrderList({ 
  moveDetailHandler , 
  order, orderDate}:any):any {
  console.log(order);
  
  // console.log('selected_address:',cart.selected_address);

  return (
    <MypageOrderListWrapper>
      {order.length === 0 ?
        <p>구독중인 스토어가 없습니다.</p>
        :
        <>
          {order && order.map((el: any, idx: any) => {
            return (
              <OrderListWrapper key={idx}>
                <OrderListContent>
                  <ListDate>
                    <p>다음 결제일: </p>
                    <h5>{orderDate(el.delivery_term)}</h5>
                  </ListDate>
                  <ListInfo>
                    <DeliveryState blue>{el.state === "order" ? "구독중" : "취소됨"}</DeliveryState>
                    <img src={el.menu[0].menu.image} alt="ordered-img" />
                    <div>
                      <h4>{el.store.name}</h4>
                      <p><span>내용:</span>{el.menu && el.menu.map((el: any) => {
                        return `${el.menu.name}, `
                      })}</p>
                    </div>

                    <NextBtn type="button" onClick={() => { moveDetailHandler("1") }}>
                      <i className="fas fa-angle-double-right"></i>
                    </NextBtn>
                  </ListInfo>
                </OrderListContent>
      
              </OrderListWrapper>
            )
          })}
        </>
      }
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