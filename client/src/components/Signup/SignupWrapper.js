import React, { useState , useCallback, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SIGNUP } from '../../_actions/type'
// import { signUp } from '../../_actions/user_action'
import {SignupContainer} from './StyledSignup'
import SignupOptions from './SignupOptions'
import SignupTerm from './SignupTerm'

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
  // const [term, setTerm] = useState('');
  const [termErr, setTermErr] = useState(false);
  const [ttlTerm, setTtlTerm] = useState(false);

  const signupSubmitHandler = useCallback((e) => {
    e.preventDefault();
    if(password !== passwordChk) return setPasswordErr(true);
    if(passwordRegErr === true) return setPasswordRegErr(true);
    if(certEmail === false) return setCertEmail(true);
    // if(!term) return setTermErr(true);

    let userinfo = {
      email,password,nickname,mobile,
      gender,age,ttlTerm
    }

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
  },[email,password,passwordChk,certEmail])

  const onChangeEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
  },[])

  //email 인증버튼 핸들러
  const certEmailHandler = () => {
    //axios post 로 담아 보내기만하면됨. 
    //userinfo.email.then((res)=>확인모달(트루))
    //.catch((err)=>이미 존재합니다 모달(트루))
    console.log(email)
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
  },[])
  
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
      setGender(e.target.value);
    }else if(name === '연령대'){
      setAge(e.target.value);
    }
  }

  const cancleHandler = () => {
    history.push('/');
  }

  return (
    <SignupContainer>
      <form onSubmit = {signupSubmitHandler}>
        <label>E-mail</label><span>필수</span><br/>
        <input 
        required
        type = 'email' 
        placeholder = 'email@email.com'
        value = {email} 
        onChange = {onChangeEmailHandler}
        />
        <button onClick = {()=>certEmailHandler(certEmail)}>
          이메일 인증</button>
        {certEmail ? 
        <p>이메일 인증은 필수입니다.</p>
        : null}
        <br/>

        <label>Password</label><span>필수</span><br/>
        <input 
        required
        type = 'password' 
        placeholder = 'password'
        value = {password} 
        onChange = {onChangePwHandler}
        /><br/>
        {passwordRegErr ? 
        <p>비밀번호는 최소 6자리에서 12자리 사이의 영문,숫자 조합이어야 합니다.</p>
        : null}

        <label>Password Check</label><span>필수</span><br/>
        <input 
        required
        type = 'password' 
        placeholder = 'password check'
        value = {passwordChk} 
        onChange = {onChangePwChkHandler}
        /><br/>
        {passwordErr ? 
        <p>비밀번호가 일치하지 않습니다.</p>
        :null}
        
        <label>Nickname</label><span>필수</span><br/>
        <input 
        required
        type = 'text' 
        placeholder = '닉네임'
        value = {nickname} 
        onChange = {onChangeNicknameHandler}
        /><br/>

        <label>Mobile</label><span>필수</span><br/>
        <input
        required
        type = 'text' 
        placeholder = '모바일'
        value = {mobile} 
        onChange = {onChangeMobileHandler}
        /><br/>

        <SignupOptions 
        selectInputHandler = {selectInputHandler}
        />

        <SignupTerm
        setTermErr={setTermErr}
        setTtlTerm = {setTtlTerm}
        />
        {termErr ? 
          <p>약관에 모두 동의하셔야 합니다.</p> 
          : null}

        <button type = 'submit'>회원가입</button>
        <button onClick = {cancleHandler}>취소</button>
      </form>
    </SignupContainer>
  )
}

export default SignupWrapper
