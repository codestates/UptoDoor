import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  MapInfoContainer,
  MapInfoWrapper,
  StoreImg,
  StoreName,
  StoreAddress,MapAppContainer,LinkR
  } from './styledMap'
import {ArrowBtn} from '../common/Button/Button'
import { selectStore } from '../../_actions/cart_action';
function MapInfoModal({filteredList}:any) {
  const dispatch:any = useDispatch()
  // console.log('===mapData===',mapData);

  //click 했을때 e.target.innerText 가 없으면 모달로 동네를 선택해야 합니다.
  //아니면 링크필터
  //온클릭  : if(e.target.innerText === '' )셋 오픈모달 트루 
  const moveStoreHandler = (id:number) => {
    dispatch(selectStore(id))
  }
  
  return (
    <MapAppContainer>
    <MapInfoContainer mobile className = 'mapinfo-container'>
      {filteredList && filteredList.map((el: any) => {
        return (
          <MapInfoWrapper onClick={() => { moveStoreHandler(el.id)}}
          key = {el.id}
          className = 'mapinfo-wrapper'>
            
            <StoreImg 
            src = {el.image.length === 0 ? '' :el.image[0] } alt = '업체사진'/>
            <div>
            <StoreName>{el.name}</StoreName>
            <StoreAddress>{el.address}</StoreAddress>
            </div>

            <LinkR to={`/storeinfo/${el.id}`} >
              <ArrowBtn 
              className="fas fa-angle-double-right">
              </ArrowBtn>
          </LinkR>
          </MapInfoWrapper>
        )
      })}
      </MapInfoContainer>
      </MapAppContainer>
  )
}

export default MapInfoModal


      // {mapData && mapData.map((el:any,idx:number)=>{
      //   return (
      //       <MapInfoWrapper 
      //       key = {idx}
      //       className = 'mapinfo-wrapper' 
      //       onClick={clickChange}>
      //         <Link to ='/storeinfo'>
      //           <StoreImg src = '' alt = '업체사진'/>
      //           <div>
      //           <StoreName>{el.place_name}</StoreName>
      //           <StoreAddress>{el.address_name}</StoreAddress>
      //           </div>
      //         </Link>
      //       </MapInfoWrapper>
      //   )
      // })}