import styled from 'styled-components'
import Postcode from "react-daum-postcode";
import { BaseFont, SmallFont, PointColor, TextDarkGrey, MainColor } from '../GlobalStyle'

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
border-radius: 8px;
>p{
  font-size: 12px;
  text-align: right;
  margin : 0;
  color : ${TextDarkGrey};
}
`
export const StoreImgFlexWrapper = styled.div`
height : 24px;
display: flex;
justify-content: space-between;
align-items: flex-start;
>label{
  font-size: ${BaseFont};
  font-weight: 600;
  @media screen and (min-width: 767px) {
    align-items : center;
  }
}
`
export const ImgUploadWrapper = styled.div`
cursor: pointer;
color : #fff;
font-weight: 500;
font-size: 12px;
height : 24px;
padding : 3px 8px;
border-radius: 8px;
text-align: center;
background-color: ${MainColor};
@media screen and (min-width: 767px) {
  color : #fff;
  padding : 2px 10px;
  border-radius: 8px;
  text-align: right;
  }
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.1);
}
`
export const EmptyImgWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin : 10px 0 20px;
background-color: rgba(0,0,0,0.05);
min-height: 225px; 
border-radius: 8px;
`

export const SliderWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin : 10px 0 20px;

@media screen and (min-width: 767px) {
    margin : 0 auto;
    padding : 10px 0;
    width: 100%;
    height : 300px;
  }

>.slick-initialized{
  /* margin : 10px; */
  width: 80% ;
  /* z-index: -1; */
  >.slick-arrow{
    &::before{
      /* content: '버튼'; */
      background-color: none;
      color : ${MainColor};
      margin : 0;
    }
  }
  >ul{
  }
  >ul>li>button{
    &::before{
      color: ${MainColor};
      margin : 0;
    }
  }
}
`

export const StoreImgBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width: 767px) {
  }
>img{
  height : 220px;
  width: 100%;
  padding : 0 10px;
  object-fit: contain;
}
`
export const AdminForm = styled.div`
&:nth-child(1){
  @media screen and (min-width: 767px) {
    margin-right : 30px;
    width: 45%;
  }
}
&:nth-child(2){
  @media screen and (min-width: 767px) {
    margin-right : 30px;
    width: 55%;
  }
}
`
export const FlexBox = styled.div`
  @media screen and (min-width: 767px) {
    display : flex;
  }
`
export const StoreInputBox = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
&:nth-child(3){
  >div{
    margin : 8px 0;
    >div{
      /* border : 3px solid yellow; */
      >div{
        /* border : 2px solid magenta; */
      }
    }
  }
}
>label{
  font-size: ${BaseFont};
  font-weight: 600;
  @media screen and (min-width: 767px) {
  }
}
>.menu-enroll-label{
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
margin : 8px 0;
font-size: ${BaseFont};
`
export const StoreIntroTextArea = styled.textarea`
padding : 8px;
margin : 8px 0;
resize: none;
height: 70px;
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
`
export const StoreAddressWrapper = styled.div`
display: flex;
flex-direction: column;
`
export const StoreAddressBtn = styled.p`
width: 100%;
height : 42px;
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
min-height: 38px;
padding : 8px;
text-align: center;
font-size: ${SmallFont};
font-weight: 600;
cursor: pointer;
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.1);
  opacity: 0,7;
}
`
// menu component style
export const StoreMenuAddWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1.5fr;
padding : 10px;
margin : 8px 0 0;
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
`
export const MenuUploadImgBox = styled.div`
width: 100%;
height : 90%;
/* border:3px solid red; */
display: flex;
align-items: center;
justify-content: center;
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
  @media screen and (min-width: 767px) {
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
height: 42px;
border-radius: 8px;
border : 1px dashed #656D78;
text-align: center;
line-height: 42px;
font-size: ${SmallFont};
font-weight: 600;
cursor: pointer;
margin-top : 10px;
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.1);
  opacity: 0,7;
}
`
export const StoreBtnBox = styled.div`
text-align: center;
margin : 20px 0;
`
export const MenuImg = styled.img`
width: 90%;
height : 90%;
max-height: 160px;
margin-right: 10px;
object-fit: cover;
border-radius: 8px;
cursor: pointer;
&:hover{
  opacity: 0.8;
}
@media screen and (min-width: 767px) {
  width: 120px;
  height : 120px;
  }
@media screen and (min-width: 1140px) {
  width: 190px;
  height : 190px;
  }
@media screen and (min-width: 1440px) {
  width: 220px;
  height : 220px;
  }
`
export const PlusIcon = styled.p`
text-align: center;
`
export const FileUp = styled.input`
display: none;
`
//메뉴삭제버튼
export const RemoveMenuBtn = styled.button`
background-color: ${PointColor};
color : #fff;
border: none;
padding : 3px 10px;
margin-bottom : 10px; 
border-radius: 8px;
float: right;
cursor: pointer;
`


