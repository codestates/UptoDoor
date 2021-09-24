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
  

  const cart = useSelector((state:any) => state.cart);
  const user = useSelector((state:any) => state.user);

  const [filteredOrderId, setFilteredOrderId]=useState("")

  const moveDetailHandler = (id:any) => {
    setFilteredOrderId(id)
  }
  const listbackHandler = () => {
    setFilteredOrderId("");
  }

  //!4주로 바꿔서 계산 다시하기
  const orderDate:any = (term:any) => {
    const getFullDate = new Date();
    let month = getFullDate.getMonth()+1;
    let year = getFullDate.getFullYear();
    //만약 12 가 넘으면 값 -12 해주면됨.
    // if(Number(term)+month >= 12){
    //   return month = month - Number(term)
    // }
    if(term+month > 12) {
      month = month-term;
      year = year+1;
    }
    console.log(typeof term , term)
    console.log('==month==',month)
    
    if(term === 1){
      return `${year}.
      ${month}.
      ${getFullDate.getDate()}`
    }else if(term === 3){
      return `${year}.
      ${month}.
      ${getFullDate.getDate()}`
    }else if(term === 6){
      return `${year}.
      ${month}.
      ${getFullDate.getDate()}`
    }else if(term === 12){
      return `${year+1}.
      ${month}.
      ${getFullDate.getDate()}`
    }else{
      return `${getFullDate.getFullYear()}.
      ${month}.
      ${getFullDate.getDate()}` 
    } 
  }
  orderDate(cart.deliver_term);

  useEffect(() => {
    axios.get(`${END_POINTS}/users/userinfo`)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
    })
  },[])

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
                user.mainAddressDetail === null||
                user.subAddress === null || 
                user.subAddressDetail === null ? 
                <p>동네인증이 필요합니다.</p>
                :
                <>
                <p>{user.mainAddress}</p>
                <p>{user.mainAddressDetail}</p>
                </>
                }
              </MypageContent>
              <ButtonWrapper>
                <button><Link to="/adminpost">가게 등록</Link></button>
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
            orderDate = {orderDate}
            filteredOrderId={filteredOrderId}
            listbackHandler={listbackHandler}
            /> 
            : 
            <MyOrderList 
            cart = {cart}
            orderDate = {orderDate}
            moveDetailHandler={moveDetailHandler} 
            />}

        </MypageWrapper>
      </Wrapper>
    </Container>
  );
}

export default MyProfile
