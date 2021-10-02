import React, { useState,useCallback } from 'react';
import SigninModal from '../Signin/SigninModal';
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarUl,
  SidebarLi,
  Logo,
  User,SidebarBtn
} from "./StyledSideBar";
import { useSelector } from 'react-redux';
interface Iprops {
  history:any;
  setIsOpen: any;
  isOpen: boolean;
  signoutHandler: any;
}

const SideBar = ({ history,setIsOpen, isOpen,signoutHandler }: Iprops):any => {
const state = useSelector((state) => state)
  const { user }: any = state;
  const { message,nickname } = user;
  
  const [modalOpen, setModalOpen] = useState(false);

  const accessInto = useCallback((name) => {
    setIsOpen(false);
    if (name === "map") {
      history.push('/mapper')
    }
    else if (name === "address") {
      history.push('/address')
    }
    else if (name === "analysis") {
      history.push('/analysis')
    }
    else if (name === "mypage") {
    if (message) {
      history.push('/mypage');
    } else {
      alert("로그인이 필요합니다.")
    }
  }
    
  }, [history, message]);


  return (
    <SidebarContainer isOpen={isOpen} >
      <SidebarWrapper>
        <Icon onClick={()=>{setIsOpen(false)}}>
          <i className="fas fa-times"></i>
        </Icon>
        <Logo>UptoDoor</Logo>
        {message === 'login success' ? <User>{nickname}</User>: <User onClick={() => {
          setModalOpen(true);
        }}>로그인</User> }
        
        <SidebarUl>
          <SidebarLi onClick={()=>{accessInto("map")}}>구독찾기</SidebarLi>
          <SidebarLi onClick={()=>{accessInto("address")}}>동네인증</SidebarLi>
          <SidebarLi onClick={() => { accessInto("analysis") }}>구독 데이터</SidebarLi>
          <SidebarLi onClick={() => { accessInto("mypage") }}>마이페이지</SidebarLi>
          {message === undefined ? null : <SidebarBtn onClick={(e:any) => { signoutHandler(e) }}>로그아웃</SidebarBtn>}
          
        </SidebarUl>
      </SidebarWrapper>
      {modalOpen ? <SigninModal setIsOpen={setIsOpen} modalOpen={modalOpen} setModalOpen={setModalOpen} /> : null}
    </SidebarContainer>
  );
};

export default SideBar
