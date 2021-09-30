import React,{useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../SideBar/SideBar';
import Signin from '../Signin/SigninModal';
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
import {  signOut,naverSignOut,kakaoSignOut } from '../../../_actions/user_action';
import { useHistory } from 'react-router';
import { END_POINT } from '../../../_actions/type';
import ConfirmModal from '../Modal/ConfirmModal';
import Alram from '../Alram/Alram';
import { AdminStoreReset } from '../../../_actions/admin_action';

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
  const [needLoginModal, setNeedLoginModal] = useState(false);
  const closeModal = () => { setNeedLoginModal(false) };
  //사인아웃 핸들러
  const signoutHandler = (e:any) => {
    e.preventDefault();
    
    if (user.login_type === 'kakao') {
      dispatch(AdminStoreReset());
      dispatch(kakaoSignOut())
      .then((res: any) => {
        if (res.payload === "signout success") {
          window.location.href = `${END_POINT}`
          
      } else {
        alert("로그아웃에 실패했습니다.")
      }
    })
    }
    else if (user.login_type === 'naver') {
      dispatch(AdminStoreReset());
      dispatch(naverSignOut())
      .then((res: any) => {
        if (res.payload === "signout success") {
          window.location.href = `${END_POINT}`
      } else {
        alert("로그아웃에 실패했습니다.")
      }
    });
    }
    else {
      dispatch(AdminStoreReset())
      dispatch(signOut())
      .then((res: any) => {
        console.log("여기서 찍히녀", res);
        if (res.payload === "signout success") {
          
            window.location.href=`${END_POINT}`
      } else {
        alert("로그아웃에 실패했습니다.")
      }
    });
  }
}
const accessInto = useCallback((name) => {
  
  if (name === "mypage") {
      if (message) {
      history.push('/mypage');
    } else {
      setNeedLoginModal(true);
    }
  }
  }, [history, message]);
  return (
    <Header>
      <NavWrapper>
        {/* 로고 */}
        <NavLogo to="/"/> 
        {/* nav */}
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
        {/* 알림 버튼 */}
        <IconButton type="button" aria-label="알림 버튼" onClick={closeAlarmModal}>
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
          (<UL>
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
          </UL>)
            :
          (<UL>
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
          </UL>) 
        }
      </ButtonWrapper>

      <SideBar history={ history} setIsOpen={setIsOpen} isOpen={isOpen} signoutHandler={signoutHandler} />
      <Signin 
      setIsOpen={setIsOpen} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {!user.message && needLoginModal ? 
      <ConfirmModal 
        closeModal={closeModal}
        openModal={needLoginModal} 
        modalTitleText="UptoDoor"
        modalText="로그인이 필요한 서비스 입니다."
        modalBtn="확인"
        setOpenModal={setNeedLoginModal}
        /> : null}
      {alarmBtnModal ?
      <Alram />
      : null}
    </Header>
  );
}

export default NavBar