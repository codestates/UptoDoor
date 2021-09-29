import React,{useState,useEffect} from 'react'
import Dropzone from 'react-dropzone'
import {
  StoreInputBox,
  StoreMenuAddWrapper,
  MenuInputBox,
  MenuInput,
  MenuIntroTextArea,
  MenuUploadDiv,
  MenuUploadDiv2,MenuUploadImgBox,
  MenuImg,
  PlusIcon,
  FileUp,
  RemoveMenuBtn
,StoreMenuAddBtn
} from '../AdminPost/StyledAdminPost'
import axios from 'axios';
import { END_POINTS } from '../../_actions/type';
import { I } from '../common/Modal/styledModal';
axios.defaults.withCredentials = true;

function AdminUploadMenu({addMenuHandler,menuArr,setMenuArr
  }:any):any {
  const [menuImg , setMenuImg]:any = useState(''); 
  const [menuName , setMenuName] = useState('');
  const [price , setPrice] = useState(6000);
  const [menuDescription , setMenuDescription] = useState('');

  const priceHandler = (e:any) => {
    setPrice(e.target.value)
    const copyArr = JSON.parse(JSON.stringify(menuArr));
    copyArr[e.target.id].price = e.target.value
    setMenuArr(copyArr)
  }
  const changeMenuName = (e:any) => {
    setMenuName(e.target.value)
    const copyArr = JSON.parse(JSON.stringify(menuArr));
    copyArr[e.target.id].name = e.target.value
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
          copyArr[e.target.id].image = res.data.filePath
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
      const copyArr = JSON.parse(JSON.stringify(menuArr));
      copyArr[e.target.id].detail = e.target.value
      setMenuArr(copyArr)
    }

    const addMenuItemHandler = () => {
      const idx = menuArr.length-1
      if(menuArr[idx].image.includes('http') && menuArr[idx].price !== 0 && menuArr[idx].name !== '' && menuArr[idx].detail !== ''){
        addMenuHandler();
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

     //!remove menu onclick handler
    const removeMenuHandler = (e:any) => {
      const idx = parseInt(e.target.id)
      const copyArr = JSON.parse(JSON.stringify(menuArr));
    if(copyArr.length > 1){
    copyArr.splice(idx,1)
    setMenuArr(copyArr);
    }else{
      alert("최소한 1개의 메뉴는 있어야 합니다.")
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
            <MenuUploadDiv2 >
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
                  src = {el.image}
                  alt = {el.image}/>
              </MenuUploadImgBox>
            </MenuUploadDiv2>
            <MenuUploadDiv2>
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
                  step = '1000'
                  onChange = {(e:any)=>{changeMenuName(e)}}
                  value = {el.name} 
                  />
              </MenuInputBox>
              <MenuInputBox>
                <label>가격</label>
                <MenuInput 
                  id={idx}
                  required
                  type = 'number' 
                  step = '1000'
                  onChange = {(e:any)=>{priceHandler(e)}}
                  value = {el.price}/>
              </MenuInputBox>
    
              <MenuInputBox>
                <label>메뉴 설명</label>
                <MenuIntroTextArea 
                  id={idx}
                  required
                  value = {el.detail} 
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
