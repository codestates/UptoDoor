import React from 'react'
import Map from '../components/Mapper/Map'
import MapHashtag from '../components/Mapper/MapHashtag'
import MapInfo from '../components/Mapper/MapInfo'
import MapSearchBar from '../components/Mapper/MapSearchBar'

const Mapper = () => {
  return (
    <>
      <MapSearchBar/>
      <MapHashtag/>
      <Map/>
      <MapInfo/>
    </>
  )
}

export default Mapper
