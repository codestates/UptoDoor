import React from 'react'
import { 
  MapSearchBarContainer,
  MapSearchInput,
} from './styledMap'
import { SmallButton } from '../common/Button/Button'


interface MapSearchProps {
  inputRef : any,
  searchSubmitHandler : any,
}

function MapSearchBar({inputRef , searchSubmitHandler} : MapSearchProps) {

  return (
    <MapSearchBarContainer>
      <form onSubmit={searchSubmitHandler}>
        <MapSearchInput 
        ref = {inputRef}
        type = 'text' 
        placeholder = '동네 구독서비스를 조회하세요.'/>
      <SmallButton
      className = 'map-search-btn'
      primary
      >
        <i className="fas fa-search-location"></i>
      </SmallButton>
      </form>
    </MapSearchBarContainer>
  )
}

export default MapSearchBar
