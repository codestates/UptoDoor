import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextLightGrey } from '../../GlobalStyle';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${TextLightGrey};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const SidebarWrapper = styled.div`
  padding: 10px 0 0 10px;
  position: absolute;
  color: #fff;
  width: 300px;
  height: 100%;
  top: 0;
  right: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* opacity:1; */
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  > i {
    color: #000;
  }
`;

export const Logo = styled.div`
  width: 80%;
  height: 60px;
  color: black;
  padding: 0 0 30px 10px;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid ${TextLightGrey};
  margin-top: 15px;
`;

export const User = styled(Link)`
  width: 80%;
  height: 50px;
  color: black;
  padding: 0 0 20px 10px;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid ${TextLightGrey};
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  padding: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;