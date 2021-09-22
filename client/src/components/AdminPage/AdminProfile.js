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
  const admin = useSelector((state) => state.admin);
  
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
                <h3>안녕하세요. {user.name}님.</h3>
                {admin.title === '' ? 
                <p>가게를 등록해주세요.</p>
                :
                <>
                <h3>{admin.title}</h3>
                <p>{user.email}</p>
                <p>{admin.mobile}</p>
                <p>{admin.adminAddress}</p>
                <p>({admin.adminAddressDetail})</p>
                </>
                }
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
