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
>.signup-line{
  border-bottom : 1px solid rgba(0,0,0,0.6);
  width : 80%;
  margin-bottom: 20px;
}
`
export const H1 = styled.h1`
font-size: ${LargeFont};
margin : 20px 0 40px;
`
export const Form = styled.form`
margin : 10px auto;
>.cert-email-btn{
  width: 60%;
  text-align: right;
  /* float: right; */
  border:none;
  font-size: ${SmallFont};
}
>.email-input{
  margin-top: -6px;
  /* clear: both; */
}
>.signup-btn-box{
  text-align: center;
  margin : 20px;
}
`
export const Label = styled.label`
color : ${TextDarkGrey};
font-size: ${MediumFont};
margin-right: 10px;
`
export const SignupLogoBox = styled.div`
margin : 20px;
width: 220px;
`
export const SignupLogo = styled.img`
width: 100%;
object-fit: contain;
`
export const SideSpan = styled.span`
color : ${TextLightGrey};
font-size: ${SmallFont};
`
export const SignUpInput = styled.input`
  width: 280px;
  height: 55px;
  font-size: ${MediumFont};
  padding: 8px;
  margin: 6px 0 10px;
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid ${TextLightGrey};
`
export const SelectBox = styled.div`
>.selection{
  width: 280px;
  height: 55px;
  font-size: ${MediumFont};
  padding: 5px;
  margin: 6px 0 10px;
  font-weight: 400;
  border-radius: 8px;
  border: 1px dashed ${TextLightGrey};
  /* z-index : -1; */
  >.css-yk16xz-control,.css-g1d714-ValueContainer{
    border:none;  
  }
}
`
export const TermWrapper = styled.div`
width: 280px;
>.term-array-box{
  border-radius : 8px;
  background-color: rgba(0,0,0,0.1);
  padding : 10px;
  margin : 6px 0 10px;
  color : ${TextDarkGrey};
  >.term-array{
    &:nth-child(4){
      margin-bottom: 10px;
    }
  }
}
`
export const TermSpan = styled.span`
cursor: pointer;
color : ${MainColor};
margin-left : 5px;
`
export const ErrMsgP = styled.p`
color : ${PointColor};
font-size: ${SmallFont};
margin-left : 5px 0;
`
