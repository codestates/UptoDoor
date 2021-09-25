import React,{useState} from 'react'
import { MiddleButton } from '../common/Button/Button'
import { 
  MapSelectAddressWrapper,
  SelectAddressBox,
} from './styledMap'
import MapSelectModal from './MapSelectModal';
import {useDispatch, useSelector } from 'react-redux'
import {setAddress} from '../../_actions/cart_action'

function MapSelectAddress({ selectAddress, setSelectAddress,selectAddressDetail,setSelectAddressDetail }:any):any {
  //* 주소 가져오기
  const state = useSelector((state) => state);
  const { user }:any = state;
  const { mainAddress, mainAddressDetail, subAddress, subAddressDetail } = user;
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const MapSelectModalHandler = () => {
    setOpenModal(true);
  };
  const closeModal = (e:any) => {
    setOpenModal((prev) => !prev);
    // 버튼0번째면 sampleAdd.home 표시, 버튼1번째면 sampleAdd.office 표시 변수에 담아주고
    // resultAdd 의 state 에 값 넣기.
    // console.log(e.target.innerText);
    if (e.target.innerText === "HOME") {
      dispatch(setAddress(mainAddress, mainAddressDetail));
      setSelectAddress(mainAddress);
      setSelectAddressDetail(mainAddressDetail)
    } else if (e.target.innerText === "OFFICE") {
      dispatch(setAddress(subAddress, subAddressDetail));
      setSelectAddress(subAddress);
      setSelectAddressDetail(subAddressDetail)
    }
  };

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
          openModal={openModal}
          closeModal={closeModal}
          selectAddress={selectAddress}
          modalTitleText="동네를 선택하세요"
        />
      ) : null}
    </>
  );
}

export default MapSelectAddress
