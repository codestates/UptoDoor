import React from 'react'
import { Link } from 'react-router-dom'

function AdminProfile() {
  return (
    <div>
      <h2>AdminProfile</h2>
      <p>상호명 / 사장닉네임</p>
      <Link to = '/adminedit'></Link>
    </div>
  )
}

export default AdminProfile
