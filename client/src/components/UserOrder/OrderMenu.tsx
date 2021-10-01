import React from 'react'
import {
  MenuWrapper,
  MenuItemWrapper,
  MenuItemDetail,
  OrderH3,
  MenuUl,
  MenuContainer,
} from "./StyledUserOrder";
import { stringToPrice } from '../../utils/validation';
const OrderMenu = ({menu}:any) => {
  return (
    <MenuContainer>
          <OrderH3 primary>정기구독 상품 정보</OrderH3>
          <MenuWrapper>
            <MenuUl>
              <li>상품 정보</li>
              <li>수량</li>
              <li>가격</li>
            </MenuUl>
            {/* 사용설명 nav 느낌 */}
            {menu &&
              menu.map((item:any) => {
                return (
                  <MenuItemWrapper key={item.id}>
                    <img src={item.image} alt="" />
                    <MenuItemDetail>
                      <h5>{item.name}</h5>
                      <div>
                        <span>수량</span> {item.quantity} 개
                      </div>
                      <div>
                        <span>가격</span> {stringToPrice(item.price)} 원
                      </div>
                    </MenuItemDetail>
                  </MenuItemWrapper>
                );
              })}
          </MenuWrapper>
        </MenuContainer>
  )
}

export default OrderMenu
