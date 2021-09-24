import React,{useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../SideBar/SideBar';
import Signin from '../Signin/SigninModal';
import {
  Header,
  Nav,
  ButtonWrapper,
  NavLogo,
  //ListLink,
  NavWrapper,
  MiddleButton,
  IconButton,
  BtnLink,
  Listli
} from "./StyledNavBar";
import { signOut } from '../../../_actions/user_action';
import Modal from '../Modal/Modal';
import { useHistory } from 'react-router';
import { END_POINT } from '../../../_actions/type';

function NavBar() {
  const history:any = useHistory();
  const dispatch:any = useDispatch()
  const state = useSelector((state) => state)
  const { user }: any = state;
  const message = user.message;
  //사이드바 모달창
  const [isOpen, setIsOpen] = useState(false);
  //로그인 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [needLoginModal, setNeedLoginModal] = useState(false);
  const closeModal = () => { setNeedLoginModal(false) };
  //사인아웃 핸들러
  const signoutHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(signOut())
      .then((res: any) => {
        console.log(res);
      if (res.payload === "loginOut success") {
        window.location.href=`${END_POINT}`
      } else {
        alert("로그아웃에 실패했습니다.")
      }
    });
  },[])

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
        <NavLogo to="/"> 
          <img src="./images/updodoor.png" alt="s" style={{
            width: "150px", height: "35px"}} />
        
        </NavLogo> 
    
        {/* nav */}
        <Nav>
          <h2 className="visually-hidden">메뉴</h2>
          <ul>
              <Listli onClick={()=> history.push("/mapper")}>구독찾기</Listli>
              <Listli onClick={()=> history.push("/address")}>동네인증</Listli>
            <Listli onClick={() => { accessInto("mypage") }}>마이페이지</Listli>
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
            onClick={() => { accessInto("mypage") }}
        >
          프로필
        </MiddleButton>
        <MiddleButton type="button" aria-label="회원가입" onClick={(e:any) => { signoutHandler(e) }}>
          로그아웃
        </MiddleButton></div>) }
        
      </ButtonWrapper>
      <SideBar history={ history} setIsOpen={setIsOpen} isOpen={isOpen} signoutHandler={(e:any) => { signoutHandler(e) }} />
      <Signin setIsOpen={setIsOpen} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {!user.message && needLoginModal ? <Modal closeModal={closeModal}
        openModal={needLoginModal} modalTitleText="UptoDoor"
        modalText="로그인이 필요한 서비스 입니다."
        modalBtn="확인"
      /> : null}
    </Header>
  );
}

export default NavBar
