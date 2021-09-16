import React, {useState} from 'react'
import Select from 'react-select';
import {
  StoreInputWrapper,
  StoreInputBox,
  StoreNameInput,
  StoreIntroTextArea,
  StoreMenuAddBtn,
  StoreBtnBox,
} from './StyledAdminPost'
import {
  Container,
  Wrapper,
  Title
} from "../GlobalStyle";
import { useHistory } from 'react-router-dom';
import { SmallButton } from '../common/Button/Button';
import AdminUploadStore from  './AdminUploadStore';
import AdminUploadMenu from './AdminUploadMenu';

function AdminPostForm() {
  // 가게 이미지,상호명,가게설명,동네인증.
  // 메뉴이미지,이름,재료,가격,항목추가,파일업로드
  let history = useHistory();
  let selectCategory: {value: string, label: string}[] = 
  [
    { value : 'food' , label : 'food'},
    { value : 'cafe' , label : 'cafe'},
    { value : 'living/home' , label : 'living/home'},
    { value : 'plants' , label : 'plants'},
    { value : 'clothes' , label : 'clothes'},
  ]

  //upload img,file
  const [uploads , setUploads ] = useState([]);
  //store
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [adminAddress , setAdminAddress] = useState('');
  const [category, setCategory] = useState('');

  //menu
  const [menuName , setMenuName] = useState('');
  const [price , setPrice] = useState(1000);
  const [menuDescription , setMenuDescription] = useState('');
  
  const changeTitleHandler = (e:any) => {
    setTitle(e.target.value)
  }
  const changeCategoryHandler = (e:any) => {
    setCategory(e.value)
  }
  const changeDescHandler = (e:any) => {
    let limitWord = e.target.value;
    //설명제한
    if(limitWord.length > 150){
      alert('글자는 150자까지???')
    }else{
      setDescription(limitWord);
    }
  }
  //!add menu onchange handler
  const changeMenuName = (e:any) => {
    setMenuName(e.target.value)
  }
  const changeMenuDesc = (e:any) => {
    let limitWord = e.target.value;
    //설명제한
    if(limitWord.length > 100){
      alert('글자는 100자까지???')
    }else{
      setMenuDescription(limitWord);
    }
  }
  const priceHandler = (e:any) => {
    let comma = e.target.value;
    setPrice(comma);
  }
  const changeAddressHandler = (e:any) => {
    setAdminAddress(e.target.value)
  }
  const addMenuHandler = () => {
    console.log('누르면 메뉴 하나씩 더생김.')
  }
  //!upload files
  const updateFiles = (storeImgs:any) => {
      setUploads(storeImgs)
      // console.log('uploaded :' ,uploads);
      console.log('====',storeImgs);
  }
  const submitHandler = (e:any) => {
    e.preventDefault();
    //모든칸이 채워지지않으면 false 로 막는다. !menuItem 추후 추가잊지마.
    if(!uploads || !category || !title || !description || !price ){
      //모달
      return alert('all section must be filled')
    }else{
      history.push('/');
    }
    let body = {
      //login 된 사장의 아이디도 같이 넣어주기. 리덕스에 있는 유저 정보 넣던가.
      title:title,
      description:description,
      // menuItem:menuItem ,
      price:price ,
    }
    //server 에 req 보내
    // axios.post('https://localhost:3001',body)
    // .then((res)=>{
    //   console.log(res.data)
    //   return alert('상품업로드 성공.')
    //   history.push('/')
    // })
    // .catch((err)=>{
    //   console.log('==상품업로드 실패==',err)
    // })
    console.log(body);
  
  }
  const handleClickCancle = () => {
    history.push('/');
  }
return (
  <Container>
    <Title>가게 등록</Title>
    <form onSubmit = {submitHandler}>
      <Wrapper>
        {/* 업로드 컴포넌트 */}
        <AdminUploadStore updateFiles = {updateFiles}/>
        
        <StoreInputWrapper>
          <StoreInputBox>
            <label>상호명</label>
            <StoreNameInput 
            value = {title} 
            placeholder = '가게 이름을 적어주세요' 
            onChange = {changeTitleHandler}/>
          </StoreInputBox>

          <StoreInputBox>
            <label>카테고리</label>
            <Select
            className = 'category-selection'
            options = {selectCategory}
            onChange = {()=>changeCategoryHandler(selectCategory)}
            />
          </StoreInputBox>

          <StoreInputBox>
            <label>가게 설명</label>
            <StoreIntroTextArea 
            value = {description} 
            placeholder = '150자 이내로 작성해주세요.' 
            onChange = {changeDescHandler}/>
          </StoreInputBox>
          
          {/* 가게주소등록 따로 컴포넌트 뺄예정 */}
          <StoreInputBox>
            <label>가게주소</label>
            <StoreNameInput 
            value = {adminAddress} 
            placeholder = '가게주소등록버튼 할예정.' 
            onChange = {changeAddressHandler}/>
          </StoreInputBox>

          {/* 가게 사업자등록증 파일업로드 */}
          <StoreInputBox>
            <label>파일 업로드</label>
            <StoreNameInput 
            value = {adminAddress} 
            placeholder = '사업자등록증 파일업로드 부분' 
            onChange = {changeAddressHandler}/>
          </StoreInputBox>

          {/* 메뉴등록 컴포넌트 */}
          <AdminUploadMenu
          menuName ={menuName}
          changeMenuName = {changeMenuName}
          price = {price}
          priceHandler = {priceHandler}
          menuDescription = {menuDescription}
          changeMenuDesc = {changeMenuDesc}
          />

          <StoreInputBox>
            <StoreMenuAddBtn 
            onClick = {addMenuHandler}>+
            </StoreMenuAddBtn> 
          </StoreInputBox>
        
          
        </StoreInputWrapper>
        <StoreBtnBox>
          <SmallButton> 확인 </SmallButton>
          <SmallButton 
          onClick = {handleClickCancle}
          type = 'button'> 취소 </SmallButton>
        </StoreBtnBox>
      </Wrapper>
    </form>
  </Container>
  )
}

export default AdminPostForm
