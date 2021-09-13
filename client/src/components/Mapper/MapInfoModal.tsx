import React from 'react';
import { Link } from 'react-router-dom';
// import { mapDummy } from './mapDummy'; 
import { 
  MapInfoContainer,
  MapInfoWrapper,
  StoreImg,
  StoreName,
  StoreAddress
  } from './styledMap'

interface MapInfoProps{
  mapData : any,
  setKeyword  :any
}

function MapInfoModal({mapData ,setKeyword} : MapInfoProps) {
  // console.log('===mapData===',mapData);

  function clickChange(e:any){
    let clickWord = e.currentTarget.children[0].textContent
    setKeyword(clickWord)
  }

  return (
    <MapInfoContainer mobile className = 'mapinfo-container'>
      {mapData && mapData.map((el:any,idx:number)=>{
        return (
            <MapInfoWrapper 
            key = {idx}
            className = 'mapinfo-wrapper' 
            onClick={clickChange}>
              <Link to ='/storeinfo'>
                <StoreImg src = '' alt = '업체사진'/>
                <div>
                <StoreName>{el.place_name}</StoreName>
                <StoreAddress>{el.address_name}</StoreAddress>
                </div>
              </Link>
            </MapInfoWrapper>
        )
      })}
    </MapInfoContainer>
  )
}

export default MapInfoModal


      // <MapInfoWrapper className = 'mapinfo-wrapper'>
      //   <Link to ='/storeinfo'>
      //     <StoreImg src = '' alt = '업체사진'/>
      //     <div>
      //     <StoreName>{mapDummy[1].Store.name}</StoreName>
      //     <hr/>
      //     <StoreAddress>{mapDummy[1].Store.address}</StoreAddress>
      //     </div>
      //   </Link>
      // </MapInfoWrapper>