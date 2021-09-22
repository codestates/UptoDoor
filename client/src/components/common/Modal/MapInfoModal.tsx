import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  MapInfoContainer,
  MapInfoWrapper,
  StoreImg,
  StoreName,
  StoreAddress
  } from '../../Mapper/styledMap'

function MapInfoModal() {
  const state = useSelector((state) => state)
  const { store }:any = state;
  // console.log('===mapData===',mapData);

  //click 했을때 e.target.innerText 가 없으면 모달로 동네를 선택해야 합니다.
  //아니면 링크필터
  //온클릭  : if(e.target.innerText === '' )셋 오픈모달 트루 

  return (
    <MapInfoContainer mobile className = 'mapinfo-container'>
      {store.map((el: any, idx: any) => {
        return (
          <MapInfoWrapper 
          key = {idx}
          className = 'mapinfo-wrapper'>
          <Link to ='/storeinfo' >
            <StoreImg 
            src = {el && el.store_image.length === 0 ? '' :el.store_image[0] } alt = '업체사진'/>
            <div>
            <StoreName>{el.name}</StoreName>
            <hr/>
            <StoreAddress>{el.address}</StoreAddress>
            </div>
          </Link>
          </MapInfoWrapper>
        )
      })}
    </MapInfoContainer>
  )
}

export default MapInfoModal


      // {mapData && mapData.map((el:any,idx:number)=>{
      //   return (
      //       <MapInfoWrapper 
      //       key = {idx}
      //       className = 'mapinfo-wrapper' 
      //       onClick={clickChange}>
      //         <Link to ='/storeinfo'>
      //           <StoreImg src = '' alt = '업체사진'/>
      //           <div>
      //           <StoreName>{el.place_name}</StoreName>
      //           <StoreAddress>{el.address_name}</StoreAddress>
      //           </div>
      //         </Link>
      //       </MapInfoWrapper>
      //   )
      // })}