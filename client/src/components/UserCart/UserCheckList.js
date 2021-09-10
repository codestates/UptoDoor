import React from 'react'
import { Link } from 'react-router-dom'

function UserCheckList() {
  return (
    <div>
      <h2>UserCheckList</h2>
      구독기간,요일별,배달시간 <br/> 
      <Link to = '/userorder'><button>주문하기</button></Link>
      <button>전체삭제하기</button>
    </div>
  )
}

export default UserCheckList
