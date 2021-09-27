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
  LargeFont,
  } from '../GlobalStyle';
  import {showModal} from '../common/Modal/styledModal'

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
height : 37%;
margin-top : 3px;
cursor: pointer;
border-radius: 8px;
box-shadow: 1px 1px 1px ${TextLightGrey};
font-size: ${UltraLargeFont};
/* line-height: 200px; */
background-size: cover;
background-repeat: no-repeat;
background-color: grey;
background-blend-mode: multiply;
opacity: 0.9;
color : #fff;
display : flex; 
align-items : center;
justify-content : center;
@media screen and (min-width: 568px) {
  height : 38%;
}
@media screen and (min-width: 1140px) {
  padding-top: 5px;
  box-sizing: border-box;
}
`
export const StoreImgBox = styled.div`
max-width : 1139px;
max-height : 500px;
/* border : 3px solid pink; */
display : flex;
>div>.second-img{
  width : 100%;
  height : 60%;
}
`
export const StoreImg = styled.img`
width : 60%;
margin-right : 8px;
border-radius : 8px;
object-fit : cover;
@media screen and (min-width: 568px) {
  width : 70%;
}
@media screen and (min-width: 768px) {
  width : 75%;
}
@media screen and (min-width: 1140px) {

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

@media screen and (min-width: 1140px) {
  display: flex;
  justify-content: center;
}
>.middle{
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

//!store img modal style
export const ModalStoreWrapper = styled.div`
  padding: 40px 20px;
  margin: 0 auto;
  width: 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: rgba(0,0,0,0.9);
  animation: ${showModal}.4s; 

  >.slick-slider >.slick-arrow{
    visibility: hidden;
    &::before{
      opacity: 1;
      font-size: 50px;
    }
    @media screen and (min-width: 767px) {
    visibility: visible;
    /* margin : 0 50px; */
    /* border : 3px solid red; */
    }
  }
  >.slick-slider >.slick-list{
  }

  //slick dot
  >div>ul>li{
    margin : -50px 10px;
  }
  >div>ul>li>button::before{
    font-size: 20px;
    margin : 10px 0;
    color : #fff;
    /* border : 3px solid pink; */
    opacity: 1;
  }
  >div>ul>.slick-active>button::before{
    /* border : 3px solid red; */
    opacity: 1;
    color: ${PointColor};
  }

  @media screen and (min-width: 767px) {
    
  }

`
export const CloseBtnIcon = styled.div`
width: 100%;
padding : 20px;
margin-top: -80px;
text-align: right;
cursor: pointer;
>i{
  font-size: 40px;
  color : #fff;
}
`
export const ModalStoreTitleText = styled.h1`

`
export const ModalStoreText = styled.h3`

`
//+사진모달
export const ModalStoreImgSlideBox = styled.div`
/* background-color: rgba(0,0,0,0.2); */
display: flex;
flex-direction: column;
justify-content: center;
height: 400px;
/* align-items: center; */
@media screen and (min-width: 767px) {
/* width: 200px; */
}
`
export const ModalStoreImgs = styled.img`
width: 90%;
height : 100%;
border-radius: 8px;
object-fit: contain;
margin : 0 auto;
@media screen and (min-width: 767px) {
  /* width: 80%; */
  height: 500px;
}
`