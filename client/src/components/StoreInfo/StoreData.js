import React from 'react'
import { Link } from 'react-router-dom'

const StoreData = () => {
  return (
    <div>
    <h2>StoreData</h2>
      <h3>쑥까페</h3>
      <div>메뉴 이미지 / 메뉴이름 / 가격</div>
      <button>사장님한테 전화하기</button><br/>
      <Link to = '/usercart'><button>장바구니</button></Link>
    </div>
  )
}


export default StoreData
