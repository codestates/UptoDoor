import styled from 'styled-components';
import { MainColor, BackgroundColor } from "../../GlobalStyle";

export const SmallButton = styled.button`
  margin: 0 5px;
  width: 90px;
  height: 40px;
  font-size: 18px;
  font-weight: 500px;
  border: 1px solid ${MainColor};
  border-radius: 8px;
  text-align: center;
  color: ${({ primary }) => (primary ? "#fff" : MainColor)};
  background-color: ${({ primary }) => (primary ? MainColor : "#fff")};
  cursor: pointer;
`;

export const MiddleButton = styled.button`
  width: 200px;
  height: 40px;
  font-size: 18px;
  font-weight: 700px;
  cursor: pointer;
  padding: 6px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid ${MainColor};
  margin: ${({ side }) => (side ? '5px' : 0)};
  color: ${({ primary }) => (primary ? BackgroundColor : MainColor)};
  background-color: ${({ primary }) => (primary ? MainColor : BackgroundColor)};
`;

export const LagreButton = styled.button`
  width: 280px;
  height: 55px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin:6px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid ${MainColor};
  text-align: center;
  color: ${({ primary }) => (primary ? BackgroundColor : MainColor)};
  background-color: ${({ primary }) => (primary ? MainColor : BackgroundColor)};
`;

export const BtnBox = styled.div`
text-align: center;
width: 100%;
margin-top : ${({btnboxMargin})=> (btnboxMargin ? '18px' : 0)};
display: ${({flexable})=> (flexable ?'flex' : 'unset')};
justify-content: center;
align-items: center;
@media screen and (min-width: 1140px) {
  display: flex;
  justify-content: center;
}
`
