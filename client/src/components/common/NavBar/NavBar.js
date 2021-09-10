import React from 'react'
import Signin from '../../Signin/Signin'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <ul>
        <Link to = '/'><li>홈</li></Link>
        <li><Signin/></li>
        <Link to = '/signup'><li>회원가입</li></Link>
        <Link to = '/mypage'><li>마이페이지</li></Link>
        <Link to = '/mapper'><li>[Map]우리동네 정기구독</li></Link>
        <Link to = '/address'><li>[Address]동네 등록하기</li></Link>
      </ul>
    </div>
  )
}

export default NavBar
