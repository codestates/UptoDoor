import styled from 'styled-components'
import { UltraLargeFont,
  TextLightGrey,MainColor,TextDarkGrey,
  LargeFont, SmallFont, MediumFont } from '../GlobalStyle'

//!intro
export const LandingIntroContainer = styled.main`
width: 100%;
height:calc(100vh - 80px);
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
`
export const LandingIntroWrapper = styled.section`
margin : 0 auto;
text-align: center;
`
export const FlexWrpper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
border : 3px solid green;
@media screen and (min-width: 767px) {
flex-direction: row;
border : 3px solid blue;
justify-content: center;
margin : 0 auto;
}
`
export const IntroH1 = styled.h1`
font-size: ${LargeFont};
`
export const TextContainer = styled.div`
  border :3px solid pink;
  margin : 0 auto;
  text-align: center;
  width: 300px;
  height : 500px;
  border-radius : 50px;
  padding :10px 0px 30px;
  box-sizing: border-box;
  display: ${({flexable})=> (flexable ? 'flex' : 'unset')};
  flex-wrap: wrap;
@media screen and (min-width: 767px) {
  
}
`
export const SliderWrapper = styled.div`
width: 100%;
border :3px solid magenta;
height : 500px;
>.category-img-wrapper{
text-align: center;
display: flex;
}
`
export const CategoryTitleWrapper = styled.h2`
border : 3px solid pink;
width: fit-content;
text-align: center;
margin : 0 auto;
@media screen and (min-width: 767px) {

}
`
export const CategoryTitle = styled.h2`
font-weight: 600;
font-size: 32px;
background: -webkit-linear-gradient(left, mediumturquoise, #5d9cec);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
@media screen and (min-width: 767px) {
font-weight: 700;
font-size: ${UltraLargeFont};
width: fit-content;
}
`
//////////////////////slider-  img/////////////////////
export const CategoryImgs = styled.img`
width: 200px;height : 300px;
margin : 5px;
border-radius : 8px;
@media screen and (min-width: 767px) {
  width: 250px;height : 350px;
}
`
export const ImgContainer = styled.div`
height : 60%;
>.category-img-wrapper{
  border : 3px solid blue;
  position : absolute;
  bottom : 0;
  width: 100%;
  display: flex;
}
@media screen and (min-width: 767px) {

}
`
export const H1 = styled.h1`
font-size: 45px;
padding : 0;
margin : 0;
`
//!info
export const LandingInfoContainer = styled.div`
  min-width: 375px;
  padding: 30px 0;
  background-color: #f7f7f7;

  @media screen and (min-width: 767px) {
    padding: 60px 0;
  }
`;

export const LandingInfoWrapper = styled.div`
  /* border: 3px solid; */
  /* padding-bottom: 40px; */
  padding: 0 0 10px;
  @media screen and (min-width: 767px) {
  }
`;
export const InfoWrapper = styled.div`

display: grid;
  height: 100%;
  width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 10px;
    justify-content: center;
  @media screen and (min-width: 767px) {
    height: 450px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(1fr, 2fr);
  align-items: flex-start;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  @media screen and (min-width: 767px) {
    align-items: center;

    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col2'`};
  }
`;

export const Column1 = styled.div`

  grid-area: col1;
  margin-bottom: 0;
  @media screen and (min-width: 767px) {
    margin-bottom: 15px;
    /* padding: 0 15px; */
  }
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  margin-bottom: 0;
  @media screen and (min-width: 767px) {
    margin-bottom: 15px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 450px;
  height: 100%;
  padding-top: 0;
  margin-bottom: 24px;
  @media screen and (min-width: 767px) {
    margin: ${({second})=> (second ? '0 30px 24px 0' : '0 0 24px 30px')}
  }
`;

export const Heading = styled.h1`
  color: #000;
  font-size: 20px;
  text-align: center;
  margin-bottom: 12px;
  line-height: 1.1;
  font-weight: 600;
  @media screen and (min-width: 767px) {
    font-size: 28px;
    margin-bottom: 24px;
    text-align: left;
  }
  @media screen and (min-width: 1140px) {
    font-size: 38px;
    margin-bottom: 24px;
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  /* margin-bottom: 35px; */

  line-height: 24px;
  color: ${TextDarkGrey};
  /* font-size: 14px; */
  text-align: center;
  margin-bottom: 1px;
  @media screen and (min-width: 767px) {
    font-size: 22px;
    text-align: left;
  }
  @media screen and (min-width: 1140px) {
    font-size: 20px;
    margin-bottom: 6px;
  }
`;

export const ImgWrap = styled.div`
display: flex;
justify-content: center;
  width: 90%;
  margin: 0 auto 24px;
  @media screen and (min-width: 767px) {
    height: 330px;
  }
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;

  @media screen and (min-width:767px){
    width:330px;
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