import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  MapInfoContainer,
  MapInfoWrapper,
  StoreImg,
  StoreName,
  StoreAddress,MapAppContainer,MoveBtn
  } from './styledMap'
import {ArrowBtn} from '../common/Button/Button'
import { selectStore } from '../../_actions/cart_action';
import { useHistory } from 'react-router';
function MapInfoModal({cart, filterList, setLoginModal, message,setSelectAddressModal }: any) {
  const history: any = useHistory();
  const dispatch:any = useDispatch()
  // console.log('===mapData===',mapData);

  //click 했을때 e.target.innerText 가 없으면 모달로 동네를 선택해야 합니다.
  //아니면 링크필터
  //온클릭  : if(e.target.innerText === '' )셋 오픈모달 트루 
  const moveStoreHandler = (id: number) => {
    if (!message) {
      setLoginModal(true);
    } else {
      if (!cart.selected_address) {
        setSelectAddressModal(true)
      } else {
        dispatch(selectStore(id));
        history.push(`/storeinfo/${id}`)
      }
      
    }
    
  }
  
  return (
    <MapAppContainer>
    <MapInfoContainer mobile className = 'mapinfo-container'>
      {filterList && filterList.map((el: any) => {
        return (
          <MapInfoWrapper 
          key = {el.id}
          className = 'mapinfo-wrapper'>
            
            <StoreImg 
            src = {el.image.length === 0 ? '' :el.image } alt = '업체사진'/>
            <div>
            <StoreName>{el.name}</StoreName>
            <StoreAddress>{el.address}</StoreAddress>
            </div>

            <MoveBtn onClick={() => { moveStoreHandler(el.id)}}>
              <ArrowBtn
              className="fas fa-angle-double-right">
              </ArrowBtn>
          </MoveBtn>
          </MapInfoWrapper>
        )
      })}
      </MapInfoContainer>
      </MapAppContainer>
  )
}

export default MapInfoModal
