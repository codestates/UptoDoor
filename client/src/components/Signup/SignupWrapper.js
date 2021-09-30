import React, { useState , useCallback, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../_actions/user_action'
import {
  Container,
} 
from '../GlobalStyle';
import { 
  Form ,
  SignUpInput ,
  Label,
  SignupLogoBox,
  SignupLogo,SignupBox,
  SignupContainer ,SideSpan, ErrMsgP } from './StyledSignup'
import {SmallButton} from '../common/Button/Button'
// import SigninModal from '../common/Signin/SigninModal'
import axios from "axios";
import { END_POINTS } from '../../_actions/type'
import ConfirmModal from '../common/Modal/ConfirmModal'
import SignupOptions from './SignupOptions'
import SignupTerm from './SignupTerm'
axios.defaults.withCredentials=true;

function SignupWrapper() {

  let history = useHistory();
  const dispatch = useDispatch()

  //required
  const [email, setEmail] = useState('');
  const [certEmail, setCertEmail] = useState(false);
  const [certEmailErr, setCertEmailErr] = useState(false);
  const [nickname , setNickname] = useState('');
  const [mobile, setMobile] = useState('');
  const [password , setPassword] = useState('');
  const [passwordChk, setPasswordChk] = useState('');
  const [passwordRegErr , setPasswordRegErr ] = useState(false);
  const [passwordErr , setPasswordErr ] = useState(false);

  //optional
  const [gender , setGender] = useState('');
  const [age, setAge] = useState('');
  const [isAllchecked , setIsAllchecked] = useState(false);
  
  const [signupModal, setSignupModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [certModal, setCertModal] = useState(false);
 
  const onChangeEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
  },[])
  
  //email 인증버튼 핸들러
  const certEmailHandler = () => {
    axios
    .post(
      `${END_POINTS}/auth/email`,
      {email:email},
      {withCredentials: true, credentials: 'include'}
    ).then((res) => {
      if (res.data.message === "send success") {
        setModalSuccess(true);
        setCertModal(true);
        setCertEmail(true);
        setCertEmailErr(false);
      }
    }).catch(() => {
      setModalSuccess(false);
      setCertModal(true);
    })
  }

  const onChangePwHandler = useCallback((e) => {
    setPassword(e.target.value);
    let pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,12}$/;
    setPasswordRegErr(!pwRegExp.test(e.target.value));
  },[])

  const onChangePwChkHandler = useCallback((e) => {
    setPasswordChk(e.target.value);
    setPasswordErr(e.target.value !== password);
  },[password])

  const onChangeNicknameHandler = useCallback((e) => {
    setNickname(e.target.value);
  }, []);
  
  const onChangeMobileHandler = useCallback((e) => {
    let mobileRegExp = /^[0-9\b -]{0,13}$/;
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
  
  const selectInputHandler = useCallback((e,name) => {
    if(name === '성별'){
      setGender(e.value);
    }else if(name === '연령대'){
      setAge(e.value);
    }
  },[])

  //!약관
  const [checkedInputs, setCheckedInputs] = useState([]);
  const onChangeTermHandler = (checked, idx) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, idx]);
      // setCheckedInputs(checkedInputs.concat(idx));
      setIsAllchecked(checked)
      // console.log('--chk 반영--',checked)
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== idx));
      setIsAllchecked(checked)
      // console.log('--chk 해제반영--',checked)
    }
  };

  useEffect(() => {
    setIsAllchecked(checkedInputs.length === 3);
  }, [checkedInputs]);

  //!form 제출핸들러.
  const signupSubmitHandler = useCallback((e) => {
    // console.log('파이널 isAllchk' , isAllchecked)
    console.log('certEmail :::::: ',certEmail)
    e.preventDefault();
    if(password !== passwordChk) return false;
    if(passwordRegErr === true) return setPasswordRegErr(true);
    if(isAllchecked === false ) return false;
    if(certEmail === false) {
      setCertEmailErr(true);
      setCertEmail(false);
      console.log('에러날때 최종가아앖',certEmailErr , certEmail)
    }else if(certEmail === true){
      setCertEmailErr(false);
      setCertEmail(true);
      console.log('진짜최종갑아아아ㅏ앙',certEmailErr , certEmail)
    }

    let userinfo = {
      email,password,nickname,mobile,
      gender,age
    }
    dispatch(signUp(userinfo))
    .then((res) => {
      console.log('===',res.payload)
      if (res.payload.message === 'Signup success') {
        setModalSuccess(true)
        setSignupModal(true);
        // window.location.href = "http://localhost:3000";
      } else {
        setModalSuccess(false);
        setSignupModal(true);
      }
    })
    .catch((err) => {
      console.log(err)        
      setModalSuccess(false);
      setSignupModal(true);
    });
  },[email,password,passwordChk,certEmail,isAllchecked])

  const cancleHandler = () => {
    history.push('/');
  }

  return (
    <Container>
    <SignupContainer>
      <SignupLogoBox className="signup-logo-box">
        <SignupLogo src="./images/upToDoorLogo.png" alt="img" />
      </SignupLogoBox>

      <Form onSubmit={signupSubmitHandler}>

        <Label>E-mail</Label>
        <SideSpan>*필수</SideSpan>
        <SmallButton
          className="cert-email-btn"
          type="button"
          onClick={certEmailHandler}>
          이메일 인증
        </SmallButton>

        <SignupBox>
          <SignUpInput
            required
            type="email"
            className="email-input"
            placeholder="email@email.com"
            value={email}
            onChange={onChangeEmailHandler}
          />
          {certEmailErr ? 
          <ErrMsgP>이메일 인증은 필수입니다.</ErrMsgP> 
          : null} 
        </SignupBox>

        <Label>비밀번호</Label>
        <SideSpan>*필수</SideSpan>
        
        <SignupBox>
          <SignUpInput
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={onChangePwHandler}
          />
          {passwordRegErr ? (
            <ErrMsgP>
              비밀번호는 최소 6자리에서 12자리 사이의
              <br /> 영문,숫자 조합이어야 합니다.
            </ErrMsgP>
          ) : null}
        </SignupBox>

        <Label>비밀번호 확인</Label>
        <SideSpan>*필수</SideSpan>
        <SignupBox>
          <SignUpInput
            required
            type="password"
            placeholder="password check"
            value={passwordChk}
            onChange={onChangePwChkHandler}
          />
          {passwordErr ? <ErrMsgP>비밀번호가 일치하지 않습니다.</ErrMsgP> : null}
        </SignupBox>

        <Label>이름</Label>
        <SideSpan>*필수</SideSpan>
        <SignupBox>
          <SignUpInput
            required
            type="text"
            placeholder="이름"
            value={nickname}
            onChange={onChangeNicknameHandler}
          />
        </SignupBox>

        <Label>모바일</Label>
        <SideSpan>*필수</SideSpan>
        <SignupBox>
          <SignUpInput
            required
            type="text"
            placeholder="모바일"
            value={mobile}
            onChange={onChangeMobileHandler}
          />
        </SignupBox>

        <SignupOptions 
        selectInputHandler={selectInputHandler} />

        {/* 약관 */}
        <SignupTerm
          onChangeTermHandler={onChangeTermHandler}
          checkedInputs={checkedInputs}
          setIsAllchecked={setIsAllchecked}
          isAllchecked={isAllchecked}
        />

        <div className="signup-btn-box">
          <SmallButton primary type="submit">
            회원가입
          </SmallButton>
          <SmallButton onClick={cancleHandler}>취소</SmallButton>
        </div>
      </Form>

      {signupModal ? (
        <ConfirmModal
          openModal={signupModal}
          setOpenModal={setSignupModal}
          modalSuccess={modalSuccess}
          url="/"
          modalTitleText={
            modalSuccess === true ? "회원가입 성공" : "회원가입 실패"
          }
          modalText={
            modalSuccess === true
              ? "로그인 페이지로 이동합니다."
              : "회원가입에 실패하셨습니다."
          }
          modalBtn="확인"
        />
      ) : null}
      {certModal ? (
        <ConfirmModal
          openModal={certModal}
          setOpenModal={setCertModal}
          modalSuccess={modalSuccess}
          modalTitleText="이메일 인증"
          modalText={
            modalSuccess === true
              ? "10분안에 이메일을 인증해주세요."
              : "새로고침 후 다시 해주세요."
          }
          modalBtn="확인"
        />
      ) : null}
      {/* {signinModal ? (
        <SigninModal
          modalOpen={signinModal}
          setModalOpen={setSigninModal}
        />
      ) : null}*/}
    </SignupContainer>
    </Container>
  );
}

export default SignupWrapper
