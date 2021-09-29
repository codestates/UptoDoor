import React,{useState} from "react";
import {
  MypageOrderListWrapper,
  OrderListContent,OrderListWrapper
} from "../Mypage/StyledMypage";
import { PageNumberWrapper,OrderListInfoP,DeliveryTime,OrderListInfo } from './StyledAdminPage'
import {ArrowBtn ,NextBtn } from '../common/Button/Button'

function AdminOrderList({
  moveDetailHandler, data,selectedDay }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  
  console.log("ㅁㄴㅇㅁㄴ", data)
  for (let i = 0; i < data.length-1; i++){
    

    for (let j = 1; j < data.length; j++) {
      const hour1 = Number(data[i].order_deliveries[0].delivery_time.split(":")[0])
      const min1 = Number(data[i].order_deliveries[0].delivery_time.split(":")[1])
      const hour2 = Number(data[i].order_deliveries[0].delivery_time.split(":")[0])
      const min2 = Number(data[i].order_deliveries[0].delivery_time.split(":")[1])

      if(hour1 < hour2 ){}
    }
  }
  
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts =( tmp:any ) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const posts: any = currentPosts(data);
  return (
    <MypageOrderListWrapper>
      {posts.map((el:any,idx:any)=>{
        return (
          <OrderListWrapper key = {idx}>
            <OrderListContent>
              <OrderListInfo>
                <div>
                  {/* <div>{idx + 1}번째 주문</div> */}
                  <h5>주문자명: {el.user_name}</h5>
                  <h5>{el.selected_address}{" "}{el.selected_address_detail }</h5>
                  <OrderListInfoP><span>주문 내용:</span>{" "}{el.order_menus.map((el1:any) => {
                    return `${el1.menu.name} ${el1.quantity}개, ${" "}`
                  })}</OrderListInfoP>
                  </div>
                <DeliveryTime >
                    배송시간: {el.order_deliveries[0].delivery_time}
                </DeliveryTime>  
            <NextBtn type="button" 
            onClick={()=>{moveDetailHandler(el.id)}}>
              <ArrowBtn className="fas fa-angle-double-right" ></ArrowBtn>            
            </NextBtn>
            </OrderListInfo>
            </OrderListContent>
        </OrderListWrapper>
          )
        })}

      <PageNumberWrapper>

        {pageNumbers.map(number => {
          return (
            <li key={number} onClick={() => {setCurrentPage(number) }}>
              {number}
                </li>
              )
            })}
      </PageNumberWrapper>
    </MypageOrderListWrapper>
  );
}

export default AdminOrderList