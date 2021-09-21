import styled from 'styled-components';
import { 
  MediumFont, 
  TextLightGrey,
  // LargeFont,
  MainColor, 
  SmallFont, 
  PointColor,
  BaseFont,
  UltraLargeFont,
  } from '../GlobalStyle';

export const StoreDataWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
@media screen and (min-width: 1140px) {
    display: flex;
    justify-content: center;
    height: 615px;
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
    margin : 12px 0;
  }
  >.store-detail-box{
    padding :8px;
    margin : 0 0 10px 0;
    border-radius: 8px;
    @media screen and (min-width: 768px) {
    padding :15px;
    }
    @media screen and (min-width: 1140px) {
  }
  }
  @media screen and (min-width: 1140px) {
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
cursor: pointer;
border-radius: 8px;
box-shadow: 1px 1px 1px ${TextLightGrey};
text-align: center;
font-size: ${UltraLargeFont};
line-height: 100px;
background-size: cover;
background-repeat: no-repeat;
background-color: grey;
background-blend-mode: multiply;
opacity: 0.9;
color : #fff;
@media screen and (min-width: 1140px) {
  padding-top: 5px;
  box-sizing: border-box;
}
`
export const StoreImg = styled.img`
width: 100%;
height:100%;
border-radius: 8px;
box-shadow: 1px 1px 1px ${TextLightGrey};
object-fit: cover;

&:nth-child(1){
  height: 97%;
  grid-column: 1 / span 2;
  grid-row: 1 / span 3;
}
@media screen and (min-width: 768px) {
  &:nth-child(2){
  height: 100%;
  }
  }
@media screen and (min-width: 1140px) {
  width: 100%;
  height: 220px;
  margin : 0;
  &:nth-child(2){
  height: 220px;
    }
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
    flex : 1;
  }
`
export const MenuContainer = styled.div`
margin : 10px 0;
background-color: #f5f5f5;
box-shadow: 1px 1px 5px ${TextLightGrey};
border-radius: 8px;

@media screen and (min-width: 1140px) {
  height: 470px;
  margin : 15px 0;
  overflow: hidden;
  overflow-y: auto;
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
}
`
export const MenuWrapper = styled.div`
display: flex;
justify-content: space-between;
background-color: #fff;

border-radius: 8px;
padding : 5px 0;
margin : 8px;
>.flex-box{
  display: flex;
}
>.order-btn{
  width: 50px;
}
@media screen and (min-width: 1140px) {
    box-shadow: none;
  }
`
export const MenuImg = styled.img`
width: 80px;
height:80px;
border-radius: 8px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
margin: 0 10px;
@media screen and (min-width: 1140px) {
  width: 74px;
  height:74px;
  }
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
margin-top : ${({btnboxMargin})=> (btnboxMargin ? '18px' : 0)};
btnboxMargin
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
