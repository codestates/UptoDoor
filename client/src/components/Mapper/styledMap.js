import styled from 'styled-components'
import { SmallFont, MediumFont ,TextLightGrey, TextColor } from '../GlobalStyle'

export const MapWrapperContainer = styled.section`
/* display: flex;
justify-content: center;
align-items: center;
flex-direction: column; */
padding : 20px;
transition : all 0.3s;
`
export const MapSearchBarContainer = styled.div`
/* border : 3px solid brown; */
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
width : 300px;
height : 300px;
`
export const MapInfoContainer = styled.div`
background-color: rgba(0,0,0,0.1);
border-radius : 8px;
margin : 10px auto;
width : 90%;
height : 100px;
`
export const MapInfoWrapper = styled.div`
border-radius : 8px;
margin : 10px auto;
height : 100px;
display: flex;
align-items: center;
>a{
  display: flex;
  text-decoration: none;
  color : ${TextColor}
}
`
export const StoreImg = styled.img`
border-radius : 3px;
margin : 5px;
border: 1px solid;
width : 80px;
height : 80px;
`
export const StoreName = styled.h2`
border-radius : 8px;
margin :0;
font-size: ${MediumFont};
`
export const StoreAddress = styled.p`
border-radius : 8px;
margin : 0;
font-size: ${SmallFont};
`