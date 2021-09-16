import React,{useState } from 'react'
import SideBar from '../SideBar/SideBar';
import Signin from '../Signin/SigninModal';

import {
  Header,
  Nav,
  ButtonWrapper,
  NavLogo,
  ListLink,
  NavWrapper,
  MiddleButton,
  IconButton,
  BtnLink,
} from "./StyledNavBar";


function NavBar() {
  //사이드바 모달창
  const [isOpen, setIsOpen] = useState(false);
  //로그인 모달
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Header>
      <NavWrapper>
        {/* 로고 */}
        <NavLogo to="/"> 
          <img src="./images/updodoor.png" alt="s" style={{
            width: "150px", height: "35px"}} />
        
        </NavLogo> 
    
        {/* nav */}
        <Nav>
          <h2 className="visually-hidden">메뉴</h2>
          <ul>
            <li>
              <ListLink to="/mapper">구독찾기</ListLink>
            </li>
            <li>
              <ListLink to="/address">동네인증</ListLink>
            </li>
            <li>
              <ListLink to="/mypage">마이페이지</ListLink>
            </li>
          </ul>
        </Nav>
      </NavWrapper>
      <ButtonWrapper>
        {/* 알림 버튼 */}
        <IconButton type="button" aria-label="알림 버튼">
          <i className="far fa-bell"></i>
        </IconButton>
        {/* 메뉴 버튼 */}
        <IconButton
          onClick={() => { setIsOpen(true) }}
          type="button"
          aria-label="메뉴 열기 버튼"
        >
          <i className="fas fa-bars"></i>
        </IconButton>
        <MiddleButton type="button" aria-label="로그인"
        onClick={()=>{setModalOpen(true)}}
        >
          로그인
        </MiddleButton>
        <MiddleButton type="button" aria-label="회원가입">
          <BtnLink to="/signup">회원가입</BtnLink>
        </MiddleButton>
      </ButtonWrapper>
      <SideBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Signin setIsOpen={setIsOpen} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Header>
  );
}

export default NavBar
