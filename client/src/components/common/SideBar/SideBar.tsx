import React, { useState } from 'react';
import SigninModal from '../Signin/SigninModal';
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  Logo,
  User,
} from "./StyledSideBar";

interface Iprops {
  setIsOpen: any;
  isOpen: boolean;
}

const SideBar = ({ setIsOpen, isOpen }: Iprops) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen} >
      <SidebarWrapper>
        <Icon onClick={()=>{setIsOpen(false)}}>
          <i className="fas fa-times"></i>
        </Icon>
        <Logo>UptoDoor</Logo>
        <User onClick={() => {
          setModalOpen(true);
        }}>로그인(닉네임)</User>
        <SidebarMenu>
          <SidebarLink to="/mapper" onClick={()=>{setIsOpen(false)}}>구독찾기</SidebarLink>
          <SidebarLink to="/address" onClick={()=>{setIsOpen(false)}}>동네인증</SidebarLink>
          <SidebarLink to="mypage" onClick={()=>{setIsOpen(false)}}>마이페이지</SidebarLink>
          <SidebarLink to="/signup" onClick={()=>{setIsOpen(false)}}>회원가입(굳이?)</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      {modalOpen ? <SigninModal setIsOpen={setIsOpen} modalOpen={modalOpen} setModalOpen={setModalOpen} /> : null}
    </SidebarContainer>
  );
};

export default SideBar
