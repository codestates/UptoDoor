import React from 'react'
import {EmptyMapContainer} from './styledMap'

function EmptyMap() {
  return (
    <EmptyMapContainer>
      <i className="fas fa-search-location"></i>
      조회 된 항목이 없습니다.
    </EmptyMapContainer>
  )
}

export default EmptyMap
