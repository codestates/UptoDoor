import React, { useEffect } from 'react';
import search from './keyword';
import { MapContainer } from './styledMap'

interface MapProps {
  Keyword : any,
  dataSet : any,
}

function Map({Keyword , dataSet}:MapProps) {

  // console.log('===',dataSet);
  useEffect(() => {
    search(Keyword,dataSet)
    },[Keyword]);  

  return (
    <MapContainer 
    id = 'map'>
    </MapContainer>
  )
}

export default Map
