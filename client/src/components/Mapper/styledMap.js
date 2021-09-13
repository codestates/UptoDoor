import styled ,{keyframes} from 'styled-components'
import { SmallFont, MediumFont ,TextLightGrey, TextColor } from '../GlobalStyle'

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
padding : 20px;
transition : all 0.3s;
`
export const MapSearchBarContainer = styled.div`
>form{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom : 10px;
  >.map-search-btn{
    width: 50px;
    height : 55px;
    margin : 0;
    border-radius : 0 8px 8px 0;
    cursor: pointer;
  }
}
`
export const MapSearchInput = styled.input`
  width: 280px;
  height: 55px;
  font-size: ${MediumFont};
  font-weight: 400;
  border-radius: 8px 0 0 8px;
  border: 1px solid ${TextLightGrey};
  border-right: none;
  padding-left : 8px;
`
export const MapHashtagWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin : 10px;
>.hashtag-box{
  width: 80%;
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
height : 400px;
`
export const MapInfoContainer = styled.div`
  border-radius : 8px;
  margin : 10px auto;
  height : 100px;
  position: relative;
  top :10px;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  animation: ${showInfoModalBg} .4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const MapInfoWrapper = styled.div`
  border-radius : 8px;
  margin : 0 auto;
  width: 100%;
  height : 100px;
  display: flex;
  box-sizing: border-box;
  max-width: 400px;
  animation: ${showInfoModal}.4s; 
  background-color: rgba(0,0,0,0.05);
  padding : 10px; 
>a{
  display: flex;
  text-decoration: none;
  >div>hr{
    border: 1px solid rgba(0,0,0,0.2);
    margin : 3px 0;
  }
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
font-size: ${MediumFont};
color : ${TextColor}
`
export const StoreAddress = styled.p`
border-radius : 8px;
margin : 0;
font-size: ${SmallFont};
color : ${TextColor}
`