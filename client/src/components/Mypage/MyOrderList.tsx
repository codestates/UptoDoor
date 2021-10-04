import React from 'react';
import { 
  MypageOrderListWrapper,
  OrderListContent,
  ListDate,ListInfo,
  DeliveryState,EmptyStore,
  OrderListWrapper,ListInfoDetail } from './StyledMypage';
import {NextBtn,ArrowBtn} from '../common/Button/Button';
import {removeLastStr} from '../../utils/validation'
import {Orders} from './MypageWrapper'

interface IProps {
  moveDetailHandler: (id: number) => void;
  orderList: Orders[];
}

function MyOrderList({ moveDetailHandler , orderList}:IProps): JSX.Element{
  return (
    <MypageOrderListWrapper>
      {orderList.length === 0 ?
        <EmptyStore>
          <i className="fas fa-store-alt-slash"></i>
          <p>구독중인 스토어가 없습니다.</p>
        </EmptyStore>
        :
        <>
          {orderList && orderList.map((el: any, idx: number) => {
          return (
            <OrderListWrapper key={idx}>
              <OrderListContent>
                <ListDate>
                  <p>다음 결제일: </p>
                  <h5>{el.nextPayDay}</h5>
                </ListDate>
                <ListInfo>
                  {el.state === 'order' ? 
                  <DeliveryState blue>구독중</DeliveryState>
                    : el.state === 'canceling' ?
                      <DeliveryState blue>취소예정</DeliveryState>
                    : el.state === 'cancel' ?
                      <DeliveryState>취소됨</DeliveryState>
                        : <DeliveryState>기간만료</DeliveryState>
                  }
                  <img 
                  src={el.menu[0].menu.image} 
                  alt="ordered-img" />
                  <ListInfoDetail>
                    <h4>{el.store.name}</h4>
                    <p><span>주문메뉴: </span>
                      {removeLastStr(
                        el.menu.map((el: any) => {
                          return ` ${el.menu.name}  `;
                        }).join(",")
                      )}
                    </p>
                  </ListInfoDetail>
                    
                  <NextBtn 
                  type='button' 
                  onClick={() => { moveDetailHandler(el.id) }}>
                    <ArrowBtn className="fas fa-angle-double-right">
                    </ArrowBtn>
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
