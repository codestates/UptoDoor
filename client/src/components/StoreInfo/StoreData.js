/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
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
import { useSelector } from 'react-redux';


const StoreData = ({id}) => {
  // const paramsArr = id.split("-");
  // const indicator = paramsArr[0];
  // const pathParameter = paramsArr[1];
  const state = useSelector((state) => state.store);
  

  useEffect(() => {
    console.log("Elel", id);
    console.log("스토어인포", state.store_id);
  }, [])
  return (
    <Container>
      <Title>가게 정보</Title>
      <StoreDataWrapper>
        <StoreIntro>
          <div className="store-flex-box flex-box">
            <StoreName>🏠 {initialStore[1].name}</StoreName>
            <StoreCategory>{initialStore[1].category}</StoreCategory>
          </div>
          <div className="store-img-box">
            <StoreImg src={initialStore[1].store_image[0]} />
            <StoreImg src={initialStore[1].store_image[1]} />
            <StoreBackImg
              style={{
                backgroundImage: `url(${initialStore[1].store_image[3]})`,
              }}
              className="additional-img"
            >
              +
            </StoreBackImg>
          </div>
          <div className="store-detail-box">
            <StoreAddressP>📍 {initialStore[1].address}</StoreAddressP>
            <StoreAddressP>📱 {initialStore[1].mobile}</StoreAddressP>
            <hr />
            <StoreInfoP className="store-introduce">
              {initialStore[1].introduce}
            </StoreInfoP>
          </div>
        </StoreIntro>

        {/* 메뉴리스트 컴포넌트 */}
        <MenuList />
      </StoreDataWrapper>
    </Container>
  );
}


export default StoreData
