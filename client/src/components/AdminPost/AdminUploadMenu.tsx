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

function AdminUploadMenu({addMenuHandler,menuArr
  }:any):any {
  const [menuImg , setMenuImgs]:any = useState([]); 
  const [menuName , setMenuName] = useState('');
  const [price , setPrice] = useState(1000);
  const [menuDescription , setMenuDescription] = useState('');

  const priceHandler = (e:any) => {
    const comma = e.target.value;
    setPrice(comma);
  }
  const changeMenuName = (e:any) => {
    setMenuName(e.target.value)
  }
    const dropHandler = (file:any) => {
      const reader = new FileReader();
      //파일리더가 파일의 데이터를 url경로로 만들어준다. 때문에 src에 집어 넣어서 사용가능
      console.log('menufile===>',file[0]);
      reader.readAsDataURL(file[0]);
      reader.onload = () => {
        //파일리더가 파일을 정상적으로 렌더하면 성공상태가 2
        if (reader.readyState === 2) {
          setMenuImgs([...menuImg,reader.result]);
          // console.log('====',file);
          // let formData = new FormData();
          // const config = {
          //   header : { 'content-type' : 'multipart/form-data'}
          // }
          // formData.append('file',files[0]);
          // console.log('==fileconfig==',formData,config);
          // //dispatch action axios 관리된거 와야함.
          // axios.post('https://localhost:3001',formData,config)
          // .then((res)=>{
          //   if(res.data.success){
          //     setMenuImgs([...imgs,res.data.filePath])
          //   }else{
          //     alert('파일저장실패')
          //   }
          // })
          // .catch((err)=>{
          //   return console.log('==file 가져오기 실패===',err)
          // })
        }
      };
      // setMenuImgs([file[0].path,...menuImg]);
      setMenuImgs([file[0].path,...menuImg]);
    }
    
    const changeMenuDesc = (e:any) => {
      setMenuDescription(e.target.value)
    }

    const addMenuItemHandler = () => {
      
      const menu1 = {
        menuImg : menuImg,
        menuName : menuName,
        price : price,
        menuDescription : menuDescription
      }
      // console.log("addmenuItem", menu1)
      // setMenuArr([...menuArr,Menu])
      addMenuHandler(menu1);
      setMenuImgs([]);
      setPrice(0);
      setMenuName('');
      setMenuDescription('');
    }

  return (
    <StoreInputBox>
      <label className = 'menu-enroll-label'>메뉴 등록</label>
      {menuArr && menuArr.map((el:any,idx:number)=> {
        // console.log('menuArr==',menuArr);
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
