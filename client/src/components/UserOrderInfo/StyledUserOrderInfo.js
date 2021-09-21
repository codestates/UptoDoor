import styled from 'styled-components'
import { PointColor, SmallFont, TextLightGrey, TextDarkGrey } from '../GlobalStyle'

export const StoreInfoWrapper = styled.section`
`
export const OrderInfoWrapper = styled.div`
border-top: 2px solid #f3f3f3;
`
export const FlexBox = styled.div`
display : flex;
justify-content: ${({between})=>(between ? 'space-between' : 'center')};
flex-direction: ${({col})=>(col ? 'column' : 'row')};
margin : 8px 0;
`
export const Category = styled.div`
background-color: ${PointColor};
color : #fff;
width: 40px;
border-radius: 4px;
text-align: center;
padding:2px;
font-size: 12px;
`
export const H4 = styled.h4`
font-weight : 500;
font-size : 14px;
`
export const P = styled.p`
font-size: 14px;
`
export const DetailTextArea = styled.textarea`
height : 50px;
resize: none;
background-color: #f7f7f7;
color : ${TextDarkGrey};
border : none;
padding: 8px;
`
export const OrderDate = styled.p`
color : ${TextLightGrey};
font-size: ${SmallFont};
`
export const OrderImg = styled.img`
width : 80px;
height : 80px;
border : 3px solid ;
`


