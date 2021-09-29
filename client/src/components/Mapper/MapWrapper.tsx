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
  getFitteredByHastag,
  getFitteredBySearch,
  getStoreData,
} from "../../_actions/store_action";
import { removeAllCart } from '../../_actions/cart_action'
import ConfirmModal from '../common/Modal/ConfirmModal'

function MapWrapper() {
  const dispatch: any = useDispatch();
  const user = useSelector((state: any) => state.user);
  const store = useSelector((state: any) => state.store);
  const cart = useSelector((state: any) => state.cart)
  const inputRef:any = useRef();
  useEffect(() => {
    inputRef.current.focus();
  })
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [selectAddress, setSelectAddress] = useState("");
  const [selectAddressDetail, setSelectAddressDetail] = useState('')
  const [filterList, setFilterList] = useState([]);
  const [loginModal, setLoginModal] = useState(false)
  const [selectAddressModal, setSelectAddressModal] = useState(false)
  // setmapData 에 필터링한 값 담아서 보여주기
  // 나온 데이터 값의 name 과 place_name의 이름이 같은것을 좌표로 보여준다. 
  //* submit 설치 섭밋
  const searchSubmitHandler = (e:any) => {
    e.preventDefault();
    // console.log("serrchsubmit", e.target[0].value);
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
    dispatch(getFitteredByHastag(hastag))
    if (hastag === "all" || hastag === "") {
      setOpenInfoModal(false);
    } else {
      setOpenInfoModal(true);
    }
  };

  const clickHashtagHandler = (markers: any) => {
    // console.log("markers클릭", markers)
    const filtered = store.filter((el: any) => {
      for (let i = 0; i < markers.length; i++){
        if (markers[i].address == el.address) {
          return el;
        }
      }
    })
    // console.log("filter", filtered);
    setFilterList(filtered);
    setOpenInfoModal(true);
  }
  const filterClickHandler = (address: string) => {
    // console.log("adadasd", address);
    // console.log("Adsadasd", store);
    const filtered = store.filter((el: any) => {
      // console.log("el",el)
      return el.address === address
    })
    // console.log("filtered", filtered);
    setFilterList(filtered);
    setOpenInfoModal(true);
  }
  
  useEffect(() => {
    dispatch(getStoreData()).then(() => {
      dispatch(removeAllCart());
    })
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
              setLoginModal={setLoginModal}
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
            filterList={filterList} 
            openInfoModal={undefined} 
            mapData={undefined} />

            {/* emptymap */}
            <EmptyMap
            cart = {cart}
            setSelectAddressModal={setSelectAddressModal}
              message={user.message}
              setLoginModal={setLoginModal}
            filterList={filterList} 
            openInfoModal={openInfoModal} />
          </MapHashWrapper>

          {/* 지도 컴포넌트 */}
          <Map
            clickHashtagHandler={clickHashtagHandler}
            filterClickHandler={filterClickHandler}
            selectAddress={selectAddress}
          />
        </MapFlexWrapper>
        
        {openInfoModal ? 
          <MapInfoModal
            cart={cart}
            setSelectAddressModal={setSelectAddressModal}
            message={user.message}
              setLoginModal={setLoginModal}
            mobile
          filterList={filterList} />
          : 
          null}
        {loginModal ? 
          <ConfirmModal
          openModal={loginModal}
          url='/mapper'
          modalTitleText="구독 찾기"
          modalText="로그인이 필요한 서비스 입니다."
          modalBtn="확인"
          setOpenModal={setLoginModal}
          />
          : null}
        {selectAddressModal ? 
          <ConfirmModal
          openModal={selectAddressModal}
          url='/mapper'
          modalTitleText="구독 찾기"
          modalText="주소를 선택해주세요"
          modalBtn="확인"
          setOpenModal={setSelectAddressModal}
          />
        : null}
      </MapWrapperContainer>
    </>
  );
}

export default MapWrapper
