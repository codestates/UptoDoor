import styled,{keyframes} from "styled-components";
import { TextLightGrey } from '../../GlobalStyle';
import {showModal,showModalBg} from '../Modal/styledModal'


export const showSidebar = keyframes`
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
`

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  display: grid;
  align-items: center;
  left: 0;
  z-index: 19;
  animation: ${showModalBg} 0.4s;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  /* animation: ${showSidebar} 0.7s ease;   */
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
  z-index: 20;
  /* animation: ${showSidebar} 0.3s ease;   */
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
  letter-spacing: -2px;
`;

export const UserName = styled.div`
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


export const SidebarUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;
  text-decoration: none;
  list-style: none;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLi = styled.li`
  padding: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
`;

export const SidebarBtn = styled.button`
  background-color: #fff;
  padding: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  border: none; 
`;