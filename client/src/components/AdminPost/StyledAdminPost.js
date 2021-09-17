import styled from 'styled-components'
import { BaseFont, LargeFont, MediumFont, SmallFont, TextLightGrey, UltraLargeFont } from '../GlobalStyle'

export const StyledPost = styled.div`
transition : all 0.3s;
`
export const StyledNav = styled.div`
display: flex;
justify-content: space-around;
margin : 30px 0 50px;
`
export const StyledAdminPost = styled.section`
padding : 10px;
display: flex;
justify-content: center;
align-items: center;
`
export const StyledImgUpload = styled.div`
display: grid;
grid-template-columns: 1fr 1.5fr;
cursor: pointer;
border-radius: 8px;
`
export const ImgUploadWrapper = styled.div`
height : 150px;
background-color: rgba(0,0,0,0.05);
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
margin-right : 10px;
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.1);
  opacity: 0,7;
}
`
//!store 슬라이더로 사진여러장 표시예정. 
export const StyledUploedImg = styled.div`
display: flex;
height : 150px;
cursor: pointer;
border: 1px solid lightgray;
border-radius: 8px;
`
export const StoreInputWrapper = styled.div`
/* border : 2px solid magenta; */
margin: 10px 0;
>.category-selection{
  padding : 8px;
  margin : 10px 0;
  height: 45px;
  border-radius: 8px;
  border : 1px solid #656D78;
}
`
export const StoreInputBox = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
&:nth-child(2){
  >.category-selection{
    margin : 8px 0;
  }
}
>label{
  font-size: ${BaseFont};
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: ${MediumFont};
  }
}
`
export const StoreNameInput = styled.input`
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
min-height: 38px;
padding : 8px;
margin : 10px 0;
font-size: ${BaseFont};
`
export const StoreIntroTextArea = styled.textarea`
padding : 8px;
height : 70px;
margin : 10px 0;
resize: none;
height: 100px;
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
`
export const StoreAddressWrapper = styled.div`
display: flex;
flex-direction: column;
margin : 8px 0;
`
export const StoreAddressBtn = styled.button`
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
min-height: 38px;
padding : 8px;
margin : 0;
text-align: center;
font-size: ${BaseFont};
cursor: pointer;
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.1);
  opacity: 0,7;
}
`
//!menu component style
export const StoreMenuAddWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1.5fr;
margin : 10px 0;
padding : 10px;
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
`
export const MenuUploadDiv = styled.div`
height: 160px;
cursor: pointer;
background-color: rgba(0,0,0,0.05);
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
margin-right : 10px;
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.1);
  opacity: 0,7;
}
`
export const MenuUploadDiv2 = styled.div`
>label{
  font-size: ${SmallFont};
  font-weight: 500;
  @media screen and (min-width: 768px) {
    
  }
}
`
export const MenuInputBox = styled.div`
>label{
  font-size: ${SmallFont};
  font-weight : 500;
}
`
export const MenuInput = styled.input`
width: 100%;
height : 30px;
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
padding : 8px;
`
export const MenuIntroTextArea = styled.textarea`
width: 100%;
height : 50px;
resize: none;
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
padding : 8px;
`
export const StoreMenuAddBtn = styled.div`
margin : 0 0 10px 0;
height: 45px;
border-radius: 8px;
border : 1px dashed #656D78;
text-align: center;
line-height: 42px;
font-size: ${LargeFont};
cursor: pointer;
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.1);
  opacity: 0,7;
}
`
export const StoreBtnBox = styled.div`
text-align: center;
`
export const PlusIcon = styled.p`
font-size: ${UltraLargeFont};
color : ${TextLightGrey};
`