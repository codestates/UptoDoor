import React from "react";
import {
  MypageOrderListWrapper,
  OrderListContent,
  ListDate,
  ListInfo,
  // DeliveryState,
} from "../Mypage/StyledMypage";
import { PageNumberBtn } from "./StyledAdminPage";
import {OrderListWrapper} from '../Mypage/StyledMypage'
import {ArrowBtn} from '../common/Button/Button'

function AdminOrderList({
  moveDetailHandler,user,cart}:any) {

  return (
    <MypageOrderListWrapper>
      {cart.menu.map((el:any,idx:any)=>{
        return (
          <OrderListWrapper key = {idx}>
            <OrderListContent>
              <ListDate>
                <p>다음 배송일: </p>
                <h5>2021.10.17 </h5>
              </ListDate>
    
              <ListInfo>
                <img src={el.image} alt="order-img" />
                <div>
                  <h4>주문자명: {user.name}</h4>
                  <p><span>내용:</span>{el.detail}</p>
                  <p><span>배송시간: </span>{cart.delivery_time}</p>
                </div>
            </ListInfo>
          </OrderListContent>
    
            <ArrowBtn 
            className="fas fa-angle-double-right"
            type="button" onClick={()=>{moveDetailHandler(el.id)}}
            ></ArrowBtn>
        </OrderListWrapper>
          )
        })}

      <PageNumberBtn>
            -1- 
      </PageNumberBtn>
    </MypageOrderListWrapper>
  );
}

export default AdminOrderList
