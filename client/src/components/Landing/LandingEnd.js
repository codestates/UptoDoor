import React from 'react'
import {LandingEndContainer} from './StyledLanding'

const LandingEnd = () => {
  return (
    <LandingEndContainer>
      <h4>용산구에서 <br/> 1,513명의 유저가<br/>만족하고있습니다.</h4>
      <select>
        <option value = 'yongsan'>용산구</option>
        <option value = 'jongro' >종로구</option>
        <option value = 'mapo' >마포구</option>
      </select>
      <br/>
      <button>로그인 모달</button>
    </LandingEndContainer>
  )
}

export default LandingEnd
