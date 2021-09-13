import React , {useState,useEffect,useRef}  from 'react'
import Map from './Map'
import MapHashtag from './MapHashtag'
import MapInfo from './MapInfo'
import MapSearchBar from './MapSearchBar'
import { MapWrapperContainer } from './styledMap'

function MapWrapper() {

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  })

  const [Keyword, setKeyword] = useState("동네 구독서비스");
  const [mapData, setmapData] = useState([]);

  const dataSet = (e) => {
    setmapData(e)
  } 

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    let word = e.target[0].value;
    if(word === ''){
      word = '동네 구독서비스'
    }
    setKeyword(word)
  } 

  return (
    <MapWrapperContainer>
      <MapSearchBar
      setKeyword={setKeyword}
      inputRef={inputRef}
      searchSubmitHandler = {searchSubmitHandler}
      />
      <MapHashtag/>
      <Map
      Keyword = {Keyword}
      dataSet = {dataSet}
      />
      <MapInfo
      mapData={mapData}
      setKeyword = {setKeyword}
      />
    </MapWrapperContainer>
  )
}

export default MapWrapper
