import React, { useCallback,useState,useEffect } from 'react'
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

function Signin({ setIsOpen, modalOpen, setModalOpen }: Iprops):any {
  const dispatch:any = useDispatch()
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
    dispatch(signIn(userinfo))
      .then((res: any) => {
        if (res.payload.message  === 'login success') {
          window.location.href="http://localhost:3000/"
        } else {
          alert('로그인 실패하였습니다.');
        }
      })
      .catch((err: any) => {
        console.log(err)
      });
  },[email,password])
  
  const kakaoHandler = useCallback((e) => {
    e.preventDefault();
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=a89491b2f53a7e437ff1a3f92347a22f&redirect_uri=http://localhost:3000/&response_type=code"; 
  },[email,password])

  const naverHandler = useCallback((e) => {
    e.preventDefault();
    window.location.href = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=NESPZSGxrp2Y8chEbfUk&state=a5VP580J66&redirect_uri=http://localhost:3000/"; 
  },[email,password])
  
  useEffect(()=>{
    const url = new URL(window.location.href)
    console.log("url",url)
    const authorizationCode = url.searchParams.get('code')
    const state = url.searchParams.get('state')
    //인가코드,state값 둘다 있으면 네이버로그인
    if (authorizationCode && state) {
      console.log("인가코드",authorizationCode)
      console.log("state값",state)
      axios.post('http://localhost:3060/oatuh/naver/login',
      {
        authorizationCode:authorizationCode,
        state:state
      }
      ).then((res)=>{
        console.log("res",res.data);
       // window.location.href ='/'
      })
    //인가코드만 있으면 카카오 로그인        
    }else if(authorizationCode) {
      console.log("인가코드",authorizationCode)        
      axios.post('http://localhost:3060/oauth/kakao/login',
      {authorizationCode:authorizationCode}
      ).then((res)=>{
        console.log("res",res.data);
       //window.location.href ='/'
      })
    }
  },[])
  
  const logOutHandler = useCallback((e) => {
    axios.post('http://localhost:3060/users/signout')
    .then((res)=>{
      console.log("로그아웃 응답",res.data)
    })
  },[])

  const kakaoLogOutHandler = useCallback((e) => {
    axios.post('http://localhost:3060/oauth/kakao/logout')
    .then((res)=>{
      console.log("로그아웃 응답",res.data)
    })
  },[])
  
  return modalOpen ? (
    <SigninContainer>
      <SigninWrapper>
          <Logo>UptoDoor</Logo>
        <Icon onClick={() => { setModalOpen(false) }}>
          <i className="fas fa-times"></i>
        </Icon>
        <form onSubmit={(e) => {signinHandler(e)}} >
        <SigninInput type="email" placeholder="email" value={email} onChange={onChangeEmail} />
        <SigninInput type="password" placeholder="password" value={password} onChange={onChangePassword} />
        <LagreButton primary >로그인</LagreButton>
        </form>
        <button onClick={kakaoLogOutHandler}>카카오로그아웃</button>
        <TextOr>Or</TextOr>
        <LagreButton className="btn" onClick={kakaoHandler}><img src='./images/icon/kakao.png' /><div>카카오 계정으로 로그인</div></LagreButton>
        <LagreButton className="btn" onClick={naverHandler}><img src='./images/icon/naver.png' /><div>네이버 계정으로 로그인</div> </LagreButton>

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
