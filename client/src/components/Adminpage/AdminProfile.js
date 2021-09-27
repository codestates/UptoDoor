import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MypageProfileWrapper,
  MypageProfileBtnWrapper,
  ButtonWrapper,
  MypageContent,
  MypageWrapper,
} from "../Mypage/StyledMypage";
import { Container, Title, Wrapper } from "../GlobalStyle";  
import { AdimUl, AdminLi, AdminUlListWrapper } from "./StyledAdminPage";
import AdminOrderList from './AdminOrderList';
import AdminOrderWrapper from '../AdminOrderInfo/AdminOrderWrapper';
import { useSelector } from "react-redux";


function AdminProfile() {
  
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const admin = useSelector((state) => state.admin?.orderdata);
  console.log(admin);
  const { store } = admin;
  const { orders } = store;
  console.log("스토어", store)
  console.log("오더스", orders);
  
  const [currentTab, setCurrentTab] = useState(0);
  const [filteredOrderId, setFilteredOrderId] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const moveDetailHandler = (id) => {
    setFilteredOrderId(id)
  }
  const listbackHandler = () => {
    setFilteredOrderId("");
  }

  const changeList = (id, day) => {
    setCurrentTab(id);
    const filtered = orders.filter((el) => {
      const { delivery_day } = el.order_deliveries[0];
      const deliveryDay = delivery_day.split(",");
      return deliveryDay.includes(day);
    });
    setFilteredData(filtered);
  }

  useEffect(() => {
    console.log("20")
    
    
    //들어오자마자 오늘 날짜 선택
    const day = new Date().getDay();
    const today = days[day];
    const filtered = orders.filter((el) => {
      const { delivery_day } = el.order_deliveries[0];
      const deliveryDay = delivery_day.split(",");
      return deliveryDay.includes(today);
    });
    setCurrentTab(day)
    setFilteredData(filtered);
    
  }, [])

  return (
    <Container>
      <Title>관리자 페이지</Title>
      <Wrapper>
        <MypageWrapper>
          <MypageProfileBtnWrapper>
            <MypageProfileWrapper>
              <MypageContent>
                <h3>안녕하세요. {admin.nickname}님.</h3>
                {admin.title === "" ? (
                  <p>가게를 등록해주세요.</p>
                ) : (
                  <>
                    <h3>{admin.title}</h3>
                    <p>{admin.email}</p>
                    <p>{admin.mobile}</p>
                    <p>{admin.mainAddress}</p>
                    <p>({admin.mainAddressDetail})</p>
                  </>
                )}
              </MypageContent>
              <ButtonWrapper>
                <button type="button">
                  <Link to="/adminedit">내 가게 관리</Link>
                </button>
              </ButtonWrapper>
            </MypageProfileWrapper>
          </MypageProfileBtnWrapper>
          <AdminUlListWrapper>
            <AdimUl>
              {days.map((day, idx) => {
                return (
                  <AdminLi key={day}>
                    <button
                      type="button"
                      onClick={() => {
                        changeList(idx, day);
                      }}
                      className={currentTab === idx ? "focus" : ""}
                    >
                      {day}
                    </button>
                  </AdminLi>
                );
              })}
            </AdimUl>

            {filteredOrderId ? (
              <AdminOrderWrapper
                filteredOrderId={filteredOrderId}
                listbackHandler={listbackHandler}
              />
            ) : (
              <AdminOrderList
                cart={cart}
                user={user}
                moveDetailHandler={moveDetailHandler}
                data={filteredData}
              />
            )}
          </AdminUlListWrapper>
        </MypageWrapper>
      </Wrapper>
    </Container>
  );
}

export default AdminProfile