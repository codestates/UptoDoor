import React from 'react'
import Map from '../components/Mapper/Map'
import MapHashtag from '../components/Mapper/MapHashtag'
import MapInfo from '../components/Mapper/MapInfo'
import MapSearchBar from '../components/Mapper/MapSearchBar'

const Mapper = () => {
  return (
    <>
      <Map/>
      <MapHashtag/>
      <MapInfo/>
      <MapSearchBar/>
    </>
  )
}

export default Mapper
