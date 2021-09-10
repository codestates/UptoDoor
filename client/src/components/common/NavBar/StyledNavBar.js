import styled from "styled-components";
import { Link } from 'react-router-dom';
import {
  // BackgroundColor,
  MainColor,
  // PointColor,
  // TextColor,
  // TextDarkGrey,
  // TextLightGrey,
} from "../../GlobalStyle";
import {
//   SmallFont,
//   BaseFont,
//   MediumFont,
  LargeFont,
//   UltraLargeFont,
} from "../../GlobalStyle";

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 12px 12px;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const NavLogo = styled(Link)`
  color: ${MainColor};
  cursor: pointer;
  font-size: ${LargeFont};
  font-weight: 700;
  text-decoration: none;
  line-height: 1em;
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

export const IconWrapper = styled.div`
  > button {
    width: 50px;
    background: none;
    border: none;
    
    > i {
      font-size: 28px;
      color: ${MainColor};
      background: none;
      border: none;
    }

    > img {
      background : none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: none !important;
  }
`;

