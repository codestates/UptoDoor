import React from 'react'
import { 
  MypageOrderListWrapper,
  OrderListContent,
  ListDate,ListInfo,
  DeliveryState,NextBtn,
  OrderListWrapper } from './StyledMypage';

function MyOrderList({ 
  moveDetailHandler , 
  order}:any):any {
  console.log(order);

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
                    <h5>{order.nextPayDay}</h5>
                  </ListDate>
                  <ListInfo>

                  {el.state === "order" ? 
                    <DeliveryState blue>구독중</DeliveryState>
                    :
                    <DeliveryState>취소됨</DeliveryState>
                  }
                    <img src={el.menu[0].menu.image} alt="ordered-img" />
                    <div>
                      <h4>{el.store.name}</h4>
                      <p><span>주문메뉴 :</span>
                      {el.menu && el.menu.map((el: any) => {
                        return `${el.menu.name} / `;
                      })}</p>
                    </div>
                    
                    <NextBtn type="button" onClick={() => { moveDetailHandler(el.id) }}>
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
