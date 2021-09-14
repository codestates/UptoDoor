import React , {useState,useEffect,useRef}  from 'react'
import Map from './Map'
import MapSelectAddress from './MapSelectAddress'
import MapHashtag from './MapHashtag'
import MapInfoModal from './MapInfoModal'
import MapSearchBar from './MapSearchBar'
import EmptyMap from './EmptyMap'
import { initialMap , initialHash } from '../dummyData'
import { MapTitleH1 , MapWrapperContainer } from './styledMap'

function MapWrapper() {

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  })

  const [Keyword, setKeyword] = useState(''); 
  const [mapData, setmapData] = useState([]);
  const [openInfoModal , setOpenInfoModal] = useState(false);
  // setmapData 에 필터링한 값 담아서 보여주기
  // 나온 데이터 값의 name 과 place_name의 이름이 같은것을 좌표로 보여준다. 

  const dataSet = (e) => {
    if(filterList.address === e[0].address_name){
      setmapData(e)
    }
  } 
  
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setOpenInfoModal(true);
    let word = e.target[0].value;
    // if(word === ''){
    //   word = '동네 구독서비스'
    // }
    setKeyword(word)
  } 

  // const categoryFilter = () => {
  // console.log('===filteringHashClick',filterHashList)
  // setOpenInfoModal(true);
  // }

  const filterList = initialMap.filter((el)=>{
    if(el.name === Keyword){
      return el;
    }
  })
  const filterHashList = initialHash.filter((el)=>{
    if(el.category_name === Keyword){
      return el;
    }
  })
  console.log('===filteringHash',filterHashList)

  return (
    <>
    <MapTitleH1>구독찾기</MapTitleH1>
      <MapWrapperContainer className="map-wrapper-container">
        <div className = 'search-hash-wrapper'>
        <MapSelectAddress/>
        <MapSearchBar
        inputRef={inputRef}
        searchSubmitHandler = {searchSubmitHandler}
        />
        <MapHashtag
        />
        {openInfoModal && filterList.length !== 0 ? 
        <MapInfoModal
        mobile  
        mapData = {mapData}
        filterList = {filterList}
        setKeyword = {setKeyword}
        />
        : 
        <EmptyMap/>
        }
        </div>
        <Map
        Keyword = {Keyword}
        dataSet = {dataSet}
        />
        </MapWrapperContainer>
    </>
  )
}

export default MapWrapper
