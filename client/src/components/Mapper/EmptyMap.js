/* eslint-disable react/prop-types */
import React from 'react'
import {
  EmptyMapContainer,
  MapInfoWrapper,
  StoreImg,
  StoreName,
  StoreAddress,
  MapInfoWebContainer,
  LinkR,
} from "./styledMap";
import {ArrowBtn} from '../common/Button/Button'

function EmptyMap({ filterList, openInfoModal }) {
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
            filterList.map((el) => {
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

                  <LinkR to={`/storeinfo/${el.id}`}>
                    <ArrowBtn className="fas fa-angle-double-right"></ArrowBtn>
                  </LinkR>
                </MapInfoWrapper>
              );
            })}
        </MapInfoWebContainer>
      )}
    </EmptyMapContainer>
  );
}

export default EmptyMap
