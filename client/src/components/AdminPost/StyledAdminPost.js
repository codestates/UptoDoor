import styled from 'styled-components'
import { BaseFont, MediumFont, SmallFont, PointColor, TextDarkGrey, MainColor } from '../GlobalStyle'

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
display: flex;
justify-content: space-between;
>label{
  font-size: ${BaseFont};
  font-weight: 600;
}
`
export const ImgUploadWrapper = styled.div`
cursor: pointer;
color : #fff;
font-size: 12px;
padding : 3px 8px;
border-radius: 8px;
text-align: center;
background-color: ${PointColor};
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.1);
}
`
export const SliderWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
margin : 15px 0 40px;
/* background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
min-height: 160px; */
>.slick-initialized{
  /* margin : 10px; */
  width: 80% ;
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
      color: ${PointColor};
      margin : 0;
    }
  }
}
`
export const StoreImgBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
>img{
  height : 220px;
  width: 100%;
  padding : 0 10px;
  object-fit: contain;
  /* margin : 0 auto 10px; */
}
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
>.menu-enroll-label{
  margin-top : 10px;
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
export const StoreAddressBtn = styled.p`
width: 100%;
height : 45px;
background-color: hsl(0, 0%, 100%);
border-color: hsl(0, 0%, 80%);
border-radius: 4px;
border-style: solid;
border-width: 1px;
min-height: 38px;
padding : 8px;
margin-top : 10px;
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
font-size: ${SmallFont};
font-weight: 600;
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
export const MenuImg = styled.img`
width: 100%;
height : 100%;
object-fit: contain;
`
export const PlusIcon = styled.p`
text-align: center;
`