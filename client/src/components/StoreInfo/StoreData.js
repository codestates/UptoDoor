/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { END_POINTS } from "../../_actions/type";


const StoreData = ({id}) => {

  const state = useSelector((state) => state.user);
  const [sotre, setStore] = useState({})


  useEffect(() => {
    if (state.message === undefined) {
      
      window.location.href = `/`;
      alert("login need");
    } 
  }, [])

  useEffect(() => {
    axios.get(`${END_POINTS}/store/${id}`)
    // axios.get(`${END_POINTS}/store/7`)
      .then((res) => {
        console.log("스토어 넘버", res.data);
        return setStore(res.data);
        
    }).catch((err) => {
      console.log(err);
    })
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
