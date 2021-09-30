import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Container, Title, Wrapper,PageWrapper,PageProfileBtnWrapper ,PageProfileWrapper,PageContent,PageBtnWrapper} from "../GlobalStyle";
import MyOrderWrapper from '../UserOrderInfo/MyOrderWrapper';
import AdminOrderWrapper from '../Adminpage/AdminOrderInfo'
import axios from 'axios';
import { AdminStoreGetData } from '../../_actions/admin_action';
import MyOrderList from './MyOrderList';
// import MyPaymentList from './MyPaymentList';
import { useDispatch} from "react-redux";
import { 
  MypageUl,MypageLi } from './StyledMypage';
import { END_POINTS } from '../../_actions/type';
import { useHistory } from 'react-router-dom';

function MyProfile(): any {
  const dispatch:any = useDispatch();
  const history = useHistory();
  const [user, setUser]: any = useState('')

  const [orderList,setOrderList] = useState([])
  const [orderitem , setOrderItem] = useState({})
  const [cur,setCur] = useState(0)
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
  console.log("asdasdasd", orderitem);
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
            selected_mobile, createdAt, id, delivery_detail } = el.order;
          const detail = delivery_detail.split(",")

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
            delivery_detail:detail[0],plusMoney:detail[1],
            delivery_time,delivery_term,delivery_day:delivery_day_arr,
            menu:order_menus, nextPayDay,
          }
          return final;
        })
        console.log('-====order==',order);
        setOrderList(order);
        setUser(res.data.userdata);
      }).catch((err) => {
        console.log(err);
    })
  },[])

  const moveAdminPage = () => {
    dispatch(AdminStoreGetData()).then((res:any) => {
      if (res.payload.message === "ok") {
        history.push('/adminpage')
      }
  })
  }
  
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
              </PageContent>
              <PageBtnWrapper>
                {user.position === "1"
                  ? (<button onClick={() => { moveAdminPage() }}>관리자 페이지</button>)
                  : (<button><Link to="/adminpost">가게 등록</Link></button>)
                }
                <button><Link to="/mypageedit">프로필 수정</Link></button>
              </PageBtnWrapper>
            </PageProfileWrapper>
            <MypageUl>
              <MypageLi>
                구독관리
              </MypageLi>
            </MypageUl>
            </PageProfileBtnWrapper>

            {cur === 1 ? 
            <MyOrderWrapper 
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
    </Container>
  );
}

export default MyProfile