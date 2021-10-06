import styled from 'styled-components'
import { LargeFont, TextDarkGrey, UltraLargeFont } from '../GlobalStyle'
import { upNdown } from '../Landing/StyledLanding'

//공통부분
export const ChartContainer = styled.div`
margin : 50px 0;
@media screen and (min-width: 1140px) {
  display:flex;
  justify-content: center;
  margin :280px 50px;
}
`
export const ChartContentsWrapper = styled.div`
width: 100%;
border-radius: 8px;
background-color: #f7f7f7;
padding : 15px;
margin : 20px 0 ;
display: flex;
flex-direction: column;
justify-content: center;
>.selection {
    margin : 15px 0 0px;
    >div{
      box-shadow : 0 0 0 0.3px rgba(0,0,0,0.3) !important;
      border-color : rgba(0,0,0,0.3);
    }
  }
@media screen and (min-width: 1140px) {
  background-color: #fff;
  width : 500px;
  padding : 50px;
}

`
export const ChartTitle = styled.h1`
color : rgba(0,0,0,0.8); 
font-size: 22px;
margin-bottom: 8px;
transition: all 0.3s;
@media screen and (min-width: 767px) {
  font-size: 26px;
}
@media screen and (min-width: 1140px) {
  font-size: 38px;
  margin-bottom: 20px;
}
`
export const ChartText = styled.p`
color : ${TextDarkGrey};
@media screen and (min-width: 767px) {
  font-size: 20px;
}
@media screen and (min-width: 1140px) {
  font-size: 22px;
}
`
export const Column1 = styled.div`
grid-area: col1;
`
export const Column2 = styled.div`
grid-area: col2;
`
//!평균구독기간 섹션
export const StyledAverageMonth = styled.section`
/* border:3px solid; */
width : 100%;
height:calc(100vh - 205px);
display : flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const AverageMonthWrapper = styled.div`
/* border:3px solid; */
padding-bottom: 80px;
>div>h1{
  font-size: 48px;
  font-weight: 800;
  background: -webkit-linear-gradient(left, mediumturquoise, #5d9cec);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
}
>div>h2{
  color : rgba(0,0,0,0.8);
  &:nth-child(3){
    font-size: 20px;
  }
}
@media screen and (min-width: 767px) {
  width : 55%;
  padding-bottom: 150px;
  >div>h1{
  text-align: center;
  font-size: ${UltraLargeFont};
  font-weight: 800;
  padding : 20px 0 30px;
  }
  >div>h2{
    font-size: 30px;
    &:nth-child(3){
      text-align: right;
      font-size: 30px;
    }
  }
}
@media screen and (min-width: 1140px) {
  width : 50%;
  padding-bottom: 200px;
  >div>h1{
  font-size: ${UltraLargeFont};
}
>div>h2{
  &:nth-child(3){
    text-align: right;
  }
}
}
`
export const ArrowDisplay = styled.div`
width: 100%;
text-align: center;
opacity : 1;
  >i{
  animation: ${upNdown} 0.7s 0s ease infinite alternate-reverse;
  position :absolute;
  bottom : 50px;
  left : 47%;
  font-size: 50px;
  z-index: 1;
  color : rgba(0,0,0,0.5);
  transition: all 0.3s;
  &:hover{
    color : rgba(0,0,0,0.7);
  }
}
>.active{
  transition: all 0.3s;
  opacity : 0;
}
`
//!카테고리 섹션
export const StyledCategoryChart = styled.section`
display: grid;
grid-auto-columns: minmax(1fr, 2fr);
align-items: flex-start;
grid-template-areas: ${({ chartStart }) =>
  chartStart ? `'col1' 'col2'` : `'col1' 'col2'`};
@media screen and (min-width: 1140px) {
  align-items: center;
  grid-template-areas: ${({ chartStart }) =>
    chartStart ? `'col2 col1'` : `'col1 col2'`};
}
`
export const ChartCategoryWrapper = styled.div`
>.category-chart>div>.apexcharts-toolbar{
  display: none;
}
@media screen and (min-width: 1140px) {
  width : 600px;
}
`
//!유저 섹션
export const StyledUserChart = styled.section`
height : 500px;
>div{
  margin-bottom: 50px;
}
@media screen and (min-width: 1140px) {
  height : unset;
}
`
export const ChartUserWrapper = styled.div`
display: flex;
justify-content: center;
align-content: center;
>.user-chart>div>svg>foreignObject>div{
  position :absolute;
  bottom : -20px!important;
}
@media screen and (min-width: 1140px) {
  >div>div>svg{
    overflow: visible;
    width : 450px!important;
  }
}
`
//!토탈유저 카테고리 섹션
export const StyledTtlUserChart = styled.section`
display: grid;
grid-auto-columns: minmax(1fr, 2fr);
align-items: flex-start;
grid-template-areas: ${({ chartStart }) =>
  chartStart ? `'col1' 'col2'` : `'col1' 'col2'`};
@media screen and (min-width: 1140px) {
  align-items: center;
  grid-template-areas: ${({ chartStart }) =>
    chartStart ? `'col2 col1'` : `'col1 col2'`};
}
`
export const ChartTtlUseryWrapper = styled.div`
>.ttl-user-chart>div>.apexcharts-toolbar{
  display: none;
}
>.ttl-user-chart>div>svg>foreignObject>div{
  left : 0!important;
  top : 20px!important;
}
@media screen and (min-width: 1140px) {
  width : 600px;

}
`
//!지역섹션
export const StyledCityChart = styled.section`

`
export const ChartCityWrapper = styled.div`
>.city-chart>div>.apexcharts-toolbar{
  display: none;
}
@media screen and (min-width: 1140px) {
  width : 600px;
}
`