import React , {useState} from 'react'
import Dropzone from 'react-dropzone'
import {
  StoreInputBox,
  StoreMenuAddWrapper,
  MenuInputBox,
  MenuInput,
  MenuIntroTextArea,
  MenuUploadDiv,
  MenuUploadDiv2,
  PlusIcon

} from './StyledAdminPost'

interface MenuAddProps {
  menuName:string,
  changeMenuName : any,
  price : number,
  priceHandler : any,
  menuDescription : string,
  changeMenuDesc : any
}

function AdminUploadMenu({
  menuName,changeMenuName,price,priceHandler,menuDescription,changeMenuDesc}:MenuAddProps) {
    
    const [menuImg , setMenuImgs]:any = useState([]); 

    const dropHandler = (file:any) => {
      console.log('====',file[0]);
      console.log('====',file[0].path);
      setMenuImgs(file[0].path);
      // props.updateFiles([...menuImg,files[0].path])
      // console.log('===img 경로보기===',imgs);
    }
    
  return (
    <StoreInputBox>
      <label>메뉴 등록</label>
      <StoreMenuAddWrapper>
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
    </StoreInputBox>
  )
}

export default AdminUploadMenu
