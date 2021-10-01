import styled from 'styled-components'
import { LargeFont, UltraLargeFont } from '../GlobalStyle'

//공통부분
export const ChartContainer = styled.div`
margin : 50px 0;
@media screen and (min-width: 1140px) {
  display:flex;
  margin :80px 50px;
}
`
export const ChartContentsWrapper = styled.div`
width: 100%;
border-radius: 8px;
background-color: #f7f7f7;
padding : 15px;
margin : 30px 0 10px;
@media screen and (min-width: 1140px) {
  max-width : 400px;
  padding : 50px;
}
`
export const ChartTitle = styled.h1`

`
export const ChartText = styled.p`

`
//!카테고리 섹션
export const StyledCategoryChart = styled.section`

`
export const ChartCategoryWrapper = styled.div`
@media screen and (min-width: 1140px) {
  width : 600px;
}
`
//!유저 섹션
export const StyledUserChart = styled.section`

`
export const ChartUserWrapper = styled.div`
@media screen and (min-width: 1140px) {
  width : 600px;
}
`
//!토탈유저 카테고리 섹션
export const StyledTtlUserChart = styled.section`

`
export const ChartTtlUseryWrapper = styled.div`
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
width : 50%;
>div>h1{
  font-size: 38px;
  font-weight: 800;
  background: -webkit-linear-gradient(left, mediumturquoise, #5d9cec);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
}
@media screen and (min-width: 767px) {
  >div>h1{
  text-align: center;
  font-size: ${UltraLargeFont};
  font-weight: 800;

  padding : 20px 0 30px;
}
>div>h2{
  &:nth-child(3){
    text-align: right;
  }
}
}

`
