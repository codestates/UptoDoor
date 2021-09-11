import React from 'react'

interface Terms {
  termHandler : any;
}

function SignupTerm({termHandler}:Terms) {
  return (        
    <div>
      <label>
        <input 
        type = 'checkbox' 
        onChange = {termHandler}
        />
      <span>최종 이용자 이용약관</span>에 동의합니다.
      </label>
  
      <label>
        <input 
        type = 'checkbox' 
        onChange = {termHandler}
        />
      <span>개인정보 취급정책</span>에 동의합니다.
      </label>
    </div>
  )
}

export default SignupTerm
