import React from 'react';
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  // SideBtnWrapper,
  Logo,
  User,
} from "./StyledSideBar";

interface Iprops {
  sidebarToggle: any;
  isOpen: boolean;
}

const SideBar = ({ sidebarToggle, isOpen }:Iprops ) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick = { sidebarToggle } >
      <SidebarWrapper>
        <Icon onClick={sidebarToggle}>
          <i className="fas fa-times"></i>
        </Icon>
        <Logo>UptoDoor</Logo>
        <User to="/signin">로그인(닉네임)</User>
        <SidebarMenu>
          <SidebarLink to="/mapper">구독찾기</SidebarLink>
          <SidebarLink to="/address">동네인증</SidebarLink>
          <SidebarLink to="mypage">마이페이지</SidebarLink>
          <SidebarLink to="/signup">회원가입(굳이?)</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar
