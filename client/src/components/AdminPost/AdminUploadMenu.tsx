import React from 'react'
import Dropzone from 'react-dropzone'
import {
  StoreInputBox,
  StoreMenuAddWrapper,StoreMenuAddBtn,
  MenuInputBox,
  MenuInput,
  MenuIntroTextArea,
  MenuUploadDiv,
  MenuUploadDiv2,
  PlusIcon

} from './StyledAdminPost'

interface MenuAddProps {
  menuImg : any,
  setMenuImgs : any,
  menuName:string,
  changeMenuName : any,
  price : number,
  priceHandler : any,
  menuDescription : string,
  changeMenuDesc : any,
  addMenuHandler : any,
  // menuArr : any
}

function AdminUploadMenu({
  menuImg,setMenuImgs,menuName,changeMenuName,
  price,priceHandler,menuDescription,
  changeMenuDesc,addMenuHandler}:MenuAddProps) {
    

    const dropHandler = (file:any) => {
      console.log('====',file[0]);
      console.log('====',file[0].path);
      setMenuImgs(file[0].path);
      // props.updateFiles([...menuImg,files[0].path])
      // console.log('===img 경로보기===',imgs);
    }

    {/* 메뉴등록 컴포넌트 
    1. 메뉴아이템 state 배열로 생성
    2. 배열안에 메뉴이미지,이름,가격,설명 들어간다.
    3. addmenuhandler 클릭하면 메뉴아이템스테이트 하나씩 추가된다.
    */}
    
  return (
    <StoreInputBox>
      <label>메뉴 등록</label>
      <StoreMenuAddWrapper>
        <MenuUploadDiv2>
        <label>메뉴 이미지</label>
        <Dropzone onDrop={dropHandler}>
          {({getRootProps, getInputProps}) => (
              <MenuUploadDiv {...getRootProps()}>
                <input {...getInputProps()} />
                {menuImg.length === 0 ? 
                <PlusIcon>+</PlusIcon>
                : 
                <img 
                src = {`/Users/2sook2/Desktop/pictures/${menuImg}`}
                alt = {menuImg}/>
                }
              </MenuUploadDiv>
          )}
        </Dropzone>
        </MenuUploadDiv2>
        <MenuUploadDiv2>
          <MenuInputBox>
            <label>메뉴이름</label>
            <MenuInput 
              type = 'text' 
              step = '1000'
              onChange = {changeMenuName} 
              value = {menuName} />
          </MenuInputBox>
  
          <MenuInputBox>
            <label>가격</label>
            <MenuInput 
              type = 'number' 
              step = '1000'
              onChange = {priceHandler} 
              value = {price}/>
          </MenuInputBox>

          <MenuInputBox>
            <label>가게 설명</label>
            <MenuIntroTextArea 
              value = {menuDescription} 
              placeholder = '간단한 메뉴설명 작성해주세요' 
              onChange = {changeMenuDesc}/>
          </MenuInputBox>
        </MenuUploadDiv2>
      </StoreMenuAddWrapper>


      <StoreInputBox>
        <StoreMenuAddBtn 
          onClick = {addMenuHandler}>+
        </StoreMenuAddBtn> 
      </StoreInputBox>
    </StoreInputBox>
  )
}

export default AdminUploadMenu
