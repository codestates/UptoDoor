import React, { useState } from 'react';
import SigninModal from '../Signin/SigninModal';
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  Logo,
  User,SidebarBtn
} from "./StyledSideBar";
import { useSelector } from 'react-redux';
interface Iprops {
  setIsOpen: any;
  isOpen: boolean;
  signoutHandler: any;
}

const SideBar = ({ setIsOpen, isOpen,signoutHandler }: Iprops):any => {
const state = useSelector((state) => state)
  const { user }: any = state;
  const { message,name } = user;

  const [modalOpen, setModalOpen] = useState(false);

  

  return (
    <SidebarContainer isOpen={isOpen} >
      <SidebarWrapper>
        <Icon onClick={()=>{setIsOpen(false)}}>
          <i className="fas fa-times"></i>
        </Icon>
        <Logo>UptoDoor</Logo>
        {message ===undefined ? <User onClick={() => {
          setModalOpen(true);
        }}>로그인(닉네임)</User> : <User>{name}</User>}
        
        <SidebarMenu>
          <SidebarLink to="/mapper" onClick={()=>{setIsOpen(false)}}>구독찾기</SidebarLink>
          <SidebarLink to="/address" onClick={()=>{setIsOpen(false)}}>동네인증</SidebarLink>
          <SidebarLink to="mypage" onClick={() => { setIsOpen(false) }}>마이페이지</SidebarLink>
          {message === undefined ? <SidebarLink to="/signup" onClick={() => { setIsOpen(false) }}>회원가입(굳이?)</SidebarLink> : <SidebarBtn onClick={signoutHandler}>로그아웃</SidebarBtn>}
          
        </SidebarMenu>
      </SidebarWrapper>
      {modalOpen ? <SigninModal setIsOpen={setIsOpen} modalOpen={modalOpen} setModalOpen={setModalOpen} /> : null}
    </SidebarContainer>
  );
};

export default SideBar
