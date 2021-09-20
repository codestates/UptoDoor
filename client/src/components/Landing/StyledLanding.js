import styled from 'styled-components'
import { UltraLargeFont,TextLightGrey,MainColor,TextDarkGrey,LargeFont, SmallFont, MediumFont } from '../GlobalStyle'

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

//!Value
export const LandingValueContainer = styled.main`
width: 100%;
`
export const LandingValueWrapper = styled.section`
display: flex;
flex-direction: column;
transition: all 1s ease;
>.focus {
  height : 100%;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1140px) {
    /* width: 60%; */
    flex : 3px;
}
}
>.not{
  overflow: hidden;
  min-height : 120px;
  @media screen and (min-width: 767px) {
    min-height : 200px;
  }
  @media screen and (min-width: 1140px) {
    /* width : 25%; */
    flex : 1px;
}
}
@media screen and (min-width: 767px) {

  }
@media screen and (min-width: 1140px) {
  flex-direction: row;
  justify-content: center; 
}
`
export const LandingValueBox = styled.div`
height : 120px;
/* transition: all 1s ease; */
&:nth-child(1)>.unstressful-imgbox{
  background-image: url('./images/rank/salad.png');  
}
&:nth-child(2)>.comfortable-imgbox{
  background-image: url('./images/rank/laundry.png');
}
&:nth-child(3)>.winwin-imgbox{
  background-image: url('./images/rank/bread.png');
}
@media screen and (min-width: 767px) {
  height : 170px;
  }
@media screen and (min-width: 1140px) {
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  display: flex;
  justify-content: center;
  align-items: center;
  height : 615px;
  max-height: 700px;
}
`
export const ValueImgBox = styled.div`
/* transition: all 1s ease; */
background-size: cover;
background-blend-mode: multiply;
background-color : rgba(0,0,0,0.3);
height : 120px;
display: flex;
align-items: flex-end;
justify-content: flex-end;
padding : 10px;
cursor: pointer;  
&:hover{
    background-color: grey;
    background-blend-mode: multiply;
    transition: all 0.3s;
  }
@media screen and (min-width: 767px) {
  height : 200px;
  }
@media screen and (min-width: 1140px) {
  height : 615px;
  min-width :400px ;
  background-position-x: center;
}
`
export const H2 = styled.h2`
font-size: ${LargeFont};
font-size: 32px;
/* text-transform: uppercase; */
/* letter-spacing: 1px; */
color : #fff;
`
export const ValueTextBox = styled.div`
transition: all 1s ease;
padding : 20px;
@media screen and (min-width: 767px) {
  padding : 40px;
  }
@media screen and (min-width: 1140px) {
  padding : 30px;
  width : 400px;
}
`
export const H3 = styled.h3`
margin : 10px 0;
@media screen and (min-width: 767px) {
  font-size: ${MediumFont}
  }
@media screen and (min-width: 1140px) {

}
`
export const P = styled.p`
color : ${TextLightGrey};
font-size: 12px;
padding : 0 30px;
line-height: 20px;
margin : 5px 0 10px 0;
@media screen and (min-width: 767px) {
  font-size: ${SmallFont}
  }
@media screen and (min-width: 1140px) {
  padding : 0 5px;
}
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