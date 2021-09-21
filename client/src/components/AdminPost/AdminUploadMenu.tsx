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
  MenuImg,
  PlusIcon
,StoreMenuAddBtn
} from './StyledAdminPost'
import axios from 'axios';
axios.defaults.withCredentials = true;

function AdminUploadMenu({addMenuHandler,menuArr,setMenuArr
  }:any):any {
  const [menuImg , setMenuImg]:any = useState(''); 
  const [menuName , setMenuName] = useState('');
  const [price , setPrice] = useState(0);
  const [menuDescription , setMenuDescription] = useState('');

  const priceHandler = (e:any) => {
    setPrice(e.target.value)
    const lastIdx = menuArr.length-1;
    const copyArr = menuArr.slice()
    copyArr[lastIdx].price = e.target.value;
    setMenuArr(copyArr);
  }
  const changeMenuName = (e:any) => {
    setMenuName(e.target.value)
    const lastIdx = menuArr.length-1;
    const copyArr = menuArr.slice()
    copyArr[lastIdx].menuName = e.target.value
    setMenuArr(copyArr);

  }
    const dropHandler = (file:any) => {
      const formData = new FormData();
      const config = {
        headers: { 'content-type' : 'multipart/form-data'}
      }
      formData.append('file',file[0]);
      //dispatch action axios 관리된거 와야함.
      axios.post('http://localhost:3060/image',formData,config)
      .then((res)=>{
        if(res.data.success){
          const copyArr = menuArr.slice()
          const lastIdx = copyArr.length-1;
          copyArr[lastIdx].menuImg = res.data.filePath
          console.log("copyImg만들어가는 배열",copyArr)
          setMenuImg(res.data.filePath)

        }else{
          alert('파일저장실패')
        }
      })
      .catch((err)=>{
        return console.log('==file 가져오기 실패===',err)
      })
    }
  
    const changeMenuDesc = (e:any) => {

      setMenuDescription(e.target.value)
      const lastIdx = menuArr.length-1;
      const copyArr = menuArr.slice()
      copyArr[lastIdx].menuDescription = e.target.value;
      setMenuArr(copyArr);
    }

    const addMenuItemHandler = () => {
      if(menuImg && menuName && price && menuDescription){
        const menus = {
          menuImg : menuImg,
          menuName : menuName,
          price : price,
          menuDescription : menuDescription
        }
        addMenuHandler(menus);
        setMenuImg('');
        setPrice(0);
        setMenuName('');
        setMenuDescription('');
      }else{
        alert("항목을 다 입력해 주세요")
      }
    }
//form 제출 시 onsubmit -> 해당 데이터 담겨서 전달 
  return (
    <StoreInputBox>
      <label className = 'menu-enroll-label'>메뉴 등록</label>
      {menuArr && menuArr.map((el:any,idx:number) => {
      // console.log('-----el----',el);
        return (
          <StoreMenuAddWrapper key={idx}>
            <MenuUploadDiv2>
            <label>메뉴 이미지</label>
            <Dropzone onDrop={dropHandler}>
              {({getRootProps, getInputProps}) => (
                  <MenuUploadDiv {...getRootProps()}>
                    <input 
                    required {...getInputProps()} />
                    {el.menuImg.length === 0 ? 
                    <PlusIcon>+</PlusIcon>
                    : 
                    <MenuImg 
                    src = {el.menuImg}
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
                  required
                  type = 'text' 
                  step = '1000'
                  onChange = {(e:any)=>{changeMenuName(e)}} 
                  defaultValue = {el.menuName} 
                  />
              </MenuInputBox>
              <MenuInputBox>
                <label>가격</label>
                <MenuInput 
                  required
                  type = 'number' 
                  step = '1000'
                  onChange = {(e:any)=>{priceHandler(e)}}
                  defaultValue = {el.price}/>
              </MenuInputBox>
    
              <MenuInputBox>
                <label>메뉴 설명</label>
                <MenuIntroTextArea 
                  required
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
