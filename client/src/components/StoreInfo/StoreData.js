/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import {initialStore} from '../dummyData'
import {
  StoreDataWrapper,
  StoreIntro,
  StoreName,StoreImgBox,
  StoreImg, StoreBackImg,
  StoreAddressP,
  StoreInfoP,
  StoreCategory,
}
from './StyledStoreData'
import { Container,Title} from "../GlobalStyle";

import { useDispatch, useSelector } from 'react-redux';
import { END_POINTS} from "../../_actions/type";
import { selectStore } from '../../_actions/cart_action';
import StoreImgModal from './StoreImgModal'
import MenuList from './MenuList'


const StoreData = ({id}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [store, setStore] = useState({image:[]})
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
    dispatch(selectStore(id));
    axios.get(`${END_POINTS}/admin/store/${id}`)
    .then((res) => {
        //메세지가 오케이면
        console.log("스토어 넘버", res.data);
        res.data.storeData;
        console.log('!!!store!!!==:',res.data.storeData)
        return setStore(res.data.storeData);
        
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  
  return (
    <Container>
      <Title>가게 정보</Title>
      <StoreDataWrapper>
        <StoreIntro>
          <div className="store-flex-box flex-box">
            <StoreName>🏠 {store.name}</StoreName>
            <StoreCategory>{store.category}</StoreCategory>
          </div>

          <StoreImgBox className="store-img-box">
            <StoreImg src={store.image[0]} className = 'first-img' />

            <div>
            <StoreImg src={store.image[1]} className = 'second-img'/>
            <StoreBackImg
              style={{
                backgroundImage: `url(${store.image[2]})`,
              }}
              className="additional-img"
              onClick = {moreImgHandler}
              >
              +
            </StoreBackImg>
            </div>

          </StoreImgBox>

          <div className="store-detail-box">
            <StoreAddressP>📍 {store.address}</StoreAddressP>
            <StoreAddressP>📱 {store.number}</StoreAddressP>
            <hr />
            <StoreInfoP className="store-introduce">
              {store.introduce}
            </StoreInfoP>
          </div>
        </StoreIntro>

        {/* 메뉴리스트 컴포넌트 */}
        <MenuList 
        store = {store}
        />
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
