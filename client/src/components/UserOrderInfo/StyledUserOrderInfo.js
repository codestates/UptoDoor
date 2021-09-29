import styled,{keyframes} from 'styled-components'
import { PointColor, 
  TextLightGrey, TextDarkGrey, MainColor} from '../GlobalStyle'

const moving = keyframes`
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(10%);
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
display : flex;
align-items: ${({align})=> (align ?'center' : 'flex-start')};
justify-content: ${({between})=>(between ? 'space-between' : 'flex-start')};
flex-direction: ${({col})=>(col ? 'column' : 'row')};
margin : 8px 0;
margin-bottom: ${({distance})=>(distance ? '0' : '8px')};
padding: ${({distance})=>(distance ? '8px' : '0')};
>.i-wrapper{
  display: flex;
  align-items: center;
}
>.order-text-content{
  flex : 2;
  >div>div{
    margin : 0;
  }
}
&:nth-child(1){
>div>i{
  color : ${MainColor};
  cursor: pointer;
  &:hover{
    animation: ${moving} 0.3s 0s ease infinite alternate-reverse;
  }
}
>div>span{
    font-weight : 500;
    margin : 0 7px;
    padding-bottom : 1px;
  }
}
`
export const EachItemBox = styled.div`
margin : 5px 0;
width: 100%;
`
export const Category = styled.div`
background-color: ${PointColor};
color : #fff;
width: 40px;
height: 24px;
border-radius: 4px;
text-align: center;
padding:2px;
font-size: 12px;
`
export const H2 = styled.h2`
text-decoration: ${TextLightGrey};
text-decoration: ${({cancleline})=> (cancleline ? 'line-through' : 'none')};
color : ${({lightColorText})=> (lightColorText ? {TextLightGrey} : {TextDarkGrey})};
`
export const H3 = styled.h3`
font-weight : 500;
font-size : 16px;
`
export const H4 = styled.h4`
font-weight : 400;
font-size : 14px;
margin: 3px 0;
color : ${TextDarkGrey};
`
export const P = styled.p`
font-size: 12px;
text-decoration: ${TextLightGrey};
text-decoration: ${({cancleline})=> (cancleline ? 'line-through' : 'none')};
color : ${({lightColorText})=> (lightColorText ? {TextLightGrey} : {TextDarkGrey})};
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


