import React, { useEffect } from 'react';
import search from './keyword';
import { MapContainer } from './styledMap'  
import {initialMap} from '../dummyData'

// interface MapProps {
//   Keyword : any,
// }

function Map() {

  useEffect(() => {
    search(initialMap)
    },[initialMap]);  

  return (
    <MapContainer 
    id = 'map'>
    </MapContainer>
  )
}

export default Map
