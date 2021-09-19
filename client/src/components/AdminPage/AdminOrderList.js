import React from "react";
import {
  MypageOrderListWrapper,
  OrderListContent,
  ListDate,
  ListInfo,
  // DeliveryState,
} from "../Mypage/StyledMypage";
import { PageNumberBtn } from "./StyledAdminPage";

function AdminOrderList() {
  
  return (
    <MypageOrderListWrapper>
      <OrderListContent>
        <ListDate>
          <p>다음 배송일: </p>
          <h5>2021.10.17 </h5>
        </ListDate>
        <ListInfo>
          <img src="./images/toast.png" alt="order" />
          <div>
            <h4>주문자명: 허용준</h4>
            <p>
              <span>내용:</span>스페셜 토스트, 아메리카노
            </p>
            <p>
              <span>배송시간: </span>11:00
            </p>
          </div>
        </ListInfo>
      </OrderListContent>
      <OrderListContent>
        <ListDate>
          <p>다음 결제일: </p>
          <h5>2021.10.17 </h5>
        </ListDate>
        <ListInfo>
          <img src="./images/toast.png" alt="order" />
          <div>
            <h4>남산아래</h4>
            <p>
              <span>내용:</span>스페셜 토스트, 아메리카노
            </p>
          </div>
        </ListInfo>
      </OrderListContent>
      <OrderListContent>
        <ListDate>
          <p>다음 결제일: </p>
          <h5>2021.10.17 </h5>
        </ListDate>
        <ListInfo>
          <img src="./images/toast.png" alt="order" />
          <div>
            <h4>남산아래</h4>
            <p>
              <span>내용:</span>스페셜 토스트, 아메리카노
            </p>
          </div>
        </ListInfo>
      </OrderListContent>
      <OrderListContent>
        <ListDate>
          <p>다음 결제일: </p>
          <h5>2021.10.17 </h5>
        </ListDate>
        <ListInfo>
          <img src="./images/toast.png" alt="order" />
          <div>
            <h4>남산아래</h4>
            <p>
              <span>내용:</span>스페셜 토스트, 아메리카노
            </p>
          </div>
        </ListInfo>
      </OrderListContent>
      <PageNumberBtn>
            -1- 
      </PageNumberBtn>
    </MypageOrderListWrapper>
  );
}

export default AdminOrderList
