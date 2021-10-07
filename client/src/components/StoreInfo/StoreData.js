/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StoreDataWrapper,
  StoreIntro,
  StoreName,StoreImgBox,
  StoreImg, StoreBackImg,
  StoreAddressP,
  StoreInfoP,
  StoreCategory,
  EmptyStoreImg,
}
from './StyledStoreData'
import { Container, Title, Wrapper } from "../GlobalStyle";

import { useDispatch, useSelector } from 'react-redux';
import { END_POINTS } from "../../_actions/type";
import StoreImgModal from './StoreImgModal'
import MenuList from './MenuList'


const StoreData = ({id}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  
  const [store, setStore] = useState({image:[]})
  const [openModal , setOpenModal] = useState(false);

  const moreImgHandler = () => {
    setOpenModal(true);
  }

  useEffect(() => {
    if (state.message === undefined) {
      
      window.location.href = `/`;
      alert("login need");
    } 
  }, [])

  useEffect(() => {
    axios.get(`${END_POINTS}/admin/store/${id}`).then((res) => {
      setStore(res.data.storeData);
    });
  }, []);
  
  return (
    <Container>
      <Title>가게 정보</Title>
      <Wrapper>
        <StoreDataWrapper>
          <StoreIntro>
            <div className="store-flex-box flex-box">
              <StoreName>🏠 {store.name}</StoreName>
              <StoreCategory>{store.category}</StoreCategory>
            </div>

            <StoreImgBox className="store-img-box">
              <StoreImg
                src={store.image && store.image[0]}
                className="first-img"
              />

              <div>
                {store.image.length < 2 ? (
                  <EmptyStoreImg className="second-img empty-secont-img"></EmptyStoreImg>
                ) : (
                  <StoreImg src={store.image[1]} className="second-img" />
                )}

                <StoreBackImg
                  style={{
                    backgroundImage: `url(${store.image[2]})`,
                  }}
                  className="additional-img"
                  onClick={moreImgHandler}
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
          <MenuList store={store} />
        </StoreDataWrapper>
      </Wrapper>
      {openModal ? (
        <StoreImgModal
          store={store}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ) : null}
    </Container>
  );
}


export default StoreData
