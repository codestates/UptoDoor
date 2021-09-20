import React, { useEffect } from 'react';
import search from './keyword';
import { MapContainer } from './styledMap'  
import {initialStore} from '../dummyData'

// interface MapProps {
//   Keyword : any,
// }

function Map() {

  useEffect(() => {
    search(initialStore)
    },[initialStore]);  

  return (
    <MapContainer
    id = 'map'>
    </MapContainer>
  )
}

export default Map
