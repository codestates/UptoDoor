import React , {useState,useEffect,useRef}  from 'react'
import Map from './Map'
import MapSelectAddress from './MapSelectAddress'
import MapHashtag from './MapHashtag'
import MapInfoModal from '../common/Modal/MapInfoModal'
import MapSearchBar from './MapSearchBar'
import EmptyMap from './EmptyMap'

import { 
  MapFlexWrapper,
  MapHashWrapper,
} from './styledMap'
import {
  Container,
  // Wrapper,
  Title
} from "../GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  getFitteredStore,
  getFitteredBySearch,
  getStoreData,
  getFitteredByClick,
} from "../../_actions/store_action";
import store from '../../store/store'


function MapWrapper() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.store);
  console.log("state", state);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  })
  const [mapData, setmapData] = useState([]);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [selectAddress, setSelectAddress] = useState("");
  const [selectAddressDetail, setSelectAddressDetail] = useState('')
  // setmapData 에 필터링한 값 담아서 보여주기
  // 나온 데이터 값의 name 과 place_name의 이름이 같은것을 좌표로 보여준다. 
  const dataSet = (e) => {
    if(filterList.address === e[0].address_name){
      setmapData(e)
    }
  }
  //* submit 설치 섭밋
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setOpenInfoModal(true);
    // if(word === ''){
    //   word = '동네 구독서비스'
    // }
    dispatch(getFitteredBySearch(e.target[0].value));
  } 
  // const categoryFilter = () => {
  // console.log('===filteringHashClick',filterHashList)
  // setOpenInfoModal(true);
  // }
  const filterListHandler = (hastag) => {
    dispatch(getFitteredStore(hastag));
  };

  const filterClickHandler = (address) => {
    console.log("filteredclick", address);
    dispatch(getFitteredByClick(address));
  }
  
  useEffect(() => {
    getStoreData()
  }, [])
  
  return (
    <>
      <Container className="map-wrapper-container">
        <Title>구독 찾기</Title>
        <MapFlexWrapper>
          <MapHashWrapper>
            {/* 주소선택 컴포넌트 */}
            <MapSelectAddress
              setSelectAddress={setSelectAddress}
              selectAddress={selectAddress}
              setSelectAddressDetail={setSelectAddressDetail}
              selectAddressDetail={selectAddressDetail}
            />
            {/* 주소찾기 컴포넌트  */}
            <MapSearchBar
              inputRef={inputRef}
              searchSubmitHandler={searchSubmitHandler}
            />
            {/* 해시태그 컴포넌트 */}
            <MapHashtag filterListHandler={filterListHandler} />
            {openInfoModal || store.length !== 0 ? (
              <MapInfoModal mobile mapData={mapData} filterList={store} />
            ) : (
              <EmptyMap />
            )}
          </MapHashWrapper>
          {/* 지도 컴포넌트 */}
          <Map
            dataSet={dataSet}
            filterClickHandler={filterClickHandler}
            selectAddress={selectAddress}
          />
        </MapFlexWrapper>
      </Container>
    </>
  );
}

export default MapWrapper
