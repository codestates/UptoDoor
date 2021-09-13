import React from 'react'
import { mapDummy } from './mapDummy'
import { 
  MapHashtagWrapper } from './styledMap'
import { SmallButton } from '../common/Button/Button'

function MapHashtag() {
  return (
    <MapHashtagWrapper className = 'hashtag-wrapper'>
      <div className = 'hashtag-box'>
      {mapDummy.map((el,idx)=>{
        return (
            <SmallButton 
            key = {idx} 
            primary
            className = 'hashtag-category-btn'
            >
            <p>{el.category}</p>
            </SmallButton>
        )
      })}         
      </div>
    </MapHashtagWrapper>
  )
}

export default MapHashtag
