import styled,{keyframes} from 'styled-components'
import { UltraLargeFont,
  TextLightGrey,TextDarkGrey,
  LargeFont, SmallFont, MediumFont, PointColor } from '../GlobalStyle'
import {showModal} from '../common/Modal/styledModal'
import {LandingValues} from '../dummyData'

const upNdown = keyframes`
  0%{
    margin-top: -5px;
  }
  100%{
    margin-bottom: 5px;
  }
`
//!intro
export const LandingIntroContainer = styled.main`
width: 100%;
height:calc(100vh - 80px);
text-align: center;
`
export const LandingIntroWrapper = styled.section`
width: 100%;
height : 100%;
padding : 50px 0 20px;
overflow-y: hidden;
@media screen and (min-width: 768px) {
margin : 0 auto;
padding : 100px 0 20px;
}
`
export const MainTitle = styled.h1`
font-size: ${MediumFont};
font-weight : 500;
color : ${TextDarkGrey};
@media screen and (min-width: 768px) {
  display : inline ;
  font-size: 30px;
  font-weight: 600;
}
`
export const MainSubTitle = styled.h2`
font-size: 18px;
font-weight : 400;
color : ${TextLightGrey};
@media screen and (min-width: 768px) {
  display : inline ;
  font-size: 32px;
  font-weight: 500;
}
@media screen and (min-width: 1140px) {
  font-size: 40px;
}
`
export const MainContainer = styled.div`
  margin : 0 auto;
  text-align: center;
  width: 375px;
  border-radius : 50px;
  padding :10px 0px;
  box-sizing: border-box;
  display: ${({flexable})=> (flexable ? 'flex' : 'unset')};
  >div>ul>li>button:before{
    opacity : 0.25;
    color : mediumturquoise;
  }
@media screen and (min-width: 768px) {
}
`
export const FlexBox = styled.div`  
display: flex;
justify-content:center;
align-items: flex-end;
width: 100%;
height : 50px;
>div{
  width: 70px;
}
>.slick-slider>.slick-list{
  height : 46px!important;
  @media screen and (min-width: 768px) {
    height :80px!important;
  }
  @media screen and (min-width: 1140px) {
    height : 100px!important;
  }
}
@media screen and (min-width: 768px) {
  justify-content: center;
  /* align-items: center; */
  margin : 10px 0 60px 0;
  height : 90px;
  >div{
    width : 160px;
    text-align: center;
  }
}
@media screen and (min-width: 1140px) {
  align-items: flex-end;  
  height : 100px;
  >div{
    width : 160px;
    text-align: center;
  }
}
`
export const CategoryTitleWrapper = styled.div`
width: fit-content;
text-align: center;
margin : 10px auto ;
@media screen and (min-width: 768px) {
  width: 800px;
  margin : 0px auto ;
}
`
export const CategoryTitle = styled.h2`
font-weight: 800;
font-size: 28px;
background: -webkit-linear-gradient(45deg, mediumturquoise, #5d9cec);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
@media screen and (min-width: 768px) {
font-weight: 700;
font-size: ${UltraLargeFont};
text-align: center;
}
@media screen and (min-width: 1140px) {
font-weight: 700;
font-size: 72px;
text-align: center;
}
`
export const SliderWrapper = styled.div`
background:linear-gradient(#fff,rgba(0,0,0,0.1));
`
export const ImgWrapper = styled.div`
margin-top : 50px;
visibility: hidden;
>.slick-slider>.slick-list{
  height : 100%!important;
}
>.slick-slider>.slick-list>.slick-track>.slick-current{
  visibility: visible;
}
@media screen and (min-width: 768px) {
}
`
export const CategoryImgWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr ;
grid-gap: 12px;
margin-bottom : 20px;

@media screen and (min-width: 768px) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
}
`
export const CategoryImgs = styled.img`
position : relative;
transition : all .3s;
top :0;
left : -100px;
width: 180px;
height : 260px;
border-radius : 8px;
object-fit: cover;
&:nth-child(1),&:nth-child(7),&:nth-child(13){
  position : relative;
  top : 40px;
}
&:nth-child(2),&:nth-child(4),&:nth-child(6)
,&:nth-child(8),&:nth-child(10),&:nth-child(12),&:nth-child(14),&:nth-child(16){
  position : relative;
  top : 90px;
}
@media screen and (min-width: 768px) {
  width: 280px;height : 380px;
}

@media screen and (min-width: 768px) {
  width: 270px;height : 370px;
  &:nth-child(1),&:nth-child(8),&:nth-child(14){
  position : relative;
  top : 40px;
  }
  &:nth-child(2),&:nth-child(4),&:nth-child(6)
  ,&:nth-child(9),&:nth-child(11),&:nth-child(13){
  position : relative;
  top : 90px;
  }
  &:nth-child(10),&:nth-child(12){
  top : 0;
  }
}
@media screen and (min-width: 1140px) {
  left : 0;
}
`
export const H1 = styled.h1`
font-size: 45px;
padding : 0;
margin : 0;
`
export const ArrowDisplay = styled.div`
>.click-icon{
  cursor: pointer;
  z-index: 1;
  border-radius:10px;
  background:#f7f7f7;
  &:hover{
    background: linear-gradient(45deg, mediumturquoise,#5d9cec);
    color : #fff;
    border-radius:50%;
    transition: all 0.1s;
    >span{display:none}
  }
}
`
export const FixI = styled.i`
animation: ${upNdown} 0.7s 0s ease infinite alternate-reverse;
position :absolute;
bottom : 30px;
font-size: 50px;
z-index: 1;
`
export const AlarmI = styled.i`
@media screen and (min-width: 767px) {
width : 50px; height : 50px;
line-height: 50px;
position :fixed;
right : 20px;
bottom : 30px;
font-size: 30px;
>span{
  border-radius: 50%;
  width: 18px; height : 18px;
  background-color: ${PointColor};
  color : #fff;
  font-size: 15px;
  line-height: 17px;
  position: absolute;
  left : 60%;
  bottom: 12%;
}
}
@media screen and (min-width: 1140px) {
}
`
export const ArrowChk = styled.div`
>.fa-angle-double-up{
  opacity: 0;
  transition: all 0.3s;
}
>.active{
  transition: all 0.3s;
  opacity: 1;
  z-index: 1;
  cursor: pointer;
  border-radius:10px;
  background:#f7f7f7;
  &:hover{
    background: linear-gradient(45deg, mediumturquoise,#5d9cec);
    color : #fff;
    border-radius:50%;
    transition: all 0.1s;
  }
}
`
export const I = styled.i`
width : 50px; height : 50px;
line-height: 50px;
font-size: 30px;
position :fixed;
right : 30px;
bottom : 30px;
@media screen and (min-width: 767px) {
right : 80px;
}
`
export const GradientEdge = styled.div`
position: absolute;
bottom : -40px;
height : 300px;
max-height : 20%;
width : 100%;
background-image: 
linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
opacity : 1;
@media screen and (min-width: 768px) {
  bottom : -10px;
}
@media screen and (min-width: 1140px) {
  bottom : 0;
}
`
//!info
export const LandingInfoContainer = styled.div`
  min-width: 375px;
  padding: 100px 0;
  background-color: #f7f7f7;

  @media screen and (min-width: 768px) {
    padding: 150px 0;
  }
`;
export const LandingInfoWrapper = styled.div`
  /* border: 3px solid; */
  /* padding-bottom: 40px; */
  padding: 20px 0 0;
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    height: 450px;
  }
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(1fr, 2fr);
  align-items: flex-start;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  @media screen and (min-width: 768px) {
    align-items: center;

    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col2'`};
  }
`;
export const Column1 = styled.div`

  grid-area: col1;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    /* padding: 0 15px; */
  }
`;
export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }
`;
export const TextWrapper = styled.div`
  max-width: 450px;
  height: 100%;
  padding-top: 0;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    height: 330px;
  }
`;
export const Img = styled.img`
  width: 100%;
  padding-right: 0;

  @media screen and (min-width:768px){
    width:330px;
  }
`;
//!Value
export const LandingValueContainer = styled.main`
width: 100%;
@media screen and (min-width:768px){
  height:calc(100vh - 80px);
  box-sizing: border-box;
  }
`
export const LandingValueWrapper = styled.section`
display: flex;
flex-direction: column;
min-width: 375px;

@media screen and (min-width: 768px) {

}
@media screen and (min-width: 1140px) {
flex-direction: row;
justify-content: center;
height:calc(100vh - 80px);
padding : 100px;
}
@media screen and (min-width: 1440px) {
padding : 100px 200px;
}

>.focus {
  height : 100%;
  @media screen and (min-width: 768px) {
    >.textbox{
    /* height : 220px;
    border :3px solid; */
    }
  }
  @media screen and (min-width: 1140px) {
    >.imgbox{
    flex : 2;
  }
  >.textbox{
    flex : 1.5;
  }
  }
}
>.not{
  overflow: hidden;
  min-height : 120px;
  @media screen and (min-width: 768px) {
    min-height : 190px;
  }
  @media screen and (min-width: 1140px) {
  min-height :none;
  height : 100%;
  }
  >.textbox{
    display: none;
  }
}
`
export const LandingValueBox = styled.div`
height : 120px;
@media screen and (min-width: 768px) {
  height : 170px;
  }
@media screen and (min-width: 1140px) {
  display: flex;
  justify-content: center;
  align-items: center;
}
&:nth-child(1)>.unstressful-imgbox{
  background-image: url(${LandingValues[0]});  
}
&:nth-child(2)>.comfortable-imgbox{
  background-image: url(${LandingValues[1]});
}
&:nth-child(3)>.winwin-imgbox{
  background-image: url(${LandingValues[2]});
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
transition : all 1s linear;
&:hover{
    background-color: grey;
    background-blend-mode: multiply;
    transition: all 1s linear;
  }
  @media screen and (min-width: 767px) {
    height: 190px;
  }
  @media screen and (min-width: 1140px) {
    position: relative;
    width: 600px;
    height: 100%;
  }
`;
export const H2 = styled.h2`
font-size: ${LargeFont};
color : #fff;
@media screen and (min-width: 768px) {
font-size: 36px;
  }
@media screen and (min-width: 1140px) {
  position : absolute;
  bottom : 170px;
  right: -160px;
  width : 400px;
  transform: rotate(270deg);
  font-size: ${UltraLargeFont};
}
`
export const ValueTextBox = styled.div`
padding : 20px;
@media screen and (min-width: 767px) {
  padding : 45px;
  height : 100%;
  }
@media screen and (min-width: 1140px) {
  padding : 0 35px;
  height: 50%;
}
`
export const H3 = styled.h3`
/* line-height: 30px; */
margin-bottom: ${({endText})=> (endText ? '20px' : '10px')};
color: ${({endText})=> (endText ? TextDarkGrey : 'unset')};
font-weight: ${({endText})=> (endText ? '500' : '500')};
@media screen and (min-width: 768px) {
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
@media screen and (min-width: 768px) {
  font-size: ${SmallFont}
  }
@media screen and (min-width: 1140px) {
  padding : 10px 20px;
  line-height: 25px;
}
`
//!End
export const LandingEndContainer = styled.main`
width: 100%;
height: 100%;//footer 영역만큼 뺴주기.
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding : 100px 0 ;
background-color: #f7f7f7;
@media screen and (min-width: 767px) {
  padding : 100px 0 0;
}
`
export const LanindgFindWrapper = styled.div`
width: 100%;
min-width: 375px;
/* border : 3px solid pink; */
/* margin : 20px 0; */
@media screen and (min-width: 1140px) {

}
`
export const LandingEndWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin : 30px 0 0;  
>div>button{
  background : linear-gradient(45deg , mediumturquoise ,#5d9cec);
  color : #fff;
  height : 50px;
  margin-top : 20px;
  font-weight : 600;
  border: none;
}
@media screen and (min-width: 767px) {
  margin : 100px 0 0;
  color : black;
  padding : 50px 0;
  background-color: #fff;
}

@media screen and (min-width: 1140px) {
  padding : 110px 0;
}
`
// 랜딩지도 전체부분 스타일
export const LandingMapWrapperContainer = styled.section`
transition: all 0.3;
margin : 0 auto;
width : 80%;
max-width: 500px;
@media screen and (min-width: 1140px) {
  max-width: 950px;
  }
`
// 랜딩셀렉트부분 스타일
export const LandingMapSelectContainer = styled.div`
`
export const LandingMapSelectWrapper = styled.div`
/* display: flex;
align-items: flex-end; */
height : 50px;
margin : 20px 0 0;
>.city-selection{
  /* border : 3px solid skyblue; */
  z-index : 1;
  @media screen and (min-width: 1140px) {
    width: 30%;
  }
  >div{
    box-shadow : none !important;
    border-color : rgba(0,0,0,0.3);

  }
  >div>div>div{
    color : ${TextDarkGrey};
  }
}
`
export const H4 = styled.h4`
animation: ${showModal} 0.4s;
@media screen and (min-width: 1140px) {
  font-size: ${LargeFont};
  }
>span{
  font-size: ${MediumFont};
  font-weight: 400;
  color : #000;
}
&:nth-child(1){
  font-size: 34px;
  font-weight: 800;
  background: -webkit-linear-gradient(45deg, mediumturquoise,#5d9cec);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
 @media screen and (min-width: 768px) {
    font-size: 36px;
  }
  @media screen and (min-width: 1140px) {
    font-size: 42px;
  }
}
font-size: ${MediumFont};
font-weight: 400;

`
// 랜딩지도부분 스타일
export const LandingMapContainer = styled.div`
/* border : 3px solid green; */
margin : 10px auto;
width : 100%;
height : 250px;
border-radius : 8px;
z-index : 0;
@media screen and (min-width: 767px) {
    height : 450px; 
  }
@media screen and (min-width: 1140px) {
    height : 550px; 
  }
`
export const EndingH3 = styled.h3`
margin : 0 0 10px;
font-size: 24px;
color : ${TextDarkGrey};
@media screen and (min-width: 767px) {
  /* color : #fff; */
  margin : 0 0 30px;
  font-size: 38px;
  font-weight : 800;
}
`