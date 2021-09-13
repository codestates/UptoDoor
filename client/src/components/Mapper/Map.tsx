import React, { useEffect } from 'react';
import search from './keyword';
import { MapContainer } from './styledMap'

// interface MapProps {
//   Keyword : any,
//   dataSet : any,
// }

function Map() {

  // console.log('===',dataSet);
  useEffect(() => {
    search()
    },[]);  

  return (
    <MapContainer 
    id = 'map'>
    </MapContainer>
  )
}

export default Map
