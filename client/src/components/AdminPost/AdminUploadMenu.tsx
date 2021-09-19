import React,{useState} from 'react'
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
,StoreMenuAddBtn
} from './StyledAdminPost'

// interface MenuAddProps {
//   menuImg : any,
//   setMenuImgs : any,
//   menuName:string,
//   changeMenuName : any,
//   price : number,
//   priceHandler : any,
//   menuDescription : string,
//   // addMenuHandler : any,
//   menuArr : any
// }


function AdminUploadMenu({addMenuHandler,menuArr
  }:any):any {
    const [menuImg , setMenuImgs]:any = useState([]); 
  const [menuName , setMenuName] = useState('');
  const [price , setPrice] = useState(1000);
  const [menuDescription , setMenuDescription] = useState('');
  // const [menuInfo, setMenuInfo] =useState({});

  const priceHandler = (e:any) => {
    const comma = e.target.value;
    setPrice(comma);
  }

  const changeMenuName = (e:any) => {
    setMenuName(e.target.value)
  }
    const dropHandler = (file:any) => {
      console.log('====',file[0]);
      console.log('====',file[0].path);
      setMenuImgs(file[0].path);
      // props.updateFiles([...menuImg,files[0].path])
      // console.log('===img 경로보기===',imgs);
    }
    
    const changeMenuDesc = (e:any) => {
      setMenuDescription(e.target.value)
    }

    const addMenuItemHandler = () => {
      console.log('누르면 메뉴어레이 하나씩 더생김.')
      
      const menu1 = {
        menuImg : menuImg,
        menuName : menuName,
        price : price,
        menuDescription : menuDescription
      }
      console.log("addmenuItem", menu1)
      // setMenuArr([...menuArr,Menu])
      addMenuHandler(menu1);
      setMenuImgs([]);
      setPrice(0);
      setMenuName('');
      setMenuDescription('');
    }

  return (
    <StoreInputBox>
      <label>메뉴 등록</label>
      {menuArr && menuArr.map((el:any,idx:number)=> {
        console.log("el입니다.", el)
        return (
<StoreMenuAddWrapper key={idx}>
        <MenuUploadDiv2>
        <label>메뉴 이미지</label>
        <Dropzone onDrop={dropHandler}>
          {({getRootProps, getInputProps}) => (
              <MenuUploadDiv {...getRootProps()}>
                <input {...getInputProps()} />
                {el.menuImg.length === 0 ? 
                <PlusIcon>+</PlusIcon>
                : 
                <img 
                src = {`/Users/2sook2/Desktop/pictures/${el.menuImg}`}
                alt = {el.menuImg}/>
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
              onChange = {(e:any)=>{changeMenuName(e)}} 
              defaultValue = {el.menuName} />
          </MenuInputBox>
  
          <MenuInputBox>
            <label>가격</label>
            <MenuInput 
              type = 'number' 
              step = '1000'
              onChange = {(e:any)=>{priceHandler(e)}}
              defaultValue = {el.price}/>
          </MenuInputBox>

          <MenuInputBox>
            <label>메뉴 설명</label>
            <MenuIntroTextArea 
              defaultValue = {el.menuDescription} 
              onChange={(e:any)=>{changeMenuDesc(e)}}
              placeholder = '100자 이내로 작성해주세요.' 
              maxlength="100" />
          </MenuInputBox>
        </MenuUploadDiv2>
      </StoreMenuAddWrapper>
        )
      })}
      
      <StoreInputBox>
        <StoreMenuAddBtn 
          onClick = {addMenuItemHandler}>+ 메뉴추가
        </StoreMenuAddBtn> 
      </StoreInputBox>
    </StoreInputBox>
  )
}

export default AdminUploadMenu
