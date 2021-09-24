import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Container, Title, Wrapper } from "../GlobalStyle";
import MyOrderWrapper from '../UserOrderInfo/MyOrderWrapper';
import AdminOrderWrapper from '../AdminOrderInfo/AdminOrderWrapper'
import axios from 'axios';

import MyOrderList from './MyOrderList';
// import MyPaymentList from './MyPaymentList';
import { 
  ButtonWrapper, 
  MypageWrapper,MypageContent,
  MypageProfileWrapper,
  MypageProfileBtnWrapper,
  MypageUl,MypageLi } from './StyledMypage';
import { useSelector } from "react-redux";
import { END_POINTS } from '../../_actions/type';

function MyProfile(): any {
  const [user,setUser]:any = useState('')
  const [orderList,setOrderList] = useState('')
  const cart = useSelector((state:any) => state.cart);
  const [filteredOrderId, setFilteredOrderId]=useState("")

  const moveDetailHandler = (id:any) => {
    setFilteredOrderId(id)
  }
  const listbackHandler = () => {
    setFilteredOrderId("");
  }

  useEffect(() => {
    axios.get(`${END_POINTS}/users/userinfo`)
      .then((res) => {
        const order = res.data.userdata.user_orders.map((el:any) => {
          const { delivery_day, delivery_term, delivery_time } = el.order.order_deliveries;
          const { 
            state, totalprice, order_menus, store, user_name, 
            selected_address, selected_address_detail, 
            selected_mobile, createdAt, id, delivery_detail } = el.order;
          const detail = delivery_detail.split(",")

          const year = Number(createdAt.split('-')[0]);
          const month = Number(createdAt.split('-')[1]);
          const day = Number(createdAt.split('T')[0].split('-')[2]);

          console.log('year===',year);
          console.log('month===',month-1);
          console.log('day===',day);
      
          const date = new Date(year, month-1, day).toLocaleString;
          console.log(date)
          date.setDate(date.getDate()+28)

          const final = {
            id,state,user_name,totalprice,
            store,selected_address,selected_address_detail,
            selected_mobile,createdAt,
            delivery_detail:detail[0],plusMoney:detail[1],
            delivery_time,delivery_term,delivery_day,menu:order_menus, 
          }
          return final;
        })
        setOrderList(order);
        setUser(res.data.userdata);
      }).catch((err) => {
        console.log(err);
    })
  },[])

  // const date = new Date(2021, 10, 10 ).toLocaleString;
  //         console.log(date)
  //         date.setDate(date.getDate()+28)

  const orderDate:any = (delivery_term:any ) => {
    //주 수 계산은 년,월,일 따로구해야함. aㅏ.....몬하겠어 이거......
    
    // date.setDate(date.getDate()+28);
    // if(delivery_term === 1){
    //   return orderDate.setDate(orderDate.getDate()+28);
    // }else if(delivery_term === 3){
    //   return orderDate.setDate(orderDate.getDate()+84);
    // }else if(delivery_term === 6){
    //   return orderDate.setDate(orderDate.getDate()+168);
    // }else if(delivery_term === 12){
    //   return orderDate.setDate(orderDate.getDate()+336);
    // }else{
    //   return orderDate
    // }
              
}
  orderDate(cart.deliver_term);

  return (
    <Container>
      <Title>프로필</Title>
      <Wrapper>
        <MypageWrapper>
          <MypageProfileBtnWrapper>
            <MypageProfileWrapper>
              <MypageContent>
                <h3>안녕하세요. {user.name}님</h3>
                <p>{user.email}</p>
                {
                user.mainAddress === null || 
                user.mainAddressDetail === null
                ?
                <p>동네인증이 필요합니다.</p>
                :
                <>
                <p>{user.mainAddress}</p>
                <p>{user.mainAddressDetail}</p>
                </>
                }
                {/* {
                user.subAddress === null || 
                user.subAddressDetail === null
                ?
                <p>동네인증이 필요합니다.</p>
                :
                <>
                <p>{user.subAddress}</p>
                <p>{user.msubAddressDetail}</p>
                </>
                } */}
              </MypageContent>
              <ButtonWrapper>
                {user.position === "1" ?
                  (<button><Link to="/adminedit">가게 관리</Link></button>) :
                  (<button><Link to="/adminpost">가게 등록</Link></button>)
                }
                <button><Link to="/mypageedit">프로필 수정</Link></button>
              </ButtonWrapper>
            </MypageProfileWrapper>
            <MypageUl>
              <MypageLi>
                구독관리
              </MypageLi>
            </MypageUl>
            
            </MypageProfileBtnWrapper>
            {filteredOrderId ? 
            <MyOrderWrapper 
            cart = {cart}
            user= {user}
            order = {orderList}
            orderDate = {orderDate}
            filteredOrderId={filteredOrderId}
            listbackHandler={listbackHandler}
            /> 
            : 
            <MyOrderList 
            order={orderList}
            orderDate = {orderDate}
            moveDetailHandler={moveDetailHandler} 
            />}

        </MypageWrapper>
      </Wrapper>
    </Container>
  );
}

export default MyProfile
