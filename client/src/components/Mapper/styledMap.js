import styled ,{keyframes} from 'styled-components'
import { 
  SmallFont, 
  MediumFont ,
  TextLightGrey, 
  TextColor, 
  LargeFont, 
  MainColor,
  BaseFont,
  UltraLargeFont,
  TextDarkGrey
  } from '../GlobalStyle'

const showInfoModal = keyframes`
  from {
    opacity: 0;
    margin-top: 50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`
const showInfoModalBg = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const MapWrapperContainer = styled.section`
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
export const MapTitle = styled.p`
font-size: ${MediumFont};
  @media screen and (min-width: 1140px) {
    font-size: ${LargeFont};
    visibility : visible;
    margin : 0 8px;
    justify-content: flex-start;
  }
`
export const MapFlexWrapper = styled.div`
  @media screen and (min-width: 1140px) {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  }
`
export const MapHashWrapper = styled.div`
  margin: 20px 0 10px;
@media screen and (min-width: 768px) {
  margin: 20px 0 0;
}
@media screen and (min-width: 1140px) {
  max-width: 45%;
  margin:0 20px;
  }
`
export const MapSelectAddressWrapper = styled.div`
`
export const SelectAddressBox = styled.div`
margin : 10px 0;
>.mobile-middle-btn{
  width: 100%;
  height : 100%;
  }
@media screen and (min-width: 768px) {
  height: 60px;
  }
@media screen and (min-width: 1140px) {
margin : 0 0 10px 0;
}
`

export const MapForm = styled.form`
/* display: none; */
display: flex;
justify-content: center;
align-items: center;
margin-bottom : 10px;
@media screen and (min-width: 768px) {
  margin:0;
}
>.map-search-btn{
  width: 50px;
  height : 45px;
  margin : 0;
  border-radius : 0 8px 8px 0;
  @media screen and (min-width: 768px) {
  height: 55px;
  }
  }
`
export const MapSearchInput = styled.input`
  width: 100%;
  height: 45px;
  font-size: ${SmallFont};
  font-weight: 400;
  border-radius: 8px 0 0 8px;
  border: 1px solid ${TextLightGrey};
  border-right: none;
  padding-left : 8px;
  @media screen and (min-width: 768px) {
  height: 55px;
  }
  @media screen and (min-width: 1140px) {
  }
`
export const MapHashtagWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin : 10px 0;
`
export const MapHashTagBox = styled.div`
  width: 75%;
  text-align: right;
  @media screen and (min-width: 768px) {
  width: 60%;
  }
  >.hashtag-category-btn{
  width: fit-content;
  height: 28px;
  border-radius: 15px;
  padding : 3px 15px 10px;
  margin : 3px;
  @media screen and (min-width: 768px) {
  height: 34px;
  }
  >p{
    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: ${BaseFont};
    }
  }
}
`
export const MapContainer = styled.div`
border-radius : 8px;
margin : 0 auto;
width : 100%;
height : 350px;
@media screen and (min-width: 768px) {
    height : 400px;
    margin :0;
}
@media screen and (min-width: 1140px) {
  width: 45%;
  height: 490px;
  }
`
export const MapInfoContainer = styled.div`
  border-radius : 8px;
  margin : 0;
  position: absolute;
  top : 690px;
  right: 0;
  left: 0;
  /* z-index: 10000; */
  background-color: #fff;
  animation: ${showInfoModalBg} .4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
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
  @media screen and (min-width: 768px) {
    top : 850px;
  }
  @media screen and (min-width: 1140px) {
    position : relative;
    top : 10px;
    width: 100%;
    margin :0 ; padding : 0;
  }
`
export const MapInfoWrapper = styled.div`
  border-radius : 8px;
  margin : 3px auto;
  width: 90%;
  height : 100px;
  display: flex;
  box-sizing: border-box;
  animation: ${showInfoModal}.4s; 
  padding : 10px; 
  background-color: #f5f5f5;
  @media screen and (min-width: 1140px) {
    width: 500px;
  }
>a{
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  text-decoration: none;
  width: 100%;
  >div{
    width: 200px;
    @media screen and (min-width: 768px) {
      width: 550px;
    }
  }
  >div>hr{
    border: 1px solid rgba(0,0,0,0.2);
    margin : 3px 0;
  }
}

`
export const StoreImg = styled.img`
border-radius : 3px;
margin : 0 10px 0 0;
border : 1px solid rgba(0,0,0,0.2);
width: 100px;
`
export const StoreName = styled.h2`
border-radius : 8px;
margin :8px 0;
color : ${TextColor};
font-size: ${SmallFont};
@media screen and (min-width: 767px) {
    width: 335px;
    font-size: ${BaseFont}
  }
`
export const StoreAddress = styled.p`
border-radius : 8px;
margin : 0;
font-size: ${SmallFont};
color : ${TextColor};
`
export const EmptyMapContainer = styled.div`
display: none;
>i{
  font-size: ${UltraLargeFont};
  color : ${TextDarkGrey};
  margin : 15px 0;
}
@media screen and (min-width : 1140px){
  /* visibility: visible; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.1);
  height: 260px;
  border-radius : 8px;
}
`