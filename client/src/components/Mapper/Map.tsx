import React, { useEffect } from 'react';
import search from './keyword';
import { MapContainer } from './styledMap'  
// import {initialStore} from '../dummyData'
import { useSelector } from 'react-redux';
// interface MapProps {
//   Keyword : any,
// }

function Map({filterClickHandler,selectAddress}:any) {
  const state = useSelector((state) => state);
  const { store }: any = state;
  // useEffect(() => {
  //   search(initialStore, null);
  //   },[initialStore]);  
  
  useEffect(() => {
    search(store, selectAddress,filterClickHandler)
  }, [store,selectAddress])
  
  return (
    <MapContainer
    id = 'map'>
    </MapContainer>
  )
}

export default Map
