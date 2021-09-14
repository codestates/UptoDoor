import styled from 'styled-components';
import { 
  MediumFont, 
  TextLightGrey,
  LargeFont,
  MainColor, 
  SmallFont, 
  PointColor} from '../GlobalStyle';

export const StoreDataContainer = styled.section`
`
export const StoreDataWrapper = styled.div`

`
export const StoreFlexDiv = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 50px;
  }
`
export const StoreInfoTitle = styled.h3`
  margin : 0 20px 20px ;
  font-size: ${LargeFont};
  @media screen and (min-width: 767px) {
    margin : 100px 170px -20px;
    font-size: 32px;
  }
`
export const StoreIntro = styled.div`
  display: flex;
  font-size: ${SmallFont};
  margin : 8px;
  @media screen and (min-width: 767px) {
    align-items: center;
    }
  >.flex-box{
    width: 230px;
    line-height: 23px;
    @media screen and (min-width: 767px) {
    margin : 20px 0;
    width: 88%;;
    }
    >span{
    font-size: ${MediumFont};
    font-weight: 500;
    @media screen and (min-width: 767px) {
      font-size : ${LargeFont};
    }
  }
  >.store-introduce{
    color : ${TextLightGrey};
    }
  }
  @media screen and (min-width: 767px) {
    flex-direction: column;
    width: 450px;
    height : 600px;
  }
`
export const StoreAddressP = styled.p`
@media screen and (min-width: 767px) {
    margin-top :20px;
    font-size : ${LargeFont};
  }
`
export const StoreInfoP = styled.p`
@media screen and (min-width: 767px) {
    width: 100%;
    height:96px;
    background-color: rgba(0,0,0,0.1);
    margin-top :20px;
    padding : 10px;
    font-size : ${MediumFont};
    border-radius: 8px;
  }
`
export const StoreImg = styled.img`
width: 100px;
height:100px;
border-radius: 8px;
box-shadow: 1px 1px 1px ${TextLightGrey};
margin: 0 10px;
@media screen and (min-width: 767px) {
  width: 90%;
  height: 300px;
  }
`
export const StoreCategory = styled.div`
background-color: ${PointColor};
color : #fff;
padding : 2px 10px;
border-radius: 8px;
float: right;
text-align: right;
`
export const MenuOrderContainer = styled.div`
@media screen and (min-width: 767px) {
    width: 50%;
    height: 600px;
  }
`
export const MenuContainer = styled.div`
height: 400px;
overflow: hidden;
overflow-y: auto;
margin : 15px 8px;
background-color: rgba(0,0,0,0.1);
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
@media screen and (min-width: 767px) {
  margin : 0 0 20px;
  height: 500px;
}
`
export const MenuWrapper = styled.div`
display: flex;
justify-content: space-between;
background-color: #fff;
box-shadow: 1px 1px 1px ${TextLightGrey};
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
box-shadow: 1px 1px 1px ${TextLightGrey};
margin: 0 10px;
`
export const MenuName = styled.p`
font-size: ${MediumFont};
font-weight: 600;
`
export const BtnBox = styled.div`
text-align: center;
@media screen and (min-width: 767px) {
  display: flex;
  justify-content: center;
}
>.middle, a>.middle{
  margin : 5px;
  width: 340px;
  height: 50px;
  @media screen and (min-width: 767px) {
    width: 202px;
    height: 60px;
}
}
`
