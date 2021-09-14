import React from 'react';
import { Link } from 'react-router-dom';
// import { initialMap } from '../dummyData'
import { 
  MapInfoContainer,
  MapInfoWrapper,
  StoreImg,
  StoreName,
  StoreAddress
  } from './styledMap'

interface MapInfoProps{
  mapData : any,
  filterList : any
  // setKeyword  :any,
}

function MapInfoModal({filterList} : MapInfoProps) {
  // console.log('===mapData===',mapData);

  // function clickChange(e:any){
  //   let clickWord = e.currentTarget.children[0].textContent
  //   setKeyword(clickWord)
  // }

  return (
    <MapInfoContainer mobile className = 'mapinfo-container'>
      {filterList.map((el:any,idx:any)=>{
        return (
          <MapInfoWrapper 
          key = {idx}
          // clickChange = {clickChange}
          className = 'mapinfo-wrapper'>
          <Link to ='/storeinfo'>
            <StoreImg src = '' alt = '업체사진'/>
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