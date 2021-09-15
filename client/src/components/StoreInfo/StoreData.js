import React from 'react'
import {initialStore} from '../dummyData'
import MenuList from './MenuList'
import {
  StoreDataContainer,
  StoreDataWrapper,
  StoreInfoTitle,
  StoreIntro,
  StoreName,
  StoreImg,
  StoreBackImg,
  StoreAddressP,
  StoreInfoP,
  StoreCategory,
}
from './StyledStoreData'


const StoreData = () => {
  return (
    <StoreDataContainer>
      <StoreInfoTitle>가게 정보</StoreInfoTitle>
        <div className = 'line'></div>
        <StoreDataWrapper>
            <StoreIntro>
              <div className = 'store-flex-box flex-box'>
                <StoreName>🏠 {initialStore[1].name}</StoreName>
                <StoreCategory>{initialStore[1].category}</StoreCategory>
              </div>
              <div className = 'store-img-box'>
                <StoreImg src = {initialStore[1].img}/>
                <StoreImg src = {initialStore[1].img}/>
                <StoreBackImg className = 'additional-img'>+</StoreBackImg>
              </div>
              <div className = 'store-detail-box'>
              <StoreAddressP>📍 {initialStore[1].address}</StoreAddressP>
              <StoreAddressP>📱 {initialStore[1].mobile}</StoreAddressP>
              <hr/>
              <StoreInfoP className = 'store-introduce'>{initialStore[1].introduce}</StoreInfoP>
              </div>
            </StoreIntro>
            
            {/* 메뉴리스트 컴포넌트 */}
            <MenuList/>
      </StoreDataWrapper>
    </StoreDataContainer>
  )
}


export default StoreData
