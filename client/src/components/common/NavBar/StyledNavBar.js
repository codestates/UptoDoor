import styled from "styled-components";
import { Link } from 'react-router-dom';
import {
  MainColor,
  TextColor,
  TextDarkGrey,
} from "../../GlobalStyle";
import {
  MediumFont,
} from "../../GlobalStyle";
import { LogoSrc } from "../../Data";
export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 75px;
  display: flex;
  /* padding: 15px 12px 30px 12px; */
  padding : 25px 12px;
  justify-content: space-between;
  margin-bottom: 30px;
  transition: all 0.4s;
  z-index: 17;
  @media screen and (min-width: 767px) {
    height: 80px;
    margin: 0px auto;
    padding: 15px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 80px;
    margin: 0px auto;
    padding: 15px 150px;
    
  }
`;

export const NavWrapper = styled.div`
  display: flex;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  /* line-height: 1em; */
  margin-right: 12px;
  letter-spacing: -3px;
  width: 130px;
  background-image: url(${LogoSrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 767px) {
    font-size: 40px;
    font-weight: 700;
    padding: 6px 0 0 0;
  }

  @media screen and (min-width: 1120px) {
    margin: 0 25px 0 0;
  }
`;

export const Nav = styled.nav`
  > .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  @media screen and (max-width: 767px) {
    display: none !important;
  }
`;
export const UL = styled.ul`
  display : none ;
  @media screen and (min-width: 767px) {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${MediumFont};
  font-weight: 500;
  list-style: none;
  }
>.icons{
  margin : 13px 0;
  /* color : ${MainColor}; */
}
`
export const Listli = styled.li`
  color: ${TextDarkGrey};
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  margin: 13px 12px;
  cursor: ${({geeting}) => (geeting ? 'auto' : 'pointer')};
  >a{color : ${TextDarkGrey}};
  >span{font-weight:700; color : ${MainColor};}
  >a>i,i{
    font-size: 20px;
    width : 60px;
    text-align: center;
    /* color : ${TextDarkGrey}; */
    &:hover{    
      transition : all 0.3s;
      font-weight: 400;
      &:before{
        content : '프로필';
        font-size: 16px;
        font-weight: 400;
        color : ${TextDarkGrey};
      }
    }
  }
  >a>i{
    /* color : ${MainColor}; */
    &:hover{    
      &:before{
        content : '회원가입';
      }
    }
  }
  >.fa-sign-in-alt{
  font-size: 22px;
    &:hover{    
      &:before{
        content : '로그인';
      }
    }
  }
  >.fa-sign-out-alt{
    font-size: 22px;
    &:hover{    
      &:before{
        content : '로그아웃';
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled.button`
  width: 30px;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.2rem;
  margin-right: 10px;

  > i {
    font-size: 26px;
    color: ${TextDarkGrey};
    background: none;
    border: none;
  }

  @media screen and (min-width: 767px) {
    display: none !important;
  }
`;

export const MiddleButton = styled.button`
  margin: 0 5px;
  width: 90px;
  height: 40px;
  font-size: 18px;
  font-weight: 500px;
  background-color: ${MainColor};
  color: #fff;
  border: none;
  border-radius: 10px;
  text-align: center;

  @media screen and (max-width: 767px) {
    display: none !important;
  }
`;

export const BtnLink = styled(Link)`
  text-decoration: none;
  color: ${TextColor};
`;