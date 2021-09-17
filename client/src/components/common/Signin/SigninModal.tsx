import React, { useCallback,useState } from 'react'
import { LagreButton } from '../Button/Button';
import {
  SigninContainer, SigninWrapper, SigninInput, LeadSignup, Icon, SignupLink, TextOr, Logo,
} from './StyledSignin';
import {useDispatch} from 'react-redux'
import { signIn } from '../../../_actions/user_action';
import axios from 'axios';
axios.defaults.withCredentials = true

interface Iprops {
  modalOpen: boolean;
  setModalOpen: any;
  setIsOpen: any;
}

function Signin({ setIsOpen, modalOpen, setModalOpen }: Iprops) {
  const dispatch = useDispatch()
  // if (!modalOpen) return null;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [password]);
  
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [email])
  
  const signinHandler = useCallback((e) => {
    e.preventDefault();
    console.log("제출", email, password);
    const userinfo = {email, password}
    dispatch(signIn(userinfo));
  },[email,password])
  
  const kakaoHandler = useCallback((e) => {
    e.preventDefault();
    //axios.get('https://kauth.kakao.com/oauth/authorize?client_id=a89491b2f53a7e437ff1a3f92347a22f&redirect_uri=https://uptodoors.shop&response_type=code',{ withCredentials: true })
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=a89491b2f53a7e437ff1a3f92347a22f&redirect_uri=http://localhost:3000/&response_type=code"; 
  },[email,password])
  

  

  return modalOpen ? (
    <SigninContainer>
      <SigninWrapper>
          <Logo>UptoDoor</Logo>
        <Icon onClick={() => { setModalOpen(false) }}>
          <i className="fas fa-times"></i>
        </Icon>
        <form onSubmit={(e) => {signinHandler(e)}}>
<SigninInput type="email" placeholder="email" value={email} onChange={onChangeEmail} />
        <SigninInput type="password" placeholder="password" value={password} onChange={onChangePassword} />
        <LagreButton primary >로그인</LagreButton>
        </form>
        
        <TextOr>Or</TextOr>
        <LagreButton className="btn" onClick={kakaoHandler}><img src='./images/icon/kakao.png' /><div>카카오 계정으로 로그인</div></LagreButton>
        <LagreButton className="btn"><img src='./images/icon/naver.png' /><div>네이버 계정으로 로그인</div> </LagreButton>

        <LeadSignup>아직 회원이 아니신가요?<SignupLink to="/signup" onClick={() => {
          setModalOpen(false);
          setIsOpen(false);
        }}>
            지금 가입하기
          </SignupLink></LeadSignup>
        
          
      </SigninWrapper>
    </SigninContainer>
  ) : null;
}

export default Signin
