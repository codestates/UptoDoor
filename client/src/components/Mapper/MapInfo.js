import React from 'react'
import {Link} from 'react-router-dom'

function MapInfo() {
  return (
    <div>
    <h2>MapInfo</h2>
      <Link to ='/storeinfo'>
        <img src = '' alt = '업체사진'/>
        <h4>[food] 쑥카페</h4>
        <p>서울시 용산구 후암동 111-11</p>
      </Link>
    </div>
  )
}

export default MapInfo
