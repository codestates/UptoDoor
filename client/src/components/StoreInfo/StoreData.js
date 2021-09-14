import React from 'react'
import {initialStore} from '../dummyData'
import {
  StoreDataContainer,
  StoreDataWrapper,
  StoreFlexDiv,
  StoreInfoTitle,
  StoreIntro,
  StoreImg,
  StoreAddressP,
  StoreInfoP,
  StoreCategory,
  MenuOrderContainer,
  MenuContainer,
  MenuWrapper,
  MenuImg,
  MenuName,
  BtnBox

} from './StyledStoreData'
import {SmallButton,MiddleButton} from '../common/Button/Button'
import { Link } from 'react-router-dom'

const StoreData = () => {
  return (
    <StoreDataContainer>
      <StoreDataWrapper>
        <StoreInfoTitle>가게 정보</StoreInfoTitle>
          <StoreFlexDiv>
            <StoreIntro>
              <StoreImg src = {initialStore[1].img}/>
              <div className = 'store-flex-box flex-box'>
                <span>{initialStore[1].name}</span>
                <StoreCategory>{initialStore[1].category}</StoreCategory>
                <StoreAddressP>{initialStore[1].address}</StoreAddressP>
                <StoreInfoP className = 'store-introduce'>{initialStore[1].introduce}</StoreInfoP>
              </div>
            </StoreIntro>

        <MenuOrderContainer>
          <MenuContainer>
            {initialStore[1].Menu.map((el,idx)=>{
              return (
                <MenuWrapper key = {idx}>
                  <div className = 'menu-flex-box flex-box'>
                    <MenuImg src= {el.image} alt = 'menu-img'/>
                    <div>
                    <MenuName>{el.name}</MenuName>
                    <p>{el.price} 원</p>
                    <p>{el.detail}</p>
                    </div>
                  </div>
                  <SmallButton 
                  className = 'small order-btn'
                  primary>담기
                  </SmallButton>
                </MenuWrapper>
              )
            })}
          </MenuContainer>
        <BtnBox>
        <MiddleButton className = 'middle call-btn'>사장님한테 전화하기</MiddleButton><br/>
        <Link to = '/usercart'><MiddleButton className = 'middle cart-btn'>장바구니</MiddleButton></Link>
        </BtnBox>
      </MenuOrderContainer>
      </StoreFlexDiv>
      </StoreDataWrapper>
    </StoreDataContainer>
  )
}


export default StoreData
