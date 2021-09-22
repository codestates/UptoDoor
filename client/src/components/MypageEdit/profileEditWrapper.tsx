import React,{useCallback, useState , useEffect} from 'react'
import {
  Container,
  Wrapper , 
  Title,
} 
from '../GlobalStyle';
import { 
  Form,
  ProfileEditBox,
  ProfileEditInput,
  Label,
  ErrMsgP,
} from './StyledMypageEdit'
import {SmallButton,BtnBox} from '../common/Button/Button'

import { useDispatch,useSelector } from 'react-redux'
import { editUser, deleteUser } from '../../_actions/user_action'
import ProfileEditOptions from './ProfileEditOptions';
import useInput from '../../utils/useInput'
import Modal from '../common/Modal/Modal';

function MyProfileEdit() {

  const dispatch:any = useDispatch();
  const user = useSelector((state:any) => state.user);
  const [name , onChangeNameHandler ] = useInput();

  const [password , setPassword] = useState('');
  const [passwordChk, setPasswordChk] = useState('');
  const [passwordRegErr , setPasswordRegErr ] = useState(false);
  const [passwordErr , setPasswordErr ] = useState(false);
  const [mobile , setMobile] = useState('');

  //optional
  const [gender , setGender] = useState('');
  const [age, setAge] = useState('');

  const [openModal , setOpenModal] = useState(false);

  const onChangePwHandler = useCallback((e) => {
    setPassword(e.target.value);
    const pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,12}$/;
    setPasswordRegErr(!pwRegExp.test(e.target.value));
  },[])

  const onChangePwChkHandler = useCallback((e) => {
    setPasswordChk(e.target.value);
    setPasswordErr(e.target.value !== password);
  },[password])
  
  const onChangeMobileHandler = useCallback((e) => {
    const mobileRegExp = /^[0-9\b -]{0,13}$/;
    if(mobileRegExp.test(e.target.value)){
      setMobile(e.target.value);
    }
    if(e.target.value === ''){
      console.log('현재 모바일의 값이 빈값이라면->',user.mobile);
      setMobile(user.mobile);
    }
  },[])

  useEffect(() => {
    if (mobile.length === 10) {
      setMobile(mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (mobile.length === 13) {
      setMobile(mobile.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [mobile]);
  
  const selectInputHandler = (e:any,name:string) => {
    if(name === '성별'){
      setGender(e.value);
    }else if(name === '연령대'){
      setAge(e.value);
    }
  }

  const withdrawalModal = () => {
    setOpenModal(true)
  }
  //!회원탈퇴 버튼
  const withdrawalConfirm = () => {
    setOpenModal((prev)=>!prev)
    //dispatch 여기서
    dispatch(deleteUser())
    // .then((res.payloaㅁㅔ세지가 뭐냐 == 같으면){
    //   (window.location.href = '/')
    // }
    // .catch(err => {
    //   console.log(err);
    // });
  }

  
  //!form 제출 핸들러
  const profileEditSubmitHandler = useCallback((e)=>{

    e.preventDefault();
    if(password !== passwordChk) return false;
    if(passwordRegErr === true) return setPasswordRegErr(true);
    console.log('mobile==>',mobile);
    const userinfoEdit = {
      password,
      name,mobile,
      gender,age
    }
    dispatch(editUser(userinfoEdit))
    // .then((res: any) => {
    //   if (res.payload.message  === 'user update success') {
    //     window.location.href="http://localhost:3000/"
    //   } else {
    //     alert('수정 실패하였습니다.');
    //   }
    // })
    // .catch((err: any) => {
    //   console.log(err)
    // });
  },[name,password,passwordChk,mobile,gender,age])

  return (
    <Container>
      <Title>프로필 수정</Title>
      <Form onSubmit = {profileEditSubmitHandler}  >
      <Wrapper>

        <ProfileEditBox>
          <Label>E-mail</Label>
          <ProfileEditInput
          className = 'unmodifiable'
          type = 'text'
          defaultValue = {user.email}
          readOnly
          />
        </ProfileEditBox>

        <ProfileEditBox>
          <Label>비밀번호</Label>
          <ProfileEditInput
          type = 'password' 
          placeholder = 'password'
          defaultValue = {password}
          onChange = {onChangePwHandler}
          />
          {passwordRegErr ? 
          <ErrMsgP>비밀번호는 최소 6자리에서 12자리 사이의<br/> 영문,숫자 조합이어야 합니다.</ErrMsgP>
          : null}
        </ProfileEditBox>

        <ProfileEditBox>
          <Label>비밀번호 확인</Label>
          <ProfileEditInput
          type = 'password' 
          placeholder = 'password check'
          defaultValue = {passwordChk}
          onChange = {onChangePwChkHandler}
          />
          {passwordErr ? 
          <ErrMsgP>비밀번호가 일치하지 않습니다.</ErrMsgP>
          :null}
        </ProfileEditBox>

        <ProfileEditBox>
          <Label>이름</Label>
          <ProfileEditInput
          type = 'text'
          defaultValue = {user.name}
          onChange = {onChangeNameHandler}
          />
        </ProfileEditBox>

        <ProfileEditBox>
          <Label>모바일</Label>
          <ProfileEditInput
          type = 'text'
          // value = {mobile}
          defaultValue = {user.mobile}
          onChange = {onChangeMobileHandler}
          />
        </ProfileEditBox>

        {/* 옵션컴포넌트 */}
        <ProfileEditOptions
        user = {user}
        selectInputHandler = {selectInputHandler}
        />

        <BtnBox>
          <SmallButton primary type = 'submit'>수정</SmallButton>
          <SmallButton 
          type = 'button'
          onClick = {withdrawalModal}
          >회원 탈퇴</SmallButton>
        </BtnBox>
      </Wrapper>
      </Form>

      {openModal ?
      <Modal
      openModal = {openModal}
      withdrawalConfirm = {withdrawalConfirm}
      />
      :
      null
      }
    </Container>
  )
}

export default MyProfileEdit
