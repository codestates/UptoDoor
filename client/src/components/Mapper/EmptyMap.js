/* eslint-disable react/prop-types */
import React from 'react'
import {
  EmptyMapContainer,
  MapInfoWrapper,
  StoreImg,
  StoreName,
  StoreAddress,
  MapInfoWebContainer,
} from "./styledMap";
import { Link } from 'react-router-dom';
function EmptyMap({ filteredList, openInfoModal }) {
  return (
    <EmptyMapContainer>
      {!openInfoModal ? (
        <div className="empty">
          <i className="fas fa-search-location"></i>
          <p>조회 된 항목이 없습니다.</p>
        </div>
      ) : (
        <MapInfoWebContainer>
          {filteredList &&
            filteredList.map((el) => {
              return (
                <MapInfoWrapper
                  onClick={() => {
                    moveStoreHandler(el.id);
                  }}
                  key={el.id}
                  className="mapinfo-wrapper"
                >
                  <Link to={`/storeinfo/${el.id}`}>
                    <StoreImg
                      src={el.store_image.length === 0 ? "" : el.store_image[0]}
                      alt="업체사진"
                    />
                    <div>
                      <StoreName>{el.name}</StoreName>
                      <hr />
                      <StoreAddress>{el.address}</StoreAddress>
                    </div>
                  </Link>
                </MapInfoWrapper>
              );
            })}
        </MapInfoWebContainer>
      )}
    </EmptyMapContainer>
  );
}

export default EmptyMap
