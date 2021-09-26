import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextLightGrey, MainColor } from "../../GlobalStyle";
import {showModal , showModalBg} from '../Modal/styledModal'

export const SigninContainer = styled.div`
  position: fixed;
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${showModalBg} 0.4s;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  z-index: 99;
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SigninWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: ${showModal}.4s;  
  > form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  > .btn {
    color: #000;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    background-color: #fff;
    border: 1px solid #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      border-radius: 6px;
      border: 1px solid #fff;
      width: 25px;
      height: 25px;
    }
    > div {
      margin-left: 8px;
    }
  }

  @media screen and (min-width: 767px) {
    width: 550px;
    height: 550px;
    border-radius: 25px;
  }
`;

export const Logo = styled.div`
  color: black;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  position: relative;
  left: 43%;
  bottom: 3.8rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  > i {
    color: #000;
  }

  @media screen and (min-width: 767px) {
    left: 15rem;
  }
`;

export const SigninInput = styled.input`
  width: 280px;
  height: 55px;
  padding: 5px;
  margin: 6px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  border-radius: 8px;
  border: 1px solid ${TextLightGrey};
`;

export const TextOr = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 8px 0 8px 0;
`;

export const LeadSignup = styled.div`
  width: 260px;
  margin: 20px 0 10px 0;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -2px;
  text-align: center;
`;

export const SignupLink = styled(Link)`
  margin-left: 12px;
  color: ${MainColor};
  font-weight: 700;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
`;