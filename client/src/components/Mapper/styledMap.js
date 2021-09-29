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
  TextDarkGrey,
  PointColor
} from '../GlobalStyle'
import { Link } from "react-router-dom";

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
/* transition : all 0.3s;
padding : 0 8px;
max-width: 1440px; */
margin: 30px auto;
min-width: 375px;
width: 100%;
height : 716px;

>.line{
  visibility: hidden;
  @media screen and (min-width: 768px) {
    visibility: visible;
    margin: 20px 0 10px;
    border-bottom : 1px solid ${TextLightGrey};
  }
}
@media screen and (min-width: 499px) {
  height: unset;
}
@media screen and (min-width: 768px) {
  /* margin : 60px 30px; */
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
  margin: 0 auto;
  width: 90%;
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: auto 560px;
    justify-content: center;
    /* align-items: flex-start; */
    margin-top: 30px;
    height: 615px;
  }
  @media screen and (min-width: 1140px) {
    grid-template-columns: auto 640px;
  }
`;
export const MapHashWrapper = styled.div`
  margin: 20px 0 10px;
@media screen and (min-width: 768px) {
  margin: 20px 0 0;
}
@media screen and (min-width: 1000px) {
  min-width: 410px;
  margin:0 30px 0 0;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
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
margin : 0 0 15px 0;
}
`

export const MapForm = styled.form`
/* display: none; */
display: flex;
justify-content: center;
align-items: center;
margin-bottom : 10px;
@media screen and (min-width: 768px) {
  margin-bottom: 15px;
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
  margin : 0 0 10px;
`
export const MapHashTagBox = styled.div`
  width: 100%;
  text-align: right;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1000px) {
    width: 80%;
    margin: 0 0 15px;
  }
  > .hashtag-category-btn {
    width: fit-content;
    height: 28px;
    border-radius: 15px;
    padding: 3px 15px 10px;
    margin: 3px;
    @media screen and (min-width: 768px) {
      height: 34px;
    }
    > p {
      font-size: 12px;
      @media screen and (min-width: 768px) {
        font-size: ${BaseFont};
      }
    }
  }
`;
export const MapContainer = styled.div`
border-radius : 8px;
margin : 0 auto;
width : 95%;
height : 440px;
z-index: 1;
@media screen and (min-width: 768px) {
    height : 400px;
    margin :0 auto;
}
@media screen and (min-width: 1000px) {
  max-width: 640px;
  height: 100%;
  }
`
export const MapInfoContainer = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 100px;
  
  bottom: 30px;
  background-color: #fff;
  animation: ${showInfoModalBg} 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 499px) {
    position: relative;
    bottom: 0px;
    height: 300px;
  }
  @media screen and (min-width: 767px) {
    position: relative;
    bottom: 0px;
    height: 300px;
  }
`;
export const MapInfoWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin: 3px auto;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  animation: ${showInfoModal}.4s;
  padding: 8px;
  background-color: #fff;

  > div {
    height: 75px;
    margin: 10px;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 5px; 
    @media screen and (min-width: 500px) {
    width: 70%;
    }
    @media screen and (min-width: 768px) {
    width: 75%;
  }
  }
  @media screen and (min-width: 500px) {
    margin: 3px auto 6px;
  }

  @media screen and (min-width: 767px) {
    width: 100%;
    background-color: #fff;
  }
  @media screen and (min-width: 1000px) {
    margin: 5px;
    width: 100%;
    background-color: #fff;
  }
`;
export const StoreImg = styled.img`
  border-radius: 3px;
  margin: 0 10px 0 0;
  width: 70px;
  height: 70px;
  object-fit: cover;

  @media screen and (min-width: 1000px) {
    margin: 0 15px 0 10px;
    min-width: 75px;
    min-height: 75px;
  }
`;
export const StoreName = styled.h2`
  border-radius: 8px;
  margin: 8px 0;
  color: ${TextColor};
  font-size: ${SmallFont};
  @media screen and (min-width: 768px) {
    /* width: 120px; */
    font-size: ${BaseFont};
  }
  @media screen and (min-width: 1000px) {
    font-size: ${BaseFont};
  }
`;
export const StoreAddress = styled.p`
border-radius : 8px;
margin : 0;
font-size: ${SmallFont};
color : ${TextColor};
`
export const EmptyMapContainer = styled.div`
  display: none;
  > .empty {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    > i {
      font-size: ${UltraLargeFont};
      color: ${TextDarkGrey};
      margin: 15px 0;
    }
  }

  @media screen and (min-width: 1000px) {
    /* visibility: visible; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.1);
    height: 365px;
    border-radius: 8px;
    padding: 15px;
    overflow: hidden;
    overflow-y: auto;
  }
`;

export const MapInfoWebContainer = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
  animation: ${showInfoModalBg} 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  overflow-y: auto;
`;

export const MapAppContainer = styled.div`
  position: relative;
  padding: 12px 10px;
  margin: 0 auto;
  width: 86%;
  background-color: #f7f7f7;
  height: 120px;
  overflow: hidden;
  overflow-y: auto;
  bottom: 120px;
  border-radius: 8px;
  z-index: 12;

  /* &::-webkit-scrollbar {
    background-color: ${MainColor};
    width: 6px;
    padding : 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
  } */
  @media screen and (min-width: 499px) {
    bottom: 0px;
    height: 300px;
    padding: 15px 10px;
  }

  @media screen and (min-width: 1000px) {
    display: none;
    /* position: relative;
    top: 10px;
    width: 100%;
    margin: 0;
    padding: 0; */
  }
`;

export const MoveBtn = styled.span`
width: 20px;
height: 20px;
text-align: right;
  @media screen and (min-width: 767px) {
    margin: 0;
    margin-left: 40px;
  }

  @media screen and (min-width: 1000px) {
    margin-right: 15px;
    width: 20px;
    height: 20px;
  }
`;