import styled from 'styled-components'
import { LargeFont, TextDarkGrey, UltraLargeFont } from '../GlobalStyle'

//공통부분
export const ChartContainer = styled.div`
margin : 50px 0;
@media screen and (min-width: 1140px) {
  display:flex;
  justify-content: center;
  margin :300px 50px;
}
`
export const ChartContentsWrapper = styled.div`
width: 100%;
border-radius: 8px;
background-color: #f7f7f7;
padding : 15px;
margin : 30px 0 ;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (min-width: 1140px) {
  background-color: #fff;
  max-width : 450px;
  padding : 50px;
  vertical-align: center;

}
`
export const ChartTitle = styled.h1`
color : rgba(0,0,0,0.8); 
font-size: 22px;
margin-bottom: 8px;
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
//!카테고리 섹션
export const StyledCategoryChart = styled.section`

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
>.user-chart>div>svg>foreignObject>div{
  position :absolute;
  bottom : -20px!important;
}
@media screen and (min-width: 1140px) {
  width : 600px;
}
`
//!토탈유저 카테고리 섹션
export const StyledTtlUserChart = styled.section`

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
//!평균구독기간 섹션
export const StyledAverageMonth = styled.section`
width : 100%;
height : 400px;
display : flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const AverageMonthWrapper = styled.div`
/* border:3px solid; */
>div>h1{
  font-size: 38px;
  font-weight: 800;
  background: -webkit-linear-gradient(left, mediumturquoise, #5d9cec);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
}
>div>h2{
  &:nth-child(3){
    font-size: 20px;
  }
}
@media screen and (min-width: 767px) {
  width : 55%;
  >div>h1{
  text-align: center;
  font-size: ${UltraLargeFont};
  font-weight: 800;

  padding : 20px 0 30px;
}
>div>h2{
  &:nth-child(3){
    text-align: right;
    font-size: 28px;
    /* width : 600px; */
  }
}
}

`
