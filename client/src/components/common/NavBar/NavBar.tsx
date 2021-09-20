import React,{useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
import { signOut } from '../../../_actions/user_action';


function NavBar() {
  const dispatch:any = useDispatch()
  const state = useSelector((state) => state)
  const { user }: any = state;
  const message = user.message;
  //사이드바 모달창
  const [isOpen, setIsOpen] = useState(false);
  //로그인 모달
  const [modalOpen, setModalOpen] = useState(false);

  const signoutHandler = useCallback(() => {
    dispatch(signOut()).then(() => 
    {
      window.location.reload();
    });
  },[])

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
        
        {message === undefined ?
          (
          <div>
          <MiddleButton type="button" aria-label="로그인"
        onClick={()=>{setModalOpen(true)}}
        >
          로그인
        </MiddleButton>
        <MiddleButton type="button" aria-label="회원가입">
          <BtnLink to="/signup">회원가입</BtnLink>
        </MiddleButton></div>)
          :
        ( <div><MiddleButton type="button" aria-label="로그인"
        onClick={()=>{setModalOpen(true)}}
        >
          프로필
        </MiddleButton>
        <MiddleButton type="button" aria-label="회원가입">
          <BtnLink onClick={signoutHandler}>로그아웃</BtnLink>
        </MiddleButton></div>) }
        
      </ButtonWrapper>
      <SideBar setIsOpen={setIsOpen} isOpen={isOpen}signoutHandler={signoutHandler} />
      <Signin setIsOpen={setIsOpen} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Header>
  );
}

export default NavBar
