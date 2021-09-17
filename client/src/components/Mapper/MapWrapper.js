import React , {useState,useEffect,useRef}  from 'react'
import Map from './Map'
import MapSelectAddress from './MapSelectAddress'
import MapHashtag from './MapHashtag'
import MapInfoModal from '../common/Modal/MapInfoModal'
import MapSearchBar from './MapSearchBar'
import EmptyMap from './EmptyMap'
import { initialStore } from '../dummyData'
import { 

  MapFlexWrapper,
  MapHashWrapper,

} from './styledMap'
import {
  Container,
  // Wrapper,
  Title
} from "../GlobalStyle";

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
  const filterList = initialStore.filter((el)=>{
    if(el.name === Keyword){
      return el;
    }
  })
  const filterHashList = initialStore.filter((el)=>{
    if(el.category_name === Keyword){
      return el;
    }
  })
  console.log('===filteringHash',filterHashList)

  return (
    <>
      <Container className="map-wrapper-container">
        <Title>구독 찾기</Title>
        <MapFlexWrapper>
        <MapHashWrapper>
          {/* 주소선택 컴포넌트 */}
          <MapSelectAddress/>
          {/* 주소찾기 컴포넌트  */}
          <MapSearchBar
          inputRef={inputRef}
          searchSubmitHandler = {searchSubmitHandler}
          />
          {/* 해시태그 컴포넌트 */}
          <MapHashtag/>
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
        </MapHashWrapper>
        {/* 지도 컴포넌트 */}
        <Map
        Keyword = {Keyword}
        dataSet = {dataSet}
        />
        </MapFlexWrapper>
        </Container>
    </>
  )
}

export default MapWrapper
