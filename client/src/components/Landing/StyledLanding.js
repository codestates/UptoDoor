import styled from 'styled-components'
import { UltraLargeFont,MainColor,TextDarkGrey } from '../GlobalStyle'

//!intro
export const LandingIntroContainer = styled.main`
width: 100%;
height:calc(100vh - 80px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const LandingIntroWrapper = styled.section`

`
export const IntroH1 = styled.h1`
font-size: ${UltraLargeFont};
`
//!info
export const LandingInfoContainer = styled.main`
  min-width: 375px;
  padding: 60px 0;
  background-color: #f7f7f7;
`;

export const LandingInfoWrapper = styled.div`
  /* border: 3px solid; */
  /* padding-bottom: 40px; */
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 767px) {
    padding-bottom: 56px;
  }
`;
export const InfoWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  
`;

export const InfoRow = styled.div`
display: 100%;
display: flex;
flex-direction: column;
`;

export const TextWrapper = styled.div`
  margin: 0 auto 24px;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;

  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`; 

// export const ImgWrapper = styled.div`
//   width: 100%;
//   height: 250px;
//   background-color: #f3f3f3;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   margin-bottom: 24px;
//   `;

export const Img = styled.img`
margin: 0 auto 24px;
width: 300px;
height: 200px;

@media screen and (min-width: 480px){
  width: 400px;
  height: 266px
}
`;

//!Rank
export const LandingRankContainer = styled.main`
width: 100%;
height:calc(100vh - 80px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border : 3px solid;
`
//!End
export const LandingEndContainer = styled.main`
width: 100%;
height:calc(100vh - 80px); //footer 영역만큼 뺴주기.
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border : 3px solid;
`