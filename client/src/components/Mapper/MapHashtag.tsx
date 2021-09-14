import React from 'react'
import { initialHash } from '../dummyData'
import { 
  MapHashtagWrapper } from './styledMap'
import { SmallButton } from '../common/Button/Button'
import MapInfoModal from './MapInfoModal';

interface Category {
  filterList : any,
  openInfoModal : any,
  mapData : any,
  categoryFilter: any
}

function MapHashtag({openInfoModal,mapData,filterList,categoryFilter}:Category) {
  return (
    <MapHashtagWrapper className = 'hashtag-wrapper'>
      <div className = 'hashtag-box'>
      {initialHash.map((el,idx)=>{
        return (
            <SmallButton 
            key = {idx} 
            className = 'hashtag-category-btn'
            onClick = {categoryFilter}
            >
            <p>{el.category_name}</p>
            </SmallButton>
        )
      })}         
      </div>

      {openInfoModal?
      <MapInfoModal
        // mobile  
        mapData = {mapData}
        filterList = {filterList}
      />
      :null}
    </MapHashtagWrapper>
  )
}

export default MapHashtag
