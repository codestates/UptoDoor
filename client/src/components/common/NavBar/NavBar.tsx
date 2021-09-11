import React from 'react'
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

interface Iprops {
  sidebarToggle: any;
}

function NavBar({ sidebarToggle }:Iprops) {
  return (
    <Header>
      <NavWrapper>
        {/* 로고 */}
        <NavLogo to="/">UptoDoor</NavLogo>

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
          onClick={sidebarToggle}
          type="button"
          aria-label="메뉴 열기 버튼"
        >
          <i className="fas fa-bars"></i>
        </IconButton>
        <MiddleButton type="button" aria-label="회원가입">
          <BtnLink to="/login">로그인</BtnLink>
        </MiddleButton>
        <MiddleButton type="button" aria-label="회원가입">
          <BtnLink to="/signup">회원가입</BtnLink>
        </MiddleButton>
      </ButtonWrapper>
    </Header>
  );
}

export default NavBar
