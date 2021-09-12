import styled from 'styled-components'
import { 
  MediumFont,PointColor,
  MainColor,TextDarkGrey, SmallFont, LargeFont,TextLightGrey
} from '../GlobalStyle'

//,PointColor,TextColor,,TextLightGrey,SmallFont,BaseFont,MediumFont,LargeFont
export const SignupContainer = styled.section`
color : ${MainColor};
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const H1 = styled.h1`
font-size: ${LargeFont};
margin : 20px 0;
`
export const Form = styled.form`
width: 80%;
margin : 10px auto;
`
export const Label = styled.label`
color : ${TextDarkGrey};
font-size: ${MediumFont};
margin-right: 10px;
`
export const SideSpan = styled.span`
color : ${MainColor};
font-size: ${SmallFont};
`
export const Input = styled.input`
margin : 10px 0;
padding :5px 10px;
width : 100%;
font-size: ${SmallFont};
border : 1px solid ${TextLightGrey} ;
border-radius: 3px;
`
export const SelectBox = styled.div`
border : 3px solid;
>select{
  border : 3px solid red;
  width: 80%;
}
`
export const ErrMsgP = styled.p`
color : ${PointColor};
font-size: ${SmallFont};
`
export const Button = styled.button`
width : 80px;
background-color : ${MainColor};
border: none;
border-radius: 5px;
margin : 3px;
color : #fff;
padding : 5px ;
font-size: ${SmallFont};
`