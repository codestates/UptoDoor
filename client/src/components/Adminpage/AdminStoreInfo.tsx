import React from 'react'
import {
  MypageOrderListWrapper,
  OrderListWrapper
} from "../Mypage/StyledMypage";
import { StoreTitle,StoreDesc,StoreDescContent,StoreDescImg,StoreMenu ,MenuDesc,MenuImg} from './StyledAdminPage'

const AdminStoreInfo = () => {
  return (
      <MypageOrderListWrapper>
      <OrderListWrapper >
        <StoreDescContent>
          <StoreTitle>
            <h2>쑥이네 공방</h2>
            <div>food</div>
          </StoreTitle>
          <StoreDescImg>
            <img src="" alt="store"></img>
          </StoreDescImg>
          <StoreDesc>
            <h3>스토어 정보</h3>
            <div>
              <span>주소:</span>
              <p> 서울시 용산구 신흥로32길 4-33(용산동2가)</p>
            </div>
            <div><span>연락처:</span><p> 010-7185-2791</p></div>
            <div><span>영업시간:</span><p> 11:00 - 21:00</p></div>
            <div><span>가게 설명:</span><p> 녹사평역이나 이태원역 아무데서나 와도 접근성이 좋은 녹9 입니다. 깔끔하고 안전한 왁싱샵에 맞기세요 영업시간 : 11:00 - 21:00  </p></div>
            <div></div>
          </StoreDesc>
          <StoreMenu>
            <h3>메뉴 정보</h3>
            <div>
              <MenuImg src="" alt="menu" />
              <MenuDesc>
                <h4>녹구녹구</h4>
                <p>가격</p>
                <p>설명asdjlaksdjklafjklafjkl</p>
              </MenuDesc>
              
            </div>
          </StoreMenu>
        </StoreDescContent> 
         
        </OrderListWrapper>
    </MypageOrderListWrapper>
  )
}

export default AdminStoreInfo
