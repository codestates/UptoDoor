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
border : 3px solid;
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
/* height:calc(100vh - 80px); */
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
border : 3px solid;
`
export const LandingValueWrapper = styled.section`
display: flex;
flex-direction: column;
>.unstressful-box{
  height : 120px;
}
>.comfortable-box{
  height : 120px;
}
>.winwin-box{
  height : 120px;
}
>.focus {
  height : 100%;
  transition: all 0.7s;
}
>.not{
  overflow: hidden;
  min-height : 120px;
}
`
export const LandingValueBox = styled.div`
&:nth-child(1)>.unstressful-imgbox{
  background-image: url('./images/rank/salad.png');
}
&:nth-child(2)>.comfortable-imgbox{
  background-image: url('./images/rank/laundry.png');
}
&:nth-child(3)>.winwin-imgbox{
  background-image: url('./images/rank/bread.png');
}
&:nth-child(1)>.unstressful-textbox{
}
&:nth-child(2)>.comfortable-textbox{
}
&:nth-child(3)>.winwin-textbox{
}
`
export const ValueImgBox = styled.div`
background-size: cover;
background-blend-mode: multiply;
background-color : rgba(0,0,0,0.3);
height : 120px;
display: flex;
align-items: flex-end;
justify-content: flex-end;
padding : 10px;
cursor: pointer;
`
export const H2 = styled.h2`
font-size: ${LargeFont};
font-size: 32px;
/* text-transform: uppercase; */
/* letter-spacing: 1px; */
color : #fff;
`
export const ValueTextBox = styled.div`
padding : 20px;
`
export const H3 = styled.h3`
margin : 10px 0;
`
export const P = styled.p`
color : ${TextLightGrey};
font-size: 12px;
padding : 0 30px;
line-height: 20px;
margin : 5px 0 10px 0;
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