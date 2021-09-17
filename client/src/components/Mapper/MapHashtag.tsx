import React from 'react'
import { initialHash } from '../dummyData'
import { 
  MapHashtagWrapper,
  MapHashTagBox } from './styledMap'
import { SmallButton } from '../common/Button/Button'
import MapInfoModal from '../common/Modal/MapInfoModal';

interface Category {
  filterList : any,
  openInfoModal : any,
  mapData : any,
  categoryFilter: any
}

function MapHashtag({openInfoModal,mapData,filterList,categoryFilter}:Category) {
  return (
    <MapHashtagWrapper className = 'hashtag-wrapper'>
      <MapHashTagBox className = 'hashtag-box'>
      {initialHash.map((el,idx)=>{
        return (
            <SmallButton 
            key = {idx} 
            className = 'hashtag-category-btn'
            onClick = {categoryFilter}
            >
            <p>{el.category}</p>
            </SmallButton>
        )
      })}         
      </MapHashTagBox>

      {openInfoModal?
      <MapInfoModal
        mapData = {mapData}
        filterList = {filterList}
      />
      :null}
    </MapHashtagWrapper>
  )
}

export default MapHashtag
