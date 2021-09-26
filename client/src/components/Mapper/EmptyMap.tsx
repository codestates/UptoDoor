/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux';
import {
  EmptyMapContainer,
  MapInfoWrapper,
  StoreImg,
  StoreName,
  StoreAddress,
  MapInfoWebContainer,
  MoveBtn,
} from "./styledMap";
import {ArrowBtn} from '../common/Button/Button'
import { selectStore } from '../../_actions/cart_action';
function EmptyMap({ filterList, openInfoModal, message, setLoginModal }:any) {
const dispatch:any = useDispatch()
const moveStoreHandler = (id: number) => {
  if (!message) {
    setLoginModal(true);
  }
  dispatch(selectStore(id));
};


  return (
    <EmptyMapContainer>
      {!openInfoModal ? (
        <div className="empty">
          <i className="fas fa-search-location"></i>
          <p>조회 된 항목이 없습니다.</p>
        </div>
      ) : (
        <MapInfoWebContainer>
          {filterList &&
            filterList.map((el:any) => {
              return (
                <MapInfoWrapper key={el.id} className="mapinfo-wrapper">
                  <StoreImg
                    src={el.image.length === 0 ? "" : el.image[0]}
                    alt="업체사진"
                  />
                  <div>
                    <StoreName>{el.name}</StoreName>
                    <StoreAddress>{el.address}</StoreAddress>
                  </div>

                  <MoveBtn>
                    <ArrowBtn
                      onClick={() => {
                        moveStoreHandler(el.id);
                      }}
                      className="fas fa-angle-double-right"
                    ></ArrowBtn>
                  </MoveBtn>
                </MapInfoWrapper>
              );
            })}
        </MapInfoWebContainer>
      )}
    </EmptyMapContainer>
  );
}

export default EmptyMap
