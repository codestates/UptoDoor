import React from 'react';
import { Link } from 'react-router-dom';
import { mapDummy } from './mapDummy'; 
import { 
  MapInfoContainer,
  MapInfoWrapper,
  StoreImg,
  StoreName,
  StoreAddress
  } from './styledMap'

interface MapInfoProps{
  mapData : any,
  // setKeyword  :any
}

console.log(mapDummy[0].Store);

function MapInfo({mapData} : MapInfoProps) {
  console.log('===mapData===',mapData);

  // function clickChange(e:any){
  //   let clickWord = e.currentTarget.children[0].textContent
  //   setKeyword(clickWord)
  // }

  return (
    <MapInfoContainer className = 'mapinfo-container'>
      <MapInfoWrapper className = 'mapinfo-wrapper'>
        <Link to ='/storeinfo'>
          <StoreImg src = '' alt = '업체사진'/>
          <div>
          <StoreName>{mapDummy[1].Store.name}</StoreName>
          <StoreAddress>Location_<span>{mapDummy[1].Store.address}</span></StoreAddress>
          </div>
        </Link>
      </MapInfoWrapper>
    </MapInfoContainer>
  )
}

export default MapInfo

      {/* {mapData && mapData.map((el:any,idx:number)=>{
        return (
            <div 
            key = {idx}
            className = 'mapinfo-wrapper' 
            onClick={clickChange}>
              <Link to ='/storeinfo'>
                <img src = '' alt = '업체사진'/>
                <h2>{el.place_name}</h2>
                <p>Location_<span>{el.address_name}</span></p>
              </Link>
            </div>
        )
      })} */}