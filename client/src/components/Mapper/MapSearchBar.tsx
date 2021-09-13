import React from 'react'
import { MapSearchBarContainer } from './styledMap'

interface MapSearchProps {
  inputRef : any,
  searchSubmitHandler : any,
}

function MapSearchBar({inputRef , searchSubmitHandler} : MapSearchProps) {

  return (
    <MapSearchBarContainer>
      <form onSubmit={searchSubmitHandler}>
        <input 
        ref = {inputRef}
        type = 'text' 
        placeholder = '동네 구독서비스를 조회하세요.'/>
      <button>
        <i className="fas fa-search-location"></i>
      </button>
      </form>
    </MapSearchBarContainer>
  )
}

export default MapSearchBar
