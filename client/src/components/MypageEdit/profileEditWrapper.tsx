import React,{useCallback, useState , useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import {Container,Wrapper , Title} from '../GlobalStyle';
import { Form,ProfileEditBox,ProfileEditInput,Label,ErrMsgP,
} from './StyledMypageEdit'

import { editUser,deleteUser} from '../../_actions/user_action'
import { END_POINT } from '../../_actions/type';

import {SmallButton,BtnBox} from '../common/Button/Button'
import ProfileEditOptions from './ProfileEditOptions';
import WarningModal from '../common/Modal/WarningModal'
import ConfirmModal from '../common/Modal/ConfirmModal';
import Auth from '../../hoc/auth'
import Signin from '../common/Signin/SigninModal'
import { RootReducerType } from '../../store/store';
import { User } from '../../@type/userInfo';

function MyProfileEdit():JSX.Element {

  const dispatch:any = useDispatch();
  const user:User = useSelector((state:RootReducerType) => state.user);
  const [nickname , setNickname] = useState<string |"">(user.nickname);
  const [password , setPassword] = useState<string|"">('');
  const [passwordChk, setPasswordChk] = useState('');
  const [passwordRegErr , setPasswordRegErr ] = useState<boolean>(false);
  const [passwordErr , setPasswordErr ] = useState<boolean>(false);
  const [mobile , setMobile] = useState<string | "">(user.mobile);

  //optional
  const [gender , setGender] = useState<string | "">(user.gender);
  const [age, setAge] = useState<string | any>(user.age);

  const [loginModal , setLoginModal] = useState<boolean>(false);
  const [openModal , setOpenModal] = useState<boolean>(false);
  const [modalSuccess,setModalSuccess] = useState<boolean>(false);
  const [confirmModal , setConfirmModal] = useState<boolean>(false);
  const [deleteUserModal, setDeleteUserModal] = useState<boolean>(false);

  const onChangeNicknameHandler = useCallback((e):void=>{
    setNickname(e.target.value);
  },[])

  const onChangePwHandler = useCallback((e):void => {
    setPassword(e.target.value);
    const pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,12}$/;
    setPasswordRegErr(!pwRegExp.test(e.target.value));
  },[])

  const onChangePwChkHandler = useCallback((e):void => {
    setPasswordChk(e.target.value);
    setPasswordErr(e.target.value !== password);
  },[password])
  
  const onChangeMobileHandler = useCallback((e):void => {
    const mobileRegExp = /^[0-9\b -]{0,13}$/;
    if(mobileRegExp.test(e.target.value)){
      setMobile(e.target.value);
    }
  },[])

  
  
  const selectInputHandler = (e:any,name:string):void => {
    if(name === '성별'){
      setGender(e.value);
    }else if(name === '연령대'){
      setAge(e.value);
    }
  }

  //!회원탈퇴 버튼
  const withdrawalConfirm = ():void => {
    dispatch(deleteUser())
      .then((res: any) => {
      if (res.payload.message  === 'good bye') {
        setOpenModal(false);
        setModalSuccess(true);
        setDeleteUserModal(true);
        // window.location.href=`${END_POINT}`
      } else {
        alert('탈퇴 실패. 못벗어남.');
      }
    })
  }

  const withdrawalModalHandler = ():void => {
    setOpenModal(true)
  }

  //!form 제출 핸들러
  const profileEditSubmitHandler = useCallback((e)=>{
    e.preventDefault();
    if(password !== passwordChk) return false;
    if(passwordRegErr === true) return setPasswordRegErr(true);

    const userinfoEdit = {
      password,
      nickname,mobile,
      gender,age
    }
    dispatch(editUser(userinfoEdit))
    .then((res: any) => {
      console.log('===',res.payload)
      if (res.payload.successMessage === 'user update success') {
        setModalSuccess(true)
        setConfirmModal(true)
      } 
    })
    .catch((err: any) => {
      console.log(err)
    });
  }, [nickname, password, passwordChk, mobile, gender, age])
  
  useEffect(():void => {
    if (mobile.length === 10) {
      setMobile(mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (mobile.length === 13) {
      setMobile(mobile.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [mobile]);

  useEffect(() => {
    const request = Auth(true);
    if(request === undefined){
      setLoginModal(true);
    }
  },[])

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
      user.position === '1' ?
      <ConfirmModal
      cancle
      openModal = {openModal}
      setOpenModal={setOpenModal}
      modalTitleText = '회원탈퇴가 불가합니다.'
      modalSubText = '아직 구독중인 고객님들이 있습니다.'
      modalText = 
      {`문의는 고객센터로 연락주시기 바랍니다.`}
      modalBtn='닫기'
      />
      :
      <WarningModal
      cancle
      openModal = {openModal}
      setOpenModal={setOpenModal}
      modalTitleText = '정말 회원 탈퇴하시겠습니까?'
      modalSubText = '관리중인 서비스는 자동 구독취소 처리됩니다.'
      modalText = 
      {`이미 결제된 정기구독 상품은 당 월까지 배송됩니다.\n
      구독취소를 원하지 않으시면 회원탈퇴를 하지 말아주십시오`}
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
      url="/mypage"
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
        confirmModal={deleteUserModal}
        url="/"
        setOpenModal={setDeleteUserModal}
        modalTitleText='회원 탈퇴'
        modalText='Good Bye'
        modalBtn='확인'
        modalSuccess={modalSuccess}
      />
      :
      null
      }
      {loginModal ? 
      <Signin
      modalOpen = {loginModal}
      setModalOpen = {setLoginModal}
      request = {Auth(true)===undefined}
      url = '/mypageedit'
      />
      :
      null}

    </Container>
  )
}

export default MyProfileEdit
