import React from 'react'

function MapSearchBar() {

  return (
    <div>
      <h2>MapSearchBar</h2>
        <input type = 'text' placeholder = '원하는 카테고리를 입력하세요.'></input><br/>
        <input type = 'radio' name = 'main-address' value = 'main-address' defaultChecked/>집
        <input type = 'radio' name = 'sub-address' value = 'sub-address' />회사
    </div>
  )
}

export default MapSearchBar
