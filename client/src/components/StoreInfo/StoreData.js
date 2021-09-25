/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import {initialStore} from '../dummyData'
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
import { Container,Title} from "../GlobalStyle";

import { useSelector } from 'react-redux';
import { END_POINTS } from "../../_actions/type";

import StoreImgModal from './StoreImgModal'
import MenuList from './MenuList'


const StoreData = ({id}) => {

  const state = useSelector((state) => state.user);
  const [store, setStore] = useState({})
  const [openModal , setOpenModal] = useState(false);

  const moreImgHandler = () => {
    console.log('d')
    setOpenModal(true);
  }


  useEffect(() => {
    if (state.message === undefined) {
      
      window.location.href = `/`;
      alert("login need");
    } 
  }, [])

  useEffect(() => {
    axios.get(`${END_POINTS}/admin/store/${id}`)
    // axios.get(`${END_POINTS}/store/7`)
      .then((res) => {
        //메세지가 오케이면 
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
              onClick = {moreImgHandler}
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

      {openModal ?
      <StoreImgModal
      openModal = {openModal}
      setOpenModal = {setOpenModal}
      modalTitleText = '모든 이미지 나오는부분'
      modalText = '슬라이드넣을예정'
      modalBtn = '닫기'
      />
      :null    
    }
    </Container>
  );
}


export default StoreData
