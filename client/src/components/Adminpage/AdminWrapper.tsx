import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../store/store";
import {
  Container,
  Title,
  Wrapper,
  PageWrapper,
  PageProfileBtnWrapper,
  PageProfileWrapper,
  PageContent,
  PageBtnWrapper,
} from "../GlobalStyle";
import {
  MypageLi,
} from '../Mypage/StyledMypage';
import {
  AdimUl,
  AdminLi,
  AdminUlListWrapper,
  AminpageUl,
} from "./StyledAdminPage";

import AdminOrderList from './AdminOrderList';
import AdminOrderInfo from './AdminOrderInfo';
import AdminStoreInfo from './AdminStoreInfo';


import Auth from '../../hoc/auth'
import Signin from '../common/Signin/SigninModal'
import { Orders } from "../../@type/adminInfo";
import { User } from "../../@type/userInfo";

function AdminWrapper() {
  const admin = useSelector((state:RootReducerType) => state.admin);
  const user:User = useSelector((state: RootReducerType) => state.user);

  console.log("1111", user);
  const store = admin;
  const { orders } = store;
  const [filteredData, setFilteredData] = useState<Array<Orders> | []>([]);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [selectedDay, setSelectedDay] = useState<String>(days[new Date().getDay()]);
  const [currentTab, setCurrentTab] = useState<number>(new Date().getDay());
  const [orderItem, setOrderItem] = useState<Orders | any>({});
  const [cur, setCur] = useState<number>(0);
  const [changeListItem, setChangeListItem] = useState<number>(0);

  //모달
  const [loginModal , setLoginModal] = useState(false);

  const moveDetailHandler = (id:number) => {
    const filtered = filteredData.filter((el:any) => {
      return el.id === id;
    })[0];
    setOrderItem(filtered);
    setCur(1);
  };
  const listbackHandler = () => {
    setOrderItem("");
    setCur(0);
  };

  const changeDayList = (id:any, day:string) => {
    setCur(0);
    setCurrentTab(id);
    setSelectedDay(day);
    const filtered = orders.filter((el:any) => {
      const { delivery_day } = el.order_deliveries;
      const deliveryDay = delivery_day.split(",");
      return deliveryDay.includes(day);
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    setCur(0);
    const filtered = orders.filter((el:any) => {
      const { delivery_day } = el.order_deliveries;
      const deliveryDay = delivery_day.split(",");
      return deliveryDay.includes(selectedDay);
    }); 
    setFilteredData(filtered);
  }, []);
  const listItem = ["주문관리", "가게 정보"];

  useEffect(() => {
    const request = Auth(true);
    if(request === undefined){
      setLoginModal(true);
    }
  },[])

  return (
    <Container>
      <Title>관리자 페이지</Title>
      <Wrapper>
        <PageWrapper>
          <PageProfileBtnWrapper>
            <PageProfileWrapper>
              <PageContent>
                <h3>안녕하세요. {user.nickname}님</h3>
                {admin.name === "" ? (
                  <p>가게를 등록해주세요.</p>
                ) : (
                  <>
                    <h3>{admin.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.mobile}</p>
                    <p>{admin.address}</p>
                    <p>{admin.address_detail === null 
                    ? '' 
                    : (admin.address_detail)}</p>
                  </>
                )}
              </PageContent>
              <PageBtnWrapper>
                <button type="button">
                  <Link to="/adminedit">내 가게 관리</Link>
                </button>
              </PageBtnWrapper>
            </PageProfileWrapper>
            <AminpageUl>
              {listItem.map((list, idx) => {
                return (
                  <MypageLi
                    key={list}
                    onClick={() => {
                      setChangeListItem(idx);
                    }}
                    className={changeListItem === idx ? "focus" : null}
                  >
                    {list}
                  </MypageLi>
                );
              })}
            </AminpageUl>
          </PageProfileBtnWrapper>

          {changeListItem === 1 ? (
            <AdminStoreInfo store={admin} />
          ) : cur === 0 ? (
            <AdminUlListWrapper>
              <AdimUl>
                {days.map((day, idx) => {
                  return (
                    <AdminLi key={day}>
                      <button
                        type="button"
                        onClick={() => {
                          changeDayList(idx, day);
                        }}
                        className={currentTab === idx ? "focus" : ""}
                      >
                        {day}
                      </button>
                    </AdminLi>
                  );
                })}
              </AdimUl>
              <AdminOrderList
                moveDetailHandler={moveDetailHandler}
                data={filteredData}
              />
            </AdminUlListWrapper>
          ) : (
            <AdminUlListWrapper>
              <AdimUl>
                {days.map((day, idx) => {
                  return (
                    <AdminLi key={day}>
                      <button
                        type="button"
                        onClick={() => {
                          changeDayList(idx, day);
                        }}
                        className={currentTab === idx ? "focus" : ""}
                      >
                        {day}
                      </button>
                    </AdminLi>
                  );
                })}
              </AdimUl>
              <AdminOrderInfo
                orderItem={orderItem}
                listbackHandler={listbackHandler}
              />
            </AdminUlListWrapper>
          )}
        </PageWrapper>
      </Wrapper>

      {loginModal ? 
      <Signin
      modalOpen = {loginModal}
      setModalOpen = {setLoginModal}
      request = {Auth(true)===undefined}
      url = '/adminpage'
      />
      :
      null}
    </Container>
  );
}

export default AdminWrapper;