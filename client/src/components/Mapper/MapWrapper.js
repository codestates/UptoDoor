import React , {useState,useEffect,useRef}  from 'react'
import Map from './Map'
import MapHashtag from './MapHashtag'
import MapInfo from './MapInfoModal'
import MapSearchBar from './MapSearchBar'
import { MapWrapperContainer } from './styledMap'

function MapWrapper() {

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  })

  const [Keyword, setKeyword] = useState("동네 구독서비스");
  const [mapData, setmapData] = useState([]);
  const [openInfoModal , setOpenInfoModal] = useState(false);

  const dataSet = (e) => {
    setmapData(e)
  } 

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setOpenInfoModal(true);
    let word = e.target[0].value;
    if(word === ''){
      word = '동네 구독서비스'
    }
    setKeyword(word)
  } 

  return (
    <MapWrapperContainer className="kakaoMap">
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

      {openInfoModal ? 
      <MapInfo
      mapData={mapData}
      setKeyword = {setKeyword}
      />
      : 
      null
      }
    </MapWrapperContainer>
  )
}

export default MapWrapper
