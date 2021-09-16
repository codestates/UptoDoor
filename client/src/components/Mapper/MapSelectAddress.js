import React,{useState} from 'react'
import { MiddleButton } from '../common/Button/Button'
import { 
  MapSelectAddressWrapper,
  SelectAddressBox,
} from './styledMap'
import MapSelectModal from '../common/Modal/MapSelectModal';
import {useDispatch } from 'react-redux'
import {setAddress} from '../../_actions/cart_action'

function MapSelectAddress() {

  const [selectAddress , setSelectAddress] = useState('동네를 선택하세요')
  const [openModal ,setOpenModal] = useState(false);
  const sampleAdd =[    
    {home : '서울시 용산구 후암동 123-1',
    office : '서울시 마포구 합정동 456-7'},
  ]
  const dispatch = useDispatch();
  const MapSelectModalHandler = () => {
    setOpenModal(true);
  }
  const closeModal = (e) => {
    setOpenModal((prev)=>!prev);
    // 버튼0번째면 sampleAdd.home 표시, 버튼1번째면 sampleAdd.office 표시 변수에 담아주고
    // resultAdd 의 state 에 값 넣기.
    // console.log(e.target.innerText);
    if(e.target.innerText === 'HOME'){
      const home = dispatch(setAddress(sampleAdd[0].home))
      // console.log('home',home)
      setSelectAddress(home.payload);
    }else if(e.target.innerText === 'OFFICE'){
      const office = dispatch(setAddress(sampleAdd[0].office))
      setSelectAddress(office.payload);
    }
  }

  return (
    <>
    <MapSelectAddressWrapper>
      <SelectAddressBox className= 'dd'>
        <MiddleButton
        onClick = {MapSelectModalHandler} 
        primary
        className = 'mobile-middle-btn'>{selectAddress}</MiddleButton>
      </SelectAddressBox>
    </MapSelectAddressWrapper>

    {openModal ?
    <MapSelectModal 
    openModal={openModal}
    closeModal={(e)=>closeModal(e)} 
    selectAddress = {selectAddress}
    modalTitleText = '동네를 선택하세요'
    />
    :
    null}
    </>
  )
}

export default MapSelectAddress
