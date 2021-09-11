import React, { useState , useCallback, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SIGNUP } from '../../_actions/type'
// import { signUp } from '../../_actions/user_action'
import {SignupContainer} from './StyledSignup'

function SignupWrapper() {

  let history = useHistory();
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [certEmail, setCertEmail] = useState(false);
  const [nickname , setNickname] = useState('');
  const [mobile, setMobile] = useState('');

  const [password , setPassword] = useState('');
  const [passwordChk, setPasswordChk] = useState('');
  const [passwordRegErr , setPasswordRegErr ] = useState(false);
  const [passwordErr , setPasswordErr ] = useState(false);

  let userinfo = {
    email,password,nickname,mobile
  }
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    if(password !== passwordChk) return setPasswordErr(true);
    if(passwordRegErr === true) return setPasswordRegErr(true);
    if(certEmail === false) return setCertEmail(true)
    
    dispatch({
      type : SIGNUP,
      payload : userinfo
    })
    // .then((res)=>{
    //   if(res.payload.success){
    //     console.log(res.payload);
    //     history.push('/')
    //   }else{
    //     console.log('회원가입 실패');
    //   }
    // })
  }

  const emailHandler = useCallback((e) => {
    setEmail(e.target.value);
  },[])

  //email 인증버튼 핸들러
  const certEmailHandler = () => {
    //axios post 로 담아 보내기만하면됨. 
    //userinfo.email.then((res)=>확인모달(트루))
    //.catch((err)=>이미 존재합니다 모달(트루))
    console.log(userinfo.email)
  }

  const pwHandler = useCallback((e) => {
    setPassword(e.target.value);
    let pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,12}$/;
    setPasswordRegErr(!pwRegExp.test(e.target.value));
  },[])

  const pwChkHandler = useCallback((e) => {
    setPasswordChk(e.target.value);
    setPasswordErr(e.target.value !== password);
  },[password])

  const nicknameHandler = useCallback((e) => {
    setNickname(e.target.value);
  },[])
  
  const mobileHandler = useCallback((e) => {
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

  return (
    <SignupContainer>
      <form onSubmit = {signupSubmitHandler}>
        <label>E-mail</label>
        <input 
        required
        type = 'email' 
        placeholder = 'email@email.com'
        value = {email} 
        onChange = {emailHandler}
        />
        <button onClick = {()=>certEmailHandler(certEmail)}>
          이메일 인증</button>
        {certEmail ? 
        <p>이메일 인증은 필수입니다.</p>
        : null}

        <label>Password</label>
        <input 
        required
        type = 'password' 
        placeholder = 'password'
        value = {password} 
        onChange = {pwHandler}
        /><br/>
        {passwordRegErr ? 
        <p>비밀번호는 최소 6자리에서 12자리 사이의 영문,숫자 조합이어야 합니다.</p>
        : null}

        <label>Password Check</label>
        <input 
        required
        type = 'password' 
        placeholder = 'password check'
        value = {passwordChk} 
        onChange = {pwChkHandler}
        /><br/>
        {passwordErr ? 
        <p>비밀번호가 일치하지 않습니다.</p>
        :null}
        
        <label>Nickname</label>
        <input 
        required
        type = 'text' 
        placeholder = '닉네임'
        value = {nickname} 
        onChange = {nicknameHandler}
        /><br/>

        <label>Mobile</label>
        <input
        required
        type = 'text' 
        placeholder = '모바일'
        value = {mobile} 
        onChange = {mobileHandler}
        /><br/>
        <button type = 'submit'>회원가입</button>
        <button onClick = {()=>{history.back()}} >취소</button>
      </form>
    </SignupContainer>
  )
}

export default SignupWrapper
