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
import WithdrawalModal from '../common/Modal/WithdrawalModal'

import useInput from '../../utils/useInput'

function MyProfileEdit() {

  const dispatch:any = useDispatch();
  const user = useSelector((state:any) => state.user);
  
  // const [name, onChangeNameHandler, setName] = useInput();

  const [name , setName] = useState(user.name);
  const [password , setPassword] = useState('');
  const [passwordChk, setPasswordChk] = useState('');
  const [passwordRegErr , setPasswordRegErr ] = useState(false);
  const [passwordErr , setPasswordErr ] = useState(false);
  const [mobile , setMobile] = useState(user.mobile);

  //optional
  const [gender , setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);

  const [openModal , setOpenModal] = useState(false);

  const onChangeNameHandler = useCallback((e)=>{
    setName(e.target.value);
  },[])

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

  //!회원탈퇴 버튼
  const withdrawalConfirm = () => {
    alert('탈퇴성공')
    dispatch(deleteUser())
    // .then((res: any) => {
    //   if (res.payload.message  === 'user update success') {
    //     alert('탈퇴성공')
    //     window.location.href="http://localhost:3000/"
    //   } else {
    //     alert('탈퇴 실패. 못벗어남.');
    //   }
    // })
    // .catch((err: any) => {
    //   console.log(err)
    // });
  }

  const withdrawalModalHandler = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal((prev)=>!prev)
  }

  //!form 제출 핸들러
  const profileEditSubmitHandler = useCallback((e)=>{
    e.preventDefault();
    if(password !== passwordChk) return false;
    if(passwordRegErr === true) return setPasswordRegErr(true);

    if(name === '' 
      // || password === '' || 
      // mobile === '' || gender === '' || age === ''
      ){
      // console.log('현재 모바일의 값이 빈값이라면->',user.mobile);
      setName(user.name);
      // setMobile(user.mobile);
      // setGender(user.gender);
      // setAge(user.age);
    }

    console.log('name 현재상태는?' , name)
    console.log('mobile 현재상태는?' , mobile)
    console.log('gender 현재상태는?' , gender)

    const userinfoEdit = {
      password,
      name,mobile,
      gender,age
    }
    dispatch(editUser(userinfoEdit))
    // .then((res: any) => {
    //   console.log('===',res.payload)
    //   if (res.payload.message  === 'user update success') {
    //     alert('프로필 수정 성공')
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
          required
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
          required
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
          required
          type = 'text'
          defaultValue = {name}
          onChange = {onChangeNameHandler}
          />
        </ProfileEditBox>

        <ProfileEditBox>
          <Label>모바일</Label>
          <ProfileEditInput
          required
          type = 'text'
          // value = {mobile}
          defaultValue = {mobile}
          onChange = {onChangeMobileHandler}
          />
        </ProfileEditBox>

        {/* 옵션컴포넌트 */}
        <ProfileEditOptions
            userGender={gender}
            userAge={age}
        selectInputHandler = {selectInputHandler}
        />

        <BtnBox flexable btnboxMargin>
          <SmallButton 
          primary 
          type = 'submit'>수정</SmallButton>
          <SmallButton 
          type = 'button'
          onClick = {withdrawalModalHandler}
          >회원 탈퇴</SmallButton>
        </BtnBox>
      </Wrapper>
      </Form>

      {openModal ?
      <WithdrawalModal
      openModal = {openModal}
      closeModal = {closeModal}
      withdrawalConfirm = {withdrawalConfirm}
      modalTitleText = '정말 회원 탈퇴하시겠습니까?'
      modalText = '회원탈퇴 해도 결제된 정기구독 상품은 배송됩니다.'
      yes = '회원탈퇴'
      no = '취소'
      />
      :
      null
      }
    </Container>
  )
}

export default MyProfileEdit
