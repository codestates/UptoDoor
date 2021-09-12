import React from 'react'

function SignupTerms() {
  return (
    <div>
      <label>
        <input type = 'checkbox' name = 'terms' value = 'term1'/>
        <span>최종 이용자 이용약관</span>에 동의합니다.
        </label><br/>
        <label>
        <input type = 'checkbox' name = 'terms' value = 'term2'/>
        <span>개인정보 취급정책</span>에 동의합니다.
        </label><br/>
    </div>
  )
}

export default SignupTerms
