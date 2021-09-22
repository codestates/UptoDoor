import React, {
  useState
} from 'react'
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

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  
  const [currentTab, setCurrentTab] = useState(0);
  const [filteredOrderId, setFilteredOrderId]=useState("")
  
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const moveDetailHandler = (id) => {
    setFilteredOrderId(id)
  }
  const listbackHandler = () => {
    setFilteredOrderId("");
  }

  return (
    <Container>
      <Title>관리자 페이지</Title>
      <Wrapper>
        <MypageWrapper>
          <MypageProfileBtnWrapper>
            <MypageProfileWrapper>
              <MypageContent>
                <h3>
                  용준이네<span>(허용준)</span>
                </h3>
                <p>dydwns2441@naver.com</p>
                <p>서울시 용산구 신흥로 32길 4-33</p>
                <p>(용산동2가)</p>
              </MypageContent>
              <ButtonWrapper>
                <button type="button">
                  <Link to="/adminpageedit">내 가게 관리</Link>
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
                      onClick={() => {setCurrentTab(idx);}}
                      className={currentTab === idx ? "focus" : ""}
                    >
                      {day}
                    </button>
                  </AdminLi>
                );
              })}
            </AdimUl>

            {filteredOrderId ? 
            <AdminOrderWrapper
            filteredOrderId = {filteredOrderId}
            listbackHandler = {listbackHandler}
            />
            :
            <AdminOrderList 
            cart = {cart}
            user = {user}
            moveDetailHandler = {moveDetailHandler}
            />
            }

          </AdminUlListWrapper>
        </MypageWrapper>
      </Wrapper>
    </Container>
  );
}

export default AdminProfile
