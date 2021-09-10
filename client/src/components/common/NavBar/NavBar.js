import React from 'react'
import { Link } from 'react-router-dom';
import {
  Header,
  Nav,
  ButtonWrapper,
  NavLogo,
  IconWrapper,
} from "./StyledNavBar";

function NavBar() {
  return (
    <Header>
      {/* 로고 */}
      <NavLogo to="/">UptoDoor</NavLogo>

      {/* nav */}
      <Nav className="sm-hidden">
        <h2 className="visually-hidden">메뉴</h2>
        <ul>
          <li>
            <Link to="/">구독찾기</Link>
          </li>
          <li>
            <Link to="/">동네인증</Link>
          </li>
          <li>
            <Link to="/">마이페이지</Link>
          </li>
        </ul>
      </Nav>
      <IconWrapper>
        <button type="button" aria-label="알림 버튼">
          <i className="far fa-bell"></i>
        </button>
        {/* 메뉴 버튼 */}
        <button type="button" aria-label="메뉴 열기 버튼">
          <i className="fas fa-bars"></i>
        </button>
      </IconWrapper>
      <ButtonWrapper >
        <button  type="button" aria-label="회원가입">
          로그인
        </button>
        <button type="button" aria-label="회원가입">
          회원가입
        </button>
      </ButtonWrapper>
      {/* 알림 버튼 */}
    </Header>

    // <div>
    //   <ul>
    //     <Link to = '/'><li>홈</li></Link>
    //     <li><Signin/></li>
    //     <Link to = '/signup'><li>회원가입</li></Link>
    //     <Link to = '/mypage'><li>마이페이지</li></Link>
    //     <Link to = '/mapper'><li>[Map]우리동네 정기구독</li></Link>
    //     <Link to = '/address'><li>[Address]동네 등록하기</li></Link>
    //   </ul>
    // </div>
  );
}

export default NavBar
