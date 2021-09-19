import React from 'react'
import {initialStore} from '../dummyData'
import MenuList from './MenuList'
import {
  StoreDataWrapper,
  StoreIntro,
  StoreName,
  StoreImg,
  StoreBackImg,
  StoreAddressP,
  StoreInfoP,
  StoreCategory,
}
from './StyledStoreData'
import {
  Container,
  Title
} from "../GlobalStyle";


const StoreData = () => {
  return (
    <Container>
      <Title>가게 정보</Title>
        <StoreDataWrapper>
            <StoreIntro>
              <div className = 'store-flex-box flex-box'>
                <StoreName>🏠 {initialStore[1].name}</StoreName>
                <StoreCategory>{initialStore[1].category}</StoreCategory>
              </div>
              <div className = 'store-img-box'>
                <StoreImg src = {initialStore[1].image[0]}/>
                <StoreImg src = {initialStore[1].image[1]}/>
                <StoreBackImg 
                style = {{backgroundImage : `url(${initialStore[1].image[3]})`}}
                className = 'additional-img'>+</StoreBackImg>
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
    </Container>
  )
}


export default StoreData
