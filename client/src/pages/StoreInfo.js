import React from 'react';
import { useParams } from 'react-router-dom';
import StoreData from '../components/StoreInfo/StoreData'

function StoreInfo() {
  let { id } = useParams();
  return (
    <>
      <StoreData id={id} />
    </>
  )
}

export default StoreInfo
