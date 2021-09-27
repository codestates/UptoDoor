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
import { useDispatch, useSelector } from "react-redux";
import { getAdminData } from '../../_actions/post_action';

function AdminProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const admin = useSelector((state) => state.admin.orderdata);
  console.log(admin);
  const { store } = admin;
  const { orders } = store;
  console.log("스토어", store)
  console.log("오더스", orders);
  
  const [currentTab, setCurrentTab] = useState(0);
  const [filteredOrderId, setFilteredOrderId]=useState("")
  
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const moveDetailHandler = (id, day) => {
    
    setFilteredOrderId(id)

  }
  const listbackHandler = () => {
    setFilteredOrderId("");
  }

  useEffect(() => {
    dispatch(getAdminData()).then((res) => {
      console.log("ㅇㅓ드민인포데이터",res)
    })
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
                        setCurrentTab(idx,day);
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
              />
            )}
          </AdminUlListWrapper>
        </MypageWrapper>
      </Wrapper>
    </Container>
  );
}

export default AdminProfile