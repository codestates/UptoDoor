import styled,{keyframes} from 'styled-components'
import { PointColor, TextLightGrey, TextDarkGrey, MainColor, UltraLargeFont} from '../GlobalStyle'

const moving = keyframes`
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(10%);
  }
`
export const P = styled.p`
font-size: 12px;
letter-spacing: -1px;
text-decoration: ${TextLightGrey};
text-decoration: ${({cancleline})=> (cancleline ? 'line-through' : 'none')};
color : ${({lightColorText})=> (lightColorText ? {TextLightGrey} : {TextDarkGrey})};
`
export const H2 = styled.h2`
text-decoration: ${TextLightGrey};
text-decoration: ${({cancleline})=> (cancleline ? 'line-through' : 'none')};
color : ${({lightColorText})=> (lightColorText ? {TextLightGrey} : {TextDarkGrey})};
`
export const H3 = styled.h3`
font-weight : 500;
font-size : 16px;
margin : 0 0 0 3px;
`
export const H4 = styled.h4`
font-weight : 400;
font-size : 14px;
margin: 3px;
color : ${TextDarkGrey};
`
export const EmptyStore = styled.div`
background-color: #f7f7f7;
height : 200px;
border-radius: 4px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
>i{
  font-size: 40px;
  color : rgba(0,0,0,0.3);
  margin-bottom: 20px;
}
>p{
  color : rgba(0,0,0,0.6);
}
@media screen and (min-width: 767px) {
  height: 400px;  
  >i{
    font-size: ${UltraLargeFont};
  }
    >p{
    font-size: 14px;
  }
}
`

export const StoreInfoWrapper = styled.section`
border-bottom: 2px solid #f3f3f3;
padding : 0 8px 8px;
`
export const OrderInfoWrapper = styled.div`
width: 100%;
padding : 8px;
`
export const OrderSection = styled.div`
box-shadow: ${({shadow})=>(shadow ? 
'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px'
: 
'none')};
padding : 10px;
`
export const FlexBox = styled.div`
  display: flex;
  align-items: ${({ align }) => (align ? "center" : "flex-start")};
  justify-content: ${({ between }) =>
    between ? "space-between" : "flex-start"};
  flex-direction: ${({ col }) => (col ? "column" : "row")};
  margin: 8px 0;
  margin-bottom: ${({ distance }) => (distance ? "0" : "8px")};
  padding: ${({ distance }) => (distance ? "8px" : "0")};
  > .i-wrapper {
    display: flex;
    align-items: center;
  }
  > .order-text-content {
    flex: 2;
    > div > div {
      margin: 0;
    }
  }
  &:nth-child(1) {
    > div > i {
      color: ${MainColor};
      cursor: pointer;
      &:hover {
        animation: ${moving} 0.3s 0s ease infinite alternate-reverse;
      }
    }
    > div > span {
      font-weight: 500;
      margin: 0 7px;
      padding-bottom: 1px;
      font-size: 12px;
    }

    @media screen and (min-width: 767px) {
      > div > span {
        font-size: 16px;
      }
    }
  }
`;
export const EachItemBox = styled.div`
margin : 5px 0;
width: 100%;
`
export const Category = styled.div`
background-color: ${PointColor};
color : #fff;
border-radius: 8px;
text-align: center;
padding: 3px 8px 4px;
font-size: 12px ;
`
export const DetailTextArea = styled.textarea`
height : 50px;
width: 100%;
resize: none;
background-color: #f7f7f7;
color : ${TextLightGrey};
cursor: default;
border : none;
padding: 8px;
margin : 8px 0 0;
`
export const TtlPricemBox = styled.div`
margin : 20px 0 3px;
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
>h2{
  margin-left: 10px; 
}
`
export const OrderDate = styled.p`
color : ${TextLightGrey};
font-size: 12px;
`
export const OrderImg = styled.img`
width : 80px;
height : 80px;
border-radius: 4px;
margin : 5px 10px 5px 0;
`
//Myprofile
export const ButtonWrapper = styled.div`
  width: 40%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  > button {
    padding: 2px;
    background-color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    color: #656d78;

    a {
      text-decoration: none;
      color: #656d78;
    }
  }

  @media screen and (min-width: 767px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    > button {
      margin: 3px;
      font-size: 14px;
      a {
        font-size: 14px;
      }
    }
  }
  @media screen and (min-width: 1140px) {
    > button {
      margin: 3px;
      font-size: 16px;
      a {
        font-size: 16px;
      }
    }
  }
`;

export const MypageUl = styled.ul`
list-style: none;
display: flex;
width: 100%;
height: 40px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
> .focus {
  background-color: #f7f7f7;
}
@media screen and (min-width: 767px) {
  flex-direction: column;
  height: 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
`;

export const MypageLi = styled.li`
width: 100%;
height: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
border: none;
cursor: pointer;
color: #656d78;
letter-spacing: -1px;

@media screen and (min-width: 767px) {
  height: 50px;
  width: 100%;
  border: none;
  font-size: 16px;
}
`;

export const MypageOrderListWrapper = styled.div`
  width: 100%;
  padding: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
  @media screen and (min-width: 767px) {
    width:80%;
  }

  @media screen and (min-width: 1140px) {
    padding: 32px;
  }
`;

export const OrderListContent = styled.div`
width: 100%;
border-bottom: 2px solid #f3f3f3;
padding: 8px;
:nth-child(1) {
  border-top: 2px solid #f3f3f3;
}
@media screen and (min-width: 1140px) {
  padding: 16px 8px;
}
`;

export const ListDate = styled.div`
padding: 2px 6px;
display: flex;
align-items: center;
justify-content: flex-start;
> p {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 12px;
}
> h5 {
  font-weight: 500;
}
@media screen and (min-width: 1140px) {
  > p {
    font-size: 16px;
    margin-right: 15px;
  }
  > h5 {
    font-size: 18px;
  }
}
`;

export const ListInfo = styled.div`
  width:100%;
  padding: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > img {
    min-width: 60px;
    height: 60px;
    margin-top: 6px;
    margin-right: 15px;
  }
  @media screen and (min-width: 767px) {
    padding: 2px 10px;
    
  }
  @media screen and (min-width: 1140px) {
    padding: 2px 16px;
    
    > img {
      min-width: 70px;
      width:70px;
      height:80px;
      margin-top: 10px;
      margin-right: 20px;
    }
  }
`;

export const DeliveryState = styled.h5`
  margin-right: 8px;
  color: #fff;
  min-width: 50px;
  font-weight: 400;
  height: 20px;
  border-radius: 4px;
  text-align: center;
  padding: 2px;
  font-size: 10px;
  background-color: ${({ blue }) => (blue ? MainColor : PointColor)};
  
  @media screen and (min-width: 767px) {
    width: 60px;
    height: 24px;
    margin: 0 15px 0 0;
    font-size: 12px;
    border-radius: 8px;
    text-align: center;
    line-height: -1.5rem;
  }
  @media screen and (min-width: 1140px) {
    min-width: 70px;
    width: 70px;
    margin-right: 15px;
    font-size: 14px;
    /* padding: 5px; */
    height: 25px;
    border-radius: 8px;
    text-align: center;
    line-height: -3rem;
  }
`;

export const OrderListWrapper = styled.div`
display: flex;
align-items: center;
`;

export const ListInfoDetail = styled.div`
  width:100%;

  > h4 {
    font-weight: 500;
    font-size: 14px;
  }
  > p {
    font-size: 14px;
    > span {
      display: none;
    }
  }
  @media screen and (min-width: 767px) {
    > p {
      margin-top: 4px;
      > span {
        display: inline;
        margin-right: 10px;
      }
    }
  }

  @media screen and (min-width: 1140px) {
      font-size: 18px;
      > p {
        margin-top: 4px;
        > span {
          margin-right: 10px;
        }
      }
  }
`;