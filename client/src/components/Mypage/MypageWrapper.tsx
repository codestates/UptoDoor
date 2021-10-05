import React,{useEffect, useState} from 'react'
import { Link ,useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";

import { 
  ButtonWrapper, 
  MypageUl,MypageLi } from './StyledMypage'
import { 
  Container,Title, Wrapper,
  PageWrapper,PageProfileBtnWrapper,
  PageProfileWrapper,PageContent,
} from "../GlobalStyle";

import { AdminStoreGetData } from '../../_actions/admin_action';
import { END_POINTS } from '../../_actions/type';
import axios from 'axios';
import MyOrderDetail from './MyOrderDetail';
import MyOrderList from './MyOrderList';

import Auth from '../../hoc/auth'
import Signin from '../common/Signin/SigninModal'

function MyProfileWrapper(): any {
  const dispatch:any = useDispatch();
  const history = useHistory();
  const [user, setUser]: any = useState('')
  const [orderList,setOrderList] = useState([])
  const [orderitem , setOrderItem] = useState({})
  const [cur,setCur] = useState(0)
  const [loginModal , setLoginModal] = useState(false);

  const moveDetailHandler = (id:any) => {
    const filtered = orderList.filter((el:any)=>{
      return el.id === id
    })[0]
    setOrderItem(filtered);
    setCur(1);
  }
  const listbackHandler = () => {
    setOrderItem('');
    setCur(0);
  }
  useEffect(() => {
    setCur(0);
    setOrderItem({});

    axios.get(`${END_POINTS}/users/userinfo`)
      .then((res) => {
        const order = res.data.userdata.user_orders.map((el:any) => {
          const { delivery_day, delivery_term, delivery_time } = el.order.order_deliveries[0];
          const { 
            state, totalprice, order_menus, store, user_name, 
            selected_address, selected_address_detail, 
            selected_mobile, createdAt, id, delivery_detail,plus_money } = el.order;

          const year = Number(createdAt.split('-')[0]);
          const month = Number(createdAt.split('-')[1]);
          const day = Number(createdAt.split('T')[0].split('-')[2]);
          const date = new Date(year, month, day)
          date.toLocaleString();
          date.setDate(date.getDate()+28)
          const newYear = date.getFullYear();
          const newMonth = date.getMonth();
          const newDay = String(date).split(' ')[2];
          const nextPayDay = `${newYear}.${newMonth}.${newDay}`

          let delivery_day_arr 
          if(delivery_day.length > 1){
            delivery_day_arr = delivery_day.split(',')
          }else{
            delivery_day_arr = [delivery_day]
          } 

          const final = {
            id,state,user_name,totalprice,
            store,selected_address,selected_address_detail,
            selected_mobile,createdAt,
            delivery_detail,plusMoney:plus_money,
            delivery_time,delivery_term,delivery_day:delivery_day_arr,
            menu:order_menus, nextPayDay,
          }
          return final;
        })
        setOrderList(order);
        setUser(res.data.userdata);
      }).catch((err) => {
        console.log(err);
    })
  },[])

  const moveAdminPageHandler = () => {
    dispatch(AdminStoreGetData())
    .then((res:any) => {
      if (res.payload.message === "ok") {
        history.push('/adminpage')
      }
    })
  }

  useEffect(() => {
    const request = Auth(true);
    if(request === undefined){
      setLoginModal(true);
    }
  },[])
  
  return (
    <Container>
      <Title>프로필</Title>
      <Wrapper>
        <PageWrapper>
          <PageProfileBtnWrapper>
            <PageProfileWrapper>
              <PageContent>
                <h3>안녕하세요. {user.nickname}님</h3>
                <p>{user.email}</p>
                {
                user.mainAddress &&
                user.mainAddressDetail 
                    ?
                    <>
                <p>{user.mainAddress}</p>
                <p>{user.mainAddressDetail}</p>
                    </>
                    :
                    user.subAddress &&
                    user.subAddressDetail
                      ?
                      <>
                <p>{user.subAddress}</p>
                <p>{user.subAddressDetail}</p>
                    </>
                      :
                <p>동네인증이 필요합니다.</p>
                }
              </PageContent>
              <ButtonWrapper>
                {user.position === "1" ? 
                <button onClick={moveAdminPageHandler}>관리자 페이지
                </button>
                : 
                <button><Link to="/adminpost">가게 등록</Link>
                </button>}
                <button><Link to="/mypageedit">프로필 수정</Link>
                </button>
              </ButtonWrapper>
            </PageProfileWrapper>
            <MypageUl>
              <MypageLi>
                구독관리
              </MypageLi>
            </MypageUl>
          </PageProfileBtnWrapper>

            {cur === 1 ? 
            <MyOrderDetail 
            user= {user}
            orderitem = {orderitem}
            listbackHandler={listbackHandler}
            /> 
            : 
            <MyOrderList 
            order={orderList}
            moveDetailHandler={moveDetailHandler} 
            />}

        </PageWrapper>
      </Wrapper>
    
    {loginModal ? 
    <Signin
    modalOpen = {loginModal}
    setModalOpen = {setLoginModal}
    request = {Auth(true)===undefined}
    url = '/mypage'
    />
    :
    null}
    </Container>
  );
}

export default MyProfileWrapper