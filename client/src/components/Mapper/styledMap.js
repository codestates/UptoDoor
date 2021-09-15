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
export const MapTitleH1 = styled.h1`
  margin : 0 20px 20px ;
  font-size: ${LargeFont};
  @media screen and (min-width: 767px) {
    margin : 50px 170px -20px;
    font-size: 32px;
  }
`
export const MapWrapperContainer = styled.section`
padding : 0 20px;
transition : all 0.3s;

@media screen and (min-width: 767px) {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

>.search-hash-wrapper{
  width: 100%;
  height: 190px;
  @media screen and (min-width: 767px) {
    width: 335px;
    height: 500px;
    margin-right: 30px;
  }
}
@media screen and (min-width: 767px) {
  margin : 10px 150px;
  }
`
export const MapSelectAddressWrapper = styled.div`

>.select-address-box{
  width: 100%;
  text-align: center;
  margin : 10px 0;
  >.mobile-middle-btn{
    width: 48%;
    &:nth-child(1){
      margin-right: 8px;
    }
  }
}
`
export const MapSearchBarContainer = styled.div`
>form{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom : 10px;
  >.map-search-btn{
    width: 50px;
    height : 45px;
    margin : 0;
    border-radius : 0 8px 8px 0;
    cursor: pointer;
  }
}
`
export const MapSearchInput = styled.input`
  width: 90%;
  height: 45px;
  font-size: ${MediumFont};
  font-weight: 400;
  border-radius: 8px 0 0 8px;
  border: 1px solid ${TextLightGrey};
  border-right: none;
  padding-left : 8px;
  @media screen and (min-width: 767px) {
  margin : 10px 0;
  width: 280px;
  }
`
export const MapHashtagWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin : 10px;
>.hashtag-box{
  width: 85%;
  text-align: right;
}
>.hashtag-box>.hashtag-category-btn{
  width: fit-content;
  height: 28px;
  border-radius: 8px;
  padding : 3px 15px;
  margin : 3px;
  cursor: pointer;
  >p{
    font-size: ${SmallFont}
  }
}
`
export const MapContainer = styled.div`
border-radius : 8px;
margin : 0 auto;
width : 100%;
height : 350px;

@media screen and (min-width: 767px) {
    width : 800px;
    height : 500px;
    margin :0;
}
`
export const MapInfoContainer = styled.div`
  border-radius : 8px;
  margin : 0;
  position: fixed;
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
  @media screen and (min-width: 767px) {
    position: relative;
    top : 10px;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
>a{
  display: flex;
  text-decoration: none;
  >div>hr{
    border: 1px solid rgba(0,0,0,0.2);
    margin : 3px 0;
  }
}
@media screen and (min-width: 767px) {
    /* border : 3px solid purple; */
    width: 335px;
  }
`
export const StoreImg = styled.img`
border-radius : 3px;
margin : 0 10px 0 0;
border: 1px solid;
width : 80px;
height : 80px;
`
export const StoreName = styled.h2`
border-radius : 8px;
margin :0;
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

visibility: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.1);
height: 260px;
border-radius : 8px;
>i{
  font-size: ${UltraLargeFont};
  color : ${TextDarkGrey};
  margin : 15px 0;
}
@media screen and (min-width : 767px){
  visibility: visible;
}
`