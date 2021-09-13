import React from 'react'
import {Link} from 'react-router-dom'

function MyProfile() {
  return (
    <div>
      <h2>MyProfile</h2>
      <p>이메일,닉네임</p>
      <Link to = '/adminpost'><button>내 가게 등록</button></Link>
      <Link to = '/mypageedit'><button>프로필 수정</button></Link><br/>
      {/* 이미 등록된 상태라면 */}
      <Link to = '/adminpage'><button>내 가게 관리</button></Link>
    
    </div>
  )
}

export default MyProfile
