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
>label{
  font-size: ${BaseFont};
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: ${MediumFont};
  }
}
`
export const StoreNameInput = styled.input`
padding : 8px;
margin : 10px 0;
height: 45px;
border-radius: 8px;
border : 1px solid #656D78;
`
export const StoreIntroTextArea = styled.textarea`
padding : 8px;
height : 70px;
margin : 10px 0;
resize: none;
height: 100px;
border-radius: 8px;
border : 1px solid #656D78;
`
//!menu component style
export const StoreMenuAddWrapper = styled.div`
margin : 10px 0;
/* height: 150px; */
padding : 10px;
border : 1px solid #656D78;
border-radius: 8px;
display: flex;
`
export const MenuUploadDiv = styled.div`
width: 100px;
height:100px;
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
`
export const MenuInputBox = styled.div`
>label{
  font-size: ${SmallFont};
  font-weight : 500;
}
`
export const MenuInput = styled.input`
width: 100%;height : 30px;
`
export const MenuIntroTextArea = styled.textarea`
width: 100%;height : 50px;
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