import React,{useCallback, useState , useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

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

import { editUser,deleteUser} from '../../_actions/user_action'
import { END_POINT } from '../../_actions/type';

import {SmallButton,BtnBox} from '../common/Button/Button'
import ProfileEditOptions from './ProfileEditOptions';
import WarningModal from '../common/Modal/WarningModal'
import ConfirmModal from '../common/Modal/ConfirmModal';

function MyProfileEdit() {

  const dispatch:any = useDispatch();
  const user = useSelector((state:any) => state.user);

  const [nickname , setNickname] = useState(user.nickname);
  const [password , setPassword] = useState('');
  const [passwordChk, setPasswordChk] = useState('');
  const [passwordRegErr , setPasswordRegErr ] = useState(false);
  const [passwordErr , setPasswordErr ] = useState(false);
  const [mobile , setMobile] = useState(user.mobile || "");

  //optional
  const [gender , setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);

  const [openModal , setOpenModal] = useState(false);
  const [modalSuccess,setModalSuccess] = useState(false);
  const [confirmModal , setConfirmModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);

  const onChangeNicknameHandler = useCallback((e)=>{
    setNickname(e.target.value);
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
    // alert('탈퇴성공')
    // dispatch(deleteUser())
    // .then((res: any) => {
    //   if (res.payload.message  === 'good bye') {
    //     setOpenModal(false);
    //     setDeleteUserModal(true);
    //     window.location.href=`${END_POINT}`
    //   } else {
    //     alert('탈퇴 실패. 못벗어남.');
    //   }
    // })
    // .catch((err: any) => {
    //   console.log(err)
    // });
    setOpenModal(false);
    setDeleteUserModal(true);
  }

  const withdrawalModalHandler = () => {
    setOpenModal(true)
  }

  //!form 제출 핸들러
  const profileEditSubmitHandler = useCallback((e)=>{
    e.preventDefault();
    if(password !== passwordChk) return false;
    if(passwordRegErr === true) return setPasswordRegErr(true);

    setConfirmModal(true)
    setModalSuccess(true)

    const userinfoEdit = {
      password,
      nickname,mobile,
      gender,age
    }
    dispatch(editUser(userinfoEdit))
    // .then((res: any) => {
    //   console.log('===',res.payload)
    //   if (res.payload.message  === 'user update success') {
    //     alert('프로필 수정 성공')
    //     window.location.href=`${END_POINT}`
    //   } else {
    //     alert('못벗어남');
    //   }
    // })
    // .catch((err: any) => {
    //   console.log(err)
    // });
  },[nickname,password,passwordChk,mobile,gender,age])

  return (
    <Container>
      <Title>프로필 수정</Title>
      
      <Wrapper>
      <Form onSubmit = {profileEditSubmitHandler}>
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
          : 
          null}
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
          :
          null}
        </ProfileEditBox>

        <ProfileEditBox>
          <Label>이름</Label>
          <ProfileEditInput
          required
          type = 'text'
          defaultValue = {nickname}
          onChange = {onChangeNicknameHandler}
          />
        </ProfileEditBox>

        <ProfileEditBox>
          <Label>모바일</Label>
          <ProfileEditInput
          required
          type = 'text'
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
          type = 'submit'
          >수정</SmallButton>

          <SmallButton 
          type = 'button'
          onClick = {withdrawalModalHandler}
          >회원 탈퇴</SmallButton>
        </BtnBox>

        </Form>
      </Wrapper>
      
      {openModal ?
      <WarningModal
      openModal = {openModal}
      url='/'
      setOpenModal={setOpenModal}
      modalTitleText = '정말 회원 탈퇴하시겠습니까?'
      modalText = '회원탈퇴 해도 결제된 정기구독 상품은 배송됩니다.'
      yes = '회원탈퇴'
      no='취소'
      handler={withdrawalConfirm}
      />
      :
      null
      }
      {confirmModal ?
      <ConfirmModal
      confirmModal = {confirmModal}
      url="/"
      setOpenModal={setOpenModal}
      modalSuccess = {modalSuccess}
      modalTitleText = '수정이 완료되었습니다.'
      modalText = '확인 후 메인페이지로 이동합니다.'
      modalBtn = '확인'
      />
      :
      null
      }
      {deleteUserModal ?
      <ConfirmModal
      confirmModal = {deleteUserModal}
      url="/"
      setOpenModal={setDeleteUserModal}
      modalTitleText = '회원 탈퇴'
      modalText = 'Good Bye'
      modalBtn = '확인'
      />
      :
      null
      }

    </Container>
  )
}

export default MyProfileEdit
