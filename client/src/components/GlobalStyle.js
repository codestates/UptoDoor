import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

/* margin,padding 은 90% */
// background: linear-gradient(45deg,mediumturquoise,#5d9cec);

export const GlobalStyle = createGlobalStyle`
  * {
    margin : 0px; 
    padding : 0px;
    box-sizing: border-box;
    font-family: -apple-system, 'Noto Sans KR', sans-serif;
  };
  input,textarea{
    &:active,&:focus{
      outline: none;
    }
  }
  button{
    cursor: pointer;
  }
`
/*color*/
export const MainColor = '#245CCE';
export const PointColor = '#ff5954';
export const TextColor = '#000';
export const TextDarkGrey = '#434A54';
export const TextLightGrey = '#656D78';
export const BackgroundColor = "#f7f7f7";

/*font*/
export const SmallFont = '14px';
export const BaseFont = '16px';
export const MediumFont = '20px';
export const LargeFont = '24px';
export const UltraLargeFont = '60px';

/*components*/
export const Container = styled.section`
  margin: 30px auto;
  min-width: 375px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin: 50px auto 70px;
  }
  @media screen and (min-width: 1140px) {
    margin: 70px auto 90px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const Title = styled.h1`
  width: 90%;
  font-size: 20px;
  margin: 20px auto 24px;

  @media screen and (min-width: 1140px) {
    font-size: 24px;
    width: 85%;
  }
`;

//!컴포넌트 작성시 예제
{/* 
  <Container>
  <Title>제목</Title>
  <Wrapper>
    내용들어가기
</Wrapper>
</Container>  
*/}