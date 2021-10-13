import styled, { keyframes } from "styled-components";
import { LargeFont, MainColor, TextLightGrey } from "../../GlobalStyle";

const loaderAnimation = keyframes`
  0%{transform:rotate(0deg);}
  50%{transform:rotate(180deg);}
  100%{transform:rotate(180deg);}
`;

export const StyledLoading = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingWrapper = styled.div`
  width: 100%;
  position: relative;
  transition: all 0.2s ease;
`;
export const Loader = styled.div`
  position: relative;
  width: 28px;
  height: 28px;

  top: 46%;
  top: -webkit-calc(50% - 6px);
  top: calc(50% - 6px);
  left: 46%;
  left: -webkit-calc(50% - 6px);
  left: calc(50% - 6px);

  border-radius: 50%;
  background-color: ${MainColor};
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: ${loaderAnimation} 1s ease-in-out infinite;
  animation: ${loaderAnimation} 1s ease-in-out infinite;

  &:after {
    width: 25px;
    height: 25px;
    content: "";
    position: absolute;
    background-color: ${TextLightGrey};
    top: 0px;
    left: 45px;
    border-radius: 50%;
  }
  &:before {
    width: 25px;
    height: 25px;
    content: "";
    position: absolute;
    background-color: ${TextLightGrey};
    top: 0px;
    left: -45px;
    border-radius: 50%;
  }

  @media screen and (min-width: 767px) {
    font-size: ${LargeFont};
  }
`;
