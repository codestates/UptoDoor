import React,{useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
  Header,
  Nav,
  ButtonWrapper,
  NavLogo,
  NavWrapper,
  UL,
  IconButton,
  BtnLink,
  Listli
} from "./StyledNavBar";

import { AdminStoreReset } from '../../../_actions/admin_action';
import { signOut,naverSignOut,kakaoSignOut } from '../../../_actions/user_action';
import { useHistory } from 'react-router';
import { END_POINT } from '../../../_actions/type';

import Signin from '../Signin/SigninModal';
import SideBar from '../SideBar/SideBar';
import Alarm from '../Alarm/Alarm';

function NavBar() {
  const history:any = useHistory();
  const dispatch:any = useDispatch()
  const state = useSelector((state) => state)
  const { user }: any = state;
  const message = user.message;
  
  //사이드바 모달창
  const [isOpen, setIsOpen] = useState(false);
  const [alarmBtnModal, setAlarmBtnModal] = useState(false);
  const closeAlarmModal = () => {setAlarmBtnModal(!alarmBtnModal) };
  //로그인 모달
  const [modalOpen, setModalOpen] = useState(false);

  const signoutHandler = (e:any) => {
    e.preventDefault();
    
    if (user.login_type === 'kakao'){
      dispatch(AdminStoreReset());
      dispatch(kakaoSignOut())
      .then((res: any) => {
        if (res.payload === "signout success") {
          window.location.href = `${END_POINT}`
      }
    })
    }
    else if (user.login_type === 'naver') {
      dispatch(AdminStoreReset());
      dispatch(naverSignOut())
      .then((res: any) => {
        if (res.payload === "signout success") {
          window.location.href = `${END_POINT}`
      } 
    });
    }
    else {
      dispatch(AdminStoreReset())
      dispatch(signOut())
      .then((res: any) => {
        if (res.payload === "signout success") {
            window.location.href=`${END_POINT}`
        }
    });
  }
}
const accessInto = useCallback((name) => {
  if (name === "mypage") {
      if (message) {
      history.push('/mypage');
    }
  }
  }, [history, message]);
  return (
    <Header>
      <NavWrapper>
        <NavLogo to="/"/> 
        <Nav>
          <h2 className="visually-hidden">메뉴</h2>
          <UL>
            <Listli onClick={()=> history.push("/mapper")}>구독찾기</Listli>
            <Listli onClick={()=> history.push("/address")}>동네인증</Listli>
            <Listli onClick={() => history.push("/analysis")}>구독 데이터</Listli>
          </UL>
        </Nav>
      </NavWrapper>
      
      <ButtonWrapper>
        <IconButton 
        type="button" 
        aria-label="알림 버튼" 
        onClick={closeAlarmModal}>
          <i className="far fa-bell"></i>
        </IconButton>
        <IconButton
          onClick={() => { setIsOpen(true) }}
          type="button"
          aria-label="메뉴 열기 버튼"
        >
          <i className="fas fa-bars"></i>
        </IconButton>
        
        {message !== 'login success' ?
          <UL>
            <Listli 
            type="button" 
            aria-label="로그인"
            className = 'icons'
            title = 'log-in'
            onClick={()=>{setModalOpen(true)}}>
              <i className="fas fa-sign-in-alt"></i>
            </Listli>
            <Listli 
            type="button" 
            aria-label="회원가입"
            className = 'icons'
            title = 'sign-up'>
              <BtnLink to="/signup" >
              <i className="fas fa-user-plus"></i>
              </BtnLink>
            </Listli>
          </UL>
          :
          <UL>
            <Listli>
              <span>{user.nickname}님,</span> 반갑습니다.
            </Listli>
            <Listli 
            type="button" 
            aria-label="프로필"
            title = 'profile'
            className = 'icons'
            onClick={() => {accessInto("mypage")}}>
              <i className="fas fa-user"></i>
            </Listli>
            <Listli 
            type="button" 
            title = 'log-out'
            aria-label='로그아웃'
            className = 'icons'
            onClick={(e:any) => {signoutHandler(e)}}>
              <i className="fas fa-sign-out-alt"></i>
            </Listli>
          </UL>
        }
      </ButtonWrapper>

      <SideBar 
      history={ history} 
      setIsOpen={setIsOpen} 
      isOpen={isOpen} 
      signoutHandler={signoutHandler} />
      <Signin 
      setIsOpen={setIsOpen} 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen} />
      {alarmBtnModal ?
      <Alarm />
      : null}
    </Header>
  );
}

export default NavBar