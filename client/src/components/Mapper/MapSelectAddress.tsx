import React,{useState} from 'react'
import { MiddleButton } from '../common/Button/Button'
import { 
  MapSelectAddressWrapper,
  SelectAddressBox,
} from './styledMap'
import MapSelectModal from './MapSelectModal';
import {useDispatch, useSelector } from 'react-redux'
import {setAddress} from '../../_actions/cart_action'
import ConfirmModal from '../common/Modal/ConfirmModal';
import Auth from '../../hoc/auth'

function MapSelectAddress({ selectAddress, setSelectAddress,selectAddressDetail,setSelectAddressDetail,setLoginModal }:any):any {
  //* 주소 가져오기
  const state = useSelector((state) => state);
  const { user }:any = state;
  const { mainAddress, mainAddressDetail, subAddress, subAddressDetail } = user;
  const [openModal, setOpenModal] = useState(false);
  const [selectFailModal, setSelectFailModal] = useState(false);
  const dispatch = useDispatch();

  const MapSelectModalHandler = () => {
    if (!user.message) {
      setLoginModal(true)
    } else {
      setOpenModal(true);
    }
    
  };
  const selctModal = (e:any) => {

    if (e.target.innerText === "HOME") {
      if (!mainAddress && !mainAddressDetail) {
        setSelectFailModal(true)
      }
      dispatch(setAddress(mainAddress, mainAddressDetail));
      setSelectAddress(mainAddress);
      setSelectAddressDetail(mainAddressDetail)
      setOpenModal(false);
    } else if (e.target.innerText === "OFFICE") {
      if (!subAddress && !subAddressDetail) {
        setSelectFailModal(true)
      }
      dispatch(setAddress(subAddress, subAddressDetail));
      setSelectAddress(subAddress);
      setSelectAddressDetail(subAddressDetail)
      setOpenModal(false);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  }
  return (
    <>
      <MapSelectAddressWrapper>
        <SelectAddressBox className="dd">
          <MiddleButton
            onClick={MapSelectModalHandler}
            primary
            className="mobile-middle-btn"
          >
            {selectAddress ? `${selectAddress} ${selectAddressDetail}` : "위치를 설정해주세요" }
          </MiddleButton>
        </SelectAddressBox>
      </MapSelectAddressWrapper>

      {openModal ? (
        <MapSelectModal
          closeModal={closeModal}
          openModal={openModal}
          selctModal={selctModal}
          selectAddress={selectAddress}
          modalTitleText="동네를 선택하세요"
        />
      ) : null}
      {selectFailModal ? 
        <ConfirmModal
        openModal={selectFailModal}
          url='/mapper'
          modalTitleText="주소 선택"
          modalText="주소가 없습니다. 주소를 인증해주세요"
          modalBtn="확인"
          setOpenModal={setSelectFailModal}
        />
      : null}
    </>
  );
}

export default MapSelectAddress
