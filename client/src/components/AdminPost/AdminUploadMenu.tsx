import React,{useState} from 'react'
import {
  StoreInputBox,
  StoreMenuAddWrapper,
  MenuInputBox,
  MenuInput,
  MenuIntroTextArea,
  MenuUploadContent,MenuUploadImgBox,
  MenuImg,
  RemoveMenuBtn,
  FileUp ,StoreMenuAddBtn
} from './StyledAdminPost'
import axios from 'axios';
import { END_POINTS } from '../../_actions/type';
axios.defaults.withCredentials = true;

function AdminUploadMenu({
  addMenuHandler,menuArr,
  setMenuArr,removeMenuHandler
  }:any):any {
  const [menuImg , setMenuImg]:any = useState(''); 
  const [menuName , setMenuName] = useState('');
  const [price , setPrice] = useState(0);
  const [menuDescription , setMenuDescription] = useState('');
  
  const priceHandler = (e:any) => {
    if(Number(e.target.value) < 0 ){
      console.log('0보다 작음', typeof e.target.value)
      setPrice(0)
    }else{
      console.log('0보다 큼')
      setPrice(e.target.value)
      const copyArr = JSON.parse(JSON.stringify(menuArr));
      copyArr[e.target.id].price = e.target.value
      setMenuArr(copyArr)
    }
  }
  const changeMenuName = (e:any) => {
    setMenuName(e.target.value)
    const copyArr = JSON.parse(JSON.stringify(menuArr));
    copyArr[e.target.id].menuName = e.target.value
    setMenuArr(copyArr)
  }
  const dropHandler = (e:any) => {
      const file = e.target.files
      const formData = new FormData();
      const config = {
        headers: { 'content-type' : 'multipart/form-data'}
      }
      formData.append('file',file[0]);
      //dispatch action axios 관리된거 와야함.
      axios.post(`${END_POINTS}/image`,formData,config)
      .then((res)=>{
        if(res.data.success){
          //깊은복사
          const copyArr = JSON.parse(JSON.stringify(menuArr));
          copyArr[e.target.id].menuImg = res.data.filePath
          setMenuArr(copyArr)
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
    // console.log('menuDescription',menuDescription)
    const copyArr = JSON.parse(JSON.stringify(menuArr));
    copyArr[e.target.id].menuDescription = e.target.value
    setMenuArr(copyArr)
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

  const uploadHandler = (e:any) => {
    e.target.previousSibling.click();
  }
  const checkHandler = (e:any) => {   
    dropHandler(e)
  }

//form 제출 시 onsubmit -> 해당 데이터 담겨서 전달 
  return (
    <StoreInputBox>
      <label className = 'menu-enroll-label'>메뉴 등록</label>
      {menuArr && menuArr.map((el:any,idx:number) => {
        return (
          <StoreMenuAddWrapper key={idx}>
            <MenuUploadContent
            className ='menu-upload-imgs'>
                <label>메뉴 이미지</label>
                  <MenuUploadImgBox className ='menu-upload-imgbox'> 
                    <FileUp 
                    required
                    id={idx}
                    type = 'file' 
                    onChange={(e:any)=>{checkHandler(e)}}
                    />
                    <MenuImg 
                    onClick={(e:any)=>{uploadHandler(e)}}
                    id={idx}
                    src = {el.menuImg}
                    alt = {el.menuImg}/>
                  </MenuUploadImgBox>
            </MenuUploadContent>

            <MenuUploadContent>
              <MenuInputBox>

                <RemoveMenuBtn
                type = 'button'
                id = {idx}
                onClick = 
                {(e:any)=>removeMenuHandler(e)}
                >삭제</RemoveMenuBtn>

                <label>메뉴이름</label>
                <MenuInput 
                  id={idx}
                  required
                  type = 'text' 
                  onChange = {(e:any)=>{changeMenuName(e)}} 
                  value = {el.menuName} 
                  />
              </MenuInputBox>
              <MenuInputBox>
                <label>가격</label>
                <MenuInput 
                  required
                  id={idx}
                  type = 'number' 
                  step = '100'
                  onChange = {(e:any)=>{priceHandler(e)}}
                  value = {el.price}/>
              </MenuInputBox>
    
              <MenuInputBox>
                <label>메뉴 설명</label>
                <MenuIntroTextArea 
                  required
                  id={idx}
                  value = {el.menuDescription} 
                  onChange={(e:any)=>{changeMenuDesc(e)}}
                  placeholder = '100자 이내로 작성해주세요.' 
                  maxlength="100" />
              </MenuInputBox>
            </MenuUploadContent>
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
