import React, { useEffect } from 'react';
import search from './keyword';
import { MapContainer } from './styledMap'  
import { useSelector } from 'react-redux';

function Map({filterClickHandler,selectAddress,hashtagClickHandler}:any) {
  const state = useSelector((state) => state);
  const { store }: any = state;
  
  useEffect(() => {
    search(store, selectAddress,filterClickHandler,hashtagClickHandler)
  }, [store,selectAddress])
  
  return (
    <MapContainer
    id = 'map'>
    </MapContainer>
  )
}

export default Map
