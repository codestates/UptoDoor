import styled from 'styled-components';
import { 
  MediumFont, 
  TextLightGrey,
  LargeFont,
  MainColor, 
  SmallFont, 
  PointColor,
  BaseFont,
  } from '../GlobalStyle';

export const StoreDataContainer = styled.section`
transition : all 0.3s;
padding : 0 16px;
max-width: 1440px;
>.line{
  visibility: hidden;
  @media screen and (min-width: 768px) {
    visibility: visible;
    margin: 20px 0 10px;
    border-bottom : 1px solid ${TextLightGrey};
  }
}
@media screen and (min-width: 768px) {
  margin : 60px 30px;
  }
@media screen and (min-width: 1140px) {
  /* margin : 60px 15px; */
  margin : 60px auto;

  }
`
export const StoreInfoTitle = styled.p`
//app size
font-size: ${MediumFont};
  @media screen and (min-width: 1140px) {
    font-size: ${LargeFont};
    visibility : visible;
    margin : 0 8px;
    justify-content: flex-start;
  }
`
export const StoreDataWrapper = styled.div`
@media screen and (min-width: 1140px) {
    display: flex;
    justify-content: center;
    /* align-items :stretch; */
  }
`
export const StoreIntro = styled.div`
  max-height: 650px;
  margin : 8px 0;
  display: grid;
  >.store-flex-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin : 5px; */
  }
  >.store-img-box{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    margin : 15px 0 10px;
    
  }
  >.store-detail-box{
    padding :8px;
    border-radius: 8px;
    /* background-color: rgba(0,0,0,0.1); */
    box-shadow: 1px 1px 5px ${TextLightGrey};
    @media screen and (min-width: 768px) {
    padding :15px;
    }
    @media screen and (min-width: 1140px) {
  }
  }
  @media screen and (min-width: 1140px) {
    /* border: 3px solid magenta;  */
    margin : 0 40px 0 0;
    flex : 1.5;
  }
`
export const StoreName = styled.p`
font-size: 24px;
font-weight: 500;
`
export const StoreCategory = styled.div`
background-color: ${PointColor};
color : #fff;
padding : 2px 10px;
border-radius: 8px;
text-align: right;
`
export const StoreBackImg = styled.div`
width: 100%;
height:100%;
border-radius: 8px;
box-shadow: 1px 1px 1px ${TextLightGrey};
background-color: rgba(0,0,0,0.1);
opacity: 0.7;
text-align: center;
font-size: ${LargeFont};
line-height: 100px;
@media screen and (min-width: 1140px) {
  padding-top: 5px;
  box-sizing: border-box;
}
`
export const StoreImg = styled.img`
width: 100%;
height:100px;
border-radius: 8px;
box-shadow: 1px 1px 1px ${TextLightGrey};
&:nth-child(1){
  height: 97%;
  grid-column: 1 / span 2;
  grid-row: 1 / span 3;
}
@media screen and (min-width: 1140px) {
  width: 100%;
  height: 220px;
  margin : -9px 0;
  }
`
export const StoreAddressP = styled.p`
font-size : ${BaseFont};
margin-bottom : 8px; 
@media screen and (min-width: 768px) {
  font-size : ${BaseFont};
  }
`
export const StoreInfoP = styled.p`
margin-top : 8px; 
font-size : ${SmallFont};
@media screen and (min-width: 1140px) {
    width: 100%;
    padding : 10px;
    font-size : ${SmallFont};
    border-radius: 8px;
  }
`
//! menu style
export const MenuOrderContainer = styled.div`
  margin : 15px 0;
  display: grid;

>span{
  margin-right : 4px;
  font-size: ${MediumFont};
}
@media screen and (min-width: 1140px) {
    margin-top : 20px;
    flex : 1;
  }
  @media screen and (min-width: 1440px) {
  }
`
export const MenuContainer = styled.div`
height: 400px;
overflow: hidden;
overflow-y: auto;
margin : 20px 0;
/* background-color: rgba(0,0,0,0.1); */
background-color: #f5f5f5;
box-shadow: 1px 1px 5px ${TextLightGrey};
border-radius: 8px;
  &::-webkit-scrollbar {
    background-color: #fff;
    width: 5px;
    height: 8px;
    padding-top: 1px;
    }
  &::-webkit-scrollbar-thumb {
    background-color: ${MainColor};
    border-radius: 150px;
  }
@media screen and (min-width: 1140px) {
  height: 500px;
}
`
export const MenuWrapper = styled.div`
display: flex;
justify-content: space-between;
background-color: #fff;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
border-radius: 8px;
padding : 5px 0;
margin : 8px;
>.flex-box{
  display: flex;
}
>.order-btn{
  width: 50px;
}
`
export const MenuImg = styled.img`
width: 80px;
height:80px;
border-radius: 8px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
margin: 0 10px;
`
export const MenuName = styled.p`
font-size: ${BaseFont};
font-weight: 600;
margin-bottom: 10px;
`
export const MenuPrice = styled.p`
font-size: ${SmallFont};
`
export const MenuDetail = styled.p`
font-size: 12px;
`
export const BtnBox = styled.div`
text-align: center;
width: 100%;
>a{
text-decoration: none;
}
@media screen and (min-width: 1140px) {
  display: flex;
  justify-content: center;
}
>.middle, a>.middle{
  margin : 5px 0;
  width: 100%;
  height: 50px;
  display: unset;
  @media screen and (min-width: 1140px) {
    width: 202px;
    height: 60px;
    margin : 0 5px;
  }
}
>.call-btn{
  @media screen and (min-width: 1140px) {
    display: none;
  }
}
>.cancle-btn{
  /* display: none; */
  @media screen and (min-width: 1140px) {
  display: unset;
  }
}
`
