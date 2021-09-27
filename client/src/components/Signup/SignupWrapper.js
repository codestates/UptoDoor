import React, { useState , useCallback, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../_actions/user_action'
import SignupOptions from './SignupOptions'
import SignupTerm from './SignupTerm'
import { 
  Form ,
  SignUpInput ,
  Label,
  SignupLogoBox,
  SignupLogo,
  SignupContainer ,SideSpan, ErrMsgP } from './StyledSignup'
import {SmallButton} from '../common/Button/Button'
import SigninModal from '../common/Signin/SigninModal'
import axios from "axios";
import { END_POINTS } from '../../_actions/type'
import ConfirmModal from '../common/Modal/ConfirmModal'
axios.defaults.withCredentials=true;

function SignupWrapper() {

  let history = useHistory();
  const dispatch = useDispatch()

  //required
  const [email, setEmail] = useState('');
  const [certEmail, setCertEmail] = useState(false);
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

  const [successModal, setSuccessModal] = useState(false);
  // const [signinModal, setSigninModal] = useState(false);

  const signupSubmitHandler = useCallback((e) => {
    e.preventDefault();
    if(password !== passwordChk) return false;
    if(passwordRegErr === true) return setPasswordRegErr(true);
    if(certEmail === false) return setCertEmail(true);
    // if(isAllchecked === false ) return false;

    let userinfo = {
      email,password,nickname,mobile,
      gender,age
    }
    dispatch(signUp(userinfo))
    .then((res) => {
      console.log('===',res.payload)
      if (res.payload.message === 'Signup success') {
        setSuccessModal(true);
        // setSigninModal(true);
        window.location.href = "http://localhost:3000";
      } else {
        alert('회원가입 조건을 충족해주세요.');
      }
    })
    .catch((err) => {
      console.log(err)
    });
  },[email,password,passwordChk,certEmail])

  const onChangeEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
  },[])

  //email 인증버튼 핸들러
  const certEmailHandler = () => {
    console.log(email)
    axios
    .post(
      `${END_POINTS}/auth/email`,
      {email:email},
      {withCredentials: true, credentials: 'include'}
    ).then((res)=>
    console.log("응답성공",res),
    )
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
  
  const selectInputHandler = (e,name) => {
    if(name === '성별'){
      setGender(e.value);
    }else if(name === '연령대'){
      setAge(e.value);
    }
  }

  const cancleHandler = () => {
    history.push('/');
  }
  // const [count, setCount] =useState(0)
  // useEffect(() => {
  //   if (count >= 3 && !successModal && !signinModal) {
  //     window.location.href = "http://localhost:3000";
  //   }
  // }, [successModal, signinModal]);

  return (
    <SignupContainer>
      {/* <H1>회원가입</H1> */}
      <SignupLogoBox className="signup-logo-box">
        <SignupLogo src="./images/updodoor.png" alt="img" />
      </SignupLogoBox>

      <Form onSubmit={signupSubmitHandler}>
        <Label>E-mail</Label>
        <SideSpan>*필수</SideSpan>
        <SmallButton
          className="cert-email-btn"
          type="button"
          onClick={() => certEmailHandler(certEmail)}
        >
          이메일 인증
        </SmallButton>
        <br />
        <SignUpInput
          required
          type="email"
          className="email-input"
          placeholder="email@email.com"
          value={email}
          onChange={onChangeEmailHandler}
        />
        {certEmail ? <ErrMsgP>이메일 인증은 필수입니다.</ErrMsgP> : null}
        <br />

        <Label>비밀번호</Label>
        <SideSpan>*필수</SideSpan>
        <br />
        <SignUpInput
          required
          type="password"
          placeholder="password"
          value={password}
          onChange={onChangePwHandler}
        />
        <br />
        {passwordRegErr ? (
          <ErrMsgP>
            비밀번호는 최소 6자리에서 12자리 사이의
            <br /> 영문,숫자 조합이어야 합니다.
          </ErrMsgP>
        ) : null}

        <Label>비밀번호 확인</Label>
        <SideSpan>*필수</SideSpan>
        <br />
        <SignUpInput
          required
          type="password"
          placeholder="password check"
          value={passwordChk}
          onChange={onChangePwChkHandler}
        />
        <br />
        {passwordErr ? <ErrMsgP>비밀번호가 일치하지 않습니다.</ErrMsgP> : null}

        <Label>이름</Label>
        <SideSpan>*필수</SideSpan>
        <br />
        <SignUpInput
          required
          type="text"
          placeholder="이름"
          value={nickname}
          onChange={onChangeNicknameHandler}
        />
        <br />

        <Label>모바일</Label>
        <SideSpan>*필수</SideSpan>
        <br />
        <SignUpInput
          required
          type="text"
          placeholder="모바일"
          value={mobile}
          onChange={onChangeMobileHandler}
        />
        <br />

        <SignupOptions selectInputHandler={selectInputHandler} />

        <SignupTerm
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
      {successModal ? (
        <ConfirmModal
          openModal={successModal}
          setOpenModal={setSuccessModal}
          modalTitleText="회원가입"
          modalText="회원가입에 성공했습니다.로그인 페이지로 이동합니다."
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
  );
}

export default SignupWrapper
