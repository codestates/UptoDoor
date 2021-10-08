import React , {useState,useEffect,useRef}  from 'react'
import Map from './Map'
import MapSelectAddress from './MapSelectAddress'
import MapHashtag from './MapHashtag'
import MapInfoModal from './MapInfoModal'
import MapSearchBar from './MapSearchBar'
import EmptyMap from './EmptyMap'

import { 
  MapFlexWrapper,
  MapHashWrapper,
} from './styledMap'
import {
  Container,
  Wrapper,
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
  
  //* submit 설치 섭밋
  const searchSubmitHandler = (e:any) => {
    e.preventDefault();
    dispatch(getFitteredBySearch(e.target[0].value));
  } 
  
  const filterListHandler = (hastag:string) => {
    dispatch(getFitteredByHastag(hastag))
    if (hastag === "all" || hastag === "") {
      setOpenInfoModal(false);
    } else {
      setOpenInfoModal(true);
    }
  };

  const hashtagClickHandler = (markers: any) => {
    const filtered = store.filter((el: any) => {
      for (let i = 0; i < markers.length; i++){
        if (markers[i].address == el.address) {
          return el;
        }
      }
    })
    setFilterList(filtered);
    setOpenInfoModal(true);
  }
  const filterClickHandler = (address: string) => {
    const filtered = store.filter((el: any) => {
      return el.address === address
    })
    setFilterList(filtered);
    setOpenInfoModal(true);
  }
  const pointThree = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success");
      }, 100);
    });
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    pointThree().then(() => {
      dispatch(getStoreData()).then(() => {
        dispatch(removeAllCart());
        setLoading(false);
      })
      
    })
    
  }, [])

  useEffect(() => {
      setFilterList(store);
  }, [store])
  
  return (
    <>
      <Container className="container">
        <Title>구독 찾기</Title>
        <Wrapper>
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
            hashtagClickHandler={hashtagClickHandler}
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
        </Wrapper>
      </Container>
    </>
  );
}

export default MapWrapper
