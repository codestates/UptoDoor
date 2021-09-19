import React, {useState} from 'react'
import {
  StyledAdminPost,
  Input,
  TextArea,
} from './StyledAdminPost'
import AdminUpload from  './AdminUpload';
import { useHistory } from 'react-router-dom';
import { SmallButton } from '../common/Button/Button';

function AdminPostForm() {
  // 가게 이미지,상호명,가게설명,동네인증.
  // 메뉴이미지,이름,재료,가격,항목추가,파일업로드
  let history = useHistory();
    
  //!upload img,file
  const [uploads , setUploads ] = useState([]);
  //!store
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [adminAddress , setAdminAddress] = useState('');
  //!menu
  const [menuItem , setMenuItem] = useState('');
  const [price , setPrice] = useState(0);
  
  const changeTitleHandler = (e) => {
    setTitle(e.target.value)
  }
  const changeDescHandler = (e) => {
    setDescription(e.target.value)
  }
  const priceHandler = (e) => {
    setPrice(e.target.value)
  }
  const changeAddressHandler = (e) => {
    setAdminAddress(e.target.value)
  }
  const changeMenuHandler = (e) => {
    setMenuItem(e.target.value)
  }
  const updateFiles = (newImgs) => {
    setUploads(newImgs)
    // console.log('uploaded :' ,uploads);
    // console.log('====',newImgs);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    //모든칸이 채워지지않으면 false 로 막는다.
    if(!uploads || !title || !description || !menuItem || !price ){
      return alert('all section must be filled')
    }else{
      history.push('/');
    }
    let body = {
      //login 된 사장의 아이디도 같이 넣어주기. 리덕스에 있는 유저 정보 넣던가.
      title:title,
      description:description,
      menuItem:menuItem ,
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
  
return (
  <StyledAdminPost>
    <form onSubmit = {submitHandler}>

      <AdminUpload updateFiles = {updateFiles}/>
      <br/>

      <label>이름</label>
      <Input 
      value = {title} 
      onChange = {changeTitleHandler}/>
      <br/>

      <label>설명</label>
      <TextArea 
      value = {description} 
      onChange = {changeDescHandler}/>
      <br/>

      <label>가게주소</label>
      <Input 
      value = {adminAddress} 
      onChange = {changeAddressHandler}/>
      <br/>

      <label>메뉴</label>
      <Input 
      value = {menuItem} 
      onChange = {changeMenuHandler}/>
      <br/>

      <label>가격</label>
      <Input 
      type = 'number' 
      onChange = {priceHandler} 
      value = {price}
      />
      
      <br/>
      <SmallButton> 확인 </SmallButton>
      <SmallButton> 취소 </SmallButton>
    </form>
  </StyledAdminPost>
  )
}

export default AdminPostForm
