import React from 'react'
import { Link } from 'react-router-dom'
import { MapInfoContainer } from './styledMap'

interface MapInfoProps{
  mapData : any,
  setKeyword  :any
}

function MapInfo({mapData,setKeyword} : MapInfoProps) {
  console.log('===mapData===',mapData);

  function clickChange(e:any){
    let clickWord = e.currentTarget.children[0].textContent
    setKeyword(clickWord)
  }

  return (
    <MapInfoContainer>
      {mapData && mapData.map((el:any,idx:number)=>{
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
      })}
    </MapInfoContainer>
  )
}

export default MapInfo
