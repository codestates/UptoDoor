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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
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
  /* border: 2px solid blue; */
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
  /* border: 2px solid red; */
  @media screen and (min-width: 1140px) {
    max-width: 1140px;
  }
  @media screen and (min-width: 1440px) {
    width: 1140px;
  }
`;

export const Title = styled.h1`
  width: 90%;
  font-size: 20px;
  margin: 20px auto 24px;

  @media screen and (min-width: 767px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1140px) {
    max-width: 1140px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    width: 1140px;
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


//*Mypage, adminpage
export const PageWrapper = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1140px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    max-width: 1140px;
  }
`;

//* PageProfileBtnWrapper
export const PageProfileBtnWrapper = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    height: 450px;
  }
  @media screen and (min-width: 1140px) {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
  }
`;

//* PageProfileWrapper
export const PageProfileWrapper = styled.div`
  width: 100%;
  padding: 18px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 767px) {
    padding: 28px 20px 20px;
    width: 240px;
    height: 70%;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  @media screen and (min-width: 1140px) {
    width: 300px;
  }
`;

//* PageContent
export const PageContent = styled.div`
  width: 60%;
  > h3 {
    margin-bottom: 6px;
  }
  > p {
    font-size: 12px;
    margin-bottom: 2px;
  }

  @media screen and (min-width: 767px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 0 auto;

    > h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    > p {
      font-size: 14px;
      margin-bottom: 4px;
    }
  }

  @media screen and (min-width: 1140px) {
    > h3 {
      font-size: 22px;
      margin-bottom: 10px;
    }
    > p {
      font-size: 16px;
      margin-bottom: 4px;
    }
  }
`;

//* PageBtnWrapper
export const PageBtnWrapper = styled.div`
  width: 40%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  > button {
    padding: 2px;
    background-color: #fff;
    outline: none;
    border: none;
    cursor: pointer;

    a {
      text-decoration: none;
      color: black;
      background-color: #fff;
      color: #656d78;
    }
  }

  @media screen and (min-width: 767px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > button {
      margin: 3px;
      a {
        font-size: 14px;
      }
    }
  }
  
  @media screen and (min-width: 1140px) {
    > button {
      margin: 3px;
      a {
        font-size: 16px;
      }
    }
  }
`;