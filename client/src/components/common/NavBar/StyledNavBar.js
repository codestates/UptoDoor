import styled from "styled-components";
import { Link } from 'react-router-dom';
import {
  // BackgroundColor,
  MainColor,
  // PointColor,
  TextColor,
  // TextDarkGrey,
  // TextLightGrey,
} from "../../GlobalStyle";
import {
//   SmallFont,
//   BaseFont,
  MediumFont,
  // LargeFont,
//   UltraLargeFont,
} from "../../GlobalStyle";

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 15px 12px 0 12px;
  justify-content: space-between;
  margin-bottom: 30px;
  transition: all 0.4s;

  @media screen and (min-width: 767px) {
    height: 80px;
    margin: 0px auto;
    padding: 15px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 80px;
    margin: 0px auto;
    padding: 15px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
`;

export const NavLogo = styled(Link)`
  color: ${MainColor};
  cursor: pointer;
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  line-height: 1em;
  margin-right: 12px;
  letter-spacing: -3px;

  @media screen and (min-width: 767px) {
    font-size: 40px;
    font-weight: 700;
  }

  @media screen and (min-width: 1120px) {
    margin: 0 25px 0 0;
  }
`;

export const Nav = styled.nav`
  > ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: ${MediumFont};
    font-weight: 500;
    list-style: none;
    cursor: pointer;
    > li {
      margin: 10px;
    }
  }

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

export const ListLink = styled(Link)`
  color: ${TextColor};
  text-decoration: none;
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
    color: ${MainColor};
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

export const SignupLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;