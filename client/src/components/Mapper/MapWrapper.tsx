import React , {useState,useEffect,useRef}  from 'react'
import Map from './Map'
import MapSelectAddress from './MapSelectAddress'
import MapHashtag from './MapHashtag'
import MapInfoModal from './MapInfoModal'
import MapSearchBar from './MapSearchBar'
import EmptyMap from './EmptyMap'

import { 
  MapWrapperContainer,
  MapFlexWrapper,
  MapHashWrapper,
} from './styledMap'
import {
  // Container,
  // Wrapper,
  Title
} from "../GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  getFitteredStore,
  getFitteredBySearch,
  getStoreData,
} from "../../_actions/store_action";


function MapWrapper() {
  const dispatch:any = useDispatch();
  const state = useSelector((state) => state);
  const { store }:any = state;
  console.log("state", state);
  const inputRef:any = useRef();
  useEffect(() => {
    inputRef.current.focus();
  })
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [selectAddress, setSelectAddress] = useState("");
  const [selectAddressDetail, setSelectAddressDetail] = useState('')
  // setmapData 에 필터링한 값 담아서 보여주기
  // 나온 데이터 값의 name 과 place_name의 이름이 같은것을 좌표로 보여준다. 
  //* submit 설치 섭밋
  const searchSubmitHandler = (e:any) => {
    e.preventDefault();
    console.log("serrchsubmit", e.target[0].value);
    // if(word === ''){
    //   word = '동네 구독서비스'
    // }
    dispatch(getFitteredBySearch(e.target[0].value));
  } 
  // const categoryFilter = () => {
  // console.log('===filteringHashClick',filterHashList)
  // setOpenInfoModal(true);
  // }
  const filterListHandler = (hastag:string) => {
    dispatch(getFitteredStore(hastag))
    if (hastag === "all" || hastag === "") {
      setOpenInfoModal(false);
    } else {
      setOpenInfoModal(true);
    }
  };

  const [filteredList, setFilterList] = useState([]);
  const filterClickHandler = (address: string) => {
    console.log("adadasd", address);
    console.log("Adsadasd", store);
    const filtered = store.filter((el: any) => {
      // console.log("el",el)
      return el.address === address
    })
    console.log("filtered", filtered);
    setFilterList(filtered);
    setOpenInfoModal(true);
  }
  
  useEffect(() => {
    dispatch(getStoreData())
  }, [])

  useEffect(() => {
    setFilterList(store);
  }, [store])
  
  return (
    <>
      <MapWrapperContainer className="container">
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
            <MapHashtag 
            filterListHandler={filterListHandler} 
            filterList={undefined} 
            openInfoModal={undefined} 
            mapData={undefined} />
            <EmptyMap 
            filteredList={filteredList} 
            openInfoModal={openInfoModal} />
          </MapHashWrapper>

          {/* 지도 컴포넌트 */}
          <Map
            filterClickHandler={filterClickHandler}
            selectAddress={selectAddress}
          />
        </MapFlexWrapper>
        
        {openInfoModal ? 
          <MapInfoModal 
          mobile 
          filteredList={filteredList} />
          : 
          null}
      </MapWrapperContainer>
    </>
  );
}

export default MapWrapper
