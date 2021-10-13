import React from "react";
import { SmallButton } from "../common/Button/Button";
import {
  MenuWrapper,
  MenuImg,
  MenuName,
  MenuPrice,
  MenuDetail,
} from "./StyledStoreData";
import { stringToPrice } from "../../utils/validation";
interface ItemProps {
  addCartHandler: any;
  item: any;
}

function Item({ addCartHandler, item }: ItemProps) {
  return (
    <MenuWrapper key={item.id}>
      <div className="menu-flex-box flex-box">
        <MenuImg src={item.image} alt="menu-img" />
        <div>
          <MenuName>{item.name}</MenuName>
          <MenuPrice>{stringToPrice(item.price)} 원</MenuPrice>
          <MenuDetail>{item.detail}</MenuDetail>
        </div>
      </div>
      <SmallButton
        onClick={() => addCartHandler(item.id)}
        className="small order-btn"
        primary
      >
        담기
        {/* <i className="fas fa-cart-arrow-down"></i> */}
      </SmallButton>
    </MenuWrapper>
  );
}

export default Item;
